describe('Tag Flow', () => {
    it('Tags', () => {
      cy.visit('http://localhost:2368/ghost/')
      login();
      createNewTag()
      createNewTagInvalidColor()
      createNewTagInvalidDescription()
      createInternalTag()
    })
  })

  function login() {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', {force: true});

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', {force: true});

    cy.wait(1000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({force: true});
    cy.wait(5000);
  }

  function createNewTag(){ 
    cy.visit('http://localhost:2368/ghost/#/tags');
    const button = cy.get('a[href="#/tags/new/"]');
    button.click();
    const tagName = cy.get('#tag-name');
    tagName.type(makeDescription(10));
    const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
    saveButton.click()
    cy.visit('http://localhost:2368/ghost/#/tags');
  }

  function createNewTagInvalidColor(){ 
    cy.visit('http://localhost:2368/ghost/#/tags');
    const button = cy.get('a[href="#/tags/new/"]');
    button.click();
    const tagName = cy.get('#tag-name');
    tagName.type('Cypress tag invalido');
    const color = cy.get('input[placeholder=15171A]')
    color.type('12345')
    const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
    saveButton.click();
    const colorError = cy.get('input[placeholder=15171A]')
    colorError.should('have.css', 'border-color', 'rgb(245, 11, 35)')
  }

  function createNewTagInvalidDescription(){ 
    cy.visit('http://localhost:2368/ghost/#/tags');
    const button = cy.get('a[href="#/tags/new/"]');
    button.click();
    const tagName = cy.get('#tag-name');
    const tagDescription = cy.get('#tag-description');
    tagDescription.type(makeDescription(501))
    const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
    saveButton.click()
    const tagDescriptionWithError = cy.get('#tag-description');
    tagDescriptionWithError.should('have.css', 'border-color', 'rgb(245, 11, 35)')
  }

  function createInternalTag() {
    cy.visit('http://localhost:2368/ghost/#/tags?type=internal');
    const button = cy.get('a[href="#/tags/new/"]');
    button.click();
    const tagName = cy.get('#tag-name');
    const internalName = 'internal ' + makeDescription(10);
    tagName.type(internalName);
    const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
    saveButton.click()
    cy.visit('http://localhost:2368/ghost/#/tags');
    const tagList = cy.get('.tags-list.gh-list').children('li');
    
  }

  function makeDescription(n) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < n; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


  