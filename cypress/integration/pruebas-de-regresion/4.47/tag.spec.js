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
  cy.get('#ember7').type('prueba@example.com', { force: true });
  cy.get('#ember9').type('prueba@example.com123456789', { force: true });
  cy.wait(1000);
  const signin = cy.get('#ember11');
  signin.click()
  cy.wait(5000);
  cy.screenshot()
}


function createNewTag(){ 
  cy.visit('http://localhost:2368/ghost/#/tags');  cy.wait(2000)
  cy.contains('New tag').click();

  
  const tagName = cy.get('#tag-name');
  tagName.type(makeDescription(10));
  const saveButton = cy.contains('Save');
  saveButton.click()
  cy.wait(1000)
  cy.visit('http://localhost:2368/ghost/#/tags');
  cy.screenshot()
}

function createNewTagInvalidColor(){ 
  cy.visit('http://localhost:2368/ghost/#/tags');
  cy.wait(2000)
  const button = cy.get('a[href="#/tags/new/"]');
  button.click();
  cy.screenshot()
  const tagName = cy.get('#tag-name');
  tagName.type('Cypress tag invalido');
  cy.screenshot()
  const color = cy.get('input[placeholder=15171A]')
  color.type('12345')
  const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
  saveButton.click();
  cy.screenshot()
  const colorError = cy.get('input[placeholder=15171A]');
  colorError.should('have.css', 'border-color', 'rgb(245, 11, 35)')
  cy.visit("http://localhost:2368/ghost/")
}

function createNewTagInvalidDescription(){ 
  cy.visit('http://localhost:2368/ghost/#/tags');
  cy.wait(2000)
  const button = cy.get('a[href="#/tags/new/"]');
  button.click();
  const tagName = cy.get('#tag-name');
   cy.get('#tag-description').type(makeDescription(501));
  cy.screenshot()

  cy.screenshot()
  const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
  saveButton.click()
  const tagDescriptionWithError = cy.get('#tag-description');
  tagDescriptionWithError.should('have.css', 'border-color', 'rgb(245, 11, 35)')
  cy.visit("http://localhost:2368/ghost/")
  cy.screenshot()
}

function createInternalTag() {
  cy.visit('http://localhost:2368/ghost/#/tags?type=internal');
  cy.wait(2000)
  cy.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]').click()

  cy.wait(2000);
  const tagName = cy.get('#tag-name');
  const internalName = 'internal ' + makeDescription(10);
  tagName.type(internalName);
  cy.screenshot()
  const saveButton = cy.get('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main:nth-of-type(1) > section:nth-of-type(1) > form:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > section:nth-of-type(1) > button:nth-of-type(1) > span:nth-of-type(1)');
  saveButton.click()
  cy.screenshot()
  cy.visit('http://localhost:2368/ghost/#/tags?type=internal');
  cy.wait(2000)
  cy.screenshot()  
}

function makeDescription(n) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < n; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
