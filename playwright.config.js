// @ts-check
const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: process.env.CI ? 60000 : 30000,

  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['list'],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    // Step 1 — Login once and save session
    {
      name: 'setup',
      testMatch: /auth\.setup\.js/,
    },

    // Step 2 — Run all tests on Chromium using saved session
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: '.auth/session.json',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
      dependencies: ['setup'],
    },

    // Firefox — enable when Chrome suite is complete
    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     storageState: '.auth/session.json',
    //     viewport: null,
    //     launchOptions: { args: ['--start-maximized'] },
    //   },
    //   dependencies: ['setup'],
    // },
  ],
});