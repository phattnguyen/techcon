import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasicNursingCare from './basic.nursing.care.page';

const nutritionCare = new searchDropdown('#nutritionCare');
const nutritionCareNotes = new textArea('#field-input-nutritionCareNotes');
const hydrationCare = new searchDropdown('#hydrationCare');
const hydrationCareNotes = new textArea('#field-input-hydrationCareNotes');
const diabeticCare = new searchDropdown('#diabeticCare');
const diabeticCareNotes = new textArea('#field-input-diabeticCareNotes');

class NutritionHydration extends BasicNursingCare {
  selectNutritionCare(options) {
    nutritionCare.searchAndSelectMultiOption(options);
  }

  enterNutritionCareNotes(value) {
    nutritionCareNotes.inputText(value);
  }

  selectHydrationCare(options) {
    hydrationCare.searchAndSelectMultiOption(options);
  }

  enterHydrationCareNotes(value) {
    hydrationCareNotes.inputText(value);
  }

  selectDiabeticCare(options) {
    diabeticCare.searchAndSelectMultiOption(options);
  }

  enterDiabeticCareNotes(value) {
    diabeticCareNotes.inputText(value);
  }

  verifyAllFieldsEnabled(yes) {
    nutritionCare.verifyElementEnabled(yes);
    nutritionCareNotes.verifyElementEnabled(yes);
    hydrationCare.verifyElementEnabled(yes);
    hydrationCareNotes.verifyElementEnabled(yes);
    diabeticCare.verifyElementEnabled(yes);
    diabeticCareNotes.verifyElementEnabled(yes);
  }

  verifySelectedNutritionCare(yes, options) {
    yes ? nutritionCare.verifySelectedOptions(options) : nutritionCare.verifyUnselectOptions(options);
  }

  verifySelectedHydrationCare(yes, options) {
    yes ? hydrationCare.verifySelectedOptions(options) : hydrationCare.verifyUnselectOptions(options);
  }

  verifySelectedDiabeticCare(yes, options) {
    yes ? diabeticCare.verifySelectedOptions(options) : diabeticCare.verifyUnselectOptions(options);
  }

  verifyNutritionCareNotes(value) {
    nutritionCareNotes.verifyTextFieldValue(value);
  }

  verifyHydrationCareNotes(value) {
    hydrationCareNotes.verifyTextFieldValue(value);
  }

  verifyDiabeticCareNotes(value) {
    diabeticCareNotes.verifyTextFieldValue(value);
  }
}
export default NutritionHydration;
