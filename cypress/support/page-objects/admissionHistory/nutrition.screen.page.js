import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import basePage from '../base.page';

const unexplainedWeightLossGreaterRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-unexplained-weight-loss-greater-question-content"]');
const lossAppetite7DaysRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-loss-appetite-7-days-question-content"]');
const chewingSwallowingDifficultiesRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-chewing-swallowing-difficulties-question-content"]');
const nauseaVomitingDiarrheaRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-nausea-vomiting-diarrhea-question-content"]');
const pressureUlcerOpenWoundsDrainingRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-pressure-ulcer-open-wounds-draining-question-content"]');
const tubeFeedingTotalParenteralRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-tube-feeding-total-parenteral-question-content"]');
const dietInformationRequestedRadio = new checkBox('input[name*="generalNutritionScreen-nutrition-screening-diet-information-requested-question-content"]');
const cachexiaPhysicalSignsRadio = new checkBox('input[name*="illnessInjuryNutritionScreen-nutrition-screening-cachexia-physical-signs-question-content"]');
const pressureUlcerOpenWoundsRadio = new checkBox('input[name*="illnessInjuryNutritionScreen-nutrition-screening-pressure-ulcer-open-wounds-question-content"]');
const polytraumaMultipleFractureRadio = new checkBox('input[name*="illnessInjuryNutritionScreen-nutrition-screening-polytrauma-multiple-fracture-question-content"]');
const feverInfectionSepsisRadio = new checkBox('input[name*="illnessInjuryNutritionScreen-nutrition-screening-fever-infection-sepsis-question-content"]');
const headNeckMouthSurgeryRadio = new checkBox('input[name*="illnessInjuryNutritionScreen-nutrition-screening-head-neck-mouth-surgery-question-content"]');
const tubeFeedingTotalParenteralNutritionRadio = new checkBox(
  'input[name*="illnessInjuryNutritionScreen-nutrition-screening-tube-feeding-total-parenteral-nutrition-question-content"]'
);
const foodPreferencesDietConsiderationsKosherCheckbox = new checkBox('#field-input-foodPreferencesDietConsiderationsMarkAllApply-kosher');
const foodPreferencesDietConsiderationsVegetarianCheckbox = new checkBox('#field-input-foodPreferencesDietConsiderationsMarkAllApply-vegetarian');
const foodPreferencesDietConsiderationsMuslimCheckbox = new checkBox('#field-input-foodPreferencesDietConsiderationsMarkAllApply-muslim');
const foodPreferencesDietConsiderationsOlderThan85YearsCheckbox = new checkBox('#field-input-foodPreferencesDietConsiderationsMarkAllApply-olderThan85Years');
const foodPreferencesDietConsiderationsOtherCheckbox = new checkBox('#field-input-foodPreferencesDietConsiderationsMarkAllApply-foodPreferencesDietConsiderationsOtherValue');
const foodPreferencesDietConsiderationsOtherTXT = new textArea('#field-input-foodPreferencesDietConsiderationsOtherInput');
const dietSnackTXT = new textArea('#field-input-dietSnack');
const foodPreferencesTXT = new textArea('#field-input-foodPreferences');
const foodDislikeTXT = new textArea('#field-input-foodDislike');
const scoreItems = '[class*="o-els-flex-layout__item scale__score"] > span > strong';
const totalScore = '//div[@class="o-els-flex-layout__item o-els-flex-layout__item--middle"]';

const errorMessage = '.u-els-color-error';

class NutritionScreen extends basePage {
  unexplainedWeightLossGreaterQuestion(label) {
    unexplainedWeightLossGreaterRadio.selectRadioByLabel(label);
  }

  lossAppetite7Days(label) {
    lossAppetite7DaysRadio.selectRadioByLabel(label);
  }

  chewingSwallowingDifficulties(label) {
    chewingSwallowingDifficultiesRadio.selectRadioByLabel(label);
  }

  nauseaVomitingDiarrhea(label) {
    nauseaVomitingDiarrheaRadio.selectRadioByLabel(label);
  }

