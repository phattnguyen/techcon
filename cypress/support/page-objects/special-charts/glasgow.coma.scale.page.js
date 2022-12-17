import checkbox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const eyeOpeningResponseQuestion = new checkbox('[name="ratingScale-admissionData-eyeOpeningResponse-question-content"]');
const openingResponseCheckboxEye = new checkbox('#field-input-eyeOpeningResponseCheckbox-E');
const bestMotorResponseQuestion = new checkbox('[name="ratingScale-admissionData-bestMotorResponse-question-content"]');
const bestVerbalResponseQuestion = new checkbox('[name="ratingScale-admissionData-bestVerbalResponse-question-content"]');
const bestVerbalResponseCheckboxIntubated = new checkbox('#field-input-bestVerbalResponseCheckbox-T');

class GlasgowComaScale extends BasePage {
  selectEyeOpeningResponseQuestion(label) {
    eyeOpeningResponseQuestion.selectRadioByLabelWithoutRegex(label);
  }

  checkOpeningResponseCheckboxEye() {
    openingResponseCheckboxEye.check();
  }

  selectBestMotorResponseQuestion(label) {
    bestMotorResponseQuestion.selectRadioByLabelWithoutRegex(label);
  }

  selectBestVerbalResponseQuestion(label) {
    bestVerbalResponseQuestion.selectRadioByLabelWithoutRegex(label);
  }

  checkBestVerbalResponseCheckboxIntubated() {
    bestVerbalResponseCheckboxIntubated.check();
  }

  VerifyEyeOpeningResponseQuestionChecked(yes, label) {
    yes ? eyeOpeningResponseQuestion.verifyRadioButtonIsCheckedByLabelTMP(label) : eyeOpeningResponseQuestion.verifyRadioButtonIsNotCheckedByLabelTMP(label);
  }
}
export default GlasgowComaScale;
