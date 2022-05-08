describe("Page Flow", function () {
  it("Page", function () {
    cy.visit("http://localhost:2368/ghost/");
    cy.wait(1000);
    crear_pagina("Crear pagina");
    crear_pagina_programada("Crear Pagina programada");
    crear_pagina_con_draft("Crear pagina usando un draft");
    crear_pagina_con_nombre_extenso("Crear pagina con nombre extenso");
  });
});

function logIn() {
  let elementUsername = cy.get("#ember7");
  elementUsername.type("prueba@example.com", { force: true });

  let elementcyPass = cy.get("#ember9");
  elementcyPass.type("prueba@example.com123456789", { force: true });

  cy.wait(1000);

  let elementLogin = cy.get("#ember11");
  elementLogin.click({ force: true });
}
function crear_pagina(titulo) {
  logIn();
  cy.wait(5000);
  // IR a la seccion de pages
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });

  cy.wait(1000);
  // Click en el boton de page
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });

  //llenar los campos
  tituloYDescricpion(titulo);
  publicarPagina();

  // Ver las paginas publicadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]"
  ).click();
  cy.wait(1000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]").click();
  cy.wait(2000);

  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[1]").click();

  verificarTitulo(titulo);
  cy.wait(1000);
  exit();
}

function crear_pagina_programada(titulo) {
  logIn();

  cy.wait(5000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
  cy.wait(1000);
  // Click en el boton de page
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });
  tituloYDescricpion(titulo);
  cy.wait(2000);
  // Click en publish
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]"
  ).click();
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
  // Ver paginas programadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]"
  ).click();
  cy.wait(1000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]").click();
  cy.wait(2000);
  verificarTitulo(titulo);
  cy.wait(1000);
  exit();
}

function crear_pagina_con_draft(titulo) {
  logIn();
  cy.wait(5000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
  cy.wait(1000);
  // Click en el boton de page
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });
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
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[2]").click();
  cy.wait(2000);

  verificarTitulo(titulo);

  //Editar el draft
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]"
  ).click();
  cy.wait(1000);
  // Cambiar visibilidad de la pagina
  changeVisibility();

  // Click en publish
  publicarPagina();

  cy.wait(2000);

  //Ir a la seccion de paginas publicadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]").click();
  cy.wait(2000);

  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]").click();
  cy.wait(2000);

  verificarTitulo(titulo);
  cy.wait(1000);
  exit();
}

function changeVisibility() {
  cy.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]").click();
  cy.wait(1000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/div[1]/span[1]/select"
  ).select(2);
  cy.wait(1000);
  cy.xpath("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]").click();
}
function crear_pagina_con_nombre_extenso(nombrePrueba) {
  let titulo =
    "Tituloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  logIn();
  cy.wait(5000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]"
  ).click({ force: true });
  cy.wait(1000);
  // Click en el boton de page
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/a[1]/span[1]"
  ).click({ force: true });
  tituloYDescricpion(titulo);
  publicarPagina(titulo);
  cy.wait(2000);

  //Ir a la seccion de paginas publicadas
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]").click();
  cy.wait(2000);
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]"
  ).click();
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[1]").click();

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

function publicarPagina() {
  // Click en publish
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]"
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
}
function exit() {
  cy.xpath(
    "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
  ).click({ force: true });
  cy.xpath("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]").click({
    force: true,
  });
}
