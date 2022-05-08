const { Given, When, Then } = require('@cucumber/cucumber');

When('I set value for {kraken-string} in {kraken-string} to {kraken-string}', async function (name, path, value) {
    let element = await this.driver.$(path);
    return await element.setValue(value);
});

When('I click {kraken-string} in {kraken-string}', async function (name, path) {
    let element = await this.driver.$(path);
    return await element.click();
});

When(
    'I validate {kraken-string} {kraken-string} {kraken-string}',
    async function (name, value, path) {
        let elementText = await this.driver.$(path).getText();
        console.log(
            `Validating ${name}: `,
            elementText,
            value === elementText ? 'Exitoso' : 'Fallido'
        );
        return value === elementText;
    }
);
