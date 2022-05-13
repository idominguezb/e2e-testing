Feature: Ghost 3.44

  @user1 @web
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



