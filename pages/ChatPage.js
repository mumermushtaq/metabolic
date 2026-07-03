class ChatPage {

  constructor(page) {
    this.page = page;

    // ── Navigation ────────────────────────────────────────────────
    this.chatTab = page.getByRole('link', { name: 'sidebarIcon3 Chat' });

    // ── Channel list ──────────────────────────────────────────────
    this.channelList = page.getByRole('listbox', { name: 'Channel list' });

    // ── Message input ────────────────────────────────────────────────
    // Snapshot confirms: textbox "Message" — testid may not exist in all convos
    this.messageInput = page.getByRole('textbox', { name: 'Message' });
    // Send button is a div[role="button"] with sendMessageBtn class —
    // only appears in DOM after text is typed into the input
    this.sendBtn = page.locator('[role="button"][class*="sendMessageBtn"]');

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

    // Guard: channel list may be empty ("You have no channels currently")
    const isEmpty = await this.channelList.getByText(/no channels/i).isVisible({ timeout: 3000 }).catch(() => false);
    if (isEmpty) return false;

    // Codegen confirmed: click the preview text of the first conversation directly
    const firstConvo = this.channelList.locator('> div').first();
    const hasConvo = await firstConvo.isVisible({ timeout: 5000 }).catch(() => false);
    if (!hasConvo) return false;

    await firstConvo.click();
    return true;
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

    // Send button is a div[role="button"] with sendMessageBtn class
    await this.sendBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.sendBtn.click();
  }

  // ── Open a conversation with existing messages ──────────────────
  // Avoids empty conversations where the send button never renders
  async openKnownConversation() {
    await this.channelList.waitFor({ state: 'visible', timeout: 15000 });
    // Find any conversation that already has a message preview (not "Send a message")
    const withMessages = this.channelList.locator('> div').filter({
      hasNot: this.page.getByText('Send a message')
    }).first();
    const hasOne = await withMessages.isVisible({ timeout: 5000 }).catch(() => false);
    if (hasOne) {
      await withMessages.click();
    } else {
      await this.channelList.locator('> div').first().click();
    }
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