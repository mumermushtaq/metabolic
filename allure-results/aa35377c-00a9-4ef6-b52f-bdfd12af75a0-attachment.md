# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\patient-listings.spec.js >> Patient Listings — @patients >> should load patient listings page successfully
- Location: tests\e2e\patient-listings.spec.js:25:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/patient/
Received string:  "https://portal.dev.metabolichealth-app.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://portal.dev.metabolichealth-app.com/"

```

```yaml
- img "Metabolic logo"
- paragraph: Sign in to manage patients
- text: Phone Number
- textbox "Phone Number":
  - /placeholder: Enter your phone number
- text: Password
- textbox "Password":
  - /placeholder: Enter your password
- link "Forget Password?":
  - /url: /forgot-password
- button "Sign In"
- heading "Don't have a password yet? Sign Up" [level=5]
- alert
```

# Test source

```ts
  1   | // ─────────────────────────────────────────────────────────────
  2   | // tests/e2e/patient-listings.spec.js
  3   | // Test suite for Patient Listings screen
  4   | // ─────────────────────────────────────────────────────────────
  5   | 
  6   | const { test, expect } = require('@playwright/test');
  7   | const { PatientListingsPage } = require('../../pages/PatientListingsPage');
  8   | 
  9   | // ── Shared login state ────────────────────────────────────────
  10  | // We log in once before all tests to save time
  11  | test.describe.configure({ mode: 'serial' });
  12  | 
  13  | test.describe('Patient Listings — @patients', () => {
  14  | let listingsPage;
  15  | 
  16  | test.beforeEach(async ({ page }) => {
  17  |   listingsPage = new PatientListingsPage(page);
  18  |   await listingsPage.goto();
  19  | });
  20  | 
  21  |   // ══════════════════════════════════════════════════════════
  22  |   // 1. PAGE LOAD TESTS
  23  |   // ══════════════════════════════════════════════════════════
  24  | 
  25  |   test('should load patient listings page successfully', async ({ page }) => {
  26  |     // Assert URL is correct
> 27  |     await expect(page).toHaveURL(/\/patient/);
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  28  | 
  29  |     // Assert page title is visible
  30  |     await expect(listingsPage.pageTitle).toBeVisible();
  31  | 
  32  |     // Assert patient count shows a number
  33  |     const count = await listingsPage.getPatientCount();
  34  |     expect(count).toBeGreaterThan(0);
  35  |   });
  36  | 
  37  |   test('should display all required table columns', async ({ page }) => {
  38  |     // All columns must be visible in the table header
  39  |     await expect(page.getByText('Patient')).toBeVisible();
  40  |     await expect(page.getByText('Diagnosis')).toBeVisible();
  41  |     await expect(page.getByText('TIR')).toBeVisible();
  42  |     await expect(page.getByText('Food Log')).toBeVisible();
  43  |     await expect(page.getByText('Weight')).toBeVisible();
  44  |     await expect(page.getByText('Active Chats')).toBeVisible();
  45  |     await expect(page.getByText('Status')).toBeVisible();
  46  |     await expect(page.getByText('Verification Date')).toBeVisible();
  47  |     await expect(page.getByText('Patient Program')).toBeVisible();
  48  |   });
  49  | 
  50  |   test('should display search bar and action buttons', async ({ page }) => {
  51  |     await expect(listingsPage.searchInput).toBeVisible();
  52  |     await expect(listingsPage.filterBtn).toBeVisible();
  53  |     await expect(listingsPage.addPatientBtn).toBeVisible();
  54  |     await expect(listingsPage.addPatientMRNBtn).toBeVisible();
  55  |   });
  56  | 
  57  |   test('should display saved filters row', async ({ page }) => {
  58  |     await expect(listingsPage.savedFiltersRow).toBeVisible();
  59  |   });
  60  | 
  61  |   // ══════════════════════════════════════════════════════════
  62  |   // 2. SEARCH TESTS
  63  |   // ══════════════════════════════════════════════════════════
  64  | 
  65  |   test('should search patient by name and show results', async ({ page }) => {
  66  |     const countBefore = await listingsPage.getPatientCount();
  67  | 
  68  |     // Search for a known patient name
  69  |     await listingsPage.searchPatient('Umer Mushtaq');
  70  | 
  71  |     // Patient count should decrease
  72  |     const countAfter = await listingsPage.getPatientCount();
  73  |     expect(countAfter).toBeLessThanOrEqual(countBefore);
  74  | 
  75  |     // Search results should contain the searched name
  76  |     await expect(page.getByText('Umer Mushtaq').first()).toBeVisible();
  77  | 
  78  |     // Clear Filter button should appear
  79  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  80  |   });
  81  | 
  82  |   test('should show correct patient count after search', async ({ page }) => {
  83  |     await listingsPage.searchPatient('Umer Mushtaq');
  84  |     const count = await listingsPage.getPatientCount();
  85  | 
  86  |     // Count in header should match visible rows
  87  |     const rows = page.locator('tbody tr');
  88  |     const rowCount = await rows.count();
  89  |     expect(rowCount).toBeLessThanOrEqual(count);
  90  |   });
  91  | 
  92  |   test('should clear search and restore full list', async ({ page }) => {
  93  |     const countBefore = await listingsPage.getPatientCount();
  94  | 
  95  |     // Search first
  96  |     await listingsPage.searchPatient('Umer Mushtaq');
  97  | 
  98  |     // Now clear
  99  |     await listingsPage.clearSearch();
  100 | 
  101 |     // Count should be back to original
  102 |     const countAfter = await listingsPage.getPatientCount();
  103 |     expect(countAfter).toBeGreaterThanOrEqual(countBefore);
  104 |   });
  105 | 
  106 |   test('should show no results for non-existent patient', async ({ page }) => {
  107 |     await listingsPage.searchPatient('ZZZZNONEXISTENTPATIENT99999');
  108 | 
  109 |     const count = await listingsPage.getPatientCount();
  110 |     expect(count).toBe(0);
  111 |   });
  112 | 
  113 |   test('should search is case-insensitive', async ({ page }) => {
  114 |     // Search uppercase
  115 |     await listingsPage.searchPatient('UMER MUSHTAQ');
  116 |     const countUpper = await listingsPage.getPatientCount();
  117 | 
  118 |     await listingsPage.clearSearch();
  119 | 
  120 |     // Search lowercase
  121 |     await listingsPage.searchPatient('umer mushtaq');
  122 |     const countLower = await listingsPage.getPatientCount();
  123 | 
  124 |     expect(countUpper).toBe(countLower);
  125 |   });
  126 | 
  127 |   test('should show clear filter button only when search is active', async ({ page }) => {
```