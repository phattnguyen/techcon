const { deleteChartFragments, setupClinicalSetup } = require('./fragment-helper');
const cypressEnv = require('../cypress.json').env.TEST_ENV;
const env = cypressEnv || 'stage';
const accountJson = require(`../cypress/fixtures/${env}/account.json`);
const targetAssessmentIds = [accountJson.assessmentId,accountJson.assessmentId1,accountJson.assessmentId2,accountJson.assessmentId3];

  targetAssessmentIds.forEach(targetAssessmentId=>{
    return deleteChartFragments(targetAssessmentId)
    .then(setupClinicalSetup(targetAssessmentId))
    .catch(err => {
      console.error(`beforeTest execution error ${err}`);
    });
  })
  
