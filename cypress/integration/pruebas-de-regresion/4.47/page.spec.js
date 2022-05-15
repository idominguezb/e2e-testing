describe("Page Flow", function () {
  it("Page", function () {
    cy.visit("http://localhost:2368/ghost/");
  
    cy.viewport(1920, 1080)
    cy.wait(1000);
    crear_pagina("New page","/scenario_createPage");
    
  });
});

function logIn(i,ruta) {
  
    
    cy.get("#ember7").type("prueba@example.com", { force: true });
    cy.get("#ember9").type("prueba@example.com123456789", { force: true });
    cy.wait(1000);
    cy.screenshot(ruta+"/step"+i,{overwrite: true, capture: 'fullPage'})
    cy.get('#ember11').click({ force: true });
    cy.wait(5000);
    


}

function crear_pagina(titulo,ruta) {
  let i=1;
  logIn(i.toString(),ruta);
  i+=1
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  // IR a la seccion de pages
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
 
  cy.wait(1000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  // Click en el boton de page
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1 
  //llenar los campos
  tituloYDescricpion(titulo);
  publicarPagina(i.toString(),ruta);
  i+=1
  // Ver las paginas publicadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]"
  ).click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1 
  cy.wait(1000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]").click();
  cy.wait(2000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1 
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[2]").click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1 
  verificarTitulo(titulo);
  cy.wait(1000);
  exit();
}

function crear_pagina_programada(titulo,ruta) {
  let i=1;
  logIn(i.toString(),ruta);
  i+=1
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  cy.wait(3000);

  // Ir a la seccion de pages
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
  
  cy.wait(1000);
  
  // Click en el boton de page
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });

  tituloYDescricpion(titulo);
  cy.wait(2000);
  // Click en publish
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]"
  ).click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  //Click en el radio button de programar
  cy.wait(1000);
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.xpath(
    "/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]"
  ).click();

  cy.wait(2000);
  // Volver a la seccion de pages
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]"
  ).click();
  cy.wait(2000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  // Ver paginas programadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]"
  ).click();
  cy.wait(1000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]").click();
  cy.wait(2000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  verificarTitulo(titulo);
  cy.wait(1000);
  exit();
}

function crear_pagina_con_draft(titulo,ruta) {
  let i=1;
  logIn(i.toString(),ruta);
  i+=1
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1; 

  cy.wait(3000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
  cy.wait(1000);
  
  // Click en el boton de page
  
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  tituloYDescricpion(titulo);
  // Volver a la seccion de pages
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]"
  ).click();
  cy.wait(2000);

  //Ver draft pages
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]"
  ).click();
  cy.wait(1000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[2]").click();
  cy.wait(2000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  verificarTitulo(titulo);

  //Editar el draft
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]"
  ).click();
  cy.wait(1000);
  // Cambiar visibilidad de la pagina
  changeVisibility(i,ruta);
  i+=1
  // Click en publish
  publicarPagina(i.toString(),ruta);
  i+=1
  cy.wait(2000);

  //Ir a la seccion de paginas publicadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]"
  ).click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]").click();
  cy.wait(2000);

  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]").click();
  cy.wait(2000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1
  cy.xpath("/html/body/div[2]/div/main/section/div/header/section/div/div[2]/div[1]/span").click()
  cy.wait(2000)
  cy.xpath("/html/body/div[1]/div/ul/li[4]").click()
  cy.wait(2000)
  verificarTitulo(titulo);
  cy.wait(1000);
  exit();
}

function changeVisibility(i,ruta) {
  cy.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]").click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})

  cy.wait(1000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/div[1]/span[1]/select"
  ).select(2);

  cy.wait(1000);
  cy.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]").click();
}
function crear_pagina_con_nombre_extenso(nombrePrueba,ruta) {
  let titulo =
    "Tituloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  let i=1;
  logIn(i.toString(),ruta);
  i+=1
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})


  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
  cy.wait(1000);
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1

  // Click en el boton de page
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1

  tituloYDescricpion(titulo);
  publicarPagina(i,ruta);
  i+=1
  cy.wait(2000);

  //Ir a la seccion de paginas publicadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]"
  ).click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1

  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]").click();
  cy.wait(2000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[1]").click();
  cy.screenshot(ruta+"/step"+i.toString(),{overwrite: true, capture: 'fullPage'})
  i+=1

  verificarWidth();
}

function verificarWidth() {
  cy.xpath("/html[1]/body[1]")
    .invoke("width")
    .then((width) => {
      cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]"
      )
        .invoke("width")
        .then((widthTitle) => {
          if (widthTitle > width * 0.8) {
            cy.log("El width del titulo sobrepasa al de la pantalla");
          } else {
            cy.log("Prueba fallida");
          }
        });
    });
}
function verificarTitulo(titulo) {
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]"
  )
    .invoke("text")
    .then((text) => {
      cy.log(text);
      cy.log(titulo);
      if (text.includes(titulo)){ cy.log("Prueba de " + titulo + " Fue exitosa");}
      else{ cy.log("Prueba de " + titulo + " Fallo");}
    });
}
function tituloYDescricpion(titulo) {
  let elementTitulo = cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]"
  );
  elementTitulo.type(titulo);
  let elementDescription = cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]"
  );

  elementDescription.type("Descripcion");
  cy.wait(1000);
}

  function publicarPagina(i,ruta) {
    // Click en publish
    cy.xpath(
      "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]"
    ).click();
    cy.screenshot(ruta+"/step"+i,{overwrite: true, capture: 'fullPage'})

    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]"
    ).click();
   
    cy.wait(2000);
    // Volver a la seccion de pages
    cy.xpath(
      "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]"
    ).click();
    cy.wait(2000);
  }
function exit() {
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
  ).click({ force: true });
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]").click({
    force: true,
  });
}
