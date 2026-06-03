import { Given, When, Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test";

Given(
  "the user is logged in using {string} and {string}",
  async function (email, password) {
    
    this.loginPage.goTo();
    this.loginPage.loggingIn(email, password);
    await expect(
      this.page.getByRole("heading", { name: "Automation" }),
    ).toBeVisible();
  },
);

When(
  "the user selects {string} as their product",
  async function (productName) {
    const dashboardPage = this.poManager.getDashboard();
    await dashboardPage.selectItem(productName);
    await dashboardPage.goToCart();
  },
);

When(
  "goes to Cart to verify that {string} is in their Cart",
  async function (productName) {
    await expect(this.page.locator(".cart h3")).toHaveText(productName);
    const cartPage = this.poManager.getCart();
    await cartPage.goToCheckout();
  },
);

When(
  "user goes to Checkout with their card details like {string} and {string}, and coupon code {string}",
  async function (cvv, nameOnCard, coupon) {
    const checkoutPage = this.poManager.getCheckout();
    await checkoutPage.fillDetails(cvv, nameOnCard, coupon);
    await expect(this.page.getByText("* Coupon Applied")).toBeVisible();
    await checkoutPage.checkout();
  },
);

When("user goes to the Review page to get their orderId", async function () {
  const reviewPage = this.poManager.getReview();
  await expect(this.page.locator("h1.hero-primary")).toContainText("Thankyou");
  this.orderId = await reviewPage.getOrderId();
  await reviewPage.goToOrders();
});

Then(
  "using the orderId the user can find their order in the Orders page",
  async function () {
    const ordersPage = this.poManager.getOrders();
    await ordersPage.viewOrder(this.orderId);
  },
);

//ErrorScenario.feature

Given('user tries to login using {string} and {string}', async function (username, password) {

    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator("[name='username']").fill(username);
    await this.page.getByLabel(/password/i).fill(password);
    await this.page.getByRole('button', {name : 'Sign In'}).click();
});

Then('show appropriate error message', async function () {
  await expect(this.page.locator('div.alert-danger')).toBeVisible();
});
