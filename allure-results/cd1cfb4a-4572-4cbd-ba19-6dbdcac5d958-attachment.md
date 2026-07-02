# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> shows an error when redeeming an already redeemed coupon
- Location: tests\e2e\coupons.spec.js:53:3

# Error details

```
Error: Coupon code did not load — still placeholder or missing after 15s
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
  5   |     this.addCouponTab = page.getByRole('link', { name: 'Add Coupon' });
  6   |     this.generateNewCouponBtn = page.getByRole('button', { name: 'Generate New Coupon' });
  7   |     this.redeemCouponBtn = page.getByRole('button', { name: 'Redeem Coupon' });
  8   |     this.enterCouponCodeInput = page.getByRole('textbox', { name: 'Enter coupon code' });
  9   |     this.pinInput = page.getByRole('textbox', { name: 'PIN' });
  10  |     this.redeemCodeBtn = page.getByRole('button', { name: 'Redeem Code' });
  11  | 
  12  |     this.couponsSideNavLink = page.getByRole('link', { name: 'Coupons' });
  13  |     this.patientsSideNavLink = page.getByRole('link', { name: 'sidebarIcon2 Patients' });
  14  |     this.couponSearchInput = page.getByRole('textbox', { name: 'Search with Patient Name or' });
  15  |     this.statusFilterBtn = page.getByRole('button', { name: /^(All|OPEN|REDEEMED|ACTIVE)$/ });
  16  |     this.openDatePickerBtn = page.getByRole('button', { name: 'Open date picker' });
  17  |     this.firstDateInput = page.locator('input[type="date"]').first();
  18  | 
  19  |     this.patientSearchInput = page.getByRole('textbox', { name: 'Search' });
  20  |   }
  21  | 
  22  |   async openPatientAddCouponTab(patientId) {
  23  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/add-coupon/${patientId}`);
  24  |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first().waitFor({ state: 'visible', timeout: 15000 });
  25  |   }
  26  | 
  27  |   // ── Generate a new coupon and return the generated code ───────
  28  |   // Codegen confirmed: after clicking Generate, the real code appears as
  29  |   // clickable text matching MH-XXXXXX pattern (but NOT the literal placeholder).
  30  |   async generateNewCoupon() {
  31  |     await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
  32  |     await this.generateNewCouponBtn.click();
  33  | 
  34  |     // Poll for a real code — UI briefly shows "MH-XXXXXX" as placeholder before
  35  |     // replacing it with the actual generated value (e.g. "MH-3WIBM6")
  36  |     let code = null;
  37  |     for (let attempt = 0; attempt < 15; attempt++) {
  38  |       const codeEl = this.page.getByText(/^MH-[A-Z0-9]{6}$/).first();
  39  |       const text = await codeEl.textContent({ timeout: 2000 }).catch(() => null);
  40  |       if (text && text.trim() !== 'MH-XXXXXX') {
  41  |         code = text.trim();
  42  |         break;
  43  |       }
  44  |       await this.page.waitForTimeout(1000);
  45  |     }
  46  | 
> 47  |     if (!code) throw new Error('Coupon code did not load — still placeholder or missing after 15s');
      |                      ^ Error: Coupon code did not load — still placeholder or missing after 15s
  48  |     return code;
  49  |   }
  50  | 
  51  |   async openCouponsList() {
  52  |     // Use goto instead of clicking nav link to avoid "Invalid patient id" toast
  53  |     // that fires when navigating away from the patient profile page
  54  |     await this.page.goto(`${process.env.BASE_URL}/coupon`);
  55  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  56  |   }
  57  | 
  58  |   async searchCouponsByPatient(patientName) {
  59  |     const responsePromise = this.page.waitForResponse(
  60  |       resp => resp.url().includes('/coupon') && resp.status() === 200,
  61  |       { timeout: 10000 }
  62  |     ).catch(() => {});
  63  | 
  64  |     await this.couponSearchInput.click();
  65  |     await this.couponSearchInput.fill(patientName);
  66  |     await this.couponSearchInput.press('Enter');
  67  |     await responsePromise;
  68  |   }
  69  | 
  70  |   async filterByStatus(statusName) {
  71  |     await this.statusFilterBtn.click();
  72  |     await this.page.getByRole('option', { name: statusName, exact: true }).click();
  73  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  74  |   }
  75  | 
  76  |   async setDateFilter(dateString) {
  77  |     await this.openDatePickerBtn.click();
  78  |     await this.firstDateInput.fill(dateString);
  79  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  80  |   }
  81  | 
  82  |   async getFirstCouponCodeFromList() {
  83  |     const rows = this.page.getByRole('row').filter({ hasText: /MH-[A-Z0-9]+/ });
  84  |     await rows.first().waitFor({ state: 'visible', timeout: 15000 });
  85  |     const text = await rows.first().textContent();
  86  |     const code = text?.match(/MH-[A-Z0-9]+/)?.[0];
  87  |     if (!code) throw new Error('No coupon code found in the coupon list');
  88  |     return code;
  89  |   }
  90  | 
  91  |   async getCouponStatus(couponCode) {
  92  |     // Navigate directly to coupons list to avoid any stale search state
  93  |     await this.page.goto(`${process.env.BASE_URL}/coupon`);
  94  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  95  | 
  96  |     // Clear field completely then search by coupon code
  97  |     await this.couponSearchInput.click({ clickCount: 3 });
  98  |     await this.couponSearchInput.fill('');
  99  |     await this.page.waitForTimeout(300);
  100 |     await this.couponSearchInput.fill(couponCode);
  101 |     await this.couponSearchInput.press('Enter');
  102 |     await this.page.waitForTimeout(2000);
  103 | 
  104 |     const row = this.page.getByRole('row').filter({ hasText: couponCode }).first();
  105 |     const visible = await row.isVisible({ timeout: 10000 }).catch(() => false);
  106 |     if (!visible) return null;
  107 | 
  108 |     const text = await row.textContent();
  109 |     if (/REDEEMED/i.test(text)) return 'REDEEMED';
  110 |     if (/OPEN/i.test(text)) return 'OPEN';
  111 |     return null;
  112 |   }
  113 | 
  114 |   async openPatientFromList(patientName) {
  115 |     await this.patientsSideNavLink.click();
  116 |     await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  117 | 
  118 |     const responsePromise = this.page.waitForResponse(
  119 |       resp => resp.url().includes('/patient') && resp.status() === 200,
  120 |       { timeout: 10000 }
  121 |     ).catch(() => {});
  122 | 
  123 |     await this.patientSearchInput.click();
  124 |     await this.patientSearchInput.fill(patientName);
  125 |     await this.patientSearchInput.press('Enter');
  126 |     await responsePromise;
  127 | 
  128 |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  129 |     await patientLink.waitFor({ state: 'visible', timeout: 15000 });
  130 |     await patientLink.click();
  131 |   }
  132 | 
  133 |   async clickAddCouponTab() {
  134 |     await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  135 |     await this.addCouponTab.click();
  136 |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first().waitFor({ state: 'visible', timeout: 15000 });
  137 |   }
  138 | 
  139 |   async redeemCoupon(couponCode, pin = '1234') {
  140 |     // Codegen confirmed: click Redeem Coupon, fill code, fill PIN, click Redeem Code
  141 |     // No special wait needed between code and PIN — fill directly
  142 |     await this.redeemCouponBtn.click();
  143 |     await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
  144 |     await this.enterCouponCodeInput.click();
  145 |     await this.enterCouponCodeInput.fill(couponCode);
  146 |     await this.pinInput.click();
  147 |     await this.pinInput.fill(pin);
```