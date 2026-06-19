const { test, expect } = require('@playwright/test');
const { PatientListingsPage } = require('../../pages/PatientListingsPage');
const { AddPatientPage } = require('../../pages/AddPatientPage');

test.describe.configure({ mode: 'serial' });

test.describe('Add Patient — @add-patient', () => {

  let listingsPage;
  let addPage;

  // Unique suffix so each test run creates a distinct patient
  const uid = Date.now();

  // Full patient data matching the codegen flow
  // Use last 6 digits of uid for MRN — field has a character limit and early digits repeat across runs
  const shortId = uid.toString().slice(-6);

  const patient = {
    firstName:         'Auto',
    lastName:          `AT${shortId}`,
    dob:               '01-06-1990',
    gender:            'Male',
    email:             `at${shortId}@getnada.com`,
    phone:             '3' + Math.floor(Math.random() * 1_000_000_000).toString().padStart(9, '0'),
    phoneCountry:      'PK',
    insuranceContract: 'Self',
    insuranceProvider: 'AXA Insurance',
    language:          'pak',
    nationality:       'pak',
    mrn:               `AT${shortId}`,
    diagnosis:         'Diabetes',
    primaryTeam:       'Kaleem Asad',
    secondaryTeam:     ['Test B Account'],
  };

  test.beforeEach(async ({ page }) => {
    listingsPage = new PatientListingsPage(page);
    addPage      = new AddPatientPage(page);
    await listingsPage.goto();
  });

  // ══════════════════════════════════════════════════════════
  // 1. MODAL — OPEN & CLOSE
  // ══════════════════════════════════════════════════════════

  test('should open Add Patient modal when clicking Add Patient button', async ({ page }) => {
    await listingsPage.addPatientBtn.click();
    await expect(addPage.modal).toBeVisible();
  });

  test('should close Add Patient modal when clicking Cancel', async ({ page }) => {
    await listingsPage.addPatientBtn.click();
    await expect(addPage.modal).toBeVisible();

    await addPage.cancel();
    await expect(addPage.modal).not.toBeVisible();
  });

  test('should display all key form fields inside the modal', async ({ page }) => {
    await listingsPage.addPatientBtn.click();

    await expect(addPage.firstNameInput).toBeVisible();
    await expect(addPage.lastNameInput).toBeVisible();
    await expect(addPage.dobInput).toBeVisible();
    await expect(addPage.genderMale).toBeVisible();
    await expect(addPage.genderFemale).toBeVisible();
    await expect(addPage.emailInput).toBeVisible();
    await expect(addPage.phoneInput).toBeVisible();
    await expect(addPage.mrnInput).toBeVisible();
    await expect(addPage.submitBtn).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 2. FORM VALIDATION
  // ══════════════════════════════════════════════════════════

  test('should not submit when all fields are empty', async ({ page }) => {
    await listingsPage.addPatientBtn.click();
    await addPage.submitBtn.click();

    // Modal stays open — form was not submitted
    await expect(addPage.modal).toBeVisible();
  });

  test('should not submit when First Name is missing', async ({ page }) => {
    await listingsPage.addPatientBtn.click();
    await addPage.fillBasicOnly({ lastName: patient.lastName, email: patient.email });
    await addPage.submitBtn.click();

    await expect(addPage.modal).toBeVisible();
  });

  test('should not submit when Last Name is missing', async ({ page }) => {
    await listingsPage.addPatientBtn.click();
    await addPage.fillBasicOnly({ firstName: patient.firstName, email: patient.email });
    await addPage.submitBtn.click();

    await expect(addPage.modal).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 3. HAPPY PATH — ADD PATIENT
  // ══════════════════════════════════════════════════════════

  test('should add a new patient with all required fields and appear in listings', async ({ page }) => {
    await listingsPage.addPatientBtn.click();
    await expect(addPage.modal).toBeVisible();

    await addPage.fillForm(patient);

    await addPage.submit();

    // Modal closing confirms the form submitted successfully
    // (URL was already /patient before, so toHaveURL alone is not reliable here)
    await expect(addPage.modal).not.toBeVisible({ timeout: 30000 });

    // Newly added patient should appear in search
    await listingsPage.searchPatient(patient.lastName);
    await expect(page.getByText(patient.lastName).first()).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 4. VERIFY PATIENT
  // ══════════════════════════════════════════════════════════

  test('should verify the newly added patient', async ({ page }) => {
    // Find the patient added in the previous test
    await listingsPage.searchPatient(patient.lastName);
    await page.getByRole('link', { name: new RegExp(patient.lastName, 'i') }).first().click();

    // Wait for the profile tab nav to confirm the page has rendered
    await page.getByRole('link', { name: 'Patient Info' }).waitFor({ state: 'visible', timeout: 15000 });

    // Three-dots button — id="dropdown-basic" exists on the profile page too
    await page.locator('#dropdown-basic').first().waitFor({ state: 'visible', timeout: 10000 });
    await page.locator('#dropdown-basic').first().click();
    await page.locator('[data-rr-ui-dropdown-item]').filter({ hasText: 'Verify' }).waitFor({ state: 'visible', timeout: 5000 });
    await page.locator('[data-rr-ui-dropdown-item]').filter({ hasText: 'Verify' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();

    // Navigate back to listings and confirm the VERIFIED badge appears in the table
    await listingsPage.goto();
    await listingsPage.searchPatient(patient.lastName);
    await expect(page.getByText('VERIFIED').first()).toBeVisible({ timeout: 10000 });
  });

  // ══════════════════════════════════════════════════════════
  // 5. ADD PATIENT (MRN)
  // ══════════════════════════════════════════════════════════

  test.skip('should open MRN lookup when clicking Add Patient (MRN)', async ({ page }) => {
    await listingsPage.addPatientMRNBtn.click();
    await page.waitForLoadState('domcontentloaded');

    const isDialog = await page.locator('[role="dialog"]').isVisible().catch(() => false);
    const isNewUrl  = page.url().includes('mrn') || page.url().includes('add');
    expect(isDialog || isNewUrl).toBeTruthy();
  });

  test.skip('should show error for a non-existent MRN', async ({ page }) => {
    await listingsPage.addPatientMRNBtn.click();
    await page.waitForLoadState('domcontentloaded');

    const mrnField = page.getByRole('textbox').first();
    await mrnField.fill('INVALID_MRN_XXXXXX');
    await page.getByRole('button', { name: /search|find|lookup/i }).first().click();
    await page.waitForLoadState('domcontentloaded');

    await expect(
      page.getByText(/not found|does not exist|no patient/i).first()
    ).toBeVisible({ timeout: 10000 });
  });

});
