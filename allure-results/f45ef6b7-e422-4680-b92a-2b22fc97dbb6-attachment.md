# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\documents.spec.js >> Documents >> opens a document and returns to list
- Location: tests\e2e\documents.spec.js:17:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: /1773930002_file-sample_150kB/i }).nth(2) to be visible

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
        - heading "No Data Found" [level=5] [ref=e101]
      - generic [ref=e102]:
        - generic [ref=e103]:
          - paragraph [ref=e105]: Chat
          - button "delete" [ref=e106] [cursor=pointer]:
            - img [ref=e107]
        - generic [ref=e111]:
          - paragraph [ref=e112] [cursor=pointer]: Metabolic
          - paragraph [ref=e113] [cursor=pointer]: Zone
  - alert [ref=e114]
```

# Test source

```ts
  1   | class DocumentsPage {
  2   | 
  3   |   constructor(page) {
  4   |     this.page = page;
  5   | 
  6   |     // ── Navigation ──────────────────────────────────────────────
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
  28  |   }
  29  | 
  30  |   // ── Open a document by partial filename match ─────────────────
  31  |   // Uses Codegen-confirmed nth(2) for the card structure
  32  |   async openDocumentByName(fileNamePartial) {
  33  |     const docCard = this.page
  34  |       .locator('div')
  35  |       .filter({ hasText: new RegExp(fileNamePartial, 'i') })
  36  |       .nth(2);
  37  | 
> 38  |     await docCard.waitFor({ state: 'visible', timeout: 10000 });
      |                   ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  39  |     await docCard.click();
  40  |     await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  41  |   }
  42  | 
  43  |   // ── Go back to document list ──────────────────────────────────
  44  |   async goBackToList() {
  45  |     await this.backToListBtn.click();
  46  |     await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 10000 });
  47  |   }
  48  | 
  49  |   // ── Upload a report ───────────────────────────────────────────
  50  |   // filePath: absolute path to the file
  51  |   // dateTaken: gridcell aria-label partial, e.g. 'Choose Thursday, June 25th,'
  52  |   //            pass null to skip date selection
  53  |   // note: optional string
  54  |   async uploadReport(filePath, dateTakenLabel = null, note = '') {
  55  |     await this.uploadReportBtn.click();
  56  |     await this.dateTakenInput.waitFor({ state: 'visible', timeout: 10000 });
  57  | 
  58  |     // Select date from calendar
  59  |     await this.dateTakenInput.click();
  60  |     if (dateTakenLabel) {
  61  |       await this.page
  62  |         .getByRole('gridcell', { name: new RegExp(dateTakenLabel, 'i') })
  63  |         .click();
  64  |     } else {
  65  |       // Click the first available (non-disabled) date cell
  66  |       await this.page
  67  |         .getByRole('gridcell')
  68  |         .filter({ hasNotText: /^\s*$/ })
  69  |         .first()
  70  |         .click();
  71  |     }
  72  | 
  73  |     // Fill optional note
  74  |     if (note) {
  75  |       await this.noteInput.click();
  76  |       await this.noteInput.fill(note);
  77  |     }
  78  | 
  79  |     // Attach file — click the drop zone button first, then set file
  80  |     await this.page
  81  |       .getByRole('button', { name: /CardPickImg Drop Lab test to/i })
  82  |       .first()
  83  |       .click();
  84  |     await this.fileDropZone.setInputFiles(filePath);
  85  | 
  86  |     // Confirm upload
  87  |     await this.uploadConfirmBtn.click();
  88  |     await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 20000 });
  89  |   }
  90  | 
  91  |   // ── Search documents ──────────────────────────────────────────
  92  |   async searchDocuments(query) {
  93  |     await this.searchInput.click();
  94  |     await this.searchInput.fill(query);
  95  |     await this.searchInput.press('Enter');
  96  |     // Small wait for results to filter
  97  |     await this.page.waitForTimeout(500);
  98  |   }
  99  | 
  100 |   // ── Clear search ──────────────────────────────────────────────
  101 |   async clearSearch() {
  102 |     await this.searchInput.dblclick();
  103 |     await this.searchInput.fill('');
  104 |     await this.searchInput.press('Enter');
  105 |     await this.page.waitForTimeout(500);
  106 |   }
  107 | 
  108 |   // ── Delete the nth document (0-based index, default last added) ──
  109 |   // Uses the stable CSS selector from Codegen for the delete SVG icon
  110 |   async deleteDocument(index = 0) {
  111 |     const deleteIcons = this.page.locator('.MedicalReports_medicalReportDelete__eLbzu > svg');
  112 |     await deleteIcons.nth(index).click();
  113 |     await this.deleteConfirmBtn.waitFor({ state: 'visible', timeout: 5000 });
  114 |     await this.deleteConfirmBtn.click();
  115 |     await this.page.waitForTimeout(500);
  116 |   }
  117 | }
  118 | 
  119 | module.exports = { DocumentsPage };
```