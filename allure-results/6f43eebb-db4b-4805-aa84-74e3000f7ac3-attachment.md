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
  - waiting for getByRole('button', { name: 'Quick Assign' })
    - locator resolved to <button disabled type="button" class="btn btn-dark">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    92 × waiting for element to be visible, enabled and stable
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
                    - generic [ref=e170]: "Last Updated: 23 Jun 2026, 02:32 AM"
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
                          - text: "63959212"
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
                      - generic [ref=e314]:
                        - generic [ref=e316]: Interpreter / Translator
                        - button "Add Interpreter" [ref=e317] [cursor=pointer]:
                          - img [ref=e318]
                          - text: Add Interpreter
                      - generic [ref=e319]:
                        - img [ref=e320]
                        - generic [ref=e324]: No interpreter assigned
                  - generic [ref=e325]:
                    - img [ref=e326]
                    - generic [ref=e328]: Parent/guardian co-signer "Test Guardian" will co-sign forms marked with guardian requirement.
              - generic [ref=e331]:
                - button "Generate QR Code" [ref=e332] [cursor=pointer]:
                  - img [ref=e333]
                  - text: Generate QR Code
                - button "Copy Secure Link" [ref=e340] [cursor=pointer]:
                  - img [ref=e341]
                  - text: Copy Secure Link
                - button "Send Reminder" [ref=e345] [cursor=pointer]:
                  - img [ref=e346]
                  - text: Send Reminder
      - generic [ref=e349]:
        - generic [ref=e350]:
          - paragraph [ref=e352]: Chat
          - button "delete" [ref=e353] [cursor=pointer]:
            - img [ref=e354]
        - generic [ref=e358]:
          - paragraph [ref=e359] [cursor=pointer]: Metabolic
          - paragraph [ref=e360] [cursor=pointer]: Zone
  - alert [ref=e361]: Metabolic
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { ConsentIntakePage } = require('../../pages/ConsentIntakePage');
  3   | 
  4   | const PATIENT_NAME = 'umer mushtaq';
  5   | 
  6   | // Always a fixed future date — 2 months from today, day 15
  7   | const FUTURE_DATE = (() => {
  8   |   const d = new Date();
  9   |   d.setMonth(d.getMonth() + 2);
  10  |   return { year: d.getFullYear(), month: d.getMonth() + 1, day: 15 };
  11  | })();
  12  | 
  13  | const EPISODE_NUMBER = () => Date.now().toString().slice(-8);
  14  | 
  15  | // ── Shared setup ─────────────────────────────────────────────────────────────
  16  | // Uses the PAGE OBJECT's setupVisit() which handles the minor guardian banner
  17  | // automatically. Do NOT inline setVisitDate + setEpisodeNumber here — that
  18  | // bypasses the minor-patient logic and leaves all form controls disabled.
  19  | async function setupVisit(consentPage) {
  20  |   await consentPage.openPatientConsentTab(PATIENT_NAME);
  21  |   await consentPage.setupVisit(
  22  |     FUTURE_DATE.year,
  23  |     FUTURE_DATE.month,
  24  |     FUTURE_DATE.day,
  25  |     EPISODE_NUMBER()
  26  |     // guardianName defaults to 'Test Guardian' inside setupVisit()
  27  |   );
  28  | }
  29  | 
  30  | test.describe('Consent & Intake', () => {
  31  | 
  32  |   test('navigates to Consent & Intake tab', async ({ page }) => {
  33  |     const consentPage = new ConsentIntakePage(page);
  34  |     await consentPage.openPatientConsentTab(PATIENT_NAME);
  35  |     await expect(consentPage.visitDateBtn).toBeVisible();
  36  |   });
  37  | 
  38  |   test('sets visit date and saves unique episode number', async ({ page }) => {
  39  |     const consentPage = new ConsentIntakePage(page);
  40  |     await consentPage.openPatientConsentTab(PATIENT_NAME);
  41  |     await consentPage.setVisitDate(FUTURE_DATE.year, FUTURE_DATE.month, FUTURE_DATE.day);
  42  |     await consentPage.setEpisodeNumber(EPISODE_NUMBER());
  43  | 
  44  |     // Either Patient Type (adult) or minor banner must appear — both confirm save worked
  45  |     const adultReady = await consentPage.patientTypeCombo.isVisible({ timeout: 5000 }).catch(() => false);
  46  |     const minorBlock = await consentPage.minorBanner.isVisible({ timeout: 5000 }).catch(() => false);
  47  |     expect(adultReady || minorBlock).toBe(true);
  48  |   });
  49  | 
  50  |   test('minor patient: shows guardian banner after episode save', async ({ page }) => {
  51  |     const consentPage = new ConsentIntakePage(page);
  52  |     await consentPage.openPatientConsentTab(PATIENT_NAME);
  53  |     await consentPage.setVisitDate(FUTURE_DATE.year, FUTURE_DATE.month, FUTURE_DATE.day);
  54  |     await consentPage.setEpisodeNumber(EPISODE_NUMBER());
  55  | 
  56  |     if (await consentPage.isMinorPatient()) {
  57  |       await expect(consentPage.minorBanner).toBeVisible();
  58  |     } else {
  59  |       test.skip();
  60  |     }
  61  |   });
  62  | 
  63  |   test('selects patient type', async ({ page }) => {
  64  |     const consentPage = new ConsentIntakePage(page);
  65  |     await setupVisit(consentPage); // ← uses page object's setupVisit; handles minor
  66  |     await consentPage.selectPatientType('Diabetic Female');
  67  |     await expect(consentPage.patientTypeCombo).toBeVisible();
  68  |   });
  69  | 
  70  |   test('selects visit type', async ({ page }) => {
  71  |     const consentPage = new ConsentIntakePage(page);
  72  |     await setupVisit(consentPage);
  73  |     await consentPage.selectVisitType('Baseline');
  74  |     await expect(consentPage.visitTypeCombo).toBeVisible();
  75  |   });
  76  | 
  77  |   test('quick assigns a doctor', async ({ page }) => {
  78  |     const consentPage = new ConsentIntakePage(page);
  79  |     await setupVisit(consentPage);
  80  |     await consentPage.quickAssignDoctor('Umer Mushtaq');
  81  |     await expect(consentPage.quickAssignBtn).toBeVisible();
  82  |   });
  83  | 
  84  |   test('quick assigns a witness', async ({ page }) => {
  85  |     const consentPage = new ConsentIntakePage(page);
  86  |     await setupVisit(consentPage);
  87  |     // quickAssignBtn is already open context — witness adds to the same panel
> 88  |     await consentPage.quickAssignBtn.click();
      |                                      ^ Error: locator.click: Test timeout of 60000ms exceeded.
  89  |     await consentPage.quickAssignWitness('Pradeep Gupta - New Acc');
  90  |     await expect(consentPage.quickAssignBtn).toBeVisible();
  91  |   });
  92  | 
  93  |   test('edits parent/guardian co-signer', async ({ page }) => {
  94  |     const consentPage = new ConsentIntakePage(page);
  95  |     await setupVisit(consentPage);
  96  |     // For a minor, guardian was already added in setupVisit — the button is now
  97  |     // "Edit parent/guardian co-signer". For an adult it's "Add Parent/Guardian".
  98  |     const isMinor = await consentPage.isMinorPatient();
  99  |     if (isMinor) {
  100 |       await consentPage.editParentGuardian(`Guardian ${Date.now()}`);
  101 |       await expect(consentPage.editParentGuardianBtn).toBeVisible();
  102 |     } else {
  103 |       // Adult: button label is "Add Parent/Guardian"
  104 |       const addBtn = page.getByRole('button', { name: 'Add Parent/Guardian' });
  105 |       await expect(addBtn).toBeVisible();
  106 |     }
  107 |   });
  108 | 
  109 |   test('edits interpreter details', async ({ page }) => {
  110 |     const consentPage = new ConsentIntakePage(page);
  111 |     await setupVisit(consentPage);
  112 |     // Button is "Add Interpreter" before first save, "Edit interpreter" after
  113 |     const addInterpreter = page.getByRole('button', { name: 'Add Interpreter' });
  114 |     const editInterpreter = consentPage.editInterpreterBtn;
  115 | 
  116 |     const hasAddBtn = await addInterpreter.isVisible({ timeout: 3000 }).catch(() => false);
  117 |     if (hasAddBtn) {
  118 |       // First time — click Add, fill, save
  119 |       await addInterpreter.click();
  120 |       await page.getByRole('textbox', { name: 'Full Name *' }).fill('Test Interpreter');
  121 |       await page.locator('div').filter({ hasText: /^Language$/ }).click();
  122 |       await page.getByRole('textbox', { name: 'Language' }).fill('Spanish');
  123 |       await page.getByRole('button', { name: 'Add Interpreter' }).last().click();
  124 |     } else {
  125 |       await consentPage.editInterpreter('Test Interpreter', 'Spanish');
  126 |     }
  127 |     await expect(consentPage.copySecureLinkBtn).toBeVisible();
  128 |   });
  129 | 
  130 |   test('copy secure link button is visible', async ({ page }) => {
  131 |     const consentPage = new ConsentIntakePage(page);
  132 |     await setupVisit(consentPage);
  133 |     await expect(consentPage.copySecureLinkBtn).toBeVisible();
  134 |   });
  135 | 
  136 | });
```