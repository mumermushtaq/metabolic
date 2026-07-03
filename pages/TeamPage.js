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

  // ── Find and click the first ACTIVATED row across pages ──────────
  // Only ACTIVATED users can be edited — INVITED users have no Edit option.
  // Searches page 1, then page 2 if no ACTIVATED row found on page 1.
  async editUserByRowName(rowName) {
    let row = await this._findActivatedRow();

    if (!row) {
      // Try page 2 — pagination is a list of listitem elements
      const page2 = this.page.getByRole('listitem').filter({ hasText: /^2$/ }).first();
      const hasPage2 = await page2.isVisible({ timeout: 3000 }).catch(() => false);
      if (hasPage2) {
        await page2.click();
        await this.page.waitForTimeout(1000);
        row = await this._findActivatedRow();
      }
    }

    if (!row) throw new Error('No ACTIVATED user found on page 1 or 2 — cannot edit');

    await row.getByRole('cell').last().getByRole('button').click();

    // Edit Info is inside a dropdown-item li — scope tightly and retry on detach
    const editInfo = this.page.locator('li.dropdown-item').filter({ hasText: 'Edit Info' });
    await editInfo.waitFor({ state: 'visible', timeout: 10000 });
    await this.page.waitForTimeout(300);
    for (let i = 0; i < 5; i++) {
      try {
        await editInfo.click({ timeout: 3000 });
        break;
      } catch {
        await this.page.waitForTimeout(300);
      }
    }
    await this.editUserBtn.click();
  }

  // ── Helper: find first ACTIVATED row on current page ─────────────
  async _findActivatedRow() {
    const rows = this.page.getByRole('row').filter({ hasText: 'ACTIVATED' });
    const count = await rows.count().catch(() => 0);
    if (count > 0) return rows.first();
    return null;
  }
}

module.exports = { TeamPage };