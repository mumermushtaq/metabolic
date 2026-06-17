# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\add-patient.spec.js >> Add Patient — @add-patient >> should show error for a non-existent MRN
- Location: tests\e2e\add-patient.spec.js:162:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /search|find|lookup/i }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - generic [ref=e44]: (0)
      - generic [ref=e46]:
        - generic [ref=e47]:
          - button "notification" [ref=e48] [cursor=pointer]:
            - img "notification" [ref=e49]
          - generic: "0"
        - generic [ref=e50]:
          - img [ref=e52]
          - generic [ref=e57] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e58]
            - generic [ref=e59]: Admin • Diabetologist
    - generic [ref=e60]:
      - generic [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: Search
              - textbox "Search" [ref=e67]: INVALID_MRN_XXXXXX
            - button "Filter" [ref=e69] [cursor=pointer]:
              - generic [ref=e70]:
                - img [ref=e72]
                - text: Filter
            - button "Clear Filter" [ref=e74] [cursor=pointer]:
              - generic [ref=e75]:
                - img [ref=e77]
                - text: Clear Filter
          - generic [ref=e79]:
            - button [ref=e81] [cursor=pointer]:
              - img [ref=e83]
            - button "Add Patient" [ref=e86] [cursor=pointer]:
              - generic [ref=e87]:
                - img [ref=e89]
                - text: Add Patient
            - button "Add Patient (MRN)" [ref=e92] [cursor=pointer]:
              - generic [ref=e93]:
                - img [ref=e95]
                - text: Add Patient (MRN)
        - generic [ref=e97]:
          - generic [ref=e98]: "Saved Filters:"
          - generic [ref=e99]:
            - generic [ref=e101]:
              - generic [ref=e102] [cursor=pointer]: Male | English | Weight Loss
              - button [ref=e104] [cursor=pointer]:
                - img [ref=e106]
            - generic [ref=e109]:
              - generic [ref=e110] [cursor=pointer]: Age 20-24
              - button [ref=e112] [cursor=pointer]:
                - img [ref=e114]
            - generic [ref=e117]:
              - generic [ref=e118] [cursor=pointer]: Verified Users | BCA Scan from July
              - button [ref=e120] [cursor=pointer]:
                - img [ref=e122]
            - generic [ref=e125]:
              - generic [ref=e126] [cursor=pointer]: Primary Staff | Male
              - button [ref=e128] [cursor=pointer]:
                - img [ref=e130]
            - generic [ref=e133]:
              - generic [ref=e134] [cursor=pointer]: test waleed updated
              - button [ref=e136] [cursor=pointer]:
                - img [ref=e138]
            - generic [ref=e141]:
              - generic [ref=e142] [cursor=pointer]: new moiz test
              - button [ref=e144] [cursor=pointer]:
                - img [ref=e146]
            - generic [ref=e149]:
              - generic [ref=e150] [cursor=pointer]: Umer's Test filter
              - button [ref=e152] [cursor=pointer]:
                - img [ref=e154]
            - generic [ref=e157]:
              - generic [ref=e158] [cursor=pointer]: Test - Diagnoses - Hassam
              - button [ref=e160] [cursor=pointer]:
                - img [ref=e162]
            - generic [ref=e165]:
              - generic [ref=e166] [cursor=pointer]: Male Filter
              - button [ref=e168] [cursor=pointer]:
                - img [ref=e170]
      - table [ref=e178]:
        - generic [ref=e180]: There are no records to display
      - generic [ref=e181]:
        - generic [ref=e182]:
          - paragraph [ref=e184]: Chat
          - button "delete" [ref=e185] [cursor=pointer]:
            - img [ref=e186]
        - generic [ref=e190]:
          - paragraph [ref=e191] [cursor=pointer]: Metabolic
          - paragraph [ref=e192] [cursor=pointer]: Zone
  - alert [ref=e193]
  - dialog [active] [ref=e195]:
    - generic [ref=e196]:
      - heading "Add Patient (MRN)" [level=5] [ref=e198]
      - button "Close" [ref=e199] [cursor=pointer]
    - generic [ref=e202]:
      - generic [ref=e204]:
        - generic [ref=e205]: Add MRN
        - textbox "Add MRN" [ref=e206]
      - generic [ref=e208]:
        - button "Add Patient" [disabled]:
          - generic: Add Patient
        - button "Cancel" [ref=e209] [cursor=pointer]:
          - generic [ref=e210]: Cancel
```

# Test source

```ts
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
  132 | 
  133 |     // Wait for the profile tab nav to confirm the page has rendered
  134 |     await page.getByRole('link', { name: 'Patient Info' }).waitFor({ state: 'visible', timeout: 15000 });
  135 | 
  136 |     // Three-dots button — id="dropdown-basic" exists on the profile page too
  137 |     await page.locator('#dropdown-basic').first().waitFor({ state: 'visible', timeout: 10000 });
  138 |     await page.locator('#dropdown-basic').first().click();
  139 |     await page.locator('[data-rr-ui-dropdown-item]').filter({ hasText: 'Verify' }).waitFor({ state: 'visible', timeout: 5000 });
  140 |     await page.locator('[data-rr-ui-dropdown-item]').filter({ hasText: 'Verify' }).click();
  141 |     await page.getByRole('button', { name: 'Yes' }).click();
  142 | 
  143 |     // Navigate back to listings and confirm the VERIFIED badge appears in the table
  144 |     await listingsPage.goto();
  145 |     await listingsPage.searchPatient(patient.lastName);
  146 |     await expect(page.getByText('VERIFIED').first()).toBeVisible({ timeout: 10000 });
  147 |   });
  148 | 
  149 |   // ══════════════════════════════════════════════════════════
  150 |   // 5. ADD PATIENT (MRN)
  151 |   // ══════════════════════════════════════════════════════════
  152 | 
  153 |   test('should open MRN lookup when clicking Add Patient (MRN)', async ({ page }) => {
  154 |     await listingsPage.addPatientMRNBtn.click();
  155 |     await page.waitForLoadState('domcontentloaded');
  156 | 
  157 |     const isDialog = await page.locator('[role="dialog"]').isVisible().catch(() => false);
  158 |     const isNewUrl  = page.url().includes('mrn') || page.url().includes('add');
  159 |     expect(isDialog || isNewUrl).toBeTruthy();
  160 |   });
  161 | 
  162 |   test('should show error for a non-existent MRN', async ({ page }) => {
  163 |     await listingsPage.addPatientMRNBtn.click();
  164 |     await page.waitForLoadState('domcontentloaded');
  165 | 
  166 |     const mrnField = page.getByRole('textbox').first();
  167 |     await mrnField.fill('INVALID_MRN_XXXXXX');
> 168 |     await page.getByRole('button', { name: /search|find|lookup/i }).first().click();
      |                                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  169 |     await page.waitForLoadState('domcontentloaded');
  170 | 
  171 |     await expect(
  172 |       page.getByText(/not found|does not exist|no patient/i).first()
  173 |     ).toBeVisible({ timeout: 10000 });
  174 |   });
  175 | 
  176 | });
  177 | 
```