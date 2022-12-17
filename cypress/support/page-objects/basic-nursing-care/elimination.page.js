import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasicNursingCare from './basic.nursing.care.page';

const functionalAbility = new searchDropdown('#functionalAbility');
const functionalAbilityNotes = new textArea('#field-input-functionalAbilityNotes');
const eliminationNursingActions = new searchDropdown('#eliminationNursingActions');
const eliminationNursingActionsNotes = new textArea('#field-input-eliminationNursingActionsNotes');

class Elimination extends BasicNursingCare {
  selectFunctionalAbility(options) {
    functionalAbility.searchAndSelectMultiOption(options);
  }

  enterFunctionalAbilityNotes(value) {
    functionalAbilityNotes.inputText(value);
  }

  selectEliminationNursingActions(options) {
    eliminationNursingActions.searchAndSelectMultiOption(options);
  }

  enterEliminationNursingActionsNotes(value) {
    eliminationNursingActionsNotes.inputText(value);
  }

  verifyAllFieldsEnabled(yes) {
    functionalAbility.verifyElementEnabled(yes);
    functionalAbilityNotes.verifyElementEnabled(yes);
    eliminationNursingActions.verifyElementEnabled(yes);
    eliminationNursingActionsNotes.verifyElementEnabled(yes);
  }

  verifySelectedFunctionalAbility(yes, options) {
    yes ? functionalAbility.verifySelectedOptions(options) : functionalAbility.verifyUnselectOptions(options);
  }

  verifySelectedEliminationNursingActions(yes, options) {
    yes ? eliminationNursingActions.verifySelectedOptions(options) : eliminationNursingActions.verifyUnselectOptions(options);
  }

  verifyFunctionalAbilityNotes(value) {
    functionalAbilityNotes.verifyTextFieldValue(value);
  }

  verifyEliminationNursingActionsNotes(value) {
    eliminationNursingActionsNotes.verifyTextFieldValue(value);
  }
}
export default Elimination;
