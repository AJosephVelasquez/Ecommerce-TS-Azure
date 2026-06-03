import {APIRequestContext} from '@playwright/test'

export class APIUtils {

  apiContext : APIRequestContext;

  constructor(apiContext : APIRequestContext) {
    this.apiContext = apiContext;
  }

  async getToken(loginPayload : string) {
    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      { data: loginPayload },
    );
    const loginResponseJSON = await loginResponse.json();
    const token = loginResponseJSON.token;
    return token;
  }

  async getOrder(orderPayload : string, token : string) {
    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderPayload,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      },
    );
    const orderResponseJSON = await orderResponse.json();
    const orderId = orderResponseJSON.orders[0];
    return orderId;
  }
}

