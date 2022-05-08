const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate to {kraken-string}', async function (home) {
    return await this.driver.navigateTo(home);
});

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});
