# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\add-patient.spec.js >> Add Patient — @add-patient >> should add a new patient with all required fields and appear in listings
- Location: tests\e2e\add-patient.spec.js:103:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Test1781723220296').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Test1781723220296').first()

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
- text: (0)
- button "notification":
  - img "notification"
- text: "0"
- img
- heading "Umer Mushtaq" [level=6]
- text: Admin • Diabetologist Search
- textbox "Search": Test1781723220296
- button "Filter":
  - img
  - text: Filter
- button "Clear Filter":
  - img
  - text: Clear Filter
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
- table: There are no records to display
- paragraph: Chat
- button "delete"
- paragraph: Metabolic
- paragraph: Zone
- alert
- dialog:
  - heading "Add Patient" [level=5]
  - button "Close"
  - text: Personal Info First Name
  - textbox "First Name": Auto
  - text: Last Name
  - textbox "Last Name": Test1781723220296
  - text: Date of Birth
  - textbox "DD-MM-YYYY": 01-06-1990
  - text: Select Gender Male
  - img
  - text: Female Other Email
  - textbox "Email":
    - /placeholder: example@example.com
    - text: auto1781723220296@getnada.com
  - text: Phone
  - combobox "Phone number country":
    - option "International"
    - option "Afghanistan"
    - option "Åland Islands"
    - option "Albania"
    - option "Algeria"
    - option "American Samoa"
    - option "Andorra"
    - option "Angola"
    - option "Anguilla"
    - option "Antigua and Barbuda"
    - option "Argentina"
    - option "Armenia"
    - option "Aruba"
    - option "Ascension Island"
    - option "Australia"
    - option "Austria"
    - option "Azerbaijan"
    - option "Bahamas"
    - option "Bahrain"
    - option "Bangladesh"
    - option "Barbados"
    - option "Belarus"
    - option "Belgium"
    - option "Belize"
    - option "Benin"
    - option "Bermuda"
    - option "Bhutan"
    - option "Bolivia"
    - option "Bonaire, Sint Eustatius and Saba"
    - option "Bosnia and Herzegovina"
    - option "Botswana"
    - option "Brazil"
    - option "British Indian Ocean Territory"
    - option "Brunei Darussalam"
    - option "Bulgaria"
    - option "Burkina Faso"
    - option "Burundi"
    - option "Cambodia"
    - option "Cameroon"
    - option "Canada"
    - option "Cape Verde"
    - option "Cayman Islands"
    - option "Central African Republic"
    - option "Chad"
    - option "Chile"
    - option "China"
    - option "Christmas Island"
    - option "Cocos (Keeling) Islands"
    - option "Colombia"
    - option "Comoros"
    - option "Congo"
    - option "Congo, Democratic Republic of the"
    - option "Cook Islands"
    - option "Costa Rica"
    - option "Cote d'Ivoire"
    - option "Croatia"
    - option "Cuba"
    - option "Curaçao"
    - option "Cyprus"
    - option "Czech Republic"
    - option "Denmark"
    - option "Djibouti"
    - option "Dominica"
    - option "Dominican Republic"
    - option "Ecuador"
    - option "Egypt"
    - option "El Salvador"
    - option "Equatorial Guinea"
    - option "Eritrea"
    - option "Estonia"
    - option "Ethiopia"
    - option "Falkland Islands"
    - option "Faroe Islands"
    - option "Federated States of Micronesia"
    - option "Fiji"
    - option "Finland"
    - option "France"
    - option "French Guiana"
    - option "French Polynesia"
    - option "Gabon"
    - option "Gambia"
    - option "Georgia"
    - option "Germany"
    - option "Ghana"
    - option "Gibraltar"
    - option "Greece"
    - option "Greenland"
    - option "Grenada"
    - option "Guadeloupe"
    - option "Guam"
    - option "Guatemala"
    - option "Guernsey"
    - option "Guinea"
    - option "Guinea-Bissau"
    - option "Guyana"
    - option "Haiti"
    - option "Holy See (Vatican City State)"
    - option "Honduras"
    - option "Hong Kong"
    - option "Hungary"
    - option "Iceland"
    - option "India"
    - option "Indonesia"
    - option "Iran"
    - option "Iraq"
    - option "Ireland"
    - option "Isle of Man"
    - option "Israel"
    - option "Italy"
    - option "Jamaica"
    - option "Japan"
    - option "Jersey"
    - option "Jordan"
    - option "Kazakhstan"
    - option "Kenya"
    - option "Kiribati"
    - option "Kosovo"
    - option "Kuwait"
    - option "Kyrgyzstan"
    - option "Laos"
    - option "Latvia"
    - option "Lebanon"
    - option "Lesotho"
    - option "Liberia"
    - option "Libya"
    - option "Liechtenstein"
    - option "Lithuania"
    - option "Luxembourg"
    - option "Macao"
    - option "Madagascar"
    - option "Malawi"
    - option "Malaysia"
    - option "Maldives"
    - option "Mali"
    - option "Malta"
    - option "Marshall Islands"
    - option "Martinique"
    - option "Mauritania"
    - option "Mauritius"
    - option "Mayotte"
    - option "Mexico"
    - option "Moldova"
    - option "Monaco"
    - option "Mongolia"
    - option "Montenegro"
    - option "Montserrat"
    - option "Morocco"
    - option "Mozambique"
    - option "Myanmar"
    - option "Namibia"
    - option "Nauru"
    - option "Nepal"
    - option "Netherlands"
    - option "New Caledonia"
    - option "New Zealand"
    - option "Nicaragua"
    - option "Niger"
    - option "Nigeria"
    - option "Niue"
    - option "Norfolk Island"
    - option "North Korea"
    - option "North Macedonia"
    - option "Northern Mariana Islands"
    - option "Norway"
    - option "Oman"
    - option "Pakistan" [selected]
    - option "Palau"
    - option "Palestine"
    - option "Panama"
    - option "Papua New Guinea"
    - option "Paraguay"
    - option "Peru"
    - option "Philippines"
    - option "Poland"
    - option "Portugal"
    - option "Puerto Rico"
    - option "Qatar"
    - option "Reunion"
    - option "Romania"
    - option "Russia"
    - option "Rwanda"
    - option "Saint Barthélemy"
    - option "Saint Helena"
    - option "Saint Kitts and Nevis"
    - option "Saint Lucia"
    - option "Saint Martin (French Part)"
    - option "Saint Pierre and Miquelon"
    - option "Saint Vincent and the Grenadines"
    - option "Samoa"
    - option "San Marino"
    - option "Sao Tome and Principe"
    - option "Saudi Arabia"
    - option "Senegal"
    - option "Serbia"
    - option "Seychelles"
    - option "Sierra Leone"
    - option "Singapore"
    - option "Sint Maarten"
    - option "Slovakia"
    - option "Slovenia"
    - option "Solomon Islands"
    - option "Somalia"
    - option "South Africa"
    - option "South Korea"
    - option "South Sudan"
    - option "Spain"
    - option "Sri Lanka"
    - option "Sudan"
    - option "Suriname"
    - option "Svalbard and Jan Mayen"
    - option "Swaziland"
    - option "Sweden"
    - option "Switzerland"
    - option "Syria"
    - option "Taiwan"
    - option "Tajikistan"
    - option "Tanzania"
    - option "Thailand"
    - option "Timor-Leste"
    - option "Togo"
    - option "Tokelau"
    - option "Tonga"
    - option "Trinidad and Tobago"
    - option "Tristan da Cunha"
    - option "Tunisia"
    - option "Turkey"
    - option "Turkmenistan"
    - option "Turks and Caicos Islands"
    - option "Tuvalu"
    - option "Uganda"
    - option "Ukraine"
    - option "United Arab Emirates"
    - option "United Kingdom"
    - option "United States"
    - option "Uruguay"
    - option "Uzbekistan"
    - option "Vanuatu"
    - option "Venezuela"
    - option "Vietnam"
    - option "Virgin Islands, British"
    - option "Virgin Islands, U.S."
    - option "Wallis and Futuna"
    - option "Western Sahara"
    - option "Yemen"
    - option "Zambia"
    - option "Zimbabwe"
  - textbox "(XXX) XXX XXX": "3001234567"
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
  - textbox "MRN": MRN1781723
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
  - button "Primary Team Kaleem Asad Kaleem Asad":
    - text: Primary Team
    - log
    - img "Kaleem Asad"
    - paragraph: Kaleem Asad
    - button:
      - img
    - combobox
  - button "Secondary Team Select":
    - text: Secondary Team
    - log
    - text: Select
    - combobox
  - text: Secondary Team field must have at least 1 item
  - button "Add Patient"
  - button "Cancel"
