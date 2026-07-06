import { test, expect } from '../fixtures';

test('logged in user sees account page', async ({ loggedInPage, page }) => {
  await expect(page).toHaveURL(/account/);
});