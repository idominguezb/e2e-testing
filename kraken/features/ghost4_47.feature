Feature: Ghost 4.47

  @user1 @web
  Scenario:Create page
    Given I navigate to "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    Then I take a screenshot
    When I click on button with id 'ember11'
    And I wait for 5 seconds
    Then I take a screenshot
    When I go to pages section
    And I wait for 3 seconds
    Then I take a screenshot
    When I click on new page
    Then I take a screenshot
    When I type the tittle 'New page'
    When I type the description
    And I wait for 4 seconds
    When I Click on publish
    And I wait for 1 seconds
    When I Click on publish again
    And I wait for 1 seconds
    Then I take a screenshot
    And I wait for 2 seconds
    When I go back to pages section
    Then I take a screenshot
    When I click on all pages 'published'
    When I click on public
    And I wait for 2 seconds
    Then I take a screenshot
    Then I check the first row with tittle 'New page'

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


  @user3 @web
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


  @user5 @web
  Scenario: Crear integración
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I set value for "username" in "[name='identification']" to "<USER>"
    And I set value for "password" in "[name='password']" to "<PASSWORD>"
    Then I take a screenshot
    And I click "login" in ".js-login-button"
    And I wait for 2 seconds    
    Given I navigate to page "http://localhost:2368/ghost/#/settings/integrations"
    And I click "add integration" in ".gh-main-section:last-child > div:last-child a" 
    And I wait for 1 seconds    
    And I set value for "integration name" in "#new-integration-name" to "random"
    Then I take a screenshot
    And I click "create integration" in ".modal-footer button:last-child" 
    Then I take a screenshot
    And I wait for 2 seconds    
    Given I navigate to page "http://localhost:2368/ghost/#/settings/integrations"
    And I wait for 2 seconds 
    Then I take a screenshot   
    And I validate "integration name" "random" ".gh-main-section:last-child .apps-grid .apps-grid-cell:last-child .apps-card-app-title"

  