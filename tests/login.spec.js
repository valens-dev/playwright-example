import { test, expect } from '@playwright/test';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import Profile from '../pages/Profile.js';
import json from '../utils/json.js';

const user = json('../data/user.json');

test('navigate page', async ({ page }) => {
  const home = new Home(page);
  await home.navigate();
  await home.checkPageIsLoaded();
});

test('logIn', async ({ page }) => {
  const login = new Login(page);
  await login.navigate();
  await login.checkPageIsLoaded();
  await login.login(user);

  const profile = new Profile(page);
  await profile.checkPageIsLoaded();
});
