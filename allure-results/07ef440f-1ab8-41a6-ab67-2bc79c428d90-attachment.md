# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\patient-listings.spec.js >> Patient Listings — @patients >> should apply saved filter and update results
- Location: tests\e2e\patient-listings.spec.js:191:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img "sidebarLogoImg" [ref=e7]
        - generic:
          - img "sidebarLogoTxt"
      - generic [ref=e8]:
        - link "sidebarIcon2 Patients" [ref=e10] [cursor=pointer]:
          - /url: /patient
          - generic [ref=e11]:
            - img "sidebarIcon2" [ref=e12]
            - generic: Patients
        - link "sidebarIcon3 Chat" [ref=e14] [cursor=pointer]:
          - /url: /chat
          - generic [ref=e15]:
            - img "sidebarIcon3" [ref=e16]
            - generic: Chat
        - link "Tasks" [ref=e18] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e19]:
            - img [ref=e20]
            - generic: Tasks
    - generic [ref=e24]:
      - generic [ref=e26]:
        - link "Patients" [ref=e27] [cursor=pointer]:
          - /url: /patient
          - heading "Patients" [level=3] [ref=e28]
        - generic [ref=e29]: (0)
      - generic [ref=e31]:
        - button "notification" [ref=e33] [cursor=pointer]:
          - img "notification" [ref=e34]
        - generic [ref=e35]:
          - img "profile" [ref=e36]
          - generic [ref=e37] [cursor=pointer]:
            - heading [level=6]
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]:
              - generic [ref=e43]: Search
              - textbox "Search" [ref=e45]
            - button "Filter" [ref=e47] [cursor=pointer]:
              - generic [ref=e48]:
                - img [ref=e50]
                - text: Filter
          - generic [ref=e52]:
            - button [ref=e54] [cursor=pointer]:
              - img [ref=e56]
            - button "Add Patient" [ref=e59] [cursor=pointer]:
              - generic [ref=e60]:
                - img [ref=e62]
                - text: Add Patient
            - button "Add Patient (MRN)" [ref=e65] [cursor=pointer]:
              - generic [ref=e66]:
                - img [ref=e68]
                - text: Add Patient (MRN)
        - generic [ref=e70]:
          - generic [ref=e71]: "Saved Filters:"
          - generic [ref=e72]:
            - status [ref=e73]
            - img "Loading..." [ref=e74]
      - generic [ref=e76]:
        - status [ref=e77]
        - table [ref=e82]:
          - generic [ref=e84]: There are no records to display
  - alert [ref=e85]
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
  9   | test.describe.configure({ mode: 'serial' });
  10  | 
  11  | test.describe('Patient Listings — @patients', () => {
  12  | 
  13  |   let listingsPage;
  14  | 
> 15  |   test.beforeEach(async ({ page }) => {
      |        ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  16  |     listingsPage = new PatientListingsPage(page);
  17  |     await listingsPage.goto();
  18  |   });
  19  | 
  20  |   // ══════════════════════════════════════════════════════════
  21  |   // 1. PAGE LOAD TESTS
  22  |   // ══════════════════════════════════════════════════════════
  23  | 
  24  |   test('should load patient listings page successfully', async ({ page }) => {
  25  |     // Assert URL is correct
  26  |     await expect(page).toHaveURL(/\/patient/);
  27  | 
  28  |     // Assert page title is visible
  29  |     await expect(listingsPage.pageTitle).toBeVisible();
  30  | 
  31  |     // Assert at least one data row is visible (nth(1) skips header)
  32  |     await expect(page.getByRole('row').nth(1)).toBeVisible();
  33  |   });
  34  | 
  35  |   test('should display all required table columns', async ({ page }) => {
  36  |   await expect(page.getByRole('columnheader', { name: 'Patient ▲' })).toBeVisible();
  37  |   await expect(page.getByRole('columnheader', { name: 'Diagnosis ▲' })).toBeVisible();
  38  |   await expect(page.getByRole('columnheader', { name: 'TIR ▲' })).toBeVisible();
  39  |   await expect(page.getByRole('columnheader', { name: 'Food Log ▲' })).toBeVisible();
  40  |   await expect(page.getByRole('columnheader', { name: 'Weight ▲' })).toBeVisible();
  41  |   await expect(page.getByRole('columnheader', { name: 'Active Chats ▲' })).toBeVisible();
  42  |   await expect(page.getByRole('columnheader', { name: 'Status ▲' })).toBeVisible();
  43  |   await expect(page.getByRole('columnheader', { name: 'Verification Date ▲' })).toBeVisible();
  44  |   await expect(page.getByRole('columnheader', { name: 'Patient Program ▲' })).toBeVisible();
  45  | });
  46  | 
  47  |   test('should display search bar and action buttons', async ({ page }) => {
  48  |     await expect(listingsPage.searchInput).toBeVisible();
  49  |     await expect(listingsPage.filterBtn).toBeVisible();
  50  |     await expect(listingsPage.addPatientBtn).toBeVisible();
  51  |     await expect(listingsPage.addPatientMRNBtn).toBeVisible();
  52  |   });
  53  | 
  54  |   test('should display saved filters row', async ({ page }) => {
  55  |     await expect(listingsPage.savedFiltersRow).toBeVisible();
  56  |   });
  57  | 
  58  |   // ══════════════════════════════════════════════════════════
  59  |   // 2. SEARCH TESTS
  60  |   // ══════════════════════════════════════════════════════════
  61  | 
  62  |   test('should search patient by name and show results', async ({ page }) => {
  63  |     await listingsPage.searchPatient('Umer Mushtaq');
  64  | 
  65  |     // Search results should contain the searched name
  66  |     await expect(page.getByText('Umer Mushtaq').first()).toBeVisible();
  67  | 
  68  |     // Clear Filter button should appear
  69  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  70  |   });
  71  | 
  72  |   test('should show rows after search', async ({ page }) => {
  73  |     await listingsPage.searchPatient('Umer Mushtaq');
  74  | 
  75  |     // At least one data row should be visible
  76  |     await expect(page.getByRole('row').nth(1)).toBeVisible();
  77  |   });
  78  | 
  79  |   test('should clear search and restore full list', async ({ page }) => {
  80  |     // Search first
  81  |     await listingsPage.searchPatient('Umer Mushtaq');
  82  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  83  | 
  84  |     // Now clear
  85  |     await listingsPage.clearSearch();
  86  | 
  87  |     // Clear filter button should disappear
  88  |     await expect(listingsPage.clearFilterBtn).not.toBeVisible();
  89  | 
  90  |     // Table rows should still be visible
  91  |     await expect(page.getByRole('row').nth(1)).toBeVisible();
  92  |   });
  93  | 
  94  |   test('should show no results for non-existent patient', async ({ page }) => {
  95  |     await listingsPage.searchPatient('ZZZZNONEXISTENTPATIENT99999');
  96  | 
  97  |     // App removes the entire table (incl. header) when there are no results —
  98  |     // row count goes to 0, not 1. Assert no data rows exist in tbody.
  99  |     await expect(page.locator('table tbody tr')).toHaveCount(0, { timeout: 15000 });
  100 |   });
  101 | 
  102 |   test('should search is case-insensitive', async ({ page }) => {
  103 |     // Search uppercase
  104 |     await listingsPage.searchPatient('UMER MUSHTAQ');
  105 |     const upperRows = await page.getByRole('row').count();
  106 | 
  107 |     await listingsPage.clearSearch();
  108 |     await page.getByRole('row').nth(1).waitFor({ state: 'visible' });
  109 | 
  110 |     // Search lowercase
  111 |     await listingsPage.searchPatient('umer mushtaq');
  112 |     const lowerRows = await page.getByRole('row').count();
  113 | 
  114 |     expect(upperRows).toBe(lowerRows);
  115 |   });
```