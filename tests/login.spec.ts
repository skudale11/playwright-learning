import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  await expect(page).toHaveTitle(/Practice Software Testing/);
});

test('user can log in', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email address').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Your password').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Jane Doe')).toBeVisible();
});

test('user sees error with wrong password', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email address').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Your password').fill('wrongpassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid email or password')).toBeVisible();
});