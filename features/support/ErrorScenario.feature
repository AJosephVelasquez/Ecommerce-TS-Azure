Feature: Error Validations

@Error
    Scenario: Error Validation Negative Scenario
    Given user tries to login using "<username>" and "<password>"
    Then show appropriate error message

    Examples:
        |        username         |   password     |
        | invalidemail@gmail.com  | wrongpassword  | 
        | wrongemail@gmail.com  | xpassword  | 