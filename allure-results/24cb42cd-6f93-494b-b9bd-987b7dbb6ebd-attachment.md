# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> quick assigns a witness
- Location: tests\e2e\consent-intake.spec.js:84:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('dialog').getByRole('button', { name: 'Add Witness' })
    - locator resolved to <button disabled type="button" class="btn btn-dark">Add Witness</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    88 × waiting for element to be visible, enabled and stable
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
                    - generic [ref=e170]: "Last Updated: 23 Jun 2026, 02:40 AM"
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
                          - text: "64447586"
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
                      - generic [ref=e268]:
                        - generic [ref=e270]: Doctor
                        - button "Add Doctor" [ref=e271] [cursor=pointer]:
                          - img [ref=e272]
                          - text: Add Doctor
                      - generic [ref=e273]:
                        - img [ref=e274]
                        - generic [ref=e277]: No co-signer assigned
                    - generic [ref=e278]:
                      - generic [ref=e279]:
                        - generic [ref=e281]: Witness
                        - button "Add Witness" [ref=e282] [cursor=pointer]:
                          - img [ref=e283]
                          - text: Add Witness
                      - generic [ref=e284]:
                        - img [ref=e285]
                        - generic [ref=e288]: No co-signer assigned
                    - generic [ref=e289]:
                      - generic [ref=e291]:
                        - generic [ref=e292]: Parent/Guardian
                        - generic [ref=e293]: Assigned
                      - generic [ref=e295]:
                        - generic [ref=e296]:
                          - img [ref=e298]
                          - generic [ref=e301]:
                            - generic [ref=e302]: Test Guardian
                            - generic [ref=e303]: Parent
                        - generic [ref=e304]:
                          - button "Edit parent/guardian co-signer" [ref=e305] [cursor=pointer]:
                            - img [ref=e306]
                          - button "Delete parent/guardian co-signer" [ref=e309] [cursor=pointer]:
                            - img [ref=e310]
                    - generic [ref=e313]:
                      - generic [ref=e315]:
                        - generic [ref=e316]: Interpreter / Translator
                        - generic [ref=e317]: Assigned
                      - generic [ref=e319]:
                        - generic [ref=e320]:
                          - img [ref=e322]
                          - generic [ref=e326]:
                            - generic [ref=e327]: Test Interpreter
                            - generic [ref=e328]: Spanish
                        - generic [ref=e329]:
                          - button "Edit interpreter" [ref=e330] [cursor=pointer]:
                            - img [ref=e331]
                          - button "Delete interpreter" [ref=e334] [cursor=pointer]:
                            - img [ref=e335]
                  - generic [ref=e338]:
                    - img [ref=e339]
                    - generic [ref=e341]: Parent/guardian co-signer "Test Guardian" will co-sign forms marked with guardian requirement. Interpreter "Test Interpreter" (Spanish) will interpret and co-sign.
              - generic [ref=e344]:
                - button "Generate QR Code" [ref=e345] [cursor=pointer]:
                  - img [ref=e346]
                  - text: Generate QR Code
                - button "Copy Secure Link" [ref=e353] [cursor=pointer]:
                  - img [ref=e354]
                  - text: Copy Secure Link
                - button "Send Reminder" [ref=e358] [cursor=pointer]:
                  - img [ref=e359]
                  - text: Send Reminder
      - generic [ref=e362]:
        - generic [ref=e363]:
          - paragraph [ref=e365]: Chat
          - button "delete" [ref=e366] [cursor=pointer]:
            - img [ref=e367]
        - generic [ref=e371]:
          - paragraph [ref=e372] [cursor=pointer]: Metabolic
          - paragraph [ref=e373] [cursor=pointer]: Zone
  - alert [ref=e374]: Metabolic
  - dialog [ref=e376]:
    - generic [ref=e377]:
      - generic [ref=e378]:
        - generic [ref=e379]:
          - generic [ref=e380]: Add Witness Co-signer
          - paragraph [ref=e381]: Choosing staff fills the displayed name; the server currently stores guardian name, relation, and role only.
        - button "Close" [ref=e382] [cursor=pointer]
      - generic [ref=e383]:
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]: Staff member *
            - generic [ref=e387]:
              - button "Select staff…" [expanded] [ref=e388] [cursor=pointer]:
                - generic [ref=e389]: Select staff…
                - img [ref=e390]
              - listbox "Witness staff list" [ref=e392]:
                - option "M L" [ref=e393] [cursor=pointer]:
                  - generic [ref=e394]: M L
                - option "Pradeep Gupta - New Acc" [active] [ref=e395] [cursor=pointer]:
                  - generic [ref=e396]: Pradeep Gupta - New Acc
                - option "Abbas Ghaderi Signature not present" [disabled] [ref=e397]:
                  - generic [ref=e398]: Abbas Ghaderi
                  - generic: Signature not present
                - option "Ali A" [disabled] [ref=e399]:
                  - generic [ref=e400]: Ali A
                - option "dddd sssss" [disabled] [ref=e401]:
                  - generic [ref=e402]: dddd sssss
                - option "Dianne Divino-Catapang" [disabled] [ref=e403]:
                  - generic [ref=e404]: Dianne Divino-Catapang
                - option "Elvira Bah" [disabled] [ref=e405]:
                  - generic [ref=e406]: Elvira Bah
                - option "George Alba" [disabled] [ref=e407]:
                  - generic [ref=e408]: George Alba
                - option "Hani Staff" [disabled] [ref=e409]:
                  - generic [ref=e410]: Hani Staff
                - option "Huzaifa Umer" [disabled] [ref=e411]:
                  - generic [ref=e412]: Huzaifa Umer
                - option "Ihsan Jones" [disabled] [ref=e413]:
                  - generic [ref=e414]: Ihsan Jones
                - option "Johnnie Walker" [disabled] [ref=e415]:
                  - generic [ref=e416]: Johnnie Walker
                - option "Kaleem Asad" [disabled] [ref=e417]:
                  - generic [ref=e418]: Kaleem Asad
                - option "M K" [disabled] [ref=e419]:
                  - generic [ref=e420]: M K
                - option "M K" [disabled] [ref=e421]:
                  - generic [ref=e422]: M K
                - option "Mahlaa Zandieh" [disabled] [ref=e423]:
                  - generic [ref=e424]: Mahlaa Zandieh
                - option "Mohammad Akram" [disabled] [ref=e425]:
                  - generic [ref=e426]: Mohammad Akram
                - option "Mohammad Ashrafian" [disabled] [ref=e427]:
                  - generic [ref=e428]: Mohammad Ashrafian
                - option "mohammad chat" [disabled] [ref=e429]:
                  - generic [ref=e430]: mohammad chat
                - option "Mohammad Pourabedini" [disabled] [ref=e431]:
                  - generic [ref=e432]: Mohammad Pourabedini
                - option "Mohammad test6" [disabled] [ref=e433]:
                  - generic [ref=e434]: Mohammad test6
                - option "Mohmmad physician" [disabled] [ref=e435]:
                  - generic [ref=e436]: Mohmmad physician
                - option "Rizwan1 Haq" [disabled] [ref=e437]:
                  - generic [ref=e438]: Rizwan1 Haq
                - option "sahil A" [disabled] [ref=e439]:
                  - generic [ref=e440]: sahil A
                - option "test testttttt" [disabled] [ref=e441]:
                  - generic [ref=e442]: test testttttt
                - option "Umer Staff Member" [disabled] [ref=e443]:
                  - generic [ref=e444]: Umer Staff Member
            - generic [ref=e445]: Please select a staff member.
          - generic [ref=e446]:
            - generic [ref=e447]:
              - text: Full name
              - generic [ref=e448]: "*"
            - textbox "Full name *" [ref=e449]
            - generic [ref=e450]: Please enter a full name.
          - generic [ref=e451]:
            - generic [ref=e452]: Relation
            - combobox "Relation" [ref=e453]:
              - option "Witness" [selected]
              - option "Other"
        - generic [ref=e454]:
          - button "Cancel" [ref=e455] [cursor=pointer]
          - button "Add Witness" [disabled]
