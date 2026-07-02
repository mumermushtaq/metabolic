# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> generates a coupon and verifies it appears in the list as OPEN
- Location: tests\e2e\coupons.spec.js:12:3

# Error details

```
Error: Coupon code did not load after 30s
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - paragraph [ref=e88]: MH-XXXXXX
        - generic [ref=e90]:
          - heading "Coupon Actions" [level=3] [ref=e91]
          - generic [ref=e92]:
            - button "Generate New Coupon" [active] [ref=e93] [cursor=pointer]:
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
  24  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
  25  |       .waitFor({ state: 'visible', timeout: 15000 });
  26  |   }
  27  | 
  28  |   // ── Generate a new coupon and return the active coupon code ───
  29  |   // Codegen: click Generate New Coupon, then read the "Active Coupon" text above.
  30  |   // The code appears as a paragraph (e.g. "MH-YC9WK6") after generation.
  31  |   async generateNewCoupon() {
  32  |     await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
  33  |     await this.generateNewCouponBtn.click();
  34  | 
  35  |     // Poll until the active coupon code updates from placeholder to a real code
  36  |     let code = null;
  37  |     for (let attempt = 0; attempt < 30; attempt++) {
  38  |       const codeEl = this.page.getByText(/^MH-[A-Z0-9]{6}$/).first();
  39  |       const text = await codeEl.textContent({ timeout: 2000 }).catch(() => null);
  40  |       if (text && text.trim() !== 'MH-XXXXXX') {
  41  |         code = text.trim();
  42  |         break;
  43  |       }
  44  |       await this.page.waitForTimeout(1000);
  45  |     }
  46  | 
> 47  |     if (!code) throw new Error('Coupon code did not load after 30s');
      |                      ^ Error: Coupon code did not load after 30s
  48  |     return code;
  49  |   }
  50  | 
  51  |   // ── Navigate to Coupon List via sidebar ───────────────────────
  52  |   async openCouponsList() {
  53  |     await this.couponsSideNavLink.click();
  54  |     // Wait for the coupon list table to load
  55  |     await this.page.getByRole('cell', { name: /MH-[A-Z0-9]{6}/ }).first()
  56  |       .waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  57  |   }
  58  | 
  59  |   // ── Navigate back to patient's Add Coupon tab via patient search
  60  |   async goToPatientAddCoupon(patientName, patientCellText) {
  61  |     await this.patientsSideNavLink.click();
  62  |     await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  63  |     await this.patientSearchInput.fill(patientName);
  64  |     // Codegen: click the avatar cell which includes name + MRN
  65  |     await this.page.getByRole('cell', { name: new RegExp(patientCellText, 'i') }).click();
  66  |     await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  67  |     await this.addCouponTab.click();
  68  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first()
  69  |       .waitFor({ state: 'visible', timeout: 15000 });
  70  |   }
  71  | 
  72  |   // ── Redeem a coupon ───────────────────────────────────────────
  73  |   async redeemCoupon(couponCode, pin = '1234') {
  74  |     await this.redeemCouponBtn.click();
  75  |     await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
  76  |     await this.enterCouponCodeInput.click();
  77  |     await this.enterCouponCodeInput.fill(couponCode);
  78  |     await this.pinInput.click();
  79  |     await this.pinInput.fill(pin);
  80  |     await this.redeemCodeBtn.click();
  81  |     // Wait for success toast
  82  |     await this.page.getByText('Coupon redeemed successfully')
  83  |       .waitFor({ state: 'visible', timeout: 15000 });
  84  |   }
  85  | 
  86  |   // ── Get a coupon row from the list by coupon code ─────────────
  87  |   async getCouponRow(couponCode) {
  88  |     const row = this.page.getByRole('cell', { name: couponCode }).locator('..');
  89  |     await row.waitFor({ state: 'visible', timeout: 15000 });
  90  |     return row;
  91  |   }
  92  | 
  93  |   // ── Get status of a coupon from the list ─────────────────────
  94  |   // Codegen: status is in #cell-7-{rowId} — we find it via the coupon code cell
  95  |   async getCouponStatus(couponCode) {
  96  |     const codeCell = this.page.getByRole('cell', { name: couponCode });
  97  |     await codeCell.waitFor({ state: 'visible', timeout: 15000 });
  98  |     const row = this.page.getByRole('row').filter({ has: codeCell });
  99  |     const text = await row.textContent();
  100 |     if (/REDEEMED/i.test(text)) return 'REDEEMED';
  101 |     if (/OPEN/i.test(text)) return 'OPEN';
  102 |     return null;
  103 |   }
  104 | 
  105 |   // ── Get redeemed-by name from the coupon row ──────────────────
  106 |   async getCouponRedeemedBy(couponCode) {
  107 |     const codeCell = this.page.getByRole('cell', { name: couponCode });
  108 |     const row = this.page.getByRole('row').filter({ has: codeCell });
  109 |     const text = await row.textContent();
  110 |     // Redeemed by is a name — extract non-code, non-status, non-date text
  111 |     const match = text?.match(/[A-Z][a-z]+ [A-Z][a-z]+/);
  112 |     return match?.[0] ?? null;
  113 |   }
  114 | }
  115 | 
  116 | module.exports = { CouponsPage };
```