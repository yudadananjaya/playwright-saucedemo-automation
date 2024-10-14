const { test, expect } = require('@playwright/test');
const { InventoryPage } = require('../page-objects/inventoryPage');
const { LoginPage } = require('../page-objects/login.page');

test('Add item to cart by product name', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const loginPage = new LoginPage(page);

    // Login
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForSelector('.inventory_list');
    expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
    
    // Navigate to the inventory page
    await page.goto('https://www.saucedemo.com/inventory.html');
    
    // List of items to add
    const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light'];

    // Loop through and add each item to the cart
    for (const item of itemsToAdd) {
        await inventoryPage.addItemToCart(item);
    }

    // Verify each item was added to the cart
    for (const item of itemsToAdd) {
        const isInCart = await inventoryPage.isItemInCart(item);
        expect(isInCart).toBeTruthy();
    }
});
