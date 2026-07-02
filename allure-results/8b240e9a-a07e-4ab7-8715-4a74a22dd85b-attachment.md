# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> sets visit date and saves unique episode number
- Location: tests\e2e\consent-intake.spec.js:33:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Go to next month' })
    - locator resolved to <button type="button" name="next-month" aria-label="Go to next month" class="rdp-button_reset rdp-button rdp-nav_button rdp-nav_button_next">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
        - generic [ref=e44]:
          - img [ref=e45]
          - text: Umer Mushtaq
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
          - /url: /patient/profile/1706
          - listitem [ref=e67]: Patient Info
        - link "Visits" [ref=e68] [cursor=pointer]:
          - /url: /patient/profile/visits/1706
          - listitem [ref=e69]: Visits
        - link "Consent & Intake" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1706
          - listitem [ref=e71]: Consent & Intake
        - link "Health Info" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/health-info/1706
          - listitem [ref=e73]: Health Info
        - link "Documents" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1706
          - listitem [ref=e75]: Documents
        - link "BCA Scans" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1706
          - listitem [ref=e77]: BCA Scans
        - link "Glucose Analysis" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1706
          - listitem [ref=e79]: Glucose Analysis
        - link "Add Coupon" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1706
          - listitem [ref=e81]: Add Coupon
        - link "GLP-1 Protocol" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1706
          - listitem [ref=e83]: GLP-1 Protocol
      - generic [ref=e86]:
        - generic [ref=e87]:
          - generic [ref=e88]:
            - generic [ref=e89]:
              - heading "Patient Details" [level=4] [ref=e90]
              - generic [ref=e91]: Required — Minor
            - paragraph [ref=e92]: Please verify this information to ensure the correct consent forms and questionnaires have been assigned
          - generic [ref=e94]:
            - generic [ref=e95]:
              - generic [ref=e96]:
                - img [ref=e97]
                - generic [ref=e100]: MRN
              - generic [ref=e102]: abc123pkt
            - generic [ref=e103]:
              - generic [ref=e104]:
                - img [ref=e105]
                - generic [ref=e107]: ICD-10 Diagnosis
              - generic [ref=e108]: —
            - generic [ref=e109]:
              - generic [ref=e110]:
                - img [ref=e111]
                - generic [ref=e114]: Program Tags
              - generic [ref=e116]: Diabetes
            - generic [ref=e117]:
              - generic [ref=e118]:
                - img [ref=e119]
                - generic [ref=e122]: Gender
              - generic [ref=e124]: Male
            - generic [ref=e125]:
              - generic [ref=e126]:
                - img [ref=e127]
                - generic [ref=e129]: Date of Birth
              - generic [ref=e130]:
                - generic [ref=e131]: 02 Apr 2025
                - generic [ref=e132]: 1 yrs
            - generic [ref=e133]:
              - generic [ref=e134]:
                - img [ref=e135]
                - generic [ref=e137]: Primary Language
              - generic [ref=e139]: —
            - generic [ref=e140]:
              - generic [ref=e141]:
                - img [ref=e142]
                - generic [ref=e144]: Visit type
              - generic [ref=e146]: Baseline
        - generic [ref=e147]:
          - tablist [ref=e149]:
            - listitem [ref=e150]:
              - tab "Next Visit" [selected] [ref=e151] [cursor=pointer]
            - listitem [ref=e152]:
              - tab "Visit History" [ref=e153] [cursor=pointer]
          - tabpanel "Next Visit" [ref=e154]:
            - generic [ref=e158]:
              - generic [ref=e159]:
                - generic [ref=e160]:
                  - img [ref=e161]
                  - paragraph [ref=e165]: Next Visit
                - generic [ref=e166]:
                  - img [ref=e167]
                  - generic [ref=e170]: "Last Updated: —"
              - generic [ref=e171]:
                - generic [ref=e172]:
                  - generic [ref=e173]: Visit Date
                  - button "Visit Date" [expanded] [ref=e174] [cursor=pointer]:
                    - generic [ref=e175]:
                      - img [ref=e176]
                      - generic [ref=e178]: —
                    - img [ref=e179]
                  - dialog "Choose visit date" [ref=e181]:
                    - generic [ref=e184]:
                      - generic [ref=e185]:
                        - generic [ref=e186]: June 2075
                        - generic [ref=e187]:
                          - button "Go to previous month" [ref=e188] [cursor=pointer]:
                            - img [ref=e189]
                          - button "Go to next month" [active] [ref=e191] [cursor=pointer]:
                            - img [ref=e192]
                      - grid "June 2075" [ref=e194]:
                        - rowgroup [ref=e195]:
                          - row "Sunday Monday Tuesday Wednesday Thursday Friday Saturday" [ref=e196]:
                            - columnheader "Sunday" [ref=e197]: Su
                            - columnheader "Monday" [ref=e198]: Mo
                            - columnheader "Tuesday" [ref=e199]: Tu
                            - columnheader "Wednesday" [ref=e200]: We
                            - columnheader "Thursday" [ref=e201]: Th
                            - columnheader "Friday" [ref=e202]: Fr
                            - columnheader "Saturday" [ref=e203]: Sa
                        - rowgroup [ref=e204]:
                          - row "1" [ref=e205]:
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell "1" [ref=e206] [cursor=pointer]
                          - row "2 3 4 5 6 7 8" [ref=e207]:
                            - gridcell "2" [ref=e208] [cursor=pointer]
                            - gridcell "3" [ref=e209] [cursor=pointer]
                            - gridcell "4" [ref=e210] [cursor=pointer]
                            - gridcell "5" [ref=e211] [cursor=pointer]
                            - gridcell "6" [ref=e212] [cursor=pointer]
                            - gridcell "7" [ref=e213] [cursor=pointer]
                            - gridcell "8" [ref=e214] [cursor=pointer]
                          - row "9 10 11 12 13 14 15" [ref=e215]:
                            - gridcell "9" [ref=e216] [cursor=pointer]
                            - gridcell "10" [ref=e217] [cursor=pointer]
                            - gridcell "11" [ref=e218] [cursor=pointer]
                            - gridcell "12" [ref=e219] [cursor=pointer]
                            - gridcell "13" [ref=e220] [cursor=pointer]
                            - gridcell "14" [ref=e221] [cursor=pointer]
                            - gridcell "15" [ref=e222] [cursor=pointer]
                          - row "16 17 18 19 20 21 22" [ref=e223]:
                            - gridcell "16" [ref=e224] [cursor=pointer]
                            - gridcell "17" [ref=e225] [cursor=pointer]
                            - gridcell "18" [ref=e226] [cursor=pointer]
                            - gridcell "19" [ref=e227] [cursor=pointer]
                            - gridcell "20" [ref=e228] [cursor=pointer]
                            - gridcell "21" [ref=e229] [cursor=pointer]
                            - gridcell "22" [ref=e230] [cursor=pointer]
                          - row "23 24 25 26 27 28 29" [ref=e231]:
                            - gridcell "23" [ref=e232] [cursor=pointer]
                            - gridcell "24" [ref=e233] [cursor=pointer]
                            - gridcell "25" [ref=e234] [cursor=pointer]
                            - gridcell "26" [ref=e235] [cursor=pointer]
                            - gridcell "27" [ref=e236] [cursor=pointer]
                            - gridcell "28" [ref=e237] [cursor=pointer]
                            - gridcell "29" [ref=e238] [cursor=pointer]
                          - row "30" [ref=e239]:
                            - gridcell "30" [ref=e240] [cursor=pointer]
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell
                            - gridcell
                - generic [ref=e241]:
                  - generic [ref=e242]: Episode Number *
                  - generic [ref=e243]:
                    - generic [ref=e244]:
                      - textbox "Episode Number *" [ref=e245]:
                        - /placeholder: Enter episode number...
                      - generic: Required
                    - generic [ref=e246]:
                      - button "Save" [disabled] [ref=e247] [cursor=pointer]
                      - button "Close visit" [disabled] [ref=e248] [cursor=pointer]
      - generic [ref=e249]:
        - generic [ref=e250]:
          - paragraph [ref=e252]: Chat
          - button "delete" [ref=e253] [cursor=pointer]:
            - img [ref=e254]
        - generic [ref=e258]:
          - paragraph [ref=e259] [cursor=pointer]: Metabolic
          - paragraph [ref=e260] [cursor=pointer]: Zone
  - alert [ref=e261]: Metabolic
