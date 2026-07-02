# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\consent-intake.spec.js >> Consent & Intake >> selects visit type
- Location: tests\e2e\consent-intake.spec.js:74:3

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('combobox', { name: 'Patient Type' })
    - locator resolved to <button type="button" role="combobox" aria-expanded="false" id="patient-type-combobox" aria-controls="patient-type-popover" class="ConsentIntake_comboboxTrigger__cZayx">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    95 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div role="dialog" tabindex="-1" aria-modal="true" class="fade modal show">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  47  |     this.parentGuardianFullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  48  |     this.updateParentGuardianBtn     = page.getByRole('button', { name: 'Update Parent/Guardian' });
  49  | 
  50  |     // ── Co-signers: Interpreter ───────────────────────────────────
  51  |     this.addInterpreterBtn    = page.getByRole('button', { name: 'Add Interpreter' });
  52  |     this.editInterpreterBtn   = page.getByRole('button', { name: 'Edit interpreter' });
  53  |     this.interpreterNameInput = page.getByRole('textbox', { name: 'Full Name *' });
  54  |     this.languageInput        = page.getByRole('textbox', { name: 'Language' });
  55  |     this.updateInterpreterBtn = page.getByRole('button', { name: 'Update Interpreter' });
  56  | 
  57  |     // ── Actions ───────────────────────────────────────────────────
  58  |     this.copySecureLinkBtn = page.getByRole('button', { name: 'Copy Secure Link' });
  59  |     this.generateQrBtn     = page.getByRole('button', { name: 'Generate QR Code' });
  60  |     this.sendReminderBtn   = page.getByRole('button', { name: 'Send Reminder' });
  61  |   }
  62  | 
  63  |   // ── Open patient and go to Consent & Intake tab ──────────────
  64  |   async openPatientConsentTab(patientName, patientId = null) {
  65  |     if (patientId) {
  66  |       // Navigate directly by ID — avoids search state issues between tests
  67  |       await this.page.goto(`${process.env.BASE_URL}/patient/profile/consent-intake/${patientId}`);
  68  |       await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  69  |       return;
  70  |     }
  71  | 
  72  |     await this.page.goto(`${process.env.BASE_URL}/patient`);
  73  |     await this.page.getByRole('heading', { name: 'Patients', exact: true })
  74  |       .waitFor({ state: 'visible', timeout: 15000 });
  75  | 
  76  |     const search = this.page.getByRole('textbox', { name: 'Search' });
  77  |     await search.click();
  78  |     await search.clear();
  79  |     await search.fill(patientName);
  80  |     await search.press('Enter');
  81  | 
  82  |     // Wait for table to reload after search
  83  |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  84  | 
  85  |     const patientLink = this.page.getByRole('link', { name: new RegExp(`^${patientName}`, 'i') }).first();
  86  |     await patientLink.waitFor({ state: 'visible', timeout: 20000 });
  87  |     await patientLink.click();
  88  | 
  89  |     await this.consentIntakeTab.waitFor({ state: 'visible', timeout: 15000 });
  90  |     await this.consentIntakeTab.click();
  91  | 
  92  |     await this.visitDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  93  |   }
  94  | 
  95  |   // ── Set visit date ────────────────────────────────────────────
  96  |   // If monthsAhead=0, picks a day in the current month (no navigation needed)
  97  |   async setVisitDate(targetYear, targetMonth, targetDay) {
  98  |     await this.visitDateBtn.click();
  99  |     await this.nextMonthBtn.waitFor({ state: 'visible', timeout: 10000 });
  100 | 
  101 |     const now = new Date();
  102 |     const monthsToClick = (targetYear - now.getFullYear()) * 12 + (targetMonth - (now.getMonth() + 1));
  103 | 
  104 |     for (let i = 0; i < monthsToClick; i++) {
  105 |       await this.nextMonthBtn.click();
  106 |       await this.page.waitForTimeout(150);
  107 |     }
  108 | 
  109 |     await this.page
  110 |       .locator(`button[name='day'].rdp-day`)
  111 |       .filter({ hasText: new RegExp(`^${targetDay}$`) })
  112 |       .click();
  113 |   }
  114 | 
  115 |   // ── Set unique episode number, retry once on duplicate ────────
  116 |   async setEpisodeNumber(episodeNumber) {
  117 |     await this.episodeNumberInput.waitFor({ state: 'visible', timeout: 10000 });
  118 |     await this.episodeNumberInput.dblclick();
  119 |     await this.episodeNumberInput.fill(String(episodeNumber));
  120 |     await this.saveBtn.click();
  121 | 
  122 |     // Retry on duplicate error
  123 |     const errorLocator = this.page.locator('text=/already exists|duplicate|episode.*taken/i');
  124 |     const hasError = await errorLocator.isVisible({ timeout: 3000 }).catch(() => false);
  125 |     if (hasError) {
  126 |       const retryNumber = Date.now().toString().slice(-8);
  127 |       await this.episodeNumberInput.dblclick();
  128 |       await this.episodeNumberInput.fill(retryNumber);
  129 |       await this.saveBtn.click();
  130 |     }
  131 | 
  132 |     // Wait for either: comboboxes appear (adult) or minor banner appears
  133 |     await Promise.race([
  134 |       this.patientTypeCombo.waitFor({ state: 'visible', timeout: 15000 }),
  135 |       this.minorBanner.waitFor({ state: 'visible', timeout: 15000 }),
  136 |     ]);
  137 |   }
  138 | 
  139 |   // ── Returns true if minor guardian banner is shown ────────────
  140 |   async isMinorPatient() {
  141 |     return this.minorBanner.isVisible({ timeout: 3000 }).catch(() => false);
  142 |   }
  143 | 
  144 |   // ── Select patient type ───────────────────────────────────────
  145 |   async selectPatientType(typeName) {
  146 |     await this.patientTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
> 147 |     await this.patientTypeCombo.click();
      |                                 ^ Error: locator.click: Test ended.
  148 |     await this.page
  149 |       .getByRole('button', { name: typeName, exact: true })
  150 |       .click();
  151 |   }
  152 | 
  153 |   // ── Select visit type ─────────────────────────────────────────
  154 |   async selectVisitType(typeName) {
  155 |     await this.visitTypeCombo.waitFor({ state: 'visible', timeout: 10000 });
  156 |     await this.visitTypeCombo.click();
  157 |     await this.page
  158 |       .getByRole('button', { name: typeName, exact: true })
  159 |       .click();
  160 |   }
  161 | 
  162 |   // ── Quick assign (auto-assign by patient+visit type) ──────────
  163 |   async quickAssign() {
  164 |     await this.quickAssignBtn.waitFor({ state: 'enabled', timeout: 10000 });
  165 |     await this.quickAssignBtn.click();
  166 |   }
  167 | 
  168 |   // ── Manually assign a form by searching ──────────────────────
  169 |   async assignFormBySearch(formNamePartial) {
  170 |     await this.searchFormsCombo.click();
  171 |     await this.page
  172 |       .getByRole('button', { name: new RegExp(formNamePartial, 'i') })
  173 |       .first()
  174 |       .click();
  175 |     // Assign button label updates to show count e.g. "Assign (1)"
  176 |     await this.page
  177 |       .getByRole('button', { name: /^Assign \(\d+\)$/ })
  178 |       .click();
  179 |   }
  180 | 
  181 |   // ── Add or edit doctor co-signer ─────────────────────────────
  182 |   // Handles both states: "Add Doctor" (first time) and "Edit doctor co-signer" (already assigned)
  183 |   // From Codegen: Add flow needs staff dropdown only (no Full name field in new recording)
  184 |   //               Edit flow: click current staff button → pick new option → Update Doctor
  185 |   async addOrEditDoctor(staffName) {
  186 |     const hasEdit = await this.editDoctorBtn.isVisible({ timeout: 3000 }).catch(() => false);
  187 |     if (hasEdit) {
  188 |       await this.editDoctorBtn.click();
  189 |       // In edit dialog, open the staff combobox trigger (first button that isn't a close/cancel)
  190 |       const dialog = this.page.getByRole('dialog');
  191 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  192 |       // Staff selector in edit dialog — click the combobox trigger
  193 |       await dialog.locator('button[role="combobox"], button.ConsentIntake_comboboxTrigger__cZayx').first().click();
  194 |       // Options may render as listbox items or buttons — try both
  195 |       const opt = this.page.locator(`[role="option"]:has-text("${staffName}"), [role="listbox"] button:has-text("${staffName}")`).first();
  196 |       await opt.waitFor({ state: 'visible', timeout: 5000 });
  197 |       await opt.click();
  198 |       await this.updateDoctorBtn.click();
  199 |     } else {
  200 |       await this.addDoctorBtn.click();
  201 |       await this.selectStaffDropdown.click();
  202 |       await this.page.getByRole('option', { name: staffName }).click();
  203 |       await this.dialogAddDoctorBtn.click();
  204 |     }
  205 |   }
  206 | 
  207 |   // ── Add or edit witness co-signer ────────────────────────────
  208 |   // Handles both states: "Add Witness" (first time) and "Edit witness co-signer" (already assigned)
  209 |   async addOrEditWitness(staffName) {
  210 |     const hasEdit = await this.editWitnessBtn.isVisible({ timeout: 3000 }).catch(() => false);
  211 |     if (hasEdit) {
  212 |       await this.editWitnessBtn.click();
  213 |       const dialog = this.page.getByRole('dialog');
  214 |       await dialog.waitFor({ state: 'visible', timeout: 5000 });
  215 |       await dialog.locator('button[role="combobox"], button.ConsentIntake_comboboxTrigger__cZayx').first().click();
  216 |       const opt = this.page.locator(`[role="option"]:has-text("${staffName}"), [role="listbox"] button:has-text("${staffName}")`).first();
  217 |       await opt.waitFor({ state: 'visible', timeout: 5000 });
  218 |       await opt.click();
  219 |       await this.updateWitnessBtn.click();
  220 |     } else {
  221 |       await this.addWitnessBtn.click();
  222 |       await this.selectStaffDropdown.click();
  223 |       await this.page.getByRole('option', { name: staffName }).click();
  224 |       await this.dialogAddWitnessBtn.click();
  225 |     }
  226 |   }
  227 | 
  228 |   // ── Add or edit parent/guardian ───────────────────────────────
  229 |   async editParentGuardian(fullName) {
  230 |     const hasEdit = await this.editParentGuardianBtn.isVisible({ timeout: 3000 }).catch(() => false);
  231 |     if (hasEdit) {
  232 |       await this.editParentGuardianBtn.click();
  233 |       await this.parentGuardianFullNameInput.dblclick();
  234 |       await this.parentGuardianFullNameInput.fill(fullName);
  235 |       await this.updateParentGuardianBtn.click();
  236 |     } else {
  237 |       await this.addParentGuardianBtn.click();
  238 |       await this.parentGuardianFullNameInput.fill(fullName);
  239 |       await this.page.getByRole('dialog').getByRole('button', { name: 'Add Parent/Guardian' }).click();
  240 |     }
  241 |   }
  242 | 
  243 |   // ── Add or edit interpreter ───────────────────────────────────
  244 |   async editInterpreter(fullName, language) {
  245 |     const hasEdit = await this.editInterpreterBtn.isVisible({ timeout: 3000 }).catch(() => false);
  246 |     if (hasEdit) {
  247 |       await this.editInterpreterBtn.click();
```