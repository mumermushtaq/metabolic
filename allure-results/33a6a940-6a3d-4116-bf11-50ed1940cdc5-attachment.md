# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\patient-listings.spec.js >> Patient Listings — @patients >> should load patient listings page successfully
- Location: tests\e2e\patient-listings.spec.js:24:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('tbody tr').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('tbody tr').first()

```

```yaml
- img "sidebarLogoImg"
- img "sidebarLogoTxt"
- link "sidebarIcon2 Patients":
  - /url: /patient
  - img "sidebarIcon2"
  - text: Patients
- link "sidebarIcon3 Chat":
  - /url: /chat
  - img "sidebarIcon3"
  - text: Chat
- link "sidebarIcon4 Team":
  - /url: /team
  - img "sidebarIcon4"
  - text: Team
- link "Survey":
  - /url: /survey#templates
- link "Tasks":
  - /url: /tasks
- link "Coupons":
  - /url: /coupon
- link "Patients":
  - /url: /patient
  - heading "Patients" [level=3]
- text: (7878)
- button "notification":
  - img "notification"
- text: "0"
- img
- heading "Umer Mushtaq" [level=6]
- text: Admin • Diabetologist Search
- textbox "Search"
- button "Filter":
  - img
  - text: Filter
- button:
  - img
- button "Add Patient":
  - img
  - text: Add Patient
- button "Add Patient (MRN)":
  - img
  - text: Add Patient (MRN)
- text: "Saved Filters: Male | English | Weight Loss"
- button:
  - img
- text: Age 20-24
- button:
  - img
- text: Verified Users | BCA Scan from July
- button:
  - img
- text: Primary Staff | Male
- button:
  - img
- text: test waleed updated
- button:
  - img
- text: new moiz test
- button:
  - img
- text: Umer's Test filter
- button:
  - img
- text: Test - Diagnoses - Hassam
- button:
  - img
- text: Male Filter
- button:
  - img
