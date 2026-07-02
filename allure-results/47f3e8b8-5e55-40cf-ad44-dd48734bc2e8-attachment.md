# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\Patient-info.spec.js >> Patient Info — @patient-info >> DIAGNOSTIC v2 - find menu button by position
- Location: tests\e2e\Patient-info.spec.js:26:2

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Pinned Patients' }).locator('xpath=following-sibling::button[1]')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('button', { name: 'Pinned Patients' }).locator('xpath=following-sibling::button[1]')

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
- button:
  - img
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
- alert: Metabolic
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
  25  |   // ── DIAGNOSTIC — find correct dropdown index ───────────────────
  26  |  test('DIAGNOSTIC v2 - find menu button by position', async ({ page }) => {
  27  |   // The three-dot menu is the next button sibling after "Pinned Patients"
  28  |   const menuBtn = page.getByRole('button', { name: 'Pinned Patients' })
  29  |     .locator('xpath=following-sibling::button[1]');
  30  | 
> 31  |   await expect(menuBtn).toBeVisible({ timeout: 10000 });
      |                         ^ Error: expect(locator).toBeVisible() failed
  32  |   await menuBtn.click();
  33  | 
  34  |   await page.waitForTimeout(500);
  35  |   const isVisible = await page.getByText('Edit Info').isVisible().catch(() => false);
  36  |   console.log('Edit Info visible after clicking sibling button:', isVisible);
  37  | });
  38  | 
  39  |   // ══════════════════════════════════════════════════════════
  40  |   // 1. NAVIGATION TO PROFILE
  41  |   // ══════════════════════════════════════════════════════════
  42  | 
  43  |   test('should navigate to patient profile from listings search', async ({ page }) => {
  44  |     await expect(page).toHaveURL(/\/patient\/profile\//);
  45  |   });
  46  | 
  47  |   test('should show the options menu on patient profile', async ({ page }) => {
  48  |     await expect(infoPage.optionsMenuBtn).toBeVisible();
  49  |   });
  50  | 
  51  |   // ══════════════════════════════════════════════════════════
  52  |   // 2. EDIT INFO
  53  |   // ══════════════════════════════════════════════════════════
  54  | 
  55  |   test('should open Edit Info from options menu', async ({ page }) => {
  56  |     await infoPage.optionsMenuBtn.click();
  57  |     await expect(infoPage.editInfoMenuItem).toBeVisible();
  58  |     await infoPage.editInfoMenuItem.click();
  59  | 
  60  |     // Just confirm something opened — page navigated or a panel appeared
  61  |     await page.waitForTimeout(1000);
  62  |   });
  63  | 
  64  |   test.skip('should save patient info without changes', async ({ page }) => {
  65  |     // Skipped — flow needs re-verification with Codegen,
  66  |     // "Edit Patient" button assumption was incorrect
  67  |     await infoPage.saveEditWithoutChanges();
  68  |     await expect(infoPage.editPatientBtn).not.toBeVisible({ timeout: 10000 });
  69  |   });
  70  | 
  71  |   // ══════════════════════════════════════════════════════════
  72  |   // 3. VERIFY / UNVERIFY
  73  |   // ══════════════════════════════════════════════════════════
  74  | 
  75  |   test('should unverify and then re-verify the patient', async ({ page }) => {
  76  |     // Unverify
  77  |     await infoPage.optionsMenuBtn.click();
  78  |     await expect(infoPage.unverifyMenuItem).toBeVisible();
  79  |     await infoPage.unverifyMenuItem.click();
  80  |     await infoPage.confirmYesBtn.click();
  81  | 
  82  |     // Confirm dialog closed
  83  |     await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
  84  | 
  85  |     // Re-verify to restore original state
  86  |     await infoPage.optionsMenuBtn.click();
  87  |     await expect(infoPage.verifyMenuItem).toBeVisible();
  88  |     await infoPage.verifyMenuItem.click();
  89  |     await infoPage.confirmYesBtn.click();
  90  | 
  91  |     await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
  92  |   });
  93  | 
  94  |   // ══════════════════════════════════════════════════════════
  95  |   // 4. PIN / UNPIN PATIENT
  96  |   // ══════════════════════════════════════════════════════════
  97  | 
  98  |   test('should pin and then unpin the patient', async ({ page }) => {
  99  |     await expect(infoPage.pinnedPatientsBtn).toBeVisible();
  100 | 
  101 |     // Pin
  102 |     await infoPage.togglePinPatient();
  103 | 
  104 |     // Unpin (toggle back to original state)
  105 |     await infoPage.togglePinPatient();
  106 |   });
  107 | 
  108 |   // ══════════════════════════════════════════════════════════
  109 |   // 5. INTERNAL NOTES
  110 |   // ══════════════════════════════════════════════════════════
  111 | 
  112 |   test('should add an internal note and submit it', async ({ page }) => {
  113 |     const noteText = `Automation suite test ${Date.now()}`;
  114 | 
  115 |     await infoPage.addNote(noteText);
  116 | 
  117 |     // Note should appear after submit
  118 |     await expect(page.getByText(noteText)).toBeVisible({ timeout: 10000 });
  119 |   });
  120 | 
  121 |   test('should open add note dialog and cancel without saving', async ({ page }) => {
  122 |     await infoPage.addNoteBtn.click();
  123 |     await expect(infoPage.noteTextInput).toBeVisible();
  124 | 
  125 |     await infoPage.noteCancelBtn.click();
  126 | 
  127 |     // Dialog should close — note input no longer visible
  128 |     await expect(infoPage.noteTextInput).not.toBeVisible({ timeout: 5000 });
  129 |   });
  130 | 
  131 | });
```