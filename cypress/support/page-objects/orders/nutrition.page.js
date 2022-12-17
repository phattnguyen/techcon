import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import basePage from '../../page-objects/base.page';
import Table from '../../element-helpers/table.el';

const nutritionTypeRadio = new checkBox('[name="nutritionType"]');
const startDateTXT = new textArea('#field-input-orderStartDate');
const startTimeTXT = new textArea('#field-input-orderStartTime');
const dietTypeSelect = new searchDropdown('#dietType');
const dayShiftTXT = new textArea('#field-input-dayShift');
const eveningShiftTXT = new textArea('#field-input-eveningShift');
const nightShiftTXT = new textArea('#field-input-nightShift');
const hourTotalTXT = new textArea('#field-input-24HourTotal');
const calorieCountRadio = new checkBox('[name="calorieCount"]');
const consistency = new searchDropdown('#consistency');
const table = new Table();

class Nutrition extends basePage {
  selectNutritionType(option) {
    nutritionTypeRadio.selectRadioByLabel(option);
  }

  enterStartDate(value) {
    startDateTXT.inputText(value);
  }

  enterStartTime(value) {
    startTimeTXT.inputText(value);
  }

  selectDietType(option) {
    dietTypeSelect.searchAndSelectOption(option);
  }

  enterDayShift(value) {
    dayShiftTXT.inputText(value);
  }

  enterEveningShift(value) {
    eveningShiftTXT.inputText(value);
  }

  enterNightShift(value) {
    nightShiftTXT.inputText(value);
  }

  selectCalorieCount(option) {
    calorieCountRadio.selectRadioByLabel(option);
  }

  selectConsistency(option) {
    consistency.searchAndSelectOption(option);
  }

  verifyAllFieldsDisplayed() {
    nutritionTypeRadio.verifyElementExist(true);
    startDateTXT.verifyElementExist(true);
    startTimeTXT.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    startDateTXT.verifyElementEnabled(false);
    startTimeTXT.verifyElementEnabled(false);
  }

  verifyHourTotalFieldDisabled() {
    hourTotalTXT.verifyElementEnabled(false);
  }

  validateHourTotal(value) {
    hourTotalTXT.verifyTextFieldValue(value);
  }

  validateNutritionTypeChecked(label) {
    nutritionTypeRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateNutritionTypeIsNotChecked(label) {
    nutritionTypeRadio.verifyRadioButtonIsNotCheckedByLabel(label);
  }

  verifySavedDataTableContent(header, value) {
    table.verifyCellValueByHeaderExist(header, value);
  }

  deleteAllOrders() {
    table.deleteAllDataRows();
  }
}
export default Nutrition;
