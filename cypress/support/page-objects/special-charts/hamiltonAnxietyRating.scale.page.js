import checkbox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const anxiousMood = new checkbox('[name="ratingScale-hamilton-anxiety-anxiousMood-question-content"]');
const tension = new checkbox('[name="ratingScale-hamilton-anxiety-tension-question-content"]');
const fears = new checkbox('[name="ratingScale-hamilton-anxiety-fears-question-content"]');
const insomnia = new checkbox('[name="ratingScale-hamilton-anxiety-insomnia-question-content"]');
const intellectual = new checkbox('[name="ratingScale-hamilton-anxiety-intellectual-question-content"]');
const depressedMood = new checkbox('[name="ratingScale-hamilton-anxiety-depressedMood-question-content"]');
const somaticMuscular = new checkbox('[name="ratingScale-hamilton-anxiety-somaticMuscular-question-content"]');
const somaticSensory = new checkbox('[name="ratingScale-hamilton-anxiety-somaticSensory-question-content"]');
const cardiovascularSymptoms = new checkbox('[name="ratingScale-hamilton-anxiety-cardiovascularSymptoms-question-content"]');
const respiratorySymptoms = new checkbox('[name="ratingScale-hamilton-anxiety-respiratorySymptoms-question-content"]');
const gastrointestinalSymptoms = new checkbox('[name="ratingScale-hamilton-anxiety-gastrointestinalSymptoms-question-content"]');
const genitourinarySymptoms = new checkbox('[name="ratingScale-hamilton-anxiety-genitourinarySymptoms-question-content"]');
const autonomicSymptoms = new checkbox('[name="ratingScale-hamilton-anxiety-autonomicSymptoms-question-content"]');
const behaviorAtInterview = new checkbox('[name="ratingScale-hamilton-anxiety-behaviorAtInterview-question-content"]');

class HamiltonAnxietyRatingScale extends BasePage {
  selectAnxiousMoodAnswer(answer) {
    anxiousMood.selectRadioByLabelWithoutRegex(answer);
  }

  selectTensionAnswer(answer) {
    tension.selectRadioByLabel(answer);
  }

  selectFearsAnswer(answer) {
    fears.selectRadioByLabel(answer);
  }

  selectInsomniaAnswer(answer) {
    insomnia.selectRadioByLabel(answer);
  }

  selectIntellectualAnswer(answer) {
    intellectual.selectRadioByLabel(answer);
  }

  selectDepressedMoodAnswer(answer) {
    depressedMood.selectRadioByLabel(answer);
  }

  selectSomaticMuscularAnswer(answer) {
    somaticMuscular.selectRadioByLabel(answer);
  }

  selectSomaticSensoryAnswer(answer) {
    somaticSensory.selectRadioByLabel(answer);
  }

  selectCardiovascularSymptomsAnswer(answer) {
    cardiovascularSymptoms.selectRadioByLabel(answer);
  }

  selectRespiratorySymptomsAnswer(answer) {
    respiratorySymptoms.selectRadioByLabel(answer);
  }

  selectGastrointestinalSymptomsAnswer(answer) {
    gastrointestinalSymptoms.selectRadioByLabel(answer);
  }

  selectGenitourinarySymptomsAnswer(answer) {
    genitourinarySymptoms.selectRadioByLabel(answer);
  }

  selectAutonomicSymptomsAnswer(answer) {
    autonomicSymptoms.selectRadioByLabel(answer);
  }

  selectBehaviorAtInterviewAnswer(answer) {
    behaviorAtInterview.selectRadioByLabel(answer);
  }

  verifyHamiltonAnxietyRatingRangeHighlightedByTotalScore(totalScore) {
    cy.log(`**Total score is : ${totalScore}**`);
    if (totalScore >= 0 && totalScore <= 13) {
      this.verifyHighlightText('0 to 13 = Anxiety not registered');
    } else if (totalScore >= 14 && totalScore <= 17) {
      this.verifyHighlightText('14 to 17 = Mild anxiety');
    } else if (totalScore >= 18 && totalScore <= 24) {
      this.verifyHighlightText('18 to 24 = Moderate anxiety');
    } else if (totalScore >= 25 && totalScore <= 30) {
      this.verifyHighlightText('25 to 30 or higher = Severe anxiety');
    }
  }

  verifyNoHamiltonAnxietyRatingRangeHighlighted() {
    this.verifyTextNotHighlighted('0 to 13 = Anxiety not registered');
    this.verifyTextNotHighlighted('14 to 17 = Mild anxiety');
    this.verifyTextNotHighlighted('18 to 24 = Moderate anxiety');
    this.verifyTextNotHighlighted('25 to 30 or higher = Severe anxiety');
  }
}

export default HamiltonAnxietyRatingScale;
