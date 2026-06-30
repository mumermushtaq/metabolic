class ConsentIntakePage {
  constructor(page) {
    this.page = page;

    this.consentIntakeTab = page.getByRole('link', { name: 'Consent & Intake' });
    this.visitDateBtn = page.locator('#consent-visit-date-trigger');
    this.nextMonthBtn = page.getByRole('button', { name: 'Go to next month' });
    this.episodeNumberInput = page.locator('#episode-number');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.minorBanner = page.getByText('This patient is a minor');
    this.patientTypeCombo = page.getByRole('combobox', { name: 'Patient Type' });
    this.visitTypeCombo = page.getByRole('combobox', { name: 'Visit Type' });
    this.quickAssignBtn = page.getByRole('button', { name: 'Quick Assign' });
    this.searchFormsCombo = page.getByRole('combobox', { name: 'Search & select forms' });

    this.addDoctorBtn = page.getByRole('button', { name: 'Add Doctor' });
    this.editDoctorBtn = page.getByRole('button', { name: 'Edit doctor co-signer' });
    this.selectStaffDropdown = page.getByRole('button', { name: /Select staff/ });
    this.dialogAddDoctorBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Doctor' });
    this.updateDoctorBtn = page.getByRole('button', { name: 'Update Doctor' });

    this.addWitnessBtn = page.getByRole('button', { name: 'Add Witness' });
    this.editWitnessBtn = page.getByRole('button', { name: 'Edit witness co-signer' });
    this.dialogAddWitnessBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Witness' });
    this.updateWitnessBtn = page.getByRole('button', { name: 'Update Witness' });

    this.addParentGuardianBtn = page.getByRole('button', { name: 'Add Parent/Guardian' });
    this.editParentGuardianBtn = page.getByRole('button', { name: 'Edit parent/guardian co-signer' });
    this.updateParentGuardianBtn = page.getByRole('button', { name: 'Update Parent/Guardian' });

    this.addInterpreterBtn = page.getByRole('button', { name: 'Add Interpreter' });
    this.editInterpreterBtn = page.getByRole('button', { name: 'Edit interpreter' });
    this.interpreterNameInput = page.getByRole('textbox', { name: 'Full Name *' });
    this.languageInput = page.getByRole('textbox', { name: 'Language' });
    this.updateInterpreterBtn = page.getByRole('button', { name: 'Update Interpreter' });

    this.copySecureLinkBtn = page.getByRole('button', { name: 'Copy Secure Link' });
    this.generateQrBtn = page.getByRole('button', { name: 'Generate QR Code' });
    this.sendReminderBtn = page.getByRole('button', { name: 'Send Reminder' });
  }

  async waitForReady() {
    await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  }

  async waitForSaveToSettle() {
    await Promise.race([
      this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
      this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
      this.copySecureLinkBtn.waitFor({ state: 'visible', timeout: 15000 }),
    ]);
  }

  async openPatientConsentTab(patientName, patientId = null) {
    if (patientId) {
      await this.page.goto(`${process.env.BASE_URL}/patient/profile/consent-intake/${patientId}`);
      await this.waitForReady();
      return;
    }

    await this.page.goto(`${process.env.BASE_URL}/patient`);
    await this.page.getByRole('heading', { name: 'Patients', exact: true })
      .waitFor({ state: 'visible', timeout: 15000 });

    const responsePromise = this.page.waitForResponse(
      resp => resp.url().includes('/patient') && resp.status() === 200,
      { timeout: 10000 }
    ).catch(() => {});

    const search = this.page.getByRole('textbox', { name: 'Search' });
    await search.click();
    await search.clear();
    await search.fill(patientName);
    await responsePromise;

    const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
    await patientLink.waitFor({ state: 'visible', timeout: 20000 });
    await patientLink.click();

    await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.consentIntakeTab.click();
    await this.waitForReady();
  }

  async setVisitDate(targetYear, targetMonth, targetDay) {
    await this.visitDateBtn.click();
    await this.nextMonthBtn.waitFor({ state: 'visible', timeout: 10000 });

    const now = new Date();
    const monthsToClick = Math.max(0, (targetYear - now.getFullYear()) * 12 + (targetMonth - (now.getMonth() + 1)));

    for (let i = 0; i < monthsToClick; i++) {
      const currentCaption = await this.page.locator('.rdp-caption_label').first().textContent().catch(() => null);
      await this.nextMonthBtn.click();
      if (currentCaption) {
        await this.page.locator('.rdp-caption_label').first().waitFor({ state: 'visible', timeout: 5000 });
        await this.page.waitForFunction(
          text => document.querySelector('.rdp-caption_label')?.textContent !== text,
          currentCaption,
          { timeout: 5000 }
        ).catch(() => {});
      }
    }

    await this.page.locator('button[name="day"].rdp-day')
      .filter({ hasText: new RegExp(`^${targetDay}$`) })
      .click();
  }

  async setEpisodeNumber(episodeNumber) {
    await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.episodeNumberInput.dblclick();
    await this.episodeNumberInput.fill(String(episodeNumber));
    await this.saveBtn.click();

    const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
    const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasError) {
      const retryNumber = Date.now().toString().slice(-8);
      await this.episodeNumberInput.dblclick();
      await this.episodeNumberInput.fill(retryNumber);
      await this.saveBtn.click();
    }

    await this.waitForSaveToSettle();
  }

  async isMinorPatient() {
    return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  }

  async selectPatientType(typeName) {
    await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
    await this.patientTypeCombo.click();
    await this.page.getByRole('button', { name: typeName, exact: true }).click();
  }

  async selectVisitType(typeName) {
    await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
    await this.visitTypeCombo.click();
    await this.page.getByRole('button', { name: typeName, exact: true }).click();
  }

  async quickAssign() {
    await this.quickAssignBtn.waitFor({ state: 'enabled', timeout: 10000 });
    await this.quickAssignBtn.click();
  }

  async assignFormBySearch(formNamePartial) {
    await this.searchFormsCombo.click();
    await this.page.getByRole('button', { name: new RegExp(formNamePartial, 'i') }).first().click();
    await this.page.getByRole('button', { name: /^Assign \(\d+\)$/ }).click();
  }

  async addOrEditDoctor(staffName) {
    const hasEdit = await this.editDoctorBtn.isVisible({ timeout: 3000 }).catch(() => false);
    const dialog = this.page.getByRole('dialog');

    if (hasEdit) {
      await this.editDoctorBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
      await dialog.getByRole('listbox').getByRole('option', { name: staffName }).click();
      await this.updateDoctorBtn.click();
    } else {
      await this.addDoctorBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await this.selectStaffDropdown.click();
      await this.page.getByRole('option', { name: staffName }).click();
      await dialog.getByRole('textbox', { name: 'Full name *' }).fill(staffName);
      await this.dialogAddDoctorBtn.click();
    }

    await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async addOrEditWitness(staffName) {
    const hasEdit = await this.editWitnessBtn.isVisible({ timeout: 3000 }).catch(() => false);
    const dialog = this.page.getByRole('dialog');

    if (hasEdit) {
      await this.editWitnessBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
      await dialog.getByRole('listbox').getByRole('option', { name: staffName }).click();
      await this.updateWitnessBtn.click();
    } else {
      await this.addWitnessBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await this.selectStaffDropdown.click();
      await this.page.getByRole('option', { name: staffName }).click();
      await this.dialogAddWitnessBtn.click();
    }

    await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async editParentGuardian(fullName) {
    const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
    const dialog = this.page.getByRole('dialog');

    if (hasEdit) {
      await this.editParentGuardianBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      const nameInput = dialog.locator('input').first();
      await nameInput.click({ clickCount: 3 });
      await nameInput.fill(fullName);
      await this.updateParentGuardianBtn.click();
    } else {
      await this.addParentGuardianBtn.first().click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await dialog.locator('input').first().fill(fullName);
      await dialog.getByRole('button', { name: 'Add Parent/Guardian' }).click();
    }

    await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async editInterpreter(fullName, language) {
    const hasEdit = await this.editInterpreterBtn.isVisible({ timeout: 3000 }).catch(() => false);
    const dialog = this.page.getByRole('dialog');

    if (hasEdit) {
      await this.editInterpreterBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await this.interpreterNameInput.click();
      await this.interpreterNameInput.fill(fullName);
      await dialog.locator('div').filter({ hasText: /^Language$/ }).click();
      await this.languageInput.fill(language);
      await this.updateInterpreterBtn.click();
    } else {
      await this.addInterpreterBtn.click();
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await this.interpreterNameInput.fill(fullName);
      await dialog.locator('div').filter({ hasText: /^Language$/ }).click();
      await this.languageInput.fill(language);
      await dialog.getByRole('button', { name: 'Add Interpreter' }).click();
    }

    await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
    await this.setVisitDate(targetYear, targetMonth, targetDay);
    await this.setEpisodeNumber(episodeNumber);

    if (await this.isMinorPatient()) {
      await this.editParentGuardian(guardianName);
      await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
    }

    await this.selectPatientType('Diabetic Female');
    await this.selectVisitType('Baseline');
  }
}

module.exports = { ConsentIntakePage };

