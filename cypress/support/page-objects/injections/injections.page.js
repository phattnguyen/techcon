import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import BasePage from '../base.page';
import SavedCharting from '../saved.charting.page';

const completeCheckbox = new checkBox('#field-input-complete-complete');
const locationSearchdropdown = new searchDropdown('#location');
const typeRadios = new checkBox('[name="type"]');
const siteAssessmentSearchdropdown = new searchDropdown('#siteAssessment');
const actionsTakenTextField = new textArea('#field-input-actionsTaken');
const notesTextField = new textArea('#field-input-notes');

const updateColumnName = 'Injection Status';
const deleteConfirmMsg = 'Are you sure you want to delete this entry? Note that the most recent injection update will be deleted.';

class InjectionsPage extends SavedCharting {
  constructor() {
    super(updateColumnName, deleteConfirmMsg);
  }

  checkComplete(yes) {
    yes ? completeCheckbox.check() : completeCheckbox.uncheck();
  }

  verifyCompleteCheckboxIsChecked(yes) {
    completeCheckbox.verifyCheckBoxIsChecked(yes);
  }

  selectLocation(option) {
    locationSearchdropdown.searchAndSelectOption(option);
  }

  selectType(option) {
    typeRadios.selectRadioByLabel(option);
  }

  selectSiteAssessments(options) {
    siteAssessmentSearchdropdown.searchAndSelectMultiOption(options);
  }

  unselectSiteAssessments(options) {
    siteAssessmentSearchdropdown.unselectAllMultiOptions(options);
  }

  inputFindingAndActionTaken(text) {
    actionsTakenTextField.inputText(text);
  }

  inputNotes(text) {
    notesTextField.inputText(text);
  }

  verifyInjectionLocationEnabled(option) {
    locationSearchdropdown.verifyElementEnabled(option);
  }

  verifyInjectionTypeEnabled(option) {
    typeRadios.verifyElementEnabled(option);
  }

  verifySelectedType(option, yes) {
    yes ? typeRadios.verifyRadioButtonIsCheckedByLabel(option) : typeRadios.verifyRadioButtonIsNotCheckedByLabel(option);
  }

  verifySelectLocation(option) {
    locationSearchdropdown.verifySelectedOption(option);
  }

  verifySelectSiteAssessments(options, yes) {
    yes ? siteAssessmentSearchdropdown.verifySelectedOptions(options) : siteAssessmentSearchdropdown.verifyUnselectOptions(options);
  }

  verifyFindingsAndActionTakenFieldValue(text) {
    actionsTakenTextField.verifyTextFieldValue(text);
  }

  verifyNotesFieldValue(text) {
    notesTextField.verifyTextFieldValue(text);
  }
}
export default InjectionsPage;
