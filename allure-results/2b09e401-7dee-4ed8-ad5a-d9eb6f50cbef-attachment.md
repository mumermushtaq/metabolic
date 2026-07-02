# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\Patient-info.spec.js >> Patient Info — @patient-info >> should toggle verify status and restore it
- Location: tests\e2e\Patient-info.spec.js:62:2

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Unverify')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Unverify')

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
- img
- text: Umer Mushtaq
- button "notification":
  - img "notification"
- text: "0"
- img
- heading "Umer Mushtaq" [level=6]
- text: Admin • Diabetologist
- list:
  - link "Patient Info":
    - /url: /patient/profile/1706
    - listitem: Patient Info
  - link "Visits":
    - /url: /patient/profile/visits/1706
    - listitem: Visits
  - link "Consent & Intake":
    - /url: /patient/profile/consent-intake/1706
    - listitem: Consent & Intake
  - link "Health Info":
    - /url: /patient/profile/health-info/1706
    - listitem: Health Info
  - link "Documents":
    - /url: /patient/profile/medical-reports/1706
    - listitem: Documents
  - link "BCA Scans":
    - /url: /patient/profile/bca-scans/1706
    - listitem: BCA Scans
  - link "Glucose Analysis":
    - /url: /patient/profile/glucose-analysis/1706
    - listitem: Glucose Analysis
  - link "Add Coupon":
    - /url: /patient/profile/add-coupon/1706
    - listitem: Add Coupon
  - link "GLP-1 Protocol":
    - /url: /patient/profile/glp-protocol/1706
    - listitem: GLP-1 Protocol
- button "Quick Chat":
  - img
- button "Pinned Patients":
  - img
- button [expanded]:
  - img
- listitem:
  - img
  - text: Edit Info
- listitem:
  - img
  - text: Verify
- paragraph: Umer Mushtaq abc123pkt
- text: Phone Number
- paragraph: "+923029676088"
- text: Email Address
- paragraph: umer.meta@test.com
- text: Date of Birth
- paragraph: 02/04/2025
- text: Age
- paragraph: "1"
- text: Sex
- paragraph: Male
- text: Location
- paragraph: Pakistan
- text: Preferred Communication Language
- paragraph: "-"
- text: Program
- paragraph: Diabetes
- heading "Medical Info" [level=6]
- text: Readiness
- img
- paragraph: N/A
- text: Content Tag
- img
- paragraph: N/A
- text: Diagnoses Medications
- paragraph: AERIUS S
- text: Primary Team
- img
- list:
  - button "avatar":
    - listitem:
      - img "avatar"
- heading "Internal Notes" [level=6]
- banner:
  - img
  - textbox "Search"
  - button "Open date filter":
    - img
  - button "Add note":
    - img
