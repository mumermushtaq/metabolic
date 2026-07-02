# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\documents.spec.js >> Documents >> uploads a report
- Location: tests\e2e\documents.spec.js:16:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('gridcell', { name: /Choose Thursday, June 25th,/i })

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
  - dialog "Upload Reports" [ref=e116]:
    - generic [ref=e117]:
      - generic [ref=e118]:
        - heading "Upload Reports" [level=5] [ref=e120]
        - button "Close" [ref=e121] [cursor=pointer]
      - generic [ref=e123]:
        - generic [ref=e124]:
          - generic [ref=e125]:
            - generic [ref=e126]: Date taken
            - generic [ref=e127]:
              - textbox "dd/mm/yyyy" [active] [ref=e130]
              - generic [ref=e131]:
                - dialog "Choose Date" [ref=e134]:
                  - alert [ref=e135]
                  - button "Previous Month" [ref=e136] [cursor=pointer]:
                    - generic: Previous Month
                  - button "Next Month" [ref=e137] [cursor=pointer]:
                    - generic: Next Month
                  - generic [ref=e138]:
                    - heading "July 2026" [level=2] [ref=e140]
                    - table [ref=e141]:
                      - rowgroup [ref=e142]:
                        - row "Sunday Monday Tuesday Wednesday Thursday Friday Saturday" [ref=e143]:
                          - columnheader "Sunday" [ref=e144]:
                            - generic [ref=e145]: Sunday
                            - text: Su
                          - columnheader "Monday" [ref=e146]:
                            - generic [ref=e147]: Monday
                            - text: Mo
                          - columnheader "Tuesday" [ref=e148]:
                            - generic [ref=e149]: Tuesday
                            - text: Tu
                          - columnheader "Wednesday" [ref=e150]:
                            - generic [ref=e151]: Wednesday
                            - text: We
                          - columnheader "Thursday" [ref=e152]:
                            - generic [ref=e153]: Thursday
                            - text: Th
                          - columnheader "Friday" [ref=e154]:
                            - generic [ref=e155]: Friday
                            - text: Fr
                          - columnheader "Saturday" [ref=e156]:
                            - generic [ref=e157]: Saturday
                            - text: Sa
                      - rowgroup "Month July, 2026" [ref=e158]:
                        - row "Choose Sunday, June 28th, 2026 Choose Monday, June 29th, 2026 Choose Tuesday, June 30th, 2026 Choose Wednesday, July 1st, 2026 Choose Thursday, July 2nd, 2026 Choose Friday, July 3rd, 2026 Choose Saturday, July 4th, 2026" [ref=e159]:
                          - gridcell "Choose Sunday, June 28th, 2026" [ref=e160] [cursor=pointer]: "28"
                          - gridcell "Choose Monday, June 29th, 2026" [ref=e161] [cursor=pointer]: "29"
                          - gridcell "Choose Tuesday, June 30th, 2026" [ref=e162] [cursor=pointer]: "30"
                          - gridcell "Choose Wednesday, July 1st, 2026" [ref=e163] [cursor=pointer]: "1"
                          - gridcell "Choose Thursday, July 2nd, 2026" [ref=e164] [cursor=pointer]: "2"
                          - gridcell "Choose Friday, July 3rd, 2026" [ref=e165] [cursor=pointer]: "3"
                          - gridcell "Choose Saturday, July 4th, 2026" [ref=e166] [cursor=pointer]: "4"
                        - row "Choose Sunday, July 5th, 2026 Choose Monday, July 6th, 2026 Choose Tuesday, July 7th, 2026 Choose Wednesday, July 8th, 2026 Choose Thursday, July 9th, 2026 Choose Friday, July 10th, 2026 Choose Saturday, July 11th, 2026" [ref=e167]:
                          - gridcell "Choose Sunday, July 5th, 2026" [ref=e168] [cursor=pointer]: "5"
                          - gridcell "Choose Monday, July 6th, 2026" [ref=e169] [cursor=pointer]: "6"
                          - gridcell "Choose Tuesday, July 7th, 2026" [ref=e170] [cursor=pointer]: "7"
                          - gridcell "Choose Wednesday, July 8th, 2026" [ref=e171] [cursor=pointer]: "8"
                          - gridcell "Choose Thursday, July 9th, 2026" [ref=e172] [cursor=pointer]: "9"
                          - gridcell "Choose Friday, July 10th, 2026" [ref=e173] [cursor=pointer]: "10"
                          - gridcell "Choose Saturday, July 11th, 2026" [ref=e174] [cursor=pointer]: "11"
                        - row "Choose Sunday, July 12th, 2026 Choose Monday, July 13th, 2026 Choose Tuesday, July 14th, 2026 Choose Wednesday, July 15th, 2026 Choose Thursday, July 16th, 2026 Choose Friday, July 17th, 2026 Choose Saturday, July 18th, 2026" [ref=e175]:
                          - gridcell "Choose Sunday, July 12th, 2026" [ref=e176] [cursor=pointer]: "12"
                          - gridcell "Choose Monday, July 13th, 2026" [ref=e177] [cursor=pointer]: "13"
                          - gridcell "Choose Tuesday, July 14th, 2026" [ref=e178] [cursor=pointer]: "14"
                          - gridcell "Choose Wednesday, July 15th, 2026" [ref=e179] [cursor=pointer]: "15"
                          - gridcell "Choose Thursday, July 16th, 2026" [ref=e180] [cursor=pointer]: "16"
                          - gridcell "Choose Friday, July 17th, 2026" [ref=e181] [cursor=pointer]: "17"
                          - gridcell "Choose Saturday, July 18th, 2026" [ref=e182] [cursor=pointer]: "18"
                        - row "Choose Sunday, July 19th, 2026 Choose Monday, July 20th, 2026 Choose Tuesday, July 21st, 2026 Choose Wednesday, July 22nd, 2026 Choose Thursday, July 23rd, 2026 Choose Friday, July 24th, 2026 Choose Saturday, July 25th, 2026" [ref=e183]:
                          - gridcell "Choose Sunday, July 19th, 2026" [ref=e184] [cursor=pointer]: "19"
                          - gridcell "Choose Monday, July 20th, 2026" [ref=e185] [cursor=pointer]: "20"
                          - gridcell "Choose Tuesday, July 21st, 2026" [ref=e186] [cursor=pointer]: "21"
                          - gridcell "Choose Wednesday, July 22nd, 2026" [ref=e187] [cursor=pointer]: "22"
                          - gridcell "Choose Thursday, July 23rd, 2026" [ref=e188] [cursor=pointer]: "23"
                          - gridcell "Choose Friday, July 24th, 2026" [ref=e189] [cursor=pointer]: "24"
                          - gridcell "Choose Saturday, July 25th, 2026" [ref=e190] [cursor=pointer]: "25"
                        - row "Choose Sunday, July 26th, 2026 Choose Monday, July 27th, 2026 Choose Tuesday, July 28th, 2026 Choose Wednesday, July 29th, 2026 Choose Thursday, July 30th, 2026 Choose Friday, July 31st, 2026 Choose Saturday, August 1st, 2026" [ref=e191]:
                          - gridcell "Choose Sunday, July 26th, 2026" [ref=e192] [cursor=pointer]: "26"
                          - gridcell "Choose Monday, July 27th, 2026" [ref=e193] [cursor=pointer]: "27"
                          - gridcell "Choose Tuesday, July 28th, 2026" [ref=e194] [cursor=pointer]: "28"
                          - gridcell "Choose Wednesday, July 29th, 2026" [ref=e195] [cursor=pointer]: "29"
                          - gridcell "Choose Thursday, July 30th, 2026" [ref=e196] [cursor=pointer]: "30"
                          - gridcell "Choose Friday, July 31st, 2026" [ref=e197] [cursor=pointer]: "31"
                          - gridcell "Choose Saturday, August 1st, 2026" [ref=e198] [cursor=pointer]: "1"
                - img
          - generic [ref=e199]:
            - generic [ref=e200]: Note (Optional)
            - textbox "Note (Optional)" [ref=e201]:
              - /placeholder: Additional info
          - generic [ref=e203]:
            - 'button "CardPickImg Drop Lab test to attach or browse You can upload files with the extensions: PDF,XLS, DOCX, TXT JPEG, BMP, PMG, GIF, or TIFF." [ref=e204] [cursor=pointer]':
              - 'button "CardPickImg Drop Lab test to attach or browse You can upload files with the extensions: PDF,XLS, DOCX, TXT JPEG, BMP, PMG, GIF, or TIFF."'
            - generic [ref=e206] [cursor=pointer]:
              - img "CardPickImg" [ref=e208]
              - generic [ref=e209]: Drop Lab test to attach or browse
              - generic [ref=e210]:
                - text: "You can upload files with the extensions:"
                - text: PDF,XLS, DOCX, TXT JPEG, BMP, PMG, GIF, or TIFF.
          - generic [ref=e211]:
            - checkbox "Share with patient" [checked] [ref=e212]
            - generic [ref=e213]: Share with patient
        - generic [ref=e214]:
          - button "Upload" [ref=e215] [cursor=pointer]:
            - generic [ref=e216]: Upload
          - button "Cancel" [ref=e217] [cursor=pointer]:
            - generic [ref=e218]: Cancel
