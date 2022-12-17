import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasicNursingCare from './basic.nursing.care.page';

const skinCare = new searchDropdown('#skinCare');
const skinCareNotes = new textArea('#field-input-skinCareNotes');
const pressureUlcerReduction = new searchDropdown('#pressureUlcerReduction');
const pressureUlcerReductionNotes = new textArea('#field-input-pressureUlcerReductionNotes');

class SkinCare extends BasicNursingCare {
  selectSkinCare(options) {
    skinCare.searchAndSelectMultiOption(options);
  }

  enterSkinCareNotes(value) {
    skinCareNotes.inputText(value);
  }

  selectPressureUlcerReduction(options) {
    pressureUlcerReduction.searchAndSelectMultiOption(options);
  }

  enterPressureUlcerReductionNotes(value) {
    pressureUlcerReductionNotes.inputText(value);
  }

  verifyAllFieldsEnabled(yes) {
    skinCare.verifyElementEnabled(yes);
    skinCareNotes.verifyElementEnabled(yes);
    pressureUlcerReduction.verifyElementEnabled(yes);
    pressureUlcerReductionNotes.verifyElementEnabled(yes);
  }

  verifySelectedSkinCare(yes, options) {
    yes ? skinCare.verifySelectedOptions(options) : skinCare.verifyUnselectOptions(options);
  }

  verifySelectePressureUlcerReduction(yes, options) {
    yes ? pressureUlcerReduction.verifySelectedOptions(options) : pressureUlcerReduction.verifyUnselectOptions(options);
  }

  verifySkinCareNotes(value) {
    skinCareNotes.verifyTextFieldValue(value);
  }

  verifyPressureUlcerReductionNotes(value) {
    pressureUlcerReductionNotes.verifyTextFieldValue(value);
  }
}
export default SkinCare;
