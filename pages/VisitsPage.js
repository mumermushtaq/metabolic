class VisitsPage {

  constructor(page) {
    this.page = page;
    this.visitsTab = page.getByRole('link', { name: 'Visits' });
  }

  // ── Navigate directly to Visits tab ──────────────────────────
  async openVisitsTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/visits/${patientId}`);
    await this.visitsTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  // ── Get count of visit cards visible on the page ─────────────
  async getVisitCount() {
    return this.page.getByRole('button').filter({ hasText: /Active|Pending|Closed/i }).count();
  }

  // ── Open a visit by clicking its "Start Consultation" link ───
  // Returns the popup page
  async openVisitByIndex(index = 0) {
    const links = this.page.getByRole('link', { name: 'Start Consultation' });
    const popupPromise = this.page.waitForEvent('popup');
    await links.nth(index).click();
    const popup = await popupPromise;
    await popup.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
    return popup;
  }

  // ── Open a specific visit directly by visitId ─────────────────
  // Returns a new page (popup context reused from openVisitByIndex)
  async openVisitDirect(visitPopup, patientId, visitId) {
    await visitPopup.goto(
      `${process.env.BASE_URL}/patient/profile/welcomconsultation/${patientId}?visitId=${visitId}`
    );
    await visitPopup.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
  }

  // ── Begin consultation on the welcome page popup ──────────────
  async beginConsultation(visitPopup) {
    const beginBtn = visitPopup.getByRole('button', { name: 'Begin Consultation' });
    // Wait for button to appear
    await beginBtn.waitFor({ state: 'visible', timeout: 45000 });

    // Poll until not disabled (button renders disabled while the page loads).
    // Codegen shows the button eventually enables — use includes() for whitespace safety.
    // Timeout of 30s; if still disabled after that, attempt click anyway (some visit
    // types like Closed may have a briefly-disabled button that still accepts a click).
    // Wait up to 60s for button to become enabled
    await visitPopup.waitForFunction(
      () => {
        const btn = [...document.querySelectorAll('button')]
          .find(b => b.textContent.trim().includes('Begin Consultation'));
        return btn && !btn.disabled;
      },
      { timeout: 60000 }
    ).catch(() => {});

    // Extra settle — React may still be transitioning
    await visitPopup.waitForTimeout(1500);
    // Click only if enabled, otherwise click anyway as fallback
    await beginBtn.click({ force: false }).catch(() => beginBtn.click({ force: true }));
  }

  // ── Start review after Begin Consultation ────────────────────
  async startReview(visitPopup) {
    const startBtn = visitPopup.getByRole('button', { name: 'Start Review' });
    await startBtn.waitFor({ state: 'visible', timeout: 15000 });
    await startBtn.click();
  }

  // ── Click Next through all consultation steps ─────────────────
  async clickNextUntilEnd(visitPopup, maxSteps = 20) {
    let steps = 0;
    while (steps < maxSteps) {
      const nextBtn = visitPopup.getByRole('button', { name: 'Next' });
      const visible = await nextBtn.isVisible({ timeout: 3000 }).catch(() => false);
      if (!visible) break;
      await nextBtn.click();
      await visitPopup.waitForTimeout(400);
      steps++;
    }
    return steps;
  }
}

module.exports = { VisitsPage };