import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import BasePage from '../base.page';

const liveWithSmokerRadios = new checkBox('[name=liveWithSmoker]');
const liveWithSmokerYesTypeRadios = new checkBox('[name=liveWithSmokerYesType]');
const smokerStatusRadios = new checkBox('[name=smokerStatus]');
const smokingHistoryTypeOfTobaccoSelectBox = new select('#field-input-smokingHistoryTypeOfTobacco');
const smokingHistoryTypeOfTobaccoOtherTextBox = new textArea('#field-input-smokingHistoryTypeOfTobaccoOther');
const smokingHistoryHowMuchTobaccoSelectBox = new select('#field-input-smokingHistoryHowMuchTobacco');
const smokingHistoryHowLongSmokingSelectBox = new select('#field-input-smokingHistoryHowLongSmoking');
const smokingHistoryPlanToQuitSelectBox = new select('#field-input-smokingHistoryPlanToQuit');
const smokingHistoryPlanToQuitOtherTextBox = new textArea('#field-input-smokingHistoryPlanToQuitOther');
const smokingHistoryWhenYouQuitTobaccoSelectBox = new select('#field-input-smokingHistoryWhenYouQuitTobacco');
const temptationTriggersSelectBox = new select('#field-input-temptationTriggers');
const planQuitMotivationHealth = new checkBox('#field-input-smokingHistoryWhatYourMotivation-health');
const planQuitMotivationSocialPressure = new checkBox('#field-input-smokingHistoryWhatYourMotivation-socialPressure');
const planQuitMotivationFamilyPressure = new checkBox('#field-input-smokingHistoryWhatYourMotivation-familyPressure');
const planQuitMotivationCost = new checkBox('#field-input-smokingHistoryWhatYourMotivation-cost');
const smokingHistoryAnyConcernsQuittingSearchDropdown = new searchDropdown('#smokingHistoryAnyConcernsQuitting');
const smokingHistoryWhyYouStartUsingTobaccoAgainSearchDropdown = new searchDropdown('#smokingHistoryWhyYouStartUsingTobaccoAgain');
const quitDateTextBox = new textArea('#field-input-smokingHistoryWhatYourQuitDate');
const smokingHistoryUseNicotineReplacementSelectBox = new select('#field-input-smokingHistoryUseNicotineReplacement');

class SmokingScreen extends BasePage {
  selectLiveWithSmoker(option) {
    liveWithSmokerRadios.selectRadioByLabel(option);
  }

  selectTypeOfLiveWithSmoker(option) {
    liveWithSmokerYesTypeRadios.selectRadioByLabel(option);
  }

  selectSmokerStatus(option) {
    smokerStatusRadios.selectRadioByLabel(option);
  }

  selectTabaccoType(option) {
    smokingHistoryTypeOfTobaccoSelectBox.selectByOption(option);
  }

  inputTypeOfTobaccoOther(text) {
    smokingHistoryTypeOfTobaccoOtherTextBox.inputText(text);
  }

  selectHowMuchTabaccoUsage(option) {
    smokingHistoryHowMuchTobaccoSelectBox.selectByOption(option);
  }

  selectHowLongSmoking(option) {
    smokingHistoryHowLongSmokingSelectBox.selectByOption(option);
  }

  selectPlanQuitSmoking(option) {
    smokingHistoryPlanToQuitSelectBox.selectByOption(option);
  }

  inputSmokingPlanToQuitOther(text) {
    smokingHistoryPlanToQuitOtherTextBox.inputText(text);
  }

  selectWhenDidQuitUsingTabacco(option) {
    smokingHistoryWhenYouQuitTobaccoSelectBox.selectByOption(option);
  }

  selectTemptationTriggers(option) {
    temptationTriggersSelectBox.selectByOption(option);
  }

  checkPlanQuitMotivationHealth(yes) {
    yes ? planQuitMotivationHealth.check() : planQuitMotivationHealth.uncheck();
  }

