import { expect } from '@playwright/test';

export default class Home {
  constructor(page) {
    this.page = page;
    this.url = '/user/login';
    this.text = {
      logo: 'Sign in',
    };
    this.responses = {
      login: /.*api\/users\/login/,
    };
  }

  get title() {
    return this.page.locator('h1.text-xs-center');
  }

  get emailInput() {
    return this.page.locator('[type=email]');
  }

  get passwordInput() {
    return this.page.locator('[type=password]');
  }
  get singInButton() {
    return this.page.locator('[type=submit]');
  }

  async navigate() {
    const url = process.env.BASE_URL + this.url;
    await this.page.goto(url);
  }

  async checkPageIsLoaded() {
    await expect(this.title).toHaveText(this.text.logo);
  }

  async login(user) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.singInButton.click();
    await this.page.waitForResponse(this.responses.login);
  }
}
