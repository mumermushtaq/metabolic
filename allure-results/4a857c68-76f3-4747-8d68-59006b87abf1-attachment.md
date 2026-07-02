# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupon.spec.js >> Add Coupon >> full flow: generate coupon for Patient A, redeem on same Patient A
- Location: tests\e2e\coupon.spec.js:39:3

# Error details

```
TypeError: expect(received).toMatch(expected)

Matcher error: received value must be a string

Received has value: null
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
            - textbox "Search with Patient Name or MRN" [ref=e65]: Umer Mushtaq
          - generic [ref=e66]:
            - generic [ref=e67]: Status
            - button "OPEN" [ref=e68] [cursor=pointer]:
              - generic [ref=e69]: OPEN
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
            - row "Umer Mushtaq abc123pkt MH-UY5KW7 OPEN - 26 Jun 2026" [ref=e113]:
              - cell "Umer Mushtaq" [ref=e114]:
                - generic [ref=e115]: Umer Mushtaq
              - cell "abc123pkt" [ref=e116]:
                - generic [ref=e117]: abc123pkt
              - cell "MH-UY5KW7" [ref=e118]:
                - generic [ref=e119]: MH-UY5KW7
              - cell "OPEN" [ref=e120]:
                - generic [ref=e123]: OPEN
              - cell [ref=e124]
              - cell "-" [ref=e125]:
                - generic [ref=e126]: "-"
              - cell "26 Jun 2026" [ref=e127]:
                - generic [ref=e128]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-L4NEHN OPEN - 26 Jun 2026" [ref=e129]:
              - cell "Umer Mushtaq" [ref=e130]:
                - generic [ref=e131]: Umer Mushtaq
              - cell "abc123pkt" [ref=e132]:
                - generic [ref=e133]: abc123pkt
              - cell "MH-L4NEHN" [ref=e134]:
                - generic [ref=e135]: MH-L4NEHN
              - cell "OPEN" [ref=e136]:
                - generic [ref=e139]: OPEN
              - cell [ref=e140]
              - cell "-" [ref=e141]:
                - generic [ref=e142]: "-"
              - cell "26 Jun 2026" [ref=e143]:
                - generic [ref=e144]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-JH83BI OPEN - 26 Jun 2026" [ref=e145]:
              - cell "Umer Mushtaq" [ref=e146]:
                - generic [ref=e147]: Umer Mushtaq
              - cell "abc123pkt" [ref=e148]:
                - generic [ref=e149]: abc123pkt
              - cell "MH-JH83BI" [ref=e150]:
                - generic [ref=e151]: MH-JH83BI
              - cell "OPEN" [ref=e152]:
                - generic [ref=e155]: OPEN
              - cell [ref=e156]
              - cell "-" [ref=e157]:
                - generic [ref=e158]: "-"
              - cell "26 Jun 2026" [ref=e159]:
                - generic [ref=e160]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-BJVS21 OPEN - 26 Jun 2026" [ref=e161]:
              - cell "Umer Mushtaq" [ref=e162]:
                - generic [ref=e163]: Umer Mushtaq
              - cell "abc123pkt" [ref=e164]:
                - generic [ref=e165]: abc123pkt
              - cell "MH-BJVS21" [ref=e166]:
                - generic [ref=e167]: MH-BJVS21
              - cell "OPEN" [ref=e168]:
                - generic [ref=e171]: OPEN
              - cell [ref=e172]
              - cell "-" [ref=e173]:
                - generic [ref=e174]: "-"
              - cell "26 Jun 2026" [ref=e175]:
                - generic [ref=e176]: 26 Jun 2026
            - row "Umer Mushtaq abc123pkt MH-DS6U7G OPEN - 26 Jun 2026" [ref=e177]:
              - cell "Umer Mushtaq" [ref=e178]:
                - generic [ref=e179]: Umer Mushtaq
              - cell "abc123pkt" [ref=e180]:
                - generic [ref=e181]: abc123pkt
              - cell "MH-DS6U7G" [ref=e182]:
                - generic [ref=e183]: MH-DS6U7G
              - cell "OPEN" [ref=e184]:
                - generic [ref=e187]: OPEN
              - cell [ref=e188]
              - cell "-" [ref=e189]:
                - generic [ref=e190]: "-"
              - cell "26 Jun 2026" [ref=e191]:
                - generic [ref=e192]: 26 Jun 2026
            - row "umer mushtaq 8765 MH-P4J7MZ OPEN - 25 Jun 2026" [ref=e193]:
              - cell "umer mushtaq" [ref=e194]:
                - generic [ref=e195]: umer mushtaq
              - cell "8765" [ref=e196]:
                - generic [ref=e197]: "8765"
              - cell "MH-P4J7MZ" [ref=e198]:
                - generic [ref=e199]: MH-P4J7MZ
              - cell "OPEN" [ref=e200]:
                - generic [ref=e203]: OPEN
              - cell [ref=e204]
              - cell "-" [ref=e205]:
                - generic [ref=e206]: "-"
              - cell "25 Jun 2026" [ref=e207]:
                - generic [ref=e208]: 25 Jun 2026
            - row "umer mushtaq 8765 MH-AXOTM1 OPEN - 25 Jun 2026" [ref=e209]:
              - cell "umer mushtaq" [ref=e210]:
                - generic [ref=e211]: umer mushtaq
              - cell "8765" [ref=e212]:
                - generic [ref=e213]: "8765"
              - cell "MH-AXOTM1" [ref=e214]:
                - generic [ref=e215]: MH-AXOTM1
              - cell "OPEN" [ref=e216]:
                - generic [ref=e219]: OPEN
              - cell [ref=e220]
              - cell "-" [ref=e221]:
                - generic [ref=e222]: "-"
              - cell "25 Jun 2026" [ref=e223]:
                - generic [ref=e224]: 25 Jun 2026
            - row "umer mushtaq 8765 MH-IJ94SU OPEN - 29 Apr 2026" [ref=e225]:
              - cell "umer mushtaq" [ref=e226]:
                - generic [ref=e227]: umer mushtaq
              - cell "8765" [ref=e228]:
                - generic [ref=e229]: "8765"
              - cell "MH-IJ94SU" [ref=e230]:
                - generic [ref=e231]: MH-IJ94SU
              - cell "OPEN" [ref=e232]:
                - generic [ref=e235]: OPEN
              - cell [ref=e236]
              - cell "-" [ref=e237]:
                - generic [ref=e238]: "-"
              - cell "29 Apr 2026" [ref=e239]:
                - generic [ref=e240]: 29 Apr 2026
            - row "umer mushtaq 8765 MH-NBBOLY OPEN - 29 Apr 2026" [ref=e241]:
              - cell "umer mushtaq" [ref=e242]:
                - generic [ref=e243]: umer mushtaq
              - cell "8765" [ref=e244]:
                - generic [ref=e245]: "8765"
              - cell "MH-NBBOLY" [ref=e246]:
                - generic [ref=e247]: MH-NBBOLY
              - cell "OPEN" [ref=e248]:
                - generic [ref=e251]: OPEN
              - cell [ref=e252]
              - cell "-" [ref=e253]:
                - generic [ref=e254]: "-"
              - cell "29 Apr 2026" [ref=e255]:
                - generic [ref=e256]: 29 Apr 2026
            - row "umer mushtaq 8765 MH-FZ2038 OPEN - 29 Apr 2026" [ref=e257]:
              - cell "umer mushtaq" [ref=e258]:
                - generic [ref=e259]: umer mushtaq
              - cell "8765" [ref=e260]:
                - generic [ref=e261]: "8765"
              - cell "MH-FZ2038" [ref=e262]:
                - generic [ref=e263]: MH-FZ2038
              - cell "OPEN" [ref=e264]:
                - generic [ref=e267]: OPEN
              - cell [ref=e268]
              - cell "-" [ref=e269]:
                - generic [ref=e270]: "-"
              - cell "29 Apr 2026" [ref=e271]:
                - generic [ref=e272]: 29 Apr 2026
        - list [ref=e275]:
          - listitem:
            - img
          - listitem [ref=e276]: "1"
          - listitem:
            - img
      - generic [ref=e277]:
        - generic [ref=e278]:
          - paragraph [ref=e280]: Chat
          - button "delete" [ref=e281] [cursor=pointer]:
            - img [ref=e282]
        - generic [ref=e286]:
          - paragraph [ref=e287] [cursor=pointer]: Metabolic
          - paragraph [ref=e288] [cursor=pointer]: Zone
  - alert [ref=e289]
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { CouponPage } = require('../../pages/CouponPage');
  3   | 
  4   | // Two distinct patients — coupons are patient-specific
  5   | const PATIENT_A_ID   = '1706';                   // Umer Mushtaq, MRN: abc123pkt
  6   | const PATIENT_A_NAME = 'Umer Mushtaq';
  7   | const PATIENT_A_LINK = 'umer mushtaq 8765';      // fallback search link
  8   | 
  9   | const PATIENT_B_ID   = '1273';                   // umer mushtaq, MRN: 8765
  10  | const PATIENT_B_NAME = 'umer mushtaq';
  11  | const PATIENT_B_LINK = 'umer mushtaq 8765';
  12  | 
  13  | const PIN = '1234';
  14  | 
  15  | test.describe('Add Coupon', () => {
  16  | 
  17  |   test('navigates to Add Coupon tab', async ({ page }) => {
  18  |     const couponPage = new CouponPage(page);
  19  |     await couponPage.openAddCouponTab(PATIENT_A_ID);
  20  |     await expect(couponPage.generateNewCouponBtn).toBeVisible();
  21  |   });
  22  | 
  23  |   test('generates a new coupon', async ({ page }) => {
  24  |     const couponPage = new CouponPage(page);
  25  |     await couponPage.openAddCouponTab(PATIENT_A_ID);
  26  |     const code = await couponPage.generateCoupon();
  27  |     console.log('Generated:', code);
  28  |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  29  |   });
  30  | 
  31  |   test('searches patient coupons and filters by OPEN status', async ({ page }) => {
  32  |     const couponPage = new CouponPage(page);
  33  |     await couponPage.openCouponsList();
  34  |     await couponPage.searchByPatient(PATIENT_B_NAME);
  35  |     await couponPage.filterByStatus('OPEN');
  36  |     await expect(couponPage.couponSearchInput).toBeVisible();
  37  |   });
  38  | 
  39  |   test('full flow: generate coupon for Patient A, redeem on same Patient A', async ({ page }) => {
  40  |     const couponPage = new CouponPage(page);
  41  | 
  42  |     // Step 1: Generate coupon on Patient A (1706)
  43  |     await couponPage.openAddCouponTab(PATIENT_A_ID);
  44  |     const generatedCode = await couponPage.generateCoupon();
  45  |     expect(generatedCode).toMatch(/MH-[A-Z0-9]+/);
  46  |     console.log('Generated for Patient A:', generatedCode);
  47  | 
  48  |     // Step 2: Verify it appears as OPEN in the coupon list
  49  |     await couponPage.openCouponsList();
  50  |     await couponPage.searchByPatient(PATIENT_A_NAME);
  51  |     await couponPage.filterByStatus('OPEN');
  52  |     const status = await couponPage.getCouponStatus(generatedCode);
  53  |     console.log('Status in list:', status);
> 54  |     expect(status).toMatch(/OPEN/i);
      |                    ^ TypeError: expect(received).toMatch(expected)
  55  | 
  56  |     // Step 3: Redeem on SAME Patient A using the generated code directly
  57  |     await couponPage.openAddCouponTab(PATIENT_A_ID);
  58  |     const redeemMsg = await couponPage.redeemCoupon(generatedCode, PIN);
  59  |     console.log('Redeem result:', redeemMsg);
  60  |     expect(redeemMsg).toMatch(/redeemed successfully|success/i);
  61  | 
  62  |     // Step 4: Verify status is now REDEEMED
  63  |     await couponPage.openCouponsList();
  64  |     await couponPage.searchByPatient(PATIENT_A_NAME);
  65  |     const finalStatus = await couponPage.getCouponStatus(generatedCode);
  66  |     console.log('Final status:', finalStatus);
  67  |     expect(finalStatus).toMatch(/REDEEMED/i);
  68  |   });
  69  | 
  70  |   test('cross-patient: code generated for Patient A cannot be redeemed by Patient B', async ({ page }) => {
  71  |     const couponPage = new CouponPage(page);
  72  | 
  73  |     // Step 1: Generate coupon on Patient A
  74  |     await couponPage.openAddCouponTab(PATIENT_A_ID);
  75  |     const code = await couponPage.generateCoupon();
  76  |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  77  |     console.log('Code generated for A:', code);
  78  | 
  79  |     // Step 2: Try to redeem Patient A's code on Patient B — should fail
  80  |     await couponPage.openAddCouponTab(PATIENT_B_ID);
  81  |     const msg = await couponPage.redeemCoupon(code, PIN);
  82  |     console.log('Cross-patient redeem result:', msg);
  83  | 
  84  |     // Should show "not found", "invalid", or similar error — not success
  85  |     expect(msg).toBeTruthy();
  86  |     expect(msg).not.toMatch(/redeemed successfully/i);
  87  |   });
  88  | 
  89  |   test('cross-patient: code generated for Patient B cannot be redeemed by Patient A', async ({ page }) => {
  90  |     const couponPage = new CouponPage(page);
  91  | 
  92  |     // Step 1: Generate coupon on Patient B
  93  |     await couponPage.openAddCouponTab(PATIENT_B_ID);
  94  |     const code = await couponPage.generateCoupon();
  95  |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  96  |     console.log('Code generated for B:', code);
  97  | 
  98  |     // Step 2: Try to redeem Patient B's code on Patient A — should fail
  99  |     await couponPage.openAddCouponTab(PATIENT_A_ID);
  100 |     const msg = await couponPage.redeemCoupon(code, PIN);
  101 |     console.log('Cross-patient redeem result:', msg);
  102 | 
  103 |     expect(msg).toBeTruthy();
  104 |     expect(msg).not.toMatch(/redeemed successfully/i);
  105 |   });
  106 | 
  107 | });
```