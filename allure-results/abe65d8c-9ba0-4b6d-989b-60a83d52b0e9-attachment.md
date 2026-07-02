# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\tasks.spec.js >> Tasks >> opens BCA Queue
- Location: tests\e2e\tasks.spec.js:25:3

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
      - generic [ref=e64]:
        - generic [ref=e65]: Next Up
        - generic [ref=e66]:
          - generic [ref=e67]:
            - img [ref=e69]
            - generic [ref=e72]:
              - generic [ref=e73]: Saad Alam
              - generic [ref=e74]: MRN dv003
            - generic [ref=e75]: 0 min
          - generic [ref=e76]:
            - img [ref=e78]
            - generic [ref=e81]:
              - generic [ref=e82]: Saad Alam
              - generic [ref=e83]: MRN dv003
            - generic [ref=e84]: 0 min
          - generic [ref=e85]:
            - img [ref=e87]
            - generic [ref=e90]:
              - generic [ref=e91]: Saad Alam
              - generic [ref=e92]: MRN dv003
            - generic [ref=e93]: 0 min
          - generic [ref=e94]:
            - generic [ref=e97]:
              - generic [ref=e98]: Babak Baradari
              - generic [ref=e99]: MRN 18844
            - generic [ref=e100]: 0 min
      - generic [ref=e101]:
        - generic [ref=e103]:
          - generic [ref=e104]: TASK QUEUES
          - generic [ref=e105]:
            - button "My Patients 1 1" [ref=e106] [cursor=pointer]:
              - generic [ref=e107]:
                - img [ref=e109]
                - generic [ref=e111]: My Patients
              - generic [ref=e112]:
                - generic [ref=e113]: "1"
                - generic [ref=e114]: "1"
            - button "All Tasks 4 4" [ref=e115] [cursor=pointer]:
              - generic [ref=e116]:
                - img [ref=e118]
                - generic [ref=e120]: All Tasks
              - generic [ref=e121]:
                - generic [ref=e122]: "4"
                - generic [ref=e123]: "4"
            - button "BCA Queue 4 4" [ref=e124] [cursor=pointer]:
              - generic [ref=e125]:
                - img [ref=e127]
                - generic [ref=e130]: BCA Queue
              - generic [ref=e131]:
                - generic [ref=e132]: "4"
                - generic [ref=e133]: "4"
            - separator [ref=e134]
            - button "Completed" [ref=e135] [cursor=pointer]:
              - generic [ref=e137]: Completed
        - generic [ref=e138]:
          - generic [ref=e139]:
            - generic [ref=e141]:
              - generic [ref=e142]: My Patients
              - generic [ref=e143]: 1 pending
            - generic [ref=e144]:
              - generic [ref=e145]:
                - generic [ref=e146]: Patient
                - generic [ref=e147]: Task
                - generic [ref=e148]: Source
                - generic [ref=e149]: Time
                - generic [ref=e150]: Due In
                - generic [ref=e151]: Action
              - generic [ref=e152]:
                - generic [ref=e156]:
                  - generic [ref=e157]: Babak Baradari
                  - generic [ref=e158]: "18844"
                - generic [ref=e159]: Body Scan Review
                - generic [ref=e160]:
                  - img [ref=e162]
                  - text: SELF
                - generic [ref=e164]: 23 Feb, 15:46
                - generic [ref=e166]: 0 min
                - button "Review" [ref=e168] [cursor=pointer]
          - list [ref=e170]:
            - listitem:
              - img
            - listitem [ref=e171]: "1"
            - listitem:
              - img
  - alert [ref=e172]
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