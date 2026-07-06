import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('user can add a product to cart', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();
  await productPage.clickFirstProduct();
  await productPage.addToCart();
  await expect(page).toHaveURL(/product/);
});