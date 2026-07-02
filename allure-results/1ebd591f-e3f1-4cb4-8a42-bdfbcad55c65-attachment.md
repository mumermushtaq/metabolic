# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupons.spec.js >> Coupons >> shows an error when redeeming an already redeemed coupon
- Location: tests\e2e\coupons.spec.js:53:3

# Error details

```
TypeError: expect(received).toMatch(expected)

Matcher error: received value must be a string

Received has value: undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4] [cursor=pointer]:
      - alert [ref=e5]:
        - generic [ref=e7]: Invalid patient id
      - button "Okay" [ref=e8]
      - progressbar "notification timer" [ref=e9]
    - generic [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e12]:
          - img "sidebarLogoImg" [ref=e14]
          - generic:
            - img "sidebarLogoTxt"
        - generic [ref=e15]:
          - link "sidebarIcon2 Patients" [ref=e17] [cursor=pointer]:
            - /url: /patient
            - generic [ref=e18]:
              - img "sidebarIcon2" [ref=e19]
              - generic: Patients
          - link "sidebarIcon3 Chat" [ref=e21] [cursor=pointer]:
            - /url: /chat
            - generic [ref=e22]:
              - img "sidebarIcon3" [ref=e23]
              - generic: Chat
          - link "sidebarIcon4 Team" [ref=e25] [cursor=pointer]:
            - /url: /team
            - generic [ref=e26]:
              - img "sidebarIcon4" [ref=e27]
              - generic: Team
          - link "Survey" [ref=e29] [cursor=pointer]:
            - /url: /survey#templates
            - generic [ref=e30]:
              - img [ref=e31]
              - generic: Survey
          - link "Tasks" [ref=e34] [cursor=pointer]:
            - /url: /tasks
            - generic [ref=e35]:
              - img [ref=e36]
              - generic: Tasks
          - link "Coupons" [ref=e39] [cursor=pointer]:
            - /url: /coupon
            - generic [ref=e40]:
              - img [ref=e41]
              - generic: Coupons
      - generic [ref=e46]:
        - generic [ref=e48]:
          - link "Patients" [ref=e49] [cursor=pointer]:
            - /url: /patient
            - heading "Patients" [level=3] [ref=e50]
          - generic [ref=e51]:
            - img [ref=e52]
            - text: Umer Mushtaq
        - generic [ref=e55]:
          - generic [ref=e56]:
            - button "notification" [ref=e57] [cursor=pointer]:
              - img "notification" [ref=e58]
            - generic: "0"
          - generic [ref=e59]:
            - img [ref=e61]
            - generic [ref=e66] [cursor=pointer]:
              - heading "Umer Mushtaq" [level=6] [ref=e67]
              - generic [ref=e68]: Admin • Diabetologist
      - generic [ref=e69]:
        - list [ref=e72]:
          - link "Patient Info" [ref=e73] [cursor=pointer]:
            - /url: /patient/profile/1706
            - listitem [ref=e74]: Patient Info
          - link "Visits" [ref=e75] [cursor=pointer]:
            - /url: /patient/profile/visits/1706
            - listitem [ref=e76]: Visits
          - link "Consent & Intake" [ref=e77] [cursor=pointer]:
            - /url: /patient/profile/consent-intake/1706
            - listitem [ref=e78]: Consent & Intake
          - link "Health Info" [ref=e79] [cursor=pointer]:
            - /url: /patient/profile/health-info/1706
            - listitem [ref=e80]: Health Info
          - link "Documents" [ref=e81] [cursor=pointer]:
            - /url: /patient/profile/medical-reports/1706
            - listitem [ref=e82]: Documents
          - link "BCA Scans" [ref=e83] [cursor=pointer]:
            - /url: /patient/profile/bca-scans/1706
            - listitem [ref=e84]: BCA Scans
          - link "Glucose Analysis" [ref=e85] [cursor=pointer]:
            - /url: /patient/profile/glucose-analysis/1706
            - listitem [ref=e86]: Glucose Analysis
          - link "Add Coupon" [ref=e87] [cursor=pointer]:
            - /url: /patient/profile/add-coupon/1706
            - listitem [ref=e88]: Add Coupon
          - link "GLP-1 Protocol" [ref=e89] [cursor=pointer]:
            - /url: /patient/profile/glp-protocol/1706
            - listitem [ref=e90]: GLP-1 Protocol
        - generic [ref=e92]:
          - generic [ref=e93]:
            - heading "Active Coupon" [level=3] [ref=e94]
            - paragraph [ref=e95]: MH-MXM94E
          - generic [ref=e97]:
            - heading "Coupon Actions" [level=3] [ref=e98]
            - generic [ref=e99]:
              - button "Generate New Coupon" [active] [ref=e100] [cursor=pointer]:
                - img [ref=e101]
                - text: Generate New Coupon
              - button "Redeem Coupon" [ref=e103] [cursor=pointer]:
                - img [ref=e104]
                - text: Redeem Coupon
  - alert [ref=e106]
```

