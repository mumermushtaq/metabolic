# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupon.spec.js >> Add Coupon >> full flow: generate coupon, verify OPEN, redeem, verify REDEEMED
- Location: tests\e2e\coupon.spec.js:32:3

# Error details

```
TypeError: expect(received).toMatch(expected)

Matcher error: received value must be a string

Received has value: null
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
            - row "Umer Mushtaq abc123pkt MH-E2DZT8 OPEN - 01 Jul 2026" [ref=e113]:
              - cell "Umer Mushtaq" [ref=e114]:
                - generic [ref=e115]: Umer Mushtaq
              - cell "abc123pkt" [ref=e116]:
                - generic [ref=e117]: abc123pkt
              - cell "MH-E2DZT8" [ref=e118]:
                - generic [ref=e119]: MH-E2DZT8
              - cell "OPEN" [ref=e120]:
                - generic [ref=e123]: OPEN
              - cell [ref=e124]
              - cell "-" [ref=e125]:
                - generic [ref=e126]: "-"
              - cell "01 Jul 2026" [ref=e127]:
                - generic [ref=e128]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-6DXC6M OPEN - 01 Jul 2026" [ref=e129]:
              - cell "Umer Mushtaq" [ref=e130]:
                - generic [ref=e131]: Umer Mushtaq
              - cell "abc123pkt" [ref=e132]:
                - generic [ref=e133]: abc123pkt
              - cell "MH-6DXC6M" [ref=e134]:
                - generic [ref=e135]: MH-6DXC6M
              - cell "OPEN" [ref=e136]:
                - generic [ref=e139]: OPEN
              - cell [ref=e140]
              - cell "-" [ref=e141]:
                - generic [ref=e142]: "-"
              - cell "01 Jul 2026" [ref=e143]:
                - generic [ref=e144]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-RKWJ46 OPEN - 01 Jul 2026" [ref=e145]:
              - cell "Umer Mushtaq" [ref=e146]:
                - generic [ref=e147]: Umer Mushtaq
              - cell "abc123pkt" [ref=e148]:
                - generic [ref=e149]: abc123pkt
              - cell "MH-RKWJ46" [ref=e150]:
                - generic [ref=e151]: MH-RKWJ46
              - cell "OPEN" [ref=e152]:
                - generic [ref=e155]: OPEN
              - cell [ref=e156]
              - cell "-" [ref=e157]:
                - generic [ref=e158]: "-"
              - cell "01 Jul 2026" [ref=e159]:
                - generic [ref=e160]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-2L9KZW OPEN - 01 Jul 2026" [ref=e161]:
              - cell "Umer Mushtaq" [ref=e162]:
                - generic [ref=e163]: Umer Mushtaq
              - cell "abc123pkt" [ref=e164]:
                - generic [ref=e165]: abc123pkt
              - cell "MH-2L9KZW" [ref=e166]:
                - generic [ref=e167]: MH-2L9KZW
              - cell "OPEN" [ref=e168]:
                - generic [ref=e171]: OPEN
              - cell [ref=e172]
              - cell "-" [ref=e173]:
                - generic [ref=e174]: "-"
              - cell "01 Jul 2026" [ref=e175]:
                - generic [ref=e176]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-P1OQ3J OPEN - 01 Jul 2026" [ref=e177]:
              - cell "Umer Mushtaq" [ref=e178]:
                - generic [ref=e179]: Umer Mushtaq
              - cell "abc123pkt" [ref=e180]:
                - generic [ref=e181]: abc123pkt
              - cell "MH-P1OQ3J" [ref=e182]:
                - generic [ref=e183]: MH-P1OQ3J
              - cell "OPEN" [ref=e184]:
                - generic [ref=e187]: OPEN
              - cell [ref=e188]
              - cell "-" [ref=e189]:
                - generic [ref=e190]: "-"
              - cell "01 Jul 2026" [ref=e191]:
                - generic [ref=e192]: 01 Jul 2026
            - row "Umer Mushtaq abc123pkt MH-KW2YAG OPEN - 26 Jun 2026" [ref=e193]:
              - cell "Umer Mushtaq" [ref=e194]:
                - generic [ref=e195]: Umer Mushtaq
              - cell "abc123pkt" [ref=e196]:
                - generic [ref=e197]: abc123pkt
              - cell "MH-KW2YAG" [ref=e198]:
                - generic [ref=e199]: MH-KW2YAG
              - cell "OPEN" [ref=e200]:
                - generic [ref=e203]: OPEN
              - cell [ref=e204]
              - cell "-" [ref=e205]:
                - generic [ref=e206]: "-"
              - cell "26 Jun 2026" [ref=e207]:
                - generic [ref=e208]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-UY5KW7 OPEN - 26 Jun 2026" [ref=e209]:
              - cell "Umer Mushtaq" [ref=e210]:
                - generic [ref=e211]: Umer Mushtaq
              - cell "abc123pkt" [ref=e212]:
                - generic [ref=e213]: abc123pkt
              - cell "MH-UY5KW7" [ref=e214]:
                - generic [ref=e215]: MH-UY5KW7
              - cell "OPEN" [ref=e216]:
                - generic [ref=e219]: OPEN
              - cell [ref=e220]
              - cell "-" [ref=e221]:
                - generic [ref=e222]: "-"
              - cell "26 Jun 2026" [ref=e223]:
                - generic [ref=e224]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-L4NEHN OPEN - 26 Jun 2026" [ref=e225]:
              - cell "Umer Mushtaq" [ref=e226]:
                - generic [ref=e227]: Umer Mushtaq
              - cell "abc123pkt" [ref=e228]:
                - generic [ref=e229]: abc123pkt
              - cell "MH-L4NEHN" [ref=e230]:
                - generic [ref=e231]: MH-L4NEHN
              - cell "OPEN" [ref=e232]:
                - generic [ref=e235]: OPEN
              - cell [ref=e236]
              - cell "-" [ref=e237]:
                - generic [ref=e238]: "-"
              - cell "26 Jun 2026" [ref=e239]:
                - generic [ref=e240]: 26 Jun 2026
            - row "umer mushtaq 8765 MH-FWIN60 REDEEMED Umer Mushtaq 26 Jun 2026 26 Jun 2026" [ref=e241]:
              - cell "umer mushtaq" [ref=e242]:
                - generic [ref=e243]: umer mushtaq
              - cell "8765" [ref=e244]:
                - generic [ref=e245]: "8765"
              - cell "MH-FWIN60" [ref=e246]:
                - generic [ref=e247]: MH-FWIN60
              - cell "REDEEMED" [ref=e248]:
                - generic [ref=e251]: REDEEMED
              - cell "Umer Mushtaq" [ref=e252]:
                - generic [ref=e253]: Umer Mushtaq
              - cell "26 Jun 2026" [ref=e254]:
                - generic [ref=e255]: 26 Jun 2026
              - cell "26 Jun 2026" [ref=e256]:
                - generic [ref=e257]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-ZKMX67 REDEEMED Umer Mushtaq 26 Jun 2026 26 Jun 2026" [ref=e258]:
              - cell "Umer Mushtaq" [ref=e259]:
                - generic [ref=e260]: Umer Mushtaq
              - cell "abc123pkt" [ref=e261]:
                - generic [ref=e262]: abc123pkt
              - cell "MH-ZKMX67" [ref=e263]:
                - generic [ref=e264]: MH-ZKMX67
              - cell "REDEEMED" [ref=e265]:
                - generic [ref=e268]: REDEEMED
              - cell "Umer Mushtaq" [ref=e269]:
                - generic [ref=e270]: Umer Mushtaq
              - cell "26 Jun 2026" [ref=e271]:
                - generic [ref=e272]: 26 Jun 2026
              - cell "26 Jun 2026" [ref=e273]:
                - generic [ref=e274]: 26 Jun 2026
        - list [ref=e277]:
          - listitem:
            - img
          - listitem [ref=e278]: "1"
          - listitem [ref=e279]: "2"
          - listitem [ref=e280]: "3"
          - listitem [ref=e281]:
            - img [ref=e282]
      - generic [ref=e284]:
        - generic [ref=e285]:
          - paragraph [ref=e287]: Chat
          - button "delete" [ref=e288] [cursor=pointer]:
            - img [ref=e289]
        - generic [ref=e293]:
          - paragraph [ref=e294] [cursor=pointer]: Metabolic
          - paragraph [ref=e295] [cursor=pointer]: Zone
  - alert [ref=e296]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { CouponPage } = require('../../pages/CouponPage');
  3  | 
  4  | const PATIENT_ID   = '1705';
  5  | const PATIENT_NAME = 'umer mushtaq';
  6  | const PIN          = '1234';
  7  | 
  8  | test.describe('Add Coupon', () => {
  9  | 
  10 |   test('navigates to Add Coupon tab', async ({ page }) => {
  11 |     const couponPage = new CouponPage(page);
  12 |     await couponPage.openAddCouponTab(PATIENT_ID);
  13 |     await expect(couponPage.generateNewCouponBtn).toBeVisible();
  14 |   });
  15 | 
  16 |   test('generates a new coupon', async ({ page }) => {
  17 |     const couponPage = new CouponPage(page);
  18 |     await couponPage.openAddCouponTab(PATIENT_ID);
  19 |     const code = await couponPage.generateCoupon();
  20 |     console.log('Generated:', code);
  21 |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  22 |   });
  23 | 
  24 |   test('searches patient coupons and filters by OPEN status', async ({ page }) => {
  25 |     const couponPage = new CouponPage(page);
  26 |     await couponPage.openCouponsList();
  27 |     await couponPage.searchByPatient(PATIENT_NAME);
  28 |     await couponPage.filterByStatus('OPEN');
  29 |     await expect(couponPage.couponSearchInput).toBeVisible();
  30 |   });
  31 | 
  32 |   test('full flow: generate coupon, verify OPEN, redeem, verify REDEEMED', async ({ page }) => {
  33 |     const couponPage = new CouponPage(page);
  34 | 
  35 |     // Step 1: Generate coupon
  36 |     await couponPage.openAddCouponTab(PATIENT_ID);
  37 |     const code = await couponPage.generateCoupon();
  38 |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  39 |     console.log('Generated:', code);
  40 | 
  41 |     // Step 2: Verify OPEN in coupon list
  42 |     await couponPage.openCouponsList();
  43 |     await couponPage.searchByPatient(PATIENT_NAME);
  44 |     const openStatus = await couponPage.getCouponStatus(code);
  45 |     console.log('Status before redeem:', openStatus);
> 46 |     expect(openStatus).toMatch(/OPEN/i);
     |                        ^ TypeError: expect(received).toMatch(expected)
  47 | 
  48 |     // Step 3: Redeem on same patient
  49 |     await couponPage.openAddCouponTab(PATIENT_ID);
  50 |     const msg = await couponPage.redeemCoupon(code, PIN);
  51 |     console.log('Redeem result:', msg);
  52 |     expect(msg).toMatch(/redeemed successfully|success/i);
  53 | 
  54 |     // Step 4: Verify REDEEMED in list
  55 |     await couponPage.openCouponsList();
  56 |     await couponPage.searchByPatient(PATIENT_NAME);
  57 |     const redeemedStatus = await couponPage.getCouponStatus(code);
  58 |     console.log('Status after redeem:', redeemedStatus);
  59 |     expect(redeemedStatus).toMatch(/REDEEMED/i);
  60 |   });
  61 | 
  62 | });
```