const { Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert');

When('I enter password {kraken-string}', async function (password) {

  
  let element = await this.driver.$("#ember9");
  return await element.setValue(password);
});

When('I click on button with id {string}', async function (id) {
  let element = await this.driver.$("#" + id);
  return await element.click();
});

When('I go to pages section', async function () {
  let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[2]/a[1]");
  return await element.click();
});
When('I click on new page',async function(){
    let newPageButton = await this.driver.$("//span[normalize-space()='New page']");
    
    return await newPageButton.click();
    
});
When('I type the tittle {string}', async function (titulo) {
  let tittle = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]");
  return await tittle.setValue(titulo);
});
When('I type the description',async function(){
    let descriptionDiv= await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]")
    await descriptionDiv.click();
    let descriptionTextArea= await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]")
    return await descriptionTextArea.setValue("Descripcion")

});
When('I change visibility and publish it', async function(){
  let visibility=this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/div[1]/span[1]/select")

  await visibility.selectByIndex(2)
  let publishButton = await this.driver.$("//span[normalize-space()='Publish']");
  
  await publishButton.click()
  await this.driver.saveScreenshot(this.url+"/"+this.step.toString()+".png")
  this.step+=1
  let confirmButton = await this.driver.$("/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]");
  return await confirmButton.click()
  
})
When('I click on settings page',async function(){
  let settings=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]")
  
  return await settings.click()
})
When('I Click on publish', async function () {
  let publishButton = await this.driver.$("//span[normalize-space()='Publish']");
  return await publishButton.click();
});
When('I Click on publish again', async function () {
  let confirmButton = await this.driver.$("/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]");
  return await confirmButton.click();
});
When('I Click on schedule for later',async function(){
  let scheduleRadioButton=await this.driver.$("/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/div[1]")
  return await scheduleRadioButton.click();
});
When('I go back to pages section', async function () {
  let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]");
  return await element.click();
});

When("I click on paidmember-only",async function(){
  let pagesListFilter=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]")
  await pagesListFilter.click()
  let pagesVisibility=await this.driver.$("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]")
  
  await pagesVisibility.click()
})
When("I click on public",async function(){
  let pagesListFilter=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[2]/div[1]")

  await pagesListFilter.click()
  
  let pagesVisibility=await this.driver.$("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[2]")
  
  await pagesVisibility.click()
})

When('I click on all pages {string}',async function (type) {
  let index=0;

  if(type.includes("published")){
  
      
      index=2;
  }else if(type.includes("scheduled")){
    
      index=3;
  }else{  
    
      index=1;

  }

  let pagesListFilter=await this.driver.$("//span[@class=\'ember-power-select-selected-item\']")
  await pagesListFilter.click();

  await this.driver.saveScreenshot(this.url+"/"+this.step.toString()+".png")
  this.step+=1
  let pagePublished= await this.driver.$("//li[@class=\'ember-power-select-option\'][@data-option-index=\'"+index+"\']")

  
  return pagePublished.click();
})

When('I click on the draft page to publish it', async function(){
 
 
 return await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/p[1]").click()
})
Then("I check the first row with tittle {string}",async function(titulo){
  
  tittle=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]").getText();
  timePublished=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/p[1]/span[1]/span[2]").getText();
  console.log(tittle)
 return  assert.equal((tittle==titulo && timePublished.includes("seconds")),true)
});

Then('I check the width of the page tittle',async function(){
  tittle=await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]").getSize('width')
  body=await this.driver.$("/html[1]/body[1]").getSize('width')
  return  assert.equal((body*0.8<tittle),true)
})

