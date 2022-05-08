const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert');
When('I go to members section', async function () {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[4]/a[1]");
    return await element.click();
  });
  
  When('I click on new members',async function(){
    let newMembersButton= await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[2]/a[1]/span[1]")
    return await newMembersButton.click();
  })
  
  When('I fill the fields but with an invalid email',async function(){
  
    let nameField=await this.driver.$("//input[@id='member-name']")
    await nameField.setValue("Nombre")
    let emaiField=await this.driver.$("//input[@id='member-email']")
    return await emaiField.setValue("Email")
  });
  
  When('I click on save member',async function(){
    let saveMemberButton=await this.driver.$("//span[normalize-space()='Save']")
    return await saveMemberButton.click()
  })
  

  

  Then('I should see an error with the invalid email',async function(){
  
      let errorLabel=await this.driver.$("//p[normalize-space()='Invalid Email.']").getText()
  
      return assert.equal("Invalid Email.",errorLabel)
  })
  