import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import BasePage from '../base.page';

const drinkingStatusRadios = new checkBox('[name=youDrinkAlcohol]');
const howOftenYouDrinkSelectBox = new select('#field-input-consumptionHistoryHowOftenYouDrink');
const howLongYouDrinkSelectBox = new select('#field-input-consumptionHistoryHowLongHaveYouBeenDrinking');
const whenYourLastDrinkSelectBox = new select('#field-input-consumptionHistoryWhenYourLastDrink');
const howOftenYouDrinkOtherTextbox = new textArea('#field-input-consumptionHistoryHowOftenYouDrinkOther');
const howLongYouDrinkOtherTextbox = new textArea('#field-input-consumptionHistoryHowLongHaveYouBeenDrinkingOther');
const whenYourLastDrinkOtherTextbox = new textArea('#field-input-consumptionHistoryWhenYourLastDrinkOther');
const reasonBreakingTextbox = new textArea('#field-input-reasonBreaking');
const beginningDatesLongestPeriodSobrietyTextbox = new textArea('#field-input-consumptionHistoryBeginningDatesLongestPeriodSobriety');
const endDatesLongestPeriodSobrietyTextbox = new textArea('#field-input-consumptionHistoryEndDatesLongestPeriodSobriety');
const beginningDatesMostRecentPeriodSobrietyTextbox = new textArea('#field-input-consumptionHistoryBeginningDatesMostRecentPeriodSobriety');
const endDatesMostRecentPeriodSobrietyTextbox = new textArea('#field-input-consumptionHistoryEndDatesMostRecentPeriodSobriety');
const youHaveHistoryAlcoholWithdrawalRadios = new checkBox('[name=consumptionHistoryYouHaveHistoryAlcoholWithdrawal]');
const supportGroupCheckbox = new checkBox('#field-input-consumptionHistoryWhatHelpedYouMaintainSobriety-supportGroup');
const medicationGroupCheckbox = new checkBox('#field-input-consumptionHistoryWhatHelpedYouMaintainSobriety-medication');
const otherGroupCheckbox = new checkBox('#field-input-consumptionHistoryWhatHelpedYouMaintainSobriety-historyWhatHelpedYouMaintainSobrietOther');
const youMaintainSobrietOtherTextbox = new textArea('#field-input-historyWhatHelpedYouMaintainSobrietOther');

class AlcoholScreen extends BasePage {
  selectDrinkingStatus(option) {
    drinkingStatusRadios.selectRadioByLabel(option);
  }

  selectHowOftenYouDrink(option) {
    howOftenYouDrinkSelectBox.selectByOption(option);
  }

  selectHowLongYouDrink(option) {
    howLongYouDrinkSelectBox.selectByOption(option);
  }

  selectWhenYourLastDrink(option) {
    whenYourLastDrinkSelectBox.selectByOption(option);
  }

  inputHowOftenYouDrinkOther(text) {
    howOftenYouDrinkOtherTextbox.inputText(text);
  }

  inputHowLongYouDrinkOther(text) {
    howLongYouDrinkOtherTextbox.inputText(text);
  }

  inputWhenYourLastDrinkOther(text) {
    whenYourLastDrinkOtherTextbox.inputText(text);
  }

  inputReasonBreaking(text) {
    reasonBreakingTextbox.inputText(text);
  }

  inputBeginningDatesLongestPeriodSobriety(text) {
    beginningDatesLongestPeriodSobrietyTextbox.inputText(text);
    this.clickOutside();
  }

  inputEndDatesLongestPeriodSobriety(text) {
    endDatesLongestPeriodSobrietyTextbox.inputText(text);
    this.clickOutside();
  }

  inputBeginningDatesMostRecentPeriodSobriety(text) {
    beginningDatesMostRecentPeriodSobrietyTextbox.inputText(text);
    this.clickOutside();
  }

  inputEndDatesMostRecentPeriodSobriety(text) {
    endDatesMostRecentPeriodSobrietyTextbox.inputText(text);
    this.clickOutside();
  }

  selectAlcoholWithdrawal(option) {
    youHaveHistoryAlcoholWithdrawalRadios.selectRadioByLabel(option);
  }

  checkSobrietyMaintainingSupportGroupHelper(yes) {
    yes ? supportGroupCheckbox.check() : supportGroupCheckbox.uncheck();
  }

  checkSobrietyMaintainingMedicationHelper(yes) {
    yes ? medicationGroupCheckbox.check() : medicationGroupCheckbox.uncheck();
  }

  checkSobrietyMaintainingOtherHelper(yes) {
    yes ? otherGroupCheckbox.check() : otherGroupCheckbox.uncheck();
  }

  inputMaintainSobrietOther(text) {
    youMaintainSobrietOtherTextbox.inputText(text);
  }

  verifyYouMaintainSobrietOtherTextboxExist(option) {
    youMaintainSobrietOtherTextbox.verifyElementExist(option);
  }

  verifyAllOtherTextboxAppeared(option) {
    howOftenYouDrinkOtherTextbox.verifyElementExist(option);
    howLongYouDrinkOtherTextbox.verifyElementExist(option);
    whenYourLastDrinkOtherTextbox.verifyElementExist(option);
    youMaintainSobrietOtherTextbox.verifyElementExist(option);
  }

  verifyAlcoholConsumptionHistorySectionEnabled(option) {
    howOftenYouDrinkSelectBox.verifyElementEnabled(option);
    howLongYouDrinkSelectBox.verifyElementEnabled(option);
    whenYourLastDrinkSelectBox.verifyElementEnabled(option);
  }

  verifySelectedHowOftenYouDrink(option) {
    howOftenYouDrinkSelectBox.verifySelectedValue(option);
  }

  verifySelectedHowLongYouDrink(option) {
    howLongYouDrinkSelectBox.verifySelectedValue(option);
  }

  verifySelectedWhenYourLastDrink(option) {
    whenYourLastDrinkSelectBox.verifySelectedValue(option);
  }

  verifySobrietySupportGroupHelperIsChecked(option) {
    supportGroupCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifySobrietyMedicationHelperIsChecked(option) {
    medicationGroupCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifySobrietyOtherHelperIsChecked(option) {
    otherGroupCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifySelectedDrinkingStatus(option) {
    drinkingStatusRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedAlcoholWithdrawalHistory(option) {
    youHaveHistoryAlcoholWithdrawalRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifyBeginAndEndDates(beginDate, endDate) {
    beginningDatesLongestPeriodSobrietyTextbox.verifyTextFieldValue(beginDate);
    endDatesLongestPeriodSobrietyTextbox.verifyTextFieldValue(endDate);
    beginningDatesMostRecentPeriodSobrietyTextbox.verifyTextFieldValue(beginDate);
    endDatesMostRecentPeriodSobrietyTextbox.verifyTextFieldValue(endDate);
  }
}

export default AlcoholScreen;
