// ─────────────────────────────────────────────────────────────
// tests/e2e/patient-listings.spec.js
// Test suite for Patient Listings screen
// ─────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const { PatientListingsPage } = require('../../pages/PatientListingsPage');

test.describe.configure({ mode: 'serial' });

test.describe('Patient Listings — @patients', () => {

  let listingsPage;

  test.beforeEach(async ({ page }) => {
    listingsPage = new PatientListingsPage(page);
    await listingsPage.goto();
    // Wait for at least one data row to be visible before each test
    await page.getByRole('row').nth(1).waitFor({ state: 'visible', timeout: 15000 });
  });

  // ══════════════════════════════════════════════════════════
  // 1. PAGE LOAD TESTS
  // ══════════════════════════════════════════════════════════

  test('should load patient listings page successfully', async ({ page }) => {
    // Assert URL is correct
    await expect(page).toHaveURL(/\/patient/);

    // Assert page title is visible
    await expect(listingsPage.pageTitle).toBeVisible();

    // Assert at least one data row is visible (nth(1) skips header)
    await expect(page.getByRole('row').nth(1)).toBeVisible();
  });

  test('should display all required table columns', async ({ page }) => {
  await expect(page.getByRole('columnheader', { name: 'Patient ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Diagnosis ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'TIR ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Food Log ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Weight ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Active Chats ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Status ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Verification Date ▲' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Patient Program ▲' })).toBeVisible();
});

  test('should display search bar and action buttons', async ({ page }) => {
    await expect(listingsPage.searchInput).toBeVisible();
    await expect(listingsPage.filterBtn).toBeVisible();
    await expect(listingsPage.addPatientBtn).toBeVisible();
    await expect(listingsPage.addPatientMRNBtn).toBeVisible();
  });

  test('should display saved filters row', async ({ page }) => {
    await expect(listingsPage.savedFiltersRow).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 2. SEARCH TESTS
  // ══════════════════════════════════════════════════════════

  test('should search patient by name and show results', async ({ page }) => {
    await listingsPage.searchPatient('Umer Mushtaq');

    // Search results should contain the searched name
    await expect(page.getByText('Umer Mushtaq').first()).toBeVisible();

    // Clear Filter button should appear
    await expect(listingsPage.clearFilterBtn).toBeVisible();
  });

  test('should show rows after search', async ({ page }) => {
    await listingsPage.searchPatient('Umer Mushtaq');

    // At least one data row should be visible
    await expect(page.getByRole('row').nth(1)).toBeVisible();
  });

  test('should clear search and restore full list', async ({ page }) => {
    // Search first
    await listingsPage.searchPatient('Umer Mushtaq');
    await expect(listingsPage.clearFilterBtn).toBeVisible();

    // Now clear
    await listingsPage.clearSearch();

    // Clear filter button should disappear
    await expect(listingsPage.clearFilterBtn).not.toBeVisible();

    // Table rows should still be visible
    await expect(page.getByRole('row').nth(1)).toBeVisible();
  });

  test('should show no results for non-existent patient', async ({ page }) => {
    await listingsPage.searchPatient('ZZZZNONEXISTENTPATIENT99999');

    // App removes the entire table (incl. header) when there are no results —
    // row count goes to 0, not 1. Assert no data rows exist in tbody.
    await expect(page.locator('table tbody tr')).toHaveCount(0, { timeout: 15000 });
  });

  test('should search is case-insensitive', async ({ page }) => {
    // Search uppercase
    await listingsPage.searchPatient('UMER MUSHTAQ');
    const upperRows = await page.getByRole('row').count();

    await listingsPage.clearSearch();
    await page.getByRole('row').nth(1).waitFor({ state: 'visible' });

    // Search lowercase
    await listingsPage.searchPatient('umer mushtaq');
    const lowerRows = await page.getByRole('row').count();

    expect(upperRows).toBe(lowerRows);
  });

  test('should show clear filter button only when search is active', async ({ page }) => {
    // No search — clear filter should not be visible
    await expect(listingsPage.clearFilterBtn).not.toBeVisible();

    // After search — clear filter should appear
    await listingsPage.searchPatient('Umer');
    await expect(listingsPage.clearFilterBtn).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 3. FILTER MODAL TESTS
  // ══════════════════════════════════════════════════════════

  test('should open filter modal when clicking Filter button', async ({ page }) => {
    await listingsPage.openFilterModal();
    await expect(listingsPage.filterModal).toBeVisible();
  });

  test('should display all filter fields in modal', async ({ page }) => {
    await listingsPage.openFilterModal();

    await expect(page.getByText('Diagnosis')).toBeVisible();
    await expect(page.getByText('Gender')).toBeVisible();
    await expect(page.getByText('Language')).toBeVisible();
    await expect(page.getByText('Primary Staff')).toBeVisible();
    await expect(page.getByText('Program')).toBeVisible();
    await expect(page.getByText('Age')).toBeVisible();
    await expect(page.getByText('Status')).toBeVisible();
    await expect(page.getByText('Last BCA Scan')).toBeVisible();
    await expect(page.getByText('Verification Date')).toBeVisible();
  });

  test('should display Apply Filters, Save Filter Set and Cancel buttons', async ({ page }) => {
    await listingsPage.openFilterModal();

    await expect(listingsPage.applyFiltersBtn).toBeVisible();
    await expect(listingsPage.saveFilterSetBtn).toBeVisible();
    await expect(listingsPage.cancelFilterBtn).toBeVisible();
  });

  test('should close filter modal when clicking Cancel', async ({ page }) => {
    await listingsPage.openFilterModal();
    await expect(listingsPage.filterModal).toBeVisible();

    await listingsPage.closeFilterModal();
    await expect(listingsPage.filterModal).not.toBeVisible();
  });

  test('should apply filter and update patient list', async ({ page }) => {
    await listingsPage.openFilterModal();
    await listingsPage.applyFiltersBtn.click();

    // Clear Filter button appears once filter is applied
    await expect(listingsPage.clearFilterBtn).toBeVisible({ timeout: 10000 });
  });

  test('should clear all filters and restore full list', async ({ page }) => {
    await listingsPage.openFilterModal();
    await listingsPage.applyFiltersBtn.click();
    await expect(listingsPage.clearFilterBtn).toBeVisible({ timeout: 10000 });

    await listingsPage.clearAllFilters();

    // Table should still have rows
    await expect(page.getByRole('row').nth(1)).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 4. SAVED FILTER TESTS
  // ══════════════════════════════════════════════════════════

  test('should apply saved filter and update results', async ({ page }) => {
    await listingsPage.clickSavedFilter('Age 20-24');

    // Clear filter button should appear
    await expect(listingsPage.clearFilterBtn).toBeVisible();
  });

  test('should show multiple saved filter chips', async ({ page }) => {
    await expect(page.getByText('Age 20-24')).toBeVisible();
    await expect(page.getByText('Male Filter')).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 5. TABLE ROW TESTS
  // ══════════════════════════════════════════════════════════

  test('should expand patient row to show basic details', async ({ page }) => {
    // Click the Expand Row button on the first data row
    await page.getByRole('button', { name: /expand row/i }).first().click();

    // Expanded content row should appear
    await expect(page.getByRole('row').nth(2)).toBeVisible();
  });

  test('should show patient status badges', async ({ page }) => {
    const hasVerified  = await page.getByText('VERIFIED').first().isVisible().catch(() => false);
    const hasInvited   = await page.getByText('INVITED').first().isVisible().catch(() => false);
    const hasPending   = await page.getByText('PENDING').first().isVisible().catch(() => false);
    const hasActivated = await page.getByText('ACTIVATED').first().isVisible().catch(() => false);

    expect(hasVerified || hasInvited || hasPending || hasActivated).toBeTruthy();
  });

  test('should show three-dot menu button on each patient row', async ({ page }) => {
    // Last button in the first data row is the three-dot menu
    const menuBtn = page.getByRole('row').nth(1).getByRole('button').last();
    await expect(menuBtn).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 6. ADD PATIENT BUTTON TESTS
  // ══════════════════════════════════════════════════════════

  test('should show Add Patient button', async ({ page }) => {
    await expect(listingsPage.addPatientBtn).toBeVisible();
    await expect(listingsPage.addPatientBtn).toBeEnabled();
  });

  test('should show Add Patient (MRN) button', async ({ page }) => {
    await expect(listingsPage.addPatientMRNBtn).toBeVisible();
    await expect(listingsPage.addPatientMRNBtn).toBeEnabled();
  });

  test('should open add patient form when clicking Add Patient', async ({ page }) => {
    await listingsPage.clickAddPatient();
    await page.waitForLoadState('domcontentloaded');
    const isModalOpen = await page.locator('[role="dialog"]').isVisible().catch(() => false);
    const isNewUrl    = page.url().includes('add') || page.url().includes('new');
    expect(isModalOpen || isNewUrl).toBeTruthy();
  });

  test('should open MRN search when clicking Add Patient (MRN)', async ({ page }) => {
    await listingsPage.clickAddPatientMRN();
    await page.waitForLoadState('domcontentloaded');
    const isModalOpen = await page.locator('[role="dialog"]').isVisible().catch(() => false);
    const isNewUrl    = page.url().includes('mrn') || page.url().includes('add');
    expect(isModalOpen || isNewUrl).toBeTruthy();
  });

});