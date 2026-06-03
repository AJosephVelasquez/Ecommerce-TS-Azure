import {Page, Locator} from '@playwright/test';

export class OrdersPage {

  page : Page;
  orders : Locator;

  constructor(page : Page) {
    this.page = page;
    this.orders = page.locator("tr.ng-star-inserted");
  }

  async viewOrder(orderId : string) {
    const orders = await this.orders;

    await orders
      .filter({ hasText: orderId })
      .getByRole("button", { name: "View" })
      .click();
    console.log(await this.page.locator(".artwork-card .title").textContent());
  }
}