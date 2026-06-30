const { test, expect } = require('@playwright/test');
const { ConsentIntakePage } = require('../../pages/ConsentIntakePage');

const PATIENT_NAME = 'umer mushtaq';
const PATIENT_ID   = '1706'; // Direct navigation — avoids search state issues

// 2 months from today, day 15 — always a future date
const FUTURE_DATE = (() => {
  const d = new Date();
  d.setMonth(d.getMonth() + 2);
  return { year: d.getFullYear(), month: d.getMonth() + 1, day: 15 };
})();

const EPISODE_NUMBER = () => Date.now().toString().slice(-8);

// ── Shared setup ──────────────────────────────────────────────────────────────
// Handles: date, episode, minor guardian (if needed), patient type, visit type
// After this, Quick Assign button is enabled and co-signer buttons are all active
async function setupVisit(consentPage) {
  await consentPage.openPatientConsentTab(PATIENT_NAME, PATIENT_ID);
  await consentPage.setupVisit(
    FUTURE_DATE.year,
    FUTURE_DATE.month,
    FUTURE_DATE.day,
    EPISODE_NUMBER()
  );
}

test.describe('Consent & Intake', () => {

  test('navigates to Consent & Intake tab', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await consentPage.openPatientConsentTab(PATIENT_NAME, PATIENT_ID);
    await expect(consentPage.visitDateBtn).toBeVisible();
  });

  test('sets visit date and saves unique episode number', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await consentPage.openPatientConsentTab(PATIENT_NAME, PATIENT_ID);
    await consentPage.setVisitDate(FUTURE_DATE.year, FUTURE_DATE.month, FUTURE_DATE.day);
    await consentPage.setEpisodeNumber(EPISODE_NUMBER());

    const adultReady = await consentPage.patientTypeCombo.isVisible({ timeout: 5000 }).catch(() => false);
    const minorBlock = await consentPage.minorBanner.isVisible({ timeout: 5000 }).catch(() => false);
    expect(adultReady || minorBlock).toBe(true);
  });

  test('minor patient: shows guardian banner after episode save', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await consentPage.openPatientConsentTab(PATIENT_NAME, PATIENT_ID);
    await consentPage.setVisitDate(FUTURE_DATE.year, FUTURE_DATE.month, FUTURE_DATE.day);
    await consentPage.setEpisodeNumber(EPISODE_NUMBER());

    if (await consentPage.isMinorPatient()) {
      await expect(consentPage.minorBanner).toBeVisible();
    } else {
      test.skip();
    }
  });

  test('selects patient type', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await consentPage.openPatientConsentTab(PATIENT_NAME, PATIENT_ID);
    await consentPage.setVisitDate(FUTURE_DATE.year, FUTURE_DATE.month, FUTURE_DATE.day);
    await consentPage.setEpisodeNumber(EPISODE_NUMBER());
    if (await consentPage.isMinorPatient()) {
      await consentPage.editParentGuardian('Test Guardian');
      await consentPage.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
    }
    await consentPage.selectPatientType('Diabetic Female');
    await expect(consentPage.patientTypeCombo).toBeVisible();
  });

  test('selects visit type', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await consentPage.openPatientConsentTab(PATIENT_NAME, PATIENT_ID);
    await consentPage.setVisitDate(FUTURE_DATE.year, FUTURE_DATE.month, FUTURE_DATE.day);
    await consentPage.setEpisodeNumber(EPISODE_NUMBER());
    if (await consentPage.isMinorPatient()) {
      await consentPage.editParentGuardian('Test Guardian');
      await consentPage.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 });
    }
    await consentPage.selectPatientType('Diabetic Female');
    await consentPage.selectVisitType('Baseline');
    await expect(consentPage.visitTypeCombo).toBeVisible();
  });

  test.skip('quick assigns a doctor', async ({ page }) => {
    // Skipped — doctor is pre-assigned on this patient; revisit when edit dialog flow is stable
    const consentPage = new ConsentIntakePage(page);
    await setupVisit(consentPage);
    await consentPage.addOrEditDoctor('Umer Mushtaq');
    await expect(consentPage.editDoctorBtn).toBeVisible();
  });

  test.skip('quick assigns a witness', async ({ page }) => {
    // Skipped — witness is pre-assigned on this patient; revisit when edit dialog flow is stable
    const consentPage = new ConsentIntakePage(page);
    await setupVisit(consentPage);
    await consentPage.addOrEditWitness('M L');
    await expect(consentPage.editWitnessBtn).toBeVisible();
  });

  test('edits parent/guardian co-signer', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await setupVisit(consentPage);
    // editParentGuardian handles both Add and Edit states automatically
    await consentPage.editParentGuardian(`Guardian ${Date.now()}`);
    await expect(consentPage.editParentGuardianBtn).toBeVisible();
  });

  test('edits interpreter details', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await setupVisit(consentPage);
    // editInterpreter handles both Add and Edit states automatically
    await consentPage.editInterpreter('Test Interpreter', 'Spanish');
    await expect(consentPage.copySecureLinkBtn).toBeVisible();
  });

  test('copy secure link button is visible', async ({ page }) => {
    const consentPage = new ConsentIntakePage(page);
    await setupVisit(consentPage);
    await expect(consentPage.copySecureLinkBtn).toBeVisible();
  });

});