import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import Table from '../../element-helpers/table.el';
import Orders from './orders.page';

const categorySelect = new select('#field-input-category');
const laboratoryTestSelect = new searchDropdown('#laboratoryTest');
const priorityCheckbox = new checkBox('[name="priority"]');
const frequencyCheckbox = new checkBox('[name="frequency"]');
const startDateTXT = new textArea('#field-input-startDate');
const startTimeTXT = new textArea('#field-input-startTime');
const specialInstructionsTXT = new textArea('#field-input-specialInstructions');
const specimenCheckbox = new checkBox('[name="specimen"]');
const table = new Table();

class Laboratory extends Orders {
  selectCategory(option) {
    categorySelect.selectByOption(option);
  }

  selectLaboratoryTest(option) {
    laboratoryTestSelect.searchAndSelectOption(option);
  }

  checkPriority(option) {
    priorityCheckbox.selectRadioByLabel(option);
  }

  checkFrequency(option) {
    frequencyCheckbox.selectRadioByLabel(option);
  }

  enterStartDate(value) {
    startDateTXT.inputText(value);
  }

  enterStartTime(value) {
    startTimeTXT.inputText(value);
  }

  enterSpecialInstructions(value) {
    specialInstructionsTXT.inputText(value);
  }

  checkSpecimen(option) {
    specimenCheckbox.selectRadioByLabel(option);
  }

  clickSpecialInstructionByOrderDescription(order) {
    table.clickCell(order, 'Special Instructions');
  }

  deleteAllOrders() {
    table.deleteAllDataRows();
  }

  verifyAllFieldsDisplayed() {
    categorySelect.verifyElementExist(true);
    laboratoryTestSelect.verifyElementExist(true);
    priorityCheckbox.verifyElementExist(true);
    frequencyCheckbox.verifyElementExist(true);
    startDateTXT.verifyElementExist(true);
    startTimeTXT.verifyElementExist(true);
    specialInstructionsTXT.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    laboratoryTestSelect.verifyElementEnabled(false);
    startDateTXT.verifyElementEnabled(false);
    startTimeTXT.verifyElementEnabled(false);
    specialInstructionsTXT.verifyElementEnabled(false);
  }

  verifyOrderFrequencyFieldsEnable(label) {
    frequencyCheckbox.verifyRadioEnabledByLabel(label, true);
  }

  verifyOrderFrequencyFieldsDisable(label) {
    frequencyCheckbox.verifyRadioEnabledByLabel(label, false);
  }

  validateFrequencyChecked(label) {
    frequencyCheckbox.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateCategory(value) {
    categorySelect.verifySelectedValue(value);
  }

  verifySavedDataTableContent(header, value) {
    table.verifyCellValueByHeaderExist(header, value);
  }
}
export default Laboratory;
