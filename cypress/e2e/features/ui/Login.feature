Feature: Login features
  Scenario: Verify Menu Options displayed
    Given User opens amphora application
    When User clicks on "Products" option from navigation menu
    And User verifies menu options displayed
      | MenuOption                  |
      | Symphony CTRM               |
      | Alchemy CTRM                |
      | VaR Module                  |
      | Trade confirmations manager |
      | Freight manager             |
      | Claims manager              |
      | Symphony Credit             |


  Scenario: Sign-up to Amphora New Letter
    Given User opens amphora application
    When User selects "Newsletter sign-up" sub menu from Navigation menu "Resources"
    And Verify user navigated to sign-up page
    And User enters business email as "business@amphora.com"
    And User enters first name as "Vijaya"
    And User enters last name as "Lakshmi"
    And User click on sign-up button
    Then Verify success message appears