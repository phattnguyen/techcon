import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import table from '../../element-helpers/table.el';
import Orders from './orders.page';

const medicationSearchDropdown = new searchDropdown('#medication');
const orderItemOtherTextBox = new textArea('#field-input-orderItemOther');
const orderType = new checkBox('[name="orderType"]');
const routeForAdministrationSelect = new select('#field-input-routeForAdministration');
const routeForAdministrationOtherTextBox = new textArea('#field-input-routeForAdministrationOther');
const medicationDoseSelect = new select('#field-input-medicationDose');
const medicationDoseTextBox = new textArea('#field-input-medicationDoseTextbox');
const medicationFormSelect = new select('#field-input-medicationForm');
const medicationFormOtherTextBox = new textArea('#field-input-medicationFormOther');
const frequencyOfAdministrationSelect = new select('#field-input-frequencyOfAdministration');
const orderStartDate = new textArea('#field-input-orderStartDate');
const orderStartTime = new textArea('#field-input-orderStartTime');
const orderStopDate = new textArea('#field-input-orderStopDate');
const orderStopTime = new textArea('#field-input-orderStopTime');
const specialInstructionsTextBox = new textArea('#field-input-specialInstructions');
const specialDoseDose = new textArea('#field-input-specialDoseDose');
const specialDoseUnit = new textArea('#field-input-specialDoseUnit');

class Pharmacy extends Orders {
  selectMedication(option) {
    medicationSearchDropdown.searchAndSelectOption(option);
  }

  inputOrderItemOther(text) {
    orderItemOtherTextBox.inputText(text);
  }

  selectOrderType(option) {
    orderType.selectRadioByLabel(option);
  }

  selectRouteForAdministration(option) {
    routeForAdministrationSelect.selectByOption(option);
  }

  inputRouteForAdministrationOther(text) {
    routeForAdministrationOtherTextBox.inputText(text);
  }

  selectMedicationDose(option) {
    medicationDoseSelect.selectByOption(option);
  }

  inputMedicationDose(text) {
    medicationDoseTextBox.inputText(text);
  }

  selectMedicationForm(option) {
    medicationFormSelect.selectByOption(option);
  }

  inputMedicationFormOther(text) {
    medicationFormOtherTextBox.inputText(text);
  }

  selectFrequencyOfAdministration(option) {
    frequencyOfAdministrationSelect.selectByOption(option);
  }

  inputOrderStartDate(date) {
    orderStartDate.inputText(date);
  }

  inputOrderStopDate(date) {
    orderStopDate.inputText(date);
  }

  inputOrderStartTime(date) {
    orderStartTime.inputText(date);
  }

  inputOrderStopTime(date) {
    orderStopTime.inputText(date);
  }

  inputSpecialDoseDose(dose) {
    specialDoseDose.inputText(dose);
  }

  inputSepcialDoseUnit(unit) {
    specialDoseUnit.inputText(unit);
  }

  inputSpecialInstruction(text) {
    specialInstructionsTextBox.inputText(text);
  }

  verifyMedicationSelectedValue(option) {
    medicationSearchDropdown.verifySelectedOption(option);
  }

  verifyMedicationFormSelectedValue(option) {
    medicationFormSelect.verifySelectedValue(option);
  }

  verifyMedicationFormEnabled(option) {
    medicationFormSelect.verifyElementEnabled(option);
  }

  verifySpecialInstructionsValue(option) {
    specialInstructionsTextBox.verifyTextFieldValue(option);
  }

  verifyFrequencyOfAdministrationSelectedValue(option) {
    frequencyOfAdministrationSelect.verifySelectedValue(option);
  }

  verifyFrequencyOfAdministrationEnabled(option) {
    frequencyOfAdministrationSelect.verifyElementEnabled(option);
  }

  verifyOrderStartDateEnabled(option) {
    orderStartDate.verifyElementEnabled(option);
  }
}

export default Pharmacy;
