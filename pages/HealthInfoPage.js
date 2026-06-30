class HealthInfoPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ────────────────────────────────────────────────
    this.healthInfoTab = page.getByRole('link', { name: 'Health Info' });

    // ── Primary metric cards (Blood Pressure, Glucose, Activity, Weight, Food) ──
    this.metricCardSelected = page.locator('.PrimaryMetricCard_primaryMetricCard__2TvaF.PrimaryMetricCard_selected__q8sS7');
    this.metricCardHeaderIcon = this.metricCardSelected.locator('.PrimaryMetricCard_pmcHeader__zmDFN > svg');
    this.closeBtn = page.getByRole('button', { name: 'Close' });

    // ── Food editing ────────────────────────────────────────────────
    this.editBtn        = page.getByRole('button', { name: 'Edit' });
    this.saveChangesBtn  = page.getByRole('button', { name: 'Save Changes' });

    // ── Feedback ──────────────────────────────────────────────────
    this.addFeedbackBtn   = page.getByRole('button', { name: 'Add feedback' });
    this.goodBtn          = page.getByRole('button', { name: 'Good', exact: true });
    this.goodCarbChoiceBtn = page.getByRole('button', { name: 'Good carb choice' });
    this.feedbackInput    = page.getByRole('textbox', { name: 'Add your feedback for the' });
    this.saveShareBtn     = page.getByRole('button', { name: 'Save & Share with Patient' });

    // ── Chart filters ─────────────────────────────────────────────
    this.bloodPressureCheckbox = page.getByRole('checkbox', { name: 'Blood Pressure' });
    this.activityCheckbox      = page.getByRole('checkbox', { name: 'Activity' });

    // ── Time range buttons ──────────────────────────────────────────
    this.range1d  = page.getByRole('button', { name: '1d' });
    this.range1w  = page.getByRole('button', { name: '1w' });
    this.range1m  = page.getByRole('button', { name: '1m' });
    this.range6m  = page.getByRole('button', { name: '6m' });
    this.rangeYTD = page.getByRole('button', { name: 'YTD' });

    // ── Latest Updates section ─────────────────────────────────────
    this.latestUpdatesHeader = page.locator('header').filter({ hasText: 'Latest Updates' });
    this.selectAllCheckbox   = page.getByRole('checkbox', { name: 'Select All' });
    this.applyBtn            = page.getByRole('button', { name: 'Apply' });
  }

  // ── Navigate directly to Health Info tab ──────────────────────
  async openHealthInfoTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/health-info/${patientId}`);
    await this.healthInfoTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  // ── Returns true if a metric card has actual data (not "Insufficient Data") ──
  async metricHasData(metricLabel) {
    const card = this.page.locator('div').filter({ has: this.page.getByRole('heading', { name: metricLabel, exact: true }) }).first();
    const insufficientText = card.getByText(/Insufficient Data|Insufficient data/i);
    const isInsufficient = await insufficientText.isVisible({ timeout: 3000 }).catch(() => false);
    return !isInsufficient;
  }

  // ── Open a metric card's detail panel by partial label text ──
  // e.g. 'Blood Pressure', 'Activity', 'Weight', 'Food'
  // NOTE: clicking 'Glucose' navigates to a separate comparison view, not a detail panel
  async openMetricDetail(metricLabel) {
    const card = this.page.getByText(new RegExp(`^${metricLabel}`)).first();
    await card.waitFor({ state: 'visible', timeout: 10000 });
    await card.click();
    await this.page.waitForTimeout(500);
  }

  // ── Close the currently open metric detail panel ───────────────
  async closeMetricDetail() {
    // Try the explicit Close button first — most reliable
    const hasCloseBtn = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (hasCloseBtn) {
      await this.closeBtn.first().click().catch(() => {});
      return;
    }
    // Fallback: selected card's header icon toggles the panel closed
    const hasSelectedIcon = await this.metricCardHeaderIcon.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (hasSelectedIcon) {
      await this.metricCardHeaderIcon.first().click().catch(() => {});
    }
  }

  // ── Edit food entry values ──────────────────────────────────────
  // values: { calories, carbs, protein, fat, sugar, fiber } — only fields you want to fill
  async editFoodEntry(values) {
    await this.editBtn.first().click();
    await this.page.waitForTimeout(500);

    const textboxes = this.page.getByRole('textbox');
    const fieldOrder = ['calories', 'carbs', 'protein', 'fat'];
    let idx = 2; // Codegen showed editable fields starting at index 2

    for (const field of fieldOrder) {
      if (values[field] !== undefined) {
        const box = textboxes.nth(idx);
        await box.click();
        // Clear existing value fully before typing the new one
        await box.fill('');
        await box.fill(String(values[field]));
      }
      idx++;
    }

    // Sugar and fiber use specific grid selectors
    if (values.sugar !== undefined) {
      const sugarInput = this.page.locator('.HistorySidebarRevamp_foodCardFormGrid__UQaR3 > div:nth-child(4) > input');
      await sugarInput.click();
      await sugarInput.fill('');
      await sugarInput.fill(String(values.sugar));
    }
    if (values.fiber !== undefined) {
      const fiberInput = this.page.locator('div:nth-child(5) > input');
      await fiberInput.click();
      await fiberInput.fill('');
      await fiberInput.fill(String(values.fiber));
    }

    await this.saveChangesBtn.click();
  }

  // ── Add clinician feedback on a food/activity entry ────────────
  async addFeedback({ rating = 'Good', tag = null, comment = '' }) {
    await this.addFeedbackBtn.first().click();

    if (rating) {
      await this.page.getByRole('button', { name: rating, exact: true }).click();
    }
    if (tag) {
      await this.page.getByRole('button', { name: tag }).click();
    }
    if (comment) {
      await this.feedbackInput.click();
      await this.feedbackInput.fill(comment);
    }

    await this.saveShareBtn.click();
    // Close confirmation if it appears
    const hasClose = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
    if (hasClose) {
      await this.closeBtn.first().click();
    }
  }

  // ── Toggle a chart metric checkbox on/off in the Compare sidebar ──
  async toggleChartMetric(metricName, checked = true) {
    // Scope to the Compare panel's checkbox lists to avoid ambiguous matches
    const checkbox = this.page.locator('list').getByRole('checkbox', { name: metricName, exact: true }).first();
    const visible = await checkbox.isVisible({ timeout: 5000 }).catch(() => false);
    if (!visible) return;
    const isChecked = await checkbox.isChecked().catch(() => null);
    if (isChecked === checked) return; // already in desired state
    await checkbox.click({ force: true, timeout: 10000 }).catch(() => {});
  }

  // ── Select a time range for the chart ──────────────────────────
  // range: '1d' | '1w' | '1m' | '3m' | '6m' | 'YTD' | '1y' | 'ALL'
  async selectTimeRange(range) {
    const btn = this.page.getByRole('button', { name: range, exact: true });
    await btn.waitFor({ state: 'visible', timeout: 10000 });
    await btn.click();
    // Larger ranges (1m/3m/6m/YTD/1y/ALL) pull more data and re-render the chart —
    // give it time to settle before the next action
    if (['1m', '3m', '6m', 'YTD', '1y', 'ALL'].includes(range)) {
      await this.page.waitForTimeout(10000);
    }
  }

  // ── Open Latest Updates filter and select all + apply ──────────
  async applyLatestUpdatesFilter(selectAll = true) {
    const filterBtn = this.latestUpdatesHeader.getByRole('button');
    await filterBtn.click();

    if (selectAll) {
      await this.selectAllCheckbox.check();
    }

    await this.applyBtn.click();
  }
}

module.exports = { HealthInfoPage };