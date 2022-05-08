Feature: Crear pagina

@user5 @web
Scenario: Crear una pagina
Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    When I click on button with id 'ember11'
    When I go to pages section
    And I wait for 3 seconds
    When I click on new page
    When I type the tittle 'New page'
    When I type the description
    And I wait for 2 seconds
    When I Click on publish
    And I wait for 1 seconds
    When I Click on publish again
    And I wait for 1 seconds
    When I go back to pages section
    When I click on all pages 'published'
    When I click on public
    And I wait for 2 seconds
    Then I check the first row with tittle 'New page'
    Then I send a signal to user 2 containing "scenario1 complete"


@user6 @web
Scenario: Crear una pagina programada
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    When I click on button with id 'ember11'
    And I wait for a signal containing "scenario1 complete" for 3600 seconds
    When I go to pages section
    And I wait for 5 seconds
    When I click on new page
    When I type the tittle 'Page scheduled'
    When I type the description
    And I wait for 2 seconds
    When I Click on publish
    And I wait for 5 seconds
    When I Click on schedule for later
    And I wait for 3 seconds
    When I Click on publish again
    And I wait for 5 seconds
    When I go back to pages section
    And I wait for 5 seconds
    When I click on all pages 'scheduled'
    Then I check the first row with tittle 'Page scheduled'
    Then I send a signal to user 3 containing "scenario2 complete"

@user7 @web
Scenario: Crear una pagina usando un draft
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    When I click on button with id 'ember11'
    And I wait for a signal containing "scenario2 complete" for 3600 seconds
    When I go to pages section
    And I wait for 5 seconds
    When I click on new page
    When I type the tittle 'draft page'
    When I type the description
    And I wait for 5 seconds
    When I go back to pages section
    When I click on all pages 'drafts'
    Then I check the first row with tittle 'draft page'
    When I click on the draft page to publish it
    When I click on settings page
    When I change visibility and publish it
    And I wait for 3 seconds 
    When I go back to pages section
    And I wait for 3 seconds
    When I click on all pages 'published'
    And I wait for 3 seconds
    When I click on paidmember-only
    And I wait for 3 seconds
    Then I check the first row with tittle 'draft page'
    Then I send a signal to user 4 containing "scenario3 complete"

@user8 @web
Scenario: Crear pagina con titulo extenso
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    When I click on button with id 'ember11'
    And I wait for a signal containing "scenario3 complete" for 3600 seconds
    When I go to pages section
    And I wait for 6 seconds
    When I click on new page
    When I type the tittle 'Tituloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    When I type the description
    And I wait for 2 seconds
    When I Click on publish
    And I wait for 5 seconds
    When I Click on publish again
    And I wait for 2 seconds
    When I go back to pages section
    When I click on all pages "published"
    And I wait for 5 seconds
    When I click on public
    Then I check the width of the page tittle
        
    
