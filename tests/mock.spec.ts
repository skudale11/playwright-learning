import { test, expect } from '@playwright/test';

test('shows products from mocked API', async ({ page }) => {
  await page.route('**/products**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [
          { id: '1', name: 'Mock Hammer', price: 9.99 }
        ]
      })
    });
  });

  await page.goto('/');
  await expect(page).toHaveURL('/');
});

test('shows empty state when API returns no products', async ({ page }) => {
  await page.route('**/products**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: [] })
    });
  });

  await page.goto('/');
  await expect(page).toHaveURL('/');
});

test('waits for products API response', async ({ page }) => {
  const responsePromise = page.waitForResponse('**/products**');
  await page.goto('/');
  const response = await responsePromise;
  expect(response.status()).toBe(200);
});