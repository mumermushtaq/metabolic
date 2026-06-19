// ─────────────────────────────────────────────────────────────
// pages/PatientListingsPage.js
// Page Object Model for the Patient Listings screen
// URL: /patient
// Locators verified via Playwright Codegen — single source of truth.
// Do not merge with other versions; replace this file entirely.
// ─────────────────────────────────────────────────────────────

class PatientListingsPage {

  constructor(page) {
    this.page = page;

    // ── Page header ──────────────────────────────────────────
    this.pageTitle = page.getByRole('heading', { name: 'Patients', exact: true });

    // ── Search ───────────────────────────────────────────────
    this.searchInput    = page.getByRole('textbox', { name: 'Search' });
    this.clearFilterBtn = page.getByRole('button', { name: 'Clear Filter' });

    // ── Filter ───────────────────────────────────────────────
    this.filterBtn = page.getByRole('button', { name: 'Filter', exact: true });

    // ── Filter Modal ─────────────────────────────────────────
    this.filterModal = page.getByRole('dialog');
    // First select dropdown indicator in the filter modal (Gender, per Codegen flow)
    this.genderDropdownArrow = page.locator(
      '.col-12 > .FilterSelect_selectWrap__cY9OS > .FilterSelect_filterSelect__wYitR > .filterSelect__control > .filterSelect__indicators > .filterSelect__indicator > svg'
    ).first();
    this.maleOption       = page.getByRole('option', { name: 'Male', exact: true });
    this.applyFiltersBtn  = page.getByRole('button', { name: 'Apply Filters' });
    this.saveFilterSetBtn = page.getByRole('button', { name: 'Save Filter Set' });
    this.cancelFilterBtn  = page.getByRole('button', { name: 'Cancel' });

    // ── Save Filter Set Modal ────────────────────────────────
    this.filterTitleInput = page.getByRole('textbox', { name: 'Filter Title' });
    this.saveFilterBtn    = page.getByRole('button', { name: 'Save Filter', exact: true });
    this.filterVisibilityRadio2 = page.locator('.Filter_radio__3CaS3 > div:nth-child(2) > label');

    // ── Saved Filters ─────────────────────────────────────────
    this.savedFiltersRow = page.getByText('Saved Filters:');

    // ── Add Patient buttons ───────────────────────────────────
    this.addPatientBtn    = page.getByRole('button', { name: 'Add Patient', exact: true });
    this.addPatientMRNBtn = page.getByRole('button', { name: 'Add Patient (MRN)' });
  }

  // ── Navigation ──────────────────────────────────────────────

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/patient`);
    await this.pageTitle.waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Search ──────────────────────────────────────────────────

  async searchPatient(name) {
    await this.searchInput.click();
    await this.searchInput.fill(name);
await this.page.waitForTimeout(500);  }

  async clearSearch() {
    if (await this.clearFilterBtn.isVisible()) {
      await this.clearFilterBtn.click();
      await this.page.waitForTimeout(500);
    }
  }

  // ── Filter Modal ────────────────────────────────────────────

  async openFilterModal() {
    await this.filterBtn.click();
    await this.filterModal.waitFor({ state: 'visible' });
  }

  async selectGenderMale() {
    await this.genderDropdownArrow.click();
    await this.maleOption.click();
  }

  async applyFilters() {
    await this.applyFiltersBtn.click();
    await this.filterModal.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async closeFilterModal() {
    await this.cancelFilterBtn.click();
    await this.filterModal.waitFor({ state: 'hidden' });
  }

  // ── Save Filter Set ──────────────────────────────────────────

  async saveCurrentFilterAs(title) {
    await this.saveFilterSetBtn.click();
    await this.filterTitleInput.click();
    await this.filterTitleInput.fill(title);
    await this.filterVisibilityRadio2.click();
    await this.saveFilterBtn.click();
  }

  // ── Saved Filters ────────────────────────────────────────────

  async clickSavedFilter(filterName) {
    await this.page.getByText(filterName, { exact: false }).click();
    await this.page.waitForTimeout(500);
  }

  // ── Add Patient ──────────────────────────────────────────────

  async clickAddPatient() {
    await this.addPatientBtn.click();
  }

  async clickAddPatientMRN() {
    await this.addPatientMRNBtn.click();
  }
}

module.exports = { PatientListingsPage };