- table:
  - rowgroup:
    - row "Patient ▲ Diagnosis ▲ TIR ▲ Food Log ▲ Weight ▲ Active Chats ▲ Status ▲ Verification Date ▲ Patient Program ▲":
      - columnheader "Patient ▲"
      - columnheader "Diagnosis ▲"
      - columnheader "TIR ▲"
      - columnheader "Food Log ▲"
      - columnheader "Weight ▲"
      - columnheader "Active Chats ▲"
      - columnheader "Status ▲"
      - columnheader "Verification Date ▲"
      - columnheader "Patient Program ▲"
  - rowgroup:
    - row "Expand Row avatar sds 111 morta 111 2222 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9 10% 0 111 104 No VERIFIED December 10, 2025 12:00 AM Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar sds 111 morta 111 2222":
        - img "avatar"
        - link "sds 111 morta 111 2222":
          - /url: /patient/profile/7
          - paragraph: sds 111 morta 111
          - text: "2222"
      - cell "A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 A08.4 A08.4 A49.8 A08.39 B16.0 B15.0 B16.9 A49.9"
      - cell "10%"
      - cell "0"
      - cell "111 104":
        - text: "111"
        - img
        - text: "104"
      - cell "No"
      - cell "VERIFIED":
        - img
        - text: VERIFIED
      - cell "December 10, 2025 12:00 AM"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar Rihana Gates 908 A08.4 B16.0 D55.0 A09 0% 0 - No INVITED - HRT":
      - button "Expand Row":
        - img
      - cell "avatar Rihana Gates 908":
        - img "avatar"
        - link "Rihana Gates 908":
          - /url: /patient/profile/21
          - paragraph: Rihana Gates
          - text: "908"
      - cell "A08.4 B16.0 D55.0 A09"
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "INVITED":
        - img
        - text: INVITED
      - cell "-"
      - cell "HRT"
      - cell:
        - button:
          - img
    - row "Expand Row avatar Mojtaba Mojtahed 991 0% 0 - No INVITED - Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar Mojtaba Mojtahed 991":
        - img "avatar"
        - link "Mojtaba Mojtahed 991":
          - /url: /patient/profile/33
          - paragraph: Mojtaba Mojtahed
          - text: "991"
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "INVITED":
        - img
        - text: INVITED
      - cell "-"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar Saman Salehi 0% 0 - No VERIFIED June 10, 2022 4:05 PM Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar Saman Salehi":
        - img "avatar"
        - link "Saman Salehi":
          - /url: /patient/profile/41
          - paragraph: Saman Salehi
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "VERIFIED":
        - img
        - text: VERIFIED
      - cell "June 10, 2022 4:05 PM"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar Morgan A abc123pkt1 A08.8 0% 0 65 No PENDING - Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar Morgan A abc123pkt1":
        - img "avatar"
        - link "Morgan A abc123pkt1":
          - /url: /patient/profile/46
          - paragraph: Morgan A
          - text: abc123pkt1
      - cell "A08.8"
      - cell "0%"
      - cell "0"
      - cell "65"
      - cell "No"
      - cell "PENDING":
        - img
        - text: PENDING
      - cell "-"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar Saman Salehi 990 0% 0 - No ACTIVATED - Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar Saman Salehi 990":
        - img "avatar"
        - link "Saman Salehi 990":
          - /url: /patient/profile/52
          - paragraph: Saman Salehi
          - text: "990"
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "ACTIVATED":
        - img
        - text: ACTIVATED
      - cell "-"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar saman salehi 0% 0 - No ACTIVATED - Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar saman salehi":
        - img "avatar"
        - link "saman salehi":
          - /url: /patient/profile/53
          - paragraph: saman salehi
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "ACTIVATED":
        - img
        - text: ACTIVATED
      - cell "-"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar 213 123wq qwqw 0% 0 - No VERIFIED June 14, 2022 5:08 PM Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar 213 123wq qwqw":
        - img "avatar"
        - link "213 123wq qwqw":
          - /url: /patient/profile/54
          - paragraph: 213 123wq
          - text: qwqw
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "VERIFIED":
        - img
        - text: VERIFIED
      - cell "June 14, 2022 5:08 PM"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar Saman Salehi 0% 0 - No ACTIVATED - Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar Saman Salehi":
        - img "avatar"
        - link "Saman Salehi":
          - /url: /patient/profile/55
          - paragraph: Saman Salehi
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "ACTIVATED":
        - img
        - text: ACTIVATED
      - cell "-"
      - cell "Diabetes"
      - cell:
        - button:
          - img
    - row "Expand Row avatar sa qwe 122 0% 0 - No VERIFIED July 4, 2022 9:58 AM Diabetes":
      - button "Expand Row":
        - img
      - cell "avatar sa qwe 122":
        - img "avatar"
        - link "sa qwe 122":
          - /url: /patient/profile/56
          - paragraph: sa qwe
          - text: "122"
      - cell
      - cell "0%"
      - cell "0"
      - cell "-"
      - cell "No"
      - cell "VERIFIED":
        - img
        - text: VERIFIED
      - cell "July 4, 2022 9:58 AM"
      - cell "Diabetes"
      - cell:
        - button:
          - img
- list:
  - listitem
  - listitem: "1"
  - listitem: "2"
  - listitem: "3"
  - listitem: "4"
  - listitem: "5"
  - listitem: …
  - listitem: "788"
  - listitem
