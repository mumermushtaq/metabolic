// ─────────────────────────────────────────────────────────────
// tests/e2e/patient-listings.spec.js
// Test suite for Patient Listings screen
// Locators verified via Playwright Codegen
// ─────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const { PatientListingsPage } = require('../../pages/PatientListingsPage');

test.describe.configure({ mode: 'serial' });

test.describe('Patient Listings — @patients', () => {

  let listingsPage;

  test.beforeEach(async ({ page }) => {
    listingsPage = new PatientListingsPage(page);
    await listingsPage.goto();
  });

  // ══════════════════════════════════════════════════════════
  // 1. PAGE LOAD
  // ══════════════════════════════════════════════════════════

  test('should land on patient listings page after login', async ({ page }) => {
    await expect(page).toHaveURL(/\/patient/);
    await expect(listingsPage.pageTitle).toBeVisible();
  });

  test('should show search bar and action buttons', async ({ page }) => {
    await expect(listingsPage.searchInput).toBeVisible();
    await expect(listingsPage.filterBtn).toBeVisible();
    await expect(listingsPage.addPatientBtn).toBeVisible();
    await expect(listingsPage.addPatientMRNBtn).toBeVisible();
  });

  test('should show saved filters section', async ({ page }) => {
    await expect(listingsPage.savedFiltersRow).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 2. SEARCH
  // ══════════════════════════════════════════════════════════

  test('should search patient by name and show result', async ({ page }) => {
    await listingsPage.searchPatient('Umer Mushtaq');

    await expect(page.getByText('Umer Mushtaq').first()).toBeVisible();
    await expect(listingsPage.clearFilterBtn).toBeVisible();
  });

  test('should clear search when clicking Clear Filter', async ({ page }) => {
    await listingsPage.searchPatient('Umer Mushtaq');
    await expect(listingsPage.clearFilterBtn).toBeVisible();

    await listingsPage.clearSearch();

    await expect(listingsPage.clearFilterBtn).not.toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 3. FILTER MODAL
  // ══════════════════════════════════════════════════════════

  test('should open and close filter modal', async ({ page }) => {
    await listingsPage.openFilterModal();
    await expect(listingsPage.filterModal).toBeVisible();

    await listingsPage.closeFilterModal();
    await expect(listingsPage.filterModal).not.toBeVisible();
  });

  test('should apply Male gender filter and show Clear Filter button', async ({ page }) => {
    await listingsPage.openFilterModal();
    await listingsPage.selectGenderMale();
    await listingsPage.applyFilters();

    await expect(listingsPage.clearFilterBtn).toBeVisible();

    // Cleanup — clear the filter so next test starts clean
    await listingsPage.clearSearch();
  });

  // ══════════════════════════════════════════════════════════
  // 4. SAVE FILTER SET
  // ══════════════════════════════════════════════════════════

  test('should save a custom filter set with a title', async ({ page }) => {
    await listingsPage.openFilterModal();
    await listingsPage.selectGenderMale();
    await listingsPage.saveCurrentFilterAs('Male Users Test');

    // After saving, the new filter chip should be visible
    await expect(page.getByText('Male Users Test')).toBeVisible({ timeout: 10000 });
  });

  test('should apply a saved filter chip and show Clear Filter button', async ({ page }) => {
    // Assumes 'Male Users Test' filter was created in a prior test run,
    // or a known saved filter chip already exists, e.g. 'Age 20-24'
    await listingsPage.clickSavedFilter('Age 20-24');

    await expect(listingsPage.clearFilterBtn).toBeVisible();

    await listingsPage.clearSearch();
  });

  // ══════════════════════════════════════════════════════════
  // 5. ADD PATIENT BUTTONS
  // ══════════════════════════════════════════════════════════

  test('should show Add Patient button enabled', async ({ page }) => {
    await expect(listingsPage.addPatientBtn).toBeVisible();
    await expect(listingsPage.addPatientBtn).toBeEnabled();
  });

  test('should show Add Patient (MRN) button enabled', async ({ page }) => {
    await expect(listingsPage.addPatientMRNBtn).toBeVisible();
    await expect(listingsPage.addPatientMRNBtn).toBeEnabled();
  });

});