```

# Test source

```ts
  16  |   const patient = {
  17  |     firstName:         'Auto',
  18  |     lastName:          `Test${uid}`,
  19  |     dob:               '01-06-1990',
  20  |     gender:            'Male',
  21  |     email:             `auto${uid}@getnada.com`,
  22  |     phone:             '3001234567',
  23  |     phoneCountry:      'PK',
  24  |     insuranceContract: 'Self',
  25  |     insuranceProvider: 'AXA Insurance',
  26  |     language:          'pak',
  27  |     nationality:       'pak',
  28  |     mrn:               `MRN${uid}`,
  29  |     diagnosis:         'Diabetes',
  30  |     primaryTeam:       'Kaleem Asad',
  31  |   };
  32  | 
  33  |   test.beforeEach(async ({ page }) => {
  34  |     listingsPage = new PatientListingsPage(page);
  35  |     addPage      = new AddPatientPage(page);
  36  |     await listingsPage.goto();
  37  |     await page.getByRole('row').nth(1).waitFor({ state: 'visible', timeout: 15000 });
  38  |   });
  39  | 
  40  |   // ══════════════════════════════════════════════════════════
  41  |   // 1. MODAL — OPEN & CLOSE
  42  |   // ══════════════════════════════════════════════════════════
  43  | 
  44  |   test('should open Add Patient modal when clicking Add Patient button', async ({ page }) => {
  45  |     await listingsPage.addPatientBtn.click();
  46  |     await expect(addPage.modal).toBeVisible();
  47  |   });
  48  | 
  49  |   test('should close Add Patient modal when clicking Cancel', async ({ page }) => {
  50  |     await listingsPage.addPatientBtn.click();
  51  |     await expect(addPage.modal).toBeVisible();
  52  | 
  53  |     await addPage.cancel();
  54  |     await expect(addPage.modal).not.toBeVisible();
  55  |   });
  56  | 
  57  |   test('should display all key form fields inside the modal', async ({ page }) => {
  58  |     await listingsPage.addPatientBtn.click();
  59  | 
  60  |     await expect(addPage.firstNameInput).toBeVisible();
  61  |     await expect(addPage.lastNameInput).toBeVisible();
  62  |     await expect(addPage.dobInput).toBeVisible();
  63  |     await expect(addPage.genderMale).toBeVisible();
  64  |     await expect(addPage.genderFemale).toBeVisible();
  65  |     await expect(addPage.emailInput).toBeVisible();
  66  |     await expect(addPage.phoneInput).toBeVisible();
  67  |     await expect(addPage.mrnInput).toBeVisible();
  68  |     await expect(addPage.submitBtn).toBeVisible();
  69  |   });
  70  | 
  71  |   // ══════════════════════════════════════════════════════════
  72  |   // 2. FORM VALIDATION
  73  |   // ══════════════════════════════════════════════════════════
  74  | 
  75  |   test('should not submit when all fields are empty', async ({ page }) => {
  76  |     await listingsPage.addPatientBtn.click();
  77  |     await addPage.submitBtn.click();
  78  | 
  79  |     // Modal stays open — form was not submitted
  80  |     await expect(addPage.modal).toBeVisible();
  81  |   });
  82  | 
  83  |   test('should not submit when First Name is missing', async ({ page }) => {
  84  |     await listingsPage.addPatientBtn.click();
  85  |     await addPage.fillBasicOnly({ lastName: patient.lastName, email: patient.email });
  86  |     await addPage.submitBtn.click();
  87  | 
  88  |     await expect(addPage.modal).toBeVisible();
  89  |   });
  90  | 
  91  |   test('should not submit when Last Name is missing', async ({ page }) => {
  92  |     await listingsPage.addPatientBtn.click();
  93  |     await addPage.fillBasicOnly({ firstName: patient.firstName, email: patient.email });
  94  |     await addPage.submitBtn.click();
  95  | 
  96  |     await expect(addPage.modal).toBeVisible();
  97  |   });
  98  | 
  99  |   // ══════════════════════════════════════════════════════════
  100 |   // 3. HAPPY PATH — ADD PATIENT
  101 |   // ══════════════════════════════════════════════════════════
  102 | 
  103 |   test('should add a new patient with all required fields and appear in listings', async ({ page }) => {
  104 |     await listingsPage.addPatientBtn.click();
  105 |     await expect(addPage.modal).toBeVisible();
  106 | 
  107 |     await addPage.fillForm(patient);
  108 | 
  109 |     await addPage.submit();
  110 | 
  111 |     // Should land back on patient listings
  112 |     await expect(page).toHaveURL(/\/patient/, { timeout: 30000 });
  113 | 
  114 |     // Newly added patient should appear in search
  115 |     await listingsPage.searchPatient(patient.lastName);
> 116 |     await expect(page.getByText(patient.lastName).first()).toBeVisible();
      |                                                            ^ Error: expect(locator).toBeVisible() failed
  117 |   });
  118 | 
  119 |   // ══════════════════════════════════════════════════════════
  120 |   // 4. VERIFY PATIENT
  121 |   // ══════════════════════════════════════════════════════════
  122 | 
  123 |   test('should verify the newly added patient', async ({ page }) => {
  124 |     // Find the patient added in the previous test
  125 |     await listingsPage.searchPatient(patient.lastName);
  126 |     await page.getByRole('link', { name: new RegExp(patient.lastName, 'i') }).first().click();
  127 |     await page.waitForLoadState('networkidle');
  128 | 
  129 |     // Open the action dropdown on the patient profile header
  130 |     await page.locator('#dropdown-basic').first().click();
  131 |     await page.getByText('Verify', { exact: true }).click();
  132 |     await page.getByRole('button', { name: 'Yes' }).click();
  133 |     await page.waitForLoadState('networkidle');
  134 | 
  135 |     // Status should now show VERIFIED
  136 |     await expect(page.getByText('VERIFIED').first()).toBeVisible();
  137 |   });
  138 | 
  139 |   // ══════════════════════════════════════════════════════════
  140 |   // 5. ADD PATIENT (MRN)
  141 |   // ══════════════════════════════════════════════════════════
  142 | 
  143 |   test('should open MRN lookup when clicking Add Patient (MRN)', async ({ page }) => {
  144 |     await listingsPage.addPatientMRNBtn.click();
  145 |     await page.waitForLoadState('networkidle');
  146 | 
  147 |     const isDialog = await page.locator('[role="dialog"]').isVisible().catch(() => false);
  148 |     const isNewUrl  = page.url().includes('mrn') || page.url().includes('add');
  149 |     expect(isDialog || isNewUrl).toBeTruthy();
  150 |   });
  151 | 
  152 |   test('should show error for a non-existent MRN', async ({ page }) => {
  153 |     await listingsPage.addPatientMRNBtn.click();
  154 |     await page.waitForLoadState('networkidle');
  155 | 
  156 |     const mrnField = page.getByRole('textbox').first();
  157 |     await mrnField.fill('INVALID_MRN_XXXXXX');
  158 |     await page.getByRole('button', { name: /search|find|lookup/i }).first().click();
  159 |     await page.waitForLoadState('networkidle');
  160 | 
  161 |     await expect(
  162 |       page.getByText(/not found|does not exist|no patient/i).first()
  163 |     ).toBeVisible({ timeout: 10000 });
  164 |   });
  165 | 
  166 | });
  167 | 
```