class CouponsPage {
  constructor(page) {
    this.page = page;

    this.addCouponTab = page.getByRole('link', { name: 'Add Coupon' });
    this.generateNewCouponBtn = page.getByRole('button', { name: 'Generate New Coupon' });
    this.redeemCouponBtn = page.getByRole('button', { name: 'Redeem Coupon' });
    this.enterCouponCodeInput = page.getByRole('textbox', { name: 'Enter coupon code' });
    this.pinInput = page.getByRole('textbox', { name: 'PIN' });
    this.redeemCodeBtn = page.getByRole('button', { name: 'Redeem Code' });

    this.couponsSideNavLink = page.getByRole('link', { name: 'Coupons' });
    this.patientsSideNavLink = page.getByRole('link', { name: 'sidebarIcon2 Patients' });
    this.couponSearchInput = page.getByRole('textbox', { name: 'Search with Patient Name or' });
    this.statusFilterBtn = page.getByRole('button', { name: /^(All|OPEN|REDEEMED|ACTIVE)$/ });
    this.openDatePickerBtn = page.getByRole('button', { name: 'Open date picker' });
    this.firstDateInput = page.locator('input[type="date"]').first();

    this.patientSearchInput = page.getByRole('textbox', { name: 'Search' });
  }

  async openPatientAddCouponTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/add-coupon/${patientId}`);
    await this.generateNewCouponBtn.or(this.redeemCouponBtn).first().waitFor({ state: 'visible', timeout: 15000 });
  }

  async generateNewCoupon() {
    await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.generateNewCouponBtn.click();
    await this.page.getByText(/Active Coupon|MH-/i).first().waitFor({ state: 'visible', timeout: 15000 });
  }

  async openCouponsList() {
    await this.couponsSideNavLink.click();
    await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  }

  async searchCouponsByPatient(patientName) {
    const responsePromise = this.page.waitForResponse(
      resp => resp.url().includes('/coupon') && resp.status() === 200,
      { timeout: 10000 }
    ).catch(() => {});

    await this.couponSearchInput.click();
    await this.couponSearchInput.fill(patientName);
    await this.couponSearchInput.press('Enter');
    await responsePromise;
  }

  async filterByStatus(statusName) {
    await this.statusFilterBtn.click();
    await this.page.getByRole('option', { name: statusName, exact: true }).click();
    await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  }

  async setDateFilter(dateString) {
    await this.openDatePickerBtn.click();
    await this.firstDateInput.fill(dateString);
    await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  }

  async getFirstCouponCodeFromList() {
    const rows = this.page.getByRole('row').filter({ hasText: /MH-[A-Z0-9]+/ });
    await rows.first().waitFor({ state: 'visible', timeout: 15000 });
    const text = await rows.first().textContent();
    const code = text?.match(/MH-[A-Z0-9]+/)?.[0];
    if (!code) throw new Error('No coupon code found in the coupon list');
    return code;
  }

  async getCouponStatus(couponCode) {
    const row = this.page.getByRole('row').filter({ hasText: couponCode }).first();
    await row.waitFor({ state: 'visible', timeout: 15000 });
    const text = await row.textContent();

    if (/REDEEMED/i.test(text)) return 'REDEEMED';
    if (/OPEN/i.test(text)) return 'OPEN';
    if (/ACTIVE/i.test(text)) return 'ACTIVE';
    return null;
  }

  async openPatientFromList(patientName) {
    await this.patientsSideNavLink.click();
    await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });

    const responsePromise = this.page.waitForResponse(
      resp => resp.url().includes('/patient') && resp.status() === 200,
      { timeout: 10000 }
    ).catch(() => {});

    await this.patientSearchInput.click();
    await this.patientSearchInput.fill(patientName);
    await this.patientSearchInput.press('Enter');
    await responsePromise;

    const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
    await patientLink.waitFor({ state: 'visible', timeout: 15000 });
    await patientLink.click();
  }

  async clickAddCouponTab() {
    await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.addCouponTab.click();
    await this.generateNewCouponBtn.or(this.redeemCouponBtn).first().waitFor({ state: 'visible', timeout: 15000 });
  }

  async redeemCoupon(couponCode, pin = '1234') {
    await this.redeemCouponBtn.click();
    await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.enterCouponCodeInput.click();
    await this.enterCouponCodeInput.fill(couponCode);
    await this.pinInput.click();
    await this.pinInput.fill(pin);
    await this.redeemCodeBtn.click();
  }

  async waitForRedeemResult() {
    await Promise.race([
      this.page.getByText(/redeemed/i).first().waitFor({ state: 'visible', timeout: 15000 }),
      this.page.getByText(/already redeemed|invalid|not valid|does not belong|different patient|error/i).first().waitFor({ state: 'visible', timeout: 15000 }),
      this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 15000 }),
    ]);
  }

  async expectRedeemError() {
    const error = this.page.getByText(/already redeemed|invalid|not valid|does not belong|different patient|error/i).first();
    await error.waitFor({ state: 'visible', timeout: 15000 });
    return error;
  }
}

module.exports = { CouponsPage };
