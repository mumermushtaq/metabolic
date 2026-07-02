class TeamPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ────────────────────────────────────────────────
    this.teamTab = page.getByRole('link', { name: 'sidebarIcon4 Team' });

    // ── Add User dialog ──────────────────────────────────────────
    this.addUserBtn       = page.getByRole('button', { name: 'Add User' });
    this.firstNameInput   = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput    = page.getByRole('textbox', { name: 'Last Name' });
    this.phoneInput       = page.getByRole('textbox', { name: '(XXX) XXX XXX' });
    this.jobTitleDropdown = page.locator('div').filter({ hasText: /^Select Job Title$/ });
    // Submit button has a leading space in its text (" Add User") so getByRole name match fails.
    // Target by type="submit" scoped to dialog — stable and unambiguous.
    this.dialogAddUserBtn = page.getByRole('dialog').locator('button[type="submit"]');

    // ── Search / list ─────────────────────────────────────────────
    this.searchInput   = page.getByRole('textbox', { name: 'Search' });
    this.clearFilterBtn = page.getByRole('button', { name: 'Clear Filter' });

    // ── Row actions ───────────────────────────────────────────────
    this.editInfoOption = page.getByText('Edit Info');
    this.editUserBtn    = page.getByRole('button', { name: 'Edit User' });
  }

  // ── Navigate to Team tab ───────────────────────────────────────
  async openTeamTab() {
    await this.teamTab.click();
    await this.addUserBtn.waitFor({ state: 'visible', timeout: 15000 });
  }

  // ── Add a new team member ──────────────────────────────────────
  // gender: 'Male' | 'Female'
  // phone: if omitted, a unique number is generated to avoid duplicate-phone errors across runs
  async addUser({ firstName, lastName, gender = 'Male', phone, jobCategory = 'Physician', jobTitle }) {
    // Auto-generate a unique phone if none provided — reusing the same number causes server errors
    if (!phone) {
      const suffix = Date.now().toString().slice(-7);
      phone = `(555) ${suffix.slice(0,3)}-${suffix.slice(3)}`;
    }
    await this.addUserBtn.click();

    await this.firstNameInput.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);

    const dialog = this.page.getByRole('dialog');

    if (gender) {
      await dialog.getByText(gender, { exact: true }).click();
    }

    if (phone) {
      await this.phoneInput.click();
      await this.phoneInput.fill(phone);
    }

    if (jobCategory) {
      // Scope to dialog — table rows behind it also contain role/job-title text
      await dialog.getByText(jobCategory, { exact: true }).click();
    }

    if (jobTitle) {
      // Codegen confirmed: .nth(4) is the correct job title dropdown index
      await this.page.locator('div').filter({ hasText: /^Select Job Title$/ }).nth(4).click();
      await this.page.getByRole('option', { name: jobTitle }).click();
    }

    // Confirm the submit button is enabled before clicking — a disabled button
    // means required fields are still missing/invalid
    await this.dialogAddUserBtn.waitFor({ state: 'visible', timeout: 10000 });
    const isDisabled = await this.dialogAddUserBtn.isDisabled().catch(() => false);
    if (isDisabled) {
      throw new Error('Add User submit button is disabled — a required field is likely missing or invalid.');
    }

    await this.dialogAddUserBtn.click();

    // Wait for the dialog to close — if it doesn't, the submission likely failed
    try {
      await dialog.waitFor({ state: 'hidden', timeout: 30000 });
    } catch (e) {
      const errorMsg = await dialog.locator('[class*="error"], [class*="Error"], .invalid-feedback')
        .first().textContent({ timeout: 2000 }).catch(() => null);
      throw new Error(
        `Add User dialog did not close after submit.` +
        (errorMsg ? ` Possible validation error: "${errorMsg.trim()}"` : ' No visible error message found.')
      );
    }
    await this.page.locator('.offcanvas-backdrop').waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  }

  // ── Search for a team member ───────────────────────────────────
  async searchUser(query) {
    await this.searchInput.click();
    await this.searchInput.fill(query);
    await this.page.waitForTimeout(500);
  }

  // ── Clear active filter ─────────────────────────────────────────
  async clearFilter() {
    await this.clearFilterBtn.click();
  }

  // ── Open row actions dropdown by row name and select an option ──
  async openRowMenuByName(rowName, optionText) {
    const row = this.page.getByRole('row', { name: new RegExp(rowName) });
    await row.locator('#dropdown-basic').click();
    await this.page.getByText(optionText, { exact: true }).click();
  }

  // ── Edit a user by their row name (matches Codegen-confirmed flow) ──
  // rowName: partial row text, e.g. 'Kaleem Asad Kaleem Asad +' (name appears twice + phone prefix)
  async editUserByRowName(rowName) {
    // The last cell in every team row contains a single icon button that opens the context menu.
    // Snapshot confirms: cell[last] > button[cursor=pointer] > img
    // Clicking this button should reveal "Edit Info" in the dropdown.
    const row = this.page.getByRole('row', { name: new RegExp(rowName) });
    await row.getByRole('cell').last().getByRole('button').click();
    await this.page.getByText('Edit Info').waitFor({ state: 'visible', timeout: 10000 });
    await this.page.getByText('Edit Info').click();
    await this.editUserBtn.click();
  }
}

module.exports = { TeamPage };