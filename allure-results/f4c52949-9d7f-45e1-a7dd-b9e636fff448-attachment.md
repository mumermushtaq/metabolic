# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\Patient-info.spec.js >> Patient Info — @patient-info >> should save patient info without changes
- Location: tests\e2e\Patient-info.spec.js:51:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for getByText('Edit Info') to be visible

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
          - generic [ref=e89]:
            - generic [ref=e90]:
              - button "Quick Chat" [ref=e91] [cursor=pointer]:
                - img [ref=e92]
              - button "Pinned Patients" [ref=e94] [cursor=pointer]:
                - img [ref=e95]
              - button [ref=e98] [cursor=pointer]:
                - img [ref=e99]
            - generic [ref=e101]:
              - paragraph [ref=e107]:
                - text: Umer Mushtaq
                - generic [ref=e108]: abc123pkt
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - generic [ref=e111]: Phone Number
                  - paragraph [ref=e112]: "+923029676088"
                - generic [ref=e113]:
                  - generic [ref=e114]: Email Address
                  - paragraph [ref=e115]: umer.meta@test.com
                - generic [ref=e116]:
                  - generic [ref=e117]: Date of Birth
                  - paragraph [ref=e118]: 02/04/2025
                - generic [ref=e119]:
                  - generic [ref=e120]: Age
                  - paragraph [ref=e121]: "1"
                - generic [ref=e122]:
                  - generic [ref=e123]: Sex
                  - paragraph [ref=e124]: Male
                - generic [ref=e125]:
                  - generic [ref=e126]: Location
                  - paragraph [ref=e127]: Pakistan
                - generic [ref=e128]:
                  - generic [ref=e129]: Preferred Communication Language
                  - paragraph [ref=e130]: "-"
                - generic [ref=e131]:
                  - generic [ref=e132]: Program
                  - paragraph [ref=e133]: Diabetes
          - generic [ref=e134]:
            - heading "Medical Info" [level=6] [ref=e135]
            - generic [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e138]: Readiness
                - img [ref=e140] [cursor=pointer]
                - paragraph [ref=e142]: N/A
              - generic [ref=e143]:
                - generic [ref=e144]: Content Tag
                - img [ref=e146] [cursor=pointer]
                - paragraph [ref=e148]: N/A
              - generic [ref=e150]: Diagnoses
              - generic [ref=e151]:
                - generic [ref=e152]: Medications
                - paragraph [ref=e154]: AERIUS S
              - generic [ref=e155]:
                - generic [ref=e156]: Primary Team
                - img [ref=e158] [cursor=pointer]
                - list [ref=e160]:
                  - button "avatar" [ref=e163] [cursor=pointer]:
                    - listitem [ref=e164]:
                      - img "avatar" [ref=e165]
        - generic [ref=e167]:
          - heading "Internal Notes" [level=6] [ref=e168]
          - generic [ref=e169]:
            - banner [ref=e170]:
              - generic [ref=e171]:
                - img [ref=e172]
                - textbox "Search" [ref=e174]
              - generic [ref=e175]:
                - button "Open date filter" [ref=e176] [cursor=pointer]:
                  - img [ref=e177]
                - button "Add note" [ref=e179] [cursor=pointer]:
                  - img [ref=e180]
            - heading "No Data Found" [level=5] [ref=e182]
        - generic [ref=e183]:
          - generic [ref=e184]:
            - heading "App Activity" [level=6] [ref=e185]
            - generic [ref=e186]:
              - generic [ref=e187]:
                - generic [ref=e188]:
                  - paragraph [ref=e189]: Sign Up Date
                  - paragraph [ref=e190]: 17/11/2025
                - generic [ref=e191]:
                  - paragraph [ref=e192]: App Version
                  - paragraph [ref=e193]: "--"
                - generic [ref=e194]:
                  - paragraph [ref=e195]: Verification Date
                  - paragraph [ref=e196]: "--"
                - generic [ref=e197]:
                  - paragraph [ref=e198]: Last Active
                  - paragraph [ref=e199]: "--"
              - generic [ref=e200]:
                - generic [ref=e201]:
                  - paragraph [ref=e202]: Last Food Log
                  - paragraph [ref=e203]: "--"
                - generic [ref=e204]:
                  - paragraph [ref=e205]: Last Weight Log
                  - paragraph [ref=e206]: "--"
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - paragraph [ref=e210]: Last Message Received from Patient
                    - paragraph [ref=e211]: "--"
                  - paragraph [ref=e213]: Patient's last message has no replies yet.
                - generic [ref=e215]:
                  - paragraph [ref=e216]: Last Message Sent to Patient
                  - paragraph [ref=e217]: "--"
                - generic [ref=e219]:
                  - generic [ref=e220]:
                    - paragraph [ref=e221]: Last Message Sent to Patient by Me
                    - paragraph [ref=e222]: "--"
                  - button "Chat to Patient" [ref=e224] [cursor=pointer]
          - generic [ref=e225]:
            - heading "Devices and Connections" [level=6] [ref=e226]
            - paragraph [ref=e229]: No connected devices found
      - generic [ref=e230]:
        - generic [ref=e231]:
          - paragraph [ref=e233]: Chat
          - button "delete" [ref=e234] [cursor=pointer]:
            - img [ref=e235]
        - generic [ref=e239]:
          - paragraph [ref=e240] [cursor=pointer]: Metabolic
          - paragraph [ref=e241] [cursor=pointer]: Zone
  - alert [ref=e242]: Metabolic
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
  16  |     this.optionsMenuBtn = page.locator('#dropdown-basic').first();
  17  | 
  18  |     // ── Edit Info ────────────────────────────────────────────────
  19  |     this.editInfoMenuItem   = page.getByText('Edit Info');
  20  |     this.editPatientBtn     = page.getByRole('button', { name: 'Edit Patient' });
  21  | 
  22  |     // ── Verify / Unverify ────────────────────────────────────────
  23  |     this.unverifyMenuItem   = page.getByText('Unverify');
  24  |     this.verifyMenuItem     = page.getByText('Verify');
  25  |     this.confirmYesBtn      = page.getByRole('button', { name: 'Yes' });
  26  | 
  27  |     // ── Pin Patient ──────────────────────────────────────────────
  28  |     // Codegen captured this as a toggle button — same locator,
  29  |     // clicking it again unpins.
  30  |     this.pinnedPatientsBtn  = page.getByRole('button', { name: 'Pinned Patients' });
  31  | 
  32  |     // ── Internal Notes ───────────────────────────────────────────
  33  |     this.addNoteBtn         = page.getByRole('button', { name: 'Add note' });
  34  |     this.noteTextInput      = page.getByRole('textbox', { name: 'Add note text' });
  35  |     this.noteSubmitBtn      = page.getByRole('button', { name: 'Submit' });
  36  |     this.noteCancelBtn      = page.getByRole('button', { name: 'Cancel' });
  37  |   }
  38  | 
  39  |   // ── Navigation (from Patient Listings) ─────────────────────────
  40  | 
  41  | async openPatientByName(name) {
  42  |   // Navigate directly to patient listings first — don't assume
  43  |   // the sidebar is already visible from session/landing page
  44  |   await this.page.goto(`${process.env.BASE_URL}/patient`);
  45  |   await this.page.getByRole('heading', { name: 'Patients', exact: true })
  46  |     .waitFor({ state: 'visible', timeout: 15000 });
  47  | 
  48  |   await this.page.getByRole('textbox', { name: 'Search' }).click();
  49  |   await this.page.getByRole('textbox', { name: 'Search' }).fill(name);
  50  |   await this.page.waitForTimeout(800); // debounce, matches PatientListingsPage pattern
  51  | 
  52  |   // Patient links are formatted as "{name} {id}" — match by name prefix
  53  |   await this.page.getByRole('link', { name: new RegExp(`^${name}`, 'i') }).first().click();
  54  | }
  55  | 
  56  |   // ── Edit Info ────────────────────────────────────────────────
  57  | 
  58  |   async openEditInfo() {
  59  |   await this.optionsMenuBtn.click();
> 60  |   await this.editInfoMenuItem.waitFor({ state: 'visible', timeout: 5000 });   // ← ADD THIS LINE
      |                               ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  61  |   await this.editInfoMenuItem.click();
  62  | }
  63  | 
  64  |   async saveEditWithoutChanges() {
  65  |     await this.openEditInfo();
  66  |     await this.editPatientBtn.click();
  67  |   }
  68  | 
  69  | 
  70  | 
  71  | 
  72  |   
  73  |   // ── Verify / Unverify ────────────────────────────────────────
  74  | 
  75  |   async unverifyPatient() {
  76  |     await this.optionsMenuBtn.click();
  77  |     await this.unverifyMenuItem.click();
  78  |     await this.confirmYesBtn.click();
  79  |   }
  80  | 
  81  |   async verifyPatient() {
  82  |     await this.optionsMenuBtn.click();
  83  |     await this.verifyMenuItem.click();
  84  |     await this.confirmYesBtn.click();
  85  |   }
  86  | 
  87  |   // ── Pin / Unpin ──────────────────────────────────────────────
  88  | 
  89  |   async togglePinPatient() {
  90  |     await this.pinnedPatientsBtn.click();
  91  |   }
  92  | 
  93  |   // ── Internal Notes ───────────────────────────────────────────
  94  | 
  95  |   async addNote(text) {
  96  |     await this.addNoteBtn.click();
  97  |     await this.noteTextInput.click();
  98  |     await this.noteTextInput.fill(text);
  99  |     await this.noteSubmitBtn.click();
  100 |   }
  101 | 
  102 |   async openAndCancelNoteDialog() {
  103 |     await this.addNoteBtn.click();
  104 |     await this.noteCancelBtn.click();
  105 |   }
  106 | }
  107 | 
  108 | module.exports = { PatientInfoPage };
```