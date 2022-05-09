const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
When('I go to members section', async function () {
    let element = await this.driver.$(
        '/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[4]/a[1]'
    );
    return await element.click();
});

When('I click on new members', async function () {
    let newMembersButton = await this.driver.$(
        '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[2]/a[1]/span[1]'
    );
    return await newMembersButton.click();
});

When('I fill the fields but with an invalid email', async function () {
    let nameField = await this.driver.$("//input[@id='member-name']");
    await nameField.setValue('Nombre');
    let emaiField = await this.driver.$("//input[@id='member-email']");
    return await emaiField.setValue('Email');
});

When('I click on save member', async function () {
    let saveMemberButton = await this.driver.$(
        "//span[normalize-space()='Save']"
    );
    return await saveMemberButton.click();
});

Then('I should see an error with the invalid email', async function () {
    let errorLabel = await this.driver
        .$("//p[normalize-space()='Invalid Email.']")
        .getText();

    return assert.equal('Invalid Email.', errorLabel);
});

Then('I should see an retry message', async function () {
    let errorLabel = await this.driver.$('.view-actions button span').getText();
    return assert.equal('Retry', errorLabel);
});

When('I click on the new member',async function(){
  let member=await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[1]/a[1]/div[1]/div[1]/h3[1]')
  return await member.click()
})

When('I delete the member',async function(){
  
  await this.driver.$(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()='svg'][1]"
  ).click();
  

 await this.driver.$(
    "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/ul[1]/li[2]/button[1]/span[1]"
  ).click();
  

  await this.driver.$(
    "/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]"
  ).click();
 
})

When('I fill data {kraken-string}', async function(nombre) {
  const memberName = await this.driver.$('//*[@id="member-name"]')
  const memberEmail = await this.driver.$('//*[@id="member-email"]')
  await memberName.setValue(nombre);
  const newEmail = makeEmail();
  await memberEmail.setValue(newEmail)
});

Then('I check that the first name is {string}',async function(nombre){
  let name= await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[1]/a[1]/div[1]/div[1]/h3[1]").getText()
  console.log(name)
  assert.equal(name===nombre,true)
})
Then('I check that the first name is not {string}',async function(nombre){
  let name=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[1]/a[1]/div[1]/div[1]/h3[1]").getText()
  assert.equal(name==nombre,false)
})
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