- paragraph: Chat
- button "delete"
- paragraph: Metabolic
- paragraph: Zone
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
  9   | test.describe.configure({ mode: 'serial' });
  10  | 
  11  | test.describe('Patient Listings — @patients', () => {
  12  | 
  13  |   let listingsPage;
  14  | 
  15  |   test.beforeEach(async ({ page }) => {
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
  31  |     // Assert table has loaded with at least one row
> 32  |     await expect(page.locator('tbody tr').first()).toBeVisible();
      |                                                    ^ Error: expect(locator).toBeVisible() failed
  33  |   });
  34  | 
  35  |   test('should display all required table columns', async ({ page }) => {
  36  |     await expect(page.getByText('Patient')).toBeVisible();
  37  |     await expect(page.getByText('Diagnosis')).toBeVisible();
  38  |     await expect(page.getByText('TIR')).toBeVisible();
  39  |     await expect(page.getByText('Food Log')).toBeVisible();
  40  |     await expect(page.getByText('Weight')).toBeVisible();
  41  |     await expect(page.getByText('Active Chats')).toBeVisible();
  42  |     await expect(page.getByText('Status')).toBeVisible();
  43  |     await expect(page.getByText('Verification Date')).toBeVisible();
  44  |     await expect(page.getByText('Patient Program')).toBeVisible();
  45  |   });
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
  63  |     // Search for a known patient name
  64  |     await listingsPage.searchPatient('Umer Mushtaq');
  65  | 
  66  |     // Search results should contain the searched name
  67  |     await expect(page.getByText('Umer Mushtaq').first()).toBeVisible();
  68  | 
  69  |     // Clear Filter button should appear
  70  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  71  |   });
  72  | 
  73  |   test('should show correct patient count after search', async ({ page }) => {
  74  |     await listingsPage.searchPatient('Umer Mushtaq');
  75  | 
  76  |     // Results table should show rows
  77  |     await expect(page.locator('tbody tr').first()).toBeVisible();
  78  |   });
  79  | 
  80  |   test('should clear search and restore full list', async ({ page }) => {
  81  |     // Search first
  82  |     await listingsPage.searchPatient('Umer Mushtaq');
  83  |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  84  | 
  85  |     // Now clear
  86  |     await listingsPage.clearSearch();
  87  | 
  88  |     // Clear filter button should disappear
  89  |     await expect(listingsPage.clearFilterBtn).not.toBeVisible();
  90  |   });
  91  | 
  92  |   test('should show no results for non-existent patient', async ({ page }) => {
  93  |     await listingsPage.searchPatient('ZZZZNONEXISTENTPATIENT99999');
  94  | 
  95  |     // Table should show no rows
  96  |     await expect(page.locator('tbody tr')).toHaveCount(0);
  97  |   });
  98  | 
  99  |   test('should search is case-insensitive', async ({ page }) => {
  100 |     // Search uppercase
  101 |     await listingsPage.searchPatient('UMER MUSHTAQ');
  102 |     const upperRows = await page.locator('tbody tr').count();
  103 | 
  104 |     await listingsPage.clearSearch();
  105 | 
  106 |     // Search lowercase
  107 |     await listingsPage.searchPatient('umer mushtaq');
  108 |     const lowerRows = await page.locator('tbody tr').count();
  109 | 
  110 |     expect(upperRows).toBe(lowerRows);
  111 |   });
  112 | 
  113 |   test('should show clear filter button only when search is active', async ({ page }) => {
  114 |     // No search — clear filter should not be visible
  115 |     await expect(listingsPage.clearFilterBtn).not.toBeVisible();
  116 | 
  117 |     // After search — clear filter should appear
  118 |     await listingsPage.searchPatient('Umer');
  119 |     await expect(listingsPage.clearFilterBtn).toBeVisible();
  120 |   });
  121 | 
  122 |   // ══════════════════════════════════════════════════════════
  123 |   // 3. FILTER MODAL TESTS
  124 |   // ══════════════════════════════════════════════════════════
  125 | 
  126 |   test('should open filter modal when clicking Filter button', async ({ page }) => {
  127 |     await listingsPage.openFilterModal();
  128 |     await expect(listingsPage.filterModal).toBeVisible();
  129 |   });
  130 | 
  131 |   test('should display all filter fields in modal', async ({ page }) => {
  132 |     await listingsPage.openFilterModal();
```