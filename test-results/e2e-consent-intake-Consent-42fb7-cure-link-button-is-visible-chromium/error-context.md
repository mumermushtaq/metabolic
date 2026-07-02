# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> copy secure link button is visible
- Location: tests\e2e\consent-intake.spec.js:120:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add Parent/Guardian' }).first()
    - locator resolved to <button type="button" class="ConsentIntake_outlineDarkStrong__HzbNl btn btn-outline-dark">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
  - element was detached from the DOM, retrying

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
          - text: ABC Mushtaq
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
                    - generic [ref=e170]: "Last Updated: 02 Jul 2026, 06:31 AM"
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - generic [ref=e173]: Visit Date
                    - button "Visit Date" [ref=e174] [cursor=pointer]:
                      - generic [ref=e175]:
                        - img [ref=e176]
                        - generic [ref=e178]: 15 Sep 2026
                      - img [ref=e179]
                  - generic [ref=e181]:
                    - generic [ref=e182]: Episode Number *
                    - generic [ref=e183]:
                      - generic [ref=e184]:
                        - textbox "Episode Number *" [ref=e185]:
                          - /placeholder: Enter episode number...
                          - text: "55901034"
                        - generic: Required
                      - generic [ref=e186]:
                        - button "Save" [active] [ref=e187] [cursor=pointer]
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
                          - generic [ref=e205]: Select patient type...
                          - img [ref=e206]
                      - generic [ref=e208]:
                        - generic [ref=e209]: Visit Type
                        - combobox "Visit Type" [ref=e211] [cursor=pointer]:
                          - generic [ref=e212]: Baseline
                          - img [ref=e213]
                      - button "Quick Assign" [disabled]:
                        - img
                        - text: Quick Assign
                  - generic [ref=e217]: or manually select
                  - generic [ref=e220]:
                    - generic [ref=e221]:
                      - generic [ref=e222]: Search & select forms
                      - combobox "Search & select forms" [ref=e224] [cursor=pointer]:
                        - paragraph [ref=e226]: Select consent forms...
                        - img [ref=e227]
                    - button "Assign (0)" [disabled]:
                      - img
                      - text: Assign (0)
              - generic [ref=e230]:
                - paragraph [ref=e234]: 0/0 Items Completed
                - generic [ref=e235]:
                  - generic [ref=e236]: 0 Completed
                  - generic [ref=e238]: 0 Signed on Paper
                  - generic [ref=e240]: 0 In Progress
                  - generic [ref=e242]: 0 Not Started
              - generic [ref=e244]:
                - heading "Assigned Items" [level=4] [ref=e246]
                - table [ref=e249]:
                  - rowgroup [ref=e250]:
                    - row "Form Name Type Status Score Expiry Guardian Notes Actions" [ref=e251]:
                      - columnheader "Form Name" [ref=e252]
                      - columnheader "Type" [ref=e253]
                      - columnheader "Status" [ref=e254]
                      - columnheader "Score" [ref=e255]
                      - columnheader "Expiry" [ref=e256]
                      - columnheader "Guardian" [ref=e257]
                      - columnheader "Notes" [ref=e258]
                      - columnheader "Actions" [ref=e259]
                  - rowgroup
              - generic [ref=e260]:
                - generic [ref=e261]:
                  - heading "Co-signers" [level=4] [ref=e263]
                  - paragraph [ref=e264]: Optionally add doctor, witness, and parent/guardian co-signers for consent forms, and/or an interpreter who will interpret and co-sign on behalf of the patient.
                - generic [ref=e265]:
                  - generic [ref=e266]:
                    - generic [ref=e267]:
                      - generic [ref=e269]:
                        - generic [ref=e270]: Doctor
                        - generic [ref=e271]: Assigned
                      - generic [ref=e273]:
                        - generic [ref=e274]:
                          - img [ref=e276]
                          - generic [ref=e279]:
                            - generic [ref=e280]: Umer Mushtaq
                            - generic [ref=e281]: Doctor
                        - generic [ref=e282]:
                          - button "Edit doctor co-signer" [ref=e283] [cursor=pointer]:
                            - img [ref=e284]
                          - button "Delete doctor co-signer" [ref=e287] [cursor=pointer]:
                            - img [ref=e288]
                    - generic [ref=e291]:
                      - generic [ref=e293]:
                        - generic [ref=e294]: Witness
                        - generic [ref=e295]: Assigned
                      - generic [ref=e297]:
                        - generic [ref=e298]:
                          - img [ref=e300]
                          - generic [ref=e303]:
                            - generic [ref=e304]: Pradeep Gupta - New Acc
                            - generic [ref=e305]: Witness
                        - generic [ref=e306]:
                          - button "Edit witness co-signer" [ref=e307] [cursor=pointer]:
                            - img [ref=e308]
                          - button "Delete witness co-signer" [ref=e311] [cursor=pointer]:
                            - img [ref=e312]
                    - generic [ref=e315]:
                      - generic [ref=e317]:
                        - generic [ref=e318]: Parent/Guardian
                        - generic [ref=e319]: Assigned
                      - generic [ref=e321]:
                        - generic [ref=e322]:
                          - img [ref=e324]
                          - generic [ref=e327]:
                            - generic [ref=e328]: Guardian 1782955883237
                            - generic [ref=e329]: Parent
                        - generic [ref=e330]:
                          - button "Edit parent/guardian co-signer" [ref=e331] [cursor=pointer]:
                            - img [ref=e332]
                          - button "Delete parent/guardian co-signer" [ref=e335] [cursor=pointer]:
                            - img [ref=e336]
                    - generic [ref=e339]:
                      - generic [ref=e341]:
                        - generic [ref=e342]: Interpreter / Translator
                        - generic [ref=e343]: Assigned
                      - generic [ref=e345]:
                        - generic [ref=e346]:
                          - img [ref=e348]
                          - generic [ref=e352]:
                            - generic [ref=e353]: Test Interpreter
                            - generic [ref=e354]: Spanish
                        - generic [ref=e355]:
                          - button "Edit interpreter" [ref=e356] [cursor=pointer]:
                            - img [ref=e357]
                          - button "Delete interpreter" [ref=e360] [cursor=pointer]:
                            - img [ref=e361]
                  - generic [ref=e364]:
                    - img [ref=e365]
                    - generic [ref=e367]: Doctor co-signer "Umer Mushtaq" (Doctor). Witness co-signer "Pradeep Gupta - New Acc" (Witness). Parent/guardian co-signer "Guardian 1782955883237" will co-sign forms marked with guardian requirement. Interpreter "Test Interpreter" (Spanish) will interpret and co-sign.
              - generic [ref=e370]:
                - button "Generate QR Code" [ref=e371] [cursor=pointer]:
                  - img [ref=e372]
                  - text: Generate QR Code
                - button "Copy Secure Link" [ref=e379] [cursor=pointer]:
                  - img [ref=e380]
                  - text: Copy Secure Link
                - button "Send Reminder" [ref=e384] [cursor=pointer]:
                  - img [ref=e385]
                  - text: Send Reminder
      - generic [ref=e388]:
        - generic [ref=e389]:
          - paragraph [ref=e391]: Chat
          - button "delete" [ref=e392] [cursor=pointer]:
            - img [ref=e393]
        - generic [ref=e397]:
          - paragraph [ref=e398] [cursor=pointer]: Metabolic
          - paragraph [ref=e399] [cursor=pointer]: Zone
  - alert [ref=e400]
