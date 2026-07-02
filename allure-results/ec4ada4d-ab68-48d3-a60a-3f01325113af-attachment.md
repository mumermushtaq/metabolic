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
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4] [cursor=pointer]:
        - alert [ref=e5]:
          - generic [ref=e7]: Invalid patient id
        - button "Okay" [ref=e8]
        - progressbar "notification timer" [ref=e9]
      - generic [ref=e10] [cursor=pointer]:
        - alert [ref=e11]:
          - generic [ref=e13]: Coupon redeemed successfully
        - button "Okay" [ref=e14]
        - progressbar "notification timer" [ref=e15]
    - generic [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - img "sidebarLogoImg" [ref=e20]
          - generic:
            - img "sidebarLogoTxt"
        - generic [ref=e21]:
          - link "sidebarIcon2 Patients" [ref=e23] [cursor=pointer]:
            - /url: /patient
            - generic [ref=e24]:
              - img "sidebarIcon2" [ref=e25]
              - generic: Patients
          - link "sidebarIcon3 Chat" [ref=e27] [cursor=pointer]:
            - /url: /chat
            - generic [ref=e28]:
              - img "sidebarIcon3" [ref=e29]
              - generic: Chat
          - link "sidebarIcon4 Team" [ref=e31] [cursor=pointer]:
            - /url: /team
            - generic [ref=e32]:
              - img "sidebarIcon4" [ref=e33]
              - generic: Team
          - link "Survey" [ref=e35] [cursor=pointer]:
            - /url: /survey#templates
            - generic [ref=e36]:
              - img [ref=e37]
              - generic: Survey
          - link "Tasks" [ref=e40] [cursor=pointer]:
            - /url: /tasks
            - generic [ref=e41]:
              - img [ref=e42]
              - generic: Tasks
          - link "Coupons" [ref=e45] [cursor=pointer]:
            - /url: /coupon
            - generic [ref=e46]:
              - img [ref=e47]
              - generic: Coupons
      - generic [ref=e52]:
        - generic [ref=e54]:
          - link "Coupon" [ref=e55] [cursor=pointer]:
            - /url: /coupon
            - heading "Coupon" [level=3] [ref=e56]
          - generic [ref=e57]: Coupon List
        - generic [ref=e59]:
          - generic [ref=e60]:
            - button "notification" [ref=e61] [cursor=pointer]:
              - img "notification" [ref=e62]
            - generic: "0"
          - generic [ref=e63]:
            - img [ref=e65]
            - generic [ref=e70] [cursor=pointer]:
              - heading "Umer Mushtaq" [level=6] [ref=e71]
              - generic [ref=e72]: Admin • Diabetologist
      - generic [ref=e73]:
        - generic [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]:
              - generic [ref=e77]: Search
              - textbox "Search with Patient Name or MRN" [active] [ref=e78]: MH-5MOQKY
            - generic [ref=e79]:
              - generic [ref=e80]: Status
              - button "All" [ref=e81] [cursor=pointer]:
                - generic [ref=e82]: All
                - img [ref=e84]
            - generic [ref=e86]:
              - generic [ref=e88]:
                - generic [ref=e89]: Date Range
                - button "dd/mm/yyyy" [ref=e90] [cursor=pointer]
                - button "dd/mm/yyyy" [ref=e92] [cursor=pointer]
                - button "Open date picker" [ref=e93] [cursor=pointer]:
                  - img [ref=e94]
                - textbox
                - textbox
              - button "Reset" [ref=e96] [cursor=pointer]
          - generic [ref=e98]: No coupons found for selected filters.
          - list [ref=e101]:
            - listitem:
              - img
            - listitem:
              - img
        - generic [ref=e102]:
          - generic [ref=e103]:
            - paragraph [ref=e105]: Chat
            - button "delete" [ref=e106] [cursor=pointer]:
              - img [ref=e107]
          - generic [ref=e111]:
            - paragraph [ref=e112] [cursor=pointer]: Metabolic
            - paragraph [ref=e113] [cursor=pointer]: Zone
  - alert [ref=e114]: Metabolic
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
  25 |     // Step 2: Go to coupon list and search directly by code
  26 |     // Do NOT call searchCouponsByPatient first — it conflicts with getCouponStatus's own search
  27 |     await couponsPage.openCouponsList();
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
  46 |     // Step 3: Verify REDEEMED in list — search directly by code
  47 |     await couponsPage.openCouponsList();
  48 |     const status = await couponsPage.getCouponStatus(code);
  49 |     console.log('Status after redeem:', status);
> 50 |     expect(status).toBe('REDEEMED');
     |                    ^ Error: expect(received).toBe(expected) // Object.is equality
  51 |   });
  52 | 
  53 |   test('shows an error when redeeming an already redeemed coupon', async ({ page }) => {
  54 |     const couponsPage = new CouponsPage(page);
  55 | 
  56 |     // Generate and immediately redeem
  57 |     await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  58 |     const code = await couponsPage.generateNewCoupon();
  59 |     await couponsPage.redeemCoupon(code, PIN);
  60 |     await couponsPage.waitForRedeemResult();
  61 | 
  62 |     // Try redeeming again — should show error
  63 |     await couponsPage.redeemCoupon(code, PIN);
  64 |     const error = await couponsPage.expectRedeemError();
  65 |     await expect(error).toBeVisible();
  66 |   });
  67 | 
  68 | });
```