# Test source

```ts
  1  | ﻿const { test, expect } = require('@playwright/test');
  2  | const { CouponsPage } = require('../../pages/CouponsPage');
  3  | 
  4  | const PATIENT_NAME = 'umer mushtaq';
  5  | const PATIENT_ID = '1706';
  6  | const PIN = '1234';
  7  | 
  8  | function todayIso() {
  9  |   const now = new Date();
  10 |   const yyyy = now.getFullYear();
  11 |   const mm = String(now.getMonth() + 1).padStart(2, '0');
  12 |   const dd = String(now.getDate()).padStart(2, '0');
  13 |   return `${yyyy}-${mm}-${dd}`;
  14 | }
  15 | 
  16 | async function generateCouponForPatient(page) {
  17 |   const couponsPage = new CouponsPage(page);
  18 |   await couponsPage.openPatientAddCouponTab(PATIENT_ID);
  19 |   const couponCode = await couponsPage.generateNewCoupon();
> 20 |   expect(couponCode).toMatch(/^MH-[A-Z0-9]+$/);
     |                      ^ TypeError: expect(received).toMatch(expected)
  21 |   return { couponsPage, couponCode };
  22 | }
  23 | 
  24 | async function findCouponInList(couponsPage, couponCode, status = 'OPEN') {
  25 |   await couponsPage.openCouponsList();
  26 |   await couponsPage.searchCouponsByPatient(PATIENT_NAME);
  27 |   await couponsPage.filterByStatus(status);
  28 |   await couponsPage.setDateFilter(todayIso());
  29 |   await expect(couponsPage.page.getByText(couponCode).first()).toBeVisible({ timeout: 15000 });
  30 | }
  31 | 
  32 | test.describe('Coupons', () => {
  33 |   test('generates a coupon from patient profile, redeems it for same patient, and verifies redeemed status', async ({ page }) => {
  34 |     const { couponsPage, couponCode } = await generateCouponForPatient(page);
  35 | 
  36 |     await findCouponInList(couponsPage, couponCode, 'OPEN');
  37 |     const initialStatus = await couponsPage.getCouponStatus(couponCode);
  38 |     expect(initialStatus).toBe('ACTIVE');
  39 | 
  40 |     await couponsPage.openPatientFromList(PATIENT_NAME);
  41 |     await couponsPage.clickAddCouponTab();
  42 |     await couponsPage.redeemCoupon(couponCode, PIN);
  43 |     await couponsPage.expectRedeemSettled();
  44 | 
  45 |     await couponsPage.openCouponsList();
  46 |     await couponsPage.searchCouponsByPatient(PATIENT_NAME);
  47 |     await couponsPage.filterByStatus('REDEEMED');
  48 |     await couponsPage.setDateFilter(todayIso());
  49 |     await expect(page.getByText(couponCode).first()).toBeVisible({ timeout: 15000 });
  50 |     expect(await couponsPage.getCouponStatus(couponCode)).toBe('REDEEMED');
  51 |   });
  52 | 
  53 |   test('shows an error when redeeming an already redeemed coupon', async ({ page }) => {
  54 |     const { couponsPage, couponCode } = await generateCouponForPatient(page);
  55 | 
  56 |     await couponsPage.redeemCoupon(couponCode, PIN);
  57 |     await couponsPage.expectRedeemSettled();
  58 | 
  59 |     await couponsPage.redeemCoupon(couponCode, PIN);
  60 |     await expect(await couponsPage.expectRedeemError()).toBeVisible();
  61 |   });
  62 | 
  63 |   test('does not redeem a coupon generated for a different profile', async ({ page }) => {
  64 |     const otherPatientId = process.env.OTHER_PATIENT_ID;
  65 |     if (!otherPatientId) {
  66 |       test.skip(true, 'Set OTHER_PATIENT_ID to verify wrong-profile coupon redemption.');
  67 |     }
  68 | 
  69 |     const { couponsPage, couponCode } = await generateCouponForPatient(page);
  70 | 
  71 |     await couponsPage.openPatientAddCouponTab(otherPatientId);
  72 |     await couponsPage.redeemCoupon(couponCode, PIN);
  73 |     await expect(await couponsPage.expectRedeemError()).toBeVisible();
  74 |   });
  75 | });
  76 | 
```