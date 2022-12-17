import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const physicalTherapyOrdersRadios = new checkBox('[name=physicalTherapyOrders]');
const noPhysicalTherapyProblemsRequiredCheckbox = new checkBox('#field-input-physicalTherapyProblemsNotRequired-noPhysicalTherapyProblemsRequired');
const physicalTherapyProblemsSelectSearchdropdown = new searchDropdown('#physicalTherapyProblemsSelect');
const physicalTherapyProblemsConditionRadios = new checkBox('[name=physicalTherapyProblemsCondition]');

class MobilityAndPhysicalTherapyScreen extends BasePage {
  selectPhysicalTherapyOrders(option) {
    physicalTherapyOrdersRadios.selectRadioByLabel(option);
  }

  selectPhysicalTherapyProblemsCondition(option) {
    physicalTherapyProblemsConditionRadios.selectRadioByLabel(option);
  }

  checkNoPhysicalTherapyProblemsRequired(yes) {
    yes ? noPhysicalTherapyProblemsRequiredCheckbox.check() : noPhysicalTherapyProblemsRequiredCheckbox.uncheck();
  }

  selectPhysicalTherapyProblems(options) {
    physicalTherapyProblemsSelectSearchdropdown.searchAndSelectMultiOption(options);
  }

  verifyNewPhysicalTherapyProblemsSectionEnabled(option) {
    physicalTherapyProblemsConditionRadios.verifyElementEnabled(option);
    noPhysicalTherapyProblemsRequiredCheckbox.verifyElementEnabled(option);
    physicalTherapyProblemsSelectSearchdropdown.verifyElementEnabled(option);
  }

  verifySelectedPhysicalTherapyOrders(option) {
    physicalTherapyOrdersRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifyUnselectedPhysicalTherapyOrders(option) {
    physicalTherapyOrdersRadios.verifyRadioButtonIsNotCheckedByLabel(option);
  }

  verifySelectedPhysicalTherapyProblemsCondition(option) {
    physicalTherapyProblemsConditionRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifyUnselectedPhysicalTherapyProblemsCondition(option) {
    physicalTherapyProblemsConditionRadios.verifyRadioButtonIsNotCheckedByLabel(option);
  }

  verifySelectedPhysicalTherapyProblems(options) {
    physicalTherapyProblemsSelectSearchdropdown.verifySelectedOptions(options);
  }

  verifyPhysicalTherapyProblemsNotSelected(options) {
    physicalTherapyProblemsSelectSearchdropdown.verifyUnselectOptions(options);
  }

  verifyNoPhysicalTherapyProblemsRequiredIsChecked(option) {
    noPhysicalTherapyProblemsRequiredCheckbox.verifyCheckBoxIsChecked(option);
  }
}

export default MobilityAndPhysicalTherapyScreen;
