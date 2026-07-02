# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\patient-listings.spec.js >> Patient Listings — @patients >> should show patient status badges
- Location: tests\e2e\patient-listings.spec.js:215:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://portal.dev.metabolichealth-app.com/patient", waiting until "load"

```

# Test source

```ts
  1   | // ─────────────────────────────────────────────────────────────
  2   | // pages/PatientListingsPage.js
  3   | // Page Object Model for the Patient Listings screen
  4   | // URL: /patient
  5   | // ─────────────────────────────────────────────────────────────
  6   | 
  7   | class PatientListingsPage {
  8   | 
  9   |   constructor(page) {
  10  |     this.page = page;
  11  | 
  12  |     // ── Page header ──────────────────────────────────────────
  13  |     this.pageTitle        = page.getByRole('heading', { name: /patients/i });
  14  |     this.patientCount     = page.locator('h1, h2').filter({ hasText: /patients \(\d+\)/i });
  15  | 
  16  |     // ── Search ───────────────────────────────────────────────
  17  |     this.searchInput      = page.getByRole('textbox', { name: 'Search' });
  18  |     this.clearFilterBtn   = page.getByRole('button', { name: /clear filter/i });
  19  | 
  20  |     // ── Filter ───────────────────────────────────────────────
  21  |     this.filterBtn        = page.getByRole('button', { name: 'Filter', exact: true });
  22  | 
  23  |     // ── Filter Modal ─────────────────────────────────────────
  24  |     this.filterModal          = page.getByRole('dialog');
  25  |     this.diagnosisInput       = page.getByRole('combobox').filter({ hasText: /type at least/i });
  26  |     this.genderDropdown       = page.locator('label').filter({ hasText: /gender/i }).locator('..').getByRole('combobox');
  27  |     this.languageDropdown     = page.locator('label').filter({ hasText: /language/i }).locator('..').getByRole('combobox');
  28  |     this.primaryStaffDropdown = page.locator('label').filter({ hasText: /primary staff/i }).locator('..').getByRole('combobox');
  29  |     this.programDropdown      = page.locator('label').filter({ hasText: /program/i }).locator('..').getByRole('combobox');
  30  |     this.ageFromInput         = page.getByPlaceholder('From');
  31  |     this.ageToInput           = page.getByPlaceholder('To');
  32  |     this.statusDropdown       = page.locator('label').filter({ hasText: /status/i }).locator('..').getByRole('combobox');
  33  |     this.applyFiltersBtn      = page.getByRole('button', { name: /apply filters/i });
  34  |     this.saveFilterSetBtn     = page.getByRole('button', { name: /save filter set/i });
  35  |     this.cancelFilterBtn      = page.getByRole('button', { name: /cancel/i });
  36  |     this.closeFilterBtn       = page.getByRole('button', { name: /close/i });
  37  | 
  38  |     // ── Saved Filters ─────────────────────────────────────────
  39  |     this.savedFiltersRow  = page.getByText('Saved Filters:');
  40  |     this.savedFilterChips = page.locator('button, span').filter({ hasText: /male|female|age|verified|primary/i });
  41  | 
  42  |     // ── Table ─────────────────────────────────────────────────
  43  |     this.tableRows        = page.locator('table tbody tr, [data-testid="patient-row"]');
  44  |     this.patientNameCells = page.locator('td').filter({ hasText: /\w+/ }).first();
  45  | 
  46  |     // ── Add Patient buttons ───────────────────────────────────
  47  |     this.addPatientBtn    = page.getByRole('button', { name: 'Add Patient', exact: true });
  48  |     this.addPatientMRNBtn = page.getByRole('button', { name: 'Add Patient (MRN)', exact: true });
  49  | 
  50  |     // ── Status badges ─────────────────────────────────────────
  51  |     this.statusVerified   = page.getByText('VERIFIED');
  52  |     this.statusInvited    = page.getByText('INVITED');
  53  |     this.statusPending    = page.getByText('PENDING');
  54  |     this.statusActivated  = page.getByText('ACTIVATED');
  55  |   }
  56  | 
  57  |   // ── Navigation ──────────────────────────────────────────────
  58  | 
  59  |   async goto() {
> 60  |     await this.page.goto(`${process.env.BASE_URL}/patient`);
      |                     ^ Error: page.goto: Target page, context or browser has been closed
  61  |     // Wait for first data row — confirms table loaded with data, not just the shell
  62  |     // Single wait here so beforeEach doesn't double-wait and hit the 30s test timeout
  63  |     await this.page.getByRole('row').nth(1).waitFor({ state: 'visible', timeout: 30000 });
  64  |   }
  65  | 
  66  |   // ── Search ──────────────────────────────────────────────────
  67  | 
  68  |   async searchPatient(name) {
  69  |     await this.searchInput.fill(name);
  70  |     // Wait for the table to re-render — avoids relying on a specific API URL
  71  |     await this.page.waitForFunction(
  72  |       () => !document.querySelector('table tbody tr.loading, [class*="loading"]'),
  73  |       { timeout: 10000 }
  74  |     ).catch(() => {}); // ignore if no loading indicator exists
  75  |     await this.page.waitForTimeout(process.env.CI ? 2000 : 800); // CI needs longer for debounce + API
  76  |   }
  77  | 
  78  |   async clearSearch() {
  79  |     await this.searchInput.clear();
  80  |     await this.page.waitForTimeout(800);
  81  |   }
  82  | 
  83  |   async getPatientCount() {
  84  |     const text = await this.patientCount.textContent();
  85  |     const match = text.match(/\((\d+)\)/);
  86  |     return match ? parseInt(match[1]) : 0;
  87  |   }
  88  | 
  89  |   // ── Filter Modal ────────────────────────────────────────────
  90  | 
  91  |   async openFilterModal() {
  92  |     await this.filterBtn.click();
  93  |     await this.filterModal.waitFor({ state: 'visible' });
  94  |   }
  95  | 
  96  |   async closeFilterModal() {
  97  |     await this.cancelFilterBtn.click();
  98  |     await this.filterModal.waitFor({ state: 'hidden' });
  99  |   }
  100 | 
  101 |   async applyFilter({ gender, language, status, ageFrom, ageTo } = {}) {
  102 |     await this.openFilterModal();
  103 |     if (gender)   await this.genderDropdown.selectOption(gender);
  104 |     if (language) await this.languageDropdown.selectOption(language);
  105 |     if (status)   await this.statusDropdown.selectOption(status);
  106 |     if (ageFrom)  await this.ageFromInput.fill(String(ageFrom));
  107 |     if (ageTo)    await this.ageToInput.fill(String(ageTo));
  108 |     await Promise.all([
  109 |       this.page.waitForResponse(
  110 |         resp => resp.url().includes('/patient') && resp.status() === 200,
  111 |         { timeout: 10000 }
  112 |       ),
  113 |       this.applyFiltersBtn.click(),
  114 |     ]);
  115 |   }
  116 | 
  117 |   async clearAllFilters() {
  118 |     if (await this.clearFilterBtn.isVisible()) {
  119 |       await this.clearFilterBtn.click();
  120 |       await this.page.waitForTimeout(process.env.CI ? 2000 : 800);
  121 |     }
  122 |   }
  123 | 
  124 |   // ── Saved Filters ────────────────────────────────────────────
  125 | 
  126 |   async clickSavedFilter(filterName) {
  127 |     await this.page.getByText(filterName, { exact: false }).first().click();
  128 |     await this.page.waitForTimeout(process.env.CI ? 2000 : 800);
  129 |   }
  130 | 
  131 |   // ── Table interactions ───────────────────────────────────────
  132 | 
  133 |   async expandPatientRow(index = 0) {
  134 |     const rows = this.page.locator('tr').filter({ has: this.page.locator('td') });
  135 |     await rows.nth(index).locator('[aria-label="expand"], svg, button').first().click();
  136 |   }
  137 | 
  138 |   async openPatient(patientName) {
  139 |     await this.page.getByText(patientName).first().click();
  140 |     await this.page.waitForLoadState('domcontentloaded');
  141 |   }
  142 | 
  143 |   async getFirstPatientName() {
  144 |     return this.page.locator('td').first().textContent();
  145 |   }
  146 | 
  147 |   // ── Add Patient ──────────────────────────────────────────────
  148 | 
  149 |   async clickAddPatient() {
  150 |     await this.addPatientBtn.click();
  151 |   }
  152 | 
  153 |   async clickAddPatientMRN() {
  154 |     await this.addPatientMRNBtn.click();
  155 |   }
  156 | }
  157 | 
  158 | module.exports = { PatientListingsPage };
```