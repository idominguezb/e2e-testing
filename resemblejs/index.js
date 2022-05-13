import compareImages from "resemblejs/compareImages.js"

const config = "./config.json";
import fs from "fs";

const {viewportHeight, viewportWidth, scenarios, options} = config;

async function executeTest() {
    let resultInfo = {}
    const {viewportHeight, viewportWidth, browsers, options} = config;

    let scenarios = ["post.spec.js/scenario_createPost", "post.spec.js/scenario_createPostProgrammed"];
    console.log('scenarios: ' + scenarios.length)

    for (let scenario of scenarios) {
        const fileCountVerCurrent = fs.readdirSync(`../cypress/screenshots/pruebas-de-regresion/4.47/${scenario}/`).length
        const fileCountVerOld = fs.readdirSync(`../cypress/screenshots/pruebas-de-regresion/3.42/${scenario}/`).length
        if (fileCountVerCurrent === fileCountVerOld) {
            for (let i = 1; i <= fileCountVerCurrent; i++) {
                const data = await compareImages(
                    fs.readFileSync(`../cypress/screenshots/pruebas-de-regresion/4.47/${scenario}/step${i}.png`),
                    fs.readFileSync(`../cypress/screenshots/pruebas-de-regresion/3.42/${scenario}/step${i}.png`),
                    options
                );
                resultInfo['scenario_createPost'] = {
                    isSameDimensions: true,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: 100,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime
                }
                if (!fs.existsSync(`../cypress/screenshots/compare/pruebas-de-regresion/${scenario}-compare/`)) {
                    fs.mkdirSync(`../cypress/screenshots/compare/pruebas-de-regresion/${scenario}-compare/`, {recursive: true});
                }
                fs.writeFileSync(`../cypress/screenshots/compare/pruebas-de-regresion/${scenario}-compare/compare-step${i}.png`, data.getBuffer());
            }
        } else console.log(`El escenario ${scenario} no tiene la misma cantidad de screenshots en las dos versiones comparada.`);
    }
    // fs.writeFileSync(`./cypress/screenshots/${datetime}/report.html`, createReport(datetime, resultInfo));
    // fs.copyFileSync('./index.css', `./cypress/screenshots/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}

(async () => console.log(await executeTest()))();

