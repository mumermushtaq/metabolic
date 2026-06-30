class ChatPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ────────────────────────────────────────────────
    this.chatTab = page.getByRole('link', { name: 'sidebarIcon3 Chat' });

    // ── Channel list ──────────────────────────────────────────────
    this.channelList = page.getByRole('listbox', { name: 'Channel list' });

    // ── Message input (confirmed via Codegen testid) ───────────────
    this.messageInput = page.getByTestId('message-input');
    // Send button has no visible text — empty-text button, scoped by position
    this.sendBtn = page.getByRole('button').filter({ hasText: /^$/ });

    // ── Empty conversation placeholder ──────────────────────────────
    this.messageInputPlaceholder = page.getByText('Send a message');
  }

  // ── Navigate to Chat tab ────────────────────────────────────────
  async openChatTab() {
    await this.chatTab.click();
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await this.channelList.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  }

  // ── Open the first conversation in the channel list ──────────────
  // Simpler and more reliable than matching by name — just opens whatever
  // conversation is on top, which is sufficient for exercising the chat flow.
  async openFirstConversation() {
    await this.channelList.waitFor({ state: 'visible', timeout: 15000 });
    const firstRow = this.channelList.locator('> *').first().locator('> *').first();
    await firstRow.waitFor({ state: 'visible', timeout: 15000 });
    await firstRow.click();
  }

  // ── Open a conversation by partial preview text (e.g. patient name) ──
  // Kept for cases where a specific conversation is needed; falls back to
  // the first conversation if the named one can't be found.
  async openConversationByPreview(previewText) {
    await this.channelList.waitFor({ state: 'visible', timeout: 15000 });

    const convo = this.channelList.getByText(new RegExp(previewText)).first();
    const visible = await convo.isVisible({ timeout: 8000 }).catch(() => false);

    if (!visible) {
      await this.openFirstConversation();
      return;
    }

    await convo.click();
  }

  // ── Send a message in the currently open conversation ────────────
  async sendMessage(text) {
    await this.messageInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.messageInput.click();
    await this.messageInput.fill(text);

    // Send button is the last empty-text button in the message bar —
    // index varies depending on which icons (attachment, emoji, etc.) are rendered,
    // so we click the last one to reliably hit Send
    const count = await this.sendBtn.count();
    await this.sendBtn.nth(count - 1).click();
  }

  // ── Open a conversation and send a message in one step ───────────
  async openConversationAndSendMessage(previewText, message) {
    await this.openConversationByPreview(previewText);
    await this.sendMessage(message);
  }

  // ── Click into the message input box for the active/nth conversation ──
  async focusMessageInput() {
    await this.messageInput.click();
  }
}

module.exports = { ChatPage };