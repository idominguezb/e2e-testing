Feature: Creación de un post

 @user2 @web
  Scenario: Creación exitosa de un post
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
    And I click log in
    And I wait for 5 seconds
    Then I take a screenshot
    And I new post click
    Then I take a screenshot
    And I wait for 2 seconds
    And I write the title of my post: 'This is my first my post !!!'
    And I wait for 2 seconds
    And I write a short text
    And I wait for 5 seconds
    Then I take a screenshot
    And I click dropdown
    Then I take a screenshot
    And I wait for 5 seconds
    And I click publish
    And I wait for 8 seconds
    And I click confirm
    Then I take a screenshot
    And I wait for 5 seconds
    And I back to lists post
    And I wait for 5 seconds
    Then I validate the title of post 3
    And I wait for 5 seconds
     Then I take a screenshot

@user4 @web
  Scenario: Creación exitosa de un post programada
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
    And I click log in
    And I wait for 5 seconds
    Then I take a screenshot
    And I new post click
    And I wait for 5 seconds
    Then I take a screenshot
    And I write the title of my post: 'This is my first my post programmed !!!'
    And I wait for 5 seconds
    And I write a short text
    And I wait for 5 seconds
    Then I take a screenshot
    And I click dropdown
     Then I take a screenshot
    And I wait for 5 seconds
    And I click publish program
     Then I take a screenshot
    And I wait for 5 seconds
    And I click confirm
    And I wait for 5 seconds
    And I back to lists post
     Then I take a screenshot
    And I wait for 5 seconds
    Then I validate the title of post 4
     Then I take a screenshot
    And I wait for 5 seconds

  @user3 @web
  Scenario: Intento de creación de un post con titulo superior de 255 caracteres.
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
    And I click log in
    And I wait for 5 seconds
    
    And I new post click
    And I wait for 5 seconds
    And I write the title of my post: 'Validation !!!'
    And I wait for 5 seconds
    And I write a short text
    Then I take a screenshot
    And I wait for 5 seconds

    And I write the title with length 256
    Then I take a screenshot
    And I wait for 5 seconds
    And I click dropdown
    And I wait for 5 seconds
    And I click publish program
    And I wait for 5 seconds
    Then I take a screenshot
    And I click confirm
    And I wait for 5 seconds
    Then I take a screenshot
    Then I wait message error

  @user4 @web
  Scenario: Validación POST URL diferente para post con el mismo titulo.
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
    And I click log in
    Then I take a screenshot
    And I wait for 5 seconds
    And I new post click
    Then I take a screenshot
    And I wait for 2 seconds
    And I write the title of my post: 'This is my post for scenario !!!'
    Then I take a screenshot
    And I wait for 2 seconds
    And I write a short text
    And I wait for 2 seconds
    And I click tool
    Then I take a screenshot
    And I wait for 2 seconds
    And I search
    And I wait for 2 seconds
    And I click dropdown
    Then I take a screenshot
    And I wait for 2 seconds
    And I click publish
    Then I take a screenshot
    And I wait for 3 seconds
    And I click confirm
    And I wait for 3 seconds
    And I back to lists post
    And I wait for 5 seconds
    And I validate the title of post 3
    Then I take a screenshot
    And I wait for 2 seconds
    And I click in post
    And I wait for 2 seconds
    And I click tool
    And I wait for 5 seconds
    Then I take a screenshot
    Then I validate URL post

