describe('Integration Flow', () => {
    it('Integration', () => {
        cy.visit('http://localhost:3001/ghost/');
        login();
        createIntegration('test');
    });
});
const ruta="scenario_createIntegration/"
function login() {
    cy.get('#ember8').type('prueba@example.com', { force: true });
    cy.get('#ember10').type('prueba@example.com123456789', { force: true });
    cy.wait(1000);

    cy.screenshot(ruta+'step1',{overwrite:true,capture:'fullPage'});
    cy.get('#ember12').click({ force: true });
    cy.wait(1000);
}

function goToIntegrationsPage() {
    cy.visit('/ghost/#/settings/integrations');
}

function createIntegration(name) {
    goToIntegrationsPage();

    // Add integration
    cy.visit('/ghost/#/settings/integrations/new');

    // Set integration name
    cy.get('#new-integration-name').type(name);
    cy.screenshot(ruta+'step2', {overwrite: true, capture: 'fullPage'});

    // Create integration
    cy.get('.modal-footer button:last-child').click();
    cy.wait(2000);
    cy.screenshot(ruta+'step3', {overwrite: true, capture: 'fullPage'});

    goToIntegrationsPage();
    cy.screenshot(ruta+'step4', {overwrite: true, capture: 'fullPage'});
}
