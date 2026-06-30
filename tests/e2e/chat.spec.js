const { test, expect } = require('@playwright/test');
const { ChatPage } = require('../../pages/ChatPage');

const TEST_MESSAGE = 'This is an example text, maximum appear as 3 lines. More than that will appear as ellipsis, then user can click View Message';

test.describe('Chat', () => {

  test('navigates to Chat tab', async ({ page }) => {
    const chatPage = new ChatPage(page);
    await page.goto(`${process.env.BASE_URL}/chat`);
    await expect(page).toHaveURL(/\/chat/);
  });

  test('opens the first conversation', async ({ page }) => {
    const chatPage = new ChatPage(page);
    await page.goto(`${process.env.BASE_URL}/chat`);
    await chatPage.openChatTab();

    await chatPage.openFirstConversation();
    await expect(chatPage.messageInput).toBeVisible({ timeout: 10000 });
  });

  test('sends a message in the first conversation', async ({ page }) => {
    const chatPage = new ChatPage(page);
    await page.goto(`${process.env.BASE_URL}/chat`);
    await chatPage.openChatTab();

    await chatPage.openFirstConversation();
    await chatPage.sendMessage(TEST_MESSAGE);

    // Message should appear in the conversation thread
    await expect(page.getByText(TEST_MESSAGE).last()).toBeVisible({ timeout: 10000 });
  });

});