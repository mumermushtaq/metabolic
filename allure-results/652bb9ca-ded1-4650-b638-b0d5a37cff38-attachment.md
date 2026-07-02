# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> quick assigns a doctor
- Location: tests\e2e\consent-intake.spec.js:87:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add Doctor' })

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
                    - generic [ref=e170]: "Last Updated: 25 Jun 2026, 06:49 PM"
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
                          - text: "95346099"
                        - generic: Required
                      - generic [ref=e186]:
                        - button "Save" [ref=e187] [cursor=pointer]
                        - button "Close visit" [ref=e188] [cursor=pointer]
              - generic [ref=e189]:
                - generic [ref=e190]:
                  - heading "Assign New Form" [level=4] [ref=e191]
                  - paragraph [ref=e192]: Use quick-assign to auto-select forms based on patient & visit type, or manually search and select individual forms.
                - generic [ref=e194]:
                  - generic [ref=e195]:
                    - generic [ref=e196]:
                      - img [ref=e197]
                      - generic [ref=e199]: Quick Assign
                    - generic [ref=e200]:
                      - generic [ref=e201]:
                        - generic [ref=e202]: Patient Type
                        - combobox "Patient Type" [ref=e204] [cursor=pointer]:
                          - generic [ref=e205]: Diabetic Female
                          - img [ref=e206]
                      - generic [ref=e208]:
                        - generic [ref=e209]: Visit Type
                        - combobox "Visit Type" [ref=e211] [cursor=pointer]:
                          - generic [ref=e212]: Baseline
                          - img [ref=e213]
                      - button "Quick Assign" [ref=e215] [cursor=pointer]:
                        - img [ref=e216]
                        - text: Quick Assign
                    - generic [ref=e217]:
                      - generic [ref=e218]: "Will assign:"
                      - generic [ref=e219]: GAD-7 Questionnaire
                      - generic [ref=e220]: PAID Questionnaire (PAID-5)
                      - generic [ref=e221]: PHQ-9 Questionnaire
                      - generic [ref=e222]: Menopause Rating Scale (MRS)
                      - generic [ref=e223]: Stop-BANG
                  - generic [ref=e226]: or manually select
                  - generic [ref=e229]:
                    - generic [ref=e230]:
                      - generic [ref=e231]: Search & select forms
                      - combobox "Search & select forms" [ref=e233] [cursor=pointer]:
                        - paragraph [ref=e235]: Select consent forms...
                        - img [ref=e236]
                    - button "Assign (0)" [disabled]:
                      - img
                      - text: Assign (0)
              - generic [ref=e239]:
                - paragraph [ref=e243]: 0/0 Items Completed
                - generic [ref=e244]:
                  - generic [ref=e245]: 0 Completed
                  - generic [ref=e247]: 0 Signed on Paper
                  - generic [ref=e249]: 0 In Progress
                  - generic [ref=e251]: 0 Not Started
              - generic [ref=e253]:
                - heading "Assigned Items" [level=4] [ref=e255]
                - table [ref=e258]:
                  - rowgroup [ref=e259]:
                    - row "Form Name Type Status Score Expiry Guardian Notes Actions" [ref=e260]:
                      - columnheader "Form Name" [ref=e261]
                      - columnheader "Type" [ref=e262]
                      - columnheader "Status" [ref=e263]
                      - columnheader "Score" [ref=e264]
                      - columnheader "Expiry" [ref=e265]
                      - columnheader "Guardian" [ref=e266]
                      - columnheader "Notes" [ref=e267]
                      - columnheader "Actions" [ref=e268]
                  - rowgroup
              - generic [ref=e269]:
                - generic [ref=e270]:
                  - heading "Co-signers" [level=4] [ref=e272]
                  - paragraph [ref=e273]: Optionally add doctor, witness, and parent/guardian co-signers for consent forms, and/or an interpreter who will interpret and co-sign on behalf of the patient.
                - generic [ref=e274]:
                  - generic [ref=e275]:
                    - generic [ref=e276]:
                      - generic [ref=e278]:
                        - generic [ref=e279]: Doctor
                        - generic [ref=e280]: Assigned
                      - generic [ref=e282]:
                        - generic [ref=e283]:
                          - img [ref=e285]
                          - generic [ref=e288]:
                            - generic [ref=e289]: Umer Mushtaq
                            - generic [ref=e290]: Doctor
                        - generic [ref=e291]:
                          - button "Edit doctor co-signer" [ref=e292] [cursor=pointer]:
                            - img [ref=e293]
                          - button "Delete doctor co-signer" [ref=e296] [cursor=pointer]:
                            - img [ref=e297]
                    - generic [ref=e300]:
                      - generic [ref=e302]:
                        - generic [ref=e303]: Witness
                        - generic [ref=e304]: Assigned
                      - generic [ref=e306]:
                        - generic [ref=e307]:
                          - img [ref=e309]
                          - generic [ref=e312]:
                            - generic [ref=e313]: Pradeep Gupta - New Acc
                            - generic [ref=e314]: Witness
                        - generic [ref=e315]:
                          - button "Edit witness co-signer" [ref=e316] [cursor=pointer]:
                            - img [ref=e317]
                          - button "Delete witness co-signer" [ref=e320] [cursor=pointer]:
                            - img [ref=e321]
                    - generic [ref=e324]:
                      - generic [ref=e326]:
                        - generic [ref=e327]: Parent/Guardian
                        - generic [ref=e328]: Assigned
                      - generic [ref=e330]:
                        - generic [ref=e331]:
                          - img [ref=e333]
                          - generic [ref=e336]:
                            - generic [ref=e337]: Guardian 1782165169067
                            - generic [ref=e338]: Parent
                        - generic [ref=e339]:
                          - button "Edit parent/guardian co-signer" [ref=e340] [cursor=pointer]:
                            - img [ref=e341]
                          - button "Delete parent/guardian co-signer" [ref=e344] [cursor=pointer]:
                            - img [ref=e345]
                    - generic [ref=e348]:
                      - generic [ref=e350]:
                        - generic [ref=e351]: Interpreter / Translator
                        - generic [ref=e352]: Assigned
                      - generic [ref=e354]:
                        - generic [ref=e355]:
                          - img [ref=e357]
                          - generic [ref=e361]:
                            - generic [ref=e362]: Test Interpreter
                            - generic [ref=e363]: Spanish
                        - generic [ref=e364]:
                          - button "Edit interpreter" [ref=e365] [cursor=pointer]:
                            - img [ref=e366]
                          - button "Delete interpreter" [ref=e369] [cursor=pointer]:
                            - img [ref=e370]
                  - generic [ref=e373]:
                    - img [ref=e374]
                    - generic [ref=e376]: Doctor co-signer "Umer Mushtaq" (Doctor). Witness co-signer "Pradeep Gupta - New Acc" (Witness). Parent/guardian co-signer "Guardian 1782165169067" will co-sign forms marked with guardian requirement. Interpreter "Test Interpreter" (Spanish) will interpret and co-sign.
              - generic [ref=e379]:
                - button "Generate QR Code" [ref=e380] [cursor=pointer]:
                  - img [ref=e381]
                  - text: Generate QR Code
                - button "Copy Secure Link" [ref=e388] [cursor=pointer]:
                  - img [ref=e389]
                  - text: Copy Secure Link
                - button "Send Reminder" [ref=e393] [cursor=pointer]:
                  - img [ref=e394]
                  - text: Send Reminder
      - generic [ref=e397]:
        - generic [ref=e398]:
          - paragraph [ref=e400]: Chat
          - button "delete" [ref=e401] [cursor=pointer]:
            - img [ref=e402]
        - generic [ref=e406]:
          - paragraph [ref=e407] [cursor=pointer]: Metabolic
          - paragraph [ref=e408] [cursor=pointer]: Zone
  - alert [ref=e409]: Metabolic