```

# Test source

```ts
  1   | class ConsentIntakePage {
  2   | 
  3   |   constructor(page) {
  4   |     this.page = page;
  5   | 
  6   |     // ── Navigation ──────────────────────────────────────────────
  7   |     this.consentIntakeTab = page.getByRole('link', { name: 'Consent & Intake' });
  8   | 
  9   |     // ── Visit date picker ────────────────────────────────────────
  10  |     this.visitDateBtn     = page.getByRole('button', { name: 'Visit Date' });
  11  |     this.nextMonthBtn     = page.getByRole('button', { name: 'Go to next month' });
  12  | 
  13  |     // ── Episode number ───────────────────────────────────────────
  14  |     this.episodeNumberInput = page.getByRole('textbox', { name: 'Episode Number *' });
  15  |     this.saveBtn            = page.getByRole('button', { name: 'Save' });
  16  | 
  17  |     // ── Patient type & visit type ────────────────────────────────
  18  |     this.patientTypeCombo = page.getByRole('combobox', { name: 'Patient Type' });
  19  |     this.visitTypeCombo   = page.getByRole('combobox', { name: 'Visit Type' });
  20  | 
  21  |     // ── Quick Assign ─────────────────────────────────────────────
  22  |     this.quickAssignBtn = page.getByRole('button', { name: 'Quick Assign' });
  23  | 
  24  |     // Add Doctor dialog
  25  |     this.addDoctorBtn        = page.getByRole('button', { name: 'Add Doctor' });
  26  |     this.selectStaffDropdown = page.getByRole('button', { name: 'Select staff…' });
  27  |     this.dialogAddDoctorBtn  = page.getByRole('dialog').getByRole('button', { name: 'Add Doctor' });
  28  | 
  29  |     // Add Witness dialog
  30  |     this.addWitnessBtn       = page.getByRole('button', { name: 'Add Witness' });
  31  |     this.dialogAddWitnessBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Witness' });
  32  | 
  33  |     // ── Parent/Guardian ──────────────────────────────────────────
  34  |     this.editParentGuardianBtn      = page.getByRole('button', { name: 'Edit parent/guardian co-signer' });
  35  |     this.parentGuardianFullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  36  |     this.updateParentGuardianBtn    = page.getByRole('button', { name: 'Update Parent/Guardian' });
  37  | 
  38  |     // ── Interpreter ──────────────────────────────────────────────
  39  |     this.editInterpreterBtn    = page.getByRole('button', { name: 'Edit interpreter' });
  40  |     this.interpreterNameInput  = page.getByRole('textbox', { name: 'Full Name *' });
  41  |     this.languageInput         = page.getByRole('textbox', { name: 'Language' });
  42  |     this.updateInterpreterBtn  = page.getByRole('button', { name: 'Update Interpreter' });
  43  | 
  44  |     // ── Secure link ──────────────────────────────────────────────
  45  |     this.copySecureLinkBtn = page.getByRole('button', { name: 'Copy Secure Link' });
  46  |   }
  47  | 
  48  |   // ── Open patient and go to Consent & Intake tab ──────────────
  49  |   async openPatientConsentTab(patientName) {
  50  |     await this.page.goto(`${process.env.BASE_URL}/patient`);
  51  |     await this.page.getByRole('heading', { name: 'Patients', exact: true })
  52  |       .waitFor({ state: 'visible', timeout: 15000 });
  53  | 
  54  |     const search = this.page.getByRole('textbox', { name: 'Search' });
  55  |     await search.click();
  56  |     await search.fill(patientName);
  57  | 
  58  |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  59  |     await patientLink.waitFor({ state: 'visible', timeout: 15000 });
  60  |     await patientLink.click();
  61  | 
  62  |     await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
  63  |     await this.consentIntakeTab.click();
  64  |   }
  65  | 
  66  |   // ── Set visit date (months ahead from today, day number) ─────
  67  |   async setVisitDate(monthsAhead, dayNumber) {
  68  |     await this.visitDateBtn.click();
  69  |     for (let i = 0; i < monthsAhead; i++) {
> 70  |       await this.nextMonthBtn.click();
      |                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
  71  |     }
  72  |     await this.page.getByRole('gridcell', { name: String(dayNumber) }).click();
  73  |   }
  74  | 
  75  |   // ── Set episode number ───────────────────────────────────────
  76  |   async setEpisodeNumber(episodeNumber) {
  77  |     await this.episodeNumberInput.dblclick();
  78  |     await this.episodeNumberInput.fill(String(episodeNumber));
  79  |     await this.saveBtn.click();
  80  |   }
  81  | 
  82  |   // ── Select patient type ──────────────────────────────────────
  83  |   async selectPatientType(typeName) {
  84  |     await this.patientTypeCombo.click();
  85  |     await this.page.getByRole('button', { name: typeName, exact: true }).click();
  86  |   }
  87  | 
  88  |   // ── Select visit type ────────────────────────────────────────
  89  |   async selectVisitType(typeName) {
  90  |     await this.visitTypeCombo.click();
  91  |     await this.page.getByRole('button', { name: typeName }).click();
  92  |   }
  93  | 
  94  |   // ── Quick assign doctor ──────────────────────────────────────
  95  |   async quickAssignDoctor(staffName) {
  96  |     await this.quickAssignBtn.click();
  97  |     await this.addDoctorBtn.click();
  98  |     await this.selectStaffDropdown.click();
  99  |     await this.page.getByRole('option', { name: staffName }).click();
  100 |     await this.dialogAddDoctorBtn.click();
  101 |   }
  102 | 
  103 |   // ── Quick assign witness ─────────────────────────────────────
  104 |   async quickAssignWitness(staffName) {
  105 |     await this.addWitnessBtn.click();
  106 |     await this.selectStaffDropdown.click();
  107 |     await this.page.getByRole('option', { name: staffName }).click();
  108 |     await this.dialogAddWitnessBtn.click();
  109 |   }
  110 | 
  111 |   // ── Edit parent/guardian co-signer ───────────────────────────
  112 |   async editParentGuardian(fullName) {
  113 |     await this.editParentGuardianBtn.click();
  114 |     await this.parentGuardianFullNameInput.dblclick();
  115 |     await this.parentGuardianFullNameInput.fill(fullName);
  116 |     await this.updateParentGuardianBtn.click();
  117 |   }
  118 | 
  119 |   // ── Edit interpreter ─────────────────────────────────────────
  120 |   async editInterpreter(fullName, language) {
  121 |     await this.editInterpreterBtn.click();
  122 |     await this.interpreterNameInput.click();
  123 |     await this.interpreterNameInput.fill(fullName);
  124 | 
  125 |     // Language field sits inside a label container — click the label then fill
  126 |     await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  127 |     await this.languageInput.fill(language);
  128 |     await this.updateInterpreterBtn.click();
  129 |   }
  130 | }
  131 | 
  132 | module.exports = { ConsentIntakePage };
```