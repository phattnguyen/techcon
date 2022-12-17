import systemAssessment from '../system.assessment.page';
import textArea from '../../element-helpers/text.area.el';
import button from '../../element-helpers/button.el';
import radio from '../../element-helpers/checkbox.el';

const defaultFieldsNumber = 44;

/**Locators */
const perception = '//input[contains(@name,"perception")]';
const support = '//input[contains(@name,"support")]';
const coping = '//input[contains(@name,"coping")]';
const anxiety = '//input[contains(@name,"anxiety")]';
const objectiveEvaluationOfAnxiety = '//input[contains(@id,"objectiveEvaluationOfAnxiety")]';

const viewNotes = '//span[text()="View notes"]';
const closeNotes = '//span[text()="Close notes"]';
const notesTextArea = '#field-input-notes';
/**-------------------------------------------------------------------------------------------- */

const perceptionRadio = new radio(perception);
const supportRadio = new radio(support);
const copingRadio = new radio(coping);
const anxietyRadio = new radio(anxiety);
const objectiveEvaluationOfAnxietyRadio = new radio(objectiveEvaluationOfAnxiety);

const viewNotesBtn = new button(viewNotes);
const closeNotesBtn = new button(closeNotes);
const noteTxt = new textArea(notesTextArea);

class psychosocialAssessment extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectPerception(option) {
    perceptionRadio.selectRadioByLabel(option);
  }

  selectSupport(option) {
    supportRadio.selectRadioByLabel(option);
  }

  selectCoping(option) {
    copingRadio.selectRadioByLabel(option);
  }

  selectAnxiety(option) {
    anxietyRadio.selectRadioByLabel(option);
  }

  selectObjectiveAnxietyEvaluate(option) {
    objectiveEvaluationOfAnxietyRadio.selectRadioByLabel(option);
  }

  viewNotes() {
    viewNotesBtn.click();
  }

  closeNotes() {
    closeNotesBtn.click();
  }

  enterNotes(note) {
    noteTxt.inputText(note);
  }
}

export default psychosocialAssessment;
