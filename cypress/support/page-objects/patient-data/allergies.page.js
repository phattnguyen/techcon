import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import textArea from '../../element-helpers/text.area.el';
import simsCy from '../../sim.cy';
import Table from '../../element-helpers/table.el';
import BasePage from '../base.page';

const noKnownAllergiesCheckbox = new checkBox('#field-input-noKnownAllergies-noKnownAllergies');
const allergyTypeRadio = new checkBox('[name="allergyType"]');
const allergenSelect = new searchDropdown('#allergen');
const medicationSelect = new searchDropdown('#medication');
const reactionsSelect = new searchDropdown('#reactions');
const reactionsOtherTXT = new textArea('#field-input-reactionsOther');
const severityRadio = new checkBox('[name="severity"]');
const informantSelect = new searchDropdown('#informant');
const informantOtherTXT = new textArea('#field-input-informantOther');
const confidenceLevelRadio = new checkBox('[name="confidenceLevel"]');
const chartHistory = new Table();

class Allergies extends BasePage {
  selectNoKnownAllergies(yes) {
    yes ? noKnownAllergiesCheckbox.check() : noKnownAllergiesCheckbox.uncheck();
  }

  selectAllergyType(option) {
    allergyTypeRadio.selectRadioByLabel(option);
  }

  selectAllergen(type, option) {
    if (type === 'Medication') {
      medicationSelect.searchAndSelectOption(option);
    } else {
      allergenSelect.searchAndSelectOption(option);
    }
  }

  selectReactions(option) {
    reactionsSelect.searchAndSelectOption(option);
  }

  inputReactionsOther(value) {
    reactionsOtherTXT.inputText(value);
  }

  selectSeverity(option) {
    severityRadio.selectRadioByLabel(option);
  }

  selectInformant(option) {
    informantSelect.searchAndSelectOption(option);
  }

  inputInformantOther(value) {
    informantOtherTXT.inputText(value);
  }

  selectConfidenceLevel(option) {
    confidenceLevelRadio.selectRadioByLabel(option);
  }

  verifyAllFieldsDisplayed() {
    noKnownAllergiesCheckbox.verifyElementExist(true);
    allergyTypeRadio.verifyElementExist(true);
    allergenSelect.verifyElementExist(true);
    reactionsSelect.verifyElementExist(true);
    severityRadio.verifyElementExist(true);
    informantSelect.verifyElementExist(true);
    confidenceLevelRadio.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    allergyTypeRadio.verifyElementEnabled(false);
    allergenSelect.verifyElementEnabled(false);
    reactionsSelect.verifyElementEnabled(false);
    severityRadio.verifyElementEnabled(false);
    informantSelect.verifyElementEnabled(false);
    confidenceLevelRadio.verifyElementEnabled(false);
  }

  verifyAllergenEnabled(option) {
    allergenSelect.verifyElementEnabled(option);
  }

  verifyChartHistoryDataTable(col, value) {
    chartHistory.verifyCellValueByHeaderExist(col, value);
  }

  deleteAllRecords() {
    chartHistory.deleteRecordIfExists();
  }

  validateNoKnownAllergies(yes) {
    noKnownAllergiesCheckbox.verifyCheckBoxIsChecked(yes);
  }

  clickAddAllergy() {
    simsCy.getButtonByLabel('Add Allergy').click();
  }

  validateAddAllergyButtonStates(yes) {
    yes ? simsCy.getButtonByLabel('Add Allergy').should('be.enabled') : simsCy.getButtonByLabel('Add Allergy').should('be.disabled');
  }
}
export default Allergies;
