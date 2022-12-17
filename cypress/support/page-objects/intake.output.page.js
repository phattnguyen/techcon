const simsCy = require('../sim.cy');
const vitalSignsPage = require('./vital.sign.vital.signs.page');

//Intake section
const intakeType = '#field-input-intakeType';
const intakeTypeOtherInput = '#field-input-intakeTypeOther';
const intakeAmount = '#field-input-intakeAmount';

//Intravenous Fluids section
const intravenousFluidsType = '#field-input-intravenousFluidsType';
const intrAmount = '#field-input-intravenousFluidsAmount';

//Miscellaneous section
const misType = '#field-input-miscellaneousType';
const misTypeOtherInput = '#field-input-miscellaneousTypeOther';
const misAmount = '#field-input-miscellaneousAmount';

//Meals section
const mealType = '#field-input-mealsType';
const mealConsume = '#field-input-mealsConsumed';

//Output section
const volumeRadioBtn = '//div[@id="field-wrap-outputMeasure-volume"]//input[@type="radio"]';
const volType = '#field-input-outputVolumeType';
const volTypeOtherInput = '#field-input-outputVolumeTypeOther';
const volAmount = '#field-input-outputVolumeAmount';

const frequencyRadioBtn = '//div[@id="field-wrap-outputMeasure-frequency"]//input[@type="radio"]';
const freType = '#field-input-outputFrequencyType';
const freTypeOtherInput = '#field-input-outputFrequencyTypeOther';
const freNumber = '#field-input-outputFrequencyNumber';
const freSize = '#field-input-outputFrequencySize';

//Notes
const noteTxtField = '#field-input-note';

