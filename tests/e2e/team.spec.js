const { test, expect } = require('@playwright/test');
const { TeamPage } = require('../../pages/TeamPage');

test.describe('Team', () => {

  test('navigates to Team tab', async ({ page }) => {
    const teamPage = new TeamPage(page);
    await page.goto(`${process.env.BASE_URL}/team`);
    await expect(teamPage.addUserBtn).toBeVisible();
  });

  test('adds a new team member', async ({ page }) => {
    const teamPage = new TeamPage(page);
    await page.goto(`${process.env.BASE_URL}/team`);
    await teamPage.openTeamTab();

    const uniqueLastName = `User${Date.now().toString().slice(-6)}`;

    await teamPage.addUser({
      firstName: 'Test',
      lastName: uniqueLastName,
      gender: 'Male',
     // phone: '(555) 123-4567', // valid 10-digit US format
      jobCategory: 'Physician',
      jobTitle: 'Diabetologist',
    });

    await teamPage.searchUser(uniqueLastName);
    await expect(page.getByText(`Test ${uniqueLastName}`)).toBeVisible({ timeout: 10000 });
  });

  test('searches and clears filter', async ({ page }) => {
    const teamPage = new TeamPage(page);
    await page.goto(`${process.env.BASE_URL}/team`);
    await teamPage.openTeamTab();

    await teamPage.searchUser('test');
    await expect(teamPage.searchInput).toHaveValue('test');

    await teamPage.clearFilter();
    await expect(teamPage.searchInput).toBeVisible();
  });

  test('edits an existing user via row dropdown', async ({ page }) => {
    const teamPage = new TeamPage(page);
    await page.goto(`${process.env.BASE_URL}/team`);
    await teamPage.openTeamTab();

    await teamPage.editUserByRowName('Kaleem Asad Kaleem Asad \\+');

    // Edit User dialog/form should be visible after clicking Edit Info → Edit User
    await expect(page.getByRole('dialog')).toBeVisible({ timeout: 10000 });
  });

});