  checkPlanQuitMotivationSocialPressure(yes) {
    yes ? planQuitMotivationSocialPressure.check() : planQuitMotivationSocialPressure.uncheck();
  }

  checkPlanQuitMotivationFamilyPressure(yes) {
    yes ? planQuitMotivationFamilyPressure.check() : planQuitMotivationFamilyPressure.uncheck();
  }

  checkPlanQuitMotivationCost(yes) {
    yes ? planQuitMotivationCost.check() : planQuitMotivationCost.uncheck();
  }

  selectQuittingConcerns(options) {
    smokingHistoryAnyConcernsQuittingSearchDropdown.searchAndSelectMultiOption(options);
  }

  selectsWhyYouStartUsingTobaccoAgain(options) {
    smokingHistoryWhyYouStartUsingTobaccoAgainSearchDropdown.searchAndSelectMultiOption(options);
  }

  inputQuiteDate(date) {
    quitDateTextBox.inputText(date);
    this.clickOutside();
  }

  selectNicotineReplacementProductUsage(option) {
    smokingHistoryUseNicotineReplacementSelectBox.selectByOption(option);
  }

  verifyFieldsDisableWhenNotSmoking() {
    smokingHistoryTypeOfTobaccoSelectBox.verifyElementEnabled(false);
    smokingHistoryHowMuchTobaccoSelectBox.verifyElementEnabled(false);
    smokingHistoryHowLongSmokingSelectBox.verifyElementEnabled(false);
    smokingHistoryPlanToQuitSelectBox.verifyElementEnabled(false);
    smokingHistoryWhenYouQuitTobaccoSelectBox.verifyElementEnabled(false);
    temptationTriggersSelectBox.verifyElementEnabled(false);
    planQuitMotivationHealth.verifyElementEnabled(false);
    planQuitMotivationSocialPressure.verifyElementEnabled(false);
    planQuitMotivationFamilyPressure.verifyElementEnabled(false);
    planQuitMotivationCost.verifyElementEnabled(false);
    smokingHistoryAnyConcernsQuittingSearchDropdown.verifyElementEnabled(false);
    smokingHistoryWhyYouStartUsingTobaccoAgainSearchDropdown.verifyElementEnabled(false);
    quitDateTextBox.verifyElementEnabled(false);
    smokingHistoryUseNicotineReplacementSelectBox.verifyElementEnabled(false);
  }

  verifyFieldsDisableWhenCurrentlySmoking() {
    smokingHistoryTypeOfTobaccoSelectBox.verifyElementEnabled(true);
    smokingHistoryHowMuchTobaccoSelectBox.verifyElementEnabled(true);
    smokingHistoryHowLongSmokingSelectBox.verifyElementEnabled(true);
    smokingHistoryPlanToQuitSelectBox.verifyElementEnabled(true);
    planQuitMotivationHealth.verifyElementEnabled(true);
    planQuitMotivationSocialPressure.verifyElementEnabled(true);
    planQuitMotivationFamilyPressure.verifyElementEnabled(true);
    planQuitMotivationCost.verifyElementEnabled(true);
    smokingHistoryAnyConcernsQuittingSearchDropdown.verifyElementEnabled(true);
    smokingHistoryWhyYouStartUsingTobaccoAgainSearchDropdown.verifyElementEnabled(true);

    temptationTriggersSelectBox.verifyElementEnabled(false);
    smokingHistoryWhenYouQuitTobaccoSelectBox.verifyElementEnabled(false);
    quitDateTextBox.verifyElementEnabled(false);
    smokingHistoryUseNicotineReplacementSelectBox.verifyElementEnabled(false);
  }