```

# Test source

```ts
  71  |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  72  | 
  73  |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  74  |     await patientLink.waitFor({ state: 'visible', timeout: 20000 });
  75  |     await patientLink.click();
  76  | 
  77  |     await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
  78  |     await this.consentIntakeTab.click();
  79  | 
  80  |     await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  81  |   }
  82  | 
  83  |   // ── Set visit date ────────────────────────────────────────────
  84  |   // If monthsAhead=0, picks a day in the current month (no navigation needed)
  85  |   async setVisitDate(targetYear, targetMonth, targetDay) {
  86  |     await this.visitDateBtn.click();
  87  |     await this.nextMonthBtn.waitFor({ state: 'visible', timeout: 10000 });
  88  | 
  89  |     const now = new Date();
  90  |     const monthsToClick = (targetYear - now.getFullYear()) * 12 + (targetMonth - (now.getMonth() + 1));
  91  | 
  92  |     for (let i = 0; i < monthsToClick; i++) {
  93  |       await this.nextMonthBtn.click();
  94  |       await this.page.waitForTimeout(150);
  95  |     }
  96  | 
  97  |     await this.page
  98  |       .locator(`button[name='day'].rdp-day`)
  99  |       .filter({ hasText: new RegExp(`^${targetDay}$`) })
  100 |       .click();
  101 |   }
  102 | 
  103 |   // ── Set unique episode number, retry once on duplicate ────────
  104 |   async setEpisodeNumber(episodeNumber) {
  105 |     await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
  106 |     await this.episodeNumberInput.dblclick();
  107 |     await this.episodeNumberInput.fill(String(episodeNumber));
  108 |     await this.saveBtn.click();
  109 | 
  110 |     // Retry on duplicate error
  111 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  112 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  113 |     if (hasError) {
  114 |       const retryNumber = Date.now().toString().slice(-8);
  115 |       await this.episodeNumberInput.dblclick();
  116 |       await this.episodeNumberInput.fill(retryNumber);
  117 |       await this.saveBtn.click();
  118 |     }
  119 | 
  120 |     // Wait for either: comboboxes appear (adult) or minor banner appears
  121 |     await Promise.race([
  122 |       this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
  123 |       this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
  124 |     ]);
  125 |   }
  126 | 
  127 |   // ── Returns true if minor guardian banner is shown ────────────
  128 |   async isMinorPatient() {
  129 |     return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  130 |   }
  131 | 
  132 |   // ── Select patient type ───────────────────────────────────────
  133 |   async selectPatientType(typeName) {
  134 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  135 |     await this.patientTypeCombo.click();
  136 |     await this.page
  137 |       .getByRole('button', { name: typeName, exact: true })
  138 |       .click();
  139 |   }
  140 | 
  141 |   // ── Select visit type ─────────────────────────────────────────
  142 |   async selectVisitType(typeName) {
  143 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  144 |     await this.visitTypeCombo.click();
  145 |     await this.page
  146 |       .getByRole('button', { name: typeName, exact: true })
  147 |       .click();
  148 |   }
  149 | 
  150 |   // ── Quick assign (auto-assign by patient+visit type) ──────────
  151 |   async quickAssign() {
  152 |     await this.quickAssignBtn.waitFor({ state: 'enabled', timeout: 10000 });
  153 |     await this.quickAssignBtn.click();
  154 |   }
  155 | 
  156 |   // ── Manually assign a form by searching ──────────────────────
  157 |   async assignFormBySearch(formNamePartial) {
  158 |     await this.searchFormsCombo.click();
  159 |     await this.page
  160 |       .getByRole('button', { name: new RegExp(formNamePartial, 'i') })
  161 |       .first()
  162 |       .click();
  163 |     // Assign button label updates to show count e.g. "Assign (1)"
  164 |     await this.page
  165 |       .getByRole('button', { name: /^Assign \(\d+\)$/ })
  166 |       .click();
  167 |   }
  168 | 
  169 |   // ── Add doctor co-signer ──────────────────────────────────────
  170 |   async addDoctor(staffName, fullName) {
> 171 |     await this.addDoctorBtn.click();
      |                             ^ Error: locator.click: Test timeout of 60000ms exceeded.
  172 |     // Select from staff dropdown
  173 |     await this.selectStaffDropdown.click();
  174 |     await this.page.getByRole('option', { name: staffName }).click();
  175 |     // Fill full name field (required in dialog)
  176 |     await this.doctorFullNameInput.fill(fullName);
  177 |     await this.dialogAddDoctorBtn.click();
  178 |   }
  179 | 
  180 |   // ── Add witness co-signer ─────────────────────────────────────
  181 |   async addWitness(staffName) {
  182 |     await this.addWitnessBtn.click();
  183 |     await this.selectStaffDropdown.click();
  184 |     // Click once — Codegen double-click is a recording artifact
  185 |     await this.page.getByRole('option', { name: staffName }).click();
  186 |     await this.dialogAddWitnessBtn.click();
  187 |   }
  188 | 
  189 |   // ── Add or edit parent/guardian ───────────────────────────────
  190 |   async editParentGuardian(fullName) {
  191 |     const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
  192 |     if (hasEdit) {
  193 |       await this.editParentGuardianBtn.click();
  194 |       await this.parentGuardianFullNameInput.dblclick();
  195 |       await this.parentGuardianFullNameInput.fill(fullName);
  196 |       await this.updateParentGuardianBtn.click();
  197 |     } else {
  198 |       await this.addParentGuardianBtn.click();
  199 |       await this.parentGuardianFullNameInput.fill(fullName);
  200 |       await this.page.getByRole('dialog').getByRole('button', { name: 'Add Parent/Guardian' }).click();
  201 |     }
  202 |   }
  203 | 
  204 |   // ── Add or edit interpreter ───────────────────────────────────
  205 |   async editInterpreter(fullName, language) {
  206 |     const hasEdit = await this.editInterpreterBtn.isVisible({ timeout: 3000 }).catch(() => false);
  207 |     if (hasEdit) {
  208 |       await this.editInterpreterBtn.click();
  209 |       await this.interpreterNameInput.click();
  210 |       await this.interpreterNameInput.fill(fullName);
  211 |       await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  212 |       await this.languageInput.fill(language);
  213 |       await this.updateInterpreterBtn.click();
  214 |     } else {
  215 |       await this.addInterpreterBtn.click();
  216 |       await this.interpreterNameInput.fill(fullName);
  217 |       await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  218 |       await this.languageInput.fill(language);
  219 |       await this.page.getByRole('dialog').getByRole('button', { name: 'Add Interpreter' }).click();
  220 |     }
  221 |   }
  222 | 
  223 |   // ── Full setup: date + episode + guardian (if minor) + patient/visit type ──
  224 |   async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
  225 |     await this.setVisitDate(targetYear, targetMonth, targetDay);
  226 |     await this.setEpisodeNumber(episodeNumber);
  227 | 
  228 |     if (await this.isMinorPatient()) {
  229 |       await this.editParentGuardian(guardianName);
  230 |       await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
  231 |     }
  232 | 
  233 |     // Select Patient Type + Visit Type so Quick Assign button becomes enabled
  234 |     await this.selectPatientType('Diabetic Female');
  235 |     await this.selectVisitType('Baseline');
  236 |   }
  237 | }
  238 | 
  239 | module.exports = { ConsentIntakePage };
```