const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I enter email {kraken-string} for tag', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);   
});

When('I enter password {kraken-string} for tag', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click next for tag', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
});

When('I click on new tag', async function() {
    let element = await this.driver.$(`a[href="#/tags/new/"]`);
    return await element.click();
});

When('I enter tag name {kraken-string}', async function(name) {
    const tagName = await this.driver.$('//*[@id="tag-name"]')
    return await tagName.setValue(name)
});

When('I save tag', async function() {
    let element = await this.driver.$('//span[normalize-space()="Save"]');
    return await element.click();
});

Then('I found new tag created {kraken-string}', async function(name) {
    let element = await this.driver.$(`//h3[normalize-space()="${name}"]`);
});

Then('I input invalid color {kraken-string}', async function(color) {
    let element = await this.driver.$('//input[@placeholder="15171A"]');
    await element.setValue(color);
    return await this.driver.$('//p[normalize-space()="The colour should be in valid hex format"]')
});

Then('I input invalid description', async function() {
    let element = await this.driver.$('#tag-description');
    const invalidString1 = "rEm6oKzD0xIpqoeaeCJ0TqDyOX6oemGJE2ATig11qfQ5v5rCKoDyRF9qN6rhwGhtxRtHUoNBmIRvDDenTPE5ZeeqLVdtIcwDd3w7XNnHLC1g1gcjexrNHH7Cb8wz9zgEU1S8LyqIvyBjcKFIsTNg7hwYYn4Ab2YrRr3d1vG2A3xX3ubZ6YtdFDFr2H9pBAUS2Su010mBnK6diboCYZD8O6n95aX3Y6To6Bylf3MOF5XJsC5OGcg4VsY06hOkVGt1"
    const invalidString2 = "rEm33336oKzD0xIpqoeaeCJ0TqDyOX6oemGJE2ATig11qfQ5v5rCKoDyRF9qN6rhwGhtxRtHUoNBmIRvDDenTPE5ZeeqLVdtIcwDd3w7XNnHLC1g1gcjexrNHH7Cb8wz9zgEU1S8LyqIvyBjcKFIsTNg7hwYYn4Ab2YrRr3d1vG2A3xX3ubZ6YtdFDFr2H9pBAUS2Su010mBnK6diboCYZD8O6n95aX3Y6To6Bylf3MOF5XJsC5OGcg4VsY06hOkVGt1"
    await element.setValue(invalidString1 + invalidString2);
    let save = await this.driver.$('//span[normalize-space()="Save"]');
    await save.click();
    let label = await this.driver.$('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[3]/p[1]')
    const classNameAndText = await this.driver.$('.response=Description cannot be longer than 500 characters.');
    const error = await classNameAndText.getText()
    assert.strictEqual(error, 'Description cannot be longer than 500 characters.');
});

When('I click on new internal tag', async function() {
    let element = await this.driver.$(`/html/body/div[2]/div/main/section/div/header/section/div/button[2]`);
    return await element.click();
});

When('I click on button {kraken-string}', async function(option) {
    let element = await this.driver.$(`a[href="#${option}"]`);
    return await element.click();
});

When('I fill data', async function() {
    const memberName = await this.driver.$('//*[@id="member-name"]')
    const memberEmail = await this.driver.$('//*[@id="member-email"]')
    await memberName.setValue('member');
    const newEmail = makeEmail();
    await memberEmail.setValue(newEmail)
});

function makeEmail() { 
    var strValues="abcdefg12345"; 
    var strEmail = ""; 
    var strTmp; 
    for (var i=0;i<10;i++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strTmp = ""; 
    strEmail = strEmail + "@"; 
    for (var j=0;j<8;j++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strEmail = strEmail + ".com" 
    return strEmail; 
}
