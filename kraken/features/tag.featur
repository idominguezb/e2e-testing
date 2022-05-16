Feature: Multiple site support
  Only blog owners can post to a blog, except administrators,
  who can post to all blogs.

  @user11 @web
  Scenario: Creacion exitosa de un Tag
    Given I navigate to "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I navigate to "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    And I wait for 5 seconds
    When I enter tag name "MISO1"
    Then I take a screenshot
    When I save tag
    Then I take a screenshot
    When I navigate to "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    Then I found new tag created "MISO1"
    Then I take a screenshot
    Then I send a signal to user 12 containing "scenario1 complete"

  @user12 @web
  Scenario: Create tag invalido
    Given I navigate to "http://localhost:2368/ghost"
    And I wait for a signal containing "scenario1 complete" for 3600 seconds
    When I enter email "<USER>" for tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    And I wait for 5 seconds
    Then I take a screenshot
    When I click next for tag
    And I wait for 5 seconds
    Then I take a screenshot
    When I navigate to "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    Then I take a screenshot
    When I input invalid color "12345"
    Then I take a screenshot
    Then I send a signal to user 13 containing "scenario2 complete"

  @user13 @web
  Scenario: Create tag con description invalida
    Given I navigate to "http://localhost:2368/ghost"
    And I wait for a signal containing "scenario2 complete" for 3600 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I click next for tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I navigate to "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    Then I take a screenshot
    When I enter tag name "MISO2"
    Then I take a screenshot
    Then I input invalid description
    Then I take a screenshot
    Then I send a signal to user 14 containing "scenario3 complete"
    
  @user14 @web
  Scenario: Create Internal Tag
    Given I navigate to "http://localhost:2368/ghost"
    And I wait for a signal containing "scenario3 complete" for 3600 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I navigate to "http://localhost:2368/ghost/#/tags"
    Then I take a screenshot
    And I wait for 5 seconds
    When I click on new internal tag
    When I click on new tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I enter tag name "InternalTagMISO"
    Then I take a screenshot
    When I save tag
    When I navigate to "http://localhost:2368/ghost/#/tags"
    Then I take a screenshot
    And I wait for 5 seconds
    Then I found new tag created "InternalTagMISO"
    

