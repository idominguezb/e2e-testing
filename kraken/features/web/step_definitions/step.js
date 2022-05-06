const {Given, When, Then} = require('@cucumber/cucumber');

Given('I navigate to page {string}', async function (page) {
    // Write code here that turns the phrase above into concrete actions
    return await this.driver.url(page);
});

When('I enter email {string} and pass {string}', async function (email, pass) {
    let element = await this.driver.$('#ember7');
    await element.setValue(email);
    let passElement = await this.driver.$('#ember9');
    await passElement.setValue(pass);
});

When('I click log in', async function () {
    let buttonElement = await this.driver.$('#ember11');
    buttonElement.click();
});

When('I new post click', async function () {
    let elementPost = await this.driver.$('//a[@href=\'#/posts/\']');
    elementPost.click();
    await sleep(2000);
    let buttonElement = await this.driver.$('//a[@title=\'New post\'][@href=\'#/editor/post/\']');
    buttonElement.click();
});

When('I write the title of my post: {string}', async function (title) {
    let element = await this.driver.$('//textarea[@placeholder=\'Post title\'][@class=\'gh-editor-title ember-text-area gh-input ember-view\']');
    await element.setValue(title);
})

When('I write a short text', async function () {
    let element = await this.driver.$('//p[@data-koenig-dnd-droppable=\'true\']');
    element.click();
    await element.setValue('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ');
})

When('I click dropdown', async function () {
    let element = await this.driver.$('//div[@class=\'gh-publishmenu ember-view\']');
    element.click();
})

When('I click publish', async function () {
    let element = await this.driver.$('//button[@class=\'gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view\']');
    element.click();
})

When('I click confirm', async function () {
    let element = await this.driver.$('//button[@class=\'gh-btn gh-btn-black gh-btn-icon ember-view\']');
    element.click();
})

When('I back to lists post', async function () {
    let element = await this.driver.$('//a[@href=\'#/posts/\']');
    element.click();
})

When('I validate the title of post', async function () {
    let elementList = await this.driver.$('//span[@class=\'ember-power-select-selected-item\']');
    elementList.click();
    await sleep(2000);
    let elementPublish = await this.driver.$('//li[@class=\'ember-power-select-option\'][@data-option-index=\'2\']');
    elementPublish.click();
    await sleep(2000);
    let elementText = await this.driver.$('//h3[@class=\'gh-content-entry-title\']').getText();
    console.log(elementText);
})

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}



