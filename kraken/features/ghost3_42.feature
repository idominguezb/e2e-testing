Feature: Ghost 3.42

  @user5 @web
  Scenario:Create page
    Given I navigate to "http://localhost:3001/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    Then I take a screenshot
    When I click on button with id 'ember12'
    And I wait for 5 seconds
    Then I take a screenshot
    When I go to pages section
    And I wait for 3 seconds
    Then I take a screenshot
    When I click on new page
    Then I take a screenshot
    When I type the tittle 'New page'
    When I type the description
    And I wait for 2 seconds
    When I Click on publish
    And I wait for 1 seconds
    When I Click on publish again
    And I wait for 1 seconds
    Then I take a screenshot
    When I go back to pages section
    When I click on all pages 'published'
    And I wait for 2 seconds
    Then I take a screenshot
    Then I check the first row with tittle 'New page'

  @user2 @web
  Scenario: Creación exitosa de un Tag
    Given I navigate to "http://localhost:3001/ghost"
    And I wait for 5 seconds
    And I click view with selector "#ember8"
    When I enter text "<USER>"
    And I wait for 5 seconds
    And I click view with selector "#ember10"
    When I enter password "<PASSWORD>"
    And I wait for 5 seconds
    And I click view with selector "#ember12"
    And I wait for 5 seconds
    When I navigate to "http://localhost:3001/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    And I wait for 5 seconds
    When I enter tag name "MISO1"
    When I save tag
    When I navigate to "http://localhost:3001/ghost/#/tags"
    And I wait for 5 seconds
    Then I found new tag created "MISO1"
    Then I take a screenshot


 


