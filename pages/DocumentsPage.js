class DocumentsPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ──────────────────────────────────────────────
    this.documentsTab    = page.getByRole('link', { name: 'Documents' });
    this.backToListBtn   = page.getByRole('button', { name: 'Back to list' });
    this.uploadReportBtn = page.getByRole('button', { name: 'Upload Report' });

    // ── Search ────────────────────────────────────────────────────
    this.searchInput = page.getByRole('textbox', { name: 'Search' });

    // ── Upload form ───────────────────────────────────────────────
    this.dateTakenInput   = page.getByRole('textbox', { name: 'dd/mm/yyyy' });
    this.noteInput        = page.getByRole('textbox', { name: 'Note (Optional)' });
    this.fileDropZone     = page.getByLabel('Drop Lab test to attach or');
    this.uploadConfirmBtn = page.getByRole('button', { name: 'Upload', exact: true });

    // ── Delete confirmation ───────────────────────────────────────
    this.deleteConfirmBtn = page.getByRole('button', { name: 'Yes' });
  }

  // ── Navigate directly to Documents tab by patient ID ─────────
  async openDocumentsTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/medical-reports/${patientId}`);
    await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 15000 });
    // Wait for loading spinner to disappear before interacting
    await this.page.locator('status, [role="status"]').waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  // ── Returns true if the document list has any documents ────────
  async hasDocuments() {
    const noData = this.page.locator('h5:has-text("No Data Found"), [class*="noData"], [class*="NoData"]');
    const isEmpty = await noData.isVisible({ timeout: 3000 }).catch(() => false);
    return !isEmpty;
  }

  // ── Open the first document card ────────────────────────────────
  async openFirstDocument() {
    await this.page
      .locator('.MedicalReports_medicalCardsSingle__EkjVe')
      .first()
      .click();
    await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  // ── Open a document by partial filename match ─────────────────
  // Tries each nth value since different cards use different nth indices
  async openDocumentByName(fileNamePartial) {
    const re = new RegExp(fileNamePartial, 'i');
    // Try nth(1) and nth(2) — Codegen showed both used across different documents
    for (const n of [1, 2, 0]) {
      const card = this.page.locator('div').filter({ hasText: re }).nth(n);
      const visible = await card.isVisible({ timeout: 2000 }).catch(() => false);
      if (visible) {
        await card.click();
        await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
        return;
      }
    }
    throw new Error(`Document matching "${fileNamePartial}" not found`);
  }

  // ── Open all documents one by one and return to list each time ──
  async openAllDocuments() {
    // Get all document card text content to identify them
    const deleteIcons = this.page.locator('.MedicalReports_medicalReportDelete__eLbzu');
    await deleteIcons.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    const count = await deleteIcons.count();
    let opened = 0;
    for (let i = 0; i < count; i++) {
      // Each iteration: get the ith card's clickable area (sibling of delete icon)
      // Navigate up to the card wrapper and click it
      const card = this.page
        .locator('[class*="medicalCardsSingle"], [class*="MedicalCardsSingle"]')
        .nth(i);
      const visible = await card.isVisible({ timeout: 3000 }).catch(() => false);
      if (visible) {
        await card.click();
        await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.goBackToList();
        opened++;
      }
    }
    return opened;
  }

  // ── Open the most recently uploaded document ────────────────
  // Server renames files on upload — use the first card in the list
  async openUploadedDocument() {
    await this.page.locator('[class*="medicalCardsSingle"], [class*="MedicalCardsSingle"]')
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator('[class*="medicalCardsSingle"], [class*="MedicalCardsSingle"]')
      .first()
      .click();
    await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  // ── Delete the most recently uploaded document ──────────────
  // Server renames files on upload so we target the first delete icon in the list
  async deleteUploadedDocument() {
    const deleteIcon = this.page.locator('.MedicalReports_medicalReportDelete__eLbzu > svg').first();
    await deleteIcon.waitFor({ state: 'visible', timeout: 10000 });
    await deleteIcon.click();
    await this.deleteConfirmBtn.waitFor({ state: 'visible', timeout: 5000 });
    await this.deleteConfirmBtn.click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  // ── Go back to document list ──────────────────────────────────
  async goBackToList() {
    await this.backToListBtn.click();
    await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  // ── Upload a report ───────────────────────────────────────────
  // filePath: absolute path to the file
  // dateTaken: gridcell aria-label partial, e.g. 'Choose Thursday, June 25th,'
  //            pass null to skip date selection
  // note: optional string
  async uploadReport(filePath, dateTakenLabel = null, note = '') {
    await this.uploadReportBtn.click();
    await this.dateTakenInput.waitFor({ state: 'visible', timeout: 10000 });

    // Type today's date directly — avoids calendar navigation which breaks
    // across months as dates change. Format required: dd/mm/yyyy
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    await this.dateTakenInput.fill(`${dd}/${mm}/${yyyy}`);
    await this.page.keyboard.press('Escape');

    // Fill optional note
    if (note) {
      await this.noteInput.click();
      await this.noteInput.fill(note);
    }

    // Attach file — click the drop zone button first, then set file
    await this.page
      .getByRole('button', { name: /CardPickImg Drop Lab test to/i })
      .first()
      .click();
    await this.fileDropZone.setInputFiles(filePath);

    // Confirm upload
    await this.uploadConfirmBtn.click();
    await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 20000 });

    // Return the heading text of the most recently uploaded file
    // Server renames files with a timestamp prefix — we can't predict the name
    const latestCard = this.page.locator('[class*="medicalCardsSingle"] h5, [class*="MedicalCardsSingle"] h5').first();
    const uploadedName = await latestCard.textContent({ timeout: 5000 }).catch(() => null);
    return uploadedName ? uploadedName.trim() : null;
  }

  // ── Search documents ──────────────────────────────────────────
  async searchDocuments(query) {
    await this.searchInput.click();
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
    // Small wait for results to filter
    await this.page.waitForTimeout(500);
  }

  // ── Clear search ──────────────────────────────────────────────
  async clearSearch() {
    await this.searchInput.dblclick();
    await this.searchInput.fill('');
    await this.searchInput.press('Enter');
    await this.page.waitForTimeout(500);
  }

  // ── Delete the nth document (0-based index) ──────────────────
  async deleteDocument(index = 0) {
    const deleteIcons = this.page.locator('.MedicalReports_medicalReportDelete__eLbzu > svg');
    const count = await deleteIcons.count();
    if (count === 0) {
      throw new Error('No documents available to delete');
    }
    // Use last() if index exceeds available count
    const safeIndex = Math.min(index, count - 1);
    await deleteIcons.nth(safeIndex).click();
    await this.deleteConfirmBtn.waitFor({ state: 'visible', timeout: 5000 });
    await this.deleteConfirmBtn.click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }
}

module.exports = { DocumentsPage };