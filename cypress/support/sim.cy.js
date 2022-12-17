const simsCy = {};
const simTimeOut = 5000;
const waitTime = 3001;
const faker = require('faker');
const dayjs = require('dayjs');

simsCy.data = jsonFileName => cy.fixture(`${Cypress.env('TEST_ENV')}/${jsonFileName}`);

simsCy.value = jsonFileName => cy.fixture(`generic/${jsonFileName}`);

simsCy.startApp = () => cy.visit('/admin');

simsCy.getButtonByLabel = label => cy.xpath(`//*[@class="c-els-button__text" and text()="${label}"]/parent::button`);

simsCy.getSaveChartButton = () => simsCy.getButtonByLabel('Save Changes');

simsCy.getDiscardChartButton = () => simsCy.getButtonByLabel('Discard Changes');

simsCy.getSavenContinue = () => simsCy.getButtonByLabel('Save and Continue');

simsCy.getCancelButton = () => simsCy.getButtonByLabel('Cancel');

simsCy.getSaveButton = () => simsCy.getButtonByLabel('Save');

simsCy.getCloseButton = () => simsCy.getButtonByLabel('Close');

simsCy.getDeleteButton = () => simsCy.getButtonByLabel('Delete');

simsCy.getOkButton = () => simsCy.getButtonByLabel('OK');

simsCy.getEditButton = () => simsCy.getButtonByLabel('Edit');

simsCy.getSubmitButton = () => simsCy.getButtonByLabel('Submit');

simsCy.getContinueButton = () => simsCy.getButtonByLabel('Continue');

simsCy.getCompleteButton = () => simsCy.getButtonByLabel('Complete');

simsCy.getSetToCurrentButton = () => simsCy.getButtonByLabel('Set to current');

simsCy.getLeaveThisPageBtn = () => simsCy.getButtonByLabel('Leave this Page');

simsCy.getStayOnPageBtn = () => simsCy.getButtonByLabel('Stay on this Page');

simsCy.getViewEHRChartsBtn = () => simsCy.getButtonByLabel('View EHR Charts');

simsCy.getCloseErrorTooltipIcon = () => cy.get('.error-tooltip__close-btn');

simsCy.getErrorTooltip = () => cy.get('.error-tooltip');

//Close button of toast message
simsCy.getCloseToastButton = () => cy.get('svg[class*="u-els-display-block c-els-toast__close"]');

simsCy.getToast = () => cy.get('.c-els-toast__content', { timeout: 80000 });

//Close icon on modal popup
simsCy.getCloseModalIcon = () => cy.xpath('//button[@class="u-els-anchorize c-els-modal__close"]');

simsCy.waitForElememtVisible = (simElement, waitTimeOut) => cy.get(simElement, { timeout: waitTimeOut }).should('be.visible');

simsCy.waitForElememtInvisible = (simElement, waitTimeOut) => cy.get(simElement, { timeout: waitTimeOut }).should('not.be.visible');

simsCy.getAsterisk = fieldLabel =>
  cy
    .get('.chart-input__label-asterisk')
    .parent()
    .contains(fieldLabel);

simsCy.verifyAsteriskOfFieldLabel = label => {
  simsCy.getAsterisk(label).should('exist');
};

//To find number of asterisk symbol of specified label
simsCy.verifyNumberOfAsteriskOfLabel = (label, number) => {
  cy.xpath(`//*[@class='chart-input__label-asterisk']/parent::label[contains(text(),'${label}')]`)
    .its('length')
    .should('equal', number);
};

simsCy.validateSaveChangesButtonStates = isEnabled => {
  if (isEnabled) {
    simsCy.getSaveChartButton().should('be.enabled');
  } else {
    simsCy.getSaveChartButton().should('be.disabled');
  }
};

simsCy.validateSavenContinueButtonStates = isEnabled => {
  if (isEnabled) {
    simsCy.getSavenContinue().should('be.enabled');
  } else {
    simsCy.getSavenContinue().should('be.disabled');
  }
};

simsCy.validateDiscardChangesButtonStates = isEnabled => {
  if (isEnabled) {
    simsCy.getDiscardChartButton().should('be.enabled');
  } else {
    simsCy.getDiscardChartButton().should('be.disabled');
  }
};

simsCy.validateElementVisible = element => {
  element.should('be.visible');
};

simsCy.verifySavedSuccessfully = () => {
  simsCy.getToast().should('contain.text', 'Saved successfully');
};

simsCy.verifyDeletedSuccessfully = () => {
  simsCy.getToast().should('contain.text', 'Deleted successfully');
};

// Faker to generate fake test data
simsCy.randomTime = () => faker.time.recent();
simsCy.randomLorem = () => faker.lorem.text().substring(0, 20);