```

# Test source

```ts
  1   | ﻿class DocumentsPage {
  2   |   constructor(page) {
  3   |     this.page = page;
  4   | 
  5   |     this.documentsTab = page.getByRole('link', { name: 'Documents' });
  6   |     this.backToListBtn = page.getByRole('button', { name: 'Back to list' });
  7   |     this.uploadReportBtn = page.getByRole('button', { name: 'Upload Report' });
  8   |     this.searchInput = page.getByRole('textbox', { name: 'Search' });
  9   | 
  10  |     this.dateTakenInput = page.getByRole('textbox', { name: 'dd/mm/yyyy' });
  11  |     this.noteInput = page.getByRole('textbox', { name: 'Note (Optional)' });
  12  |     this.fileDropZone = page.getByLabel('Drop Lab test to attach or');
  13  |     this.uploadConfirmBtn = page.getByRole('button', { name: 'Upload', exact: true });
  14  |     this.deleteConfirmBtn = page.getByRole('button', { name: 'Yes' });
  15  |     this.documentCards = page.locator('[class*="medicalCardsSingle"], [class*="MedicalCardsSingle"]');
  16  |     this.deleteIcons = page.locator('.MedicalReports_medicalReportDelete__eLbzu > svg');
  17  |     this.noDataMessage = page.locator('h5:has-text("No Data Found"), [class*="noData"], [class*="NoData"]');
  18  |   }
  19  | 
  20  |   async waitForListReady() {
  21  |     await this.uploadReportBtn.waitFor({ state: 'visible', timeout: 15000 });
  22  |     await this.page.locator('[role="status"], .spinner-border, [class*="loader"], [class*="Loader"]')
  23  |       .first()
  24  |       .waitFor({ state: 'hidden', timeout: 15000 })
  25  |       .catch(() => {});
  26  |   }
  27  | 
  28  |   async openDocumentsTab(patientId) {
  29  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/medical-reports/${patientId}`);
  30  |     await this.waitForListReady();
  31  |   }
  32  | 
  33  |   async hasDocuments() {
  34  |     const hasCard = await this.documentCards.first().isVisible({ timeout: 3000 }).catch(() => false);
  35  |     if (hasCard) return true;
  36  |     return !(await this.noDataMessage.isVisible({ timeout: 3000 }).catch(() => false));
  37  |   }
  38  | 
  39  |   async openFirstDocument() {
  40  |     await this.documentCards.first().waitFor({ state: 'visible', timeout: 10000 });
  41  |     await this.documentCards.first().click();
  42  |     await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  43  |   }
  44  | 
  45  |   async openDocumentByName(fileNamePartial) {
  46  |     const card = this.documentCards.filter({ hasText: new RegExp(fileNamePartial, 'i') }).first();
  47  |     await card.waitFor({ state: 'visible', timeout: 10000 });
  48  |     await card.click();
  49  |     await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  50  |   }
  51  | 
  52  |   async openAllDocuments() {
  53  |     await this.documentCards.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  54  |     const count = await this.documentCards.count();
  55  |     let opened = 0;
  56  | 
  57  |     for (let i = 0; i < count; i++) {
  58  |       const card = this.documentCards.nth(i);
  59  |       const visible = await card.isVisible({ timeout: 3000 }).catch(() => false);
  60  |       if (!visible) continue;
  61  | 
  62  |       await card.click();
  63  |       await this.backToListBtn.waitFor({ state: 'visible', timeout: 10000 });
  64  |       await this.goBackToList();
  65  |       opened++;
  66  |     }
  67  | 
  68  |     return opened;
  69  |   }
  70  | 
  71  |   async openUploadedDocument() {
  72  |     await this.openFirstDocument();
  73  |   }
  74  | 
  75  |   async deleteUploadedDocument() {
  76  |     await this.deleteDocument(0);
  77  |   }
  78  | 
  79  |   async goBackToList() {
  80  |     await this.backToListBtn.click();
  81  |     await this.waitForListReady();
  82  |   }
  83  | 
  84  |   async uploadReport(filePath, dateTakenLabel = null, note = '') {
  85  |     await this.uploadReportBtn.click();
  86  |     await this.dateTakenInput.waitFor({ state: 'visible', timeout: 10000 });
  87  | 
  88  |     await this.dateTakenInput.click();
  89  |     if (dateTakenLabel) {
> 90  |       await this.page.getByRole('gridcell', { name: new RegExp(dateTakenLabel, 'i') }).click();
      |                                                                                        ^ Error: locator.click: Test timeout of 60000ms exceeded.
  91  |     } else {
  92  |       await this.page.getByRole('gridcell', { name: /Choose/i }).first().click();
  93  |     }
  94  | 
  95  |     if (note) {
  96  |       await this.noteInput.click();
  97  |       await this.noteInput.fill(note);
  98  |     }
  99  | 
  100 |     await this.fileDropZone.setInputFiles(filePath);
  101 |     await this.uploadConfirmBtn.click();
  102 |     await this.waitForListReady();
  103 |     await this.documentCards.first().waitFor({ state: 'visible', timeout: 20000 });
  104 | 
  105 |     const latestHeading = this.documentCards.first().locator('h5').first();
  106 |     const uploadedName = await latestHeading.textContent({ timeout: 5000 }).catch(() => null);
  107 |     return uploadedName ? uploadedName.trim() : null;
  108 |   }
  109 | 
  110 |   async searchDocuments(query) {
  111 |     const responsePromise = this.page.waitForResponse(
  112 |       resp => resp.url().includes('/medical') && resp.status() === 200,
  113 |       { timeout: 10000 }
  114 |     ).catch(() => {});
  115 | 
  116 |     await this.searchInput.click();
  117 |     await this.searchInput.fill(query);
  118 |     await this.searchInput.press('Enter');
  119 |     await responsePromise;
  120 |     await this.searchInput.waitFor({ state: 'visible', timeout: 5000 });
  121 |   }
  122 | 
  123 |   async clearSearch() {
  124 |     const responsePromise = this.page.waitForResponse(
  125 |       resp => resp.url().includes('/medical') && resp.status() === 200,
  126 |       { timeout: 10000 }
  127 |     ).catch(() => {});
  128 | 
  129 |     await this.searchInput.click();
  130 |     await this.searchInput.fill('');
  131 |     await this.searchInput.press('Enter');
  132 |     await responsePromise;
  133 |     await this.waitForListReady();
  134 |   }
  135 | 
  136 |   async deleteDocument(index = 0) {
  137 |     const count = await this.deleteIcons.count();
  138 |     if (count === 0) {
  139 |       throw new Error('No documents available to delete');
  140 |     }
  141 | 
  142 |     const safeIndex = Math.min(index, count - 1);
  143 |     await this.deleteIcons.nth(safeIndex).click();
  144 |     await this.deleteConfirmBtn.waitFor({ state: 'visible', timeout: 5000 });
  145 |     await this.deleteConfirmBtn.click();
  146 |     await this.waitForListReady();
  147 |   }
  148 | }
  149 | 
  150 | module.exports = { DocumentsPage };
  151 | 
```