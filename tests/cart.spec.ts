import { test, expect } from '@playwright/test';

test('user can add a product to cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-categories"]').click();
  await page.locator('[data-test^="product-"]').first().click();
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page).toHaveURL(/product/);
});