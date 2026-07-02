# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\Patient-info.spec.js >> Patient Info — @patient-info >> should pin and then unpin the patient
- Location: tests\e2e\Patient-info.spec.js:111:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Pinned Patients' }) resolved to 2 elements:
    1) <button tabindex="0" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-atndgq">…</button> aka getByRole('button', { name: 'notification Pinned Patients' })
    2) <button tabindex="0" type="button" title="Pinned Patients" class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk">…</button> aka getByRole('button', { name: 'Pinned Patients', description: 'Pinned Patients' })

Call log:
  - waiting for getByRole('button', { name: 'Pinned Patients' })

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
        - button "notification Pinned Patients" [ref=e49] [cursor=pointer]:
          - img "notification" [ref=e51]
          - paragraph [ref=e52]: Pinned Patients
        - generic [ref=e53]:
          - button "notification" [ref=e54] [cursor=pointer]:
            - img "notification" [ref=e55]
          - generic: "0"
        - generic [ref=e56]:
          - img [ref=e58]
          - generic [ref=e63] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e64]
            - generic [ref=e65]: Admin • Diabetologist
    - generic [ref=e66]:
      - list [ref=e69]:
        - link "Patient Info" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/1706
          - listitem [ref=e71]: Patient Info
        - link "Visits" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/visits/1706
          - listitem [ref=e73]: Visits
        - link "Consent & Intake" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1706
          - listitem [ref=e75]: Consent & Intake
        - link "Health Info" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/health-info/1706
          - listitem [ref=e77]: Health Info
        - link "Documents" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1706
          - listitem [ref=e79]: Documents
        - link "BCA Scans" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1706
          - listitem [ref=e81]: BCA Scans
        - link "Glucose Analysis" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1706
          - listitem [ref=e83]: Glucose Analysis
        - link "Add Coupon" [ref=e84] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1706
          - listitem [ref=e85]: Add Coupon
        - link "GLP-1 Protocol" [ref=e86] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1706
          - listitem [ref=e87]: GLP-1 Protocol
      - generic [ref=e90]:
        - generic [ref=e91]:
          - generic [ref=e93]:
            - generic [ref=e94]:
              - button "Quick Chat" [ref=e95] [cursor=pointer]:
                - img [ref=e96]
              - button "Pinned Patients" [active] [ref=e98] [cursor=pointer]:
                - img [ref=e99]
              - button [ref=e102] [cursor=pointer]:
                - img [ref=e103]
            - generic [ref=e105]:
              - paragraph [ref=e111]:
                - text: Umer Mushtaq
                - generic [ref=e112]: abc123pkt
              - generic [ref=e113]:
                - generic [ref=e114]:
                  - generic [ref=e115]: Phone Number
                  - paragraph [ref=e116]: "+923029676088"
                - generic [ref=e117]:
                  - generic [ref=e118]: Email Address
                  - paragraph [ref=e119]: umer.meta@test.com
                - generic [ref=e120]:
                  - generic [ref=e121]: Date of Birth
                  - paragraph [ref=e122]: 02/04/2025
                - generic [ref=e123]:
                  - generic [ref=e124]: Age
                  - paragraph [ref=e125]: "1"
                - generic [ref=e126]:
                  - generic [ref=e127]: Sex
                  - paragraph [ref=e128]: Male
                - generic [ref=e129]:
                  - generic [ref=e130]: Location
                  - paragraph [ref=e131]: Pakistan
                - generic [ref=e132]:
                  - generic [ref=e133]: Preferred Communication Language
                  - paragraph [ref=e134]: "-"
                - generic [ref=e135]:
                  - generic [ref=e136]: Program
                  - paragraph [ref=e137]: Diabetes
          - generic [ref=e138]:
            - heading "Medical Info" [level=6] [ref=e139]
            - generic [ref=e140]:
              - generic [ref=e141]:
                - generic [ref=e142]: Readiness
                - img [ref=e144] [cursor=pointer]
                - paragraph [ref=e146]: N/A
              - generic [ref=e147]:
                - generic [ref=e148]: Content Tag
                - img [ref=e150] [cursor=pointer]
                - paragraph [ref=e152]: N/A
              - generic [ref=e154]: Diagnoses
              - generic [ref=e155]:
                - generic [ref=e156]: Medications
                - paragraph [ref=e158]: AERIUS S
              - generic [ref=e159]:
                - generic [ref=e160]: Primary Team
                - img [ref=e162] [cursor=pointer]
                - list [ref=e164]:
                  - button "avatar" [ref=e167] [cursor=pointer]:
                    - listitem [ref=e168]:
                      - img "avatar" [ref=e169]
        - generic [ref=e171]:
          - heading "Internal Notes" [level=6] [ref=e172]
          - generic [ref=e173]:
            - banner [ref=e174]:
              - generic [ref=e175]:
                - img [ref=e176]
                - textbox "Search" [ref=e178]
              - generic [ref=e179]:
                - button "Open date filter" [ref=e180] [cursor=pointer]:
                  - img [ref=e181]
                - button "Add note" [ref=e183] [cursor=pointer]:
                  - img [ref=e184]
            - heading "No Data Found" [level=5] [ref=e186]
        - generic [ref=e187]:
          - generic [ref=e188]:
            - heading "App Activity" [level=6] [ref=e189]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e192]:
                  - paragraph [ref=e193]: Sign Up Date
                  - paragraph [ref=e194]: 17/11/2025
                - generic [ref=e195]:
                  - paragraph [ref=e196]: App Version
                  - paragraph [ref=e197]: "--"
                - generic [ref=e198]:
                  - paragraph [ref=e199]: Verification Date
                  - paragraph [ref=e200]: 20/06/2026 (an hour ago)
                - generic [ref=e201]:
                  - paragraph [ref=e202]: Last Active
                  - paragraph [ref=e203]: "--"
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - paragraph [ref=e206]: Last Food Log
                  - paragraph [ref=e207]: "--"
                - generic [ref=e208]:
                  - paragraph [ref=e209]: Last Weight Log
                  - paragraph [ref=e210]: "--"
              - generic [ref=e211]:
                - generic [ref=e212]:
                  - generic [ref=e213]:
                    - paragraph [ref=e214]: Last Message Received from Patient
                    - paragraph [ref=e215]: "--"
                  - paragraph [ref=e217]: Patient's last message has no replies yet.
                - generic [ref=e219]:
                  - paragraph [ref=e220]: Last Message Sent to Patient
                  - paragraph [ref=e221]: "--"
                - generic [ref=e223]:
                  - generic [ref=e224]:
                    - paragraph [ref=e225]: Last Message Sent to Patient by Me
                    - paragraph [ref=e226]: "--"
                  - button "Chat to Patient" [ref=e228] [cursor=pointer]
          - generic [ref=e229]:
            - heading "Devices and Connections" [level=6] [ref=e230]
            - paragraph [ref=e233]: No connected devices found
      - generic [ref=e234]:
        - generic [ref=e235]:
          - paragraph [ref=e237]: Chat
          - button "delete" [ref=e238] [cursor=pointer]:
            - img [ref=e239]
        - generic [ref=e243]:
          - paragraph [ref=e244] [cursor=pointer]: Metabolic
          - paragraph [ref=e245] [cursor=pointer]: Zone
  - alert [ref=e246]: Metabolic
