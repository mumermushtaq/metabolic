# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\add-patient.spec.js >> Add Patient — @add-patient >> should add a new patient with all required fields and appear in listings
- Location: tests\e2e\add-patient.spec.js:104:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).not.toBeVisible() failed

Locator:  getByRole('dialog')
Expected: not visible
Received: visible

Call log:
  - Expect "not toBeVisible" with timeout 30000ms
  - waiting for getByRole('dialog')
    49 × locator resolved to <div role="dialog" tabindex="-1" aria-modal="true" class="DrawerLayout_sidebarCanvas__sQLWF offcanvas offcanvas-end show">…</div>
       - unexpected value "visible"

```

```yaml
- dialog:
  - heading "Add Patient" [level=5]
  - button "Close"
  - text: Personal Info First Name
  - textbox "First Name": Auto
  - text: Last Name
  - textbox "Last Name": Test1781724499869
  - text: Date of Birth
  - textbox "DD-MM-YYYY": 01-06-1990
  - text: Select Gender Male
  - img
  - text: Female Other Email
  - textbox "Email":
    - /placeholder: example@example.com
  - text: Phone
  - combobox "Phone number country"
  - textbox "(XXX) XXX XXX": "3478489992"
  - text: Insurance Contract
  - textbox "Insurance Contract": Self
  - text: Insurance Company
  - log
  - text: AXA Insurance
  - combobox
  - text: Nationality
  - log
  - text: Pakistan
  - combobox
  - text: Location
  - log
  - text: Pakistan
  - combobox
  - text: MRN
  - textbox "MRN": MRN1781724
  - text: Program
  - log
  - text: Diabetes
  - combobox
  - text: Diagnosis
  - log
  - text: Type at least 2 letters to search
  - combobox
  - text: Medication
  - log
  - text: Select
  - combobox
  - button "Primary Team Kaleem Asad Kaleem Asad"
  - button "Secondary Team Test B Account Test B Account"
  - button "Add Patient"
  - button "Cancel"
