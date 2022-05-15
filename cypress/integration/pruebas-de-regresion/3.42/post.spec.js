describe('Posts flow', function () {
    // beforeEach(() => {
    //     // run these tests as if in a desktop
    //     // browser with a 720p monitor
    //     cy.viewport(1280, 800)
    // })
    it('Post', function () {
        cy.visit('http://localhost:3001/ghost/');
        cy.wait(1000);
        scenario_one('/scenario_createPost');
        scenario_two('/scenario_createPostProgrammed');
    });
});

function login(directoryScreenshot) {
    let elementUsername = cy.get('#ember8');
    elementUsername.type('prueba@example.com', {force: true});

    let elementcyPass = cy.get('#ember10');
    elementcyPass.type('prueba@example.com123456789', {force: true});

    cy.screenshot(directoryScreenshot + '/step1', {overwrite: true, capture: 'fullPage'})
    cy.wait(2000);

    let elementLogin = cy.get('#ember12');
    elementLogin.click({force: true});

    cy.wait(5000);
    cy.screenshot(directoryScreenshot + '/step2', {overwrite: true, capture: 'fullPage'})
    cy.wait(1000);

}

function post(directory) {
    let elementPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[1]/ul[2]/li[2]/a[1]'
    );
    elementPost.click({force: true});
    cy.wait(1000);
    cy.screenshot(directory + '/step3', {overwrite: true, capture: 'fullPage'})

    let buttonElement = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[1]/ul[2]/li[2]/a[2]/span[1]/*[name()='svg'][1]"
    );
    buttonElement.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step4', {overwrite: true, capture: 'fullPage'})
}

function writerPost(directory, title, parraf) {
    let elementTitle = cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/textarea[1]"
    );
    elementTitle.type(title, {force: true});

    cy.wait(1000);

    let elementParraf = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]'
    );
    elementParraf.click({force: true});
    elementParraf.type(
        parraf,
        {force: true}
    );

    cy.wait(2000);
    cy.screenshot(directory + '/step5', {overwrite: true, capture: 'fullPage'})
}

// Creación de un post
function scenario_one(directory) {
    login(directory)

    post(directory)

    writerPost(directory, 'My first post', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ');

    let elementMenu = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]'
    );
    elementMenu.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step6', {overwrite: true, capture: 'fullPage'})

    let elementButtonPublish = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    );
    elementButtonPublish.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step7', {overwrite: true, capture: 'fullPage'})

    // let elementButtonConfirm = cy.xpath(
    //     "//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']"
    // );
    // elementButtonConfirm.click({force: true});
    //
    cy.wait(2000);
    cy.screenshot(directory + '/step8', {overwrite: true, capture: 'fullPage'})

    let elementBackPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/div[1]/div[1]/a[1]'
    );
    elementBackPost.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step9', {overwrite: true, capture: 'fullPage'})

    let elementList = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]'
    );
    elementList.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step10', {overwrite: true, capture: 'fullPage'})

    let elementPublish = cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[3]');
    elementPublish.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step11', {overwrite: true, capture: 'fullPage'})

    cy.wait(1000);
    exit();
}

// Creación de un post programado
function scenario_two(directory) {
    login(directory);

    post(directory)

    writerPost(directory, 'This is my first my post programmed !!!', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ')

    let elementMenu = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]'
    );
    elementMenu.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step6', {overwrite: true, capture: 'fullPage'})

    let elementChangeCheck = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/div[1]'
    );
    elementChangeCheck.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step7', {overwrite: true, capture: 'fullPage'})

    let elementButtonPublish = cy.xpath(
        '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    );
    elementButtonPublish.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step8', {overwrite: true, capture: 'fullPage'})

    let elementButtonConfirm = cy.xpath(
        "/html[1]/body[1]/div[1]/div[1]/footer[1]/button[1]/span[1]"
    );
    elementButtonConfirm.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step9', {overwrite: true, capture: 'fullPage'})

    let elementBackPost = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/div[1]/div[1]/a[1]'
    );
    elementBackPost.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step10', {overwrite: true, capture: 'fullPage'})

    let elementList = cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]'
    );
    elementList.click({force: true});

    cy.wait(1000);
    cy.screenshot(directory + '/step11', {overwrite: true, capture: 'fullPage'})

    let elementPublish = cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]');
    elementPublish.click({force: true});

    cy.wait(2000);
    cy.screenshot(directory + '/step12', {overwrite: true, capture: 'fullPage'})

    exit();

}

function exit() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.xpath("/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[2]/div[1]/div[1]/div[2]/span[2]").click({force: true});
    cy.wait(1000)
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]').click({force: true});
}
