describe('Posts flow', function () {
    it('Post', function () {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        scenario_one();
        scenario_two();
        scenario_three();
        scenario_four();
    });
});

function scenario_one() {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', { force: true });

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', { force: true });

    cy.wait(1000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({ force: true });

    cy.wait(5000);

    let elementPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]'
    );
    elementPost.click({ force: true });

    cy.wait(1000);

    let buttonElement = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()='svg'][1]"
    );
    buttonElement.click({ force: true });

    cy.wait(1000);

    let elementTitle = cy.xpath(
        "//textarea[@placeholder='Post title'][@class='gh-editor-title ember-text-area gh-input ember-view']"
    );
    elementTitle.type('My first post', { force: true });

    cy.wait(1000);

    let elementParraf = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]'
    );
    elementParraf.click({ force: true });
    elementParraf.type(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        { force: true }
    );

    cy.wait(2000);

    let elementMenu = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]'
    );
    elementMenu.click({ force: true });

    cy.wait(1000);

    let elementButtonPublish = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    );
    elementButtonPublish.click({ force: true });

    let elementButtonConfirm = cy.xpath(
        "//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']"
    );
    elementButtonConfirm.click({ force: true });

    cy.wait(1000);

    let elementBackPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]'
    );
    elementBackPost.click({ force: true });

    cy.wait(2000);

    let elementList = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]'
    );
    elementList.click({ force: true });

    cy.wait(1000);

    let elementPublish = cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]');
    elementPublish.click({ force: true });

    cy.wait(2000);

    exit();

    // let elementText = cy.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]');
    //
    // cy.wait(2000);

    // exit();
    // cy.xpath('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]').click({force:true});
}

function scenario_two() {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', { force: true });

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', { force: true });

    cy.wait(1000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({ force: true });

    cy.wait(5000);

    let elementPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]'
    );
    elementPost.click({ force: true });

    cy.wait(1000);

    let buttonElement = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()='svg'][1]"
    );
    buttonElement.click({ force: true });

    cy.wait(1000);

    let elementTitle = cy.xpath(
        "//textarea[@placeholder='Post title'][@class='gh-editor-title ember-text-area gh-input ember-view']"
    );
    elementTitle.type('This is my first my post programmed !!!', {
        force: true,
    });

    cy.wait(1000);

    let elementParraf = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]'
    );
    elementParraf.click({ force: true });
    elementParraf.type(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        { force: true }
    );

    cy.wait(2000);

    let elementMenu = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]'
    );
    elementMenu.click({ force: true });

    cy.wait(1000);

    let elementChangeCheck = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/div[1]'
    );
    elementChangeCheck.click({ force: true });

    let elementButtonPublish = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    );
    elementButtonPublish.click({ force: true });

    let elementButtonConfirm = cy.xpath(
        "//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']"
    );
    elementButtonConfirm.click({ force: true });

    cy.wait(1000);

    let elementBackPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]'
    );
    elementBackPost.click({ force: true });

    cy.wait(2000);

    let elementList = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]'
    );
    elementList.click({ force: true });

    cy.wait(1000);

    let elementPublish = cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]');
    elementPublish.click({ force: true });

    cy.wait(2000);

    let elementText = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]'
    );

    exit();
}

function scenario_three() {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', { force: true });

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', { force: true });

    cy.wait(1000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({ force: true });

    cy.wait(5000);

    let elementPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]'
    );
    elementPost.click({ force: true });

    cy.wait(1000);

    let buttonElement = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()='svg'][1]"
    );
    buttonElement.click({ force: true });

    cy.wait(1000);

    let elementTitle = cy.xpath(
        "//textarea[@placeholder='Post title'][@class='gh-editor-title ember-text-area gh-input ember-view']"
    );
    elementTitle.type('My first post', { force: true });

    cy.wait(1000);

    let elementParraf = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]'
    );
    elementParraf.click({ force: true });
    elementParraf.type(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        { force: true }
    );

    cy.wait(2000);

    let elementTitleChange = cy.xpath(
        "//textarea[@placeholder='Post title'][@class='gh-editor-title ember-text-area gh-input ember-view']"
    );
    elementTitleChange.type(titleRandom(256), { force: true });

    let elementMenu = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]'
    );
    elementMenu.click({ force: true });

    cy.wait(1000);

    let elementButtonPublish = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    );
    elementButtonPublish.click({ force: true });

    cy.wait(2000);

    let elementButtonConfirm = cy.xpath(
        "//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']"
    );
    elementButtonConfirm.click({ force: true });

    cy.wait(1000);

    let elementBackPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]'
    );
    elementBackPost.click({ force: true });

    cy.wait(2000);

    cy.xpath("//button[@class='gh-btn gh-btn-red']/span[text()='Leave']");
    elementButtonConfirm.click({ force: true });

    cy.wait(3000);

    exit();
}

function scenario_four() {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', { force: true });

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', { force: true });

    cy.wait(1000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({ force: true });

    cy.wait(5000);

    let elementPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]'
    );
    elementPost.click({ force: true });

    cy.wait(1000);

    let buttonElement = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()='svg'][1]"
    );
    buttonElement.click({ force: true });

    cy.wait(1000);

    let elementTitle = cy.xpath(
        "//textarea[@placeholder='Post title'][@class='gh-editor-title ember-text-area gh-input ember-view']"
    );
    elementTitle.type('My first post', { force: true });

    cy.wait(1000);

    search();

  
}

function search() {
    let elementTools = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]'
    );
    elementTools.click({ force: true });

    cy.wait(3000);

    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/p[1]'
    )
        .invoke('text')
        .then((text) => {
            if (text === '*/my-first-post/') cy.log('Fallo en la prueba');
            else cy.log('Validación exitosa');
        });
}

function titleRandom(len) {
    let title = '';
    for (let i = 0; i < len; i++) {
        title += 'a';
    }
    return title;
}

function exit() {
    cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
    ).click({ force: true });
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]').click({
        force: true,
    });
}
