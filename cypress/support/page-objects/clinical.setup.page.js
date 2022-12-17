const simsCy = require('../../support/sim.cy');

//Labels

const pageTitle = '.clinical-setup__header';
const sexTooltip = '//div[contains(@class,"c-els-tooltip-container")]';
const sexTooltipContent = '.c-els-tooltip__window';

const txtFirstDayofClinical = '#field-input-clinicalFirstDay';
const txtPatientIndetifier = '#field-input-patientIdentifier';
const cbSex = '#field-input-patientSex';
const txtDateofBirth = '#field-input-patientDateOfBirth';
const txtInitials = '#field-input-providerFirstLastInitial';
const textAvatar = '.clinical-setup__avatar-text';
const patientRibbon = '.patient-ribbon__patient-info > :nth-child(1) > .o-els-flex-layout';
const lbFirstDayofClinical = '#chart-field-label-clinicalFirstDay';
const lbPatientIndetifier = '#chart-field-label-patientIdentifier';
const lbSex = '#chart-field-label-patientSex';
const lbDateofBirth = '#chart-field-label-patientDateOfBirth';
const lbInitials = '#chart-field-label-providerFirstLastInitial';
const clinicalUnitSection = 'div[id="chart-field-label-clinicalUnit"]';

//errorMessage & Tooltip:
const tooltipFirstDayError = '#chart-field-errors-clinicalFirstDay .u-els-color-error';
const tooltippatientIndetifierError = '#chart-field-errors-patientIdentifier .u-els-color-error';
const tooltipSexError = '#chart-field-errors-patientSex .u-els-color-error';
const tooltipBirthDayError = '#chart-field-errors-patientDateOfBirth .u-els-color-error';
const tooltipInitialsError = '#chart-field-errors-providerFirstLastInitial .u-els-color-error';
const boxTopErrorArea = '.u-els-anchorize';

