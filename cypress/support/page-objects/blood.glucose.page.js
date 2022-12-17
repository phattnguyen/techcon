const simsCy = require('../sim.cy');
const vitalSignsPage = require('./vital.sign.vital.signs.page');

const timeSinceLastMeal = '#field-input-timeLastMeal';
const glucoseReading = '#field-input-glucoseReading';
const nurseActionLabel = '#chart-field-label-nursingActions';

const nurseActions = '.c-els-field__label-text-content';

const checkedNurseAction = '//input[@checked]/parent::label//span[@class="c-els-field__label-text-content"]';

//Notes
const noteTxtField = '#field-input-note';

const bloodGlusecosePage = {
  getTimeSinceLastMeal: () => cy.get(timeSinceLastMeal),
  getReadingGlucose: () => cy.get(glucoseReading),
  getNurseActionLabel: () => cy.get(nurseActionLabel),
  getNotesTxtArea: () => cy.get(noteTxtField),
  getNurseActionOptions: () => cy.get(nurseActions),
  getCheckedNurseAction: () => cy.xpath(checkedNurseAction),

  //------------------------method-----------------------------------------
  verifyAllFieldsDisplayed: () => {
    vitalSignsPage.verifyChartName('Blood Glucose');
    simsCy.verifyTextPresents('Time since last meal');
    simsCy.verifyTextPresents('Glucose Reading (mg/dL)');
    simsCy.verifyTextPresents('Notes');
    simsCy.verifyTextPresents('Chart History');
    simsCy.verifyTextPresents('Chart Graph');

    bloodGlusecosePage.getTimeSinceLastMeal().should('exist');
    bloodGlusecosePage.getReadingGlucose().should('exist');
    bloodGlusecosePage.getNotesTxtArea().should('exist');

    simsCy.verifyAsteriskOfFieldLabel('Glucose Reading (mg/dL)');
    simsCy.verifyAsteriskOfFieldLabel('Time since last meal');
  },

  enterGlucoseReading: val => {
    bloodGlusecosePage.getReadingGlucose().clear();
    bloodGlusecosePage.getReadingGlucose().type(val);
  },
  enterNotes: note => bloodGlusecosePage.getNotesTxtArea().type(note),

  selectNurseAction: option =>
    bloodGlusecosePage
      .getNurseActionOptions()
      .contains(option)
      .click(),
  selectTimeSinceLastMeal: val => bloodGlusecosePage.getTimeSinceLastMeal().select(val),
  verifyNurseActionDisplay: yes => {
    yes ? bloodGlusecosePage.getNurseActionLabel().should('exist') : bloodGlusecosePage.getNurseActionLabel().should('not.exist');
  },

  verifyGlucoseValue: val => bloodGlusecosePage.getReadingGlucose().should('have.value', val),
  verifyNotesValue: val => bloodGlusecosePage.getNotesTxtArea().should('have.text', val),
  verifySelectedNurseAction: val => bloodGlusecosePage.getCheckedNurseAction().should('contain.text', val),
  verifyNurseActionIsSelected: (val, isSelected) => {
    isSelected
      ? bloodGlusecosePage
          .getCheckedNurseAction()
          .contains(val)
          .should('be.visible')
      : bloodGlusecosePage
          .getCheckedNurseAction()
          .contains(val)
          .should('not.exist');
  },
  verifyNurseActionsReset: () => cy.xpath(checkedNurseAction).should('not.exist')
};
module.exports = bloodGlusecosePage;