```

# Test source

```ts
  88  | 
  89  |     for (let i = 0; i < monthsToClick; i++) {
  90  |       await this.nextMonthBtn.click();
  91  |       await this.page.waitForTimeout(150);
  92  |     }
  93  | 
  94  |     await this.page
  95  |       .locator(`button[name='day'].rdp-day`)
  96  |       .filter({ hasText: new RegExp(`^${targetDay}$`) })
  97  |       .click();
  98  |   }
  99  | 
  100 |   // ── Set unique episode number, retry once on duplicate error ──
  101 |   async setEpisodeNumber(episodeNumber) {
  102 |     await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
  103 |     await this.episodeNumberInput.dblclick();
  104 |     await this.episodeNumberInput.fill(String(episodeNumber));
  105 |     await this.saveBtn.click();
  106 | 
  107 |     // Retry once if duplicate episode error appears
  108 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  109 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  110 |     if (hasError) {
  111 |       const retryNumber = Date.now().toString().slice(-8);
  112 |       await this.episodeNumberInput.dblclick();
  113 |       await this.episodeNumberInput.fill(retryNumber);
  114 |       await this.saveBtn.click();
  115 |     }
  116 | 
  117 |     // After save, two outcomes:
  118 |     //   Adult patient  → Patient Type combobox appears immediately
  119 |     //   Minor patient  → minor banner appears; guardian must be added first
  120 |     // We wait for either — caller decides what to do next via isMinorPatient()
  121 |     await Promise.race([
  122 |       this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
  123 |       this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
  124 |     ]);
  125 |   }
  126 | 
  127 |   // ── Returns true if the minor guardian banner is currently shown ──
  128 |   async isMinorPatient() {
  129 |     return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  130 |   }
  131 | 
  132 |   // ── Full setup: date + episode + auto-handle minor guardian ──
  133 |   // Use this in tests so they work regardless of patient age.
  134 |   // guardianName is used only when patient is a minor.
  135 |   async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
  136 |     await this.setVisitDate(targetYear, targetMonth, targetDay);
  137 |     await this.setEpisodeNumber(episodeNumber);
  138 | 
  139 |     if (await this.isMinorPatient()) {
  140 |       // Guardian is required before the form can proceed
  141 |       await this.editParentGuardian(guardianName);
  142 |       // Wait for Patient Type to appear now that guardian is satisfied
  143 |       await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
  144 |     }
  145 |   }
  146 | 
  147 |   // ── Select patient type ──────────────────────────────────────
  148 |   // Popover: id="patient-type-popover", options are plain <button> elements
  149 |   async selectPatientType(typeName) {
  150 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  151 |     await this.patientTypeCombo.click();
  152 |     // Wait for popover to open, then click option by exact text
  153 |     await this.page
  154 |       .locator('#patient-type-popover button')
  155 |       .filter({ hasText: new RegExp(`^${typeName}$`) })
  156 |       .click();
  157 |     // After selection, Quick Assign and Visit Type should appear
  158 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  159 |   }
  160 | 
  161 |   // ── Select visit type ────────────────────────────────────────
  162 |   // Popover: id="visit-type-popover", options are plain <button> elements
  163 |   async selectVisitType(typeName) {
  164 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  165 |     await this.visitTypeCombo.click();
  166 |     await this.page
  167 |       .locator('#visit-type-popover button')
  168 |       .filter({ hasText: new RegExp(`^${typeName}$`) })
  169 |       .click();
  170 |     // After both selections, forms get assigned — wait for Quick Assign to confirm
  171 |     await this.quickAssignBtn.waitFor({ state: 'visible', timeout: 15000 });
  172 |   }
  173 | 
  174 |   // ── Quick assign doctor ──────────────────────────────────────
  175 |   async quickAssignDoctor(staffName) {
  176 |     await this.quickAssignBtn.click();
  177 |     await this.addDoctorBtn.click();
  178 |     await this.selectStaffDropdown.click();
  179 |     await this.page.getByRole('option', { name: staffName }).click();
  180 |     await this.dialogAddDoctorBtn.click();
  181 |   }
  182 | 
  183 |   // ── Quick assign witness ─────────────────────────────────────
  184 |   async quickAssignWitness(staffName) {
  185 |     await this.addWitnessBtn.click();
  186 |     await this.selectStaffDropdown.click();
  187 |     await this.page.getByRole('option', { name: staffName }).click();
> 188 |     await this.dialogAddWitnessBtn.click();
      |                                    ^ Error: locator.click: Test timeout of 60000ms exceeded.
  189 |   }
  190 | 
  191 |   // ── Add or edit parent/guardian co-signer ────────────────────
  192 |   // Handles both states: "Add Parent/Guardian" (first time) and
  193 |   // "Edit parent/guardian co-signer" (already assigned)
  194 |   async editParentGuardian(fullName) {
  195 |     const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
  196 |     if (hasEdit) {
  197 |       await this.editParentGuardianBtn.click();
  198 |       await this.parentGuardianFullNameInput.dblclick();
  199 |       await this.parentGuardianFullNameInput.fill(fullName);
  200 |       await this.updateParentGuardianBtn.click();
  201 |     } else {
  202 |       // First time — button says "Add Parent/Guardian"
  203 |       await this.addParentGuardianBtn.click();
  204 |       await this.parentGuardianFullNameInput.fill(fullName);
  205 |       // Confirm button inside dialog also says "Add Parent/Guardian"
  206 |       await this.page.getByRole('dialog').getByRole('button', { name: 'Add Parent/Guardian' }).click();
  207 |     }
  208 |   }
  209 | 
  210 |   // ── Edit interpreter ─────────────────────────────────────────
  211 |   async editInterpreter(fullName, language) {
  212 |     await this.editInterpreterBtn.click();
  213 |     await this.interpreterNameInput.click();
  214 |     await this.interpreterNameInput.fill(fullName);
  215 |     await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  216 |     await this.languageInput.fill(language);
  217 |     await this.updateInterpreterBtn.click();
  218 |   }
  219 | }
  220 | 
  221 | module.exports = { ConsentIntakePage };
```