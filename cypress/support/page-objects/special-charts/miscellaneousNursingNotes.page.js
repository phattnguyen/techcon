import textArea from '../../element-helpers/text.area.el';
import BasePage from '../base.page';

const miscellaneousNursingNotes = new textArea('#field-input-miscellaneousNursingNotes');

class MiscellaneousNursingNotes extends BasePage {
  inputMiscellaneousNursingNotes(text) {
    miscellaneousNursingNotes.inputText(text);
  }

  verifyMiscellaneousNursingNotesValue(value) {
    miscellaneousNursingNotes.verifyTextFieldValue(value);
  }
}

export default MiscellaneousNursingNotes;
