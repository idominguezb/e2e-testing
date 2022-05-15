const { Given, When, Then, Before } = require("@cucumber/cucumber");
var fs = require("fs");

Before(function (scenario) {
  let escenario = scenario.pickle.name.replace(/\s/g, "_");
  
    this.version = scenario.gherkinDocument.feature.name.includes("3.42")
    ? "3.42"
    : "4.47";
  this.url = "./results/" + this.version + "/" + escenario;
  if (!fs.existsSync(this.url)) {
    fs.mkdirSync(this.url, { recursive: true });
  }
  this.step = 1;

});
Given("I navigate to {kraken-string}", async function (home) {
    await this.driver.setWindowSize(1280, 720)
  return await this.driver.navigateTo(home);
});



When("I enter email {kraken-string}", async function (email) {
 let id=this.version==="3.42"?"#ember8":"#ember7"
 
  let element = await this.driver.$(id);
  return await element.setValue(email);
});

Then("I take a screenshot", async function () {
  await this.driver.saveScreenshot(
    this.url + "/step"+ this.step.toString() + ".png"
  );
  this.step += 1;
});
