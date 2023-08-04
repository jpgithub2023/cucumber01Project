Feature: Techfios billing login page functionality validation

  Background: 
    Given User is on the Techfios Login Page

  @Sanity
  Scenario Outline: User should be able to login with valid credentials 
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User clicks on sign in button
    Then User should land on dashboard page
    
    Examples: 
      | username          | password |    
      | demo@techfios.com | abc123   | 