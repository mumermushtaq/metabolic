const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('Metabolic Portal - Login Flow', () => {

  // Login tests must start with no saved session —
  // the chromium project injects storageState which redirects to /patient,
  // making the login form invisible and causing all tests here to timeout.
  test.use({ storageState: { cookies: [], origins: [] } });

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  // ✅ Test 1 - Successful Login
  test('should login successfully with valid credentials', async ({ page }) => {
    
    // Perform full login using credentials from .env
    await loginPage.fullLogin(
      process.env.TEST_PHONE,
      process.env.TEST_PASSWORD,
      process.env.TEST_OTP
    );

    // ✅ Assert - URL should change after successful login
    await expect(page).not.toHaveURL(process.env.BASE_URL);

    // ✅ Assert - Page should not show login button anymore
    await expect(loginPage.signInButton).not.toBeVisible();

  });

  // ❌ Test 2 - Wrong Password
  test('should show error with invalid password', async ({ page }) => {

    await loginPage.goto();
    await loginPage.login(
      process.env.TEST_PHONE,
      'WrongPassword123'
    );

    // ✅ Assert - Should stay on login page
    await expect(loginPage.signInButton).toBeVisible();

  });

  // ❌ Test 3 - Empty Fields
  test('should not allow login with empty fields', async ({ page }) => {

    await loginPage.goto();
    await loginPage.signInButton.click();

    // ✅ Assert - Should stay on login page
    await expect(loginPage.signInButton).toBeVisible();

  });

});