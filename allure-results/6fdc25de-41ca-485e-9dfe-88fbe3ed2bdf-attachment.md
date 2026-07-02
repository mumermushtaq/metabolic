# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\Patient-info.spec.js >> Patient Info — @patient-info >> should navigate to patient profile from listings search
- Location: tests\e2e\Patient-info.spec.js:30:3

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'sidebarIcon2 Patients' })

```

# Test source

```ts
  1  | // ─────────────────────────────────────────────────────────────
  2  | // pages/PatientInfoPage.js
  3  | // Page Object Model for the Patient Profile — Patient Info tab
  4  | // URL: /patient/profile/:id
  5  | // Locators verified via Playwright Codegen
  6  | // ─────────────────────────────────────────────────────────────
  7  | 
  8  | class PatientInfoPage {
  9  | 
  10 |   constructor(page) {
  11 |     this.page = page;
  12 | 
  13 |     // ── Three-dot options menu (shared trigger for Edit/Verify/Unverify) ──
  14 |     // Codegen shows this as #dropdown-basic — same element reused for
  15 |     // multiple menu actions depending on patient's current state.
  16 |     this.optionsMenuBtn = page.locator('#dropdown-basic').first();
  17 | 
  18 |     // ── Edit Info ────────────────────────────────────────────────
  19 |     this.editInfoMenuItem   = page.getByText('Edit Info');
  20 |     this.editPatientBtn     = page.getByRole('button', { name: 'Edit Patient' });
  21 | 
  22 |     // ── Verify / Unverify ────────────────────────────────────────
  23 |     this.unverifyMenuItem   = page.getByText('Unverify');
  24 |     this.verifyMenuItem     = page.getByText('Verify');
  25 |     this.confirmYesBtn      = page.getByRole('button', { name: 'Yes' });
  26 | 
  27 |     // ── Pin Patient ──────────────────────────────────────────────
  28 |     // Codegen captured this as a toggle button — same locator,
  29 |     // clicking it again unpins.
  30 |     this.pinnedPatientsBtn  = page.getByRole('button', { name: 'Pinned Patients' });
  31 | 
  32 |     // ── Internal Notes ───────────────────────────────────────────
  33 |     this.addNoteBtn         = page.getByRole('button', { name: 'Add note' });
  34 |     this.noteTextInput      = page.getByRole('textbox', { name: 'Add note text' });
  35 |     this.noteSubmitBtn      = page.getByRole('button', { name: 'Submit' });
  36 |     this.noteCancelBtn      = page.getByRole('button', { name: 'Cancel' });
  37 |   }
  38 | 
  39 |   // ── Navigation (from Patient Listings) ─────────────────────────
  40 | 
  41 |   async openPatientByName(name) {
> 42 |     await this.page.getByRole('link', { name: 'sidebarIcon2 Patients' }).click();
     |                                                                          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  43 |     await this.page.getByRole('textbox', { name: 'Search' }).click();
  44 |     await this.page.getByRole('textbox', { name: 'Search' }).fill(name);
  45 |     // Patient links are formatted as "{name} {id}" — match by name prefix
  46 |     await this.page.getByRole('link', { name: new RegExp(`^${name}`, 'i') }).first().click();
  47 |   }
  48 | 
  49 |   // ── Edit Info ────────────────────────────────────────────────
  50 | 
  51 |   async openEditInfo() {
  52 |     await this.optionsMenuBtn.click();
  53 |     await this.editInfoMenuItem.click();
  54 |   }
  55 | 
  56 |   async saveEditWithoutChanges() {
  57 |     await this.openEditInfo();
  58 |     await this.editPatientBtn.click();
  59 |   }
  60 | 
  61 |   // ── Verify / Unverify ────────────────────────────────────────
  62 | 
  63 |   async unverifyPatient() {
  64 |     await this.optionsMenuBtn.click();
  65 |     await this.unverifyMenuItem.click();
  66 |     await this.confirmYesBtn.click();
  67 |   }
  68 | 
  69 |   async verifyPatient() {
  70 |     await this.optionsMenuBtn.click();
  71 |     await this.verifyMenuItem.click();
  72 |     await this.confirmYesBtn.click();
  73 |   }
  74 | 
  75 |   // ── Pin / Unpin ──────────────────────────────────────────────
  76 | 
  77 |   async togglePinPatient() {
  78 |     await this.pinnedPatientsBtn.click();
  79 |   }
  80 | 
  81 |   // ── Internal Notes ───────────────────────────────────────────
  82 | 
  83 |   async addNote(text) {
  84 |     await this.addNoteBtn.click();
  85 |     await this.noteTextInput.click();
  86 |     await this.noteTextInput.fill(text);
  87 |     await this.noteSubmitBtn.click();
  88 |   }
  89 | 
  90 |   async openAndCancelNoteDialog() {
  91 |     await this.addNoteBtn.click();
  92 |     await this.noteCancelBtn.click();
  93 |   }
  94 | }
  95 | 
  96 | module.exports = { PatientInfoPage };
```