  verifyFieldsDisableWhenQuitSmoking() {
    smokingHistoryTypeOfTobaccoSelectBox.verifyElementEnabled(false);
    smokingHistoryHowMuchTobaccoSelectBox.verifyElementEnabled(false);
    smokingHistoryHowLongSmokingSelectBox.verifyElementEnabled(false);
    smokingHistoryPlanToQuitSelectBox.verifyElementEnabled(false);
    planQuitMotivationHealth.verifyElementEnabled(false);
    planQuitMotivationSocialPressure.verifyElementEnabled(false);
    planQuitMotivationFamilyPressure.verifyElementEnabled(false);
    planQuitMotivationCost.verifyElementEnabled(false);
    smokingHistoryAnyConcernsQuittingSearchDropdown.verifyElementEnabled(false);
    smokingHistoryWhyYouStartUsingTobaccoAgainSearchDropdown.verifyElementEnabled(false);
    quitDateTextBox.verifyElementEnabled(false);
    smokingHistoryUseNicotineReplacementSelectBox.verifyElementEnabled(false);

    temptationTriggersSelectBox.verifyElementEnabled(true);
    smokingHistoryWhenYouQuitTobaccoSelectBox.verifyElementEnabled(true);
  }

  verifyQuitMotivationSectionEnabled(option) {
    planQuitMotivationHealth.verifyElementEnabled(option);
    planQuitMotivationSocialPressure.verifyElementEnabled(option);
    planQuitMotivationFamilyPressure.verifyElementEnabled(option);
    planQuitMotivationCost.verifyElementEnabled(option);
  }

  verifyQuitConcernSectionEnabled(option) {
    smokingHistoryAnyConcernsQuittingSearchDropdown.verifyElementEnabled(option);
  }

  verifyStartUsingTabaccoReasonSectionEnabled(option) {
    smokingHistoryWhyYouStartUsingTobaccoAgainSearchDropdown.verifyElementEnabled(option);
  }

  verifyQuitDateTextboxEnabled(option) {
    quitDateTextBox.verifyElementEnabled(option);
  }

  verifyNicotineReplacementSectionEnabled(option) {
    smokingHistoryUseNicotineReplacementSelectBox.verifyElementEnabled(option);
  }

  verifyAlreadyQuitSectionEnabled(option) {
    temptationTriggersSelectBox.verifyElementEnabled(option);
    smokingHistoryWhenYouQuitTobaccoSelectBox.verifyElementEnabled(option);
  }

  verifyCurrentSmokerStatus(status) {
    smokerStatusRadios.verifyRadioButtonIsCheckedByLabel(status);
  }

  verifySelectedTemptationTrigger(option) {
    temptationTriggersSelectBox.verifySelectedValue(option);
  }

  verifySelectedWhenDidQuitUsingTabacco(option) {
    smokingHistoryWhenYouQuitTobaccoSelectBox.verifySelectedValue(option);
  }

  verifySelectedTypeOfTabacco(option) {
    smokingHistoryTypeOfTobaccoSelectBox.verifySelectedValue(option);
  }

  verifySelectedHowMuchTabaccoUsage(option) {
    smokingHistoryHowMuchTobaccoSelectBox.verifySelectedValue(option);
  }

  verifySelectedHowLongSmoking(option) {
    smokingHistoryHowLongSmokingSelectBox.verifySelectedValue(option);
  }

  verifySelectedPlanQuit(option) {
    smokingHistoryPlanToQuitSelectBox.verifySelectedValue(option);
  }

  verifySelectedNicotineReplacement(option) {
    smokingHistoryUseNicotineReplacementSelectBox.verifySelectedValue(option);
  }

  verifyPlanQuitMotivationHealthChecked(option) {
    planQuitMotivationHealth.verifyCheckBoxIsChecked(option);
  }

  verifyPlanQuitMotivationSocialPressureChecked(option) {
    planQuitMotivationSocialPressure.verifyCheckBoxIsChecked(option);
  }

  verifyPlanQuitMotivationFamilyPressureChecked(option) {
    planQuitMotivationFamilyPressure.verifyCheckBoxIsChecked(option);
  }

  verifyPlanQuitMotivationCostChecked(option) {
    planQuitMotivationCost.verifyCheckBoxIsChecked(option);
  }
}

export default SmokingScreen;