const clinicalSetupPage = {
  // Buttons
  getStartChartingButton: () => simsCy.getButtonByLabel('Start Charting'),
  getContinueButton: () => simsCy.getButtonByLabel('Continue'),
  getEditButton: () => simsCy.getButtonByLabel('Edit'),
  getTopError: () => cy.get(boxTopErrorArea),
  gettooltipFirstDayError: () => cy.get(tooltipFirstDayError),
  gettooltippatientIndetifierError: () => cy.get(tooltippatientIndetifierError),
  gettooltipSexError: () => cy.get(tooltipSexError),
  gettooltipBirthDayError: () => cy.get(tooltipBirthDayError),
  gettooltipInitialsError: () => cy.get(tooltipInitialsError),
  getlbFirstDayofClinical: () => cy.get(lbFirstDayofClinical),
  getlbPatientIndetifier: () => cy.get(lbPatientIndetifier),
  getlbSex: () => cy.get(lbSex),
  getlbDateofBirth: () => cy.get(lbDateofBirth),
  getlbInitials: () => cy.get(lbInitials),

  //Input fields
  getFirstDayOfClinical: () => cy.get(txtFirstDayofClinical),
  getPatientInfo: () => cy.get(txtPatientIndetifier),
  getDateOfBirth: () => cy.get(txtDateofBirth),
  getProviderInfo: () => cy.get(txtInitials),

  //Label
  getPageTitle: () => cy.get(pageTitle),
  getTooltip: () => cy.xpath(sexTooltip),
  getTooltipContent: () => cy.get(sexTooltipContent),

  enterClinicalInfo(firstdayclinical) {
    cy.get(txtFirstDayofClinical)
      .clear()
      .type(firstdayclinical);
    cy.get(textAvatar).click();
    // this.enterClinicalUnit(unit);
  },
  enterPatientInfo(patientIndentifier, sex, dateofBirth) {
    if (patientIndentifier != null) {
      cy.get(txtPatientIndetifier)
        .focus()
        .type(patientIndentifier);
    }

    if (sex != null) {
      clinicalSetupPage.selectSex(sex);
    }

    if (dateofBirth != null) {
      cy.get(txtDateofBirth).type(dateofBirth);
      cy.get(textAvatar).click();
    }
  },
  enterProviderInfo(firstnlastInitial) {
    if (firstnlastInitial != null) {
      cy.get(txtInitials).type(firstnlastInitial);
    }
  },

  selectSex: sex => cy.get(cbSex).select(sex),

  //Start Charting and select Continue button
  startChartingwithContinue() {
    cy.waitFor(this.getStartChartingButton());
    this.getStartChartingButton()
      .focus()
      .click();
    this.getContinueButton().click();
  },
  validateClinicalSetupSaved(message) {
    simsCy.getToast().should($e => {
      // should show toast message
      expect($e).to.contain(message);
    });
  },

  selectClinicalUnit(...options) {
    options.forEach(option => {
      let xpath = `//span[text()='${option}']/ancestor::label/input`;
      cy.get('body').then(() => {
        const clinUnitSection = Cypress.$(clinicalUnitSection).length;
        if (!clinUnitSection == 0) {
          cy.xpath(xpath).check({ force: true });
        } else {
          cy.log('Clinical unit flag turned off');
        }
      });
    });
  },

  validateAllFieldDisplayed() {
    clinicalSetupPage
      .getPageTitle()
      .contains('Clinical Setup')
      .should('be.visible');
    simsCy.verifyTextPresents('Complete the following information to begin patient charting.');
    simsCy.verifyTextPresents('All fields are required');
    simsCy.verifyTextPresents('Clinical info');
    simsCy.verifyTextPresents('Patient info');
    simsCy.verifyTextPresents('Patient identifier (2 characters required, alpha or numeric)');
    simsCy.verifyTextPresents('Avatar');
    simsCy.verifyTextPresents('Sex');
    simsCy.verifyTextPresents('Date of birth');
    simsCy.verifyTextPresents('Provider info');
    simsCy.verifyTextPresents('First and last initial');
    simsCy.verifyTextPresents('Student info');
    simsCy.verifyTextPresents('First initial');
    simsCy.verifyTextPresents('Last name');
    simsCy.verifyTextPresents('HIPAA Compliance');
    simsCy.verifyTextPresents(
      "Note: To ensure compliance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the standards for privacy of individually identifiable health information, it is imperative that you refrain from using a patient's identifying information. This includes information such as a patient's real initials, birth date, room number, and medical record number."
    );

    cy.wait(1000);
    clinicalSetupPage.getTooltip().click();
    clinicalSetupPage
      .getTooltipContent()
      .should(
        'have.text',
        "Patient's legal sex is what is listed on their government issued ID. This includes passports, driver's licenses, green cards, and other forms of official identification."
      );
    clinicalSetupPage.selectSex('Male');
    clinicalSetupPage.selectSex('Female');
  },

  verifyStartChartingEnabled: yes => {
    yes ? clinicalSetupPage.getStartChartingButton().should('be.enabled') : clinicalSetupPage.getStartChartingButton().should('be.disabled');
  },

  clearAllFields: () => {
    clinicalSetupPage.getFirstDayOfClinical().clear({ force: true });
    clinicalSetupPage.getPatientInfo().clear({ force: true });
    clinicalSetupPage.getDateOfBirth().clear({ force: true });
    clinicalSetupPage.getProviderInfo().clear({ force: true });
    clinicalSetupPage.selectSex('');
  },

  clickStartCharting: () => clinicalSetupPage.getStartChartingButton().click(),
  verifyErrorMsgFirstDay: msg => clinicalSetupPage.gettooltipFirstDayError().should('have.text', msg),
  verifyErrorMsgPatientinfo: msg => clinicalSetupPage.gettooltippatientIndetifierError().should('have.text', msg),
  verifyErrorMsgBirth: msg => clinicalSetupPage.gettooltipBirthDayError().should('have.text', msg),
  verifyErrorMsgSex: msg => clinicalSetupPage.gettooltipSexError().should('have.text', msg),
  verifyErrorMsgProviderInfo: msg => clinicalSetupPage.gettooltipInitialsError().should('have.text', msg),
  enterClinicalFirstDay: date => clinicalSetupPage.getFirstDayOfClinical().type(date),
  verifySavedSuccessfully: () => simsCy.verifySavedSuccessfully()
};
module.exports = clinicalSetupPage;
