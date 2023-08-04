@BankAndCashFeature
Feature: Techfios Other billing login page functionality validation

  Background: 
    Given User is on the Techfios Login Page

  @Sanity
  Scenario Outline: User should be able to login with valid credentials and create a New Bank Account
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User clicks on sign in button
    Then User should land on dashboard page
    Then User clicks on bankCash
    When User clicks on newAccount
    Then User should land on Add New Account page
    And User enters accountTitle in the accounts page as "<accountTitle>"
    And User enters description in the accounts page as "<description>"
    And User enters initialBalance in the accounts page as "<initialBalance>"
    And User enters accountNumber in the accounts page as "<accountNumber>"
    And User enters contactPerson in the accounts page as "<contactPerson>"
    And User enters Phone in the accounts page as "<phone>"
    And User enters internetBankingURL in the accounts page as "<internetBankingURL>"
    And User clicks on submit
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle | description    | initialBalance | accountNumber | phone      | contactPerson | internetBankingURL                      |
      | demo@techfios.com | abc123   | JP's Account | Travel Savings |          50000 |        111222 | 1112223333 | Elton John    | https://techfios.com/billing/?ng=admin/ |
      #| demo@techfios.com | abc1234   | JP's Account | Travel Savings|          50000 |        111222 | 1112223333 | Elton John    | https://techfios.com/billing/?ng=admin/ |
