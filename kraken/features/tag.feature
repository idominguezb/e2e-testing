Feature: Multiple site support
  Only blog owners can post to a blog, except administrators,
  who can post to all blogs.

  @user1 @web
  Scenario: Create Tag
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    And I wait for 5 seconds
    When I enter tag name "MISO1"
    When I save tag
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    Then I found new tag created "MISO1"

  @user2 @web
  Scenario: Create tag invalido
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 7 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    When I input invalid color "12345"

  @user3 @web
  Scenario: Create tag con description invalida
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 10 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new tag
    When I enter tag name "MISO2"
    Then I input invalid description
    
  @user4 @web
  Scenario: Create Internal Tag
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 15 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    When I click on new internal tag
    When I click on new tag
    And I wait for 5 seconds
    When I enter tag name "InternalTagMISO"
    When I save tag
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 5 seconds
    Then I found new tag created "InternalTagMISO"

  @user5 @web
  Scenario: Create Internal Tag
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 25 seconds
    When I enter email "<USER>" for tag
    And I wait for 5 seconds
    When I enter password "<PASSWORD>" for tag
    And I wait for 5 seconds
    When I click next for tag
    And I wait for 5 seconds
    When I click on button "/members/"
    When I click on button "/members/new/"
    When I fill data
    When I save tag
    And I wait for 5 seconds
    When I click on button "/members/"




