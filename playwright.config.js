// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

  // Where Playwright looks for test files
  testDir: './tests',

  // Run tests in parallel for speed
  fullyParallel: true,

  // Fail build on CI if test.only is accidentally left
  forbidOnly: !!process.env.CI,

  // Retry failed tests twice on CI, never locally
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 4 : undefined,

  // Global timeout per test = 30 seconds
  timeout: 30000,

  // Reporting configuration
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['list'],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
  ],

  use: {
    // Your portal URL from .env file
    baseURL: process.env.BASE_URL,

    // Capture screenshot on failure only
    screenshot: 'only-on-failure',

    // Record video on failure only
    video: 'retain-on-failure',

    // Trace on failure for debugging
    trace: 'retain-on-failure',
  },

  // Test across multiple browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});