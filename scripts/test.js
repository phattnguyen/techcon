require('make-promises-safe');
const process = require('process');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const cypress = require('cypress');
const cypressJson = require('../cypress.json');
const preTest = require('./pre-test');

let isTestDone = false;
let maxTimeOfTest = cypressJson.env.testTimeout * 60 * 1000;

console.log('Automation start');
console.log(`Maximum time for test is ${cypressJson.env.testTimeout} minutes`);

setTimeout(() => {
  if (!isTestDone) {
    console.log('Exiting test');
    process.kill(process.pid, 'SIGINT');
  }
}, maxTimeOfTest);

rimraf.sync(path.join(__dirname, '..', 'cypress/reports'));
rimraf.sync(path.join(__dirname, '..', 'cypress/screenshots'));
rimraf.sync(path.join(__dirname, '..', 'cypress/videos'));
fs.mkdirSync(path.join(__dirname, '..', 'cypress/reports/mochareports'), { recursive: true });

console.log('Create report directory done');

// test build './cypress/integration/features/charts/vital-sign/clinical-setup/clinical.setup.spec.js'
// all tests './cypress/integration/features/charts/**/*.js'
// ./cypress/integration/features/charts/vital-sign/intake-output/intake.output.saved.spec.js
preTest.beforeTest().finally(() =>
  cypress
    .run({ spec: ['./cypress/integration/features/charts/**/*.js'], browser: 'chrome', headless: true })
    .then(() => console.log('Automation tests are done'))
    .then(() => {
      try {
        console.log('copy index page');
        fs.copyFileSync(path.resolve(__dirname, 'index.html'), path.resolve(__dirname, '../cypress/reports/mochareports', 'index.html'));
      } catch (err) {
        console.error('can not copy index page');
      }
    })
    .then(() => process.exit())
    .catch(err => {
      console.log(`automation test fail ${err}`);
      process.exit();
    })
    .finally(() => (isTestDone = true))
);
