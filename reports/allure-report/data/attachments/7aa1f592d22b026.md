# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\add-patient.spec.js >> Add Patient — @add-patient >> should add a new patient with all required fields and appear in listings
- Location: tests\e2e\add-patient.spec.js:107:3

# Error details

```
TimeoutError: page.waitForResponse: Timeout 10000ms exceeded while waiting for event "response"
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
        - generic [ref=e44]: (1)
      - generic [ref=e46]:
        - generic [ref=e47]:
          - button "notification" [ref=e48] [cursor=pointer]:
            - img "notification" [ref=e49]
          - generic: "0"
        - generic [ref=e50]:
          - img [ref=e52]
          - generic [ref=e57] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e58]
            - generic [ref=e59]: Admin • Diabetologist
    - generic [ref=e60]:
      - generic [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: Search
              - textbox "Search" [active] [ref=e67]: AT071809
            - button "Filter" [ref=e69] [cursor=pointer]:
              - generic [ref=e70]:
                - img [ref=e72]
                - text: Filter
            - button "Clear Filter" [ref=e74] [cursor=pointer]:
              - generic [ref=e75]:
                - img [ref=e77]
                - text: Clear Filter
          - generic [ref=e79]:
            - button [ref=e81] [cursor=pointer]:
              - img [ref=e83]
            - button "Add Patient" [ref=e86] [cursor=pointer]:
              - generic [ref=e87]:
                - img [ref=e89]
                - text: Add Patient
            - button "Add Patient (MRN)" [ref=e92] [cursor=pointer]:
              - generic [ref=e93]:
                - img [ref=e95]
                - text: Add Patient (MRN)
        - generic [ref=e97]:
          - generic [ref=e98]: "Saved Filters:"
          - generic [ref=e99]:
            - generic [ref=e101]:
              - generic [ref=e102] [cursor=pointer]: Male | English | Weight Loss
              - button [ref=e104] [cursor=pointer]:
                - img [ref=e106]
            - generic [ref=e109]:
              - generic [ref=e110] [cursor=pointer]: Age 20-24
              - button [ref=e112] [cursor=pointer]:
                - img [ref=e114]
            - generic [ref=e117]:
              - generic [ref=e118] [cursor=pointer]: Verified Users | BCA Scan from July
              - button [ref=e120] [cursor=pointer]:
                - img [ref=e122]
            - generic [ref=e125]:
              - generic [ref=e126] [cursor=pointer]: Primary Staff | Male
              - button [ref=e128] [cursor=pointer]:
                - img [ref=e130]
            - generic [ref=e133]:
              - generic [ref=e134] [cursor=pointer]: test waleed updated
              - button [ref=e136] [cursor=pointer]:
                - img [ref=e138]
            - generic [ref=e141]:
              - generic [ref=e142] [cursor=pointer]: new moiz test
              - button [ref=e144] [cursor=pointer]:
                - img [ref=e146]
            - generic [ref=e149]:
              - generic [ref=e150] [cursor=pointer]: Umer's Test filter
              - button [ref=e152] [cursor=pointer]:
                - img [ref=e154]
            - generic [ref=e157]:
              - generic [ref=e158] [cursor=pointer]: Test - Diagnoses - Hassam
              - button [ref=e160] [cursor=pointer]:
                - img [ref=e162]
            - generic [ref=e165]:
              - generic [ref=e166] [cursor=pointer]: Male Filter
              - button [ref=e168] [cursor=pointer]:
                - img [ref=e170]
      - table [ref=e178]:
        - rowgroup [ref=e179]:
          - row "Patient ▲ Diagnosis ▲ TIR ▲ Food Log ▲ Weight ▲ Active Chats ▲ Status ▲ Verification Date ▲ Patient Program ▲" [ref=e180]:
            - columnheader "Patient ▲" [ref=e183] [cursor=pointer]:
              - generic [ref=e184]: Patient
              - generic [ref=e185]: ▲
            - columnheader "Diagnosis ▲" [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: Diagnosis
              - generic [ref=e189]: ▲
            - columnheader "TIR ▲" [ref=e191] [cursor=pointer]:
              - generic [ref=e192]: TIR
              - generic [ref=e193]: ▲
            - columnheader "Food Log ▲" [ref=e195] [cursor=pointer]:
              - generic [ref=e196]: Food Log
              - generic [ref=e197]: ▲
            - columnheader "Weight ▲" [ref=e199] [cursor=pointer]:
              - generic [ref=e200]: Weight
              - generic [ref=e201]: ▲
            - columnheader "Active Chats ▲" [ref=e203] [cursor=pointer]:
              - generic [ref=e204]: Active Chats
              - generic [ref=e205]: ▲
            - columnheader "Status ▲" [ref=e207] [cursor=pointer]:
              - generic [ref=e208]: Status
              - generic [ref=e209]: ▲
            - columnheader "Verification Date ▲" [ref=e211] [cursor=pointer]:
              - generic [ref=e212]: Verification Date
              - generic [ref=e213]: ▲
            - columnheader "Patient Program ▲" [ref=e215] [cursor=pointer]:
              - generic [ref=e216]: Patient Program
              - generic [ref=e217]: ▲
        - rowgroup [ref=e219]:
          - row "Expand Row avatar Auto AT071809 AT071809 NaN% 0 - No INVITED - Diabetes" [ref=e220]:
            - button "Expand Row" [ref=e222] [cursor=pointer]:
              - img [ref=e223]
            - cell "avatar Auto AT071809 AT071809" [ref=e226]:
              - generic [ref=e227] [cursor=pointer]:
                - img "avatar" [ref=e232]
                - link "Auto AT071809 AT071809" [ref=e233]:
                  - /url: /patient/profile/10480
                  - generic [ref=e235]:
                    - paragraph [ref=e237]: Auto AT071809
                    - generic [ref=e238]: AT071809
            - cell [ref=e239]
            - cell "NaN%" [ref=e240]:
              - generic [ref=e241]: NaN%
            - cell "0" [ref=e242]:
              - generic [ref=e243]: "0"
            - cell "-" [ref=e244]
            - cell "No" [ref=e245]
            - cell "INVITED" [ref=e246]:
              - generic [ref=e247]:
                - img [ref=e249]
                - text: INVITED
            - cell "-" [ref=e251]:
              - generic [ref=e252]: "-"
            - cell "Diabetes" [ref=e253]:
              - generic [ref=e254]: Diabetes
            - cell [ref=e255]:
              - button [ref=e258] [cursor=pointer]:
                - img [ref=e259]
      - generic [ref=e261]:
        - generic [ref=e262]:
          - paragraph [ref=e264]: Chat
          - button "delete" [ref=e265] [cursor=pointer]:
            - img [ref=e266]
        - generic [ref=e270]:
          - paragraph [ref=e271] [cursor=pointer]: Metabolic
          - paragraph [ref=e272] [cursor=pointer]: Zone
  - alert [ref=e273]
```

