import { test, expect } from "@playwright/test";
import { POManager } from "../pageobjects_ts/POManager";
import dataSet from "../utils/data.json";
import { customTest } from "../utils/baseTest";

test.describe.configure({ mode: "parallel" });

for (const data of dataSet) {
  test(`@Web End To End Testing for ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getLogin();
    await loginPage.goTo();
    await loginPage.loggingIn(data.email, data.password);
    await expect(
      page.getByRole("heading", { name: "Automation" }),
    ).toBeVisible();

    const dashboardPage = poManager.getDashboard();
    await dashboardPage.selectItem(data.productName);
    await dashboardPage.goToCart();
    await expect(page.locator(".cart h3")).toHaveText(data.productName);

    const cartPage = poManager.getCart();
    await cartPage.goToCheckout();

    const checkoutPage = poManager.getCheckout();
    await checkoutPage.fillDetails(data.cvv, data.nameOnCard, data.coupon);
    await expect(page.getByText("* Coupon Applied")).toBeVisible();
    await checkoutPage.checkout();

    const reviewPage = poManager.getReview();
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou");
    const orderId = await reviewPage.getOrderId();
    await reviewPage.goToOrders();

    const ordersPage = poManager.getOrders();
    await ordersPage.viewOrder(orderId);
  });
}

customTest("End To End Testing", async ({ page, orderTestData }) => {
  const poManager = new POManager(page);

  const loginPage = poManager.getLogin();
  await loginPage.goTo();
  await loginPage.loggingIn(orderTestData.email, orderTestData.password);
  await expect(page.getByRole("heading", { name: "Automation" })).toBeVisible();

  const dashboardPage = poManager.getDashboard();
  await dashboardPage.selectItem(orderTestData.productName);
  await dashboardPage.goToCart();
  await expect(page.locator(".cart h3")).toHaveText(orderTestData.productName);

  const cartPage = poManager.getCart();
  await cartPage.goToCheckout();

  const checkoutPage = poManager.getCheckout();
  await checkoutPage.fillDetails(
    orderTestData.cvv,
    orderTestData.nameOnCard,
    orderTestData.coupon,
  );
  await expect(page.getByText("* Coupon Applied")).toBeVisible();
  await checkoutPage.checkout();

  const reviewPage = poManager.getReview();
  await expect(page.locator("h1.hero-primary")).toContainText("Thankyou");
  const orderId = await reviewPage.getOrderId();
  await reviewPage.goToOrders();

  const ordersPage = poManager.getOrders();
  await ordersPage.viewOrder(orderId);
});
