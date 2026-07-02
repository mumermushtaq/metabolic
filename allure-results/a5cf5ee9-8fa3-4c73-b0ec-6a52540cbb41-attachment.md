# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> quick assigns a witness
- Location: tests\e2e\consent-intake.spec.js:96:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'M L' })

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
                    - generic [ref=e170]: "Last Updated: 25 Jun 2026, 08:10 PM"
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - generic [ref=e173]: Visit Date
                    - button "Visit Date" [ref=e174] [cursor=pointer]:
                      - generic [ref=e175]:
                        - img [ref=e176]
                        - generic [ref=e178]: 30 Jun 2026
                      - img [ref=e179]
                  - generic [ref=e181]:
                    - generic [ref=e182]: Episode Number *
                    - generic [ref=e183]:
                      - generic [ref=e184]:
                        - textbox "Episode Number *" [ref=e185]:
                          - /placeholder: Enter episode number...
                          - text: "1231231312"
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
                - generic [ref=e240]:
                  - 'img "Form status mix: 0 completed, 0 signed on paper, 0 in progress, 6 not started" [ref=e243]'
                  - paragraph [ref=e245]: 0/6 Items Completed
                - generic [ref=e246]:
                  - generic [ref=e247]: 0 Completed
                  - generic [ref=e249]: 0 Signed on Paper
                  - generic [ref=e251]: 0 In Progress
                  - generic [ref=e253]: 6 Not Started
              - generic [ref=e255]:
                - generic [ref=e256]:
                  - heading "Assigned Items" [level=4] [ref=e257]
                  - generic [ref=e258]:
                    - paragraph [ref=e259]: Staff tasks for this visit
                    - generic [ref=e260]:
                      - checkbox "Mark STOP-BANG OSA scoring complete" [ref=e261]
                      - button "Complete STOP-BANG OSA scoring" [ref=e262] [cursor=pointer]
                - table [ref=e265]:
                  - rowgroup [ref=e266]:
                    - row "Form Name Type Status Score Expiry Guardian Notes Actions" [ref=e267]:
                      - columnheader "Form Name" [ref=e268]
                      - columnheader "Type" [ref=e269]
                      - columnheader "Status" [ref=e270]
                      - columnheader "Score" [ref=e271]
                      - columnheader "Expiry" [ref=e272]
                      - columnheader "Guardian" [ref=e273]
                      - columnheader "Notes" [ref=e274]
                      - columnheader "Actions" [ref=e275]
                  - rowgroup [ref=e276]:
                    - row "GAD-7 Questionnaire Auto-assigned Questionnaire Not Started — — Guardian required for this form Required Guardian 1782399955452 + Add Actions" [ref=e277]:
                      - cell "GAD-7 Questionnaire Auto-assigned" [ref=e278]:
                        - generic [ref=e279]:
                          - img [ref=e280]
                          - generic [ref=e283]:
                            - generic [ref=e284]: GAD-7 Questionnaire
                            - generic [ref=e285]: Auto-assigned
                      - cell "Questionnaire" [ref=e286]:
                        - generic [ref=e287]:
                          - img [ref=e288]
                          - generic [ref=e291]: Questionnaire
                      - cell "Not Started" [ref=e292]:
                        - generic [ref=e293]: Not Started
                      - cell "—" [ref=e294]
                      - cell "—" [ref=e295]
                      - cell "Guardian required for this form Required Guardian 1782399955452" [ref=e296]:
                        - generic [ref=e297]:
                          - generic [ref=e298]:
                            - switch "Guardian required for this form" [checked] [ref=e300] [cursor=pointer]
                            - generic [ref=e301]: Required
                          - generic [ref=e303]: Guardian 1782399955452
                      - cell "+ Add" [ref=e304]:
                        - button "+ Add" [ref=e305] [cursor=pointer]
                      - cell "Actions" [ref=e306]:
                        - button "Actions" [ref=e308] [cursor=pointer]:
                          - img [ref=e309]
                    - row "PAID Questionnaire (PAID-5) Auto-assigned Questionnaire Not Started — — Guardian required for this form Required Guardian 1782399955452 + Add Actions" [ref=e313]:
                      - cell "PAID Questionnaire (PAID-5) Auto-assigned" [ref=e314]:
                        - generic [ref=e315]:
                          - img [ref=e316]
                          - generic [ref=e319]:
                            - generic [ref=e320]: PAID Questionnaire (PAID-5)
                            - generic [ref=e321]: Auto-assigned
                      - cell "Questionnaire" [ref=e322]:
                        - generic [ref=e323]:
                          - img [ref=e324]
                          - generic [ref=e327]: Questionnaire
                      - cell "Not Started" [ref=e328]:
                        - generic [ref=e329]: Not Started
                      - cell "—" [ref=e330]
                      - cell "—" [ref=e331]
                      - cell "Guardian required for this form Required Guardian 1782399955452" [ref=e332]:
                        - generic [ref=e333]:
                          - generic [ref=e334]:
                            - switch "Guardian required for this form" [checked] [ref=e336] [cursor=pointer]
                            - generic [ref=e337]: Required
                          - generic [ref=e339]: Guardian 1782399955452
                      - cell "+ Add" [ref=e340]:
                        - button "+ Add" [ref=e341] [cursor=pointer]
                      - cell "Actions" [ref=e342]:
                        - button "Actions" [ref=e344] [cursor=pointer]:
                          - img [ref=e345]
                    - row "PHQ-9 Questionnaire Auto-assigned Questionnaire Not Started — — Guardian required for this form Required Guardian 1782399955452 + Add Actions" [ref=e349]:
                      - cell "PHQ-9 Questionnaire Auto-assigned" [ref=e350]:
                        - generic [ref=e351]:
                          - img [ref=e352]
                          - generic [ref=e355]:
                            - generic [ref=e356]: PHQ-9 Questionnaire
                            - generic [ref=e357]: Auto-assigned
                      - cell "Questionnaire" [ref=e358]:
                        - generic [ref=e359]:
                          - img [ref=e360]
                          - generic [ref=e363]: Questionnaire
                      - cell "Not Started" [ref=e364]:
                        - generic [ref=e365]: Not Started
                      - cell "—" [ref=e366]
                      - cell "—" [ref=e367]
                      - cell "Guardian required for this form Required Guardian 1782399955452" [ref=e368]:
                        - generic [ref=e369]:
                          - generic [ref=e370]:
                            - switch "Guardian required for this form" [checked] [ref=e372] [cursor=pointer]
                            - generic [ref=e373]: Required
                          - generic [ref=e375]: Guardian 1782399955452
                      - cell "+ Add" [ref=e376]:
                        - button "+ Add" [ref=e377] [cursor=pointer]
                      - cell "Actions" [ref=e378]:
                        - button "Actions" [ref=e380] [cursor=pointer]:
                          - img [ref=e381]
                    - row "Menopause Rating Scale (MRS) Auto-assigned Questionnaire Not Started — — Guardian required for this form Required Guardian 1782399955452 + Add Actions" [ref=e385]:
                      - cell "Menopause Rating Scale (MRS) Auto-assigned" [ref=e386]:
                        - generic [ref=e387]:
                          - img [ref=e388]
                          - generic [ref=e391]:
                            - generic [ref=e392]: Menopause Rating Scale (MRS)
                            - generic [ref=e393]: Auto-assigned
                      - cell "Questionnaire" [ref=e394]:
                        - generic [ref=e395]:
                          - img [ref=e396]
                          - generic [ref=e399]: Questionnaire
                      - cell "Not Started" [ref=e400]:
                        - generic [ref=e401]: Not Started
                      - cell "—" [ref=e402]
                      - cell "—" [ref=e403]
                      - cell "Guardian required for this form Required Guardian 1782399955452" [ref=e404]:
                        - generic [ref=e405]:
                          - generic [ref=e406]:
                            - switch "Guardian required for this form" [checked] [ref=e408] [cursor=pointer]
                            - generic [ref=e409]: Required
                          - generic [ref=e411]: Guardian 1782399955452
                      - cell "+ Add" [ref=e412]:
                        - button "+ Add" [ref=e413] [cursor=pointer]
                      - cell "Actions" [ref=e414]:
                        - button "Actions" [ref=e416] [cursor=pointer]:
                          - img [ref=e417]
                    - row "Stop-BANG Auto-assigned Questionnaire Not Started — — Guardian required for this form Required Guardian 1782399955452 + Add Actions" [ref=e421]:
                      - cell "Stop-BANG Auto-assigned" [ref=e422]:
                        - generic [ref=e423]:
                          - img [ref=e424]
                          - generic [ref=e427]:
                            - generic [ref=e428]: Stop-BANG
                            - generic [ref=e429]: Auto-assigned
                      - cell "Questionnaire" [ref=e430]:
                        - generic [ref=e431]:
                          - img [ref=e432]
                          - generic [ref=e435]: Questionnaire
                      - cell "Not Started" [ref=e436]:
                        - generic [ref=e437]: Not Started
                      - cell "—" [ref=e438]
                      - cell "—" [ref=e439]
                      - cell "Guardian required for this form Required Guardian 1782399955452" [ref=e440]:
                        - generic [ref=e441]:
                          - generic [ref=e442]:
                            - switch "Guardian required for this form" [checked] [ref=e444] [cursor=pointer]
                            - generic [ref=e445]: Required
                          - generic [ref=e447]: Guardian 1782399955452
                      - cell "+ Add" [ref=e448]:
                        - button "+ Add" [ref=e449] [cursor=pointer]
                      - cell "Actions" [ref=e450]:
                        - button "Actions" [ref=e452] [cursor=pointer]:
                          - img [ref=e453]
                    - row "General Consent, Telehealth, GDPR, Marketing Auto-assigned Consent Not Started — — Guardian required for this form Required Guardian 1782399955452 + Add Actions" [ref=e457]:
                      - cell "General Consent, Telehealth, GDPR, Marketing Auto-assigned" [ref=e458]:
                        - generic [ref=e459]:
                          - img [ref=e460]
                          - generic [ref=e463]:
                            - generic [ref=e464]: General Consent, Telehealth, GDPR, Marketing
                            - generic [ref=e465]: Auto-assigned
                      - cell "Consent" [ref=e466]:
                        - generic [ref=e467]:
                          - img [ref=e468]
                          - generic [ref=e471]: Consent
                      - cell "Not Started" [ref=e472]:
                        - generic [ref=e473]: Not Started
                      - cell "—" [ref=e474]
                      - cell "—" [ref=e475]
                      - cell "Guardian required for this form Required Guardian 1782399955452" [ref=e476]:
                        - generic [ref=e477]:
                          - generic [ref=e478]:
                            - switch "Guardian required for this form" [checked] [ref=e480] [cursor=pointer]
                            - generic [ref=e481]: Required
                          - generic [ref=e483]: Guardian 1782399955452
                      - cell "+ Add" [ref=e484]:
                        - button "+ Add" [ref=e485] [cursor=pointer]
                      - cell "Actions" [ref=e486]:
                        - button "Actions" [ref=e488] [cursor=pointer]:
                          - img [ref=e489]
              - generic [ref=e493]:
                - generic [ref=e494]:
                  - heading "Co-signers" [level=4] [ref=e496]
                  - paragraph [ref=e497]: Optionally add doctor, witness, and parent/guardian co-signers for consent forms, and/or an interpreter who will interpret and co-sign on behalf of the patient.
                - generic [ref=e498]:
                  - generic [ref=e499]:
                    - generic [ref=e500]:
                      - generic [ref=e502]:
                        - generic [ref=e503]: Doctor
                        - generic [ref=e504]: Assigned
                      - generic [ref=e506]:
                        - generic [ref=e507]:
                          - img [ref=e509]
                          - generic [ref=e512]:
                            - generic [ref=e513]: Umer Mushtaq
                            - generic [ref=e514]: Doctor
                        - generic [ref=e515]:
                          - button "Edit doctor co-signer" [ref=e516] [cursor=pointer]:
                            - img [ref=e517]
                          - button "Delete doctor co-signer" [ref=e520] [cursor=pointer]:
                            - img [ref=e521]
                    - generic [ref=e524]:
                      - generic [ref=e526]:
                        - generic [ref=e527]: Witness
                        - generic [ref=e528]: Assigned
                      - generic [ref=e530]:
                        - generic [ref=e531]:
                          - img [ref=e533]
                          - generic [ref=e536]:
                            - generic [ref=e537]: Pradeep Gupta - New Acc
                            - generic [ref=e538]: Witness
                        - generic [ref=e539]:
                          - button "Edit witness co-signer" [active] [ref=e540] [cursor=pointer]:
                            - img [ref=e541]
                          - button "Delete witness co-signer" [ref=e544] [cursor=pointer]:
                            - img [ref=e545]
                    - generic [ref=e548]:
                      - generic [ref=e550]:
                        - generic [ref=e551]: Parent/Guardian
                        - generic [ref=e552]: Assigned
                      - generic [ref=e554]:
                        - generic [ref=e555]:
                          - img [ref=e557]
                          - generic [ref=e560]:
                            - generic [ref=e561]: Guardian 1782399955452
                            - generic [ref=e562]: Parent
                        - generic [ref=e563]:
                          - button "Edit parent/guardian co-signer" [ref=e564] [cursor=pointer]:
                            - img [ref=e565]
                          - button "Delete parent/guardian co-signer" [ref=e568] [cursor=pointer]:
                            - img [ref=e569]
                    - generic [ref=e572]:
                      - generic [ref=e574]:
                        - generic [ref=e575]: Interpreter / Translator
                        - generic [ref=e576]: Assigned
                      - generic [ref=e578]:
                        - generic [ref=e579]:
                          - img [ref=e581]
                          - generic [ref=e585]:
                            - generic [ref=e586]: Test Interpreter
                            - generic [ref=e587]: Spanish
                        - generic [ref=e588]:
                          - button "Edit interpreter" [ref=e589] [cursor=pointer]:
                            - img [ref=e590]
                          - button "Delete interpreter" [ref=e593] [cursor=pointer]:
                            - img [ref=e594]
                  - generic [ref=e597]:
                    - img [ref=e598]
                    - generic [ref=e600]: Doctor co-signer "Umer Mushtaq" (Doctor). Witness co-signer "Pradeep Gupta - New Acc" (Witness). Parent/guardian co-signer "Guardian 1782399955452" will co-sign forms marked with guardian requirement. Interpreter "Test Interpreter" (Spanish) will interpret and co-sign.
              - generic [ref=e603]:
                - button "Generate QR Code" [ref=e604] [cursor=pointer]:
                  - img [ref=e605]
                  - text: Generate QR Code
                - button "Copy Secure Link" [ref=e612] [cursor=pointer]:
                  - img [ref=e613]
                  - text: Copy Secure Link
                - button "Send Reminder" [ref=e617] [cursor=pointer]:
                  - img [ref=e618]
                  - text: Send Reminder
      - generic [ref=e621]:
        - generic [ref=e622]:
          - paragraph [ref=e624]: Chat
          - button "delete" [ref=e625] [cursor=pointer]:
            - img [ref=e626]
        - generic [ref=e630]:
          - paragraph [ref=e631] [cursor=pointer]: Metabolic
          - paragraph [ref=e632] [cursor=pointer]: Zone
  - alert [ref=e633]
