import checkbox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const faceQuestions = new checkbox('[name*=faceQuestion]');
const legsQuestions = new checkbox('[name*=legsQuestion]');
const activityQuestions = new checkbox('[name*=activityQuestion]');
const cryQuestion = new checkbox('[name*=cryQuestion]');
const consolabilityQuestions = new checkbox('[name*=consolabilityQuestion]');

class FlaccScale extends BasePage {
  selectFaceQuestionAnswer(answer) {
    faceQuestions.selectRadioByLabelWithoutRegex(answer);
  }

  selectLegsQuestionAnswer(answer) {
    legsQuestions.selectRadioByLabelWithoutRegex(answer);
  }

  selectActivityQuestionAnswer(answer) {
    activityQuestions.selectRadioByLabelWithoutRegex(answer);
  }

  selectCryQuestionAnswer(answer) {
    cryQuestion.selectRadioByLabelWithoutRegex(answer);
  }

  selectConsolabilityQuestionAnswer(answer) {
    consolabilityQuestions.selectRadioByLabelWithoutRegex(answer);
  }

  verifyFlaccScaleRangeHighlightedByTotalScore(totalScore) {
    cy.log(`**Total score is : ${totalScore}**`);
    if (totalScore == 0) {
      this.verifyHighlightText('0 Relaxed and Comfortable');
    } else if (1 <= totalScore <= 3) {
      this.verifyHighlightText('1-3 Mild Discomfort');
    } else if (4 <= totalScore <= 6) {
      this.verifyHighlightText('4-6 Moderate Pain');
    } else if (7 <= totalScore <= 10) {
      this.verifyHighlightText('7-10 Severe Discomfort/Pain');
    }
  }

  verifyNoFlaccScaleRangeHighlighted() {
    this.verifyTextNotHighlighted('0 Relaxed and Comfortable');
    this.verifyTextNotHighlighted('1-3 Mild Discomfort');
    this.verifyTextNotHighlighted('4-6 Moderate Pain');
    this.verifyTextNotHighlighted('7-10 Severe Discomfort/Pain');
  }
}

export default FlaccScale;
