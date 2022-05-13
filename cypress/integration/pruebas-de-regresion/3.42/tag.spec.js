describe.only('Tag Flow', () => {
    it.only('Tags', () => {
      cy.visit('http://localhost:2368/ghost/')
      login();
      createNewTag()
    })
  })

  function login() {
    cy.get('#ember8').type('j.millana@uniandes.edu.co', { force: true });
    cy.get('#ember10').type('desarrollo', { force: true });
    cy.wait(1000);

    cy.get('#ember12').click({ force: true });
    cy.wait(5000);
    cy.screenshot()
}


  function createNewTag(){ 
    cy.visit('http://localhost:2368/ghost/#/tags');  cy.wait(2000)
    cy.xpath("//span[normalize-space()='New tag']").click();
  
    
    const tagName = cy.get('#tag-name');
    const description = makeDescription(10);
    tagName.type(description);
    cy.screenshot();
    const saveButton = cy.contains('Save')
    saveButton.click()
    cy.screenshot();
    cy.wait(1000)
    cy.visit('http://localhost:2368/ghost/#/tags');
    cy.contains('ol', description)
    cy.screenshot();
  }

  function makeDescription(n) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < n; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


  