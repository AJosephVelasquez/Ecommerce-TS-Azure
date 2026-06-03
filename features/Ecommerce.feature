Feature: Ecommerce Ordering System

@Validations
    Scenario: End to End Ecommerce Order System
    Given the user is logged in using "anotherexampleemail6@gmail.com" and "SamplePassword123!"
    When the user selects "ZARA COAT 3" as their product
    And goes to Cart to verify that "ZARA COAT 3" is in their Cart
    And user goes to Checkout with their card details like "123" and "Alain Velasquez", and coupon code "rahulshettyacademy"
    And user goes to the Review page to get their orderId
    Then using the orderId the user can find their order in the Orders page