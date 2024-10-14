class InventoryPage {
    constructor(page) {
        this.page = page;
    }

    async addItemToCart(productName) {
        // Find the product by name and then click its corresponding "Add to cart" button
        const productSelector = `div.inventory_item:has(div.inventory_item_name:has-text("${productName}"))`;
        await this.page.locator(`${productSelector} button[data-test^="add-to-cart"]`).click();
    }

    async isItemInCart(productName) {
        // Verify that the "Remove" button is visible after adding the item to the cart
        const productSelector = `div.inventory_item:has(div.inventory_item_name:has-text("${productName}"))`;
        return await this.page.locator(`${productSelector} button[data-test^="remove"]`).isVisible();
    }
}

module.exports = { InventoryPage };
