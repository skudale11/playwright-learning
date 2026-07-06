import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(email: string, password: string) {
    await this.page.getByRole('link', { name: 'Sign in' }).click();
    await this.page.getByLabel('Email address').fill(email);
    await this.page.getByPlaceholder('Your password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async getErrorMessage() {
    return this.page.getByText('Invalid email or password');
  }
}