const intakeOutputPage = {
  getIntakeType: () => cy.get(intakeType),
  getIntakeAmount: () => cy.get(intakeAmount),
  getIntakeOtherField: () => cy.get(intakeTypeOtherInput),

  getIntrFludisType: () => cy.get(intravenousFluidsType),
  getIntrAmount: () => cy.get(intrAmount),

  getMiscType: () => cy.get(misType),
  getMiscAmount: () => cy.get(misAmount),
  getMiscOtherFiled: () => cy.get(misTypeOtherInput),

  getMealsType: () => cy.get(mealType),
  getMealsConsume: () => cy.get(mealConsume),

  getOutputVolume: () => cy.xpath(volumeRadioBtn),
  getOutputVolumeType: () => cy.get(volType),
  getOutputVolumeAmount: () => cy.get(volAmount),

  getOutputFrequency: () => cy.xpath(frequencyRadioBtn),
  getOutputFrequencyType: () => cy.get(freType),
  getOutputFrequencyNumber: () => cy.get(freNumber),
  getOutputFrequencySize: () => cy.get(freSize),
  getVolumeOtherField: () => cy.get(volTypeOtherInput),
  getFrequencyOtherField: () => cy.get(freTypeOtherInput),

  getNotesTxtArea: () => cy.get(noteTxtField),

  //------------------------method-----------------------------------------
  clickSaveChange: () => simsCy.clickSaveChanges(),
  clickDiscardChange: () => simsCy.clickDiscardChanges(),
  clickCancel: () => simsCy.clickCancel(),
  clickOk: () => simsCy.clickOkButton(),
  verifyAllFieldsDisplayed: () => {
    vitalSignsPage.verifyChartName('Intake - Output');
    simsCy.verifyTextPresents('Chart Inputs');
    simsCy.verifyTextPresents('Intake');
    simsCy.verifyTextPresents('Intravenous Fluids');
    simsCy.verifyTextPresents('Miscellaneous');
    simsCy.verifyTextPresents('Meals');
    simsCy.verifyTextPresents('Output');
    simsCy.verifyTextPresents('Notes');

    intakeOutputPage.getIntakeType().should('exist');
    intakeOutputPage.getIntakeType().select('Other');
    intakeOutputPage.getIntakeAmount().should('exist');
    intakeOutputPage.getIntakeOtherField().should('exist');

    intakeOutputPage.getIntrFludisType().should('exist');
    intakeOutputPage.getIntrAmount().should('exist');

    intakeOutputPage.getMiscType().should('exist');
    intakeOutputPage.getMiscType().select('Other');
    intakeOutputPage.getMiscOtherFiled().should('exist');
    intakeOutputPage.getMiscAmount().should('exist');

    intakeOutputPage.getMealsType().should('exist');
    intakeOutputPage.getMealsConsume().should('exist');

    intakeOutputPage.selectOutputVolume();
    intakeOutputPage.getOutputVolumeType().should('exist');
    intakeOutputPage.getOutputVolumeAmount().should('exist');

    intakeOutputPage.selectOutputFrequency();
    intakeOutputPage.getOutputFrequencyType().should('exist'),
      intakeOutputPage.getOutputFrequencyNumber().should('exist'),
      intakeOutputPage.getOutputFrequencySize().should('exist'),
      intakeOutputPage.getNotesTxtArea().should('exist');

    simsCy.verifyTextPresents('Total Per Day');
    simsCy.verifyTextPresents('Chart History');
    simsCy.verifyTextPresents('Chart Graph');
  },

  selectOutputVolume: () => intakeOutputPage.getOutputVolume().click({ force: true }),
  selectOutputFrequency: () => intakeOutputPage.getOutputFrequency().click({ force: true }),

  selectIntakeType: type => intakeOutputPage.getIntakeType().select(type),
  selectIntrFluidsType: type => intakeOutputPage.getIntrFludisType().select(type),
  selectMiscType: type => intakeOutputPage.getMiscType().select(type),
  selectMealType: type => intakeOutputPage.getMealsType().select(type),

  selectVolumeType: type => intakeOutputPage.getOutputVolumeType().select(type),
  selectFrequencyType: type => intakeOutputPage.getOutputFrequencyType().select(type),
  selectFrequencyNumber: num => intakeOutputPage.getOutputFrequencyNumber().select(num),
  selectFrequencySize: size => intakeOutputPage.getOutputFrequencySize().select(size),

  enterIntakeAmount: amount => {
    intakeOutputPage.getIntakeAmount().clear();
    intakeOutputPage.getIntakeAmount().type(amount);
  },

  verifyIntakeAmountValue: amount => {
    intakeOutputPage.getIntakeAmount().should('have.value', amount);
  },

  enterIntakeOtherType: type => {
    intakeOutputPage.getIntakeOtherField().clear();
    intakeOutputPage.getIntakeOtherField().type(type);
  },

  verifyIntakeOtherType: type => {
    intakeOutputPage.getIntakeOtherField().should('have.value', type);
  },

  enterIntrFluidsAmount: amount => {
    intakeOutputPage.getIntrAmount().clear();
    intakeOutputPage.getIntrAmount().type(amount);
  },
  verifyIntrFluidsAmount: amount => {
    intakeOutputPage.getIntrAmount().should('have.value', amount);
  },

  enterMiscellaneousAmount: amount => {
    intakeOutputPage.getMiscAmount().clear();
    intakeOutputPage.getMiscAmount().type(amount);
  },

  verifyMiscellaneousAmount: amount => {
    intakeOutputPage.getMiscAmount().should('have.value', amount);
  },

  enterMealConsume: cons => {
    intakeOutputPage.getMealsConsume().clear();
    intakeOutputPage.getMealsConsume().type(cons);
  },

  verifyMealConsume: cons => {
    intakeOutputPage.getMealsConsume().should('have.value', cons);
  },

  enterNotes: note => {
    intakeOutputPage.getNotesTxtArea().clear();
    intakeOutputPage.getNotesTxtArea().type(note);
  },

  verifyNotes: note => {
    intakeOutputPage.getNotesTxtArea().should('have.text', note);
  },

  enterVolumeAmount: amount => {
    intakeOutputPage.getOutputVolumeAmount().clear();
    intakeOutputPage.getOutputVolumeAmount().type(amount);
  },

  verifyVolumeAmount: amount => {
    intakeOutputPage.getOutputVolumeAmount().should('have.value', amount);
  },

  enterVolumeOtherType: type => {
    intakeOutputPage.getVolumeOtherField().clear();
    intakeOutputPage.getVolumeOtherField().type(type);
  },

  enterFrequencyOtherType: type => {
    intakeOutputPage.getFrequencyOtherField().clear();
    intakeOutputPage.getFrequencyOtherField().type(type);
  }
};
module.exports = intakeOutputPage;
