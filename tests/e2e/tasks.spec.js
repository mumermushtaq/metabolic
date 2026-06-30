const { test, expect } = require('@playwright/test');
const { TasksPage } = require('../../pages/TasksPage');

// Tests run sequentially within this file and share the same task queue.
// Order matters: non-destructive checks first, destructive actions
// (review/dismiss/publish) last, so earlier tests aren't starved by later ones.
test.describe.configure({ mode: 'serial' });

test.describe('Tasks', () => {

  test('navigates to Tasks tab', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await page.goto(`${process.env.BASE_URL}/tasks`);
    await expect(tasksPage.tasksTab).toBeVisible();
  });

  test('opens All Tasks queue', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await page.goto(`${process.env.BASE_URL}/tasks`);
    await tasksPage.openTasksTab();
    await tasksPage.openQueue('All Tasks');

    const hasTasks = await tasksPage.waitForTaskInQueue('All Tasks');
    if (!hasTasks) {
      console.log('No tasks in All Tasks queue after retries — skipping');
      test.skip();
      return;
    }

    await expect(tasksPage.reviewBtn.first()).toBeVisible();
  });

  test('opens BCA Queue', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await page.goto(`${process.env.BASE_URL}/tasks`);
    await tasksPage.openTasksTab();
    await tasksPage.openQueue('BCA Queue');

    const hasTasks = await tasksPage.waitForTaskInQueue('BCA Queue');
    if (!hasTasks) {
      console.log('No tasks in BCA Queue after retries — skipping');
      test.skip();
      return;
    }

    await expect(tasksPage.reviewBtn.first()).toBeVisible();
  });

  test.skip('toggles 3D scan viewer on a BCA task', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await page.goto(`${process.env.BASE_URL}/tasks`);
    await tasksPage.openTasksTab();
    await tasksPage.openQueue('BCA Queue');

    const hasTasks = await tasksPage.waitForTaskInQueue('BCA Queue');
    if (!hasTasks) { test.skip(); return; }

    await tasksPage.reviewTask(0);

    const hasScan = await tasksPage.show3dScanBtn.isVisible({ timeout: 5000 }).catch(() => false);
    if (!hasScan) { test.skip(); return; }

    await tasksPage.toggle3dScan();
    await expect(tasksPage.hide3dScanBtn).toBeVisible({ timeout: 5000 });
  });

  // Destructive — runs last since it consumes a task from the queue
  test('reviews a task: standard algorithm, publish, override', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await page.goto(`${process.env.BASE_URL}/tasks`);
    await tasksPage.openTasksTab();
    await tasksPage.openQueue('All Tasks');

    const hasTasks = await tasksPage.waitForTaskInQueue('All Tasks');
    if (!hasTasks) { test.skip(); return; }

    await tasksPage.reviewTask(0);
    await tasksPage.runReviewFlow({ algorithm: 'Standard', publish: true, override: true });

    await expect(tasksPage.tasksTab).toBeVisible();
  });

  // Destructive — runs last since it consumes a task from the queue
  test('dismisses results with override', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await page.goto(`${process.env.BASE_URL}/tasks`);
    await tasksPage.openTasksTab();
    await tasksPage.openQueue('BCA Queue');

    const hasTasks = await tasksPage.waitForTaskInQueue('BCA Queue');
    if (!hasTasks) { test.skip(); return; }

    await tasksPage.reviewTask(0);
    await tasksPage.dismissResults();

    await expect(tasksPage.tasksTab).toBeVisible();
  });

});