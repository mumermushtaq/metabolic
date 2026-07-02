# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> shows error when redeeming an already redeemed coupon
- Location: tests\e2e\coupons.spec.js:58:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Redeem Code' })
    - locator resolved to <button type="button" class="AddCoupon_couponTabButton__gdixh AddCoupon_couponTabPrimary__TeZGq">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is not visible
  - retrying click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img "sidebarLogoImg" [ref=e7]
        - generic:
          - img "sidebarLogoTxt"
      - generic [ref=e8]:
        - link "sidebarIcon2 Patients" [ref=e10] [cursor=pointer]:
          - /url: /patient
          - generic [ref=e11]:
            - img "sidebarIcon2" [ref=e12]
            - generic: Patients
        - link "sidebarIcon3 Chat" [ref=e14] [cursor=pointer]:
          - /url: /chat
          - generic [ref=e15]:
            - img "sidebarIcon3" [ref=e16]
            - generic: Chat
        - link "sidebarIcon4 Team" [ref=e18] [cursor=pointer]:
          - /url: /team
          - generic [ref=e19]:
            - img "sidebarIcon4" [ref=e20]
            - generic: Team
        - link "Survey" [ref=e22] [cursor=pointer]:
          - /url: /survey#templates
          - generic [ref=e23]:
            - img [ref=e24]
            - generic: Survey
        - link "Tasks" [ref=e27] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e28]:
            - img [ref=e29]
            - generic: Tasks
        - link "Coupons" [ref=e32] [cursor=pointer]:
          - /url: /coupon
          - generic [ref=e33]:
            - img [ref=e34]
            - generic: Coupons
    - generic [ref=e39]:
      - generic [ref=e41]:
        - link "Patients" [ref=e42] [cursor=pointer]:
          - /url: /patient
          - heading "Patients" [level=3] [ref=e43]
        - generic [ref=e44]:
          - img [ref=e45]
          - text: umer mushtaq
      - generic [ref=e48]:
        - generic [ref=e49]:
          - button "notification" [ref=e50] [cursor=pointer]:
            - img "notification" [ref=e51]
          - generic: "0"
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e59] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e60]
            - generic [ref=e61]: Admin • Diabetologist
    - generic [ref=e62]:
      - list [ref=e65]:
        - link "Patient Info" [ref=e66] [cursor=pointer]:
          - /url: /patient/profile/1705
          - listitem [ref=e67]: Patient Info
        - link "Visits" [ref=e68] [cursor=pointer]:
          - /url: /patient/profile/visits/1705
          - listitem [ref=e69]: Visits
        - link "Consent & Intake" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1705
          - listitem [ref=e71]: Consent & Intake
        - link "Health Info" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/health-info/1705
          - listitem [ref=e73]: Health Info
        - link "Documents" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1705
          - listitem [ref=e75]: Documents
        - link "BCA Scans" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1705
          - listitem [ref=e77]: BCA Scans
        - link "Glucose Analysis" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1705
          - listitem [ref=e79]: Glucose Analysis
        - link "Add Coupon" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1705
          - listitem [ref=e81]: Add Coupon
        - link "GLP-1 Protocol" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1705
          - listitem [ref=e83]: GLP-1 Protocol
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "Active Coupon" [level=3] [ref=e87]
          - paragraph [ref=e88]: MH-ZYY690
        - generic [ref=e90]:
          - heading "Coupon Actions" [level=3] [ref=e91]
          - generic [ref=e92]:
            - button "Generate New Coupon" [ref=e93] [cursor=pointer]:
              - img [ref=e94]
              - text: Generate New Coupon
            - button "Redeem Coupon" [ref=e96] [cursor=pointer]:
              - img [ref=e97]
              - text: Redeem Coupon
      - generic [ref=e99]:
        - generic [ref=e100]:
          - paragraph [ref=e102]: Chat
          - button "delete" [ref=e103] [cursor=pointer]:
            - img [ref=e104]
        - generic [ref=e108]:
          - paragraph [ref=e109] [cursor=pointer]: Metabolic
          - paragraph [ref=e110] [cursor=pointer]: Zone
  - alert [ref=e111]
