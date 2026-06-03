import {Page, Locator} from '@playwright/test';

export class LoginPage {

  page : Page;
  emailField : Locator;
  passwordField : Locator;
  loginBtn : Locator;

  constructor(page : Page) {
    this.page = page;
    this.emailField = page.locator("#userEmail");
    this.passwordField = page.locator("#userPassword");
    this.loginBtn = page.getByRole("button", { name: "Login" });
  }

  async goTo() {
     await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  }

  async loggingIn(email : string, password : string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
