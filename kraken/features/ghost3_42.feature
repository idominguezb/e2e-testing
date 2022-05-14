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
  Scenario: Creación exitosa de un post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    And I wait for 5 seconds
    And I click log in
    And I wait for 5 seconds
    And I new post click
    And I wait for 2 seconds
    And I write the title of my post: 'This is my first my post !!!'
    And I wait for 2 seconds
    And I write a short text
    And I wait for 5 seconds
    And I click dropdown
    And I wait for 5 seconds
    And I click publish
    And I wait for 8 seconds
    And I click confirm
    And I wait for 5 seconds
    And I back to lists post
    And I wait for 5 seconds
    Then I validate the title of post 2
    And I wait for 5 seconds

 


