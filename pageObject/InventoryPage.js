class InventoryPage {
    constructor(page) {
        this.page = page;
        this.productSelector = (productName) => `div.inventory_item:has(div.inventory_item_name:has-text("${productName}"))`;
    }

    // Locator for "Add to Cart" button of a specific product
    addItemButton(productName) {
        return this.page.locator(`${this.productSelector(productName)} button[data-test^="add-to-cart"]`);
    }

    // Locator for "Remove" button of a specific product
    removeItemButton(productName) {
        return this.page.locator(`${this.productSelector(productName)} button[data-test^="remove"]`);
    }
}

module.exports = { InventoryPage };
