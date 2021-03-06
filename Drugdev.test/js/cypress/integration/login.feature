Feature: Login
  In order to use the app the user must be able to Login

  Scenario: Login Success
    Given the user has the correct credentials
    When the user enters username "test@drugdev.com"
    And the user enters password "supers3cret"
    And clicks Login
    Then the user is presented with a welcome message

  Scenario: Login Incorrect credentials
    Given the user has the incorrect credentials
    When the user enters username "test@drugdev.com"
    And the user enters password "super3cret"
    And clicks Login
    Then the user is presented with a error message