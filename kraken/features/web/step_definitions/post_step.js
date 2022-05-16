const {Given, When, Then} = require('@cucumber/cucumber');

When('I enter email {kraken-string} and pass {kraken-string}', async function (email, pass) {
    let id = this.version === "3.42" ? "#ember10" : "#ember9";
    let id2=this.version==="3.42"?"#ember8":"#ember7"
 
    let element = await this.driver.$(id2);
    await element.setValue(email);
    let passElement = await this.driver.$(id);
    await passElement.setValue(pass);
});

When('I click log in', async function () {
    let buttonElement = await this.driver.$('#ember11');
    buttonElement.click();
});

When('I new post click', async function () {
    let poId=this.version==="3.42"?"/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[1]/ul[2]/li[2]/a[1]":'/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[1]'
    let elementPost = this.driver.$(poId);
    await elementPost.click();
   
    await sleep(2000);
  await   this.driver.saveScreenshot(
        this.url + "/step" + this.step.toString() + ".png"
      );
    this.step+=1;
    let id=this.version==="3.42"?"/html/body/div[2]/div/main/section/header/section/a/span":'/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[1]/a[2]/span[1]/*[name()=\'svg\'][1]'
    let buttonElement = await this.driver.$(id);
    buttonElement.click();
});

When('I write the title of my post: {string}', async function (title) {
    let elId=this.version==="3.42"? "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/textarea[1]":'//textarea[@placeholder=\'Post title\'][@class=\'gh-editor-title ember-text-area gh-input ember-view\']'
    let element = await this.driver.$(elId);
    await element.setValue(title);
})

When('I write a short text', async function () {
    let elId=this.version==="3.42"?  '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]':'/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]'
    let element = await this.driver.$(elId);
    element.click();
    await element.setValue('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ');
})

When('I click dropdown', async function () {
    let elm=this.version==="3.42"? '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]':'/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/div[2]/div[1]/span[1]'
    let element = await this.driver.$(elm);
    element.click();
})

When('I click publish', async function () {
    let elm= this.version==="3.42"? '/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]':'/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]'
    let element = await this.driver.$(elm);
    await element.click();
    await this.driver.saveScreenshot(
        this.url + "/step" + this.step.toString() + ".png"
      );
      this.step+=1;
})

When('I click confirm', async function () {
    let element = await this.driver.$('//button[@class=\'gh-btn gh-btn-black gh-btn-icon ember-view\']');
    element.click();
})

When('I back to lists post', async function () {
    await this.driver.saveScreenshot(
        this.url + "/step" + this.step.toString() + ".png"
      );
      this.step+=1;
    let elm=this.version==="3.42"? '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/div[1]/div[1]/a[1]':'/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]/span[1]'
    let element = await this.driver.$(elm);
    element.click();
})

Then('I validate the title of post {int}', async function (item) {
    let elml=this.version==="3.42"? '/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]':'/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[1]/div[1]/div[1]/span[1]'
    let elementList = await this.driver.$(elml);
    elementList.click();
    await sleep(2000);
   await this.driver.saveScreenshot(
        this.url + "/step" + this.step.toString() + ".png"
      );
    this.step+=1

    let elementPublish = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[' + item + ']');
    elementPublish.click();
    await sleep(2000);
    let elemt=this.version==="3.42"?"/html/body/div[2]/div/main/section/section/ol/li[2]/a[2]/h3":'/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/h3[1]'
    let elementText = await this.driver.$(elemt).getText();
    console.log(elementText);
})

When('I click publish program', async function () {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[2]/div[1]');
    element.click();
    
    await sleep(2000)
    let elementSchedule = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    await elementSchedule.click();
    await this.driver.saveScreenshot(
        this.url + "/step" + this.step.toString() + ".png"
      );
    this.step+=1
})

When('I write the title with length {int}', async function (value) {
    let element = await this.driver.$('//textarea[@placeholder=\'Post title\'][@class=\'gh-editor-title ember-text-area gh-input ember-view\']');
    await element.setValue(titleRandom(value));
})

Then('I wait message error', async function () {
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
