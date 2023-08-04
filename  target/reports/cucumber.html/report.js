$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/TechfiosBankAndCash.feature");
formatter.feature({
  "name": "Techfios Other billing login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BankAndCashFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials and create a New Bank Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on bankCash",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "name": "User should land on Add New Account page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters accountTitle in the accounts page as \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters description in the accounts page as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters initialBalance in the accounts page as \"\u003cinitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters accountNumber in the accounts page as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters contactPerson in the accounts page as \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Phone in the accounts page as \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters internetBankingURL in the accounts page as \"\u003cinternetBankingURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "phone",
        "contactPerson",
        "internetBankingURL"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "JP\u0027s Account",
        "Travel Savings",
        "50000",
        "111222",
        "1112223333",
        "Elton John",
        "https://techfios.com/billing/?ng\u003dadmin/"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_is_on_the_Techfios_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials and create a New Bank Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BankAndCashFeature"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on bankCash",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on newAccount",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Add New Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.User_should_land_on_Add_New_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters accountTitle in the accounts page as \"JP\u0027s Account\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_accountTitle_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters description in the accounts page as \"Travel Savings\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_description_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters initialBalance in the accounts page as \"50000\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_initialBalance_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters accountNumber in the accounts page as \"111222\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_accountNumber_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters contactPerson in the accounts page as \"Elton John\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_contactPerson_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Phone in the accounts page as \"1112223333\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_Phone_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters internetBankingURL in the accounts page as \"https://techfios.com/billing/?ng\u003dadmin/\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_enters_internetBankingURL_in_the_accounts_page_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_clicks_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BankAndCashStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[]Account Created Succ...\u003e but was:\u003c[×\n]Account Created Succ...\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.BankAndCashStepDefination.user_should_be_able_to_validate_account_created_successfully(BankAndCashStepDefination.java:115)\r\n\tat ✽.User should be able to validate account created successfully(classpath:features/TechfiosBankAndCash.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});