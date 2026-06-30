class CouponPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ────────────────────────────────────────────────
    this.addCouponTab   = page.getByRole('link', { name: 'Add Coupon' });
    // Use sidebar img-based link for Coupons — text varies by page context
    this.couponsMenuBtn  = page.locator('a[href="/coupon"]').first();
    this.patientsMenuBtn = page.locator('a[href="/patient"]').first();

    // ── Add Coupon tab ────────────────────────────────────────────
    this.generateNewCouponBtn = page.getByRole('button', { name: 'Generate New Coupon' });
    this.redeemCouponBtn      = page.getByRole('button', { name: 'Redeem Coupon' });
    this.couponCodeInput      = page.getByRole('textbox', { name: 'Enter coupon code' });
    this.pinInput             = page.getByRole('textbox', { name: 'PIN' });
    this.redeemCodeBtn        = page.getByRole('button', { name: 'Redeem Code' });

    // ── Coupon list page ──────────────────────────────────────────
    this.couponSearchInput  = page.getByRole('textbox', { name: 'Search with Patient Name or' });
    this.statusFilterBtn    = page.getByRole('button', { name: 'All' });
    this.datepickerBtn      = page.getByRole('button', { name: 'Open date picker' });
    this.dateFromInput      = page.locator('input[type="date"]').first();
  }

  // ── Navigate to Add Coupon tab for a patient ──────────────────
  async openAddCouponTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/add-coupon/${patientId}`);
    await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Generate a new coupon and return the coupon code ─────────
  async generateCoupon() {
    await this.generateNewCouponBtn.click();
    await this.page.waitForTimeout(1500);
    // Coupon code appears as a heading or strong text matching MH-XXXXXX
    const couponLocator = this.page.locator('h1,h2,h3,h4,h5,h6,strong,b,[class*="coupon"],[class*="Coupon"],[class*="code"],[class*="Code"]')
      .filter({ hasText: /^MH-[A-Z0-9]{6}$/ })
      .first();
    const code = await couponLocator.textContent({ timeout: 8000 }).catch(() => null);
    if (code) return code.trim();
    // Fallback: any element with exact MH- pattern
    const fallback = await this.page.locator('*').filter({ hasText: /^MH-[A-Z0-9]{6}$/ }).first()
      .textContent({ timeout: 5000 }).catch(() => null);
    return fallback ? fallback.trim() : null;
  }

  // ── Navigate to Coupons list page ─────────────────────────────
  async openCouponsList() {
    await this.page.goto(`${process.env.BASE_URL}/coupon`);
    await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Search coupons by patient name ────────────────────────────
  async searchByPatient(patientName) {
    await this.couponSearchInput.click();
    await this.couponSearchInput.fill(patientName);
    await this.couponSearchInput.press('Enter');
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  // ── Filter coupons by status ──────────────────────────────────
  async filterByStatus(status) {
    await this.statusFilterBtn.click();
    await this.page.getByRole('option', { name: status }).click();
    await this.page.waitForTimeout(500);
  }

  // ── Set date filter to today ──────────────────────────────────
  async setDateToToday() {
    await this.datepickerBtn.click();
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    await this.dateFromInput.fill(today);
    await this.page.waitForTimeout(500);
  }

  // ── Get the status of a coupon code from the list ────────────
  async getCouponStatus(couponCode) {
    // Find the cell containing the exact coupon code
    const codeCell = this.page.getByRole('cell', { name: couponCode, exact: true });
    const visible = await codeCell.isVisible({ timeout: 8000 }).catch(() => false);
    if (!visible) return null;
    // Status cell is the next sibling td — get the row and find Status cell
    const row = this.page.locator('tr').filter({ hasText: couponCode }).first();
    const cells = row.locator('td');
    const statusText = await cells.nth(3).textContent({ timeout: 3000 }).catch(() => null);
    return statusText ? statusText.trim() : null;
  }

  // ── Get coupon code from list by clicking the cell ────────────
  async getCouponCodeFromCell(rowIndex = 0) {
    // Get the Coupon Code cell (3rd column, index 2) from the specified row
    const rows = this.page.locator('tbody tr');
    const row = rows.nth(rowIndex);
    const codeCell = row.locator('td').nth(2);
    return codeCell.textContent({ timeout: 5000 }).then(t => t.trim()).catch(() => null);
  }

  // ── Get the first coupon code visible in the list ────────────
  async getFirstCouponCode() {
    const couponCell = this.page
      .locator('td, [role="cell"]')
      .filter({ hasText: /^MH-[A-Z0-9]+$/ })
      .first();
    return couponCell.textContent({ timeout: 5000 }).catch(() => null);
  }

  // ── Copy coupon code from list (right-click confirmed in Codegen) ──
  async getCouponCodeFromList(couponCode) {
    const cell = this.page.getByText(couponCode).first();
    await cell.waitFor({ state: 'visible', timeout: 5000 });
    return (await cell.textContent()).trim();
  }

  // ── Redeem a coupon on a patient profile ─────────────────────
  // Returns the result message after redeeming
  async redeemCoupon(couponCode, pin = '1234') {
    await this.redeemCouponBtn.click();
    await this.couponCodeInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.couponCodeInput.fill(couponCode);
    await this.pinInput.fill(pin);
    await this.redeemCodeBtn.click();
    // Wait for success/error response
    await this.page.waitForTimeout(1500);
    // Capture any alert/toast/message shown after redeeming
    const message = await this.page
      .locator('[role="alert"], .toast, [class*="alert"], [class*="Alert"], [class*="error"], [class*="success"]')
      .first()
      .textContent({ timeout: 5000 })
      .catch(() => null);
    return message ? message.trim() : null;
  }

  // ── Navigate to patient profile via search ────────────────────
  async openPatientProfile(patientName, patientLinkText) {
    await this.patientsMenuBtn.click();
    const search = this.page.getByRole('textbox', { name: 'Search' });
    await search.click();
    await search.fill(patientName);
    await search.press('Enter');
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await this.page.getByRole('link', { name: new RegExp(patientLinkText, 'i') }).first().click();
  }
}

module.exports = { CouponPage };