  pressureUlcerOpenWoundsDraining(label) {
    pressureUlcerOpenWoundsDrainingRadio.selectRadioByLabel(label);
  }

  tubeFeedingTotalParenteral(label) {
    tubeFeedingTotalParenteralRadio.selectRadioByLabel(label);
  }

  dietInformationRequested(label) {
    dietInformationRequestedRadio.selectRadioByLabel(label);
  }

  cachexiaPhysicalSigns(label) {
    cachexiaPhysicalSignsRadio.selectRadioByLabel(label);
  }

  pressureUlcerOpenWounds(label) {
    pressureUlcerOpenWoundsRadio.selectRadioByLabel(label);
  }

  polytraumaMultipleFracture(label) {
    polytraumaMultipleFractureRadio.selectRadioByLabel(label);
  }

  feverInfectionSepsis(label) {
    feverInfectionSepsisRadio.selectRadioByLabel(label);
  }

  headNeckMouthSurgery(label) {
    headNeckMouthSurgeryRadio.selectRadioByLabel(label);
  }

  tubeFeedingTotalParenteralNutrition(label) {
    tubeFeedingTotalParenteralNutritionRadio.selectRadioByLabel(label);
  }

  selectFoodPreferencesDietConsiderationsKosher(yes) {
    yes ? foodPreferencesDietConsiderationsKosherCheckbox.check() : foodPreferencesDietConsiderationsKosherCheckbox.uncheck();
  }

  selectFoodPreferencesDietConsiderationsVegetarian(yes) {
    yes ? foodPreferencesDietConsiderationsVegetarianCheckbox.check() : foodPreferencesDietConsiderationsVegetarianCheckbox.uncheck();
  }

  selectFoodPreferencesDietConsiderationsMuslim(yes) {
    yes ? foodPreferencesDietConsiderationsMuslimCheckbox.check() : foodPreferencesDietConsiderationsMuslimCheckbox.uncheck();
  }

  selectFoodPreferencesDietConsiderationsOlderThan85Years(yes) {
    yes ? foodPreferencesDietConsiderationsOlderThan85YearsCheckbox.check() : foodPreferencesDietConsiderationsOlderThan85YearsCheckbox.uncheck();
  }

  selectFoodPreferencesDietConsiderationsOther(yes) {
    yes ? foodPreferencesDietConsiderationsOtherCheckbox.check() : foodPreferencesDietConsiderationsOtherCheckbox.uncheck();
  }

  foodPreferencesDietConsiderationsOtherTXT(value) {
    foodPreferencesDietConsiderationsOtherTXT.inputText(value);
  }

  dietSnack(value) {
    dietSnackTXT.inputText(value);
  }

  foodPreferences(value) {
    foodPreferencesTXT.inputText(value);
  }

  foodDislike(value) {
    foodDislikeTXT.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    unexplainedWeightLossGreaterRadio.verifyElementExist(true);
    lossAppetite7DaysRadio.verifyElementExist(true);
    chewingSwallowingDifficultiesRadio.verifyElementExist(true);
    nauseaVomitingDiarrheaRadio.verifyElementExist(true);
    pressureUlcerOpenWoundsDrainingRadio.verifyElementExist(true);
    tubeFeedingTotalParenteralRadio.verifyElementExist(true);
    dietInformationRequestedRadio.verifyElementExist(true);
    cachexiaPhysicalSignsRadio.verifyElementExist(true);
    pressureUlcerOpenWoundsRadio.verifyElementExist(true);
    polytraumaMultipleFractureRadio.verifyElementExist(true);
    feverInfectionSepsisRadio.verifyElementExist(true);
    headNeckMouthSurgeryRadio.verifyElementExist(true);
    tubeFeedingTotalParenteralNutritionRadio.verifyElementExist(true);
    foodPreferencesDietConsiderationsKosherCheckbox.verifyElementExist(true);
    foodPreferencesDietConsiderationsVegetarianCheckbox.verifyElementExist(true);
    foodPreferencesDietConsiderationsMuslimCheckbox.verifyElementExist(true);
    foodPreferencesDietConsiderationsOlderThan85YearsCheckbox.verifyElementExist(true);
    foodPreferencesDietConsiderationsOtherCheckbox.verifyElementExist(true);
    dietSnackTXT.verifyElementExist(true);
    foodPreferencesTXT.verifyElementExist(true);
    foodDislikeTXT.verifyElementExist(true);
  }

