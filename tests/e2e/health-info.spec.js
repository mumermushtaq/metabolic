const { test, expect } = require('@playwright/test');
const { HealthInfoPage } = require('../../pages/HealthInfoPage');

// Patient 1705 (umer mushtaq)
// "Insufficient Data" on every metric, so Edit/Add feedback aren't available there.
const PATIENT_ID = '1705';

test.describe('Health Info', () => {

  test('navigates to Health Info tab', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);
    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test('opens and closes Blood Pressure metric detail', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.openMetricDetail('Blood Pressure');
    await healthPage.closeMetricDetail();

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  // Glucose click navigates to a separate comparison page rather than opening
  // an inline detail panel — handled as direct navigation, not a togglable panel.
  test('Glucose card navigates to comparison view', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.openMetricDetail('Glucose');

    // Confirms navigation happened — comparison view shows "Glucose Metrics" heading
    await expect(page.getByRole('heading', { name: 'Glucose Metrics' }).first()).toBeVisible({ timeout: 10000 });

    // Navigate back to Health Info for subsequent tests
    await healthPage.openHealthInfoTab(PATIENT_ID);
  });

  test('opens and closes Activity metric detail', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.openMetricDetail('Activity');
    await healthPage.closeMetricDetail();

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test('opens and closes Weight metric detail', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.openMetricDetail('Weight');
    await healthPage.closeMetricDetail();

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test.skip('edits a Food entry and saves', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.openMetricDetail('Food');

    await healthPage.editFoodEntry({
      calories: 1556,
      carbs: 2505,
      protein: 435,
      fat: 405,
      sugar: 305,
      fiber: 55,
    });

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test.skip('adds clinician feedback on Food entry', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.openMetricDetail('Food');

    await healthPage.addFeedback({
      rating: 'Good',
      tag: 'Good carb choice',
      comment: 'Nice diet',
    });

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test('toggles chart metrics on/off', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.toggleChartMetric('Blood Pressure', true);
    await healthPage.toggleChartMetric('Activity', true);

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test('switches between chart time ranges', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    for (const range of ['1w', '1d', '1m', '6m', 'YTD']) {
      await healthPage.selectTimeRange(range);
    }

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

  test('applies Latest Updates filter with select all', async ({ page }) => {
    const healthPage = new HealthInfoPage(page);
    await healthPage.openHealthInfoTab(PATIENT_ID);

    await healthPage.applyLatestUpdatesFilter(true);

    await expect(healthPage.healthInfoTab).toBeVisible();
  });

});