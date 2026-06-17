# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\add-patient.spec.js >> Add Patient — @add-patient >> should verify the newly added patient
- Location: tests\e2e\add-patient.spec.js:128:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('VERIFIED').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('VERIFIED').first()
    - waiting for" https://portal.dev.metabolichealth-app.com/patient/profile/10481" navigation to finish...
    - navigated to "https://portal.dev.metabolichealth-app.com/patient/profile/10481"

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
- text: Auto AT292928
- button "notification":
  - img "notification"
- text: "0"
- img
- heading "Umer Mushtaq" [level=6]
- text: Admin • Diabetologist
- list:
  - link "Patient Info":
    - /url: /patient/profile/10481
    - listitem: Patient Info
  - link "Visits":
    - /url: /patient/profile/visits/10481
    - listitem: Visits
  - link "Consent & Intake":
    - /url: /patient/profile/consent-intake/10481
    - listitem: Consent & Intake
  - link "Health Info":
    - /url: /patient/profile/health-info/10481
    - listitem: Health Info
  - link "Documents":
    - /url: /patient/profile/medical-reports/10481
    - listitem: Documents
  - link "BCA Scans":
    - /url: /patient/profile/bca-scans/10481
    - listitem: BCA Scans
  - link "Glucose Analysis":
    - /url: /patient/profile/glucose-analysis/10481
    - listitem: Glucose Analysis
  - link "Add Coupon":
    - /url: /patient/profile/add-coupon/10481
    - listitem: Add Coupon
  - link "GLP-1 Protocol":
    - /url: /patient/profile/glp-protocol/10481
    - listitem: GLP-1 Protocol
- button "Quick Chat":
  - img
- button "Pinned Patients":
  - img
- button:
  - img
