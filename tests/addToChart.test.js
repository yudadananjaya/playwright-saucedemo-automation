const { test, expect } = require('@playwright/test');
const { InventoryActions } = require('../pageAction/InventoryActions');
const { LoginPage } = require('../pageObject/login.page');

test.describe('Inventory Actions', () => {
    let inventoryActions;
    let loginPage;
    let page;

    test.beforeEach(async ({ page: testPage }) => {
        // Initialize the pages
        page = testPage;
        inventoryActions = new InventoryActions(page);
        loginPage = new LoginPage(page);

        // Perform the login action once before each test
        await page.goto('/');
        await loginPage.login('standard_user', 'secret_sauce');
        await page.waitForSelector('.inventory_list');
        expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
    });

    test('Add item to cart by product name', async () => {
        // Add "Sauce Labs Backpack" to the cart
        await inventoryActions.addItemToCart('Sauce Labs Backpack');
        
        // Verify the item was added to the cart
        const isInCart = await inventoryActions.isItemInCart('Sauce Labs Backpack');
        expect(isInCart).toBeTruthy();
    });

    test('Add multiple items to cart by product name', async () => {
        // List of items to add to the cart
        const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light'];

        // Loop through and add each item to the cart
        for (const item of itemsToAdd) {
            await inventoryActions.addItemToCart(item);
        }

        // Verify each item was added to the cart
        for (const item of itemsToAdd) {
            const isInCart = await inventoryActions.isItemInCart(item);
            expect(isInCart).toBeTruthy();
        }

        console.log('Items added to the cart.');
    });
});
