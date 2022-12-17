import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const noNewOccupationalTherapyProblemsCheckbox = new checkBox('#field-input-noNewOccupationalTherapyProblems-noNewOccupationalTherapyProblems');
const newOccupationalTherapySearchDropdown = new searchDropdown('#newOccupationalTherapy');
const impairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgmentCheckbox = new checkBox('#field-input-impairmentEnvidence-impairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgment');
const impairmentEnvidenceRiskForSkinSoresCheckbox = new checkBox('#field-input-impairmentEnvidence-impairmentEnvidenceRiskForSkinSores');
const impairmentEnvidenceRiskForJointContracturesCheckbox = new checkBox('#field-input-impairmentEnvidence-impairmentEnvidenceRiskForJointContractures');
const occupationalTherapyRestrictionRadios = new checkBox('[name=occupationalTherapyRestriction]');

class ActivityOccupationalTherapyScreen extends BasePage {
  checkNoNewOccupationalTherapyProblems(yes) {
    yes ? noNewOccupationalTherapyProblemsCheckbox.check() : noNewOccupationalTherapyProblemsCheckbox.uncheck();
  }

  checkImpairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgment(yes) {
    yes ? impairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgmentCheckbox.check() : impairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgmentCheckbox.uncheck();
  }

  checkImpairmentEnvidenceRiskForSkinSores(yes) {
    yes ? impairmentEnvidenceRiskForSkinSoresCheckbox.check() : impairmentEnvidenceRiskForSkinSoresCheckbox.uncheck();
  }

  checkImpairmentEnvidenceRiskForJointContractures(yes) {
    yes ? impairmentEnvidenceRiskForJointContracturesCheckbox.check() : impairmentEnvidenceRiskForJointContracturesCheckbox.uncheck();
  }

  selectNewOccupationalTherapy(options) {
    newOccupationalTherapySearchDropdown.searchAndSelectMultiOption(options);
  }

  selectOccupationalTherapyRestriction(options) {
    occupationalTherapyRestrictionRadios.selectRadioByLabel(options);
  }

  verifyNewOccupationalTherapySectionEnabled(option) {
    newOccupationalTherapySearchDropdown.verifyElementEnabled(option);
  }

  verifySelectedNewOccupationalTherapy(options) {
    newOccupationalTherapySearchDropdown.verifySelectedOptions(options);
  }

  verifyUnselectedNewOccupationalTherapyOptions(options) {
    newOccupationalTherapySearchDropdown.verifyUnselectOptions(options);
  }

  verifySelectedOccupationalTherapyRestriction(option) {
    occupationalTherapyRestrictionRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifyImpairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgmentIsChecked(option) {
    impairmentEnvidenceImpairmentOfSafetyAwarenessOrJudgmentCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyImpairmentEnvidenceRiskForSkinSoresIsChecked(option) {
    impairmentEnvidenceRiskForSkinSoresCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyImpairmentEnvidenceRiskForJointContracturesIsChecked(option) {
    impairmentEnvidenceRiskForJointContracturesCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyNoNewOccupationalTherapyProblemsChecked(yes) {
    noNewOccupationalTherapyProblemsCheckbox.verifyCheckBoxIsChecked(yes);
  }
}

export default ActivityOccupationalTherapyScreen;
