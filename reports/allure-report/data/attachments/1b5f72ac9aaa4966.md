# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\login.spec.js >> Metabolic Portal - Login Flow >> should login successfully with valid credentials
- Location: tests\e2e\login.spec.js:14:3

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     // Login page locators
  7  |     this.phoneInput    = page.getByRole('textbox', { name: 'Phone Number' });
  8  |     this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  9  |     this.signInButton  = page.getByRole('button', { name: 'Sign In' });
  10 | 
  11 |     // OTP page locators (6 separate boxes)
  12 |     this.otpBox1 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(0);
  13 |     this.otpBox2 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(1);
  14 |     this.otpBox3 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(2);
  15 |     this.otpBox4 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(3);
  16 |     this.otpBox5 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(4);
  17 |     this.otpBox6 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(5);
  18 |     this.nextButton = page.getByRole('button', { name: 'Next' });
  19 |   }
  20 | 
  21 |   // Navigate to login page
  22 |   async goto() {
> 23 |     await this.page.goto(process.env.BASE_URL);
     |                     ^ Error: page.goto: url: expected string, got undefined
  24 |   }
  25 | 
  26 |   // Fill login credentials
  27 |   async login(phone, password) {
  28 |     await this.phoneInput.click();
  29 |     await this.phoneInput.fill(phone);
  30 |     await this.passwordInput.click();
  31 |     await this.passwordInput.fill(password);
  32 |     await this.signInButton.click();
  33 |   }
  34 | 
  35 |   // Fill OTP boxes one by one
  36 |   async enterOTP(otp) {
  37 |     const digits = otp.split(''); // '112233' → ['1','1','2','2','3','3']
  38 |     await this.otpBox1.fill(digits[0]);
  39 |     await this.otpBox2.fill(digits[1]);
  40 |     await this.otpBox3.fill(digits[2]);
  41 |     await this.otpBox4.fill(digits[3]);
  42 |     await this.otpBox5.fill(digits[4]);
  43 |     await this.otpBox6.fill(digits[5]);
  44 |     await this.nextButton.click();
  45 |   }
  46 | 
  47 |   // Complete full login flow in one call
  48 |   async fullLogin(phone, password, otp) {
  49 |     await this.goto();
  50 |     await this.login(phone, password);
  51 |     await this.enterOTP(otp);
  52 |   }
  53 | 
  54 | }
  55 | 
  56 | module.exports = { LoginPage };
```