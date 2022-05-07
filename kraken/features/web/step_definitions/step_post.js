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
    let elementPost = this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]');
    await elementPost.click();
    await sleep(2000);
    let buttonElement = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()=\'svg\'][1]');
    buttonElement.click();
});

When('I write the title of my post: {string}', async function (title) {
    let element = await this.driver.$('//textarea[@placeholder=\'Post title\'][@class=\'gh-editor-title ember-text-area gh-input ember-view\']');
    await element.setValue(title);
})

When('I write a short text', async function () {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]');
    element.click();
    await element.setValue('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ');
})

When('I click dropdown', async function () {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]');
    element.click();
})

When('I click publish', async function () {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    element.click();
})

When('I click confirm', async function () {
    let element = await this.driver.$('//button[@class=\'gh-btn gh-btn-black gh-btn-icon ember-view\']');
    element.click();
})

When('I back to lists post', async function () {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]');
    element.click();
})

When('I validate the title of post {int}', async function (item) {
    let elementList = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]');
    elementList.click();
    await sleep(2000);
    let elementPublish = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[' + item + ']');
    elementPublish.click();
    await sleep(2000);
    let elementText = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]').getText();
    console.log(elementText);
})

When('I click publish program', async function () {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/div[1]');
    element.click();
    await sleep(2000)
    let elementSchedule = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    elementSchedule.click();
})

When('I write the title with length {int}', async function (value) {
    let element = await this.driver.$('//textarea[@placeholder=\'Post title\'][@class=\'gh-editor-title ember-text-area gh-input ember-view\']');
    await element.setValue(titleRandom(value));
})

When('I wait message error', async function () {
    let element = await this.driver.$('//article[@class=\'gh-alert gh-alert-red ember-view\']');
    element.click();
})

When('I click tool', async function () {
    let elementTools = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]');
    elementTools.click();
})

When('I search', async function () {
    let elementValue = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]');
    await elementValue.setValue('');
});

When('I click in post', async function (){
    await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]').click();
})

When('I validate URL post', async function (){
    let elementValue = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]');
    return elementValue.getText() !== '';
})

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function titleRandom(len) {
    let title = ''
    for (let i = 0; i < len; i++) {
        title += 'a'
    }
    return title;
}
