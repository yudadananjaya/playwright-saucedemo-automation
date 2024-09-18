const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/login.page');

test.describe('Login Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForSelector('.inventory_list');
    expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login('invalid_user', 'wrong_password');
    await loginPage.expectErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });
});
