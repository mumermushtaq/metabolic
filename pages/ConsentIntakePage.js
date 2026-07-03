class ConsentIntakePage {

  constructor(page) {
    this.page = page;

    // ── Navigation ──────────────────────────────────────────────
    this.consentIntakeTab = page.getByRole('link', { name: 'Consent & Intake' });

    // ── Visit date picker ─────────────────────────────────────────
    // id confirmed from DOM; also accessible via role
    this.visitDateBtn = page.locator('#consent-visit-date-trigger');
    this.nextMonthBtn = page.getByRole('button', { name: 'Go to next month' });

    // ── Episode number ────────────────────────────────────────────
    this.episodeNumberInput = page.locator('#episode-number');
    this.saveBtn            = page.getByRole('button', { name: 'Save' });

    // ── Minor patient banner ──────────────────────────────────────
    this.minorBanner = page.locator('text=This patient is a minor');

    // ── Patient type & visit type ─────────────────────────────────
    // Codegen confirms these are role="combobox" — use getByRole scoped by name
    this.patientTypeCombo = page.getByRole('combobox', { name: 'Patient Type' });
    this.visitTypeCombo   = page.getByRole('combobox', { name: 'Visit Type' });

    // ── Quick Assign section ──────────────────────────────────────
    this.quickAssignBtn       = page.getByRole('button', { name: 'Quick Assign' });
    this.searchFormsCombo     = page.getByRole('combobox', { name: 'Search & select forms' });

    // ── Co-signers: Doctor ────────────────────────────────────────
    this.addDoctorBtn        = page.getByRole('button', { name: 'Add Doctor' });
    this.editDoctorBtn       = page.getByRole('button', { name: 'Edit doctor co-signer' });
    this.selectStaffDropdown = page.getByRole('button', { name: 'Select staff…' });
    this.doctorFullNameInput = page.getByRole('textbox', { name: 'Full name *' });
    this.dialogAddDoctorBtn  = page.getByRole('dialog').getByRole('button', { name: 'Add Doctor' });
    this.updateDoctorBtn     = page.getByRole('button', { name: 'Update Doctor' });

    // ── Co-signers: Witness ───────────────────────────────────────
    this.addWitnessBtn       = page.getByRole('button', { name: 'Add Witness' });
    this.editWitnessBtn      = page.getByRole('button', { name: 'Edit witness co-signer' });
    this.dialogAddWitnessBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Witness' });
    this.updateWitnessBtn    = page.getByRole('button', { name: 'Update Witness' });

    // ── Co-signers: Parent/Guardian ───────────────────────────────
    this.addParentGuardianBtn        = page.getByRole('button', { name: 'Add Parent/Guardian' });
    this.editParentGuardianBtn       = page.getByRole('button', { name: 'Edit parent/guardian co-signer' });
    this.parentGuardianFullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
    this.updateParentGuardianBtn     = page.getByRole('button', { name: 'Update Parent/Guardian' });

    // ── Co-signers: Interpreter ───────────────────────────────────
    this.addInterpreterBtn    = page.getByRole('button', { name: 'Add Interpreter' });
    this.editInterpreterBtn   = page.getByRole('button', { name: 'Edit interpreter' });
    this.interpreterNameInput = page.getByRole('textbox', { name: 'Full Name *' });
    this.languageInput        = page.getByRole('textbox', { name: 'Language' });
    this.updateInterpreterBtn = page.getByRole('button', { name: 'Update Interpreter' });

    // ── Actions ───────────────────────────────────────────────────
    this.copySecureLinkBtn = page.getByRole('button', { name: 'Copy Secure Link' });
    this.generateQrBtn     = page.getByRole('button', { name: 'Generate QR Code' });
    this.sendReminderBtn   = page.getByRole('button', { name: 'Send Reminder' });
  }

  // ── Open patient and go to Consent & Intake tab ──────────────
  async openPatientConsentTab(patientName, patientId = null) {
    if (patientId) {
      // Navigate directly by ID — avoids search state issues between tests
      await this.page.goto(`${process.env.BASE_URL}/patient/profile/consent-intake/${patientId}`);
      await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
      return;
    }

    await this.page.goto(`${process.env.BASE_URL}/patient`);
    await this.page.getByRole('heading', { name: 'Patients', exact: true })
      .waitFor({ state: 'visible', timeout: 15000 });

    const search = this.page.getByRole('textbox', { name: 'Search' });
    await search.click();
    await search.clear();
    await search.fill(patientName);
    await search.press('Enter');

    // Wait for table to reload after search
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

    const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
    await patientLink.waitFor({ state: 'visible', timeout: 20000 });
    await patientLink.click();

    await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.consentIntakeTab.click();

    await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Set visit date ────────────────────────────────────────────
  // If monthsAhead=0, picks a day in the current month (no navigation needed)
  async setVisitDate(targetYear, targetMonth, targetDay) {
    await this.visitDateBtn.click();
    await this.nextMonthBtn.waitFor({ state: 'visible', timeout: 10000 });

    const now = new Date();
    const monthsToClick = (targetYear - now.getFullYear()) * 12 + (targetMonth - (now.getMonth() + 1));

    for (let i = 0; i < monthsToClick; i++) {
      await this.nextMonthBtn.click();
      await this.page.waitForTimeout(150);
    }

    await this.page
      .locator(`button[name='day'].rdp-day`)
      .filter({ hasText: new RegExp(`^${targetDay}$`) })
      .click();
  }

  // ── Set unique episode number, retry once on duplicate ────────
  async setEpisodeNumber(episodeNumber) {
    await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.episodeNumberInput.dblclick();
    await this.episodeNumberInput.fill(String(episodeNumber));
    await this.saveBtn.click();

    // Retry on duplicate error
    const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
    const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasError) {
      const retryNumber = Date.now().toString().slice(-8);
      await this.episodeNumberInput.dblclick();
      await this.episodeNumberInput.fill(retryNumber);
      await this.saveBtn.click();
    }

    // Wait for either: comboboxes appear (adult) or minor banner appears
    await Promise.race([
      this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
      this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
    ]);
  }

  // ── Returns true if minor guardian banner is shown ────────────
  async isMinorPatient() {
    return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  }

  // ── Select patient type ───────────────────────────────────────
  async selectPatientType(typeName) {
    await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
    await this.patientTypeCombo.click();
    await this.page
      .getByRole('button', { name: typeName, exact: true })
      .click();
  }

  // ── Select visit type ─────────────────────────────────────────
  async selectVisitType(typeName) {
    await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
    await this.visitTypeCombo.click();
    await this.page
      .getByRole('button', { name: typeName, exact: true })
      .click();
  }

  // ── Quick assign (auto-assign by patient+visit type) ──────────
  async quickAssign() {
    await this.quickAssignBtn.waitFor({ state: 'enabled', timeout: 10000 });
    await this.quickAssignBtn.click();
  }

  // ── Manually assign a form by searching ──────────────────────
  async assignFormBySearch(formNamePartial) {
    await this.searchFormsCombo.click();
    await this.page
      .getByRole('button', { name: new RegExp(formNamePartial, 'i') })
      .first()
      .click();
    // Assign button label updates to show count e.g. "Assign (1)"
    await this.page
      .getByRole('button', { name: /^Assign \(\d+\)$/ })
      .click();
  }

  // ── Add or edit doctor co-signer ─────────────────────────────
  // Handles both states: "Add Doctor" (first time) and "Edit doctor co-signer" (already assigned)
  // From Codegen: Add flow needs staff dropdown only (no Full name field in new recording)
  //               Edit flow: click current staff button → pick new option → Update Doctor
  async addOrEditDoctor(staffName) {
    const hasEdit = await this.editDoctorBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasEdit) {
      await this.editDoctorBtn.click();
      const dialog = this.page.getByRole('dialog');
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      // Click the staff combobox button (shows current name) to open the listbox
      await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
      // Options render inside a listbox — scope to dialog to avoid ambiguity
      await dialog.getByRole('listbox').getByRole('option', { name: staffName }).click();
      await this.updateDoctorBtn.click();
    } else {
      await this.addDoctorBtn.click();
      const dialog = this.page.getByRole('dialog');
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await this.selectStaffDropdown.click();
      await this.page.getByRole('option', { name: staffName }).click();
      // Full name field is required — fill it after staff selection
      const fullNameInput = dialog.getByRole('textbox', { name: 'Full name *' });
      await fullNameInput.waitFor({ state: 'visible', timeout: 5000 });
      await fullNameInput.fill(staffName);
      // Wait for Add Doctor button to become enabled
      await this.dialogAddDoctorBtn.waitFor({ state: 'visible', timeout: 5000 });
      await this.dialogAddDoctorBtn.click();
    }
  }

  // ── Add or edit witness co-signer ────────────────────────────
  // Handles both states: "Add Witness" (first time) and "Edit witness co-signer" (already assigned)
  async addOrEditWitness(staffName) {
    const hasEdit = await this.editWitnessBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasEdit) {
      await this.editWitnessBtn.click();
      const dialog = this.page.getByRole('dialog');
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      // Click the staff combobox button (shows current name) to open the listbox
      await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
      // Options render inside a listbox — scope to dialog to avoid ambiguity
      await dialog.getByRole('listbox').getByRole('option', { name: staffName }).click();
      await this.updateWitnessBtn.click();
    } else {
      await this.addWitnessBtn.click();
      await this.selectStaffDropdown.click();
      await this.page.getByRole('option', { name: staffName }).click();
      await this.dialogAddWitnessBtn.click();
    }
  }

  // ── Add or edit parent/guardian ───────────────────────────────
  async editParentGuardian(fullName) {
    const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasEdit) {
      await this.editParentGuardianBtn.click();
      const dialog = this.page.getByRole('dialog');
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      const nameInput = dialog.locator('input').first();
      await nameInput.waitFor({ state: 'visible', timeout: 5000 });
      await nameInput.click({ clickCount: 3 });
      await nameInput.fill(fullName);
      await this.updateParentGuardianBtn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 10000 });
    } else {
      // Button detaches during page re-render — wait for stability before clicking
      const addBtn = this.page.getByRole('button', { name: 'Add Parent/Guardian' }).first();
      await addBtn.waitFor({ state: 'visible', timeout: 10000 });
      await this.page.waitForTimeout(1000);
      await addBtn.click();
      const dialog = this.page.getByRole('dialog');
      await dialog.waitFor({ state: 'visible', timeout: 5000 });
      await dialog.locator('input').first().fill(fullName);
      // Confirm button is scoped inside dialog to avoid matching page button
      const confirmBtn = dialog.getByRole('button', { name: 'Add Parent/Guardian' });
      await confirmBtn.waitFor({ state: 'visible', timeout: 5000 });
      await confirmBtn.click();
      await dialog.waitFor({ state: 'hidden', timeout: 10000 });
    }
  }

  // ── Add or edit interpreter ───────────────────────────────────
  async editInterpreter(fullName, language) {
    const hasEdit = await this.editInterpreterBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasEdit) {
      await this.editInterpreterBtn.click();
      await this.interpreterNameInput.click();
      await this.interpreterNameInput.fill(fullName);
      await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
      await this.languageInput.fill(language);
      await this.updateInterpreterBtn.click();
    } else {
      await this.addInterpreterBtn.click();
      await this.interpreterNameInput.fill(fullName);
      await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
      await this.languageInput.fill(language);
      await this.page.getByRole('dialog').getByRole('button', { name: 'Add Interpreter' }).click();
    }
  }

  // ── Full setup: date + episode + guardian (if minor) + patient/visit type ──
  async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
    await this.setVisitDate(targetYear, targetMonth, targetDay);
    await this.setEpisodeNumber(episodeNumber);

    if (await this.isMinorPatient()) {
      await this.editParentGuardian(guardianName);
      await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
    }

    // Select Patient Type + Visit Type so Quick Assign button becomes enabled
    await this.selectPatientType('Diabetic Female');
    await this.selectVisitType('Baseline');
  }
}

module.exports = { ConsentIntakePage };