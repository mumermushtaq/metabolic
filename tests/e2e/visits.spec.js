const { test, expect } = require('@playwright/test');
const { VisitsPage } = require('../../pages/VisitsPage');

const PATIENT_ID      = '1402';
const ACTIVE_VISIT_ID = '371050';
const PAST_VISIT_ID   = '282539';

test.describe('Visits', () => {

  test('navigates to Visits tab', async ({ page }) => {
    const visitsPage = new VisitsPage(page);
    await visitsPage.openVisitsTab(PATIENT_ID);
    await expect(visitsPage.visitsTab).toBeVisible();
  });

  test('visits tab shows visit cards and Start Consultation links', async ({ page }) => {
    const visitsPage = new VisitsPage(page);
    await visitsPage.openVisitsTab(PATIENT_ID);

    const links = page.getByRole('link', { name: 'Start Consultation' });
    const count = await links.count();
    console.log('Start Consultation links:', count);
    expect(count).toBeGreaterThan(0);
  });

  test('opens a visit popup and clicks Begin Consultation', async ({ page }) => {
    const visitsPage = new VisitsPage(page);
    await visitsPage.openVisitsTab(PATIENT_ID);

    const visitPopup = await visitsPage.openVisitByIndex(0);
    await visitsPage.beginConsultation(visitPopup);

    const startBtn = visitPopup.getByRole('button', { name: 'Start Review' });
    await expect(startBtn).toBeVisible();

    await visitPopup.close();
  });

  test('opens consultation, starts review and navigates through steps', async ({ page }) => {
    const visitsPage = new VisitsPage(page);
    await visitsPage.openVisitsTab(PATIENT_ID);

    const visitPopup = await visitsPage.openVisitByIndex(0);
    await visitsPage.beginConsultation(visitPopup);
    await visitsPage.startReview(visitPopup);

    const steps = await visitsPage.clickNextUntilEnd(visitPopup);
    console.log('Steps completed:', steps);
    expect(steps).toBeGreaterThan(0);

    await visitPopup.close();
  });

  test('opens a specific active visit directly by URL', async ({ page }) => {
    const visitsPage = new VisitsPage(page);
    await visitsPage.openVisitsTab(PATIENT_ID);

    // Open any popup first, then navigate directly to the known visit
    const visitPopup = await visitsPage.openVisitByIndex(0);
    await visitsPage.openVisitDirect(visitPopup, PATIENT_ID, ACTIVE_VISIT_ID);
    await visitsPage.beginConsultation(visitPopup);

    const startBtn = visitPopup.getByRole('button', { name: 'Start Review' });
    await expect(startBtn).toBeVisible();

    await visitPopup.close();
  });

  test('opens a past visit directly by URL', async ({ page }) => {
    const visitsPage = new VisitsPage(page);
    await visitsPage.openVisitsTab(PATIENT_ID);

    const visitPopup = await visitsPage.openVisitByIndex(0);
    await visitsPage.openVisitDirect(visitPopup, PATIENT_ID, PAST_VISIT_ID);
    await visitsPage.beginConsultation(visitPopup);
    await visitsPage.startReview(visitPopup);

    const steps = await visitsPage.clickNextUntilEnd(visitPopup);
    console.log('Past visit steps:', steps);
    expect(steps).toBeGreaterThan(0);

    await visitPopup.close();
  });

});