# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\health-info.spec.js >> Health Info >> opens and closes Glucose metric detail
- Location: tests\e2e\health-info.spec.js:24:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.PrimaryMetricCard_primaryMetricCard__2TvaF.PrimaryMetricCard_selected__q8sS7').locator('.PrimaryMetricCard_pmcHeader__zmDFN > svg').first()
    - locator resolved to <svg width="18" height="18" fill="none" viewBox="0 0 18 18">…</svg>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img "sidebarLogoImg" [ref=e7]
        - generic:
          - img "sidebarLogoTxt"
      - generic [ref=e8]:
        - link "sidebarIcon2 Patients" [ref=e10] [cursor=pointer]:
          - /url: /patient
          - generic [ref=e11]:
            - img "sidebarIcon2" [ref=e12]
            - generic: Patients
        - link "sidebarIcon3 Chat" [ref=e14] [cursor=pointer]:
          - /url: /chat
          - generic [ref=e15]:
            - img "sidebarIcon3" [ref=e16]
            - generic: Chat
        - link "sidebarIcon4 Team" [ref=e18] [cursor=pointer]:
          - /url: /team
          - generic [ref=e19]:
            - img "sidebarIcon4" [ref=e20]
            - generic: Team
        - link "Survey" [ref=e22] [cursor=pointer]:
          - /url: /survey#templates
          - generic [ref=e23]:
            - img [ref=e24]
            - generic: Survey
        - link "Tasks" [ref=e27] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e28]:
            - img [ref=e29]
            - generic: Tasks
        - link "Coupons" [ref=e32] [cursor=pointer]:
          - /url: /coupon
          - generic [ref=e33]:
            - img [ref=e34]
            - generic: Coupons
    - generic [ref=e39]:
      - generic [ref=e41]:
        - link "Patients" [ref=e42] [cursor=pointer]:
          - /url: /patient
          - heading "Patients" [level=3] [ref=e43]
        - img [ref=e45]
      - generic [ref=e48]:
        - button "notification" [ref=e50] [cursor=pointer]:
          - img "notification" [ref=e51]
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e59] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e60]
            - generic [ref=e61]: Admin • Diabetologist
    - generic [ref=e62]:
      - list [ref=e65]:
        - link "Patient Info" [ref=e66] [cursor=pointer]:
          - /url: /patient/profile/1706
          - listitem [ref=e67]: Patient Info
        - link "Visits" [ref=e68] [cursor=pointer]:
          - /url: /patient/profile/visits/1706
          - listitem [ref=e69]: Visits
        - link "Consent & Intake" [ref=e70] [cursor=pointer]:
          - /url: /patient/profile/consent-intake/1706
          - listitem [ref=e71]: Consent & Intake
        - link "Health Info" [ref=e72] [cursor=pointer]:
          - /url: /patient/profile/health-info/1706
          - listitem [ref=e73]: Health Info
        - link "Documents" [ref=e74] [cursor=pointer]:
          - /url: /patient/profile/medical-reports/1706
          - listitem [ref=e75]: Documents
        - link "BCA Scans" [ref=e76] [cursor=pointer]:
          - /url: /patient/profile/bca-scans/1706
          - listitem [ref=e77]: BCA Scans
        - link "Glucose Analysis" [ref=e78] [cursor=pointer]:
          - /url: /patient/profile/glucose-analysis/1706
          - listitem [ref=e79]: Glucose Analysis
        - link "Add Coupon" [ref=e80] [cursor=pointer]:
          - /url: /patient/profile/add-coupon/1706
          - listitem [ref=e81]: Add Coupon
        - link "GLP-1 Protocol" [ref=e82] [cursor=pointer]:
          - /url: /patient/profile/glp-protocol/1706
          - listitem [ref=e83]: GLP-1 Protocol
      - generic [ref=e88]:
        - heading "Select two date ranges to compare side-by-side" [level=5] [ref=e90]
        - generic [ref=e91]:
          - button "2026 Jun 24 " [ref=e93] [cursor=pointer]:
            - generic [ref=e94]:
              - generic [ref=e95]: 2026 Jun 24
              - generic [ref=e96]: 
            - separator [ref=e97]
          - button "2026 Jun 24 " [ref=e99] [cursor=pointer]:
            - generic [ref=e100]:
              - generic [ref=e101]: 2026 Jun 24
              - generic [ref=e102]: 
            - separator [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e106]:
            - heading "Glucose Metrics" [level=6] [ref=e107]
            - generic [ref=e109]:
              - generic [ref=e110]:
                - paragraph [ref=e112]: Time in Range
                - paragraph [ref=e114]: 0 %
              - generic [ref=e115]:
                - paragraph [ref=e117]: Average Glucose
                - paragraph [ref=e119]: 0 mg/dl
              - generic [ref=e120]:
                - paragraph [ref=e122]: Standard Deviation
                - paragraph [ref=e124]: 0 mg/dl
              - generic [ref=e125]:
                - paragraph [ref=e127]: Sensor Usage
                - paragraph [ref=e129]: 0 %
              - generic [ref=e130]:
                - paragraph [ref=e132]: Estimated HbA1c
                - paragraph [ref=e134]: 0 %
          - generic [ref=e136]:
            - heading "Glucose Metrics" [level=6] [ref=e137]
            - generic [ref=e139]:
              - generic [ref=e140]:
                - paragraph [ref=e142]: Time in Range
                - paragraph [ref=e144]: 0 %
              - generic [ref=e145]:
                - paragraph [ref=e147]: Average Glucose
                - paragraph [ref=e149]: 0 mg/dl
              - generic [ref=e150]:
                - paragraph [ref=e152]: Standard Deviation
                - paragraph [ref=e154]: 0 mg/dl
              - generic [ref=e155]:
                - paragraph [ref=e157]: Sensor Usage
                - paragraph [ref=e159]: 0 %
              - generic [ref=e160]:
                - paragraph [ref=e162]: Estimated HbA1c
                - paragraph [ref=e164]: 0 %
      - generic [ref=e165]:
        - generic [ref=e166]:
          - paragraph [ref=e168]: Chat
          - button "delete" [ref=e169] [cursor=pointer]:
            - img [ref=e170]
        - generic [ref=e174]:
          - paragraph [ref=e175] [cursor=pointer]: Metabolic
          - paragraph [ref=e176] [cursor=pointer]: Zone
  - alert [ref=e177]: Metabolic
