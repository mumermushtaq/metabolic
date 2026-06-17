const { test: setup } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const path = require('path');
const fs = require('fs');

setup('authenticate', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Step 1 — Login
  await loginPage.goto();
  await loginPage.login(
    process.env.TEST_PHONE,
    process.env.TEST_PASSWORD
  );

  // Step 2 — Enter OTP
  await loginPage.enterOTP(process.env.TEST_OTP);

  // Step 3 — Wait for patient listings page
  await page.waitForURL('**/patient**', { timeout: 30000 });
  await page.waitForLoadState('networkidle');

  // Step 4 — Confirm login using heading specifically
  await page.waitForSelector('h3:has-text("Patients")', { timeout: 15000 });
  console.log('✅ Login confirmed!');

  // Step 5 — Save session
  const authDir = path.join(process.cwd(), '.auth');
  if (!fs.existsSync(authDir)) fs.mkdirSync(authDir, { recursive: true });

  await page.context().storageState({
    path: path.join(authDir, 'session.json')
  });

  console.log('✅ Session saved!');
});