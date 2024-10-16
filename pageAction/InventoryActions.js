const { InventoryPage } = require('../pageObject/InventoryPage');

class InventoryActions {
    constructor(page) {
        this.inventoryPage = new InventoryPage(page);
    }

    // Action to add an item to the cart
    async addItemToCart(productName) {
        const addButton = this.inventoryPage.addItemButton(productName);
        await addButton.click();
    }

    // Action to check if the item is in the cart
    async isItemInCart(productName) {
        const removeButton = this.inventoryPage.removeItemButton(productName);
        return await removeButton.isVisible();
    }
}

module.exports = { InventoryActions };
