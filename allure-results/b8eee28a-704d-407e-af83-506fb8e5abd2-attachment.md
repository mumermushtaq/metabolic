# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> generates a coupon, redeems it, and verifies REDEEMED status
- Location: tests\e2e\coupons.spec.js:33:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "REDEEMED"
Received: null
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
            - textbox "Search with Patient Name or MRN" [active] [ref=e65]: MH-AXOTM1
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
        - generic [ref=e85]: No coupons found for selected filters.
        - list [ref=e88]:
          - listitem:
            - img
          - listitem:
            - img
      - generic [ref=e89]:
        - generic [ref=e90]:
          - paragraph [ref=e92]: Chat
          - button "delete" [ref=e93] [cursor=pointer]:
            - img [ref=e94]
        - generic [ref=e98]:
          - paragraph [ref=e99] [cursor=pointer]: Metabolic
          - paragraph [ref=e100] [cursor=pointer]: Zone
  - alert [ref=e101]: Metabolic
```

# Test source

```ts
  1  | ﻿const { test, expect } = require('@playwright/test');
  2  | const { CouponsPage } = require('../../pages/CouponsPage');
  3  | 
  4  | const PATIENT_ID   = '1705';
  5  | const PATIENT_NAME = 'umer mushtaq';
  6  | const PIN          = '1234';
  7  | 
  8  | test.describe('Coupons', () => {
  9  | 
  10 |   test('navigates to Add Coupon tab', async ({ page }) => {
  11 |     const couponsPage = new CouponsPage(page);
  12 |     await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  13 |     await expect(couponsPage.generateNewCouponBtn.or(couponsPage.redeemCouponBtn).first()).toBeVisible();
  14 |   });
  15 | 
  16 |   test('generates a coupon and verifies it appears in the list', async ({ page }) => {
  17 |     const couponsPage = new CouponsPage(page);
  18 | 
  19 |     // Step 1: Generate coupon
  20 |     await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  21 |     const code = await couponsPage.generateNewCoupon();
  22 |     expect(code).toMatch(/^MH-[A-Z0-9]{6}$/);
  23 |     console.log('Generated:', code);
  24 | 
  25 |     // Step 2: Go to coupon list and confirm the code is there
  26 |     await couponsPage.openCouponsList();
  27 |     await couponsPage.searchCouponsByPatient(PATIENT_NAME);
  28 |     const status = await couponsPage.getCouponStatus(code);
  29 |     console.log('Status:', status);
  30 |     expect(['OPEN', 'ACTIVE']).toContain(status);
  31 |   });
  32 | 
  33 |   test('generates a coupon, redeems it, and verifies REDEEMED status', async ({ page }) => {
  34 |     const couponsPage = new CouponsPage(page);
  35 | 
  36 |     // Step 1: Generate coupon
  37 |     await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  38 |     const code = await couponsPage.generateNewCoupon();
  39 |     expect(code).toMatch(/^MH-[A-Z0-9]{6}$/);
  40 |     console.log('Generated:', code);
  41 | 
  42 |     // Step 2: Redeem on same patient
  43 |     await couponsPage.redeemCoupon(code, PIN);
  44 |     await couponsPage.waitForRedeemResult();
  45 | 
  46 |     // Step 3: Verify REDEEMED in list
  47 |     await couponsPage.openCouponsList();
  48 |     await couponsPage.searchCouponsByPatient(PATIENT_NAME);
  49 |     const status = await couponsPage.getCouponStatus(code);
  50 |     console.log('Status after redeem:', status);
> 51 |     expect(status).toBe('REDEEMED');
     |                    ^ Error: expect(received).toBe(expected) // Object.is equality
  52 |   });
  53 | 
  54 |   test('shows an error when redeeming an already redeemed coupon', async ({ page }) => {
  55 |     const couponsPage = new CouponsPage(page);
  56 | 
  57 |     // Generate and immediately redeem
  58 |     await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  59 |     const code = await couponsPage.generateNewCoupon();
  60 |     await couponsPage.redeemCoupon(code, PIN);
  61 |     await couponsPage.waitForRedeemResult();
  62 | 
  63 |     // Try redeeming again — should show error
  64 |     await couponsPage.redeemCoupon(code, PIN);
  65 |     const error = await couponsPage.expectRedeemError();
  66 |     await expect(error).toBeVisible();
  67 |   });
  68 | 
  69 | });
```