// ─────────────────────────────────────────────────────────────
// pages/PatientInfoPage.js
// Page Object Model for the Patient Profile — Patient Info tab
// URL: /patient/profile/:id
// Locators verified via Playwright Codegen
// ─────────────────────────────────────────────────────────────

class PatientInfoPage {

  constructor(page) {
    this.page = page;

    // ── Three-dot options menu (shared trigger for Edit/Verify/Unverify) ──
    // Codegen shows this as #dropdown-basic — same element reused for
    // multiple menu actions depending on patient's current state.
    this.optionsMenuBtn = page.locator('.PatientInfo_personalProfileDetailOptions__RZ83I .dropdown-toggle');


    // ── Edit Info ────────────────────────────────────────────────
    this.editInfoMenuItem   = page.getByText('Edit Info');
    this.editPatientBtn     = page.getByRole('button', { name: 'Edit Patient' });

    // ── Verify / Unverify ────────────────────────────────────────
    this.unverifyMenuItem   = page.getByText('Unverify');
    this.verifyMenuItem     = page.getByText('Verify');
    this.confirmYesBtn      = page.getByRole('button', { name: 'Yes' });

    // ── Pin Patient ──────────────────────────────────────────────
    // Codegen captured this as a toggle button — same locator,
    // clicking it again unpins.
this.pinnedPatientsBtn  = page.getByRole('button', { name: 'Pinned Patients', description: 'Pinned Patients' });

    // ── Internal Notes ───────────────────────────────────────────
    this.addNoteBtn         = page.getByRole('button', { name: 'Add note' });
    this.noteTextInput      = page.getByRole('textbox', { name: 'Add note text' });
    this.noteSubmitBtn      = page.getByRole('button', { name: 'Submit' });
    this.noteCancelBtn      = page.getByRole('button', { name: 'Cancel' });
  }

  // ── Navigation (from Patient Listings) ─────────────────────────

async openPatientByName(name) {
  // Navigate directly to patient listings first — don't assume
  // the sidebar is already visible from session/landing page
  await this.page.goto(`${process.env.BASE_URL}/patient`);
  await this.page.getByRole('heading', { name: 'Patients', exact: true })
    .waitFor({ state: 'visible', timeout: 15000 });

  await this.page.getByRole('textbox', { name: 'Search' }).click();
  await this.page.getByRole('textbox', { name: 'Search' }).fill(name);
  await this.page.waitForTimeout(800); // debounce, matches PatientListingsPage pattern

  // Patient links are formatted as "{name} {id}" — match by name prefix
  await this.page.getByRole('link', { name: new RegExp(`^${name}`, 'i') }).first().click();
}

  // ── Edit Info ────────────────────────────────────────────────

  async openEditInfo() {
  await this.optionsMenuBtn.click();
  await this.editInfoMenuItem.waitFor({ state: 'visible', timeout: 5000 });   // ← ADD THIS LINE
  await this.editInfoMenuItem.click();
}

  async saveEditWithoutChanges() {
    await this.openEditInfo();
    await this.editPatientBtn.click();
  }




  
  // ── Verify / Unverify ────────────────────────────────────────

  async unverifyPatient() {
    await this.optionsMenuBtn.click();
    await this.unverifyMenuItem.click();
    await this.confirmYesBtn.click();
  }

  async verifyPatient() {
    await this.optionsMenuBtn.click();
    await this.verifyMenuItem.click();
    await this.confirmYesBtn.click();
  }

  // ── Pin / Unpin ──────────────────────────────────────────────

  async togglePinPatient() {
    await this.pinnedPatientsBtn.click();
  }

  // ── Internal Notes ───────────────────────────────────────────

  async addNote(text) {
    await this.addNoteBtn.click();
    await this.noteTextInput.click();
    await this.noteTextInput.fill(text);
    await this.noteSubmitBtn.click();
  }

  async openAndCancelNoteDialog() {
    await this.addNoteBtn.click();
    await this.noteCancelBtn.click();
  }
}

module.exports = { PatientInfoPage };