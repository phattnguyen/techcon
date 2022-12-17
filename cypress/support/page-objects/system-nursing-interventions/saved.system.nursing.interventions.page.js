import simsCy from '../../sim.cy';
import SystemAssessment from '../system.assessment.page';

const noCareRequiredCheckbox = '//input[contains(@value,"noCareRequiredValue")]';

class SavedSystemNursingInterventions extends SystemAssessment {
  noCareRequireCheckBox() {
    return this.getWebElement(noCareRequiredCheckbox);
  }

  isRequireCare(yes) {
    yes ? this.noCareRequireCheckBox().uncheck({ force: true }) : this.noCareRequireCheckBox().check({ force: true });
  }

  verifyNavigateToSavedSystemNursingInterventions() {
    simsCy.verifyTextPresents('Saved System Nursing Interventions');
  }
}
export default SavedSystemNursingInterventions;
