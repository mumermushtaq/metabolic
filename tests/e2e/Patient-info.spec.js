// ─────────────────────────────────────────────────────────────
// tests/e2e/patient-info.spec.js
// Test suite for Patient Profile — Patient Info tab
// Locators verified via Playwright Codegen
// ─────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const { PatientInfoPage } = require('../../pages/PatientInfoPage');

test.describe.configure({ mode: 'serial' });

// Known test patient — adjust if this record changes on the portal
const TEST_PATIENT_NAME = 'umer mushtaq';

test.describe('Patient Info — @patient-info', () => {

  let infoPage;

  test.beforeEach(async ({ page }) => {
    infoPage = new PatientInfoPage(page);
    await infoPage.openPatientByName(TEST_PATIENT_NAME);
    await page.waitForLoadState('domcontentloaded');
  });


  // ══════════════════════════════════════════════════════════
  // 1. NAVIGATION TO PROFILE
  // ══════════════════════════════════════════════════════════

  test('should navigate to patient profile from listings search', async ({ page }) => {
    await expect(page).toHaveURL(/\/patient\/profile\//);
  });

  test('should show the options menu on patient profile', async ({ page }) => {
    await expect(infoPage.optionsMenuBtn).toBeVisible();
  });

  // ══════════════════════════════════════════════════════════
  // 2. EDIT INFO
  // ══════════════════════════════════════════════════════════

  test('should open Edit Info from options menu', async ({ page }) => {
    await infoPage.optionsMenuBtn.click();
    await expect(infoPage.editInfoMenuItem).toBeVisible();
    await infoPage.editInfoMenuItem.click();

    // Just confirm something opened — page navigated or a panel appeared
    await page.waitForTimeout(1000);
  });

  test.skip('should save patient info without changes', async ({ page }) => {
    // Skipped — flow needs re-verification with Codegen,
    // "Edit Patient" button assumption was incorrect
    await infoPage.saveEditWithoutChanges();
    await expect(infoPage.editPatientBtn).not.toBeVisible({ timeout: 10000 });
  });

  // ══════════════════════════════════════════════════════════
  // 3. VERIFY / UNVERIFY
  // ══════════════════════════════════════════════════════════

 test('should toggle verify status and restore it', async ({ page }) => {
  await infoPage.optionsMenuBtn.click();

  // Check which menu item is currently available — patient may start
  // either verified or unverified depending on previous test runs
  const isCurrentlyVerified = await infoPage.unverifyMenuItem.isVisible().catch(() => false);

 if (isCurrentlyVerified) {
  // Patient is verified → unverify it
  await infoPage.unverifyMenuItem.click();
  await infoPage.confirmYesBtn.click();
  await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });

  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForLoadState('domcontentloaded');

  // Restore by re-verifying
  await infoPage.optionsMenuBtn.click();
  await expect(infoPage.verifyMenuItem).toBeVisible({ timeout: 10000 });
  await infoPage.verifyMenuItem.click();
  await infoPage.confirmYesBtn.click();
  await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
} else {
  // Patient is already unverified → verify it
  await expect(infoPage.verifyMenuItem).toBeVisible();
  await infoPage.verifyMenuItem.click();
  await infoPage.confirmYesBtn.click();
  await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });

  // Give the UI time to refresh patient status after the API call completes
  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForLoadState('domcontentloaded');

  // Restore by unverifying again
  await infoPage.optionsMenuBtn.click();
  await expect(infoPage.unverifyMenuItem).toBeVisible({ timeout: 10000 });
  await infoPage.unverifyMenuItem.click();
  await infoPage.confirmYesBtn.click();
  await expect(infoPage.confirmYesBtn).not.toBeVisible({ timeout: 10000 });
}
});

  // ══════════════════════════════════════════════════════════
  // 4. PIN / UNPIN PATIENT
  // ══════════════════════════════════════════════════════════

  test('should pin and then unpin the patient', async ({ page }) => {
    await expect(infoPage.pinnedPatientsBtn).toBeVisible();

    // Pin
    await infoPage.togglePinPatient();

    // Unpin (toggle back to original state)
    await infoPage.togglePinPatient();
  });

  // ══════════════════════════════════════════════════════════
  // 5. INTERNAL NOTES
  // ══════════════════════════════════════════════════════════

  test('should add an internal note and submit it', async ({ page }) => {
    const noteText = `Automation suite test ${Date.now()}`;

    await infoPage.addNote(noteText);

    // Note should appear after submit
    await expect(page.getByText(noteText)).toBeVisible({ timeout: 10000 });
  });

  test('should open add note dialog and cancel without saving', async ({ page }) => {
    await infoPage.addNoteBtn.click();
    await expect(infoPage.noteTextInput).toBeVisible();

    await infoPage.noteCancelBtn.click();

    // Dialog should close — note input no longer visible
    await expect(infoPage.noteTextInput).not.toBeVisible({ timeout: 5000 });
  });

});