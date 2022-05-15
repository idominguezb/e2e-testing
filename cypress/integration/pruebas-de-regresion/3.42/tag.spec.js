describe.only('Tag Flow', () => {
    it.only('Tags', () => {
      cy.visit('http://localhost:3001/ghost/')
      login();
      createNewTag()
    })
  })
  const ruta="/scenario_CreateTag"
  function login() {
    cy.get('#ember8').type('prueba@example.com', { force: true });
    cy.get('#ember10').type('prueba@example.com123456789', { force: true });
    cy.wait(1000);
    cy.screenshot(ruta+"/step1",{overwrite: true, capture: 'fullPage'})
    cy.get('#ember12').click({ force: true });
    cy.wait(5000);
   
}


  function createNewTag(){ 
    cy.visit('http://localhost:3001/ghost/#/tags');  cy.wait(2000)
    cy.xpath("//span[normalize-space()='New tag']").click();
  
    
    const tagName = cy.get('#tag-name');
    const description = makeDescription(10);
    tagName.type(description);
    cy.screenshot(ruta+"/step2",{overwrite: true, capture: 'fullPage'});
    const saveButton = cy.contains('Save')
    saveButton.click()
    cy.screenshot(ruta+"/step3",{overwrite: true, capture: 'fullPage'});
    cy.wait(1000)
    cy.visit('http://localhost:3001/ghost/#/tags');
    cy.contains('ol', description)
    cy.screenshot(ruta+"/step4",{overwrite: true, capture: 'fullPage'});
  }

  function makeDescription(n) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < n; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


  