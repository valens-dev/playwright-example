import { expect } from '@playwright/test';

export default class Profile {
  constructor(page) {
    this.page = page;
  }
  get myPosts() {
    return this.page.locator('text="Your Feed"');
  }

  async checkPageIsLoaded() {
    await expect(this.myPosts).toBeVisible();
  }
}
