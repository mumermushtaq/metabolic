# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\tasks.spec.js >> Tasks >> toggles 3D scan viewer on a BCA task
- Location: tests\e2e\tasks.spec.js:54:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Tasks' }) resolved to 2 elements:
    1) <a href="/tasks">…</a> aka getByRole('link', { name: 'Tasks' }).first()
    2) <a href="/tasks">…</a> aka getByRole('link', { name: 'Tasks' }).nth(1)

Call log:
  - waiting for getByRole('link', { name: 'Tasks' })

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
        - link "Tasks" [ref=e42] [cursor=pointer]:
          - /url: /tasks
          - heading "Tasks" [level=3] [ref=e43]
        - img [ref=e45]
      - generic [ref=e48]:
        - button "notification" [ref=e50] [cursor=pointer]:
          - img "notification" [ref=e51]
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e59] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e60]
            - generic [ref=e61]: Admin • Diabetologist
    - generic [ref=e63]:
      - generic [ref=e65]: Next Up
      - generic [ref=e67]:
        - generic [ref=e69]:
          - generic [ref=e70]: TASK QUEUES
          - generic [ref=e71]:
            - button "My Patients 0 0" [ref=e72] [cursor=pointer]:
              - generic [ref=e73]:
                - img [ref=e75]
                - generic [ref=e77]: My Patients
              - generic [ref=e78]:
                - generic [ref=e79]: "0"
                - generic [ref=e80]: "0"
            - button "All Tasks 0 0" [ref=e81] [cursor=pointer]:
              - generic [ref=e82]:
                - img [ref=e84]
                - generic [ref=e86]: All Tasks
              - generic [ref=e87]:
                - generic [ref=e88]: "0"
                - generic [ref=e89]: "0"
            - button "BCA Queue 0 0" [ref=e90] [cursor=pointer]:
              - generic [ref=e91]:
                - img [ref=e93]
                - generic [ref=e96]: BCA Queue
              - generic [ref=e97]:
                - generic [ref=e98]: "0"
                - generic [ref=e99]: "0"
            - separator [ref=e100]
            - button "Completed" [ref=e101] [cursor=pointer]:
              - generic [ref=e103]: Completed
        - generic [ref=e105]:
          - generic [ref=e107]:
            - generic [ref=e108]: My Patients
            - generic [ref=e109]: 0 pending
          - generic [ref=e111]:
            - generic [ref=e112]: Patient
            - generic [ref=e113]: Task
            - generic [ref=e114]: Source
            - generic [ref=e115]: Time
            - generic [ref=e116]: Due In
            - generic [ref=e117]: Action
  - alert [ref=e123]
```

# Test source

```ts
  1  | class TasksPage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     // ── Navigation ────────────────────────────────────────────────
  7  |     this.tasksTab = page.getByRole('link', { name: 'Tasks' });
  8  | 
  9  |     // ── Queue filter buttons ─────────────────────────────────────
  10 |     this.allTasksBtn = page.getByRole('button', { name: /^All Tasks/ });
  11 |     this.bcaQueueBtn = page.getByRole('button', { name: /^BCA Queue/ });
  12 | 
  13 |     // ── Task actions ─────────────────────────────────────────────
  14 |     this.reviewBtn          = page.getByRole('button', { name: 'Review' });
  15 |     this.leanAlgorithmBtn   = page.getByRole('button', { name: 'Lean Algorithm' });
  16 |     this.standardAlgorithmBtn = page.getByRole('button', { name: 'Standard Algorithm' });
  17 |     this.publishResultsBtn  = page.getByRole('button', { name: 'Publish Results' });
  18 |     this.dismissResultsBtn  = page.getByRole('button', { name: 'Dismiss Results' });
  19 |     this.overrideBtn        = page.getByRole('button', { name: 'Override' });
  20 | 
  21 |     // ── 3D scan toggle ────────────────────────────────────────────
  22 |     this.show3dScanBtn = page.getByRole('img', { name: 'Show 3D Scan' });
  23 |     this.hide3dScanBtn = page.getByRole('img', { name: 'Hide 3D Scan' });
  24 |   }
  25 | 
  26 |   // ── Navigate to Tasks tab ───────────────────────────────────────
  27 |   async openTasksTab() {
> 28 |     await this.tasksTab.click();
     |                         ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Tasks' }) resolved to 2 elements:
  29 |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  30 |   }
  31 | 
  32 |   // ── Open a specific task queue (All Tasks / BCA Queue) ─────────
  33 |   async openQueue(queueName) {
  34 |     const btn = this.page.getByRole('button', { name: new RegExp(`^${queueName}`) });
  35 |     await btn.waitFor({ state: 'visible', timeout: 10000 });
  36 |     await btn.click();
  37 |   }
  38 | 
  39 |   // ── Open a task by clicking its patient/row card ────────────────
  40 |   async openTaskByPatientName(patientName) {
  41 |     const card = this.page.locator('div').filter({ hasText: new RegExp(patientName) }).first();
  42 |     await card.click();
  43 |   }
  44 | 
  45 |   // ── Click Review on the nth task in the list (0-based) ──────────
  46 |   async reviewTask(index = 0) {
  47 |     await this.reviewBtn.nth(index).click();
  48 |   }
  49 | 
  50 |   // ── Run the standard review flow: algorithm selection then publish ──
  51 |   async runReviewFlow({ algorithm = 'Standard', publish = true, override = false } = {}) {
  52 |     if (algorithm === 'Lean') {
  53 |       await this.leanAlgorithmBtn.click();
  54 |     } else {
  55 |       await this.standardAlgorithmBtn.click();
  56 |     }
  57 | 
  58 |     if (publish) {
  59 |       await this.publishResultsBtn.click();
  60 |       if (override) {
  61 |         await this.overrideBtn.click();
  62 |       }
  63 |     }
  64 |   }
  65 | 
  66 |   // ── Dismiss results with override confirmation ──────────────────
  67 |   async dismissResults() {
  68 |     await this.dismissResultsBtn.click();
  69 |     const hasOverride = await this.overrideBtn.isVisible({ timeout: 3000 }).catch(() => false);
  70 |     if (hasOverride) {
  71 |       await this.overrideBtn.click();
  72 |     }
  73 |   }
  74 | 
  75 |   // ── Toggle the 3D scan viewer ────────────────────────────────────
  76 |   async toggle3dScan() {
  77 |     const isShowing = await this.show3dScanBtn.isVisible({ timeout: 3000 }).catch(() => false);
  78 |     if (isShowing) {
  79 |       await this.show3dScanBtn.click();
  80 |     } else {
  81 |       await this.hide3dScanBtn.click();
  82 |     }
  83 |   }
  84 | }
  85 | 
  86 | module.exports = { TasksPage };
```