const fs = require('fs');
const path = require('path');

console.log('pre build');

try {
  const testEnv = process.env.APP_TEST_ENV || 'stage';
  const testTimeout = parseInt(process.env.TEST_TIMEOUT || '0');
  const grepTags = (process.env.TAGS || '').trim();
  const cypressJson = require('../cypress.json');
  const cypressJsonForOpenShift = { ...cypressJson, env: { ...cypressJson.env, TEST_ENV: testEnv, grepTags } };
  if (testTimeout) {
    cypressJsonForOpenShift.env.testTimeout = testTimeout;
  }
  fs.writeFileSync(path.join(__dirname, '../cypress.json'), JSON.stringify(cypressJsonForOpenShift, null, 2));
  console.log('Cypress config');
  console.log(cypressJsonForOpenShift);
} catch (err) {
  console.error(err);
}
