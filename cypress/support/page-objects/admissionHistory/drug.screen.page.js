import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import BasePage from '../base.page';

const streetRecreationalExcessivePrescriptionDrugUseRadios = new checkBox('[name=streetRecreationalExcessivePrescriptionDrugUse]');
const drugsCurrentlyUsingSearchBox = new searchDropdown('#drugsCurrentlyUsing');
const drugsCurrentlyUsingOtherTextBox = new textArea('#field-input-drugsCurrentlyUsingOther');
const amountOfStreetDrugsEachDayTextBox = new textArea('#field-input-amountOfStreetDrugsEachDay');
const usedAnyOfTheseDrugsPast24HoursRadios = new checkBox('[name=usedAnyOfTheseDrugsPast24Hours]');
const howLongUsedStreetDrugsSearchBox = new searchDropdown('#howLongUsedStreetDrugs');
const doYouPlanToQuitSelectBox = new select('#field-input-doYouPlanToQuit');
const quitDateText = new textArea('#field-input-quitDate');
const providerNotifiedOfPositiveScreenCheckBox = new checkBox('#field-input-providerNotifiedPositiveScreen-providerNotifiedOfPositiveScreen');
const providerNameTextBox = new textArea('#field-input-providerName');
const howLongDidYouQuitSelectBox = new select('#field-input-howLongDidYouQuit');

class DrugScreen extends BasePage {
  selectStreetRecreationalExcessivePrescriptionDrugUse(option) {
    streetRecreationalExcessivePrescriptionDrugUseRadios.selectRadioByLabel(option);
  }

  selectDrugsCurrentlyUsing(option) {
    drugsCurrentlyUsingSearchBox.searchAndSelectOption(option);
  }

  inputDrugsCurrentlyUsingOther(text) {
    drugsCurrentlyUsingOtherTextBox.inputText(text);
  }

  inputAmountOfStreetDrugsEachDay(amt) {
    amountOfStreetDrugsEachDayTextBox.inputText(amt);
  }

  selectUsedAnyOfTheseDrugsPast24Hours(option) {
    usedAnyOfTheseDrugsPast24HoursRadios.selectRadioByLabel(option);
  }

  selectHowLongUsedStreetDrugs(option) {
    howLongUsedStreetDrugsSearchBox.searchAndSelectOption(option);
  }

  selectDoYouPlanToQuit(option) {
    doYouPlanToQuitSelectBox.selectByOption(option);
  }

  inputQuitDate(date) {
    quitDateText.inputText(date);
  }

  checkProviderNotifiedOfPositiveScreen(yes) {
    yes ? providerNotifiedOfPositiveScreenCheckBox.check() : providerNotifiedOfPositiveScreenCheckBox.uncheck();
  }

  inputProviderName(text) {
    providerNameTextBox.inputText(text);
  }

  selectHowLongDidYouQuit(option) {
    howLongDidYouQuitSelectBox.selectByOption(option);
  }

  verifySelectedStreetRecreationalExcessivePrescriptionDrugUse(option) {
    streetRecreationalExcessivePrescriptionDrugUseRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifyDrugsCurrentlyUsingValue(value) {
    drugsCurrentlyUsingSearchBox.verifyTextFieldValue(value);
  }

  verifyAmountOfStreetDrugsEachDayValue(value) {
    amountOfStreetDrugsEachDayTextBox.verifyTextFieldValue(value);
  }

  verifyUsedAnyOfTheseDrugsPast24HoursValue(value) {
    usedAnyOfTheseDrugsPast24HoursRadios.verifyRadioButtonIsCheckedByLabel(value);
  }

  verifyHowLongUsedStreetDrugsValue(value) {
    howLongUsedStreetDrugsSearchBox.verifyTextFieldValue(value);
  }

  verifyProviderNameValue(value) {
    providerNameTextBox.verifyTextFieldValue(value);
  }

  verifyProviderNotifiedOfPositiveScreenIsChecked() {
    providerNotifiedOfPositiveScreenCheckBox.verifyCheckBoxIsChecked(true);
  }

  verifyQuitDateValue(value) {
    quitDateText.verifyTextFieldValue(value);
  }

  verifyQuitPlanSelectedValue(value) {
    doYouPlanToQuitSelectBox.verifySelectedValue(value);
  }

  verifyHowLongYouQuitSelectedValue(value) {
    howLongDidYouQuitSelectBox.verifySelectedValue(value);
  }

  verifyFieldsStatusForNotUsingDrug() {
    drugsCurrentlyUsingSearchBox.verifyElementEnabled(false);
    amountOfStreetDrugsEachDayTextBox.verifyElementEnabled(false);
    usedAnyOfTheseDrugsPast24HoursRadios.verifyElementEnabled(false);
    howLongUsedStreetDrugsSearchBox.verifyElementEnabled(false);
    doYouPlanToQuitSelectBox.verifyElementEnabled(false);
    quitDateText.verifyElementEnabled(false);
    howLongDidYouQuitSelectBox.verifyElementEnabled(false);
    providerNotifiedOfPositiveScreenCheckBox.verifyElementEnabled(false);
  }

  verifyFieldsStatusForCurrentlyUsingDrug() {
    howLongDidYouQuitSelectBox.verifyElementEnabled(false);
    drugsCurrentlyUsingSearchBox.verifyElementEnabled(true);
    amountOfStreetDrugsEachDayTextBox.verifyElementEnabled(true);
    usedAnyOfTheseDrugsPast24HoursRadios.verifyElementEnabled(true);
    howLongUsedStreetDrugsSearchBox.verifyElementEnabled(true);
    doYouPlanToQuitSelectBox.verifyElementEnabled(true);
    quitDateText.verifyElementEnabled(true);
    providerNotifiedOfPositiveScreenCheckBox.verifyElementEnabled(true);
  }

  verifyFieldsStatusForQuitUsingDrug() {
    providerNotifiedOfPositiveScreenCheckBox.verifyElementEnabled(true);
    howLongDidYouQuitSelectBox.verifyElementEnabled(true);
    drugsCurrentlyUsingSearchBox.verifyElementEnabled(false);
    amountOfStreetDrugsEachDayTextBox.verifyElementEnabled(false);
    usedAnyOfTheseDrugsPast24HoursRadios.verifyElementEnabled(false);
    howLongUsedStreetDrugsSearchBox.verifyElementEnabled(false);
    doYouPlanToQuitSelectBox.verifyElementEnabled(false);
    quitDateText.verifyElementEnabled(false);
  }

  verifyQuitDateEnabled(option) {
    quitDateText.verifyElementEnabled(option);
  }
}

export default DrugScreen;
