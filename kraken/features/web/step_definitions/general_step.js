const { Given, When, Then, Before } = require("@cucumber/cucumber");
var fs = require("fs");

Before(function (scenario) {
  let escenario = scenario.pickle.name.replace(/\s/g, "");
  console.log(scenario);
  let version = scenario.gherkinDocument.feature.name.includes("4.47")
    ? "4.47"
    : "3.42";
  this.url = "./results/" + version + "/" + escenario;
  if (!fs.existsSync(this.url)) {
    fs.mkdirSync(this.url, { recursive: true });
  }
  this.step = 1;
});
Given("I navigate to {kraken-string}", async function (home) {
  return await this.driver.navigateTo(home);
});



When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember7");
  return await element.setValue(email);
});

Then("I take a screenshot", async function () {
  await this.driver.saveScreenshot(
    this.url + "/" + this.step.toString() + ".png"
  );
  this.step += 1;
});
