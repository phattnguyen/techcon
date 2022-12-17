import simsCy from '../../sim.cy';
import checkBox from '../../element-helpers/checkbox.el';
import SystemAssessment from '../system.assessment.page';

const noAssessmentRequiredCheckbox = new checkBox('input[value*=noAssessment]');

class BasicNursingCare extends SystemAssessment {
  checkNoAssessmentRequired(yes) {
    yes ? noAssessmentRequiredCheckbox.check() : noAssessmentRequiredCheckbox.uncheck();
  }

  verifyNavigateToSavedBasicNursingCare() {
    simsCy.verifyTextPresents('Saved Basic Nursing Care');
  }

  verifyNoAssessmentRequiredIsChecked(option) {
    noAssessmentRequiredCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyNoAssessmentRequiredIsChecked(option) {
    noAssessmentRequiredCheckbox.verifyCheckBoxIsChecked(option);
  }
}
export default BasicNursingCare;
