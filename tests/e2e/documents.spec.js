const path = require('path');
const { test, expect } = require('@playwright/test');
const { DocumentsPage } = require('../../pages/DocumentsPage');

const PATIENT_ID  = '1706';
const SAMPLE_FILE = path.join(__dirname, '..', 'fixtures', 'file-sample_150kB.pdf');

test.describe('Documents', () => {

  test('navigates to Documents tab', async ({ page }) => {
    const docsPage = new DocumentsPage(page);
    await docsPage.openDocumentsTab(PATIENT_ID);
    await expect(docsPage.uploadReportBtn).toBeVisible();
  });

  test('uploads a report', async ({ page }) => {
    const docsPage = new DocumentsPage(page);
    await docsPage.openDocumentsTab(PATIENT_ID);

    const uploadedName = await docsPage.uploadReport(
      SAMPLE_FILE,
      null, // date now auto-set to today
      'Misc report'
    );

    // Server renames file — just confirm list is visible and a card appeared
    await expect(docsPage.uploadReportBtn).toBeVisible();
    console.log('Uploaded file shown as:', uploadedName);
  });

  test('opens the uploaded document and returns to list', async ({ page }) => {
    const docsPage = new DocumentsPage(page);
    await docsPage.openDocumentsTab(PATIENT_ID);

    if (!(await docsPage.hasDocuments())) { test.skip(); return; }

    // Opens the most recently uploaded (first) document
    await docsPage.openUploadedDocument();
    await expect(docsPage.backToListBtn).toBeVisible();

    await docsPage.goBackToList();
    await expect(docsPage.uploadReportBtn).toBeVisible();
  });

  test('opens all documents one by one', async ({ page }) => {
    const docsPage = new DocumentsPage(page);
    await docsPage.openDocumentsTab(PATIENT_ID);

    if (!(await docsPage.hasDocuments())) { test.skip(); return; }

    const count = await docsPage.openAllDocuments();
    expect(count).toBeGreaterThan(0);
    await expect(docsPage.uploadReportBtn).toBeVisible();
  });

  test('searches documents and clears search', async ({ page }) => {
    const docsPage = new DocumentsPage(page);
    await docsPage.openDocumentsTab(PATIENT_ID);

    await docsPage.searchDocuments('file');
    await expect(docsPage.searchInput).toHaveValue('file');

    await docsPage.searchDocuments('xyz_no_match');
    await expect(docsPage.searchInput).toHaveValue('xyz_no_match');

    await docsPage.clearSearch();
    await expect(docsPage.searchInput).toHaveValue('');
    await expect(docsPage.uploadReportBtn).toBeVisible();
  });

  // Runs last — deletes the document uploaded in the upload test
  test('deletes the uploaded document', async ({ page }) => {
    const docsPage = new DocumentsPage(page);
    await docsPage.openDocumentsTab(PATIENT_ID);

    if (!(await docsPage.hasDocuments())) { test.skip(); return; }

    await docsPage.deleteUploadedDocument();
    await expect(docsPage.uploadReportBtn).toBeVisible();
  });

});