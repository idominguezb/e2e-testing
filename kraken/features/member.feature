Feature: Miembros
      @user16 @web
      Scenario: Crear una miembro con email invalido
        Given I navigate to page "http://localhost:2368/ghost/"
        And I wait for 2 seconds
        When I enter email "<USER>"
        When I enter password "<PASSWORD>"
        When I click on button with id 'ember11'
        And I wait for 5 seconds
        When I go to members section
        When I click on new members
        And I wait for 3 seconds
        When I fill the fields but with an invalid email
        And I wait for 3 seconds
        When I click on save member
        Then I should see an error with the invalid email
