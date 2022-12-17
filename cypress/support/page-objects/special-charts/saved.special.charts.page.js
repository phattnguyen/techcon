import simsCy from '../../sim.cy';
import checkBox from '../../element-helpers/checkbox.el';
import SystemAssessment from '../system.assessment.page';

const noAssessmentRequiredCheckbox = new checkBox('input[value*=noAssessment]');

class SavedSpecialCharts extends SystemAssessment {
  checkNoAssessmentRequired(yes) {
    yes ? noAssessmentRequiredCheckbox.check() : noAssessmentRequiredCheckbox.uncheck();
  }

  verifyNavigateToSavedSpecialCharts() {
    simsCy.verifyTextPresents('Saved Special Charts');
  }

  verifyNoAssessmentRequiredIsChecked(option) {
    noAssessmentRequiredCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyNoAssessmentRequiredIsChecked(option) {
    noAssessmentRequiredCheckbox.verifyCheckBoxIsChecked(option);
  }
}
export default SavedSpecialCharts;
