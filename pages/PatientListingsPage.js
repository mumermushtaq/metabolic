// ─────────────────────────────────────────────────────────────
// pages/PatientListingsPage.js
// Page Object Model for the Patient Listings screen
// URL: /patient
// ─────────────────────────────────────────────────────────────

class PatientListingsPage {

  constructor(page) {
    this.page = page;

    // ── Page header ──────────────────────────────────────────
    this.pageTitle        = page.getByRole('heading', { name: /patients/i });
    this.patientCount     = page.locator('h1, h2').filter({ hasText: /patients \(\d+\)/i });

    // ── Search ───────────────────────────────────────────────
    this.searchInput      = page.getByRole('textbox', { name: 'Search' });
    this.clearFilterBtn   = page.getByRole('button', { name: /clear filter/i });

    // ── Filter ───────────────────────────────────────────────
    this.filterBtn        = page.getByRole('button', { name: 'Filter', exact: true });

    // ── Filter Modal ─────────────────────────────────────────
    this.filterModal          = page.getByRole('dialog');
    this.diagnosisInput       = page.getByRole('combobox').filter({ hasText: /type at least/i });
    this.genderDropdown       = page.locator('label').filter({ hasText: /gender/i }).locator('..').getByRole('combobox');
    this.languageDropdown     = page.locator('label').filter({ hasText: /language/i }).locator('..').getByRole('combobox');
    this.primaryStaffDropdown = page.locator('label').filter({ hasText: /primary staff/i }).locator('..').getByRole('combobox');
    this.programDropdown      = page.locator('label').filter({ hasText: /program/i }).locator('..').getByRole('combobox');
    this.ageFromInput         = page.getByPlaceholder('From');
    this.ageToInput           = page.getByPlaceholder('To');
    this.statusDropdown       = page.locator('label').filter({ hasText: /status/i }).locator('..').getByRole('combobox');
    this.applyFiltersBtn      = page.getByRole('button', { name: /apply filters/i });
    this.saveFilterSetBtn     = page.getByRole('button', { name: /save filter set/i });
    this.cancelFilterBtn      = page.getByRole('button', { name: /cancel/i });
    this.closeFilterBtn       = page.getByRole('button', { name: /close/i });

    // ── Saved Filters ─────────────────────────────────────────
    this.savedFiltersRow  = page.getByText('Saved Filters:');
    this.savedFilterChips = page.locator('button, span').filter({ hasText: /male|female|age|verified|primary/i });

    // ── Table ─────────────────────────────────────────────────
    this.tableRows        = page.locator('table tbody tr, [data-testid="patient-row"]');
    this.patientNameCells = page.locator('td').filter({ hasText: /\w+/ }).first();

    // ── Add Patient buttons ───────────────────────────────────
    this.addPatientBtn    = page.getByRole('button', { name: 'Add Patient', exact: true });
    this.addPatientMRNBtn = page.getByRole('button', { name: 'Add Patient (MRN)', exact: true });

    // ── Status badges ─────────────────────────────────────────
    this.statusVerified   = page.getByText('VERIFIED');
    this.statusInvited    = page.getByText('INVITED');
    this.statusPending    = page.getByText('PENDING');
    this.statusActivated  = page.getByText('ACTIVATED');
  }

  // ── Navigation ──────────────────────────────────────────────

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/patient`);
    // networkidle never fires — chat widget holds open connections
    await this.page.getByRole('table').waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Search ──────────────────────────────────────────────────

  async searchPatient(name) {
    await this.searchInput.fill(name);
    // Wait for the table to re-render — avoids relying on a specific API URL
    await this.page.waitForFunction(
      () => !document.querySelector('table tbody tr.loading, [class*="loading"]'),
      { timeout: 10000 }
    ).catch(() => {}); // ignore if no loading indicator exists
    await this.page.waitForTimeout(800); // account for search debounce + render
  }

  async clearSearch() {
    await this.searchInput.clear();
    await this.page.waitForTimeout(800);
  }

  async getPatientCount() {
    const text = await this.patientCount.textContent();
    const match = text.match(/\((\d+)\)/);
    return match ? parseInt(match[1]) : 0;
  }

  // ── Filter Modal ────────────────────────────────────────────

  async openFilterModal() {
    await this.filterBtn.click();
    await this.filterModal.waitFor({ state: 'visible' });
  }

  async closeFilterModal() {
    await this.cancelFilterBtn.click();
    await this.filterModal.waitFor({ state: 'hidden' });
  }

  async applyFilter({ gender, language, status, ageFrom, ageTo } = {}) {
    await this.openFilterModal();
    if (gender)   await this.genderDropdown.selectOption(gender);
    if (language) await this.languageDropdown.selectOption(language);
    if (status)   await this.statusDropdown.selectOption(status);
    if (ageFrom)  await this.ageFromInput.fill(String(ageFrom));
    if (ageTo)    await this.ageToInput.fill(String(ageTo));
    await Promise.all([
      this.page.waitForResponse(
        resp => resp.url().includes('/patient') && resp.status() === 200,
        { timeout: 10000 }
      ),
      this.applyFiltersBtn.click(),
    ]);
  }

  async clearAllFilters() {
    if (await this.clearFilterBtn.isVisible()) {
      await Promise.all([
        this.page.waitForResponse(
          resp => resp.url().includes('/patient') && resp.status() === 200,
          { timeout: 10000 }
        ),
        this.clearFilterBtn.click(),
      ]);
    }
  }

  // ── Saved Filters ────────────────────────────────────────────

  async clickSavedFilter(filterName) {
    await Promise.all([
      this.page.waitForResponse(
        resp => resp.url().includes('/patient') && resp.status() === 200,
        { timeout: 10000 }
      ),
      this.page.getByText(filterName, { exact: false }).first().click(),
    ]);
  }

  // ── Table interactions ───────────────────────────────────────

  async expandPatientRow(index = 0) {
    const rows = this.page.locator('tr').filter({ has: this.page.locator('td') });
    await rows.nth(index).locator('[aria-label="expand"], svg, button').first().click();
  }

  async openPatient(patientName) {
    await this.page.getByText(patientName).first().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getFirstPatientName() {
    return this.page.locator('td').first().textContent();
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