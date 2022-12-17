import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import ProviderChartPage from './provider.chart.save.page';

const progressNotesTXT = new textArea('#field-input-progressNotes');
const signatureTXT = new textArea('#field-input-signature');
const progressNotesEditTXT = new textArea('div[class*=sidebar__container] >* *[id=field-input-progressNotes]');
const signatureEditTXT = new textArea('div[class*=sidebar__container] >* *[id=field-input-signature]');

class ProgressNotes extends ProviderChartPage {
  inputProgressNotes(value) {
    progressNotesTXT.inputText(value);
  }

  inputSignature(value) {
    signatureTXT.inputText(value);
  }

  inputProgressNotesEdit(value) {
    progressNotesEditTXT.inputText(value);
  }

  inputSignatureEdit(value) {
    signatureEditTXT.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    progressNotesTXT.verifyElementExist(true);
    signatureTXT.verifyElementExist(true);
  }

  validateProgressNotes(value) {
    progressNotesTXT.verifyTextFieldValue(value);
  }

  validateSignature(value) {
    signatureTXT.verifyTextFieldValue(value);
  }
}
export default ProgressNotes;
