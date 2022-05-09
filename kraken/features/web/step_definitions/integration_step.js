const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I set value for {kraken-string} in {kraken-string} to {kraken-string}', async function (name, path, value) {
    let element = await this.driver.$(path);
    if(value.includes("random")){
        return await element.setValue(makeurl(7));
    }
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
        if(value.includes("random")){
            return assert.equal(elementText.includes("random"),true)
        }
        console.log(
            `Validating ${name}: `,
            elementText,
            value === elementText ? 'Exitoso' : 'Fallido'
        );
        
        return assert.equal(value === elementText, true);
    }
);

function makeurl(n) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < n; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return "random"+text+".com";
  }
