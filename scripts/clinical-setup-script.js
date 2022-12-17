const { setupClinicalSetup } = require('./fragment-helper');
const cypressEnv = require('../cypress.json').env.TEST_ENV;
const env = cypressEnv || 'stage';
const accountJson = require(`../cypress/fixtures/${env}/account.json`);
const targetAssessmentIds = [accountJson.assessmentId,accountJson.assessmentId1];

targetAssessmentIds.forEach(targetAssessmentId=>{
    setupClinicalSetup(targetAssessmentId).catch(err => console.log(err));
})
