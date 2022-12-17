import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import textArea from '../../element-helpers/text.area.el';
import Orders from './orders.page';

const categorySearchDropdown = new searchDropdown('#category');
const diagnosticTestSearchDropdown = new searchDropdown('#diagnosticTest');
const orderPriorityRadios = new checkBox('[name="orderPriority"]');
const transportationSearchDropdown = new searchDropdown('#transportation');
const ivRequiredRadios = new checkBox('[name="ivRequired"]');
const oxygenRequiredRadios = new checkBox('[name="oxygenRequired"]');
const orderStartDate = new textArea('#field-input-orderStartDate');
const orderStartTime = new textArea('#field-input-orderStartTime');
const specialInstructionsTextbox = new textArea('#field-input-specialInstructions');
const diagnosticTestDetailTextbox = new textArea('#field-input-diagnosticTestDetail');
const examDateTextbox = new textArea('#field-input-exam_date');
const resultReceiveDateText = new textArea('#field-input-resultsReceivedDate');
const resultReceiveTimeText = new textArea('#field-input-resultsReceivedTime');

class DiagnosticTestPage extends Orders {
  selectCategory(option) {
    categorySearchDropdown.searchAndSelectOption(option);
  }

  selectDiagnosticTest(option) {
    diagnosticTestSearchDropdown.searchAndSelectOption(option);
  }

  selectOrderPriority(option) {
    orderPriorityRadios.selectRadioByLabel(option);
  }

  selectTransportation(option) {
    transportationSearchDropdown.searchAndSelectOption(option);
  }

  selectIVsRequired(option) {
    ivRequiredRadios.selectRadioByLabel(option);
  }

  selectOxygenRequired(option) {
    oxygenRequiredRadios.selectRadioByLabel(option);
  }

  inputOrderStartDate(date) {
    orderStartDate.inputText(date);
  }

  inputOrderStartTime(time) {
    orderStartTime.inputText(time);
  }

  inputSpecialInstructions(text) {
    specialInstructionsTextbox.inputText(text);
  }

  inputDiagnosticTestDetail(text) {
    diagnosticTestDetailTextbox.inputText(text);
  }

  inputExamDate(date) {
    examDateTextbox.inputText(date);
  }

  inputResultReceiveDate(date) {
    resultReceiveDateText.inputText(date);
  }

  inputResultReceiveTime(time) {
    resultReceiveTimeText.inputText(time);
  }

  verifyExamDateValue(date) {
    examDateTextbox.verifyTextFieldValue(date);
  }

  verifySavedExamDate(date) {
    cy.get('p')
      .contains(date)
      .should('exist');
  }

  verifyDateTimeEnabled(option) {
    orderStartDate.verifyElementEnabled(option);
    orderStartTime.verifyElementEnabled(option);
  }

  verifyOrderPriorityEnabled(option) {
    orderPriorityRadios.verifyElementEnabled(option);
  }

  verifyTransportationEnabled(option) {
    transportationSearchDropdown.verifyElementEnabled(option);
  }

  verifyIvRequiredEnabled(option) {
    ivRequiredRadios.verifyElementEnabled(option);
  }

  verifyOxygenRequiredEnabled(option) {
    oxygenRequiredRadios.verifyElementEnabled(option);
  }

  verifySpecialInstructionEnabled(option) {
    specialInstructionsTextbox.verifyElementEnabled(option);
  }

  verifyCategorySelectedValue(value) {
    categorySearchDropdown.verifySelectedOption(value);
  }

  verifyDiagnosticTestSelectedValue(value) {
    diagnosticTestSearchDropdown.verifySelectedOption(value);
  }

  verifyTransportationSelectedValue(value) {
    transportationSearchDropdown.verifySelectedOption(value);
  }

  verifyOrderPrioritySelectedValue(value) {
    orderPriorityRadios.verifyRadioButtonIsCheckedByLabel(value);
  }

  verifyIvRequiredSelectedValue(value) {
    ivRequiredRadios.verifyRadioButtonIsCheckedByLabel(value);
  }

  verifyOxygenRequiredSelectedValue(value) {
    oxygenRequiredRadios.verifyRadioButtonIsCheckedByLabel(value);
  }
}

export default DiagnosticTestPage;
