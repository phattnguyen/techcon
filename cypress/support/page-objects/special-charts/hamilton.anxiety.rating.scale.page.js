import checkbox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const anxiousMoodQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-anxiousMood-question-content"]');
const tensionQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-tension-question-content"]');
const fearsQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-fears-question-content"]');
const insomniaQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-insomnia-question-content"]');
const intellectualQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-intellectual-question-content"]');
const depressedMoodQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-depressedMood-question-content"]');
const somaticMuscularQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-somaticMuscular-question-content"]');
const somaticSensoryQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-somaticSensory-question-content"]');
const cardiovascularSymptomsQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-cardiovascularSymptoms-question-content"]');
const respiratorySymptomsQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-respiratorySymptoms-question-content"]');
const gastrointestinalSymptomsQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-gastrointestinalSymptoms-question-content"]');
const genitourinarySymptomsQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-genitourinarySymptoms-question-content"]');
const autonomicSymptomsQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-autonomicSymptoms-question-content"]');
const behaviorAtInterviewQuestion = new checkbox('[name="ratingScale-hamilton-anxiety-behaviorAtInterview-question-content"]');

class HamiltonAnxietyRatingScale extends BasePage {
  selectAnxiousMoodQuestion(label) {
    anxiousMoodQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectTensionQuestion(label) {
    tensionQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectFearsQuestion(label) {
    fearsQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectInsomniaQuestion(label) {
    insomniaQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectIntellectualQuestion(label) {
    intellectualQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectDepressedMoodQuestion(label) {
    depressedMoodQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectSomaticMuscularQuestion(label) {
    somaticMuscularQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectSomaticSensoryQuestion(label) {
    somaticSensoryQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectCardiovascularSymptomsQuestion(label) {
    cardiovascularSymptomsQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectRespiratorySymptomsQuestion(label) {
    respiratorySymptomsQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectGastrointestinalSymptomsQuestion(label) {
    gastrointestinalSymptomsQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectGenitourinarySymptomsQuestion(label) {
    genitourinarySymptomsQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectAutonomicSymptomsQuestion(label) {
    autonomicSymptomsQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectBehaviorAtInterviewQuestion(label) {
    behaviorAtInterviewQuestion.selectRadioByLabelWithoutRegex(label);
  }

  VerifyAnxiousMoodQuestionChecked(yes, label) {
    yes ? anxiousMoodQuestion.verifyRadioButtonIsCheckedByLabelTMP(label) : anxiousMoodQuestion.verifyRadioButtonIsNotCheckedByLabelTMP(label);
  }
}
export default HamiltonAnxietyRatingScale;