# Test source

```ts
  1   | // ─────────────────────────────────────────────────────────────
  2   | // pages/PatientListingsPage.js
  3   | // Page Object Model for the Patient Listings screen
  4   | // URL: /patient
  5   | // ─────────────────────────────────────────────────────────────
  6   | 
  7   | class PatientListingsPage {
  8   | 
  9   |   constructor(page) {
  10  |     this.page = page;
  11  | 
  12  |     // ── Page header ──────────────────────────────────────────
  13  |     this.pageTitle        = page.getByRole('heading', { name: /patients/i });
  14  |     this.patientCount     = page.locator('h1, h2').filter({ hasText: /patients \(\d+\)/i });
  15  | 
  16  |     // ── Search ───────────────────────────────────────────────
  17  |     this.searchInput      = page.getByRole('textbox', { name: 'Search' });
  18  |     this.clearFilterBtn   = page.getByRole('button', { name: /clear filter/i });
  19  | 
  20  |     // ── Filter ───────────────────────────────────────────────
  21  |     this.filterBtn        = page.getByRole('button', { name: 'Filter', exact: true });
  22  | 
  23  |     // ── Filter Modal ─────────────────────────────────────────
  24  |     this.filterModal          = page.getByRole('dialog');
  25  |     this.diagnosisInput       = page.getByRole('combobox').filter({ hasText: /type at least/i });
  26  |     this.genderDropdown       = page.locator('label').filter({ hasText: /gender/i }).locator('..').getByRole('combobox');
  27  |     this.languageDropdown     = page.locator('label').filter({ hasText: /language/i }).locator('..').getByRole('combobox');
  28  |     this.primaryStaffDropdown = page.locator('label').filter({ hasText: /primary staff/i }).locator('..').getByRole('combobox');
  29  |     this.programDropdown      = page.locator('label').filter({ hasText: /program/i }).locator('..').getByRole('combobox');
  30  |     this.ageFromInput         = page.getByPlaceholder('From');
  31  |     this.ageToInput           = page.getByPlaceholder('To');
  32  |     this.statusDropdown       = page.locator('label').filter({ hasText: /status/i }).locator('..').getByRole('combobox');
  33  |     this.applyFiltersBtn      = page.getByRole('button', { name: /apply filters/i });
  34  |     this.saveFilterSetBtn     = page.getByRole('button', { name: /save filter set/i });
  35  |     this.cancelFilterBtn      = page.getByRole('button', { name: /cancel/i });
  36  |     this.closeFilterBtn       = page.getByRole('button', { name: /close/i });
  37  | 
  38  |     // ── Saved Filters ─────────────────────────────────────────
  39  |     this.savedFiltersRow  = page.getByText('Saved Filters:');
  40  |     this.savedFilterChips = page.locator('button, span').filter({ hasText: /male|female|age|verified|primary/i });
  41  | 
  42  |     // ── Table ─────────────────────────────────────────────────
  43  |     this.tableRows        = page.locator('table tbody tr, [data-testid="patient-row"]');
  44  |     this.patientNameCells = page.locator('td').filter({ hasText: /\w+/ }).first();
  45  | 
  46  |     // ── Add Patient buttons ───────────────────────────────────
  47  |     this.addPatientBtn    = page.getByRole('button', { name: 'Add Patient', exact: true });
  48  |     this.addPatientMRNBtn = page.getByRole('button', { name: 'Add Patient (MRN)', exact: true });
  49  | 
  50  |     // ── Status badges ─────────────────────────────────────────
  51  |     this.statusVerified   = page.getByText('VERIFIED');
  52  |     this.statusInvited    = page.getByText('INVITED');
  53  |     this.statusPending    = page.getByText('PENDING');
  54  |     this.statusActivated  = page.getByText('ACTIVATED');
  55  |   }
  56  | 
  57  |   // ── Navigation ──────────────────────────────────────────────
  58  | 
  59  |   async goto() {
  60  |     await this.page.goto(`${process.env.BASE_URL}/patient`);
  61  |     // networkidle never fires — chat widget holds open connections
  62  |     await this.page.getByRole('table').waitFor({ state: 'visible', timeout: 15000 });
  63  |   }
  64  | 
  65  |   // ── Search ──────────────────────────────────────────────────
  66  | 
  67  |   async searchPatient(name) {
  68  |     await Promise.all([
> 69  |       this.page.waitForResponse(
      |                 ^ TimeoutError: page.waitForResponse: Timeout 10000ms exceeded while waiting for event "response"
  70  |         resp => resp.url().includes('/patient') && resp.status() === 200,
  71  |         { timeout: 10000 }
  72  |       ),
  73  |       this.searchInput.fill(name),
  74  |     ]);
  75  |   }
  76  | 
  77  |   async clearSearch() {
  78  |     await Promise.all([
  79  |       this.page.waitForResponse(
  80  |         resp => resp.url().includes('/patient') && resp.status() === 200,
  81  |         { timeout: 10000 }
  82  |       ),
  83  |       this.searchInput.clear(),
  84  |     ]);
  85  |   }
  86  | 
  87  |   async getPatientCount() {
  88  |     const text = await this.patientCount.textContent();
  89  |     const match = text.match(/\((\d+)\)/);
  90  |     return match ? parseInt(match[1]) : 0;
  91  |   }
  92  | 
  93  |   // ── Filter Modal ────────────────────────────────────────────
  94  | 
  95  |   async openFilterModal() {
  96  |     await this.filterBtn.click();
  97  |     await this.filterModal.waitFor({ state: 'visible' });
  98  |   }
  99  | 
  100 |   async closeFilterModal() {
  101 |     await this.cancelFilterBtn.click();
  102 |     await this.filterModal.waitFor({ state: 'hidden' });
  103 |   }
  104 | 
  105 |   async applyFilter({ gender, language, status, ageFrom, ageTo } = {}) {
  106 |     await this.openFilterModal();
  107 |     if (gender)   await this.genderDropdown.selectOption(gender);
  108 |     if (language) await this.languageDropdown.selectOption(language);
  109 |     if (status)   await this.statusDropdown.selectOption(status);
  110 |     if (ageFrom)  await this.ageFromInput.fill(String(ageFrom));
  111 |     if (ageTo)    await this.ageToInput.fill(String(ageTo));
  112 |     await Promise.all([
  113 |       this.page.waitForResponse(
  114 |         resp => resp.url().includes('/patient') && resp.status() === 200,
  115 |         { timeout: 10000 }
  116 |       ),
  117 |       this.applyFiltersBtn.click(),
  118 |     ]);
  119 |   }
  120 | 
  121 |   async clearAllFilters() {
  122 |     if (await this.clearFilterBtn.isVisible()) {
  123 |       await Promise.all([
  124 |         this.page.waitForResponse(
  125 |           resp => resp.url().includes('/patient') && resp.status() === 200,
  126 |           { timeout: 10000 }
  127 |         ),
  128 |         this.clearFilterBtn.click(),
  129 |       ]);
  130 |     }
  131 |   }
  132 | 
  133 |   // ── Saved Filters ────────────────────────────────────────────
  134 | 
  135 |   async clickSavedFilter(filterName) {
  136 |     await Promise.all([
  137 |       this.page.waitForResponse(
  138 |         resp => resp.url().includes('/patient') && resp.status() === 200,
  139 |         { timeout: 10000 }
  140 |       ),
  141 |       this.page.getByText(filterName, { exact: false }).first().click(),
  142 |     ]);
  143 |   }
  144 | 
  145 |   // ── Table interactions ───────────────────────────────────────
  146 | 
  147 |   async expandPatientRow(index = 0) {
  148 |     const rows = this.page.locator('tr').filter({ has: this.page.locator('td') });
  149 |     await rows.nth(index).locator('[aria-label="expand"], svg, button').first().click();
  150 |   }
  151 | 
  152 |   async openPatient(patientName) {
  153 |     await this.page.getByText(patientName).first().click();
  154 |     await this.page.waitForLoadState('domcontentloaded');
  155 |   }
  156 | 
  157 |   async getFirstPatientName() {
  158 |     return this.page.locator('td').first().textContent();
  159 |   }
  160 | 
  161 |   // ── Add Patient ──────────────────────────────────────────────
  162 | 
  163 |   async clickAddPatient() {
  164 |     await this.addPatientBtn.click();
  165 |   }
  166 | 
  167 |   async clickAddPatientMRN() {
  168 |     await this.addPatientMRNBtn.click();
  169 |   }
```