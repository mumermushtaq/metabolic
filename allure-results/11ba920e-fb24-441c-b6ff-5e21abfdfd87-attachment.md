# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.setup.js >> authenticate
- Location: tests\e2e\auth.setup.js:6:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/patient**" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - img "Metabolic logo" [ref=e6]
    - generic [ref=e8]:
      - heading "Verify Phone Number" [level=4] [ref=e9]
      - paragraph [ref=e10]:
        - text: We sent you a 6-digit verification code to +9203311111111
        - link "Edit Number" [ref=e11] [cursor=pointer]:
          - /url: /
      - generic [ref=e12]:
        - generic [ref=e14]:
          - generic [ref=e15]: Enter Confirmation Code
          - generic [ref=e16]:
            - spinbutton "Enter verification code" [disabled] [ref=e18]: "1"
            - spinbutton "Enter verification code" [disabled] [ref=e20]: "1"
            - spinbutton "Enter verification code" [disabled] [ref=e22]: "2"
            - spinbutton "Enter verification code" [disabled] [ref=e24]: "2"
            - spinbutton "Enter verification code" [disabled] [ref=e26]: "3"
            - spinbutton "Enter verification code" [disabled] [ref=e28]: "3"
        - paragraph [ref=e30]: Expires In01:57
        - generic [ref=e31]:
          - button "Next" [disabled]:
            - generic: Next
          - heading "No account? Sign up" [level=5] [ref=e32]
  - alert [ref=e33]: /otp-verification?phoneNumber=%2B9203311111111
```

# Test source

```ts
  1  | const { test: setup } = require('@playwright/test');
  2  | const { LoginPage } = require('../../pages/LoginPage');
  3  | const path = require('path');
  4  | const fs = require('fs');
  5  | 
  6  | setup('authenticate', async ({ page }) => {
  7  | 
  8  |   const loginPage = new LoginPage(page);
  9  | 
  10 |   // Step 1 — Login
  11 |   await loginPage.goto();
  12 |   await loginPage.login(
  13 |     process.env.TEST_PHONE,
  14 |     process.env.TEST_PASSWORD
  15 |   );
  16 | 
  17 |   // Step 2 — Enter OTP
  18 |   await loginPage.enterOTP(process.env.TEST_OTP);
  19 | 
  20 |   // Step 3 — Wait for patient listings page
> 21 |   await page.waitForURL('**/patient**', { timeout: 30000 });
     |              ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  22 | 
  23 |   // Step 4 — Confirm login using heading (networkidle never fires — chat widget)
  24 |   await page.waitForSelector('h3:has-text("Patients")', { timeout: 30000 });
  25 |   console.log('✅ Login confirmed!');
  26 | 
  27 |   // Step 5 — Save session
  28 |   const authDir = path.join(process.cwd(), '.auth');
  29 |   if (!fs.existsSync(authDir)) fs.mkdirSync(authDir, { recursive: true });
  30 | 
  31 |   await page.context().storageState({
  32 |     path: path.join(authDir, 'session.json')
  33 |   });
  34 | 
  35 |   console.log('✅ Session saved!');
  36 | });
```