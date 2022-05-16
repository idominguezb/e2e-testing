
 const {faker}= require('@faker-js/faker');

describe("Members Flow", function () {
  it("Members", function () {
    cy.visit("http://localhost:2368/ghost/");
    login();
    createMember();
    createMemberWithInvalidEmail();
    createMemberWithMoreThan500CharInDescription();
    scenario_five();
    cy.wait(1000);
  });
});
function login() {
    cy.get("#ember7").type("prueba@example.com", { force: true });
    cy.get("#ember9").type("prueba@example.com123456789", { force: true });
    cy.wait(1000);
    cy.screenshot();
    cy.get("#ember11").click({ force: true });
    cy.wait(5000);
  }
function createMember(){
    cy.visit("http://localhost:2368/ghost/#/members/new");
    cy.screenshot();
    cy.wait(2000)
    cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"
      ).type("Hector Urrego", { force: true });
    
      cy.wait(1000);
    
      // Field email
      cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]"
      ).type(faker.internet.email(), { force: true });
    
      cy.wait(1000);
      cy.screenshot();
      // Click button save
      cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]"
      ).click({ force: true });
      
      cy.wait(1000);  
      cy.screenshot();
      cy.visit("http://localhost:2368/ghost/");
}

function createMemberWithInvalidEmail() {
  cy.visit("http://localhost:2368/ghost/#/members/new");
  cy.screenshot();
  //Set members values with invalid email
  cy.xpath("//input[@id='member-name']").type("nombre", { force: true });
  cy.xpath("//input[@id='member-email']").type("email", { force: true });
  cy.screenshot();
  cy.wait(2000);
  cy.xpath("//span[normalize-space()='Save']").click();
  cy.wait(2000);
  cy.screenshot();
  cy.xpath("//p[normalize-space()='Invalid Email.']").invoke("text").then((elem) => {
     
    expect(elem.includes("Invalid")).to.equal(true);
  });
  cy.screenshot();
  cy.visit("http://localhost:2368/ghost/");
}

function scenario_five() {
    cy.visit("http://localhost:2368/ghost/#/members/new");
    cy.screenshot();
 
  // Field name
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"
  ).type("Hector Urrego", { force: true });
  cy.screenshot();
  cy.wait(1000);
  let email=faker.internet.email()
  // Field email
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]"
  ).type(email, { force: true });
  cy.screenshot();
  cy.wait(1000);

  // Click button save
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]"
  ).click({ force: true });

  cy.wait(1000);

  // Return List Members
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/h2[1]/a[1]"
  ).click({ force: true });
  cy.screenshot();
  cy.wait(1000);

  //Search email hector_urrego@example.com
  cy.get("tbody tr").then(($item) => {
    cy.log("LONG: " + $item.get().length);
    for (let i = 1; i <= $item.length; i++) {
      cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[" +
          i +
          "]/a[1]/div[1]/div[1]/p[1]"
      )
        .invoke("text")
        .then((text) => {
          if (text === email) {
            cy.xpath(
              "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[" +
                i +
                "]/a[1]/div[1]/div[1]/p[1]"
            ).click({ force: true });
            cy.wait(1000);
            cy.screenshot();
            cy.xpath(
              "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()='svg'][1]"
            ).click({ force: true });
            cy.wait(1000);

            cy.xpath(
              "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/ul[1]/li[2]/button[1]/span[1]"
            ).click({ force: true });
            
            cy.screenshot();
            cy.xpath(
              "/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]"
            ).click({ force: true });
            cy.wait(5000);
          }
        });
      break;
    }
  });


}

function createMemberWithMoreThan500CharInDescription() {
  cy.visit("http://localhost:2368/ghost/#/members/new");
  cy.wait(3000);

  // Set member values
  cy.get("#member-name").type("Juan", { force: true });
  cy.get("#member-email").type("test@gmail.com", { force: true });
  cy.screenshot();
  cy.get("#member-note").type(
    "dsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdas",
    { force: true }
  );

  // Create member
  cy.get(".view-actions button").click();

  cy.wait(1000);
  cy.get(".view-actions button span").should((elem) => {
    expect(elem.text()).to.equal(" Retry");
  });
  cy.screenshot();
  cy.visit("http://localhost:2368/ghost/");
}

