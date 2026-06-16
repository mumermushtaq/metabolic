class LoginPage {

  constructor(page) {
    this.page = page;

    // Login page locators
    this.phoneInput    = page.getByRole('textbox', { name: 'Phone Number' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton  = page.getByRole('button', { name: 'Sign In' });

    // OTP page locators (6 separate boxes)
    this.otpBox1 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(0);
    this.otpBox2 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(1);
    this.otpBox3 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(2);
    this.otpBox4 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(3);
    this.otpBox5 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(4);
    this.otpBox6 = page.getByRole('spinbutton', { name: 'Enter verification code' }).nth(5);
    this.nextButton = page.getByRole('button', { name: 'Next' });
  }

  // Navigate to login page
  async goto() {
    await this.page.goto(process.env.BASE_URL);
  }

  // Fill login credentials
  async login(phone, password) {
    await this.phoneInput.click();
    await this.phoneInput.fill(phone);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  // Fill OTP boxes one by one
  async enterOTP(otp) {
    const digits = otp.split(''); // '112233' → ['1','1','2','2','3','3']
    await this.otpBox1.fill(digits[0]);
    await this.otpBox2.fill(digits[1]);
    await this.otpBox3.fill(digits[2]);
    await this.otpBox4.fill(digits[3]);
    await this.otpBox5.fill(digits[4]);
    await this.otpBox6.fill(digits[5]);
    await this.nextButton.click();
  }

  // Complete full login flow in one call
  async fullLogin(phone, password, otp) {
    await this.goto();
    await this.login(phone, password);
    await this.enterOTP(otp);
  }

}

module.exports = { LoginPage };