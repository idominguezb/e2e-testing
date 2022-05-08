Feature: Integración

@user1 @web
Scenario: Crear integración
    Given I navigate to page "http://localhost:2380/ghost/#/signin"
    And I wait for 1 seconds
    When I set value for "username" in "[name='identification']" to "<USER>"
    And I set value for "password" in "[name='password']" to "<PASSWORD>"
    And I click "login" in ".js-login-button"
    And I wait for 2 seconds    
    Given I navigate to page "http://localhost:2380/ghost/#/settings/integrations"
    And I wait for 1 seconds    
    And I click "add integration" in ".gh-main-section:last-child > div:last-child a" 
    And I wait for 1 seconds    
    And I set value for "integration name" in "#new-integration-name" to "test"
    And I click "create integration" in ".modal-footer button:last-child" 
    And I wait for 2 seconds    
    Given I navigate to page "http://localhost:2380/ghost/#/settings/integrations"
    And I wait for 2 seconds    
    And I validate "integration name" "test" ".gh-main-section:last-child .apps-grid .apps-grid-cell:last-child .apps-card-app-title"

@user2 @web
Scenario: Crear webhook
    Given I navigate to page "http://localhost:2380/ghost/#/signin"
    And I wait for 1 seconds
    When I set value for "username" in "[name='identification']" to "<USER>"
    And I set value for "password" in "[name='password']" to "<PASSWORD>"
    And I click "login" in ".js-login-button"
    And I wait for 10 seconds    
    Given I navigate to page "http://localhost:2380/ghost/#/settings/integrations"
    And I click "existing integration" in "//html/body/div[2]/div/main/section/section[2]/div[1]/div[1]/a" 
    And I wait for 1 seconds    
    And I click "add webhook" in ".gh-canvas > .gh-main-section:first-of-type a"
    And I wait for 3 seconds    
    And I set value for "webhook name" in "#webhook-name" to "tests"
    And I set value for "webhook event" in "#webhook-event" to "post.published"
    And I set value for "webhook url" in "#webhook-targetUrl" to "https://test.com"
    And I click "create webhook" in ".modal-footer button:last-child" 
    And I wait for 2 seconds    
    And I validate "webhook created name" "tests" "//html/body/div[2]/div/main/section/section[1]/div/table/tbody/tr[last()]/td"

@user3 @web
Scenario: Editar integración
    Given I navigate to page "http://localhost:2380/ghost/#/signin"
    And I wait for 1 seconds
    When I set value for "username" in "[name='identification']" to "<USER>"
    And I set value for "password" in "[name='password']" to "<PASSWORD>"
    And I click "login" in ".js-login-button"
    And I wait for 14 seconds    
    Given I navigate to page "http://localhost:2380/ghost/#/settings/integrations"
    And I click "existing integration" in "//html/body/div[2]/div/main/section/section[2]/div[1]/div[1]/a" 
    And I wait for 3 seconds    
    And I set value for "integration name" in "#integration_name" to "pruebas"
    And I click "save integration" in ".gh-canvas-header-content button"
    And I wait for 3 seconds    
    Given I navigate to page "http://localhost:2380/ghost/#/settings/integrations"
    And I validate "integration name" "pruebas" ".gh-main-section:last-child .apps-grid .apps-grid-cell:first-child .apps-card-app-title"

@user4 @web
Scenario: Eliminar integración
    Given I navigate to page "http://localhost:2380/ghost/#/signin"
    And I wait for 1 seconds
    When I set value for "username" in "[name='identification']" to "<USER>"
    And I set value for "password" in "[name='password']" to "<PASSWORD>"
    And I click "login" in ".js-login-button"
    And I wait for 25 seconds    
    Given I navigate to page "http://localhost:2380/ghost/#/settings/integrations"
    And I click "existing integration" in "//html/body/div[2]/div/main/section/section[2]/div[1]/div[1]/a" 
    And I wait for 3 seconds    
    And I click "delete integration" in ".gh-main-section:last-child > div:last-child button"
    And I wait for 1 seconds    
    And I click "confirm delete integration" in ".modal-footer button:last-child" 
    