// Moment to get customed day time
simsCy.currentDate = () => dayjs().format('MM-DD-YYYY');
simsCy.currentTime = () => dayjs().format('HH:MM');
simsCy.nextDate = days =>
  dayjs()
    .add(days, 'd')
    .format('MM-DD-YYYY');
simsCy.prevDate = days =>
  dayjs()
    .subtract(days, 'd')
    .format('MM-DD-YYYY');
simsCy.nextMinutes = minutes =>
  dayjs()
    .add(minutes, 'minutes')
    .format('HH:MM');
simsCy.nextYear = years => dayjs().add(years, 'year');
simsCy.currentDateTime = () => dayjs().format('MM-DD-YYYY HH:MM');
simsCy.getLocalTime = () => {
  var curr = new Date();
  return simsCy.checkTime(curr.getHours()) + ':' + simsCy.checkTime(curr.getMinutes());
};

//Commons
simsCy.clickSaveChanges = () => {
  cy.wait(waitTime); //Remove this once SIMSNG-3204 done
  cy.xpath(`//*[@class="c-els-button__text" and text()="Save Changes"]/parent::button[not(@disabled)]`) //make sure button enable
    .click();
};
simsCy.clickSavenContinue = () => {
  cy.wait(waitTime); //Remove this once SIMSNG-3204 done
  simsCy.getSavenContinue().click();
};
simsCy.clickDiscardChanges = () => {
  cy.wait(waitTime); //Remove this once SIMSNG-3204 done
  simsCy.getDiscardChartButton().each(button => {
    if (Cypress.$(button).css('visibility') === 'visible') {
      cy.wrap(button).click({ force: true });
    }
  });
};
simsCy.clickCancel = () => {
  cy.wait(waitTime); //Remove this once SIMSNG-3204 done
  simsCy.getCancelButton().click();
};
simsCy.clickContinueButton = () => {
  cy.wait(waitTime); //Remove this once SIMSNG-3204 done
  simsCy.getContinueButton().click();
};

simsCy.clickOkButton = () => simsCy.getOkButton().click();
simsCy.clickSave = () => {
  simsCy.getSaveButton().each(button => {
    if (Cypress.$(button).css('visibility') === 'visible') {
      cy.wrap(button).click({ force: true });
    }
  });
};
simsCy.clickDeleteButton = () => simsCy.getDeleteButton().click();
simsCy.clickSubmitButton = () => simsCy.getSubmitButton().click();
simsCy.clickCloseButton = () => simsCy.getCloseButton().click();
simsCy.clickCompleteButton = () => simsCy.getCompleteButton().click();
simsCy.clickViewEHRCharts = () => simsCy.getViewEHRChartsBtn().click();

simsCy.closeErrorTooltipMsg = () =>
  simsCy.getCloseErrorTooltipIcon().each($el => {
    cy.wrap($el).click();
  });
simsCy.openErrorTooltip = () =>
  simsCy.getErrorTooltip().each($el => {
    cy.wrap($el).click();
  });

simsCy.verifyTextPresents = text => {
  cy.xpath(`//*[contains(text(),"${text}")]`).then($e => {
    expect($e).to.be.exist;
  });
};

simsCy.randomNumber = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

//Add zero to hour smaller than 10
simsCy.checkTime = i => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

simsCy.generateFahrenheitValue = () => simsCy.randomNumber(95, 105);
simsCy.generateRespirationValue = () => simsCy.randomNumber(12, 30);
simsCy.generatePulseValue = () => simsCy.randomNumber(50, 150);
simsCy.generateSystolicValue = () => simsCy.randomNumber(80, 130);
simsCy.generateDiastolicValue = () => simsCy.randomNumber(50, 90);
simsCy.generateSaturationValue = () => simsCy.randomNumber(88, 100);
simsCy.generateHeightValue = () => simsCy.randomNumber(1, 6);
simsCy.generateHeightValueInchs = () => simsCy.randomNumber(0, 11);
simsCy.generateHeightValueCm = () => simsCy.randomNumber(50, 250);
simsCy.generateWeightValuePound = () => simsCy.randomNumber(50, 150);
simsCy.generateWeightValueOunces = () => simsCy.randomNumber(0, 15);
simsCy.generateWeightValueKilogram = () => simsCy.randomNumber(5, 150);
simsCy.generateWeightValueGram = () => simsCy.randomNumber(0, 999);

//Intake / Output
simsCy.generateIntakeAmount = () => simsCy.randomNumber(10, 100);
simsCy.generateIntravenousFluids = () => simsCy.randomNumber(10, 100);
simsCy.generateMiscellaneous = () => simsCy.randomNumber(10, 100);
simsCy.generateMealsConsumed = () => simsCy.randomNumber(10, 100);
simsCy.generateOutputAmount = () => simsCy.randomNumber(10, 100);

//Blood glucose
simsCy.generateGlucoseReading = () => simsCy.randomNumber(0, 100);
simsCy.reload = () => cy.reload();

module.exports = simsCy;
