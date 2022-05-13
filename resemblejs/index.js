import compareImages from "resemblejs/compareImages.js"

const config = "./config.json";
import fs from "fs";

const {viewportHeight, viewportWidth, browsers, options} = config;

let scenarios = ["post.spec.js/scenario_createPost", "post.spec.js/scenario_createPostProgrammed"];

async function executeTest() {
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g, ".");
    const {viewportHeight, viewportWidth, browsers, options} = config;

    for (let scenario of scenarios) {
        const fileCountVerCurrent = fs.readdirSync(`./cypress/screenshots/pruebas-de-regresion/4.47/${scenario}/`).length
        const fileCountVerOld = fs.readdirSync(`./cypress/screenshots/pruebas-de-regresion/3.42/${scenario}/`).length
        if (fileCountVerCurrent === fileCountVerOld) {
            for (let i = 1; i <= fileCountVerCurrent; i++) {
                const data = await compareImages(
                    fs.readFileSync(`./cypress/screenshots/pruebas-de-regresion/4.47/${scenario}/step${i}.png`),
                    fs.readFileSync(`./cypress/screenshots/pruebas-de-regresion/3.42/${scenario}/step${i}.png`),
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
                if (!fs.existsSync(`./cypress/screenshots/compare/pruebas-de-regresion/${scenario}-compare/`)) {
                    fs.mkdirSync(`./cypress/screenshots/compare/pruebas-de-regresion/${scenario}-compare/`, {recursive: true});
                }
                fs.writeFileSync(`./cypress/screenshots/compare/pruebas-de-regresion/${scenario}-compare/compare-step${i}.png`, data.getBuffer());
            }
        } else console.log(`El escenario ${scenario} no tiene la misma cantidad de screenshots en las dos versiones comparada.`);
    }
    fs.writeFileSync(`./cypress/screenshots/compare/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./cypress/screenshots/compare/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}

(async () => console.log(await executeTest()))();

function browser(b, info){
    // return
    let cadenaUno = `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>`;

    const fileCountVerCurrent = fs.readdirSync(`./cypress/screenshots/pruebas-de-regresion/4.47/${b}/`).length

    let paso = '';
    for (let i = 1; i <= fileCountVerCurrent ; i++) {
        paso = paso + `<div className="imgline">
            <div className="imgcontainer">
                <span className="imgname">Reference</span>
                <img className="img2" src="../../screenshots/pruebas-de-regresion/4.47/${b}/step${i}.png" id="refImage" label="Reference">
            </div>
            <div className="imgcontainer">
                <span className="imgname">Test</span>
                <img className="img2" src="../../screenshots/pruebas-de-regresion/3.42/${b}/step${i}.png" id="testImage" label="Test">
            </div>
        </div>`;
    }

    //   <div class="imgline">
    //     <div class="imgcontainer">
    //       <span class="imgname">Diff</span>
    //       <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
    //     </div>
    //   </div>
    // </div>`
    return cadenaUno + paso;
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${scenarios.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}
