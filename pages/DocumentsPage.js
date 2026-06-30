class DocumentsPage {
  constructor(page) {
    this.page = page;

    this.documentsTab = page.getByRole('link', { name: 'Documents' });
    this.backToListBtn = page.getByRole('button', { name: 'Back to list' });
    this.uploadReportBtn = page.getByRole('button', { name: 'Upload Report' });
    this.searchInput = page.getByRole('textbox', { name: 'Search' });

    this.dateTakenInput = page.getByRole('textbox', { name: 'dd/mm/yyyy' });
    this.noteInput = page.getByRole('textbox', { name: 'Note (Optional)' });
    this.fileDropZone = page.getByLabel('Drop Lab test to attach or');
    this.uploadConfirmBtn = page.getByRole('button', { name: 'Upload', exact: true });
    this.deleteConfirmBtn = page.getByRole('button', { name: 'Yes' });
    this.documentCards = page.locator('[class*="medicalCardsSingle"], [class*="MedicalCardsSingle"]');
    this.deleteIcons = page.locator('.MedicalReports_medicalReportDelete__eLbzu > svg');
    this.noDataMessage = page.locator('h5:has-text("No Data Found"), [class*="noData"], [class*="NoData"]');
  }

  async waitForListReady() {
    await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('[role="status"], .spinner-border, [class*="loader"], [class*="Loader"]')
      .first()
      .waitFor({ state: 'hidden', timeout: 15000 })
      .catch(() => {});
  }

  async openDocumentsTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/medical-reports/${patientId}`);
    await this.waitForListReady();
  }

  async hasDocuments() {
    const hasCard = await this.documentCards.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (hasCard) return true;
    return !(await this.noDataMessage.isVisible({ timeout: 3000 }).catch(() => false));
  }

  async openFirstDocument() {
    await this.documentCards.first().waitFor({ state: 'visible', timeout: 10000 });
    await this.documentCards.first().click();
    await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  async openDocumentByName(fileNamePartial) {
    const card = this.documentCards.filter({ hasText: new RegExp(fileNamePartial, 'i') }).first();
    await card.waitFor({ state: 'visible', timeout: 10000 });
    await card.click();
    await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  async openAllDocuments() {
    await this.documentCards.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    const count = await this.documentCards.count();
    let opened = 0;

    for (let i = 0; i < count; i++) {
      const card = this.documentCards.nth(i);
      const visible = await card.isVisible({ timeout: 3000 }).catch(() => false);
      if (!visible) continue;

      await card.click();
      await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
      await this.goBackToList();
      opened++;
    }

    return opened;
  }

  async openUploadedDocument() {
    await this.openFirstDocument();
  }

  async deleteUploadedDocument() {
    await this.deleteDocument(0);
  }

  async goBackToList() {
    await this.backToListBtn.click();
    await this.waitForListReady();
  }

  async uploadReport(filePath, dateTakenLabel = null, note = '') {
    await this.uploadReportBtn.click();
    await this.dateTakenInput.waitFor({ state: 'visible', timeout: 10000 });

    await this.dateTakenInput.click();
    if (dateTakenLabel) {
      await this.page.getByRole('gridcell', { name: new RegExp(dateTakenLabel, 'i') }).click();
    } else {
      await this.page.getByRole('gridcell', { name: /Choose/i }).first().click();
    }

    if (note) {
      await this.noteInput.click();
      await this.noteInput.fill(note);
    }

    await this.fileDropZone.setInputFiles(filePath);
    await this.uploadConfirmBtn.click();
    await this.waitForListReady();
    await this.documentCards.first().waitFor({ state: 'visible', timeout: 20000 });

    const latestHeading = this.documentCards.first().locator('h5').first();
    const uploadedName = await latestHeading.textContent({ timeout: 5000 }).catch(() => null);
    return uploadedName ? uploadedName.trim() : null;
  }

  async searchDocuments(query) {
    const responsePromise = this.page.waitForResponse(
      resp => resp.url().includes('/medical') && resp.status() === 200,
      { timeout: 10000 }
    ).catch(() => {});

    await this.searchInput.click();
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
    await responsePromise;
    await this.searchInput.waitFor({ state: 'visible', timeout: 5000 });
  }

  async clearSearch() {
    const responsePromise = this.page.waitForResponse(
      resp => resp.url().includes('/medical') && resp.status() === 200,
      { timeout: 10000 }
    ).catch(() => {});

    await this.searchInput.click();
    await this.searchInput.fill('');
    await this.searchInput.press('Enter');
    await responsePromise;
    await this.waitForListReady();
  }

  async deleteDocument(index = 0) {
    const count = await this.deleteIcons.count();
    if (count === 0) {
      throw new Error('No documents available to delete');
    }

    const safeIndex = Math.min(index, count - 1);
    await this.deleteIcons.nth(safeIndex).click();
    await this.deleteConfirmBtn.waitFor({ state: 'visible', timeout: 5000 });
    await this.deleteConfirmBtn.click();
    await this.waitForListReady();
  }
}

module.exports = { DocumentsPage };
