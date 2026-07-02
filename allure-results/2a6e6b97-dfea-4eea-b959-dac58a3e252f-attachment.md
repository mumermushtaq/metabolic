# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\coupon.spec.js >> Add Coupon >> full flow: generate coupon, find it in list, redeem it
- Location: tests\e2e\coupon.spec.js:41:3

# Error details

```
TypeError: expect(received).toMatch(expected)

Matcher error: received value must be a string

Received has value: null
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
          - link "Coupon" [ref=e49] [cursor=pointer]:
            - /url: /coupon
            - heading "Coupon" [level=3] [ref=e50]
          - generic [ref=e51]: Coupon List
        - generic [ref=e53]:
          - generic [ref=e54]:
            - button "notification" [ref=e55] [cursor=pointer]:
              - img "notification" [ref=e56]
            - generic: "0"
          - generic [ref=e57]:
            - img [ref=e59]
            - generic [ref=e64] [cursor=pointer]:
              - heading "Umer Mushtaq" [level=6] [ref=e65]
              - generic [ref=e66]: Admin • Diabetologist
      - generic [ref=e67]:
        - generic [ref=e68]:
          - generic [ref=e69]:
            - generic [ref=e70]:
              - generic [ref=e71]: Search
              - textbox "Search with Patient Name or MRN" [active] [ref=e72]: umer mushtaq
            - generic [ref=e73]:
              - generic [ref=e74]: Status
              - button "All" [ref=e75] [cursor=pointer]:
                - generic [ref=e76]: All
                - img [ref=e78]
            - generic [ref=e80]:
              - generic [ref=e82]:
                - generic [ref=e83]: Date Range
                - button "dd/mm/yyyy" [ref=e84] [cursor=pointer]
                - button "dd/mm/yyyy" [ref=e86] [cursor=pointer]
                - button "Open date picker" [ref=e87] [cursor=pointer]:
                  - img [ref=e88]
                - textbox
                - textbox
              - button "Reset" [ref=e90] [cursor=pointer]
          - table [ref=e95]:
            - rowgroup [ref=e96]:
              - row "Patient Name MRN Coupon Code Status Redeemed By Redeemed at Created At" [ref=e97]:
                - columnheader "Patient Name" [ref=e99]:
                  - generic [ref=e100]: Patient Name
                - columnheader "MRN" [ref=e102]:
                  - generic [ref=e103]: MRN
                - columnheader "Coupon Code" [ref=e105]:
                  - generic [ref=e106]: Coupon Code
                - columnheader "Status" [ref=e108]:
                  - generic [ref=e109]: Status
                - columnheader "Redeemed By" [ref=e111]:
                  - generic [ref=e112]: Redeemed By
                - columnheader "Redeemed at" [ref=e114]:
                  - generic [ref=e115]: Redeemed at
                - columnheader "Created At" [ref=e117]:
                  - generic [ref=e118]: Created At
            - rowgroup [ref=e119]:
              - row "umer mushtaq 8765 MH-A0FLEQ REDEEMED Umer Mushtaq 25 Jun 2026 25 Jun 2026" [ref=e120]:
                - cell "umer mushtaq" [ref=e121]:
                  - generic [ref=e122]: umer mushtaq
                - cell "8765" [ref=e123]:
                  - generic [ref=e124]: "8765"
                - cell "MH-A0FLEQ" [ref=e125]:
                  - generic [ref=e126]: MH-A0FLEQ
                - cell "REDEEMED" [ref=e127]:
                  - generic [ref=e130]: REDEEMED
                - cell "Umer Mushtaq" [ref=e131]:
                  - generic [ref=e132]: Umer Mushtaq
                - cell "25 Jun 2026" [ref=e133]:
                  - generic [ref=e134]: 25 Jun 2026
                - cell "25 Jun 2026" [ref=e135]:
                  - generic [ref=e136]: 25 Jun 2026
              - row "umer mushtaq 8765 MH-P4J7MZ OPEN - 25 Jun 2026" [ref=e137]:
                - cell "umer mushtaq" [ref=e138]:
                  - generic [ref=e139]: umer mushtaq
                - cell "8765" [ref=e140]:
                  - generic [ref=e141]: "8765"
                - cell "MH-P4J7MZ" [ref=e142]:
                  - generic [ref=e143]: MH-P4J7MZ
                - cell "OPEN" [ref=e144]:
                  - generic [ref=e147]: OPEN
                - cell [ref=e148]
                - cell "-" [ref=e149]:
                  - generic [ref=e150]: "-"
                - cell "25 Jun 2026" [ref=e151]:
                  - generic [ref=e152]: 25 Jun 2026
              - row "umer mushtaq 8765 MH-AXOTM1 OPEN - 25 Jun 2026" [ref=e153]:
                - cell "umer mushtaq" [ref=e154]:
                  - generic [ref=e155]: umer mushtaq
                - cell "8765" [ref=e156]:
                  - generic [ref=e157]: "8765"
                - cell "MH-AXOTM1" [ref=e158]:
                  - generic [ref=e159]: MH-AXOTM1
                - cell "OPEN" [ref=e160]:
                  - generic [ref=e163]: OPEN
                - cell [ref=e164]
                - cell "-" [ref=e165]:
                  - generic [ref=e166]: "-"
                - cell "25 Jun 2026" [ref=e167]:
                  - generic [ref=e168]: 25 Jun 2026
              - row "umer mushtaq 8765 MH-CUTAHF REDEEMED Umer Mushtaq 25 Jun 2026 25 Jun 2026" [ref=e169]:
                - cell "umer mushtaq" [ref=e170]:
                  - generic [ref=e171]: umer mushtaq
                - cell "8765" [ref=e172]:
                  - generic [ref=e173]: "8765"
                - cell "MH-CUTAHF" [ref=e174]:
                  - generic [ref=e175]: MH-CUTAHF
                - cell "REDEEMED" [ref=e176]:
                  - generic [ref=e179]: REDEEMED
                - cell "Umer Mushtaq" [ref=e180]:
                  - generic [ref=e181]: Umer Mushtaq
                - cell "25 Jun 2026" [ref=e182]:
                  - generic [ref=e183]: 25 Jun 2026
                - cell "25 Jun 2026" [ref=e184]:
                  - generic [ref=e185]: 25 Jun 2026
              - row "umer mushtaq 8765 MH-K1S42S REDEEMED Umer Mushtaq 29 Apr 2026 29 Apr 2026" [ref=e186]:
                - cell "umer mushtaq" [ref=e187]:
                  - generic [ref=e188]: umer mushtaq
                - cell "8765" [ref=e189]:
                  - generic [ref=e190]: "8765"
                - cell "MH-K1S42S" [ref=e191]:
                  - generic [ref=e192]: MH-K1S42S
                - cell "REDEEMED" [ref=e193]:
                  - generic [ref=e196]: REDEEMED
                - cell "Umer Mushtaq" [ref=e197]:
                  - generic [ref=e198]: Umer Mushtaq
                - cell "29 Apr 2026" [ref=e199]:
                  - generic [ref=e200]: 29 Apr 2026
                - cell "29 Apr 2026" [ref=e201]:
                  - generic [ref=e202]: 29 Apr 2026
              - row "umer mushtaq 8765 MH-F9T5A1 REDEEMED Umer Mushtaq 29 Apr 2026 29 Apr 2026" [ref=e203]:
                - cell "umer mushtaq" [ref=e204]:
                  - generic [ref=e205]: umer mushtaq
                - cell "8765" [ref=e206]:
                  - generic [ref=e207]: "8765"
                - cell "MH-F9T5A1" [ref=e208]:
                  - generic [ref=e209]: MH-F9T5A1
                - cell "REDEEMED" [ref=e210]:
                  - generic [ref=e213]: REDEEMED
                - cell "Umer Mushtaq" [ref=e214]:
                  - generic [ref=e215]: Umer Mushtaq
                - cell "29 Apr 2026" [ref=e216]:
                  - generic [ref=e217]: 29 Apr 2026
                - cell "29 Apr 2026" [ref=e218]:
                  - generic [ref=e219]: 29 Apr 2026
              - row "umer mushtaq 8765 MH-9N7PU1 REDEEMED Umer Mushtaq 29 Apr 2026 29 Apr 2026" [ref=e220]:
                - cell "umer mushtaq" [ref=e221]:
                  - generic [ref=e222]: umer mushtaq
                - cell "8765" [ref=e223]:
                  - generic [ref=e224]: "8765"
                - cell "MH-9N7PU1" [ref=e225]:
                  - generic [ref=e226]: MH-9N7PU1
                - cell "REDEEMED" [ref=e227]:
                  - generic [ref=e230]: REDEEMED
                - cell "Umer Mushtaq" [ref=e231]:
                  - generic [ref=e232]: Umer Mushtaq
                - cell "29 Apr 2026" [ref=e233]:
                  - generic [ref=e234]: 29 Apr 2026
                - cell "29 Apr 2026" [ref=e235]:
                  - generic [ref=e236]: 29 Apr 2026
              - row "umer mushtaq 8765 MH-3RV4UG REDEEMED Umer Mushtaq 29 Apr 2026 29 Apr 2026" [ref=e237]:
                - cell "umer mushtaq" [ref=e238]:
                  - generic [ref=e239]: umer mushtaq
                - cell "8765" [ref=e240]:
                  - generic [ref=e241]: "8765"
                - cell "MH-3RV4UG" [ref=e242]:
                  - generic [ref=e243]: MH-3RV4UG
                - cell "REDEEMED" [ref=e244]:
                  - generic [ref=e247]: REDEEMED
                - cell "Umer Mushtaq" [ref=e248]:
                  - generic [ref=e249]: Umer Mushtaq
                - cell "29 Apr 2026" [ref=e250]:
                  - generic [ref=e251]: 29 Apr 2026
                - cell "29 Apr 2026" [ref=e252]:
                  - generic [ref=e253]: 29 Apr 2026
              - row "umer mushtaq 8765 MH-4948N6 REDEEMED Umer Mushtaq 29 Apr 2026 29 Apr 2026" [ref=e254]:
                - cell "umer mushtaq" [ref=e255]:
                  - generic [ref=e256]: umer mushtaq
                - cell "8765" [ref=e257]:
                  - generic [ref=e258]: "8765"
                - cell "MH-4948N6" [ref=e259]:
                  - generic [ref=e260]: MH-4948N6
                - cell "REDEEMED" [ref=e261]:
                  - generic [ref=e264]: REDEEMED
                - cell "Umer Mushtaq" [ref=e265]:
                  - generic [ref=e266]: Umer Mushtaq
                - cell "29 Apr 2026" [ref=e267]:
                  - generic [ref=e268]: 29 Apr 2026
                - cell "29 Apr 2026" [ref=e269]:
                  - generic [ref=e270]: 29 Apr 2026
              - row "umer mushtaq 8765 MH-GGLF1R REDEEMED Umer Mushtaq 29 Apr 2026 29 Apr 2026" [ref=e271]:
                - cell "umer mushtaq" [ref=e272]:
                  - generic [ref=e273]: umer mushtaq
                - cell "8765" [ref=e274]:
                  - generic [ref=e275]: "8765"
                - cell "MH-GGLF1R" [ref=e276]:
                  - generic [ref=e277]: MH-GGLF1R
                - cell "REDEEMED" [ref=e278]:
                  - generic [ref=e281]: REDEEMED
                - cell "Umer Mushtaq" [ref=e282]:
                  - generic [ref=e283]: Umer Mushtaq
                - cell "29 Apr 2026" [ref=e284]:
                  - generic [ref=e285]: 29 Apr 2026
                - cell "29 Apr 2026" [ref=e286]:
                  - generic [ref=e287]: 29 Apr 2026
          - list [ref=e290]:
            - listitem:
              - img
            - listitem [ref=e291]: "1"
            - listitem [ref=e292]: "2"
            - listitem [ref=e293]:
              - img [ref=e294]
        - generic [ref=e296]:
          - generic [ref=e297]:
            - paragraph [ref=e299]: Chat
            - button "delete" [ref=e300] [cursor=pointer]:
              - img [ref=e301]
          - generic [ref=e305]:
            - paragraph [ref=e306] [cursor=pointer]: Metabolic
            - paragraph [ref=e307] [cursor=pointer]: Zone
  - alert [ref=e308]: Metabolic
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { CouponPage } = require('../../pages/CouponPage');
  3   | 
  4   | const PATIENT_ID   = '1706';
  5   | const PATIENT_NAME = 'umer mushtaq';
  6   | const PATIENT_LINK = 'umer mushtaq 8765';
  7   | const PIN          = '1234';
  8   | 
  9   | test.describe('Add Coupon', () => {
  10  | 
  11  |   test('navigates to Add Coupon tab', async ({ page }) => {
  12  |     const couponPage = new CouponPage(page);
  13  |     await couponPage.openAddCouponTab(PATIENT_ID);
  14  |     await expect(couponPage.generateNewCouponBtn).toBeVisible();
  15  |   });
  16  | 
  17  |   test('generates a new coupon', async ({ page }) => {
  18  |     const couponPage = new CouponPage(page);
  19  |     await couponPage.openAddCouponTab(PATIENT_ID);
  20  | 
  21  |     const code = await couponPage.generateCoupon();
  22  |     console.log('Generated coupon code:', code);
  23  | 
  24  |     // A coupon code should have been generated
  25  |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  26  |   });
  27  | 
  28  |   test('searches patient coupons and filters by OPEN status', async ({ page }) => {
  29  |     const couponPage = new CouponPage(page);
  30  |     await couponPage.openAddCouponTab(PATIENT_ID);
  31  |     await couponPage.openCouponsList();
  32  | 
  33  |     await couponPage.searchByPatient(PATIENT_NAME);
  34  |     await couponPage.filterByStatus('OPEN');
  35  |     await couponPage.setDateToToday();
  36  | 
  37  |     // Coupon list or empty state should be visible
  38  |     await expect(couponPage.couponSearchInput).toBeVisible();
  39  |   });
  40  | 
  41  |   test('full flow: generate coupon, find it in list, redeem it', async ({ page }) => {
  42  |     const couponPage = new CouponPage(page);
  43  | 
  44  |     // Step 1: Generate coupon on patient profile
  45  |     await couponPage.openAddCouponTab(PATIENT_ID);
  46  |     const generatedCode = await couponPage.generateCoupon();
  47  |     expect(generatedCode).toMatch(/MH-[A-Z0-9]+/);
  48  |     console.log('Generated:', generatedCode);
  49  | 
  50  |     // Step 2: Go to coupon list and verify it appears as ACTIVE/OPEN
  51  |     await couponPage.openCouponsList();
  52  |     await couponPage.searchByPatient(PATIENT_NAME);
  53  |     await couponPage.filterByStatus('OPEN');
  54  |     await couponPage.setDateToToday();
  55  | 
  56  |     const status = await couponPage.getCouponStatus(generatedCode);
  57  |     console.log('Status in list:', status);
  58  | 
  59  |     // Step 3: Go back to patient and redeem the coupon
  60  |     await couponPage.openPatientProfile(PATIENT_NAME, PATIENT_LINK);
  61  |     await couponPage.addCouponTab.click();
  62  | 
  63  |     const redeemMsg = await couponPage.redeemCoupon(generatedCode, PIN);
  64  |     console.log('Redeem result:', redeemMsg);
  65  | 
  66  |     // Step 4: Go back to coupon list and verify REDEEMED status
  67  |     await couponPage.openCouponsList();
  68  |     await couponPage.searchByPatient(PATIENT_NAME);
  69  |     const redeemedStatus = await couponPage.getCouponStatus(generatedCode);
> 70  |     expect(redeemedStatus).toMatch(/REDEEMED/i);
      |                            ^ TypeError: expect(received).toMatch(expected)
  71  |   });
  72  | 
  73  |   test('redeeming an already-redeemed coupon shows error', async ({ page }) => {
  74  |     const couponPage = new CouponPage(page);
  75  | 
  76  |     // Find a REDEEMED coupon from the list
  77  |     await couponPage.openCouponsList();
  78  |     await couponPage.searchByPatient(PATIENT_NAME);
  79  | 
  80  |     // Get any coupon code from the list to attempt re-redemption
  81  |     const code = await couponPage.getFirstCouponCode();
  82  |     if (!code) { test.skip(); return; }
  83  | 
  84  |     // Try to redeem it
  85  |     await couponPage.openPatientProfile(PATIENT_NAME, PATIENT_LINK);
  86  |     await couponPage.addCouponTab.click();
  87  |     const msg = await couponPage.redeemCoupon(code, PIN);
  88  |     console.log('Re-redeem message:', msg);
  89  | 
  90  |     // Should show some error or "already redeemed" message
  91  |     expect(msg).toBeTruthy();
  92  |   });
  93  | 
  94  |   test('coupon generated for one patient cannot be redeemed by another', async ({ page }) => {
  95  |     const couponPage = new CouponPage(page);
  96  | 
  97  |     // Generate a coupon for patient 1706
  98  |     await couponPage.openAddCouponTab(PATIENT_ID);
  99  |     const code = await couponPage.generateCoupon();
  100 |     expect(code).toMatch(/MH-[A-Z0-9]+/);
  101 | 
  102 |     // Try to redeem on a DIFFERENT patient (use a known different patient ID if available)
  103 |     // For now we test the same patient with wrong PIN to confirm validation
  104 |     await couponPage.openAddCouponTab(PATIENT_ID);
  105 |     const msg = await couponPage.redeemCoupon(code, '0000'); // wrong PIN
  106 |     console.log('Wrong PIN message:', msg);
  107 |     expect(msg).toBeTruthy(); // Should show an error
  108 |   });
  109 | 
  110 | });
```