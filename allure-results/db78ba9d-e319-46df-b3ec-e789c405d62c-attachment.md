# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\add-patient.spec.js >> Add Patient — @add-patient >> should verify the newly added patient
- Location: tests\e2e\add-patient.spec.js:128:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Verify', { exact: true })

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
        - link "sidebarIcon4 Team" [ref=e18] [cursor=pointer]:
          - /url: /team
          - generic [ref=e19]:
            - img "sidebarIcon4" [ref=e20]
            - generic: Team
        - link "Survey" [ref=e22] [cursor=pointer]:
          - /url: /survey#templates
          - generic [ref=e23]:
            - img [ref=e24]
            - generic: Survey
        - link "Tasks" [ref=e27] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e28]:
            - img [ref=e29]
            - generic: Tasks
        - link "Coupons" [ref=e32] [cursor=pointer]:
          - /url: /coupon
          - generic [ref=e33]:
            - img [ref=e34]
            - generic: Coupons
    - generic [ref=e39]:
      - generic [ref=e41]:
        - link "Patients" [ref=e42] [cursor=pointer]:
          - /url: /patient
          - heading "Patients" [level=3] [ref=e43]
        - generic [ref=e44]:
          - img [ref=e45]
          - text: Auto AT611975
      - generic [ref=e48]:
        - generic [ref=e49]:
          - button "notification" [ref=e50] [cursor=pointer]:
            - img "notification" [ref=e51]
          - generic: "0"
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e59] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e60]
            - generic [ref=e61]: Admin • Diabetologist
    - generic [ref=e62]:
      - list [ref=e65]:
        - link "Patient Info" [ref=e66] [cursor=pointer]:
          - /url: /patient/profile/10482
          - listitem [ref=e67]: Patient Info
        - link "Visits" [ref=e68] [cursor=pointer]:
          - /url: /patient/profile/visits/10482
          - listitem [ref=e69]: Visits
        - link "Consent & Intake" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/10482
          - listitem [ref=e71]: Consent & Intake
        - link "Health Info" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/health-info/10482
          - listitem [ref=e73]: Health Info
        - link "Documents" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/10482
          - listitem [ref=e75]: Documents
        - link "BCA Scans" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/10482
          - listitem [ref=e77]: BCA Scans
        - link "Glucose Analysis" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/10482
          - listitem [ref=e79]: Glucose Analysis
        - link "Add Coupon" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/10482
          - listitem [ref=e81]: Add Coupon
        - link "GLP-1 Protocol" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/10482
          - listitem [ref=e83]: GLP-1 Protocol
      - generic [ref=e86]:
        - generic [ref=e87]:
          - generic [ref=e89]:
            - generic [ref=e90]:
              - button "Quick Chat" [ref=e91] [cursor=pointer]:
                - img [ref=e92]
              - button "Pinned Patients" [ref=e94] [cursor=pointer]:
                - img [ref=e95]
              - button [ref=e98] [cursor=pointer]:
                - img [ref=e99]
            - generic [ref=e101]:
              - paragraph [ref=e107]:
                - text: Auto AT611975
                - generic [ref=e108]: AT611975
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - generic [ref=e111]: Phone Number
                  - paragraph [ref=e112]: "+923064307526"
                - generic [ref=e113]:
                  - generic [ref=e114]: Email Address
                  - paragraph [ref=e115]: at611975@getnada.com
                - generic [ref=e116]:
                  - generic [ref=e117]: Date of Birth
                  - paragraph [ref=e118]: 01/06/1990
                - generic [ref=e119]:
                  - generic [ref=e120]: Age
                  - paragraph [ref=e121]: "36"
                - generic [ref=e122]:
                  - generic [ref=e123]: Sex
                  - paragraph [ref=e124]: Male
                - generic [ref=e125]:
                  - generic [ref=e126]: Location
                  - paragraph [ref=e127]: Pakistan
                - generic [ref=e128]:
                  - generic [ref=e129]: Preferred Communication Language
                  - paragraph [ref=e130]: "-"
                - generic [ref=e131]:
                  - generic [ref=e132]: Program
                  - paragraph [ref=e133]: Diabetes
          - generic [ref=e134]:
            - heading "Medical Info" [level=6] [ref=e135]
            - generic [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e138]: Readiness
                - img [ref=e140] [cursor=pointer]
                - paragraph [ref=e142]: N/A
              - generic [ref=e143]:
                - generic [ref=e144]: Content Tag
                - img [ref=e146] [cursor=pointer]
                - paragraph [ref=e148]: N/A
              - generic [ref=e150]: Diagnoses
              - generic [ref=e151]:
                - generic [ref=e152]: Medications
                - paragraph [ref=e154]: NA
              - generic [ref=e155]:
                - generic [ref=e156]: Primary Team
                - img [ref=e158] [cursor=pointer]
                - list [ref=e160]:
                  - button "avatar" [ref=e163] [cursor=pointer]:
                    - listitem [ref=e164]:
                      - img "avatar" [ref=e165]
        - generic [ref=e167]:
          - heading "Internal Notes" [level=6] [ref=e168]
          - generic [ref=e169]:
            - banner [ref=e170]:
              - generic [ref=e171]:
                - img [ref=e172]
                - textbox "Search" [ref=e174]
              - generic [ref=e175]:
                - button "Open date filter" [ref=e176] [cursor=pointer]:
                  - img [ref=e177]
                - button "Add note" [ref=e179] [cursor=pointer]:
                  - img [ref=e180]
            - heading "No Data Found" [level=5] [ref=e182]
        - generic [ref=e183]:
          - generic [ref=e184]:
            - heading "App Activity" [level=6] [ref=e185]
            - generic [ref=e186]:
              - generic [ref=e187]:
                - generic [ref=e188]:
                  - paragraph [ref=e189]: Sign Up Date
                  - paragraph [ref=e190]: 17/06/2026
                - generic [ref=e191]:
                  - paragraph [ref=e192]: App Version
                  - paragraph [ref=e193]: "--"
                - generic [ref=e194]:
                  - paragraph [ref=e195]: Verification Date
                  - paragraph [ref=e196]: "--"
                - generic [ref=e197]:
                  - paragraph [ref=e198]: Last Active
                  - paragraph [ref=e199]: "--"
              - generic [ref=e200]:
                - generic [ref=e201]:
                  - paragraph [ref=e202]: Last Food Log
                  - paragraph [ref=e203]: "--"
                - generic [ref=e204]:
                  - paragraph [ref=e205]: Last Weight Log
                  - paragraph [ref=e206]: "--"
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - paragraph [ref=e210]: Last Message Received from Patient
                    - paragraph [ref=e211]: "--"
                  - paragraph [ref=e213]: Patient's last message has no replies yet.
                - generic [ref=e215]:
                  - paragraph [ref=e216]: Last Message Sent to Patient
                  - paragraph [ref=e217]: "--"
                - generic [ref=e219]:
                  - generic [ref=e220]:
                    - paragraph [ref=e221]: Last Message Sent to Patient by Me
                    - paragraph [ref=e222]: "--"
                  - button "Chat to Patient" [ref=e224] [cursor=pointer]
          - generic [ref=e225]:
            - heading "Devices and Connections" [level=6] [ref=e226]
            - paragraph [ref=e229]: No connected devices found
      - generic [ref=e230]:
        - generic [ref=e231]:
          - paragraph [ref=e233]: Chat
          - button "delete" [ref=e234] [cursor=pointer]:
            - img [ref=e235]
        - generic [ref=e239]:
          - paragraph [ref=e240] [cursor=pointer]: Metabolic
          - paragraph [ref=e241] [cursor=pointer]: Zone
  - alert [ref=e242]: Metabolic