```

# Test source

```ts
  14  | 
  15  |   // Full patient data matching the codegen flow
  16  |   const patient = {
  17  |     firstName:         'Auto',
  18  |     lastName:          `Test${uid}`,
  19  |     dob:               '01-06-1990',
  20  |     gender:            'Male',
  21  |     email:             `auto${uid}@getnada.com`,
  22  |     phone:             '3' + Math.floor(Math.random() * 1_000_000_000).toString().padStart(9, '0'),
  23  |     phoneCountry:      'PK',
  24  |     insuranceContract: 'Self',
  25  |     insuranceProvider: 'AXA Insurance',
  26  |     language:          'pak',
  27  |     nationality:       'pak',
  28  |     mrn:               `MRN${uid}`,
  29  |     diagnosis:         'Diabetes',
  30  |     primaryTeam:       'Kaleem Asad',
  31  |     secondaryTeam:     ['Test B Account'],
  32  |   };
  33  | 
  34  |   test.beforeEach(async ({ page }) => {
  35  |     listingsPage = new PatientListingsPage(page);
  36  |     addPage      = new AddPatientPage(page);
  37  |     await listingsPage.goto();
  38  |     await page.getByRole('row').nth(1).waitFor({ state: 'visible', timeout: 15000 });
  39  |   });
  40  | 
  41  |   // ══════════════════════════════════════════════════════════
  42  |   // 1. MODAL — OPEN & CLOSE
  43  |   // ══════════════════════════════════════════════════════════
  44  | 
  45  |   test('should open Add Patient modal when clicking Add Patient button', async ({ page }) => {
  46  |     await listingsPage.addPatientBtn.click();
  47  |     await expect(addPage.modal).toBeVisible();
  48  |   });
  49  | 
  50  |   test('should close Add Patient modal when clicking Cancel', async ({ page }) => {
  51  |     await listingsPage.addPatientBtn.click();
  52  |     await expect(addPage.modal).toBeVisible();
  53  | 
  54  |     await addPage.cancel();
  55  |     await expect(addPage.modal).not.toBeVisible();
  56  |   });
  57  | 
  58  |   test('should display all key form fields inside the modal', async ({ page }) => {
  59  |     await listingsPage.addPatientBtn.click();
  60  | 
  61  |     await expect(addPage.firstNameInput).toBeVisible();
  62  |     await expect(addPage.lastNameInput).toBeVisible();
  63  |     await expect(addPage.dobInput).toBeVisible();
  64  |     await expect(addPage.genderMale).toBeVisible();
  65  |     await expect(addPage.genderFemale).toBeVisible();
  66  |     await expect(addPage.emailInput).toBeVisible();
  67  |     await expect(addPage.phoneInput).toBeVisible();
  68  |     await expect(addPage.mrnInput).toBeVisible();
  69  |     await expect(addPage.submitBtn).toBeVisible();
  70  |   });
  71  | 
  72  |   // ══════════════════════════════════════════════════════════
  73  |   // 2. FORM VALIDATION
  74  |   // ══════════════════════════════════════════════════════════
  75  | 
  76  |   test('should not submit when all fields are empty', async ({ page }) => {
  77  |     await listingsPage.addPatientBtn.click();
  78  |     await addPage.submitBtn.click();
  79  | 
  80  |     // Modal stays open — form was not submitted
  81  |     await expect(addPage.modal).toBeVisible();
  82  |   });
  83  | 
  84  |   test('should not submit when First Name is missing', async ({ page }) => {
  85  |     await listingsPage.addPatientBtn.click();
  86  |     await addPage.fillBasicOnly({ lastName: patient.lastName, email: patient.email });
  87  |     await addPage.submitBtn.click();
  88  | 
  89  |     await expect(addPage.modal).toBeVisible();
  90  |   });
  91  | 
  92  |   test('should not submit when Last Name is missing', async ({ page }) => {
  93  |     await listingsPage.addPatientBtn.click();
  94  |     await addPage.fillBasicOnly({ firstName: patient.firstName, email: patient.email });
  95  |     await addPage.submitBtn.click();
  96  | 
  97  |     await expect(addPage.modal).toBeVisible();
  98  |   });
  99  | 
  100 |   // ══════════════════════════════════════════════════════════
  101 |   // 3. HAPPY PATH — ADD PATIENT
  102 |   // ══════════════════════════════════════════════════════════
  103 | 
  104 |   test('should add a new patient with all required fields and appear in listings', async ({ page }) => {
  105 |     await listingsPage.addPatientBtn.click();
  106 |     await expect(addPage.modal).toBeVisible();
  107 | 
  108 |     await addPage.fillForm(patient);
  109 | 
  110 |     await addPage.submit();
  111 | 
  112 |     // Modal closing confirms the form submitted successfully
  113 |     // (URL was already /patient before, so toHaveURL alone is not reliable here)
> 114 |     await expect(addPage.modal).not.toBeVisible({ timeout: 30000 });
      |                                     ^ Error: expect(locator).not.toBeVisible() failed
  115 | 
  116 |     // Newly added patient should appear in search
  117 |     await listingsPage.searchPatient(patient.lastName);
  118 |     await expect(page.getByText(patient.lastName).first()).toBeVisible();
  119 |   });
  120 | 
  121 |   // ══════════════════════════════════════════════════════════
  122 |   // 4. VERIFY PATIENT
  123 |   // ══════════════════════════════════════════════════════════
  124 | 
  125 |   test('should verify the newly added patient', async ({ page }) => {
  126 |     // Find the patient added in the previous test
  127 |     await listingsPage.searchPatient(patient.lastName);
  128 |     await page.getByRole('link', { name: new RegExp(patient.lastName, 'i') }).first().click();
  129 |     await page.waitForLoadState('networkidle');
  130 | 
  131 |     // Open the action dropdown on the patient profile header
  132 |     await page.locator('#dropdown-basic').first().click();
  133 |     await page.getByText('Verify', { exact: true }).click();
  134 |     await page.getByRole('button', { name: 'Yes' }).click();
  135 |     await page.waitForLoadState('networkidle');
  136 | 
  137 |     // Status should now show VERIFIED
  138 |     await expect(page.getByText('VERIFIED').first()).toBeVisible();
  139 |   });
  140 | 
  141 |   // ══════════════════════════════════════════════════════════
  142 |   // 5. ADD PATIENT (MRN)
  143 |   // ══════════════════════════════════════════════════════════
  144 | 
  145 |   test('should open MRN lookup when clicking Add Patient (MRN)', async ({ page }) => {
  146 |     await listingsPage.addPatientMRNBtn.click();
  147 |     await page.waitForLoadState('networkidle');
  148 | 
  149 |     const isDialog = await page.locator('[role="dialog"]').isVisible().catch(() => false);
  150 |     const isNewUrl  = page.url().includes('mrn') || page.url().includes('add');
  151 |     expect(isDialog || isNewUrl).toBeTruthy();
  152 |   });
  153 | 
  154 |   test('should show error for a non-existent MRN', async ({ page }) => {
  155 |     await listingsPage.addPatientMRNBtn.click();
  156 |     await page.waitForLoadState('networkidle');
  157 | 
  158 |     const mrnField = page.getByRole('textbox').first();
  159 |     await mrnField.fill('INVALID_MRN_XXXXXX');
  160 |     await page.getByRole('button', { name: /search|find|lookup/i }).first().click();
  161 |     await page.waitForLoadState('networkidle');
  162 | 
  163 |     await expect(
  164 |       page.getByText(/not found|does not exist|no patient/i).first()
  165 |     ).toBeVisible({ timeout: 10000 });
  166 |   });
  167 | 
  168 | });
  169 | 
```