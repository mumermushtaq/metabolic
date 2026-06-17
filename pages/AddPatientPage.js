class AddPatientPage {

  constructor(page) {
    this.page = page;

    // ── Modal ─────────────────────────────────────────────────
    this.modal = page.getByRole('dialog');

    // ── Basic Info ────────────────────────────────────────────
    this.firstNameInput     = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput      = page.getByRole('textbox', { name: 'Last Name' });
    this.dobInput           = page.getByRole('textbox', { name: 'DD-MM-YYYY' });
    this.genderMale         = page.getByRole('dialog').getByText('Male', { exact: true });
    this.genderFemale       = page.getByRole('dialog').getByText('Female', { exact: true });
    this.emailInput         = page.getByRole('textbox', { name: 'Email' });
    this.phoneCountrySelect = page.getByLabel('Phone number country');
    this.phoneInput         = page.getByRole('textbox', { name: '(XXX) XXX XXX' });

    // ── Administrative ────────────────────────────────────────
    this.insuranceContractInput = page.getByRole('textbox', { name: 'Insurance Contract' });
    this.mrnInput               = page.getByRole('textbox', { name: 'MRN' });

    // ── React-select fields ───────────────────────────────────
    // Insurance Provider — first react-select on the form
    this.insuranceProviderInput = page.locator('.select__input-container').first();
    // Language — react-select-3
    this.languageInput          = page.locator('#react-select-3-input');
    // Nationality — react-select-4
    this.nationalityInput       = page.locator('#react-select-4-input');
    // Diagnosis — positional CSS from codegen (nth-child 12)
    this.diagnosisInput         = page.locator('div:nth-child(12) > .jsx-d27dbb94089aedac.theme_select_field > .jsx-d27dbb94089aedac > .css-b62m3t-container > .select__control > .select__value-container > .select__input-container');
    // Medications
    this.medicationsInput       = page.locator('.jsx-d27dbb94089aedac.theme_select_field.container__medications-select .select__input-container');

    // ── Team ──────────────────────────────────────────────────
    this.primaryTeamBtn   = page.getByRole('button', { name: 'Primary Team Select' });
    this.secondaryTeamBtn = page.getByRole('button', { name: 'Secondary Team Select' });

    // ── Form actions (scoped inside dialog to avoid ambiguity) ─
    this.submitBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Patient' });
    this.cancelBtn = page.getByRole('dialog').getByRole('button', { name: 'Cancel' });
  }

  // ── Date of Birth ─────────────────────────────────────────────
  // Uses pressSequentially to handle masked DD-MM-YYYY input.
  // If the calendar picker opens, Escape closes it after typing.
  async fillDateOfBirth(dateString) {
    await this.dobInput.click();
    await this.dobInput.pressSequentially(dateString);
    // Tab moves focus to next field — Escape would close the Bootstrap offcanvas modal
    await this.dobInput.press('Tab');
  }

  // ── Insurance Provider (click-to-open, no search) ─────────────
  async selectInsuranceProvider(providerName) {
    await this.insuranceProviderInput.click();
    await this.page.getByRole('option', { name: providerName }).click();
  }

  // ── Language (type to search + Enter) ─────────────────────────
  async selectLanguage(searchText) {
    await this.languageInput.fill(searchText);
    await this.languageInput.press('Enter');
  }

  // ── Nationality (type to search + Enter) ──────────────────────
  async selectNationality(searchText) {
    await this.nationalityInput.fill(searchText);
    await this.nationalityInput.press('Enter');
  }

  // ── Diagnosis (click to open, select exact option) ────────────
  async selectDiagnosis(optionName) {
    await this.diagnosisInput.click();
    await this.page.getByRole('option', { name: optionName, exact: true }).click();
  }

  // ── Comorbidities / secondary diagnosis (type at least 2 letters) ─
  async selectComorbidity(searchText, optionName) {
    await this.page.getByText('Type at least 2 letters to').click();
    await this.page.keyboard.type(searchText);
    await this.page.getByRole('option', { name: optionName }).click();
  }

  // ── Medications ───────────────────────────────────────────────
  async selectMedication(optionName) {
    await this.medicationsInput.click();
    await this.page.getByRole('option', { name: optionName }).click();
  }

  // ── Primary Team (single selection) ──────────────────────────
  async selectPrimaryTeam(memberName) {
    await this.primaryTeamBtn.click();
    await this.page.locator('div').filter({ hasText: new RegExp(`^${memberName}$`) }).nth(1).click();
  }

  // ── Secondary Team (multi-checkbox) ──────────────────────────
  async selectSecondaryTeam(...memberNames) {
    await this.secondaryTeamBtn.click();
    for (const name of memberNames) {
      await this.page.getByRole('checkbox', { name }).check();
    }
  }

  // ── Fill all fields (matches codegen order) ───────────────────
  async fillForm({
    firstName, lastName, dob, gender = 'Male',
    email, phone, phoneCountry = 'PK',
    insuranceContract, insuranceProvider,
    language, nationality,
    mrn, diagnosis, primaryTeam, secondaryTeam,
  }) {
    if (firstName)          await this.firstNameInput.fill(firstName);
    if (lastName)           await this.lastNameInput.fill(lastName);
    if (dob)                await this.fillDateOfBirth(dob);
    await (gender === 'Female' ? this.genderFemale : this.genderMale).click();

    // Fill stable fields (not affected by React re-renders from gender/country)
    if (insuranceContract)  await this.insuranceContractInput.fill(insuranceContract);
    if (mrn)                await this.mrnInput.fill(mrn);

    // React-select dropdowns — each may trigger a re-render
    if (insuranceProvider)  await this.selectInsuranceProvider(insuranceProvider);
    if (language)           await this.selectLanguage(language);
    if (nationality)        await this.selectNationality(nationality);
    if (diagnosis)          await this.selectDiagnosis(diagnosis);
    if (primaryTeam)        await this.selectPrimaryTeam(primaryTeam);
    if (secondaryTeam)      await this.selectSecondaryTeam(...secondaryTeam);

    // Email and phone filled LAST — React re-renders from the selects above reset them if filled earlier
    if (phoneCountry)       await this.phoneCountrySelect.selectOption(phoneCountry);
    if (email) {
      await this.emailInput.click();
      await this.emailInput.fill(email);
    }
    if (phone)              await this.phoneInput.fill(phone);
  }

  // ── Fill only basic text fields (used for validation tests) ───
  async fillBasicOnly({ firstName, lastName, email }) {
    if (firstName) await this.firstNameInput.fill(firstName);
    if (lastName)  await this.lastNameInput.fill(lastName);
    if (email)     await this.emailInput.fill(email);
  }

  async submit() {
    await this.submitBtn.click();
  }

  async cancel() {
    await this.cancelBtn.click();
  }
}

module.exports = { AddPatientPage };
