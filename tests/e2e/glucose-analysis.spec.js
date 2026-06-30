const { test, expect } = require('@playwright/test');
const { GlucoseAnalysisPage } = require('../../pages/GlucoseAnalysisPage');

const PATIENT_ID = '1706';

test.describe('Glucose Analysis', () => {

  test('navigates to Glucose Analysis tab', async ({ page }) => {
    const glucosePage = new GlucoseAnalysisPage(page);
    await glucosePage.openGlucoseAnalysisTab(PATIENT_ID);
    await expect(glucosePage.glucoseAnalysisTab).toBeVisible();
  });

  test('opens date picker', async ({ page }) => {
    const glucosePage = new GlucoseAnalysisPage(page);
    await glucosePage.openGlucoseAnalysisTab(PATIENT_ID);

    await glucosePage.openDatePicker();

    // Apply button appears when date picker is open
    await expect(glucosePage.applyBtn).toBeVisible();
  });

  test('changes date range and applies', async ({ page }) => {
    const glucosePage = new GlucoseAnalysisPage(page);
    await glucosePage.openGlucoseAnalysisTab(PATIENT_ID);

    await glucosePage.changeDateRange(14);

    // After applying, tab is still visible and page settled
    await expect(glucosePage.glucoseAnalysisTab).toBeVisible();
  });

});