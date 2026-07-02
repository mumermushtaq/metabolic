# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> selects patient type
- Location: tests\e2e\consent-intake.spec.js:43:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'Patient Type' })
    - locator resolved to <button disabled type="button" role="combobox" aria-expanded="false" id="patient-type-combobox" aria-controls="patient-type-popover" class="ConsentIntake_comboboxTrigger__cZayx">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    33 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  69 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is not enabled
  - retrying click action
    - waiting 500ms

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
            - generic [ref=e155]:
              - generic [ref=e158]:
                - generic [ref=e159]:
                  - generic [ref=e160]:
                    - img [ref=e161]
                    - paragraph [ref=e165]: Next Visit
                  - generic [ref=e166]:
                    - img [ref=e167]
                    - generic [ref=e170]: "Last Updated: 23 Jun 2026, 02:06 AM"
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - generic [ref=e173]: Visit Date
                    - button "Visit Date" [ref=e174] [cursor=pointer]:
                      - generic [ref=e175]:
                        - img [ref=e176]
                        - generic [ref=e178]: 15 Aug 2026
                      - img [ref=e179]
                  - generic [ref=e181]:
                    - generic [ref=e182]: Episode Number *
                    - generic [ref=e183]:
                      - generic [ref=e184]:
                        - textbox "Episode Number *" [ref=e185]:
                          - /placeholder: Enter episode number...
                          - text: "62369447"
                        - generic: Required
                      - generic [ref=e186]:
                        - button "Save" [active] [ref=e187] [cursor=pointer]
                        - button "Close visit" [ref=e188] [cursor=pointer]
              - generic [ref=e189]:
                - generic [ref=e190]:
                  - heading "Assign New Form" [level=4] [ref=e191]
                  - paragraph [ref=e192]: Use quick-assign to auto-select forms based on patient & visit type, or manually search and select individual forms.
                  - generic [ref=e193]: This patient is a minor. A guardian must be added before consent forms can proceed.
                - generic [ref=e195]:
                  - generic [ref=e196]:
                    - generic [ref=e197]:
                      - img [ref=e198]
                      - generic [ref=e200]: Quick Assign
                    - generic [ref=e201]:
                      - generic [ref=e202]:
                        - generic [ref=e203]: Patient Type
                        - combobox "Patient Type" [disabled] [ref=e205] [cursor=pointer]:
                          - generic [ref=e206]: Select patient type...
                          - img [ref=e207]
                      - generic [ref=e209]:
                        - generic [ref=e210]: Visit Type
                        - combobox "Visit Type" [disabled] [ref=e212] [cursor=pointer]:
                          - generic [ref=e213]: Baseline
                          - img [ref=e214]
                      - button "Quick Assign" [disabled]:
                        - img
                        - text: Quick Assign
                  - generic [ref=e218]: or manually select
                  - generic [ref=e221]:
                    - generic [ref=e222]:
                      - generic [ref=e223]: Search & select forms
                      - combobox "Search & select forms" [disabled] [ref=e225] [cursor=pointer]:
                        - paragraph [ref=e227]: Select consent forms...
                        - img [ref=e228]
                    - button "Assign (0)" [disabled]:
                      - img
                      - text: Assign (0)
              - generic [ref=e231]:
                - paragraph [ref=e235]: 0/0 Items Completed
                - generic [ref=e236]:
                  - generic [ref=e237]: 0 Completed
                  - generic [ref=e239]: 0 Signed on Paper
                  - generic [ref=e241]: 0 In Progress
                  - generic [ref=e243]: 0 Not Started
              - generic [ref=e245]:
                - heading "Assigned Items" [level=4] [ref=e247]
                - table [ref=e250]:
                  - rowgroup [ref=e251]:
                    - row "Form Name Type Status Score Expiry Guardian Notes Actions" [ref=e252]:
                      - columnheader "Form Name" [ref=e253]
                      - columnheader "Type" [ref=e254]
                      - columnheader "Status" [ref=e255]
                      - columnheader "Score" [ref=e256]
                      - columnheader "Expiry" [ref=e257]
                      - columnheader "Guardian" [ref=e258]
                      - columnheader "Notes" [ref=e259]
                      - columnheader "Actions" [ref=e260]
                  - rowgroup
              - generic [ref=e261]:
                - generic [ref=e262]:
                  - heading "Co-signers" [level=4] [ref=e264]
                  - paragraph [ref=e265]: Optionally add doctor, witness, and parent/guardian co-signers for consent forms, and/or an interpreter who will interpret and co-sign on behalf of the patient.
                - generic [ref=e267]:
                  - generic [ref=e268]:
                    - generic [ref=e269]:
                      - generic [ref=e271]: Doctor
                      - button "Add Doctor" [ref=e272] [cursor=pointer]:
                        - img [ref=e273]
                        - text: Add Doctor
                    - generic [ref=e274]:
                      - img [ref=e275]
                      - generic [ref=e278]: No co-signer assigned
                  - generic [ref=e279]:
                    - generic [ref=e280]:
                      - generic [ref=e282]: Witness
                      - button "Add Witness" [ref=e283] [cursor=pointer]:
                        - img [ref=e284]
                        - text: Add Witness
                    - generic [ref=e285]:
                      - img [ref=e286]
                      - generic [ref=e289]: No co-signer assigned
                  - generic [ref=e290]:
                    - generic [ref=e291]:
                      - generic [ref=e293]: Parent/Guardian
                      - button "Add Parent/Guardian" [ref=e294] [cursor=pointer]:
                        - img [ref=e295]
                        - text: Add Parent/Guardian
                    - generic [ref=e296]:
                      - img [ref=e297]
                      - generic [ref=e301]: No co-signer assigned
                  - generic [ref=e302]:
                    - generic [ref=e303]:
                      - generic [ref=e305]: Interpreter / Translator
                      - button "Add Interpreter" [ref=e306] [cursor=pointer]:
                        - img [ref=e307]
                        - text: Add Interpreter
                    - generic [ref=e308]:
                      - img [ref=e309]
                      - generic [ref=e313]: No interpreter assigned
              - generic [ref=e316]:
                - button "Generate QR Code" [ref=e317] [cursor=pointer]:
                  - img [ref=e318]
                  - text: Generate QR Code
                - button "Copy Secure Link" [ref=e325] [cursor=pointer]:
                  - img [ref=e326]
                  - text: Copy Secure Link
                - button "Send Reminder" [ref=e330] [cursor=pointer]:
                  - img [ref=e331]
                  - text: Send Reminder
      - generic [ref=e334]:
        - generic [ref=e335]:
          - paragraph [ref=e337]: Chat
          - button "delete" [ref=e338] [cursor=pointer]:
            - img [ref=e339]
        - generic [ref=e343]:
          - paragraph [ref=e344] [cursor=pointer]: Metabolic
          - paragraph [ref=e345] [cursor=pointer]: Zone
  - alert [ref=e346]: Metabolic
