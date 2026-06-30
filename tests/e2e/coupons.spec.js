const { test, expect } = require('@playwright/test');
const { CouponsPage } = require('../../pages/CouponsPage');

const PATIENT_NAME = 'umer mushtaq';
const PATIENT_ID = '1706';
const PIN = '1234';

function todayIso() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

async function generateCouponForPatient(page) {
  const couponsPage = new CouponsPage(page);
  await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  const couponCode = await couponsPage.generateNewCoupon();
  expect(couponCode).toMatch(/^MH-[A-Z0-9]+$/);
  return { couponsPage, couponCode };
}

async function findCouponInList(couponsPage, couponCode, status = 'OPEN') {
  await couponsPage.openCouponsList();
  await couponsPage.searchCouponsByPatient(PATIENT_NAME);
  await couponsPage.filterByStatus(status);
  await couponsPage.setDateFilter(todayIso());
  await expect(couponsPage.page.getByText(couponCode).first()).toBeVisible({ timeout: 15000 });
}

test.describe('Coupons', () => {
  test('generates a coupon from patient profile, redeems it for same patient, and verifies redeemed status', async ({ page }) => {
    const { couponsPage, couponCode } = await generateCouponForPatient(page);

    await findCouponInList(couponsPage, couponCode, 'OPEN');
    const initialStatus = await couponsPage.getCouponStatus(couponCode);
    expect(initialStatus).toBe('ACTIVE');

    await couponsPage.openPatientFromList(PATIENT_NAME);
    await couponsPage.clickAddCouponTab();
    await couponsPage.redeemCoupon(couponCode, PIN);
    await couponsPage.expectRedeemSettled();

    await couponsPage.openCouponsList();
    await couponsPage.searchCouponsByPatient(PATIENT_NAME);
    await couponsPage.filterByStatus('REDEEMED');
    await couponsPage.setDateFilter(todayIso());
    await expect(page.getByText(couponCode).first()).toBeVisible({ timeout: 15000 });
    expect(await couponsPage.getCouponStatus(couponCode)).toBe('REDEEMED');
  });

  test('shows an error when redeeming an already redeemed coupon', async ({ page }) => {
    const { couponsPage, couponCode } = await generateCouponForPatient(page);

    await couponsPage.redeemCoupon(couponCode, PIN);
    await couponsPage.expectRedeemSettled();

    await couponsPage.redeemCoupon(couponCode, PIN);
    await expect(await couponsPage.expectRedeemError()).toBeVisible();
  });

  test('does not redeem a coupon generated for a different profile', async ({ page }) => {
    const otherPatientId = process.env.OTHER_PATIENT_ID;
    if (!otherPatientId) {
      test.skip(true, 'Set OTHER_PATIENT_ID to verify wrong-profile coupon redemption.');
    }

    const { couponsPage, couponCode } = await generateCouponForPatient(page);

    await couponsPage.openPatientAddCouponTab(otherPatientId);
    await couponsPage.redeemCoupon(couponCode, PIN);
    await expect(await couponsPage.expectRedeemError()).toBeVisible();
  });
});