```

# Test source

```ts
  36  | 
  37  |   test.beforeEach(async ({ page }) => {
  38  |     listingsPage = new PatientListingsPage(page);
  39  |     addPage      = new AddPatientPage(page);
  40  |     await listingsPage.goto();
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
  132 |     await page.waitForLoadState('domcontentloaded');
  133 | 
  134 |     // Open the action dropdown on the patient profile header and verify
  135 |     await page.locator('#dropdown-basic').first().click();
> 136 |     await page.getByText('Verify', { exact: true }).click();
      |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  137 |     await page.getByRole('button', { name: 'Yes' }).click();
  138 | 
  139 |     // After verification the dropdown option flips to "Unverify" — confirm this
  140 |     await page.locator('#dropdown-basic').first().click();
  141 |     await expect(page.getByText('Unverify', { exact: true })).toBeVisible({ timeout: 10000 });
  142 |     await page.keyboard.press('Escape');
  143 | 
  144 |     // Navigate back to listings and confirm the VERIFIED badge appears in the table
  145 |     await listingsPage.goto();
  146 |     await listingsPage.searchPatient(patient.lastName);
  147 |     await expect(page.getByText('VERIFIED').first()).toBeVisible({ timeout: 10000 });
  148 |   });
  149 | 
  150 |   // ══════════════════════════════════════════════════════════
  151 |   // 5. ADD PATIENT (MRN)
  152 |   // ══════════════════════════════════════════════════════════
  153 | 
  154 |   test('should open MRN lookup when clicking Add Patient (MRN)', async ({ page }) => {
  155 |     await listingsPage.addPatientMRNBtn.click();
  156 |     await page.waitForLoadState('domcontentloaded');
  157 | 
  158 |     const isDialog = await page.locator('[role="dialog"]').isVisible().catch(() => false);
  159 |     const isNewUrl  = page.url().includes('mrn') || page.url().includes('add');
  160 |     expect(isDialog || isNewUrl).toBeTruthy();
  161 |   });
  162 | 
  163 |   test('should show error for a non-existent MRN', async ({ page }) => {
  164 |     await listingsPage.addPatientMRNBtn.click();
  165 |     await page.waitForLoadState('domcontentloaded');
  166 | 
  167 |     const mrnField = page.getByRole('textbox').first();
  168 |     await mrnField.fill('INVALID_MRN_XXXXXX');
  169 |     await page.getByRole('button', { name: /search|find|lookup/i }).first().click();
  170 |     await page.waitForLoadState('domcontentloaded');
  171 | 
  172 |     await expect(
  173 |       page.getByText(/not found|does not exist|no patient/i).first()
  174 |     ).toBeVisible({ timeout: 10000 });
  175 |   });
  176 | 
  177 | });
  178 | 
```