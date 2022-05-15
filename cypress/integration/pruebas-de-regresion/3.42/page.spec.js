describe("Page Flow", function () {
    it("Page", function () {
      cy.visit("http://localhost:3001/ghost/");
      cy.viewport(1280,720)
      cy.wait(1000);  
     
      crear_pagina("New page");
     
    });
  });

  const ruta="/scenario_createPage"
function logIn(i) {
 
    cy.get('#ember8').type('prueba@example.com', { force: true });
    cy.get('#ember10').type('prueba@example.com123456789', { force: true });
    cy.wait(1000);
    cy.screenshot(ruta+"/step1",{overwrite: true, capture: 'fullPage'})
    cy.get('#ember12').click({ force: true });
    cy.wait(5000);
    cy.screenshot(ruta+"/step"+i,{overwrite: true, capture: 'fullPage'})


}

function crear_pagina(titulo) {
    let i=2;
    logIn(i.toString());
    i+=1;
    // IR a la seccion de pages

    cy.wait(1000);
    // Click en el boton de page
    cy.xpath("/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[3]/a").click()
    cy.wait(2000);
    cy.screenshot(ruta+"/step"+i,{overwrite: true, capture: 'fullPage'})
    i+=1;
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a/span").click()
    cy.screenshot(ruta+"/step"+i,{overwrite: true, capture: 'fullPage'})
    cy.wait(1000)
    tituloYDescricpion(titulo)
    i+=1;
    publicarPagina(i.toString())
    i+=1
    cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
    i+=1
    cy.xpath("/html/body/div[2]/div/main/section/header/section/div/div[1]/div[1]/span").click()
    cy.wait(1000)
     cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
     i+=1
    cy.xpath("/html/body/div[1]/div/ul/li[3]").click()
    cy.wait(1000)
    cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
    verificarTitulo(titulo)
    
   
  }


  function verificarTitulo(titulo){
    cy.xpath("/html/body/div[2]/div/main/section/section/ol/li[2]/a[2]/h3").invoke("text")
    .then((text) => {
  
      if (text.includes(titulo)){ cy.log("Prueba de " + titulo + " Fue exitosa");}
      else{ cy.log("Prueba de " + titulo + " Fallo");}
    });
  }
  function publicarPagina(i) {
    // Click en publish
    cy.xpath("/html/body/div[2]/div/main/section/header/section/div/div[1]/span").click();
     cy.screenshot(ruta+"/step"+i,{overwrite: true, capture: 'fullPage'})
    cy.xpath("/html/body/div[1]/div/footer/button[2]/span").click();
  
    cy.wait(2000);
    // Volver a la seccion de pages
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/div/div[1]/a"
    ).click();
    cy.wait(2000);
  }
  function tituloYDescricpion(titulo) {
    let elementTitulo = cy.xpath(
      "/html/body/div[2]/div/main/section/div[1]/div[1]/textarea"
    );
    elementTitulo.type(titulo);
    let elementDescription = cy.xpath(
      "/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div[1]"
    );
  
    elementDescription.type("Descripcion");
    cy.wait(1000);
  }