```

# Test source

```ts
  1   | // ─────────────────────────────────────────────────────────────
  2   | // pages/PatientInfoPage.js
  3   | // Page Object Model for the Patient Profile — Patient Info tab
  4   | // URL: /patient/profile/:id
  5   | // Locators verified via Playwright Codegen
  6   | // ─────────────────────────────────────────────────────────────
  7   | 
  8   | class PatientInfoPage {
  9   | 
  10  |   constructor(page) {
  11  |     this.page = page;
  12  | 
  13  |     // ── Three-dot options menu (shared trigger for Edit/Verify/Unverify) ──
  14  |     // Codegen shows this as #dropdown-basic — same element reused for
  15  |     // multiple menu actions depending on patient's current state.
  16  |     this.optionsMenuBtn = page.locator('.PatientInfo_personalProfileDetailOptions__RZ83I .dropdown-toggle');
  17  | 
  18  | 
  19  |     // ── Edit Info ────────────────────────────────────────────────
  20  |     this.editInfoMenuItem   = page.getByText('Edit Info');
  21  |     this.editPatientBtn     = page.getByRole('button', { name: 'Edit Patient' });
  22  | 
  23  |     // ── Verify / Unverify ────────────────────────────────────────
  24  |     this.unverifyMenuItem   = page.getByText('Unverify');
  25  |     this.verifyMenuItem     = page.getByText('Verify');
  26  |     this.confirmYesBtn      = page.getByRole('button', { name: 'Yes' });
  27  | 
  28  |     // ── Pin Patient ──────────────────────────────────────────────
  29  |     // Codegen captured this as a toggle button — same locator,
  30  |     // clicking it again unpins.
  31  |     this.pinnedPatientsBtn  = page.getByRole('button', { name: 'Pinned Patients' });
  32  | 
  33  |     // ── Internal Notes ───────────────────────────────────────────
  34  |     this.addNoteBtn         = page.getByRole('button', { name: 'Add note' });
  35  |     this.noteTextInput      = page.getByRole('textbox', { name: 'Add note text' });
  36  |     this.noteSubmitBtn      = page.getByRole('button', { name: 'Submit' });
  37  |     this.noteCancelBtn      = page.getByRole('button', { name: 'Cancel' });
  38  |   }
  39  | 
  40  |   // ── Navigation (from Patient Listings) ─────────────────────────
  41  | 
  42  | async openPatientByName(name) {
  43  |   // Navigate directly to patient listings first — don't assume
  44  |   // the sidebar is already visible from session/landing page
  45  |   await this.page.goto(`${process.env.BASE_URL}/patient`);
  46  |   await this.page.getByRole('heading', { name: 'Patients', exact: true })
  47  |     .waitFor({ state: 'visible', timeout: 15000 });
  48  | 
  49  |   await this.page.getByRole('textbox', { name: 'Search' }).click();
  50  |   await this.page.getByRole('textbox', { name: 'Search' }).fill(name);
  51  |   await this.page.waitForTimeout(800); // debounce, matches PatientListingsPage pattern
  52  | 
  53  |   // Patient links are formatted as "{name} {id}" — match by name prefix
  54  |   await this.page.getByRole('link', { name: new RegExp(`^${name}`, 'i') }).first().click();
  55  | }
  56  | 
  57  |   // ── Edit Info ────────────────────────────────────────────────
  58  | 
  59  |   async openEditInfo() {
  60  |   await this.optionsMenuBtn.click();
  61  |   await this.editInfoMenuItem.waitFor({ state: 'visible', timeout: 5000 });   // ← ADD THIS LINE
  62  |   await this.editInfoMenuItem.click();
  63  | }
  64  | 
  65  |   async saveEditWithoutChanges() {
  66  |     await this.openEditInfo();
  67  |     await this.editPatientBtn.click();
  68  |   }
  69  | 
  70  | 
  71  | 
  72  | 
  73  |   
  74  |   // ── Verify / Unverify ────────────────────────────────────────
  75  | 
  76  |   async unverifyPatient() {
  77  |     await this.optionsMenuBtn.click();
  78  |     await this.unverifyMenuItem.click();
  79  |     await this.confirmYesBtn.click();
  80  |   }
  81  | 
  82  |   async verifyPatient() {
  83  |     await this.optionsMenuBtn.click();
  84  |     await this.verifyMenuItem.click();
  85  |     await this.confirmYesBtn.click();
  86  |   }
  87  | 
  88  |   // ── Pin / Unpin ──────────────────────────────────────────────
  89  | 
  90  |   async togglePinPatient() {
> 91  |     await this.pinnedPatientsBtn.click();
      |                                  ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Pinned Patients' }) resolved to 2 elements:
  92  |   }
  93  | 
  94  |   // ── Internal Notes ───────────────────────────────────────────
  95  | 
  96  |   async addNote(text) {
  97  |     await this.addNoteBtn.click();
  98  |     await this.noteTextInput.click();
  99  |     await this.noteTextInput.fill(text);
  100 |     await this.noteSubmitBtn.click();
  101 |   }
  102 | 
  103 |   async openAndCancelNoteDialog() {
  104 |     await this.addNoteBtn.click();
  105 |     await this.noteCancelBtn.click();
  106 |   }
  107 | }
  108 | 
  109 | module.exports = { PatientInfoPage };
```