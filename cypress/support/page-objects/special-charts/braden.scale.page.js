import checkbox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const sensoryPerceptionQuestion = new checkbox('[name="bradenScale-bradenScale-sensoryPerception-question"]');
const moistureQuestion = new checkbox('[name="bradenScale-bradenScale-moisture-question"]');
const activityQuestion = new checkbox('[name="bradenScale-bradenScale-activity-question"]');
const mobilityQuestion = new checkbox('[name="bradenScale-bradenScale-mobility-question"]');
const nutritionQuestion = new checkbox('[name="bradenScale-bradenScale-nutrition-question"]');
const frictionShearQuestion = new checkbox('[name="bradenScale-bradenScale-frictionShear-question"]');

class BradenScale extends BasePage {
  selectSensoryPerceptionQuestion(label) {
    sensoryPerceptionQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectMoistureQuestion(label) {
    moistureQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectActivityQuestion(label) {
    activityQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectMobilityQuestion(label) {
    mobilityQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectNutritionQuestion(label) {
    nutritionQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectFrictionShearQuestion(label) {
    frictionShearQuestion.selectRadioByLabelWithoutRegex(label);
  }

  verifyAllFieldsEnabled(yes) {
    sensoryPerceptionQuestion.verifyElementEnabled(yes);
    moistureQuestion.verifyElementEnabled(yes);
    activityQuestion.verifyElementEnabled(yes);
    mobilityQuestion.verifyElementEnabled(yes);
    nutritionQuestion.verifyElementEnabled(yes);
    frictionShearQuestion.verifyElementEnabled(yes);
  }

  verifySensoryPerceptionQuestionChecked(yes, label) {
    yes ? sensoryPerceptionQuestion.verifyRadioButtonIsCheckedByLabelTMP(label) : sensoryPerceptionQuestion.verifyRadioButtonIsNotCheckedByLabelTMP(label);
  }
}

export default BradenScale;
