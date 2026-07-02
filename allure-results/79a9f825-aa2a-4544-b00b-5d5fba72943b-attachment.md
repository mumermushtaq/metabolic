# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> generates a coupon from patient profile, redeems it for same patient, and verifies redeemed status
- Location: tests\e2e\coupons.spec.js:16:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('row').filter({ hasText: 'MH-P4J7MZ' }).first() to be visible

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
        - link "Coupon" [ref=e42] [cursor=pointer]:
          - /url: /coupon
          - heading "Coupon" [level=3] [ref=e43]
        - generic [ref=e44]: Coupon List
      - generic [ref=e46]:
        - generic [ref=e47]:
          - button "notification" [ref=e48] [cursor=pointer]:
            - img "notification" [ref=e49]
          - generic: "0"
        - generic [ref=e50]:
          - img [ref=e52]
          - generic [ref=e57] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e58]
            - generic [ref=e59]: Admin • Diabetologist
    - generic [ref=e60]:
      - generic [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]: Search
            - textbox "Search with Patient Name or MRN" [active] [ref=e65]: umer mushtaq
          - generic [ref=e66]:
            - generic [ref=e67]: Status
            - button "All" [ref=e68] [cursor=pointer]:
              - generic [ref=e69]: All
              - img [ref=e71]
          - generic [ref=e73]:
            - generic [ref=e75]:
              - generic [ref=e76]: Date Range
              - button "dd/mm/yyyy" [ref=e77] [cursor=pointer]
              - button "dd/mm/yyyy" [ref=e79] [cursor=pointer]
              - button "Open date picker" [ref=e80] [cursor=pointer]:
                - img [ref=e81]
              - textbox
              - textbox
            - button "Reset" [ref=e83] [cursor=pointer]
        - table [ref=e88]:
          - rowgroup [ref=e89]:
            - row "Patient Name MRN Coupon Code Status Redeemed By Redeemed at Created At" [ref=e90]:
              - columnheader "Patient Name" [ref=e92]:
                - generic [ref=e93]: Patient Name
              - columnheader "MRN" [ref=e95]:
                - generic [ref=e96]: MRN
              - columnheader "Coupon Code" [ref=e98]:
                - generic [ref=e99]: Coupon Code
              - columnheader "Status" [ref=e101]:
                - generic [ref=e102]: Status
              - columnheader "Redeemed By" [ref=e104]:
                - generic [ref=e105]: Redeemed By
              - columnheader "Redeemed at" [ref=e107]:
                - generic [ref=e108]: Redeemed at
              - columnheader "Created At" [ref=e110]:
                - generic [ref=e111]: Created At
          - rowgroup [ref=e112]:
            - row "Umer Mushtaq abc123pkt MH-MXM94E OPEN - 01 Jul 2026" [ref=e113]:
              - cell "Umer Mushtaq" [ref=e114]:
                - generic [ref=e115]: Umer Mushtaq
              - cell "abc123pkt" [ref=e116]:
                - generic [ref=e117]: abc123pkt
              - cell "MH-MXM94E" [ref=e118]:
                - generic [ref=e119]: MH-MXM94E
              - cell "OPEN" [ref=e120]:
                - generic [ref=e123]: OPEN
              - cell [ref=e124]
              - cell "-" [ref=e125]:
                - generic [ref=e126]: "-"
              - cell "01 Jul 2026" [ref=e127]:
                - generic [ref=e128]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-WJMCHV OPEN - 01 Jul 2026" [ref=e129]:
              - cell "Umer Mushtaq" [ref=e130]:
                - generic [ref=e131]: Umer Mushtaq
              - cell "abc123pkt" [ref=e132]:
                - generic [ref=e133]: abc123pkt
              - cell "MH-WJMCHV" [ref=e134]:
                - generic [ref=e135]: MH-WJMCHV
              - cell "OPEN" [ref=e136]:
                - generic [ref=e139]: OPEN
              - cell [ref=e140]
              - cell "-" [ref=e141]:
                - generic [ref=e142]: "-"
              - cell "01 Jul 2026" [ref=e143]:
                - generic [ref=e144]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-BBRWJ9 OPEN - 01 Jul 2026" [ref=e145]:
              - cell "Umer Mushtaq" [ref=e146]:
                - generic [ref=e147]: Umer Mushtaq
              - cell "abc123pkt" [ref=e148]:
                - generic [ref=e149]: abc123pkt
              - cell "MH-BBRWJ9" [ref=e150]:
                - generic [ref=e151]: MH-BBRWJ9
              - cell "OPEN" [ref=e152]:
                - generic [ref=e155]: OPEN
              - cell [ref=e156]
              - cell "-" [ref=e157]:
                - generic [ref=e158]: "-"
              - cell "01 Jul 2026" [ref=e159]:
                - generic [ref=e160]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-6MIB78 OPEN - 01 Jul 2026" [ref=e161]:
              - cell "Umer Mushtaq" [ref=e162]:
                - generic [ref=e163]: Umer Mushtaq
              - cell "abc123pkt" [ref=e164]:
                - generic [ref=e165]: abc123pkt
              - cell "MH-6MIB78" [ref=e166]:
                - generic [ref=e167]: MH-6MIB78
              - cell "OPEN" [ref=e168]:
                - generic [ref=e171]: OPEN
              - cell [ref=e172]
              - cell "-" [ref=e173]:
                - generic [ref=e174]: "-"
              - cell "01 Jul 2026" [ref=e175]:
                - generic [ref=e176]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-YMBPCE OPEN - 01 Jul 2026" [ref=e177]:
              - cell "Umer Mushtaq" [ref=e178]:
                - generic [ref=e179]: Umer Mushtaq
              - cell "abc123pkt" [ref=e180]:
                - generic [ref=e181]: abc123pkt
              - cell "MH-YMBPCE" [ref=e182]:
                - generic [ref=e183]: MH-YMBPCE
              - cell "OPEN" [ref=e184]:
                - generic [ref=e187]: OPEN
              - cell [ref=e188]
              - cell "-" [ref=e189]:
                - generic [ref=e190]: "-"
              - cell "01 Jul 2026" [ref=e191]:
                - generic [ref=e192]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-6JRSAM OPEN - 01 Jul 2026" [ref=e193]:
              - cell "Umer Mushtaq" [ref=e194]:
                - generic [ref=e195]: Umer Mushtaq
              - cell "abc123pkt" [ref=e196]:
                - generic [ref=e197]: abc123pkt
              - cell "MH-6JRSAM" [ref=e198]:
                - generic [ref=e199]: MH-6JRSAM
              - cell "OPEN" [ref=e200]:
                - generic [ref=e203]: OPEN
              - cell [ref=e204]
              - cell "-" [ref=e205]:
                - generic [ref=e206]: "-"
              - cell "01 Jul 2026" [ref=e207]:
                - generic [ref=e208]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-E2DZT8 OPEN - 01 Jul 2026" [ref=e209]:
              - cell "Umer Mushtaq" [ref=e210]:
                - generic [ref=e211]: Umer Mushtaq
              - cell "abc123pkt" [ref=e212]:
                - generic [ref=e213]: abc123pkt
              - cell "MH-E2DZT8" [ref=e214]:
                - generic [ref=e215]: MH-E2DZT8
              - cell "OPEN" [ref=e216]:
                - generic [ref=e219]: OPEN
              - cell [ref=e220]
              - cell "-" [ref=e221]:
                - generic [ref=e222]: "-"
              - cell "01 Jul 2026" [ref=e223]:
                - generic [ref=e224]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-6DXC6M OPEN - 01 Jul 2026" [ref=e225]:
              - cell "Umer Mushtaq" [ref=e226]:
                - generic [ref=e227]: Umer Mushtaq
              - cell "abc123pkt" [ref=e228]:
                - generic [ref=e229]: abc123pkt
              - cell "MH-6DXC6M" [ref=e230]:
                - generic [ref=e231]: MH-6DXC6M
              - cell "OPEN" [ref=e232]:
                - generic [ref=e235]: OPEN
              - cell [ref=e236]
              - cell "-" [ref=e237]:
                - generic [ref=e238]: "-"
              - cell "01 Jul 2026" [ref=e239]:
                - generic [ref=e240]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-RKWJ46 OPEN - 01 Jul 2026" [ref=e241]:
              - cell "Umer Mushtaq" [ref=e242]:
                - generic [ref=e243]: Umer Mushtaq
              - cell "abc123pkt" [ref=e244]:
                - generic [ref=e245]: abc123pkt
              - cell "MH-RKWJ46" [ref=e246]:
                - generic [ref=e247]: MH-RKWJ46
              - cell "OPEN" [ref=e248]:
                - generic [ref=e251]: OPEN
              - cell [ref=e252]
              - cell "-" [ref=e253]:
                - generic [ref=e254]: "-"
              - cell "01 Jul 2026" [ref=e255]:
                - generic [ref=e256]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-2L9KZW OPEN - 01 Jul 2026" [ref=e257]:
              - cell "Umer Mushtaq" [ref=e258]:
                - generic [ref=e259]: Umer Mushtaq
              - cell "abc123pkt" [ref=e260]:
                - generic [ref=e261]: abc123pkt
              - cell "MH-2L9KZW" [ref=e262]:
                - generic [ref=e263]: MH-2L9KZW
              - cell "OPEN" [ref=e264]:
                - generic [ref=e267]: OPEN
              - cell [ref=e268]
              - cell "-" [ref=e269]:
                - generic [ref=e270]: "-"
              - cell "01 Jul 2026" [ref=e271]:
                - generic [ref=e272]: 01 Jul 2026
        - list [ref=e275]:
          - listitem:
            - img
          - listitem [ref=e276]: "1"
          - listitem [ref=e277]: "2"
          - listitem [ref=e278]: "3"
          - listitem [ref=e279]: "4"
          - listitem [ref=e280]:
            - img [ref=e281]
      - generic [ref=e283]:
        - generic [ref=e284]:
          - paragraph [ref=e286]: Chat
          - button "delete" [ref=e287] [cursor=pointer]:
            - img [ref=e288]
        - generic [ref=e292]:
          - paragraph [ref=e293] [cursor=pointer]: Metabolic
          - paragraph [ref=e294] [cursor=pointer]: Zone
  - alert [ref=e295]: Metabolic
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
  28  |   // Waits for the real code (excludes the "MH-XXXXXX" placeholder shown pre-load)
  29  |   async generateNewCoupon() {
  30  |     await this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 10000 });
  31  |     await this.generateNewCouponBtn.click();
  32  | 
  33  |     const codeLocator = this.page
  34  |       .getByText(/^MH-[A-Z0-9]{6}$/)
  35  |       .filter({ hasNotText: 'MH-XXXXXX' });
  36  | 
  37  |     let code = null;
  38  |     for (let attempt = 0; attempt < 10; attempt++) {
  39  |       const text = await codeLocator.first().textContent({ timeout: 1500 }).catch(() => null);
  40  |       if (text && text.trim() !== 'MH-XXXXXX') {
  41  |         code = text.trim();
  42  |         break;
  43  |       }
  44  |       await this.page.waitForTimeout(1000);
  45  |     }
  46  | 
  47  |     if (!code) throw new Error('Coupon code did not load (still showing placeholder or missing)');
  48  |     return code;
  49  |   }
  50  | 
  51  |   async openCouponsList() {
  52  |     await this.couponsSideNavLink.click();
  53  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  54  |   }
  55  | 
  56  |   async searchCouponsByPatient(patientName) {
  57  |     const responsePromise = this.page.waitForResponse(
  58  |       resp => resp.url().includes('/coupon') && resp.status() === 200,
  59  |       { timeout: 10000 }
  60  |     ).catch(() => {});
  61  | 
  62  |     await this.couponSearchInput.click();
  63  |     await this.couponSearchInput.fill(patientName);
  64  |     await this.couponSearchInput.press('Enter');
  65  |     await responsePromise;
  66  |   }
  67  | 
  68  |   async filterByStatus(statusName) {
  69  |     await this.statusFilterBtn.click();
  70  |     await this.page.getByRole('option', { name: statusName, exact: true }).click();
  71  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  72  |   }
  73  | 
  74  |   async setDateFilter(dateString) {
  75  |     await this.openDatePickerBtn.click();
  76  |     await this.firstDateInput.fill(dateString);
  77  |     await this.couponSearchInput.waitFor({ state: 'visible', timeout: 10000 });
  78  |   }
  79  | 
  80  |   async getFirstCouponCodeFromList() {
  81  |     const rows = this.page.getByRole('row').filter({ hasText: /MH-[A-Z0-9]+/ });
  82  |     await rows.first().waitFor({ state: 'visible', timeout: 15000 });
  83  |     const text = await rows.first().textContent();
  84  |     const code = text?.match(/MH-[A-Z0-9]+/)?.[0];
  85  |     if (!code) throw new Error('No coupon code found in the coupon list');
  86  |     return code;
  87  |   }
  88  | 
  89  |   async getCouponStatus(couponCode) {
  90  |     const row = this.page.getByRole('row').filter({ hasText: couponCode }).first();
> 91  |     await row.waitFor({ state: 'visible', timeout: 15000 });
      |               ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  92  |     const text = await row.textContent();
  93  | 
  94  |     if (/REDEEMED/i.test(text)) return 'REDEEMED';
  95  |     if (/OPEN/i.test(text)) return 'OPEN';
  96  |     if (/ACTIVE/i.test(text)) return 'ACTIVE';
  97  |     return null;
  98  |   }
  99  | 
  100 |   async openPatientFromList(patientName) {
  101 |     await this.patientsSideNavLink.click();
  102 |     await this.patientSearchInput.waitFor({ state: 'visible', timeout: 15000 });
  103 | 
  104 |     const responsePromise = this.page.waitForResponse(
  105 |       resp => resp.url().includes('/patient') && resp.status() === 200,
  106 |       { timeout: 10000 }
  107 |     ).catch(() => {});
  108 | 
  109 |     await this.patientSearchInput.click();
  110 |     await this.patientSearchInput.fill(patientName);
  111 |     await this.patientSearchInput.press('Enter');
  112 |     await responsePromise;
  113 | 
  114 |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  115 |     await patientLink.waitFor({ state: 'visible', timeout: 15000 });
  116 |     await patientLink.click();
  117 |   }
  118 | 
  119 |   async clickAddCouponTab() {
  120 |     await this.addCouponTab.waitFor({ state: 'visible', timeout: 15000 });
  121 |     await this.addCouponTab.click();
  122 |     await this.generateNewCouponBtn.or(this.redeemCouponBtn).first().waitFor({ state: 'visible', timeout: 15000 });
  123 |   }
  124 | 
  125 |   async redeemCoupon(couponCode, pin = '1234') {
  126 |     await this.redeemCouponBtn.click();
  127 |     await this.enterCouponCodeInput.waitFor({ state: 'visible', timeout: 10000 });
  128 |     await this.enterCouponCodeInput.click();
  129 |     await this.enterCouponCodeInput.fill(couponCode);
  130 |     await this.pinInput.click();
  131 |     await this.pinInput.fill(pin);
  132 |     await this.redeemCodeBtn.click();
  133 |   }
  134 | 
  135 |   async waitForRedeemResult() {
  136 |     await Promise.race([
  137 |       this.page.getByText(/redeemed/i).first().waitFor({ state: 'visible', timeout: 15000 }),
  138 |       this.page.getByText(/already redeemed|invalid|not valid|does not belong|different patient|error/i).first().waitFor({ state: 'visible', timeout: 15000 }),
  139 |       this.generateNewCouponBtn.waitFor({ state: 'visible', timeout: 15000 }),
  140 |     ]);
  141 |   }
  142 | 
  143 |   async expectRedeemError() {
  144 |     const error = this.page.getByText(/already redeemed|invalid|not valid|does not belong|different patient|error/i).first();
  145 |     await error.waitFor({ state: 'visible', timeout: 15000 });
  146 |     return error;
  147 |   }
  148 | }
  149 | 
  150 | module.exports = { CouponsPage };
```