```

# Test source

```ts
  110 |   async setEpisodeNumber(episodeNumber) {
  111 |     await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
  112 |     await this.episodeNumberInput.dblclick();
  113 |     await this.episodeNumberInput.fill(String(episodeNumber));
  114 |     await this.saveBtn.click();
  115 | 
  116 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  117 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  118 |     if (hasError) {
  119 |       const retryNumber = Date.now().toString().slice(-8);
  120 |       await this.episodeNumberInput.dblclick();
  121 |       await this.episodeNumberInput.fill(retryNumber);
  122 |       await this.saveBtn.click();
  123 |     }
  124 | 
  125 |     await this.waitForSaveToSettle();
  126 |   }
  127 | 
  128 |   async isMinorPatient() {
  129 |     return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  130 |   }
  131 | 
  132 |   async selectPatientType(typeName) {
  133 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  134 |     await this.patientTypeCombo.click();
  135 |     await this.page.getByRole('button', { name: typeName, exact: true }).click();
  136 |   }
  137 | 
  138 |   async selectVisitType(typeName) {
  139 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  140 |     await this.visitTypeCombo.click();
  141 |     await this.page.getByRole('button', { name: typeName, exact: true }).click();
  142 |   }
  143 | 
  144 |   async quickAssign() {
  145 |     await this.quickAssignBtn.waitFor({ state: 'enabled', timeout: 10000 });
  146 |     await this.quickAssignBtn.click();
  147 |   }
  148 | 
  149 |   async assignFormBySearch(formNamePartial) {
  150 |     await this.searchFormsCombo.click();
  151 |     await this.page.getByRole('button', { name: new RegExp(formNamePartial, 'i') }).first().click();
  152 |     await this.page.getByRole('button', { name: /^Assign \(\d+\)$/ }).click();
  153 |   }
  154 | 
  155 |   async addOrEditDoctor(staffName) {
  156 |     const hasEdit = await this.editDoctorBtn.isVisible({ timeout: 3000 }).catch(() => false);
  157 |     const dialog = this.page.getByRole('dialog');
  158 | 
  159 |     if (hasEdit) {
  160 |       await this.editDoctorBtn.click();
  161 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  162 |       await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
  163 |       await dialog.getByRole('listbox').getByRole('option', { name: staffName }).click();
  164 |       await this.updateDoctorBtn.click();
  165 |     } else {
  166 |       await this.addDoctorBtn.click();
  167 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  168 |       await this.selectStaffDropdown.click();
  169 |       await this.page.getByRole('option', { name: staffName }).click();
  170 |       await dialog.getByRole('textbox', { name: 'Full name *' }).fill(staffName);
  171 |       await this.dialogAddDoctorBtn.click();
  172 |     }
  173 | 
  174 |     await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  175 |   }
  176 | 
  177 |   async addOrEditWitness(staffName) {
  178 |     const hasEdit = await this.editWitnessBtn.isVisible({ timeout: 3000 }).catch(() => false);
  179 |     const dialog = this.page.getByRole('dialog');
  180 | 
  181 |     if (hasEdit) {
  182 |       await this.editWitnessBtn.click();
  183 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  184 |       await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
  185 |       await dialog.getByRole('listbox').getByRole('option', { name: staffName }).click();
  186 |       await this.updateWitnessBtn.click();
  187 |     } else {
  188 |       await this.addWitnessBtn.click();
  189 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  190 |       await this.selectStaffDropdown.click();
  191 |       await this.page.getByRole('option', { name: staffName }).click();
  192 |       await this.dialogAddWitnessBtn.click();
  193 |     }
  194 | 
  195 |     await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  196 |   }
  197 | 
  198 |   async editParentGuardian(fullName) {
  199 |     const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
  200 |     const dialog = this.page.getByRole('dialog');
  201 | 
  202 |     if (hasEdit) {
  203 |       await this.editParentGuardianBtn.click();
  204 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  205 |       const nameInput = dialog.locator('input').first();
  206 |       await nameInput.click({ clickCount: 3 });
  207 |       await nameInput.fill(fullName);
  208 |       await this.updateParentGuardianBtn.click();
  209 |     } else {
> 210 |       await this.addParentGuardianBtn.first().click();
      |                                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
  211 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  212 |       await dialog.locator('input').first().fill(fullName);
  213 |       await dialog.getByRole('button', { name: 'Add Parent/Guardian' }).click();
  214 |     }
  215 | 
  216 |     await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  217 |   }
  218 | 
  219 |   async editInterpreter(fullName, language) {
  220 |     const hasEdit = await this.editInterpreterBtn.isVisible({ timeout: 3000 }).catch(() => false);
  221 |     const dialog = this.page.getByRole('dialog');
  222 | 
  223 |     if (hasEdit) {
  224 |       await this.editInterpreterBtn.click();
  225 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  226 |       await this.interpreterNameInput.click();
  227 |       await this.interpreterNameInput.fill(fullName);
  228 |       await dialog.locator('div').filter({ hasText: /^Language$/ }).click();
  229 |       await this.languageInput.fill(language);
  230 |       await this.updateInterpreterBtn.click();
  231 |     } else {
  232 |       await this.addInterpreterBtn.click();
  233 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  234 |       await this.interpreterNameInput.fill(fullName);
  235 |       await dialog.locator('div').filter({ hasText: /^Language$/ }).click();
  236 |       await this.languageInput.fill(language);
  237 |       await dialog.getByRole('button', { name: 'Add Interpreter' }).click();
  238 |     }
  239 | 
  240 |     await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  241 |   }
  242 | 
  243 |   async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
  244 |     await this.setVisitDate(targetYear, targetMonth, targetDay);
  245 |     await this.setEpisodeNumber(episodeNumber);
  246 | 
  247 |     if (await this.isMinorPatient()) {
  248 |       await this.editParentGuardian(guardianName);
  249 |       await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
  250 |     }
  251 | 
  252 |     await this.selectPatientType('Diabetic Female');
  253 |     await this.selectVisitType('Baseline');
  254 |   }
  255 | }
  256 | 
  257 | module.exports = { ConsentIntakePage };
  258 | 
  259 | 
```