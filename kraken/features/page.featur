Feature: Crear pagina v4.47

@user5 @web
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
    And I wait for 2 seconds
    When I Click on publish
    And I wait for 1 seconds
    When I Click on publish again
    And I wait for 1 seconds
    Then I take a screenshot
    When I go back to pages section
    When I click on all pages 'published'
    When I click on public
    And I wait for 2 seconds
    Then I take a screenshot
    Then I check the first row with tittle 'New page'
    


@user6 @web
Scenario:Create scheduled page
    Given I navigate to "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    Then I take a screenshot
    When I click on button with id 'ember11'
    And I wait for 5 seconds
    Then I take a screenshot
    When I go to pages section
    And I wait for 5 seconds
    Then I take a screenshot
    When I click on new page
    When I type the tittle 'Page scheduled'
    When I type the description
    And I wait for 2 seconds
    When I Click on publish
    Then I take a screenshot
    And I wait for 5 seconds
    When I Click on schedule for later
    And I wait for 3 seconds
    When I Click on publish again
    And I wait for 5 seconds
    When I go back to pages section
    And I wait for 5 seconds
    When I click on all pages 'scheduled'
    And I wait for 2 seconds
    Then I take a screenshot
    Then I check the first row with tittle 'Page scheduled'

@user7 @web
Scenario: Create page draft
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    Then I take a screenshot
    When I click on button with id 'ember11'
    And I wait for 5 seconds
    Then I take a screenshot
    When I go to pages section
    Then I take a screenshot
    And I wait for 5 seconds
    When I click on new page
    Then I take a screenshot
    When I type the tittle 'draft page'
    When I type the description
    And I wait for 5 seconds
    When I go back to pages section
    And I wait for 3 seconds
    When I click on all pages 'drafts'
    Then I take a screenshot
    Then I check the first row with tittle 'draft page'
    When I click on the draft page to publish it
    When I click on settings page
    Then I take a screenshot
    When I change visibility and publish it
    And I wait for 3 seconds 
    When I go back to pages section
    And I wait for 3 seconds
    When I click on all pages 'published'
    And I wait for 3 seconds
    When I click on paidmember-only
    And I wait for 3 seconds
    Then I take a screenshot
    Then I check the first row with tittle 'draft page'

@user8 @web
Scenario: Create long name
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USER>"
    When I enter password "<PASSWORD>"
    When I click on button with id 'ember11'
    Then I take a screenshot
    And I wait for 5 seconds
    Then I take a screenshot
    When I go to pages section
    And I wait for 6 seconds
    Then I take a screenshot
    When I click on new page
    When I type the tittle 'Tituloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    When I type the description
    And I wait for 2 seconds
    When I Click on publish
    Then I take a screenshot
    And I wait for 5 seconds
    When I Click on publish again
    And I wait for 2 seconds
    When I go back to pages section
    When I click on all pages "published"
    And I wait for 5 seconds
    When I click on public
    Then I take a screenshot
    Then I check the width of the page tittle
        