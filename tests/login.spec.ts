import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('homepage has correct title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(page).toHaveTitle(/Practice Software Testing/);
});

test('user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    'customer@practicesoftwaretesting.com',
    'welcome01'
  );
  await expect(page).toHaveURL(/account/);
});

test('user sees error with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    'customer@practicesoftwaretesting.com',
    'wrongpassword'
  );
  const error = await loginPage.getErrorMessage();
  await expect(error).toBeVisible();
});