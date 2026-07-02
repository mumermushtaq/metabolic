const { test, expect } = require('@playwright/test');
const { CouponsPage } = require('../../pages/CouponsPage');

// Patient: Umer Mushtaq, MRN405, patient ID 1705
const PATIENT_ID        = '1705';
const PATIENT_NAME      = 'Umer Mushtaq';
const PATIENT_CELL_TEXT = 'avatar Umer Mushtaq MRN405';
const PIN               = '1234';

test.describe('Coupons', () => {

  test('generates a coupon and verifies it appears in the list as OPEN', async ({ page }) => {
    const couponsPage = new CouponsPage(page);

    // Step 1: Go to Add Coupon tab and generate
    await couponsPage.openPatientAddCouponTab(PATIENT_ID);
    const code = await couponsPage.generateNewCoupon();
    expect(code).toMatch(/^MH-[A-Z0-9]{6}$/);
    console.log('Generated:', code);

    // Step 2: Go to Coupon List and verify the code is listed as OPEN
    await couponsPage.openCouponsList();
    const status = await couponsPage.getCouponStatus(code);
    console.log('Status:', status);
    expect(status).toBe('OPEN');
  });

  test('redeems a coupon and verifies REDEEMED status with redeemed-by name', async ({ page }) => {
    const couponsPage = new CouponsPage(page);

    // Step 1: Generate coupon
    await couponsPage.openPatientAddCouponTab(PATIENT_ID);
    const code = await couponsPage.generateNewCoupon();
    expect(code).toMatch(/^MH-[A-Z0-9]{6}$/);
    console.log('Generated:', code);

    // Step 2: Go to Coupon List — verify OPEN
    await couponsPage.openCouponsList();
    const statusBefore = await couponsPage.getCouponStatus(code);
    console.log('Status before redeem:', statusBefore);
    expect(statusBefore).toBe('OPEN');

    // Step 3: Go back to patient Add Coupon tab and redeem
    await couponsPage.goToPatientAddCoupon(PATIENT_ID);
    await couponsPage.redeemCoupon(code, PIN);

    // Step 4: Go to Coupon List — verify REDEEMED and redeemed-by is filled
    await couponsPage.openCouponsList();
    const statusAfter = await couponsPage.getCouponStatus(code);
    console.log('Status after redeem:', statusAfter);
    expect(statusAfter).toBe('REDEEMED');

    const redeemedBy = await couponsPage.getCouponRedeemedBy(code);
    console.log('Redeemed by:', redeemedBy);
    expect(redeemedBy).toBeTruthy();
  });

  test('shows error when redeeming an already redeemed coupon', async ({ page }) => {
    const couponsPage = new CouponsPage(page);

    // Generate and redeem once
    await couponsPage.openPatientAddCouponTab(PATIENT_ID);
    const code = await couponsPage.generateNewCoupon();
    await couponsPage.redeemCoupon(code, PIN);

    // Try to redeem again — should show error
    await couponsPage.openPatientAddCouponTab(PATIENT_ID);
    await couponsPage.redeemCouponBtn.click();
    await couponsPage.enterCouponCodeInput.fill(code);
    await couponsPage.pinInput.fill(PIN);
    await couponsPage.redeemCodeBtn.click();

    const error = page.getByText(/already redeemed|invalid|not valid|error/i).first();
    await expect(error).toBeVisible({ timeout: 10000 });
  });

});