- paragraph: Auto AT292928 AT292928
- text: Phone Number
- paragraph: "+923839477556"
- text: Email Address
- paragraph: at292928@getnada.com
- text: Date of Birth
- paragraph: 01/06/1990
- text: Age
- paragraph: "36"
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
- paragraph: NA
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
- paragraph: 17/06/2026
- paragraph: App Version
- paragraph: "--"
- paragraph: Verification Date
- paragraph: 17/06/2026 (an hour ago)
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
  41  |     await page.getByRole('row').nth(1).waitFor({ state: 'visible', timeout: 15000 });
  42  |   });
  43  | 
  44  |   // ══════════════════════════════════════════════════════════
  45  |   // 1. MODAL — OPEN & CLOSE
  46  |   // ══════════════════════════════════════════════════════════
  47  | 
  48  |   test('should open Add Patient modal when clicking Add Patient button', async ({ page }) => {
  49  |     await listingsPage.addPatientBtn.click();
  50  |     await expect(addPage.modal).toBeVisible();
  51  |   });
  52  | 
  53  |   test('should close Add Patient modal when clicking Cancel', async ({ page }) => {
  54  |     await listingsPage.addPatientBtn.click();
  55  |     await expect(addPage.modal).toBeVisible();
  56  | 
  57  |     await addPage.cancel();
  58  |     await expect(addPage.modal).not.toBeVisible();
  59  |   });
  60  | 
  61  |   test('should display all key form fields inside the modal', async ({ page }) => {
  62  |     await listingsPage.addPatientBtn.click();
  63  | 
  64  |     await expect(addPage.firstNameInput).toBeVisible();
  65  |     await expect(addPage.lastNameInput).toBeVisible();
  66  |     await expect(addPage.dobInput).toBeVisible();
  67  |     await expect(addPage.genderMale).toBeVisible();
  68  |     await expect(addPage.genderFemale).toBeVisible();
  69  |     await expect(addPage.emailInput).toBeVisible();
  70  |     await expect(addPage.phoneInput).toBeVisible();
  71  |     await expect(addPage.mrnInput).toBeVisible();
  72  |     await expect(addPage.submitBtn).toBeVisible();
  73  |   });
  74  | 
  75  |   // ══════════════════════════════════════════════════════════
  76  |   // 2. FORM VALIDATION
  77  |   // ══════════════════════════════════════════════════════════
  78  | 
  79  |   test('should not submit when all fields are empty', async ({ page }) => {
  80  |     await listingsPage.addPatientBtn.click();
  81  |     await addPage.submitBtn.click();
  82  | 
  83  |     // Modal stays open — form was not submitted
  84  |     await expect(addPage.modal).toBeVisible();
  85  |   });
  86  | 
  87  |   test('should not submit when First Name is missing', async ({ page }) => {
  88  |     await listingsPage.addPatientBtn.click();
  89  |     await addPage.fillBasicOnly({ lastName: patient.lastName, email: patient.email });
  90  |     await addPage.submitBtn.click();
  91  | 
  92  |     await expect(addPage.modal).toBeVisible();
  93  |   });
  94  | 
  95  |   test('should not submit when Last Name is missing', async ({ page }) => {
  96  |     await listingsPage.addPatientBtn.click();
  97  |     await addPage.fillBasicOnly({ firstName: patient.firstName, email: patient.email });
  98  |     await addPage.submitBtn.click();
  99  | 
  100 |     await expect(addPage.modal).toBeVisible();
  101 |   });
  102 | 
  103 |   // ══════════════════════════════════════════════════════════
  104 |   // 3. HAPPY PATH — ADD PATIENT
  105 |   // ══════════════════════════════════════════════════════════
  106 | 
  107 |   test('should add a new patient with all required fields and appear in listings', async ({ page }) => {
  108 |     await listingsPage.addPatientBtn.click();
  109 |     await expect(addPage.modal).toBeVisible();
  110 | 
  111 |     await addPage.fillForm(patient);
  112 | 
  113 |     await addPage.submit();
  114 | 
  115 |     // Modal closing confirms the form submitted successfully
  116 |     // (URL was already /patient before, so toHaveURL alone is not reliable here)
  117 |     await expect(addPage.modal).not.toBeVisible({ timeout: 30000 });
  118 | 
  119 |     // Newly added patient should appear in search
  120 |     await listingsPage.searchPatient(patient.lastName);
  121 |     await expect(page.getByText(patient.lastName).first()).toBeVisible();
  122 |   });
  123 | 
  124 |   // ══════════════════════════════════════════════════════════
  125 |   // 4. VERIFY PATIENT
  126 |   // ══════════════════════════════════════════════════════════
  127 | 
  128 |   test('should verify the newly added patient', async ({ page }) => {
  129 |     // Find the patient added in the previous test
  130 |     await listingsPage.searchPatient(patient.lastName);
  131 |     await page.getByRole('link', { name: new RegExp(patient.lastName, 'i') }).first().click();
  132 |     await page.waitForLoadState('networkidle');
  133 | 
  134 |     // Open the action dropdown on the patient profile header
  135 |     await page.locator('#dropdown-basic').first().click();
  136 |     await page.getByText('Verify', { exact: true }).click();
  137 |     await page.getByRole('button', { name: 'Yes' }).click();
  138 |     await page.waitForLoadState('networkidle');
  139 | 
  140 |     // Status should now show VERIFIED
> 141 |     await expect(page.getByText('VERIFIED').first()).toBeVisible();
      |                                                      ^ Error: expect(locator).toBeVisible() failed
  142 |   });
  143 | 
  144 |   // ══════════════════════════════════════════════════════════
  145 |   // 5. ADD PATIENT (MRN)
  146 |   // ══════════════════════════════════════════════════════════
  147 | 
  148 |   test('should open MRN lookup when clicking Add Patient (MRN)', async ({ page }) => {
  149 |     await listingsPage.addPatientMRNBtn.click();
  150 |     await page.waitForLoadState('networkidle');
  151 | 
  152 |     const isDialog = await page.locator('[role="dialog"]').isVisible().catch(() => false);
  153 |     const isNewUrl  = page.url().includes('mrn') || page.url().includes('add');
  154 |     expect(isDialog || isNewUrl).toBeTruthy();
  155 |   });
  156 | 
  157 |   test('should show error for a non-existent MRN', async ({ page }) => {
  158 |     await listingsPage.addPatientMRNBtn.click();
  159 |     await page.waitForLoadState('networkidle');
  160 | 
  161 |     const mrnField = page.getByRole('textbox').first();
  162 |     await mrnField.fill('INVALID_MRN_XXXXXX');
  163 |     await page.getByRole('button', { name: /search|find|lookup/i }).first().click();
  164 |     await page.waitForLoadState('networkidle');
  165 | 
  166 |     await expect(
  167 |       page.getByText(/not found|does not exist|no patient/i).first()
  168 |     ).toBeVisible({ timeout: 10000 });
  169 |   });
  170 | 
  171 | });
  172 | 
```