const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { scenarios_route_cypress,scenarios_route_kraken, scenarios, options } = config;

async function executeTest() {
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");
  let locationscreenshotCurVer={}
  let locationscreenshotOldVer={}
  for (let i = 0; i < scenarios.length; i++) {
    let resultStepInfo = {};
    if (!fs.existsSync(`./results`)) {
      fs.mkdirSync(`./results`, { recursive: true });
    }
    locationscreenshotCurVer[scenarios[i]]=`../kraken/results/4.47/${scenarios_route_kraken[i]}`
    locationscreenshotOldVer[scenarios[i]]=`../cypress/screenshots/pruebas-de-regresion/3.42/${scenarios_route_cypress[i]}/`
    const fileCountVerCurrent = fs.readdirSync(
        locationscreenshotCurVer[scenarios[i]]).length;
    const fileCountVerOld = fs.readdirSync(
        locationscreenshotOldVer[scenarios[i]]
    ).length;

    if (fileCountVerCurrent == fileCountVerOld) {
      for (let j = 1; j <= fileCountVerCurrent; j++) {
        const data = await compareImages(
          fs.readFileSync(
            `${locationscreenshotCurVer[scenarios[i]]}/step${j}.png`
          ),
          fs.readFileSync(
            `${locationscreenshotOldVer[scenarios[i]]}/step${j}.png`
          ),
          options
        );
        resultStepInfo[`step${j}`] = {
          isSameDimensions: data.isSameDimensions,
          dimensionDifference: JSON.stringify(data.dimensionDifference),
          rawMisMatchPercentage: data.rawMisMatchPercentage,
          misMatchPercentage: data.misMatchPercentage,
          diffBounds: JSON.stringify(data.diffBounds),
          analysisTime: data.analysisTime,
        };
        if (
          !fs.existsSync(
            `./results/compare-${scenarios[i].replace(/\s/g, "_")}`
          )
        ) {   
          fs.mkdirSync(
            `./results/compare-${scenarios[i].replace(/\s/g, "_")}`,
            { recursive: true }
          );
        }
        fs.writeFileSync(
          `./results/compare-${scenarios[i].replace(/\s/g, "_")}/step${j}.png`,
          data.getBuffer()
        );
      }
    }

    resultInfo[scenarios[i]] = resultStepInfo;
  }
  fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo, locationscreenshotCurVer,locationscreenshotOldVer));
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function stepsInfo(key, info,scenario,locationscreenshotCurVer,locationscreenshotOldVer){
   

  return ` <h3>${key}</h3>
  <p>data: ${JSON.stringify(info)}</p>
  <div class="col">
    <h4>Actual</h4>
    <img src="../${locationscreenshotCurVer}/${key}.png" class="img-fluid" alt="..." />
  </div>
  <div class="col">
    <h4>Antigua</h4>
    <img src="../${locationscreenshotOldVer}${key}.png" class="img-fluid" alt="..." />
  </div>

  <div class="row">
    <div class="col">
      <h4>Comparacion</h4>
      <img src="${ `./compare-${scenario.replace(/\s/g, "_")}/${key}.png`}" class="img-fluid" alt="..." />
    </div>
  </div>`;
}
function info(scenario, steps,locationscreenshotCurVer,locationscreenshotOldVer) {
  console.log(scenario)
  let active = scenario === config.scenarios[0] ? "active" : "fade";
  let stepsinfo=""

    for(var[key,value] of Object.entries(steps)){

        stepsinfo=stepsinfo+stepsInfo(key,value,scenario,locationscreenshotCurVer[scenario],locationscreenshotOldVer[scenario])
    }
   
  return `<div id="${scenario.replace(/\s/g, "_")}" class="container tab-pane ${active}">
<br />
<h3>${scenario}</h3>
<div class="container">
  <div class="row">
   ${stepsinfo}
  </div>
</div>
</div>`;
}
function scenariosList(scenario) {
  if (scenario === config.scenarios[0]) {
    return `<li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#${scenario.replace(/\s/g, "_")}">${scenario}</a>
  </li>`;
  } else {
    return `<li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#${scenario.replace(/\s/g, "_")}">${scenario}</a>
  </li>`;
  }
}

function createReport(datetime, resInfo, locationscreenshotCurVer,locationscreenshotOldVer) {
  return `
  <html>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <div class="container mt-3">
      <h2> Version actual(4.47)
      <a href="${config.urlActual}"> ${config.urlActual}</a></h2><br>
      <h2> Version anterior(3.42)
      <a href="${config.urlAnterior}"> ${config.urlAnterior}</a></h2>
      <p>Executed: ${datetime}</p>
      <br />
      <ul class="nav nav-tabs" role="tablist">
        ${config.scenarios.map((scenario) => scenariosList(scenario))}
      </ul>
      <div class="tab-content">
        ${config.scenarios.map((scenario) => info(scenario, resInfo[scenario],locationscreenshotCurVer,locationscreenshotOldVer))}
      </div>
    </div>
  </body>
</html>`;
}