```

# Test source

```ts
  122 |     // Retry on duplicate error
  123 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  124 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  125 |     if (hasError) {
  126 |       const retryNumber = Date.now().toString().slice(-8);
  127 |       await this.episodeNumberInput.dblclick();
  128 |       await this.episodeNumberInput.fill(retryNumber);
  129 |       await this.saveBtn.click();
  130 |     }
  131 | 
  132 |     // Wait for either: comboboxes appear (adult) or minor banner appears
  133 |     await Promise.race([
  134 |       this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
  135 |       this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
  136 |     ]);
  137 |   }
  138 | 
  139 |   // ── Returns true if minor guardian banner is shown ────────────
  140 |   async isMinorPatient() {
  141 |     return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  142 |   }
  143 | 
  144 |   // ── Select patient type ───────────────────────────────────────
  145 |   async selectPatientType(typeName) {
  146 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  147 |     await this.patientTypeCombo.click();
  148 |     await this.page
  149 |       .getByRole('button', { name: typeName, exact: true })
  150 |       .click();
  151 |   }
  152 | 
  153 |   // ── Select visit type ─────────────────────────────────────────
  154 |   async selectVisitType(typeName) {
  155 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  156 |     await this.visitTypeCombo.click();
  157 |     await this.page
  158 |       .getByRole('button', { name: typeName, exact: true })
  159 |       .click();
  160 |   }
  161 | 
  162 |   // ── Quick assign (auto-assign by patient+visit type) ──────────
  163 |   async quickAssign() {
  164 |     await this.quickAssignBtn.waitFor({ state: 'enabled', timeout: 10000 });
  165 |     await this.quickAssignBtn.click();
  166 |   }
  167 | 
  168 |   // ── Manually assign a form by searching ──────────────────────
  169 |   async assignFormBySearch(formNamePartial) {
  170 |     await this.searchFormsCombo.click();
  171 |     await this.page
  172 |       .getByRole('button', { name: new RegExp(formNamePartial, 'i') })
  173 |       .first()
  174 |       .click();
  175 |     // Assign button label updates to show count e.g. "Assign (1)"
  176 |     await this.page
  177 |       .getByRole('button', { name: /^Assign \(\d+\)$/ })
  178 |       .click();
  179 |   }
  180 | 
  181 |   // ── Add or edit doctor co-signer ─────────────────────────────
  182 |   // Handles both states: "Add Doctor" (first time) and "Edit doctor co-signer" (already assigned)
  183 |   // From Codegen: Add flow needs staff dropdown only (no Full name field in new recording)
  184 |   //               Edit flow: click current staff button → pick new option → Update Doctor
  185 |   async addOrEditDoctor(staffName) {
  186 |     const hasEdit = await this.editDoctorBtn.isVisible({ timeout: 3000 }).catch(() => false);
  187 |     if (hasEdit) {
  188 |       await this.editDoctorBtn.click();
  189 |       const dialog = this.page.getByRole('dialog');
  190 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  191 |       // The staff button shows the CURRENT assigned name — click any staff button in dialog
  192 |       await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
  193 |       await this.page.getByRole('option', { name: staffName }).click();
  194 |       await this.updateDoctorBtn.click();
  195 |     } else {
  196 |       await this.addDoctorBtn.click();
  197 |       const dialog = this.page.getByRole('dialog');
  198 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  199 |       await this.selectStaffDropdown.click();
  200 |       await this.page.getByRole('option', { name: staffName }).click();
  201 |       // Full name field is required — fill it after staff selection
  202 |       const fullNameInput = dialog.getByRole('textbox', { name: 'Full name *' });
  203 |       await fullNameInput.waitFor({ state: 'visible', timeout: 5000 });
  204 |       await fullNameInput.fill(staffName);
  205 |       // Wait for Add Doctor button to become enabled
  206 |       await this.dialogAddDoctorBtn.waitFor({ state: 'visible', timeout: 5000 });
  207 |       await this.dialogAddDoctorBtn.click();
  208 |     }
  209 |   }
  210 | 
  211 |   // ── Add or edit witness co-signer ────────────────────────────
  212 |   // Handles both states: "Add Witness" (first time) and "Edit witness co-signer" (already assigned)
  213 |   async addOrEditWitness(staffName) {
  214 |     const hasEdit = await this.editWitnessBtn.isVisible({ timeout: 3000 }).catch(() => false);
  215 |     if (hasEdit) {
  216 |       await this.editWitnessBtn.click();
  217 |       const dialog = this.page.getByRole('dialog');
  218 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  219 |       // The staff button shows the CURRENT assigned name — click any staff button in dialog
  220 |       // (not the Cancel/Close/Update buttons) to open the dropdown
  221 |       await dialog.locator('button').filter({ hasNotText: /Cancel|Close|Update|Add/ }).first().click();
> 222 |       await this.page.getByRole('option', { name: staffName }).click();
      |                                                                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  223 |       await this.updateWitnessBtn.click();
  224 |     } else {
  225 |       await this.addWitnessBtn.click();
  226 |       await this.selectStaffDropdown.click();
  227 |       await this.page.getByRole('option', { name: staffName }).click();
  228 |       await this.dialogAddWitnessBtn.click();
  229 |     }
  230 |   }
  231 | 
  232 |   // ── Add or edit parent/guardian ───────────────────────────────
  233 |   async editParentGuardian(fullName) {
  234 |     const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
  235 |     if (hasEdit) {
  236 |       await this.editParentGuardianBtn.click();
  237 |       const dialog = this.page.getByRole('dialog');
  238 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  239 |       const nameInput = dialog.locator('input').first();
  240 |       await nameInput.waitFor({ state: 'visible', timeout: 5000 });
  241 |       await nameInput.click({ clickCount: 3 });
  242 |       await nameInput.fill(fullName);
  243 |       await this.updateParentGuardianBtn.click();
  244 |       await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  245 |     } else {
  246 |       await this.addParentGuardianBtn.click();
  247 |       const dialog = this.page.getByRole('dialog');
  248 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  249 |       // Label is "Full Name*" — use placeholder or locator by id
  250 |       await dialog.locator('input').first().fill(fullName);
  251 |       const confirmBtn = dialog.getByRole('button', { name: 'Add Parent/Guardian' });
  252 |       await confirmBtn.waitFor({ state: 'visible', timeout: 5000 });
  253 |       await confirmBtn.click();
  254 |       await dialog.waitFor({ state: 'hidden', timeout: 10000 });
  255 |     }
  256 |   }
  257 | 
  258 |   // ── Add or edit interpreter ───────────────────────────────────
  259 |   async editInterpreter(fullName, language) {
  260 |     const hasEdit = await this.editInterpreterBtn.isVisible({ timeout: 3000 }).catch(() => false);
  261 |     if (hasEdit) {
  262 |       await this.editInterpreterBtn.click();
  263 |       await this.interpreterNameInput.click();
  264 |       await this.interpreterNameInput.fill(fullName);
  265 |       await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  266 |       await this.languageInput.fill(language);
  267 |       await this.updateInterpreterBtn.click();
  268 |     } else {
  269 |       await this.addInterpreterBtn.click();
  270 |       await this.interpreterNameInput.fill(fullName);
  271 |       await this.page.locator('div').filter({ hasText: /^Language$/ }).click();
  272 |       await this.languageInput.fill(language);
  273 |       await this.page.getByRole('dialog').getByRole('button', { name: 'Add Interpreter' }).click();
  274 |     }
  275 |   }
  276 | 
  277 |   // ── Full setup: date + episode + guardian (if minor) + patient/visit type ──
  278 |   async setupVisit(targetYear, targetMonth, targetDay, episodeNumber, guardianName = 'Test Guardian') {
  279 |     await this.setVisitDate(targetYear, targetMonth, targetDay);
  280 |     await this.setEpisodeNumber(episodeNumber);
  281 | 
  282 |     if (await this.isMinorPatient()) {
  283 |       await this.editParentGuardian(guardianName);
  284 |       await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
  285 |     }
  286 | 
  287 |     // Select Patient Type + Visit Type so Quick Assign button becomes enabled
  288 |     await this.selectPatientType('Diabetic Female');
  289 |     await this.selectVisitType('Baseline');
  290 |   }
  291 | }
  292 | 
  293 | module.exports = { ConsentIntakePage };
```