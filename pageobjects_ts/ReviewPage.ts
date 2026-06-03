import {Page, Locator} from '@playwright/test';

export class ReviewPage {

  page : Page;
  orderDetails : Locator;
  ordersLink : Locator;

  constructor(page : Page) {
    this.page = page;
    this.orderDetails = page.locator("tr.ng-star-inserted label");
    this.ordersLink = page.locator("button[routerlink*='myorders']");
  }

  async getOrderId() {
    const orderIdText : any = await this.orderDetails.textContent();
    const orderId = orderIdText.split("|")[1].trim();
    return orderId;
  }

  async goToOrders() {
    await this.ordersLink.click();
  }
}
