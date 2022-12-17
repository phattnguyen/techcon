import { defineConfig } from 'cypress'
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  projectId: 'udwajw',
  requestTimeout: 30000,
  responseTimeout: 50000,
  viewportWidth: 1200,
  pageLoadTimeout: 100000,
  viewportHeight: 1000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'mmddyyyy_HHMMssl',
    },
  },
  chromeWebSecurity: false,
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 60000,
  video: false,
  env: {
    TEST_ENV: 'stage',
    adminUsername: '',
    adminPassword: '',
    isLocal: false,
    configPath: '',
    testTimeout: 240,
    allure:true
  },
  retries: 0,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
