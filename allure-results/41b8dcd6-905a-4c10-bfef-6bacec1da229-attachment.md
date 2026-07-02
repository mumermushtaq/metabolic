# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\chat.spec.js >> Chat >> opens the first conversation
- Location: tests\e2e\chat.spec.js:14:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('listbox', { name: 'Channel list' }).locator('> *').first().locator('> *').first() to be visible
    33 × locator resolved to hidden <svg width="96" fill="none" height="96" viewBox="0 0 136 136" data-testid="chat-bubble" xmlns="http://www.w3.org/2000/svg">…</svg>

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - link "sidebarIcon3 Chat" [active] [ref=e14] [cursor=pointer]:
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
      - link "Chat" [ref=e42] [cursor=pointer]:
        - /url: /chat
        - heading "Chat" [level=3] [ref=e43]
      - generic [ref=e45]:
        - generic [ref=e46]:
          - button "notification" [ref=e47] [cursor=pointer]:
            - img "notification" [ref=e48]
          - generic: "0"
        - generic [ref=e49]:
          - img [ref=e51]
          - generic [ref=e56] [cursor=pointer]:
            - heading "Umer Mushtaq" [level=6] [ref=e57]
            - generic [ref=e58]: Admin • Diabetologist
    - generic [ref=e60]:
      - generic [ref=e61]:
        - button "more" [ref=e63] [cursor=pointer]:
          - img [ref=e64]
        - generic [ref=e68]:
          - generic [ref=e70]:
            - img [ref=e71]
            - textbox "Search" [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76]:
              - generic [ref=e77]:
                - log [ref=e79]
                - generic [ref=e80]:
                  - generic [ref=e81]:
                    - generic [ref=e82]: All Programs
                    - combobox [ref=e84]
                  - img [ref=e87]
              - generic [ref=e89]:
                - log [ref=e91]
                - generic [ref=e92]:
                  - generic [ref=e93]:
                    - generic [ref=e94]: All Care Teams
                    - combobox [ref=e96]
                  - img [ref=e99]
            - generic [ref=e101]:
              - button "Patient Chats" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]: Patient Chats
              - button "Staff Chats" [ref=e104] [cursor=pointer]:
                - generic [ref=e105]: Staff Chats
            - generic [ref=e107] [cursor=pointer]:
              - generic [ref=e108]:
                - checkbox "Filter unread" [ref=e109]
                - img [ref=e110]
              - generic [ref=e112]: Filter unread
        - listbox "Channel list" [ref=e115]:
          - listitem [ref=e116]: You have no channels currently
      - generic [ref=e117]:
        - img "empty" [ref=e118]
        - paragraph [ref=e119]: There is no message yet.
        - paragraph [ref=e120]: Please select one channel to chat.
  - alert [ref=e121]
```

# Test source

```ts
  1  | class ChatPage {
  2  | 
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     // ── Navigation ────────────────────────────────────────────────
  7  |     this.chatTab = page.getByRole('link', { name: 'sidebarIcon3 Chat' });
  8  | 
  9  |     // ── Channel list ──────────────────────────────────────────────
  10 |     this.channelList = page.getByRole('listbox', { name: 'Channel list' });
  11 | 
  12 |     // ── Message input (confirmed via Codegen testid) ───────────────
  13 |     this.messageInput = page.getByTestId('message-input');
  14 |     // Send button has no visible text — empty-text button, scoped by position
  15 |     this.sendBtn = page.getByRole('button').filter({ hasText: /^$/ });
  16 | 
  17 |     // ── Empty conversation placeholder ──────────────────────────────
  18 |     this.messageInputPlaceholder = page.getByText('Send a message');
  19 |   }
  20 | 
  21 |   // ── Navigate to Chat tab ────────────────────────────────────────
  22 |   async openChatTab() {
  23 |     await this.chatTab.click();
  24 |     await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  25 |     await this.channelList.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  26 |   }
  27 | 
  28 |   // ── Open the first conversation in the channel list ──────────────
  29 |   // Simpler and more reliable than matching by name — just opens whatever
  30 |   // conversation is on top, which is sufficient for exercising the chat flow.
  31 |   async openFirstConversation() {
  32 |     await this.channelList.waitFor({ state: 'visible', timeout: 15000 });
  33 |     const firstRow = this.channelList.locator('> *').first().locator('> *').first();
> 34 |     await firstRow.waitFor({ state: 'visible', timeout: 15000 });
     |                    ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  35 |     await firstRow.click();
  36 |   }
  37 | 
  38 |   // ── Open a conversation by partial preview text (e.g. patient name) ──
  39 |   // Kept for cases where a specific conversation is needed; falls back to
  40 |   // the first conversation if the named one can't be found.
  41 |   async openConversationByPreview(previewText) {
  42 |     await this.channelList.waitFor({ state: 'visible', timeout: 15000 });
  43 | 
  44 |     const convo = this.channelList.getByText(new RegExp(previewText)).first();
  45 |     const visible = await convo.isVisible({ timeout: 8000 }).catch(() => false);
  46 | 
  47 |     if (!visible) {
  48 |       await this.openFirstConversation();
  49 |       return;
  50 |     }
  51 | 
  52 |     await convo.click();
  53 |   }
  54 | 
  55 |   // ── Send a message in the currently open conversation ────────────
  56 |   async sendMessage(text) {
  57 |     await this.messageInput.waitFor({ state: 'visible', timeout: 10000 });
  58 |     await this.messageInput.click();
  59 |     await this.messageInput.fill(text);
  60 | 
  61 |     // Send button is the last empty-text button in the message bar —
  62 |     // index varies depending on which icons (attachment, emoji, etc.) are rendered,
  63 |     // so we click the last one to reliably hit Send
  64 |     const count = await this.sendBtn.count();
  65 |     await this.sendBtn.nth(count - 1).click();
  66 |   }
  67 | 
  68 |   // ── Open a conversation and send a message in one step ───────────
  69 |   async openConversationAndSendMessage(previewText, message) {
  70 |     await this.openConversationByPreview(previewText);
  71 |     await this.sendMessage(message);
  72 |   }
  73 | 
  74 |   // ── Click into the message input box for the active/nth conversation ──
  75 |   async focusMessageInput() {
  76 |     await this.messageInput.click();
  77 |   }
  78 | }
  79 | 
  80 | module.exports = { ChatPage };
```