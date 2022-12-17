const cbLastMeal = '#field-input-timeLastMeal';
const txtGlucoseReading = '#field-input-glucoseReading';
const ckFirstNursingAction = '.c-els-field__label-text-content';
const boxTopError = '.u-els-anchorize.c-els-link';
const lbTimeSinceLastMeal = '#chart-field-label-timeLastMeal';
const lbGlucoseReading = '#chart-field-label-glucoseReading';
const txtNotes = '#field-input-note';
const tooltipGlucoseReading = '#chart-field-errors-glucoseReading .u-els-color-error';

const bloodGlucosePage = {
  getLastMeal: () => cy.get(cbLastMeal, { timeout: 60000 }),
  getGlucoseReading: () => cy.get(txtGlucoseReading),
  getFirstNursingAction: () => cy.get(ckFirstNursingAction).first(),
  getTopError: () => cy.get(boxTopError),
  getTimeSinceLastMealLabel: () => cy.get(lbTimeSinceLastMeal),
  getGlucoseReadingLabel: () => cy.get(lbGlucoseReading),
  getNotes: () => cy.get(txtNotes),
  getErrorGlucoseTooltip: () => cy.get(tooltipGlucoseReading),

  //Validation BloodGlucose Reading error box
  validateBloodGlucoseError() {
    this.getTopError().should('have.text', 'Glucose Reading');
  },

  validateLabelChangeToRed() {
    this.getGlucoseReadingLabel().should('have.css', 'color', 'rgb(200, 55, 39)');
  },

  // tooltip should show glucose reading error message

  validateBloodGlucoseTooltip() {
    this.getErrorGlucoseTooltip().should('have.text', 'Should be a positive whole number');
  }
};
module.exports = bloodGlucosePage;
