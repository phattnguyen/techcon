import CheckBox from '../../element-helpers/checkbox.el';
import SearchDropdown from '../../element-helpers/search.dropdown.el';
import TextArea from '../../element-helpers/text.area.el';
import BasicNursingCare from './basic.nursing.care.page';

const comfortCareSearchdropdown = new SearchDropdown('#comfortCare');
const bathShowerCareSearchdropdown = new SearchDropdown('#bathShowerCare');
const mouthCareSearchdropdown = new SearchDropdown('#mouthCare');
const shaveCareSearchdropdown = new SearchDropdown('#shaveCare');
const hairNailsCareSearchdropdown = new SearchDropdown('#hairNailsCare');
const dressingCareSearchdropdown = new SearchDropdown('#dressingCare');
const linensHousekeepingCareSearchdropdown = new SearchDropdown('#linensHousekeepingCare');
const comfortCareNotes = new TextArea('#field-input-comfortCareNotes');
const bathShowerCareNotes = new TextArea('#field-input-bathShowerCareNotes');
const mouthCareNotes = new TextArea('#field-input-mouthCareNotes');
const shaveCareNotes = new TextArea('#field-input-shaveCareNotes');
const hairNailsCareNotes = new TextArea('#field-input-hairNailsCareNotes');
const dressingCareNotes = new TextArea('#field-input-dressingCareNotes');
const linensHousekeepingCareNotes = new TextArea('#field-input-linensHousekeepingCareNotes');
const shaveCareNotApplicableCheckbox = new CheckBox('#field-input-shaveCareNotApplicable-notApplicable');

class HygieneDressingsComfortPage extends BasicNursingCare {
  selectComfortCare(options) {
    comfortCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectBathShowerCare(options) {
    bathShowerCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectMouthCare(options) {
    mouthCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectShaveCare(options) {
    shaveCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectHairNailsCare(options) {
    hairNailsCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectDressingCare(options) {
    dressingCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectLinensHousekeepingCare(options) {
    linensHousekeepingCareSearchdropdown.searchAndSelectMultiOption(options);
  }

  inputComfortCareNotes(text) {
    comfortCareNotes.inputText(text);
  }

  inputBathShowerCareNotes(text) {
    bathShowerCareNotes.inputText(text);
  }

  inputMouthCareNotes(text) {
    mouthCareNotes.inputText(text);
  }

  inputShaveCareNotes(text) {
    shaveCareNotes.inputText(text);
  }

  inputHairNailsCareNotes(text) {
    hairNailsCareNotes.inputText(text);
  }

  inputDressingCareNotes(text) {
    dressingCareNotes.inputText(text);
  }

  inputLinensHousekeepingCareNotes(text) {
    linensHousekeepingCareNotes.inputText(text);
  }

  checkShaveCareNotApplicable(yes) {
    yes ? shaveCareNotApplicableCheckbox.check() : shaveCareNotApplicableCheckbox.uncheck();
  }

  verifyShaveCareNotApplicableIsChecked(option) {
    shaveCareNotApplicableCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyShaveCareSearchdropdownEnabled(option) {
    shaveCareSearchdropdown.verifyElementEnabled(option);
  }

  verifySelectedComfortCare(yes, options) {
    yes ? comfortCareSearchdropdown.verifySelectedOptions(options) : comfortCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifySelectedBathShowerCare(yes, options) {
    yes ? bathShowerCareSearchdropdown.verifySelectedOptions(options) : bathShowerCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifySelectedMouthCare(yes, options) {
    yes ? mouthCareSearchdropdown.verifySelectedOptions(options) : mouthCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifySelectedShaveCare(yes, options) {
    yes ? shaveCareSearchdropdown.verifySelectedOptions(options) : shaveCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifySelectedHairNailsCare(yes, options) {
    yes ? hairNailsCareSearchdropdown.verifySelectedOptions(options) : hairNailsCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifySelectedDressingCare(yes, options) {
    yes ? dressingCareSearchdropdown.verifySelectedOptions(options) : dressingCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifySelectedLinensHousekeepingCare(yes, options) {
    yes ? linensHousekeepingCareSearchdropdown.verifySelectedOptions(options) : linensHousekeepingCareSearchdropdown.verifyUnselectOptions(options);
  }

  verifyComfortCareNotesValue(text) {
    comfortCareNotes.verifyTextFieldValue(text);
  }

  verifyBathShowerCareNotesValue(text) {
    bathShowerCareNotes.verifyTextFieldValue(text);
  }

  verifyMouthCareNotesValue(text) {
    mouthCareNotes.verifyTextFieldValue(text);
  }

  verifyShaveCareNotesValue(text) {
    shaveCareNotes.verifyTextFieldValue(text);
  }

  verifyHairNailsCareNotesValue(text) {
    hairNailsCareNotes.verifyTextFieldValue(text);
  }

  verifyDressingCareNotesValue(text) {
    dressingCareNotes.verifyTextFieldValue(text);
  }

  verifyLinensHousekeepingCareNotesValue(text) {
    linensHousekeepingCareNotes.verifyTextFieldValue(text);
  }

  verifyAllFieldsEnabled(option) {
    comfortCareSearchdropdown.verifyElementEnabled(option);
    bathShowerCareSearchdropdown.verifyElementEnabled(option);
    mouthCareSearchdropdown.verifyElementEnabled(option);
    shaveCareSearchdropdown.verifyElementEnabled(option);
    hairNailsCareSearchdropdown.verifyElementEnabled(option);
    dressingCareSearchdropdown.verifyElementEnabled(option);
    linensHousekeepingCareSearchdropdown.verifyElementEnabled(option);
    comfortCareNotes.verifyElementEnabled(option);
    bathShowerCareNotes.verifyElementEnabled(option);
    mouthCareNotes.verifyElementEnabled(option);
    shaveCareNotes.verifyElementEnabled(option);
    hairNailsCareNotes.verifyElementEnabled(option);
    dressingCareNotes.verifyElementEnabled(option);
    linensHousekeepingCareNotes.verifyElementEnabled(option);
    shaveCareNotApplicableCheckbox.verifyElementEnabled(option);
  }
}
export default HygieneDressingsComfortPage;
