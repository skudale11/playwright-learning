import { test, expect } from '@playwright/test';

test('add products to cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-categories"]').click();
  await page.locator('[data-test="product-01KWQEX7PGB7FJVDHJ54Z6ST7W"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
});