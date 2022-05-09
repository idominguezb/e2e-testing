describe('Members Flow', function () {
    it('Members', function () {
        cy.visit('http://localhost:2368/ghost/');
        login();
        createMemberWithMoreThan500CharInDescription();
        scenario_five();
        cy.wait(1000);
    });
});

function login() {
    cy.get('#ember7').type('prueba@example.com', { force: true });
    cy.get('#ember9').type('prueba@example.com123456789', { force: true });
    cy.wait(1000);

    cy.get('#ember11').click({ force: true });
    cy.wait(5000);
}

function scenario_five() {
    let elementUsername = cy.get('#ember7');
    elementUsername.type('prueba@example.com', { force: true });

    let elementcyPass = cy.get('#ember9');
    elementcyPass.type('prueba@example.com123456789', { force: true });

    cy.wait(1000);

    let elementLogin = cy.get('#ember11');
    elementLogin.click({ force: true });

    cy.wait(5000);

    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[4]/a[1]'
    ).click({ force: true });

    cy.wait(1000);

    // Click Members
    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[2]/a[1]/span[1]'
    ).click({ force: true });

    cy.wait(1000);

    // Field name
    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]'
    ).type('Hector Urrego', { force: true });

    cy.wait(1000);

    // Field email
    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]'
    ).type('hector_urrego@example.com', { force: true });

    cy.wait(1000);

    // Click button save
    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]'
    ).click({ force: true });

    cy.wait(1000);

    // Return List Members
    cy.xpath(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/h2[1]/a[1]'
    ).click({ force: true });

    cy.wait(1000);

    //Search email hector_urrego@example.com
    cy.get('tbody tr').then(($item) => {
        cy.log('LONG: ' + $item.get().length);
        for (let i = 1; i <= $item.length; i++) {
            cy.xpath(
                '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[' +
                    i +
                    ']/a[1]/div[1]/div[1]/p[1]'
            )
                .invoke('text')
                .then((text) => {
                    if (text === 'hector_urrego@example.com') {
                        cy.xpath(
                            '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[' +
                                i +
                                ']/a[1]/div[1]/div[1]/p[1]'
                        ).click({ force: true });
                        cy.wait(1000);

                        cy.xpath(
                            "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()='svg'][1]"
                        ).click({ force: true });
                        cy.wait(1000);

                        cy.xpath(
                            '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/ul[1]/li[2]/button[1]/span[1]'
                        ).click({ force: true });
                        cy.wait(1000);

                        cy.xpath(
                            '/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]'
                        ).click({ force: true });
                    }
                });
            break;
        }
    });

    exit();
}

function createMemberWithMoreThan500CharInDescription() {
    cy.visit('http://localhost:2368/ghost/#/members/new');
    cy.wait(3000);

    // Set member values
    cy.get('#member-name').type('Juan', { force: true });
    cy.get('#member-email').type('test@gmail.com', { force: true });
    cy.get('#member-note').type(
        'dsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdasadsadsadsasdasdasdasdsaddsadsadsdsadasdasdas',
        { force: true }
    );

    // Create member
    cy.get('.view-actions button').click();
    cy.wait(1000);
    cy.get('.view-actions button span').should((elem) => {
        expect(elem.text()).to.equal(' Retry');
    });
}

function exit() {
    cy.xpath(
        "/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
    ).click({ force: true });
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]').click({
        force: true,
    });
}
