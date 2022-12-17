import systemAssessment from '../system.assessment.page';
import textArea from '../../element-helpers/text.area.el';
import button from '../../element-helpers/button.el';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

const addAssignmentBtn = 'els-button[data-on-click="$ctrl.navToAddSimChart()"]>button';

const addAssignmentButton = new button(addAssignmentBtn);

class SherpathHomepage extends BasePage {
  selectWeekToAddAssignment(week) {
    this.getWebElement(`[header='${week}']>li`)
      .scrollIntoView()
      .click({ force: true });
  }

  leftNavigation(option) {
    this.getWebElement(`button[title='${option}']`)
      .contains(option)
      .click({ force: true });
  }

  clickAddAssignment() {
    addAssignmentButton.dblclick();
  }
}
export default SherpathHomepage;
