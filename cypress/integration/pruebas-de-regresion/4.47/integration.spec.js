const { faker } = require('@faker-js/faker');

describe('Integration Flow', () => {
    it('Integration', () => {
        cy.visit('http://localhost:2368/ghost/');
        login();
        createIntegration('test');
        createIntegrationWebhook();
        editIntegration();
        deleteIntegration();
    });
});

function login() {
    cy.get("[name='identification']").type('prueba@example.com', { force: true });
    cy.get("[name='password']").type('prueba@example.com123456789', {
        force: true,
    });
    cy.wait(1000);

    cy.get('.js-login-button').click({ force: true });
    cy.wait(5000);
    cy.screenshot()
}

function goToIntegrationsPage() {
    cy.visit('http://localhost:2368/ghost/#/settings/integrations');
}

function clickOnExistingIntegration() {
    const existingIntegration = cy.xpath(
        '//html/body/div[2]/div/main/section/section[2]/div[1]/div[last()]/a'
    );
    existingIntegration.click();
}

function createIntegration(name) {
    goToIntegrationsPage();

    // Add integration
    cy.get('.gh-main-section:last-child > div:last-child a').click();

    // Set integration name
    cy.get('#new-integration-name').type(name);

    // Create integration
    cy.get('.modal-footer button:last-child').click();
    cy.wait(3000);
}

function createIntegrationWebhook() {
    goToIntegrationsPage();
    clickOnExistingIntegration();

    // Add integration
    cy.get('.gh-canvas > .gh-main-section:first-of-type a').click();
    cy.wait(1000);

    // Set webhook settings
    cy.get('#webhook-name').type('tests');
    cy.wait(1000);
    cy.get('#webhook-event')
        .select('post.published')
        .should('have.value', 'post.published');

    cy.wait(1000);
    cy.get('#webhook-targetUrl').type(faker.internet.email());

    // Create webhook
    cy.get('.modal-footer button:last-child').click();
    cy.wait(2000);
}

function editIntegration() {
    goToIntegrationsPage();
    clickOnExistingIntegration();
    cy.wait(3000);

    // Change integration name
    cy.get('#integration_name').type('pruebas');
    cy.wait(2000);

    // Save Integration
    cy.get('.gh-canvas-header-content button').click();
    cy.wait(2000);
}

function deleteIntegration() {
    goToIntegrationsPage();
    createIntegration('Eliminar');
    goToIntegrationsPage();
    clickOnExistingIntegration();
    cy.wait(1000);

    // Delete Integration
    cy.get('.gh-main-section:last-child > div:last-child button').click();
    cy.wait(1000);

    // Confirm delete integration
    cy.get('.modal-footer button:last-child').click();
    cy.wait(5000);
}