```

# Test source

```ts
  1   | ﻿class CouponsPage {
  2   |   constructor(page) {
  3   |     this.page = page;
  4   | 
  5   |     // Add Coupon tab (patient profile)
  6   |     this.addCouponTab        = page.getByRole('link', { name: 'Add Coupon' });
  7   |     this.generateNewCouponBtn = page.getByRole('button', { name: 'Generate New Coupon' });
  8   |     this.redeemCouponBtn     = page.getByRole('button', { name: 'Redeem Coupon' });
  9   |     this.enterCouponCodeInput = page.getByRole('textbox', { name: 'Enter coupon code' });
  10  |     this.pinInput            = page.getByRole('textbox', { name: 'PIN' });
  11  |     this.redeemCodeBtn       = page.getByRole('button', { name: 'Redeem Code' });
  12  | 
  13  |     // Sidebar nav
  14  |     this.couponsSideNavLink   = page.getByRole('link', { name: 'Coupons' });
  15  |     this.patientsSideNavLink  = page.getByRole('link', { name: 'sidebarIcon2 Patients' });
  16  | 
  17  |     // Patient search (patients list page)
  18  |     this.patientSearchInput  = page.getByRole('textbox', { name: 'Search' });
  19  |   }
  20  | 
  21  |   // ── Navigate directly to a patient's Add Coupon tab ───────────
  22  |   async openPatientAddCouponTab(patientId) {
  23  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/add-coupon/${patientId}`);
  24  |     await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  25  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
  26  |       .waitFor({ state: 'visible', timeout: 15000 });
  27  |   }
  28  | 
  29  |   // ── Generate a new coupon and return the active coupon code ───
  30  |   // Codegen: click Generate New Coupon, then read the "Active Coupon" text above.
  31  |   // The code appears as a paragraph (e.g. "MH-YC9WK6") after generation.
  32  |   async generateNewCoupon() {
  33  |     await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
  34  |     await this.generateNewCouponBtn.click();
  35  | 
  36  |     // Poll until the active coupon code updates from placeholder to a real code
  37  |     let code = null;
  38  |     for (let attempt = 0; attempt < 30; attempt++) {
  39  |       // MH- prefix + 6 or 7 alphanumeric chars (Codegen showed MH-YC9WK6 = 7 chars)
  40  |       const codeEl = this.page.getByText(/^MH-[A-Z0-9]{6,7}$/).first();
  41  |       const text = await codeEl.textContent({ timeout: 2000 }).catch(() => null);
  42  |       if (text && !text.trim().includes('X')) {
  43  |         code = text.trim();
  44  |         break;
  45  |       }
  46  |       await this.page.waitForTimeout(1000);
  47  |     }
  48  | 
  49  |     if (!code) throw new Error('Coupon code did not load after 30s');
  50  |     return code;
  51  |   }
  52  | 
  53  |   // ── Navigate to Coupon List ───────────────────────────────────
  54  |   // Use goto instead of clicking the sidebar link — clicking the Coupons nav
  55  |   // while on a patient profile triggers an "Invalid patient id" error toast.
  56  |   async openCouponsList() {
  57  |     await this.page.goto(`${process.env.BASE_URL}/coupon`);
  58  |     await this.page.waitForURL('**/coupon', { timeout: 15000 });
  59  |     // Wait for at least one coupon row to appear
  60  |     await this.page.getByRole('cell', { name: /MH-[A-Z0-9]{6}/ }).first()
  61  |       .waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  62  |   }
  63  | 
  64  |   // ── Navigate back to patient's Add Coupon tab via patient search
  65  |   async goToPatientAddCoupon(patientName, patientCellText) {
  66  |     await this.patientsSideNavLink.click();
  67  |     await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  68  |     await this.patientSearchInput.fill(patientName);
  69  |     // Codegen: click the avatar cell which includes name + MRN
  70  |     await this.page.getByRole('cell', { name: new RegExp(patientCellText, 'i') }).click();
  71  |     await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  72  |     await this.addCouponTab.click();
  73  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
  74  |       .waitFor({ state: 'visible', timeout: 15000 });
  75  |   }
  76  | 
  77  |   // ── Redeem a coupon ───────────────────────────────────────────
  78  |   async redeemCoupon(couponCode, pin = '1234') {
  79  |     await this.redeemCouponBtn.click();
  80  |     await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
  81  |     await this.enterCouponCodeInput.click();
  82  |     await this.enterCouponCodeInput.fill(couponCode);
  83  |     await this.pinInput.click();
  84  |     await this.pinInput.fill(pin);
> 85  |     await this.redeemCodeBtn.click();
      |                              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  86  |     // Wait for success toast
  87  |     await this.page.getByText('Coupon redeemed successfully')
  88  |       .waitFor({ state: 'visible', timeout: 15000 });
  89  |   }
  90  | 
  91  |   // ── Get a coupon row from the list by coupon code ─────────────
  92  |   async getCouponRow(couponCode) {
  93  |     const row = this.page.getByRole('cell', { name: couponCode }).locator('..');
  94  |     await row.waitFor({ state: 'visible', timeout: 15000 });
  95  |     return row;
  96  |   }
  97  | 
  98  |   // ── Get status of a coupon from the list ─────────────────────
  99  |   // Codegen: status is in #cell-7-{rowId} — we find it via the coupon code cell
  100 |   async getCouponStatus(couponCode) {
  101 |     const codeCell = this.page.getByRole('cell', { name: couponCode });
  102 |     await codeCell.waitFor({ state: 'visible', timeout: 15000 });
  103 |     const row = this.page.getByRole('row').filter({ has: codeCell });
  104 |     const text = await row.textContent();
  105 |     if (/REDEEMED/i.test(text)) return 'REDEEMED';
  106 |     if (/OPEN/i.test(text)) return 'OPEN';
  107 |     return null;
  108 |   }
  109 | 
  110 |   // ── Get redeemed-by name from the coupon row ──────────────────
  111 |   async getCouponRedeemedBy(couponCode) {
  112 |     const codeCell = this.page.getByRole('cell', { name: couponCode });
  113 |     const row = this.page.getByRole('row').filter({ has: codeCell });
  114 |     const text = await row.textContent();
  115 |     // Redeemed by is a name — extract non-code, non-status, non-date text
  116 |     const match = text?.match(/[A-Z][a-z]+ [A-Z][a-z]+/);
  117 |     return match?.[0] ?? null;
  118 |   }
  119 | }
  120 | 
  121 | module.exports = { CouponsPage };
```