```

# Test source

```ts
  25  |     this.quickAssignBtn = page.getByRole('button', { name: 'Quick Assign' });
  26  | 
  27  |     // Add Doctor dialog
  28  |     this.addDoctorBtn        = page.getByRole('button', { name: 'Add Doctor' });
  29  |     this.selectStaffDropdown = page.getByRole('button', { name: 'Select staff…' });
  30  |     this.dialogAddDoctorBtn  = page.getByRole('dialog').getByRole('button', { name: 'Add Doctor' });
  31  | 
  32  |     // Add Witness dialog
  33  |     this.addWitnessBtn       = page.getByRole('button', { name: 'Add Witness' });
  34  |     this.dialogAddWitnessBtn = page.getByRole('dialog').getByRole('button', { name: 'Add Witness' });
  35  | 
  36  |     // ── Parent/Guardian ──────────────────────────────────────────
  37  |     this.editParentGuardianBtn       = page.getByRole('button', { name: 'Edit parent/guardian co-signer' });
  38  |     this.parentGuardianFullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  39  |     this.updateParentGuardianBtn     = page.getByRole('button', { name: 'Update Parent/Guardian' });
  40  | 
  41  |     // ── Interpreter ──────────────────────────────────────────────
  42  |     this.editInterpreterBtn   = page.getByRole('button', { name: 'Edit interpreter' });
  43  |     this.interpreterNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  44  |     this.languageInput        = page.getByRole('textbox', { name: 'Language' });
  45  |     this.updateInterpreterBtn = page.getByRole('button', { name: 'Update Interpreter' });
  46  | 
  47  |     // ── Secure link ──────────────────────────────────────────────
  48  |     this.copySecureLinkBtn = page.getByRole('button', { name: 'Copy Secure Link' });
  49  |   }
  50  | 
  51  |   // ── Open patient and go to Consent & Intake tab ──────────────
  52  |   async openPatientConsentTab(patientName) {
  53  |     await this.page.goto(`${process.env.BASE_URL}/patient`);
  54  |     await this.page.getByRole('heading', { name: 'Patients', exact: true })
  55  |       .waitFor({ state: 'visible', timeout: 15000 });
  56  | 
  57  |     const search = this.page.getByRole('textbox', { name: 'Search' });
  58  |     await search.click();
  59  |     await search.fill(patientName);
  60  |     await search.press('Enter');
  61  | 
  62  |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  63  |     await patientLink.waitFor({ state: 'visible', timeout: 15000 });
  64  |     await patientLink.click();
  65  | 
  66  |     await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
  67  |     await this.consentIntakeTab.click();
  68  | 
  69  |     // Wait for the visit date trigger to confirm tab is fully loaded
  70  |     await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  71  |   }
  72  | 
  73  |   // ── Set visit date to a specific absolute future date ─────────
  74  |   // targetYear: e.g. 2026, targetMonth: 1-12, targetDay: 1-31
  75  |   async setVisitDate(targetYear, targetMonth, targetDay) {
  76  |     await this.visitDateBtn.click();
  77  | 
  78  |     // Wait for calendar popover to open
  79  |     await this.nextMonthBtn.waitFor({ state: 'visible', timeout: 10000 });
  80  | 
  81  |     // Calculate exact number of months to click from today — no header reading needed
  82  |     const now = new Date();
  83  |     const currentYear  = now.getFullYear();
  84  |     const currentMonth = now.getMonth() + 1; // 1-based
  85  |     const monthsToClick = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);
  86  | 
  87  |     for (let i = 0; i < monthsToClick; i++) {
  88  |       await this.nextMonthBtn.click();
  89  |       // Small pause so the calendar re-renders between clicks
  90  |       await this.page.waitForTimeout(150);
  91  |     }
  92  | 
  93  |     // Click the rdp-day button directly by its text content
  94  |     // role='gridcell' is on the <td> wrapper — the actual clickable is <button name='day' class='rdp-day'>
  95  |     await this.page
  96  |       .locator(`button[name='day'].rdp-day`)
  97  |       .filter({ hasText: new RegExp(`^${targetDay}$`) })
  98  |       .click();
  99  |   }
  100 | 
  101 |   // ── Set unique episode number, retry once on duplicate error ──
  102 |   async setEpisodeNumber(episodeNumber) {
  103 |     await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
  104 |     await this.episodeNumberInput.dblclick();
  105 |     await this.episodeNumberInput.fill(String(episodeNumber));
  106 |     await this.saveBtn.click();
  107 | 
  108 |     // If a duplicate-episode error appears, retry with a fresh timestamp
  109 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  110 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  111 |     if (hasError) {
  112 |       const retryNumber = Date.now().toString().slice(-8);
  113 |       await this.episodeNumberInput.dblclick();
  114 |       await this.episodeNumberInput.fill(retryNumber);
  115 |       await this.saveBtn.click();
  116 |     }
  117 | 
  118 |     // Patient Type combobox appearing confirms save succeeded
  119 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
  120 |   }
  121 | 
  122 |   // ── Select patient type (only available after episode saved) ──
  123 |   async selectPatientType(typeName) {
  124 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
> 125 |     await this.patientTypeCombo.click();
      |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  126 |     await this.page.getByRole('button', { name: typeName, exact: true }).click();
  127 |   }
  128 | 
  129 |   // ── Select visit type ────────────────────────────────────────
  130 |   async selectVisitType(typeName) {
  131 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  132 |     await this.visitTypeCombo.click();
  133 |     await this.page.getByRole('button', { name: typeName }).click();
  134 |   }
  135 | 
  136 |   // ── Quick assign doctor ──────────────────────────────────────
  137 |   async quickAssignDoctor(staffName) {
  138 |     await this.quickAssignBtn.click();
  139 |     await this.addDoctorBtn.click();
  140 |     await this.selectStaffDropdown.click();
  141 |     await this.page.getByRole('option', { name: staffName }).click();
  142 |     await this.dialogAddDoctorBtn.click();
  143 |   }
  144 | 
  145 |   // ── Quick assign witness ─────────────────────────────────────
  146 |   async quickAssignWitness(staffName) {
  147 |     await this.addWitnessBtn.click();
  148 |     await this.selectStaffDropdown.click();
  149 |     await this.page.getByRole('option', { name: staffName }).click();
  150 |     await this.dialogAddWitnessBtn.click();
  151 |   }
  152 | 
  153 |   // ── Edit parent/guardian co-signer ───────────────────────────
  154 |   async editParentGuardian(fullName) {
  155 |     await this.editParentGuardianBtn.click();
  156 |     await this.parentGuardianFullNameInput.dblclick();
  157 |     await this.parentGuardianFullNameInput.fill(fullName);
  158 |     await this.updateParentGuardianBtn.click();
  159 |   }
  160 | 
  161 |   // ── Edit interpreter ─────────────────────────────────────────
  162 |   async editInterpreter(fullName, language) {
  163 |     await this.editInterpreterBtn.click();
  164 |     await this.interpreterNameInput.click();
  165 |     await this.interpreterNameInput.fill(fullName);
  166 |     await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  167 |     await this.languageInput.fill(language);
  168 |     await this.updateInterpreterBtn.click();
  169 |   }
  170 | }
  171 | 
  172 | module.exports = { ConsentIntakePage };
```