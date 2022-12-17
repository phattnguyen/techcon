import checkBox from '../../element-helpers/checkbox.el';
import textArea from '../../element-helpers/text.area.el';

import table from '../../element-helpers/table.el';
import BasePage from '../base.page';

const dataTable = new table();
const medicationOneTextBox = new textArea('#field-input-medicationOne');
const medicationTwoTextBox = new textArea('#field-input-medicationTwo');
const medicationThreeTextBox = new textArea('#field-input-medicationThree');
const medicationFourTextBox = new textArea('#field-input-medicationFour');
const directionsOneTextBox = new textArea('#field-input-directionsOne');
const directionsTwoTextBox = new textArea('#field-input-directionsTwo');
const directionsThreeTextBox = new textArea('#field-input-directionsThree');
const directionsFourTextBox = new textArea('#field-input-directionsFour');
const indicationsOneTextBox = new textArea('#field-input-indicationsOne');
const indicationsTwoTextBox = new textArea('#field-input-indicationsTwo');
const indicationsThreeTextBox = new textArea('#field-input-indicationsThree');
const indicationsFourTextBox = new textArea('#field-input-indicationsFour');
const specialInstructionsOneTextBox = new textArea('#field-input-specialInstructionsOne');
const specialInstructionsTwoTextBox = new textArea('#field-input-specialInstructionsTwo');
const specialInstructionsThreeTextBox = new textArea('#field-input-specialInstructionsThree');
const specialInstructionsFourTextBox = new textArea('#field-input-specialInstructionsFour');
const medicationsReviewByField = '.medications-reviewed-by';

class MedicationReconciliationPage extends BasePage {
  verifyDataDisplayOnChartTable(col, value) {
    dataTable.verifyCellValueByHeaderExist(col, value);
  }

  verifyDataIsDeleted(col, value, yes) {
    yes ? dataTable.verifyTableCellIsSoftDeleted(col, value) : dataTable.verifyTableCellIsNotSoftDeleted(col, value);
  }

  inputMedicationOne(text) {
    medicationOneTextBox.inputText(text);
  }

  inputMedicationTwo(text) {
    medicationTwoTextBox.inputText(text);
  }

  inputMedicationThree(text) {
    medicationThreeTextBox.inputText(text);
  }

  inputMedicationFour(text) {
    medicationFourTextBox.inputText(text);
  }

  inputDirectionsOne(text) {
    directionsOneTextBox.inputText(text);
  }

  inputDirectionsTwo(text) {
    directionsTwoTextBox.inputText(text);
  }

  inputDirectionsThree(text) {
    directionsThreeTextBox.inputText(text);
  }

  inputDirectionsFour(text) {
    directionsFourTextBox.inputText(text);
  }

  inputIndicationOne(text) {
    indicationsOneTextBox.inputText(text);
  }

  inputIndicationTwo(text) {
    indicationsTwoTextBox.inputText(text);
  }

  inputIndicationThree(text) {
    indicationsThreeTextBox.inputText(text);
  }

  inputIndicationFour(text) {
    indicationsFourTextBox.inputText(text);
  }

  inputSpecialInstrcutionOne(text) {
    specialInstructionsOneTextBox.inputText(text);
  }

  inputSpecialInstrcutionTwo(text) {
    specialInstructionsTwoTextBox.inputText(text);
  }

  inputSpecialInstrcutionThree(text) {
    specialInstructionsThreeTextBox.inputText(text);
  }

  inputSpecialInstrcutionFour(text) {
    specialInstructionsFourTextBox.inputText(text);
  }

  verifyMedicationReviewBy(text) {
    cy.get(medicationsReviewByField)
      .contains(text)
      .should('exist');
  }

  verifyMedicationOneValue(text) {
    medicationOneTextBox.verifyTextFieldValue(text);
  }

  verifyMedicationTwoValue(text) {
    medicationTwoTextBox.verifyTextFieldValue(text);
  }

  verifyMedicationThreeValue(text) {
    medicationThreeTextBox.verifyTextFieldValue(text);
  }

  verifyMedicationFourValue(text) {
    medicationFourTextBox.verifyTextFieldValue(text);
  }

  verifySpecialInstructionsOneValue(text) {
    specialInstructionsOneTextBox.verifyTextFieldValue(text);
  }

  verifySpecialInstructionsTwoValue(text) {
    specialInstructionsTwoTextBox.verifyTextFieldValue(text);
  }

  verifySpecialInstructionsThreeValue(text) {
    specialInstructionsThreeTextBox.verifyTextFieldValue(text);
  }

  verifySpecialInstructionsFourValue(text) {
    specialInstructionsFourTextBox.verifyTextFieldValue(text);
  }

  clickResumeOnAdmit(medication, option) {
    const xpath = `//div[contains(text(),'${medication}')]/ancestor::tr//input[contains(@name,'resumeOnAdmit')]`;
    const resumeOnAdmitRadios = new checkBox(xpath);
    resumeOnAdmitRadios.selectRadioByLabel(option);
  }

  clickResumeOnDischarge(medication, option) {
    const xpath = `//div[contains(text(),'${medication}')]/ancestor::tr//input[contains(@name,'resumeOnDischarge')]`;
    const resumeOnAdmitRadios = new checkBox(xpath);
    resumeOnAdmitRadios.selectRadioByLabel(option);
  }

  verifySelectedResumeOnAdmit(medication, option) {
    const xpath = `//div[contains(text(),'${medication}')]/ancestor::tr//input[contains(@name,'resumeOnAdmit')]`;
    const resumeOnAdmitRadios = new checkBox(xpath);
    resumeOnAdmitRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedResumeOnDischarge(medication, option) {
    const xpath = `//div[contains(text(),'${medication}')]/ancestor::tr//input[contains(@name,'resumeOnDischarge')]`;
    const resumeOnAdmitRadios = new checkBox(xpath);
    resumeOnAdmitRadios.verifyRadioButtonIsCheckedByLabel(option);
  }
}

export default MedicationReconciliationPage;