- heading "No Data Found" [level=5]
- heading "App Activity" [level=6]
- paragraph: Sign Up Date
- paragraph: 17/11/2025
- paragraph: App Version
- paragraph: "--"
- paragraph: Verification Date
- paragraph: "--"
- paragraph: Last Active
- paragraph: "--"
- paragraph: Last Food Log
- paragraph: "--"
- paragraph: Last Weight Log
- paragraph: "--"
- paragraph: Last Message Received from Patient
- paragraph: "--"
- paragraph: Patient's last message has no replies yet.
- paragraph: Last Message Sent to Patient
- paragraph: "--"
- paragraph: Last Message Sent to Patient by Me
- paragraph: "--"
- button "Chat to Patient"
- heading "Devices and Connections" [level=6]
- paragraph: No connected devices found
- paragraph: Chat
- button "delete"
- paragraph: Metabolic
- paragraph: Zone
- alert
```

# Test source

```ts
  1   | // ─────────────────────────────────────────────────────────────
  2   | // tests/e2e/patient-info.spec.js
  3   | // Test suite for Patient Profile — Patient Info tab
  4   | // Locators verified via Playwright Codegen
  5   | // ─────────────────────────────────────────────────────────────
  6   | 
  7   | const { test, expect } = require('@playwright/test');
  8   | const { PatientInfoPage } = require('../../pages/PatientInfoPage');
  9   | 
  10  | test.describe.configure({ mode: 'serial' });
  11  | 
  12  | // Known test patient — adjust if this record changes on the portal
  13  | const TEST_PATIENT_NAME = 'umer mushtaq';
  14  | 
  15  | test.describe('Patient Info — @patient-info', () => {
  16  | 
  17  |   let infoPage;
  18  | 
  19  |   test.beforeEach(async ({ page }) => {
  20  |     infoPage = new PatientInfoPage(page);
  21  |     await infoPage.openPatientByName(TEST_PATIENT_NAME);
  22  |     await page.waitForLoadState('domcontentloaded');
  23  |   });
  24  | 
  25  | 
  26  |   // ══════════════════════════════════════════════════════════
  27  |   // 1. NAVIGATION TO PROFILE
  28  |   // ══════════════════════════════════════════════════════════
  29  | 
  30  |   test('should navigate to patient profile from listings search', async ({ page }) => {
  31  |     await expect(page).toHaveURL(/\/patient\/profile\//);
  32  |   });
  33  | 
  34  |   test('should show the options menu on patient profile', async ({ page }) => {
  35  |     await expect(infoPage.optionsMenuBtn).toBeVisible();
  36  |   });
  37  | 
  38  |   // ══════════════════════════════════════════════════════════
  39  |   // 2. EDIT INFO
  40  |   // ══════════════════════════════════════════════════════════
  41  | 
  42  |   test('should open Edit Info from options menu', async ({ page }) => {
  43  |     await infoPage.optionsMenuBtn.click();
  44  |     await expect(infoPage.editInfoMenuItem).toBeVisible();
  45  |     await infoPage.editInfoMenuItem.click();
  46  | 
  47  |     // Just confirm something opened — page navigated or a panel appeared
  48  |     await page.waitForTimeout(1000);
  49  |   });
  50  | 
  51  |   test.skip('should save patient info without changes', async ({ page }) => {
  52  |     // Skipped — flow needs re-verification with Codegen,
  53  |     // "Edit Patient" button assumption was incorrect
  54  |     await infoPage.saveEditWithoutChanges();
  55  |     await expect(infoPage.editPatientBtn).not.toBeVisible({ timeout: 10000 });
  56  |   });
  57  | 
  58  |   // ══════════════════════════════════════════════════════════
  59  |   // 3. VERIFY / UNVERIFY
  60  |   // ══════════════════════════════════════════════════════════
  61  | 
  62  |  test('should toggle verify status and restore it', async ({ page }) => {
  63  |   await infoPage.optionsMenuBtn.click();
  64  | 
  65  |   // Check which menu item is currently available — patient may start
  66  |   // either verified or unverified depending on previous test runs
  67  |   const isCurrentlyVerified = await infoPage.unverifyMenuItem.isVisible().catch(() => false);
  68  | 
  69  |   if (isCurrentlyVerified) {
  70  |     // Patient is verified → unverify it
  71  |     await infoPage.unverifyMenuItem.click();
  72  |     await infoPage.confirmYesBtn.click();
  73  |     await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
  74  | 
  75  |     // Restore by re-verifying
  76  |     await infoPage.optionsMenuBtn.click();
  77  |     await expect(infoPage.verifyMenuItem).toBeVisible();
  78  |     await infoPage.verifyMenuItem.click();
  79  |     await infoPage.confirmYesBtn.click();
  80  |     await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
  81  | 
  82  |   } else {
  83  |     // Patient is already unverified → verify it
  84  |     await expect(infoPage.verifyMenuItem).toBeVisible();
  85  |     await infoPage.verifyMenuItem.click();
  86  |     await infoPage.confirmYesBtn.click();
  87  |     await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
  88  | 
  89  |     // Restore by unverifying again
  90  |     await infoPage.optionsMenuBtn.click();
> 91  |     await expect(infoPage.unverifyMenuItem).toBeVisible();
      |                                             ^ Error: expect(locator).toBeVisible() failed
  92  |     await infoPage.unverifyMenuItem.click();
  93  |     await infoPage.confirmYesBtn.click();
  94  |     await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
  95  |   }
  96  | });
  97  | 
  98  |   // ══════════════════════════════════════════════════════════
  99  |   // 4. PIN / UNPIN PATIENT
  100 |   // ══════════════════════════════════════════════════════════
  101 | 
  102 |   test('should pin and then unpin the patient', async ({ page }) => {
  103 |     await expect(infoPage.pinnedPatientsBtn).toBeVisible();
  104 | 
  105 |     // Pin
  106 |     await infoPage.togglePinPatient();
  107 | 
  108 |     // Unpin (toggle back to original state)
  109 |     await infoPage.togglePinPatient();
  110 |   });
  111 | 
  112 |   // ══════════════════════════════════════════════════════════
  113 |   // 5. INTERNAL NOTES
  114 |   // ══════════════════════════════════════════════════════════
  115 | 
  116 |   test('should add an internal note and submit it', async ({ page }) => {
  117 |     const noteText = `Automation suite test ${Date.now()}`;
  118 | 
  119 |     await infoPage.addNote(noteText);
  120 | 
  121 |     // Note should appear after submit
  122 |     await expect(page.getByText(noteText)).toBeVisible({ timeout: 10000 });
  123 |   });
  124 | 
  125 |   test('should open add note dialog and cancel without saving', async ({ page }) => {
  126 |     await infoPage.addNoteBtn.click();
  127 |     await expect(infoPage.noteTextInput).toBeVisible();
  128 | 
  129 |     await infoPage.noteCancelBtn.click();
  130 | 
  131 |     // Dialog should close — note input no longer visible
  132 |     await expect(infoPage.noteTextInput).not.toBeVisible({ timeout: 5000 });
  133 |   });
  134 | 
  135 | });
```