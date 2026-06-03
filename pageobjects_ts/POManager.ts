import { Page } from "@playwright/test";
import { LoginPage } from "../pageobjects_ts/LoginPage";
import { DashboardPage } from "../pageobjects_ts/DashboardPage";
import { CartPage } from "../pageobjects_ts/CartPage";
import { CheckoutPage } from "../pageobjects_ts/CheckoutPage";
import { ReviewPage } from "../pageobjects_ts/ReviewPage";
import { OrdersPage } from "../pageobjects_ts/OrdersPage";

export class POManager {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  reviewPage: ReviewPage;
  ordersPage: OrdersPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.reviewPage = new ReviewPage(page);
    this.ordersPage = new OrdersPage(page);
  }

  getLogin() {
    return this.loginPage;
  }

  getDashboard() {
    return this.dashboardPage;
  }

  getCart() {
    return this.cartPage;
  }

  getCheckout() {
    return this.checkoutPage;
  }

  getReview() {
    return this.reviewPage;
  }

  getOrders() {
    return this.ordersPage;
  }
}

