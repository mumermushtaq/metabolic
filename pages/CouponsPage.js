class CouponsPage {
  constructor(page) {
    this.page = page;

    // Add Coupon tab (patient profile)
    this.addCouponTab        = page.getByRole('link', { name: 'Add Coupon' });
    this.generateNewCouponBtn = page.getByRole('button', { name: 'Generate New Coupon' });
    this.redeemCouponBtn     = page.getByRole('button', { name: 'Redeem Coupon' });
    this.enterCouponCodeInput = page.getByRole('textbox', { name: 'Enter coupon code' });
    this.pinInput            = page.getByRole('textbox', { name: 'PIN' });
    this.redeemCodeBtn       = page.getByRole('button', { name: 'Redeem Code' });

    // Sidebar nav
    this.couponsSideNavLink   = page.getByRole('link', { name: 'Coupons' });
    this.patientsSideNavLink  = page.getByRole('link', { name: 'sidebarIcon2 Patients' });

    // Patient search (patients list page)
    this.patientSearchInput  = page.getByRole('textbox', { name: 'Search' });
  }

  // ── Navigate directly to a patient's Add Coupon tab ───────────
  async openPatientAddCouponTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/add-coupon/${patientId}`);
    await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
      .waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Generate a new coupon and return the active coupon code ───
  // Codegen: click Generate New Coupon, then read the "Active Coupon" text above.
  // The code appears as a paragraph (e.g. "MH-YC9WK6") after generation.
  async generateNewCoupon() {
    await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });

    // Read the current active coupon code BEFORE clicking generate
    // so we can detect when it changes to a new one
    const codeEl = this.page.getByText(/^MH-[A-Z0-9]{6,7}$/).first();
    const previousCode = await codeEl.textContent({ timeout: 2000 }).catch(() => null);

    await this.generateNewCouponBtn.click();

    // Poll until the active coupon code changes to a NEW code
    let code = null;
    for (let attempt = 0; attempt < 30; attempt++) {
      const text = await codeEl.textContent({ timeout: 2000 }).catch(() => null);
      const trimmed = text?.trim();
      if (trimmed && !trimmed.includes('X') && trimmed !== previousCode) {
        code = trimmed;
        break;
      }
      await this.page.waitForTimeout(1000);
    }

    if (!code) throw new Error('Coupon code did not change after 30s — generation may have failed');
    return code;
  }

  // ── Navigate to Coupon List ───────────────────────────────────
  // Use goto instead of clicking the sidebar link — clicking the Coupons nav
  // while on a patient profile triggers an "Invalid patient id" error toast.
  async openCouponsList() {
    await this.page.goto(`${process.env.BASE_URL}/coupon`);
    await this.page.waitForURL('**/coupon', { timeout: 15000 });
    // Wait for at least one coupon row to appear
    await this.page.getByRole('cell', { name: /MH-[A-Z0-9]{6}/ }).first()
      .waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  }

  // ── Navigate back to patient's Add Coupon tab directly by ID ──
  // Using goto is simpler and more reliable than searching through the patient list
  async goToPatientAddCoupon(patientId) {
    await this.openPatientAddCouponTab(patientId);
  }

  // ── Redeem a coupon ───────────────────────────────────────────
  async redeemCoupon(couponCode, pin = '1234') {
    await this.redeemCouponBtn.click();
    await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.enterCouponCodeInput.click();
    await this.enterCouponCodeInput.fill(couponCode);
    // Wait for dialog to stabilize after code entry — Redeem Code button detaches briefly
    await this.pinInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.pinInput.click();
    await this.pinInput.fill(pin);
    await this.redeemCodeBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.redeemCodeBtn.click();
    // Wait for success toast
    await this.page.getByText('Coupon redeemed successfully')
      .waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Get a coupon row from the list by coupon code ─────────────
  async getCouponRow(couponCode) {
    const row = this.page.getByRole('cell', { name: couponCode }).locator('..');
    await row.waitFor({ state: 'visible', timeout: 15000 });
    return row;
  }

  // ── Get status of a coupon from the list ─────────────────────
  // Codegen: status is in #cell-7-{rowId} — we find it via the coupon code cell
  async getCouponStatus(couponCode) {
    const codeCell = this.page.getByRole('cell', { name: couponCode });
    await codeCell.waitFor({ state: 'visible', timeout: 15000 });
    const row = this.page.getByRole('row').filter({ has: codeCell });
    const text = await row.textContent();
    if (/REDEEMED/i.test(text)) return 'REDEEMED';
    if (/OPEN/i.test(text)) return 'OPEN';
    return null;
  }

  // ── Get redeemed-by name from the coupon row ──────────────────
  async getCouponRedeemedBy(couponCode) {
    const codeCell = this.page.getByRole('cell', { name: couponCode });
    const row = this.page.getByRole('row').filter({ has: codeCell });
    const text = await row.textContent();
    // Redeemed by is a name — extract non-code, non-status, non-date text
    const match = text?.match(/[A-Z][a-z]+ [A-Z][a-z]+/);
    return match?.[0] ?? null;
  }
}

module.exports = { CouponsPage };