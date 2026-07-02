# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\documents.spec.js >> Documents >> opens all documents one by one
- Location: tests\e2e\documents.spec.js:43:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
        - link "Tasks" [ref=e18] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e19]:
            - img [ref=e20]
            - generic: Tasks
    - generic [ref=e24]:
      - generic [ref=e26]:
        - link "Patients" [ref=e27] [cursor=pointer]:
          - /url: /patient
          - heading "Patients" [level=3] [ref=e28]
        - img [ref=e30]
      - generic [ref=e33]:
        - button "notification" [ref=e35] [cursor=pointer]:
          - img "notification" [ref=e36]
        - generic [ref=e37]:
          - img "profile" [ref=e38]
          - generic [ref=e39] [cursor=pointer]:
            - heading [level=6]
    - generic [ref=e40]:
      - list [ref=e43]:
        - link "Patient Info" [ref=e44] [cursor=pointer]:
          - /url: /patient/profile/1706
          - listitem [ref=e45]: Patient Info
        - link "Visits" [ref=e46] [cursor=pointer]:
          - /url: /patient/profile/visits/1706
          - listitem [ref=e47]: Visits
        - link "Consent & Intake" [ref=e48] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1706
          - listitem [ref=e49]: Consent & Intake
        - link "Health Info" [ref=e50] [cursor=pointer]:
          - /url: /patient/profile/health-info/1706
          - listitem [ref=e51]: Health Info
        - link "Documents" [ref=e52] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1706
          - listitem [ref=e53]: Documents
        - link "BCA Scans" [ref=e54] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1706
          - listitem [ref=e55]: BCA Scans
        - link "Glucose Analysis" [ref=e56] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1706
          - listitem [ref=e57]: Glucose Analysis
        - link "Add Coupon" [ref=e58] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1706
          - listitem [ref=e59]: Add Coupon
        - link "GLP-1 Protocol" [ref=e60] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1706
          - listitem [ref=e61]: GLP-1 Protocol
      - generic [ref=e62]:
        - generic [ref=e63]:
          - generic [ref=e64]:
            - img [ref=e66]
            - textbox "Search" [ref=e68]
          - button [ref=e69] [cursor=pointer]:
            - img [ref=e72]
          - button "Upload Report" [ref=e74] [cursor=pointer]:
            - generic [ref=e75]:
              - img [ref=e77]
              - text: Upload Report
        - status [ref=e80]:
          - generic [ref=e81]: Loading...
  - alert [ref=e82]
```

# Test source

```ts
  1  | const path = require('path');
  2  | const { test, expect } = require('@playwright/test');
  3  | const { DocumentsPage } = require('../../pages/DocumentsPage');
  4  | 
  5  | const PATIENT_ID  = '1706';
  6  | const SAMPLE_FILE = path.join(__dirname, '..', 'fixtures', 'file-sample_150kB.pdf');
  7  | 
  8  | test.describe('Documents', () => {
  9  | 
  10 |   test('navigates to Documents tab', async ({ page }) => {
  11 |     const docsPage = new DocumentsPage(page);
  12 |     await docsPage.openDocumentsTab(PATIENT_ID);
  13 |     await expect(docsPage.uploadReportBtn).toBeVisible();
  14 |   });
  15 | 
  16 |   // Upload runs first so subsequent tests always have a document to work with
  17 |   test('uploads a report', async ({ page }) => {
  18 |     const docsPage = new DocumentsPage(page);
  19 |     await docsPage.openDocumentsTab(PATIENT_ID);
  20 | 
  21 |     await docsPage.uploadReport(
  22 |       SAMPLE_FILE,
  23 |       'Choose Thursday, June 25th,',
  24 |       'Misc report'
  25 |     );
  26 | 
  27 |     await expect(docsPage.uploadReportBtn).toBeVisible();
  28 |   });
  29 | 
  30 |   test('opens a document and returns to list', async ({ page }) => {
  31 |     const docsPage = new DocumentsPage(page);
  32 |     await docsPage.openDocumentsTab(PATIENT_ID);
  33 | 
  34 |     if (!(await docsPage.hasDocuments())) { test.skip(); return; }
  35 | 
  36 |     await docsPage.openFirstDocument();
  37 |     await expect(docsPage.backToListBtn).toBeVisible();
  38 | 
  39 |     await docsPage.goBackToList();
  40 |     await expect(docsPage.uploadReportBtn).toBeVisible();
  41 |   });
  42 | 
  43 |   test('opens all documents one by one', async ({ page }) => {
  44 |     const docsPage = new DocumentsPage(page);
  45 |     await docsPage.openDocumentsTab(PATIENT_ID);
  46 | 
  47 |     if (!(await docsPage.hasDocuments())) { test.skip(); return; }
  48 | 
  49 |     const count = await docsPage.openAllDocuments();
  50 |     // At least one document was opened
> 51 |     expect(count).toBeGreaterThan(0);
     |                   ^ Error: expect(received).toBeGreaterThan(expected)
  52 |     await expect(docsPage.uploadReportBtn).toBeVisible();
  53 |   });
  54 | 
  55 |   test('searches documents and clears search', async ({ page }) => {
  56 |     const docsPage = new DocumentsPage(page);
  57 |     await docsPage.openDocumentsTab(PATIENT_ID);
  58 | 
  59 |     await docsPage.searchDocuments('sample');
  60 |     await expect(docsPage.searchInput).toHaveValue('sample');
  61 | 
  62 |     await docsPage.searchDocuments('samples');
  63 |     await expect(docsPage.searchInput).toHaveValue('samples');
  64 | 
  65 |     await docsPage.clearSearch();
  66 |     await expect(docsPage.searchInput).toHaveValue('');
  67 |     await expect(docsPage.uploadReportBtn).toBeVisible();
  68 |   });
  69 | 
  70 |   test('deletes a document', async ({ page }) => {
  71 |     const docsPage = new DocumentsPage(page);
  72 |     await docsPage.openDocumentsTab(PATIENT_ID);
  73 | 
  74 |     if (!(await docsPage.hasDocuments())) {
  75 |       test.skip();
  76 |       return;
  77 |     }
  78 | 
  79 |     // Delete the first document
  80 |     await docsPage.deleteDocument(0);
  81 |     await expect(docsPage.uploadReportBtn).toBeVisible();
  82 |   });
  83 | 
  84 | });
```