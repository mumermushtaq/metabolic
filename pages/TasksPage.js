class TasksPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ────────────────────────────────────────────────
    // Two "Tasks" links exist on the page (sidebar nav + header breadcrumb) —
    // scope to the sidebar link specifically via its href
    this.tasksTab = page.locator('a[href="/tasks"]').first();

    // ── Queue filter buttons ─────────────────────────────────────
    this.allTasksBtn = page.getByRole('button', { name: /^All Tasks/ });
    this.bcaQueueBtn = page.getByRole('button', { name: /^BCA Queue/ });

    // ── Task actions ─────────────────────────────────────────────
    this.reviewBtn          = page.getByRole('button', { name: 'Review' });
    this.leanAlgorithmBtn   = page.getByRole('button', { name: 'Lean Algorithm' });
    this.standardAlgorithmBtn = page.getByRole('button', { name: 'Standard Algorithm' });
    this.publishResultsBtn  = page.getByRole('button', { name: 'Publish Results' });
    this.dismissResultsBtn  = page.getByRole('button', { name: 'Dismiss Results' });
    this.overrideBtn        = page.getByRole('button', { name: 'Override' });

    // ── 3D scan toggle ────────────────────────────────────────────
    this.show3dScanBtn = page.getByRole('img', { name: 'Show 3D Scan' });
    this.hide3dScanBtn = page.getByRole('img', { name: 'Hide 3D Scan' });
  }

  // ── Navigate to Tasks tab ───────────────────────────────────────
  async openTasksTab() {
    await this.tasksTab.click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  // ── Wait/retry until a queue has at least one task, or give up ──
  // Useful since task queues are shared and can be emptied by earlier
  // test runs (review/dismiss/publish actions consume them).
  async waitForTaskInQueue(queueName, { retries = 3, delayMs = 5000 } = {}) {
    for (let attempt = 0; attempt < retries; attempt++) {
      const hasTask = await this.reviewBtn.first().isVisible({ timeout: 5000 }).catch(() => false);
      if (hasTask) return true;

      if (attempt < retries - 1) {
        // Reload Tasks tab and reopen the queue, then wait before retrying
        await this.page.goto(`${process.env.BASE_URL}/tasks`);
        await this.openTasksTab();
        await this.openQueue(queueName);
        await this.page.waitForTimeout(delayMs);
      }
    }
    return false;
  }

  // ── Open a specific task queue (All Tasks / BCA Queue) ─────────
  async openQueue(queueName) {
    const btn = this.page.getByRole('button', { name: new RegExp(`^${queueName}`) });
    await btn.waitFor({ state: 'visible', timeout: 10000 });
    await btn.click();
  }

  // ── Open a task by clicking its patient/row card ────────────────
  async openTaskByPatientName(patientName) {
    const card = this.page.locator('div').filter({ hasText: new RegExp(patientName) }).first();
    await card.click();
  }

  // ── Click Review on the nth task in the list (0-based) ──────────
  async reviewTask(index = 0) {
    await this.reviewBtn.nth(index).click();
  }

  // ── Run the standard review flow: algorithm selection then publish ──
  async runReviewFlow({ algorithm = 'Standard', publish = true, override = false } = {}) {
    if (algorithm === 'Lean') {
      await this.leanAlgorithmBtn.click();
    } else {
      await this.standardAlgorithmBtn.click();
    }

    if (publish) {
      await this.publishResultsBtn.click();
      if (override) {
        await this.overrideBtn.click();
      }
    }
  }

  // ── Dismiss results with override confirmation ──────────────────
  async dismissResults() {
    await this.dismissResultsBtn.click();
    const hasOverride = await this.overrideBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (hasOverride) {
      await this.overrideBtn.click();
    }
  }

  // ── Toggle the 3D scan viewer ────────────────────────────────────
  async toggle3dScan() {
    const isShowing = await this.show3dScanBtn.isVisible({ timeout: 3000 }).catch(() => false);
    if (isShowing) {
      await this.show3dScanBtn.click();
    } else {
      await this.hide3dScanBtn.click();
    }
  }
}

module.exports = { TasksPage };