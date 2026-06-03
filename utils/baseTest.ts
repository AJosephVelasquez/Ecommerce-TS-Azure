import { test as base } from '@playwright/test';

type OrderTestData = {
  email: string;
  password: string;
  productName: string;
  cvv: string;
  nameOnCard: string;
  coupon: string;
};

type Fixtures = {
  orderTestData: OrderTestData;
};

export const customTest = base.extend<Fixtures>({
  orderTestData: async ({}, use) => {
    await use({
      email: 'anotherexampleemail6@gmail.com',
      password: 'SamplePassword123!',
      productName: 'ZARA COAT 3',
      cvv: '623',
      nameOnCard: 'Alain Velasquez',
      coupon: 'rahulshettyacademy',
    });
  },
});
