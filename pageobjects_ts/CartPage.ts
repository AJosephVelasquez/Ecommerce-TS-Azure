import {Page, Locator} from '@playwright/test';

export class CartPage {

    page : Page;
    checkoutBtn : Locator;

    constructor(page : Page) {
        this.page = page;
        this.checkoutBtn = page.getByRole('button', {name : 'Checkout'});
    }

    async goToCheckout() {
        await this.checkoutBtn.click();
    }
}
