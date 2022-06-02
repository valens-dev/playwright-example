import { expect } from '@playwright/test';

export default class Home {
  constructor(page) {
    this.page = page;
    this.url = '/';
    this.text = {
      logo: 'conduit',
    };
  }

  get heroLogo() {
    return this.page.locator('h1.logo-font');
  }

  async navigate() {
    const url = process.env.BASE_URL + this.url;
    await this.page.goto(url);
  }

  async checkPageIsLoaded() {
    await expect(this.heroLogo).toHaveText(this.text.logo);
  }
}
