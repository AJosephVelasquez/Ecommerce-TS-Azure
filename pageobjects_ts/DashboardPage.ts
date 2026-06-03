import {Page, Locator} from '@playwright/test';

export class DashboardPage {

    page : Page;
    productCards : Locator;
    cartLink : Locator;

    constructor(page : Page) {
        this.page = page;
        this.productCards = page.locator('div.card-body');
        this.cartLink = page.locator("[routerlink*='cart']");
    }

    async selectItem(productName : string) {
        await this.productCards.filter({hasText : productName}).getByRole('button', {name : 'Add To Cart'}).click();
    }

    async goToCart() {
       await this.cartLink.click();
    }
}