```

# Test source

```ts
  1   | class HealthInfoPage {
  2   | 
  3   |   constructor(page) {
  4   |     this.page = page;
  5   | 
  6   |     // ── Navigation ────────────────────────────────────────────────
  7   |     this.healthInfoTab = page.getByRole('link', { name: 'Health Info' });
  8   | 
  9   |     // ── Primary metric cards (Blood Pressure, Glucose, Activity, Weight, Food) ──
  10  |     this.metricCardSelected = page.locator('.PrimaryMetricCard_primaryMetricCard__2TvaF.PrimaryMetricCard_selected__q8sS7');
  11  |     this.metricCardHeaderIcon = this.metricCardSelected.locator('.PrimaryMetricCard_pmcHeader__zmDFN > svg');
  12  |     this.closeBtn = page.getByRole('button', { name: 'Close' });
  13  | 
  14  |     // ── Food editing ────────────────────────────────────────────────
  15  |     this.editBtn        = page.getByRole('button', { name: 'Edit' });
  16  |     this.saveChangesBtn  = page.getByRole('button', { name: 'Save Changes' });
  17  | 
  18  |     // ── Feedback ──────────────────────────────────────────────────
  19  |     this.addFeedbackBtn   = page.getByRole('button', { name: 'Add feedback' });
  20  |     this.goodBtn          = page.getByRole('button', { name: 'Good', exact: true });
  21  |     this.goodCarbChoiceBtn = page.getByRole('button', { name: 'Good carb choice' });
  22  |     this.feedbackInput    = page.getByRole('textbox', { name: 'Add your feedback for the' });
  23  |     this.saveShareBtn     = page.getByRole('button', { name: 'Save & Share with Patient' });
  24  | 
  25  |     // ── Chart filters ─────────────────────────────────────────────
  26  |     this.bloodPressureCheckbox = page.getByRole('checkbox', { name: 'Blood Pressure' });
  27  |     this.activityCheckbox      = page.getByRole('checkbox', { name: 'Activity' });
  28  | 
  29  |     // ── Time range buttons ──────────────────────────────────────────
  30  |     this.range1d  = page.getByRole('button', { name: '1d' });
  31  |     this.range1w  = page.getByRole('button', { name: '1w' });
  32  |     this.range1m  = page.getByRole('button', { name: '1m' });
  33  |     this.range6m  = page.getByRole('button', { name: '6m' });
  34  |     this.rangeYTD = page.getByRole('button', { name: 'YTD' });
  35  | 
  36  |     // ── Latest Updates section ─────────────────────────────────────
  37  |     this.latestUpdatesHeader = page.locator('header').filter({ hasText: 'Latest Updates' });
  38  |     this.selectAllCheckbox   = page.getByRole('checkbox', { name: 'Select All' });
  39  |     this.applyBtn            = page.getByRole('button', { name: 'Apply' });
  40  |   }
  41  | 
  42  |   // ── Navigate directly to Health Info tab ──────────────────────
  43  |   async openHealthInfoTab(patientId) {
  44  |     await this.page.goto(`${process.env.BASE_URL}/patient/profile/health-info/${patientId}`);
  45  |     await this.healthInfoTab.waitFor({ state: 'visible', timeout: 15000 });
  46  |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  47  |   }
  48  | 
  49  |   // ── Open a metric card's detail panel by partial label text ──
  50  |   // e.g. 'Blood Pressure', 'Glucose', 'Activity', 'Weight', 'Food'
  51  |   async openMetricDetail(metricLabel) {
  52  |     const card = this.page.getByText(new RegExp(`^${metricLabel}`)).first();
  53  |     await card.waitFor({ state: 'visible', timeout: 10000 });
  54  |     await card.click();
  55  |   }
  56  | 
  57  |   // ── Close the currently open metric detail panel ───────────────
  58  |   async closeMetricDetail() {
  59  |     // The selected card's header icon also closes the panel in some flows
  60  |     const hasSelectedIcon = await this.metricCardHeaderIcon.first().isVisible({ timeout: 3000 }).catch(() => false);
  61  |     if (hasSelectedIcon) {
> 62  |       await this.metricCardHeaderIcon.first().click();
      |                                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
  63  |     }
  64  |     const hasCloseBtn = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
  65  |     if (hasCloseBtn) {
  66  |       await this.closeBtn.first().click();
  67  |     }
  68  |   }
  69  | 
  70  |   // ── Edit food entry values ──────────────────────────────────────
  71  |   // values: { calories, carbs, protein, fat, sugar, fiber } — only fields you want to fill
  72  |   async editFoodEntry(values) {
  73  |     await this.editBtn.first().click();
  74  | 
  75  |     const textboxes = this.page.getByRole('textbox');
  76  |     const fieldOrder = ['calories', 'carbs', 'protein', 'fat'];
  77  |     let idx = 2; // Codegen showed editable fields starting at index 2
  78  | 
  79  |     for (const field of fieldOrder) {
  80  |       if (values[field] !== undefined) {
  81  |         const box = textboxes.nth(idx);
  82  |         await box.click();
  83  |         await box.fill(String(values[field]));
  84  |       }
  85  |       idx++;
  86  |     }
  87  | 
  88  |     // Sugar and fiber use specific grid selectors
  89  |     if (values.sugar !== undefined) {
  90  |       const sugarInput = this.page.locator('.HistorySidebarRevamp_foodCardFormGrid__UQaR3 > div:nth-child(4) > input');
  91  |       await sugarInput.click();
  92  |       await sugarInput.fill(String(values.sugar));
  93  |     }
  94  |     if (values.fiber !== undefined) {
  95  |       const fiberInput = this.page.locator('div:nth-child(5) > input');
  96  |       await fiberInput.click();
  97  |       await fiberInput.fill(String(values.fiber));
  98  |     }
  99  | 
  100 |     await this.saveChangesBtn.click();
  101 |   }
  102 | 
  103 |   // ── Add clinician feedback on a food/activity entry ────────────
  104 |   async addFeedback({ rating = 'Good', tag = null, comment = '' }) {
  105 |     await this.addFeedbackBtn.first().click();
  106 | 
  107 |     if (rating) {
  108 |       await this.page.getByRole('button', { name: rating, exact: true }).click();
  109 |     }
  110 |     if (tag) {
  111 |       await this.page.getByRole('button', { name: tag }).click();
  112 |     }
  113 |     if (comment) {
  114 |       await this.feedbackInput.click();
  115 |       await this.feedbackInput.fill(comment);
  116 |     }
  117 | 
  118 |     await this.saveShareBtn.click();
  119 |     // Close confirmation if it appears
  120 |     const hasClose = await this.closeBtn.first().isVisible({ timeout: 3000 }).catch(() => false);
  121 |     if (hasClose) {
  122 |       await this.closeBtn.first().click();
  123 |     }
  124 |   }
  125 | 
  126 |   // ── Toggle a chart metric checkbox on/off ─────────────────────
  127 |   async toggleChartMetric(metricName, checked = true) {
  128 |     const checkbox = this.page.getByRole('checkbox', { name: metricName });
  129 |     if (checked) {
  130 |       await checkbox.check();
  131 |     } else {
  132 |       await checkbox.uncheck();
  133 |     }
  134 |   }
  135 | 
  136 |   // ── Select a time range for the chart ──────────────────────────
  137 |   // range: '1d' | '1w' | '1m' | '6m' | 'YTD'
  138 |   async selectTimeRange(range) {
  139 |     const btn = this.page.getByRole('button', { name: range, exact: true });
  140 |     await btn.waitFor({ state: 'visible', timeout: 10000 });
  141 |     await btn.click();
  142 |   }
  143 | 
  144 |   // ── Open Latest Updates filter and select all + apply ──────────
  145 |   async applyLatestUpdatesFilter(selectAll = true) {
  146 |     const filterBtn = this.latestUpdatesHeader.getByRole('button');
  147 |     await filterBtn.click();
  148 | 
  149 |     if (selectAll) {
  150 |       await this.selectAllCheckbox.check();
  151 |     }
  152 | 
  153 |     await this.applyBtn.click();
  154 |   }
  155 | }
  156 | 
  157 | module.exports = { HealthInfoPage };
```