  verifyOtherFieldEnabled(yes) {
    foodPreferencesDietConsiderationsOtherTXT.verifyElementEnabled(yes);
  }

  validateUnexplainedWeightLossGreaterChecked(label) {
    unexplainedWeightLossGreaterRadio.verifyRadioButtonIsChecked(label);
  }

  validateLossAppetite7DaysChecked(label) {
    lossAppetite7DaysRadio.verifyRadioButtonIsChecked(label);
  }

  validateChewingSwallowingDifficultiesChecked(label) {
    chewingSwallowingDifficultiesRadio.verifyRadioButtonIsChecked(label);
  }

  validateNauseaVomitingDiarrheaChecked(label) {
    nauseaVomitingDiarrheaRadio.verifyRadioButtonIsChecked(label);
  }

  validatePressureUlcerOpenWoundsDrainingChecked(label) {
    pressureUlcerOpenWoundsDrainingRadio.verifyRadioButtonIsChecked(label);
  }

  validateTubeFeedingTotalParenteralChecked(label) {
    tubeFeedingTotalParenteralRadio.verifyRadioButtonIsChecked(label);
  }

  validateDietInformationRequestedChecked(label) {
    dietInformationRequestedRadio.verifyRadioButtonIsChecked(label);
  }

  validateCachexiaPhysicalSignsChecked(label) {
    cachexiaPhysicalSignsRadio.verifyRadioButtonIsChecked(label);
  }

  validatePressureUlcerOpenWoundsChecked(label) {
    pressureUlcerOpenWoundsRadio.verifyRadioButtonIsChecked(label);
  }

  validatePolytraumaMultipleFractureChecked(label) {
    polytraumaMultipleFractureRadio.verifyRadioButtonIsChecked(label);
  }

  validateFeverInfectionSepsisChecked(label) {
    feverInfectionSepsisRadio.verifyRadioButtonIsChecked(label);
  }

  validateHeadNeckMouthSurgeryChecked(label) {
    headNeckMouthSurgeryRadio.verifyRadioButtonIsChecked(label);
  }

  validateTubeFeedingTotalParenteralNutritionChecked(label) {
    tubeFeedingTotalParenteralNutritionRadio.verifyRadioButtonIsChecked(label);
  }

  validateRequiredOtherField(message) {
    this.getWebElement(errorMessage).should('have.text', message);
  }

  validateFoodPreferencesDietConsiderationsKosher(yes) {
    foodPreferencesDietConsiderationsKosherCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateFoodPreferencesDietConsiderationsVegetarian(yes) {
    foodPreferencesDietConsiderationsVegetarianCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateFoodPreferencesDietConsiderationsMuslim(yes) {
    foodPreferencesDietConsiderationsMuslimCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateFoodPreferencesDietConsiderationsOlderThan85Years(yes) {
    foodPreferencesDietConsiderationsOlderThan85YearsCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateFoodPreferencesDietConsiderationsOther(yes) {
    foodPreferencesDietConsiderationsOtherCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateFoodPreferencesDietConsiderationsOtherText(value) {
    foodPreferencesDietConsiderationsOtherTXT.verifyTextFieldValue(value);
  }

  validateDietSnack(value) {
    dietSnackTXT.verifyTextFieldValue(value);
  }

  validateFoodDislike(value) {
    foodDislikeTXT.verifyTextFieldValue(value);
  }

  validateFoodPreferences(value) {
    foodPreferencesTXT.verifyTextFieldValue(value);
  }
}
export default NutritionScreen;
