import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async clickFirstProduct() {
    await this.page.locator('[data-test^="product-"]').first().click();
  }

  async addToCart() {
    await this.page.locator('[data-test="add-to-cart"]').click();
  }
}