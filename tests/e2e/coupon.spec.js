const { test, expect } = require('@playwright/test');
const { CouponPage } = require('../../pages/CouponPage');

const PATIENT_ID   = '1705';
const PATIENT_NAME = 'umer mushtaq';
const PIN          = '1234';

test.describe('Add Coupon', () => {

  test('navigates to Add Coupon tab', async ({ page }) => {
    const couponPage = new CouponPage(page);
    await couponPage.openAddCouponTab(PATIENT_ID);
    await expect(couponPage.generateNewCouponBtn).toBeVisible();
  });

  test('generates a new coupon', async ({ page }) => {
    const couponPage = new CouponPage(page);
    await couponPage.openAddCouponTab(PATIENT_ID);
    const code = await couponPage.generateCoupon();
    console.log('Generated:', code);
    expect(code).toMatch(/MH-[A-Z0-9]+/);
  });

  test('searches patient coupons and filters by OPEN status', async ({ page }) => {
    const couponPage = new CouponPage(page);
    await couponPage.openCouponsList();
    await couponPage.searchByPatient(PATIENT_NAME);
    await couponPage.filterByStatus('OPEN');
    await expect(couponPage.couponSearchInput).toBeVisible();
  });

  test('full flow: generate coupon, verify OPEN, redeem, verify REDEEMED', async ({ page }) => {
    const couponPage = new CouponPage(page);

    // Step 1: Generate coupon
    await couponPage.openAddCouponTab(PATIENT_ID);
    const code = await couponPage.generateCoupon();
    expect(code).toMatch(/MH-[A-Z0-9]+/);
    console.log('Generated:', code);

    // Step 2: Verify OPEN in coupon list
    await couponPage.openCouponsList();
    await couponPage.searchByPatient(PATIENT_NAME);
    const openStatus = await couponPage.getCouponStatus(code);
    console.log('Status before redeem:', openStatus);
    expect(openStatus).toMatch(/OPEN/i);

    // Step 3: Redeem on same patient
    await couponPage.openAddCouponTab(PATIENT_ID);
    const msg = await couponPage.redeemCoupon(code, PIN);
    console.log('Redeem result:', msg);
    expect(msg).toMatch(/redeemed successfully|success/i);

    // Step 4: Verify REDEEMED in list
    await couponPage.openCouponsList();
    await couponPage.searchByPatient(PATIENT_NAME);
    const redeemedStatus = await couponPage.getCouponStatus(code);
    console.log('Status after redeem:', redeemedStatus);
    expect(redeemedStatus).toMatch(/REDEEMED/i);
  });

});