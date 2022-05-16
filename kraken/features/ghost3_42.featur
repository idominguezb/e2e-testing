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
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 5 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
    When I click on button with id 'ember12'
  
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
    Then I take a screenshot
    And I wait for 5 seconds
    And I back to lists post
    And I wait for 5 seconds
    Then I validate the title of post 3
    And I wait for 5 seconds
     Then I take a screenshot

  @user7 @web
  Scenario: Creación exitosa de un Tag
    Given I navigate to "http://localhost:3001/ghost"
    And I wait for 5 seconds
    And I click view with selector "#ember8"
    When I enter text "<USER>"
    And I wait for 5 seconds
    And I click view with selector "#ember10"
    When I enter password "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
    And I click view with selector "#ember12"
    And I wait for 5 seconds
    When I navigate to "http://localhost:3001/ghost/#/tags"
    Then I take a screenshot
    And I wait for 5 seconds
    When I click on new tag
    Then I take a screenshot
    And I wait for 5 seconds
    When I enter tag name "MISO1"
    Then I take a screenshot
    When I save tag
    When I navigate to "http://localhost:3001/ghost/#/tags"
    And I wait for 5 seconds
    Then I found new tag created "MISO1"
    Then I take a screenshot

  @user8 @web
  Scenario: Crear integración
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
    And I wait for 5 seconds
    When I set value for "username" in "[name='identification']" to "<USER>"
    And I set value for "password" in "[name='password']" to "<PASSWORD>"
    Then I take a screenshot
    And I click "login" in ".login"
    And I wait for 2 seconds    
    Given I navigate to page "http://localhost:3001/ghost/#/settings/integrations/new"
    And I wait for 1 seconds    
    And I set value for "integration name" in "#new-integration-name" to "test"
    Then I take a screenshot
    And I click "create integration" in ".modal-footer button:last-child" 
    And I wait for 2 seconds    
    Given I navigate to page "http://localhost:3001/ghost/#/settings/integrations"
    And I wait for 2 seconds    
    Then I take a screenshot


    

  @user10 @web
  Scenario: Creación exitosa de un post programada
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 5 seconds
    When I enter email "<USER>" and pass "<PASSWORD>"
    Then I take a screenshot
    And I wait for 5 seconds
  When I click on button with id 'ember12'
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
 
    And I back to lists post
     Then I take a screenshot
    And I wait for 5 seconds
    Then I validate the title of post 4
     Then I take a screenshot
    And I wait for 5 seconds
 


  
 
