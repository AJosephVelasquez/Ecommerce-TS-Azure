import {Page, Locator} from '@playwright/test';

export class CheckoutPage {

  page : Page;
  cvvField : Locator;
  nameOnCardField : Locator;
  countryField : Locator;
  philippines : Locator;
  couponField : Locator;
  couponBtn : Locator;
  placeOrderBtn : Locator;

  constructor(page : Page) {
    this.page = page;
    this.cvvField = page.locator(
      "//div[text()='CVV Code ']/following-sibling::input",
    );
    this.nameOnCardField = page.locator(
      "//div[text()='Name on Card ']/following-sibling::input",
    );
    this.countryField = page.getByPlaceholder("Select Country");
    this.philippines = page.getByRole("button", { name: "Philippines" });
    this.couponField = page.locator(
      "//div[text()='Apply Coupon ']/following-sibling::input",
    );
    this.couponBtn = page.getByRole("button", { name: "Apply Coupon" });
    this.placeOrderBtn = page.getByText("Place Order");
  }

  async fillDetails(cvv : string, nameOnCard : string, coupon : string) {
    await this.cvvField.fill(cvv);
    await this.nameOnCardField.fill(nameOnCard);
    await this.countryField.pressSequentially("Phil");
    await this.philippines.click();
    await this.couponField.fill(coupon);
    await this.couponBtn.click();
  }

  async checkout() {
    await this.placeOrderBtn.click();
  }
}

