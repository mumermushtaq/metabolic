# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\documents.spec.js >> Documents >> opens the uploaded document and returns to list
- Location: tests\e2e\documents.spec.js:31:3

# Error details

```
Error: Document matching "file-sample_150kB" not found
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
        - img [ref=e45]
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
      - generic [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e86]:
            - img [ref=e88]
            - textbox "Search" [ref=e90]
          - button [ref=e91] [cursor=pointer]:
            - img [ref=e94]
          - button "Upload Report" [ref=e96] [cursor=pointer]:
            - generic [ref=e97]:
              - img [ref=e99]
              - text: Upload Report
        - generic [ref=e101]:
          - generic [ref=e102]: 25 Jun 2026
          - generic [ref=e105] [cursor=pointer]:
            - generic [ref=e106]:
              - img [ref=e108]
              - generic [ref=e111]:
                - heading "1782402669_file.pdf" [level=5] [ref=e112]
                - paragraph [ref=e113]: "Data taken: 25 Jun 2026"
            - img [ref=e115]
      - generic [ref=e117]:
        - generic [ref=e118]:
          - paragraph [ref=e120]: Chat
          - button "delete" [ref=e121] [cursor=pointer]:
            - img [ref=e122]
        - generic [ref=e126]:
          - paragraph [ref=e127] [cursor=pointer]: Metabolic
          - paragraph [ref=e128] [cursor=pointer]: Zone
  - alert [ref=e129]
```

# Test source

