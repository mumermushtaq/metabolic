# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> generates a coupon and verifies it appears in the list
- Location: tests\e2e\coupons.spec.js:16:3

# Error details

```
Error: Coupon code did not load — still placeholder or missing after 30s
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
          - paragraph [ref=e88]: MH-XXXXXX
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
  27  |   async generateNewCoupon() {
  28  |     await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
  29  |     await this.generateNewCouponBtn.click();
  30  | 
  31  |     // Poll for a real code — UI briefly shows "MH-XXXXXX" as placeholder.
  32  |     // Use 30 attempts (30s) to handle slow API responses.
  33  |     let code = null;
  34  |     for (let attempt = 0; attempt < 30; attempt++) {
  35  |       const codeEl = this.page.getByText(/^MH-[A-Z0-9]{6}$/).first();
  36  |       const text = await codeEl.textContent({ timeout: 2000 }).catch(() => null);
  37  |       if (text && text.trim() !== 'MH-XXXXXX') {
  38  |         code = text.trim();
  39  |         break;
  40  |       }
  41  |       await this.page.waitForTimeout(1000);
  42  |     }
  43  | 
> 44  |     if (!code) throw new Error('Coupon code did not load — still placeholder or missing after 30s');
      |                      ^ Error: Coupon code did not load — still placeholder or missing after 30s
  45  |     return code;
  46  |   }
  47  | 
  48  |   async openCouponsList() {
  49  |     await this.page.goto(`${process.env.BASE_URL}/coupon`);
  50  |     await this.page.waitForURL('**/coupon', { timeout: 15000 });
  51  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  52  |   }
  53  | 
  54  |   async searchCouponsByPatient(patientName) {
  55  |     await this.couponSearchInput.click({ clickCount: 3 });
  56  |     await this.couponSearchInput.fill(patientName);
  57  |     await this.couponSearchInput.press('Enter');
  58  |     await this.page.waitForTimeout(2000);
  59  |   }
  60  | 
  61  |   async filterByStatus(statusName) {
  62  |     await this.statusFilterBtn.click();
  63  |     await this.page.getByRole('option', { name: statusName, exact: true }).click();
  64  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  65  |   }
  66  | 
  67  |   async setDateFilter(dateString) {
  68  |     await this.openDatePickerBtn.click();
  69  |     await this.firstDateInput.fill(dateString);
  70  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  71  |   }
  72  | 
  73  |   async getFirstCouponCodeFromList() {
  74  |     const rows = this.page.getByRole('row').filter({ hasText: /MH-[A-Z0-9]+/ });
  75  |     await rows.first().waitFor({ state: 'visible', timeout: 15000 });
  76  |     const text = await rows.first().textContent();
  77  |     const code = text?.match(/MH-[A-Z0-9]+/)?.[0];
  78  |     if (!code) throw new Error('No coupon code found in the coupon list');
  79  |     return code;
  80  |   }
  81  | 
  82  |   // patientName is required — the search bar only accepts patient name or MRN, NOT coupon code.
  83  |   // Search by patient name to filter rows, then find the specific coupon code in the results.
  84  |   async getCouponStatus(couponCode, patientName) {
  85  |     await this.couponSearchInput.click({ clickCount: 3 });
  86  |     await this.couponSearchInput.fill('');
  87  |     await this.page.waitForTimeout(300);
  88  |     await this.couponSearchInput.fill(patientName);
  89  |     await this.couponSearchInput.press('Enter');
  90  |     await this.page.waitForTimeout(2000);
  91  | 
  92  |     const row = this.page.getByRole('row').filter({ hasText: couponCode }).first();
  93  |     const visible = await row.isVisible({ timeout: 10000 }).catch(() => false);
  94  |     if (!visible) return null;
  95  | 
  96  |     const text = await row.textContent();
  97  |     if (/REDEEMED/i.test(text)) return 'REDEEMED';
  98  |     if (/OPEN/i.test(text)) return 'OPEN';
  99  |     return null;
  100 |   }
  101 | 
  102 |   async openPatientFromList(patientName) {
  103 |     await this.patientsSideNavLink.click();
  104 |     await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  105 | 
  106 |     await this.patientSearchInput.click();
  107 |     await this.patientSearchInput.fill(patientName);
  108 |     await this.patientSearchInput.press('Enter');
  109 |     await this.page.waitForTimeout(2000);
  110 | 
  111 |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  112 |     await patientLink.waitFor({ state: 'visible', timeout: 15000 });
  113 |     await patientLink.click();
  114 |   }
  115 | 
  116 |   async clickAddCouponTab() {
  117 |     await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  118 |     await this.addCouponTab.click();
  119 |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first().waitFor({ state: 'visible', timeout: 15000 });
  120 |   }
  121 | 
  122 |   async redeemCoupon(couponCode, pin = '1234') {
  123 |     await this.redeemCouponBtn.click();
  124 |     await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
  125 |     await this.enterCouponCodeInput.click();
  126 |     await this.enterCouponCodeInput.fill(couponCode);
  127 |     await this.pinInput.click();
  128 |     await this.pinInput.fill(pin);
  129 |     await this.redeemCodeBtn.click();
  130 |   }
  131 | 
  132 |   async waitForRedeemResult() {
  133 |     await Promise.race([
  134 |       this.page.getByText(/redeemed/i).first().waitFor({ state: 'visible', timeout: 15000 }),
  135 |       this.page.getByText(/already redeemed|invalid|not valid|does not belong|different patient|error/i).first().waitFor({ state: 'visible', timeout: 15000 }),
  136 |       this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 15000 }),
  137 |     ]);
  138 |   }
  139 | 
  140 |   async expectRedeemError() {
  141 |     const error = this.page.getByText(/already redeemed|invalid|not valid|does not belong|different patient|error/i).first();
  142 |     await error.waitFor({ state: 'visible', timeout: 15000 });
  143 |     return error;
  144 |   }
```