import checkbox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const historyOfFallingQuestion = new checkbox('[name="morseFallScale-morseFallScale-historyOfFalling-question-content"]');
const secondaryDiagnosisQuestion = new checkbox('[name="morseFallScale-morseFallScale-secondaryDiagnosis-question-content"]');
const ambulatoryAidQuestion = new checkbox('[name="morseFallScale-morseFallScale-ambulatoryAid-question-content"]');
const ivOrIvAccessQuestion = new checkbox('[name="morseFallScale-morseFallScale-ivOrIvAccess-question-content"]');
const gaitQuestion = new checkbox('[name="morseFallScale-morseFallScale-gait-question-content"]');
const mentalStatusQuestion = new checkbox('[name="morseFallScale-morseFallScale-mentalStatus-question-content"]');

class MorseFallScale extends BasePage {
  selectHistoryOfFallingQuestion(label) {
    historyOfFallingQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectSecondaryDiagnosisQuestion(label) {
    secondaryDiagnosisQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectAmbulatoryAidQuestion(label) {
    ambulatoryAidQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectIvOrIvAccessQuestion(label) {
    ivOrIvAccessQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectGaitQuestion(label) {
    gaitQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectMentalStatusQuestion(label) {
    mentalStatusQuestion.selectRadioByLabelWithoutRegex(label);
  }

  verifytHistoryOfFallingQuestionChecked(yes, label) {
    yes ? historyOfFallingQuestion.verifyRadioButtonIsCheckedByLabelTMP(label) : historyOfFallingQuestion.verifyRadioButtonIsNotCheckedByLabelTMP(label);
  }
}
export default MorseFallScale;