```ts
  7   |     this.documentsTab    = page.getByRole('link', { name: 'Documents' });
  8   |     this.backToListBtn   = page.getByRole('button', { name: 'Back to list' });
  9   |     this.uploadReportBtn = page.getByRole('button', { name: 'Upload Report' });
  10  | 
  11  |     // ── Search ────────────────────────────────────────────────────
  12  |     this.searchInput = page.getByRole('textbox', { name: 'Search' });
  13  | 
  14  |     // ── Upload form ───────────────────────────────────────────────
  15  |     this.dateTakenInput   = page.getByRole('textbox', { name: 'dd/mm/yyyy' });
  16  |     this.noteInput        = page.getByRole('textbox', { name: 'Note (Optional)' });
  17  |     this.fileDropZone     = page.getByLabel('Drop Lab test to attach or');
  18  |     this.uploadConfirmBtn = page.getByRole('button', { name: 'Upload', exact: true });
  19  | 
  20  |     // ── Delete confirmation ───────────────────────────────────────
  21  |     this.deleteConfirmBtn = page.getByRole('button', { name: 'Yes' });
  22  |   }
  23  | 
  24  |   // ── Navigate directly to Documents tab by patient ID ─────────
  25  |   async openDocumentsTab(patientId) {
  26  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/medical-reports/${patientId}`);
  27  |     await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 15000 });
  28  |     // Wait for loading spinner to disappear before interacting
  29  |     await this.page.locator('status, [role="status"]').waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
  30  |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  31  |   }
  32  | 
  33  |   // ── Returns true if the document list has any documents ────────
  34  |   async hasDocuments() {
  35  |     const noData = this.page.locator('h5:has-text("No Data Found"), [class*="noData"], [class*="NoData"]');
  36  |     const isEmpty = await noData.isVisible({ timeout: 3000 }).catch(() => false);
  37  |     return !isEmpty;
  38  |   }
  39  | 
  40  |   // ── Open the first document card ────────────────────────────────
  41  |   async openFirstDocument() {
  42  |     await this.page
  43  |       .locator('.MedicalReports_medicalCardsSingle__EkjVe')
  44  |       .first()
  45  |       .click();
  46  |     await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  47  |   }
  48  | 
  49  |   // ── Open a document by partial filename match ─────────────────
  50  |   // Tries each nth value since different cards use different nth indices
  51  |   async openDocumentByName(fileNamePartial) {
  52  |     const re = new RegExp(fileNamePartial, 'i');
  53  |     // Try nth(1) and nth(2) — Codegen showed both used across different documents
  54  |     for (const n of [1, 2, 0]) {
  55  |       const card = this.page.locator('div').filter({ hasText: re }).nth(n);
  56  |       const visible = await card.isVisible({ timeout: 2000 }).catch(() => false);
  57  |       if (visible) {
  58  |         await card.click();
  59  |         await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  60  |         return;
  61  |       }
  62  |     }
  63  |     throw new Error(`Document matching "${fileNamePartial}" not found`);
  64  |   }
  65  | 
  66  |   // ── Open all documents one by one and return to list each time ──
  67  |   async openAllDocuments() {
  68  |     // Get all document card text content to identify them
  69  |     const deleteIcons = this.page.locator('.MedicalReports_medicalReportDelete__eLbzu');
  70  |     await deleteIcons.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  71  |     const count = await deleteIcons.count();
  72  |     let opened = 0;
  73  |     for (let i = 0; i < count; i++) {
  74  |       // Each iteration: get the ith card's clickable area (sibling of delete icon)
  75  |       // Navigate up to the card wrapper and click it
  76  |       const card = this.page
  77  |         .locator('[class*="medicalCardsSingle"], [class*="MedicalCardsSingle"]')
  78  |         .nth(i);
  79  |       const visible = await card.isVisible({ timeout: 3000 }).catch(() => false);
  80  |       if (visible) {
  81  |         await card.click();
  82  |         await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  83  |         await this.goBackToList();
  84  |         opened++;
  85  |       }
  86  |     }
  87  |     return opened;
  88  |   }
  89  | 
  90  |   // ── Open a specific document by filename and return to list ───
  91  |   async openUploadedDocument(fileNamePartial) {
  92  |     // Wait for list to load
  93  |     await this.page.locator('.MedicalReports_medicalReportDelete__eLbzu').first()
  94  |       .waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  95  | 
  96  |     const re = new RegExp(fileNamePartial, 'i');
  97  |     // Try nth values 1 and 2 — Codegen confirmed both are used
  98  |     for (const n of [1, 2, 0, 3]) {
  99  |       const card = this.page.locator('div').filter({ hasText: re }).nth(n);
  100 |       const visible = await card.isVisible({ timeout: 2000 }).catch(() => false);
  101 |       if (visible) {
  102 |         await card.click();
  103 |         await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  104 |         return;
  105 |       }
  106 |     }
> 107 |     throw new Error(`Document matching "${fileNamePartial}" not found`);
      |           ^ Error: Document matching "file-sample_150kB" not found
  108 |   }
  109 | 
  110 |   // ── Delete a specific document by filename ────────────────────
  111 |   async deleteDocumentByName(fileNamePartial) {
  112 |     // Wait for list to load
  113 |     await this.page.locator('.MedicalReports_medicalReportDelete__eLbzu').first()
  114 |       .waitFor({ state: 'visible', timeout: 10000 });
  115 | 
  116 |     // Find the card containing this filename, then get its delete icon
  117 |     const re = new RegExp(fileNamePartial, 'i');
  118 |     const card = this.page
  119 |       .locator('[class*="medicalCardsWrap"], [class*="MedicalCardsWrap"]')
  120 |       .filter({ hasText: re })
  121 |       .first();
  122 | 
  123 |     // Fallback: use the nth(3) CSS path from Codegen
  124 |     const hasCard = await card.isVisible({ timeout: 3000 }).catch(() => false);
  125 |     if (hasCard) {
  126 |       await card.locator('[class*="medicalReportDelete"] svg, .MedicalReports_medicalReportDelete__eLbzu svg').click();
  127 |     } else {
  128 |       // Codegen fallback — nth-child(3) delete icon
  129 |       await this.page
  130 |         .locator('div:nth-child(3) > [class*="medicalCardsWrap"] > [class*="medicalCardsSingle"] > [class*="theme_border"] > [class*="medicalReportDelete"] > svg')
  131 |         .click();
  132 |     }
  133 | 
  134 |     await this.deleteConfirmBtn.waitFor({ state: 'visible', timeout: 5000 });
  135 |     await this.deleteConfirmBtn.click();
  136 |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  137 |   }
  138 | 
  139 |   // ── Go back to document list ──────────────────────────────────
  140 |   async goBackToList() {
  141 |     await this.backToListBtn.click();
  142 |     await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 10000 });
  143 |   }
  144 | 
  145 |   // ── Upload a report ───────────────────────────────────────────
  146 |   // filePath: absolute path to the file
  147 |   // dateTaken: gridcell aria-label partial, e.g. 'Choose Thursday, June 25th,'
  148 |   //            pass null to skip date selection
  149 |   // note: optional string
  150 |   async uploadReport(filePath, dateTakenLabel = null, note = '') {
  151 |     await this.uploadReportBtn.click();
  152 |     await this.dateTakenInput.waitFor({ state: 'visible', timeout: 10000 });
  153 | 
  154 |     // Select date from calendar
  155 |     await this.dateTakenInput.click();
  156 |     if (dateTakenLabel) {
  157 |       await this.page
  158 |         .getByRole('gridcell', { name: new RegExp(dateTakenLabel, 'i') })
  159 |         .click();
  160 |     } else {
  161 |       // Click the first available (non-disabled) date cell
  162 |       await this.page
  163 |         .getByRole('gridcell')
  164 |         .filter({ hasNotText: /^\s*$/ })
  165 |         .first()
  166 |         .click();
  167 |     }
  168 | 
  169 |     // Fill optional note
  170 |     if (note) {
  171 |       await this.noteInput.click();
  172 |       await this.noteInput.fill(note);
  173 |     }
  174 | 
  175 |     // Attach file — click the drop zone button first, then set file
  176 |     await this.page
  177 |       .getByRole('button', { name: /CardPickImg Drop Lab test to/i })
  178 |       .first()
  179 |       .click();
  180 |     await this.fileDropZone.setInputFiles(filePath);
  181 | 
  182 |     // Confirm upload
  183 |     await this.uploadConfirmBtn.click();
  184 |     await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 20000 });
  185 |   }
  186 | 
  187 |   // ── Search documents ──────────────────────────────────────────
  188 |   async searchDocuments(query) {
  189 |     await this.searchInput.click();
  190 |     await this.searchInput.fill(query);
  191 |     await this.searchInput.press('Enter');
  192 |     // Small wait for results to filter
  193 |     await this.page.waitForTimeout(500);
  194 |   }
  195 | 
  196 |   // ── Clear search ──────────────────────────────────────────────
  197 |   async clearSearch() {
  198 |     await this.searchInput.dblclick();
  199 |     await this.searchInput.fill('');
  200 |     await this.searchInput.press('Enter');
  201 |     await this.page.waitForTimeout(500);
  202 |   }
  203 | 
  204 |   // ── Delete the nth document (0-based index) ──────────────────
  205 |   async deleteDocument(index = 0) {
  206 |     const deleteIcons = this.page.locator('.MedicalReports_medicalReportDelete__eLbzu > svg');
  207 |     const count = await deleteIcons.count();
```