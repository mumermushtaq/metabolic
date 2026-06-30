class GlucoseAnalysisPage {
  constructor(page) {
    this.page = page;

    this.glucoseAnalysisTab = page.getByRole('link', { name: 'Glucose Analysis' });
    this.startDateBtn = page.getByRole('button', {
      name: /^(\d{4}\s+)?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+/,
    }).first();
    this.applyBtn = page.getByRole('button', { name: 'Apply' });
  }

  async openGlucoseAnalysisTab(patientId) {
    await this.page.goto(`${process.env.BASE_URL}/patient/profile/glucose-analysis/${patientId}`);
    await this.glucoseAnalysisTab.waitFor({ state: 'visible', timeout: 15000 });
    await this.startDateBtn.waitFor({ state: 'visible', timeout: 15000 });
  }

  async openDatePicker() {
    await this.startDateBtn.click();
    await this.applyBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  async selectDay(dayNumber) {
    const day = this.page.locator('div').filter({ hasText: new RegExp(`^${dayNumber}$`) });
    await day.first().waitFor({ state: 'visible', timeout: 10000 });
    await day.click();
  }

  async applyDateRange() {
    await this.applyBtn.click();
    await this.glucoseAnalysisTab.waitFor({ state: 'visible', timeout: 10000 });
    await this.startDateBtn.waitFor({ state: 'visible', timeout: 10000 });
  }

  async changeDateRange(dayNumber) {
    await this.openDatePicker();
    await this.selectDay(dayNumber);
    await this.applyDateRange();
  }
}

module.exports = { GlucoseAnalysisPage };
