import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import PreClinicalManagerPage from './pre-clinical.save.page';

const diagnosisSearchSelect = new searchDropdown('#diagnosis');
const diagnosisTypeRadios = new checkBox('[name="diagnosisType"]');
const pathophysiologyTextbox = new textArea('#field-input-pathophysiology');
const therapeuticRegimenTextbox = new textArea('#field-input-therapeuticRegimen');
const problemsAndChangesTextbox = new textArea('#field-input-problemsAndChanges');
const editPathophysiologyTextbox = new textArea('div[class*=sidebar__container] >* *[id=field-input-pathophysiology]');
const editTherapeuticRegimenTextbox = new textArea('div[class*=sidebar__container] >* *[id=field-input-therapeuticRegimen]');
const editProblemsAndChangesTextbox = new textArea('div[class*=sidebar__container] >* *[id=field-input-problemsAndChanges]');

class Diagnosis extends PreClinicalManagerPage {
  selectDiagnosis(option) {
    diagnosisSearchSelect.searchAndSelectOption(option);
  }

  selectDiagnosisType(option) {
    diagnosisTypeRadios.selectRadioByLabel(option);
  }

  inputPathophysiology(text) {
    pathophysiologyTextbox.inputText(text);
  }

  inputTherapeuticRegimen(text) {
    therapeuticRegimenTextbox.inputText(text);
  }

  inputProblemsAndChanges(text) {
    problemsAndChangesTextbox.inputText(text);
  }

  inputEditPathophysiology(text) {
    editPathophysiologyTextbox.inputText(text);
  }

  inputEditTherapeuticRegimen(text) {
    editTherapeuticRegimenTextbox.inputText(text);
  }

  inputEditProblemsAndChanges(text) {
    editProblemsAndChangesTextbox.inputText(text);
  }

  verifyDiagnosisTypeEnabledByOption(option, yes) {
    diagnosisTypeRadios.verifyRadioEnabledByLabel(option, yes);
  }

  verifySelectedDiagnosis(option) {
    diagnosisSearchSelect.verifySelectedOption(option);
  }

  verifyPathophysiologyTextboxValue(val) {
    pathophysiologyTextbox.verifyTextFieldValue(val);
  }

  verifyTherapeuticRegimenTextboxValue(val) {
    therapeuticRegimenTextbox.verifyTextFieldValue(val);
  }

  verifyProblemsAndChangesTextboxValue(val) {
    problemsAndChangesTextbox.verifyTextFieldValue(val);
  }
}

export default Diagnosis;
