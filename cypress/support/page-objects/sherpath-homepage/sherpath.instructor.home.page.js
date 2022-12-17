import systemAssessment from '../system.assessment.page';
import textArea from '../../element-helpers/text.area.el';
import button from '../../element-helpers/button.el';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

/**Locators */
const addAssignmentBtn = 'els-button[data-on-click="$ctrl.navToAddSimChart()"]>button';
const thisWeekTgl = '//*[contains(@subheader,"This Week")]/li';
const otherAssignmentTgl = '//*[text()="Other Assignments"]/ancestor::*[@role="button"]';
const editAssingmentBtn = '//div[@class="c-els-menu__window c-els-menu__window--right"]//span[text()="Edit"]/ancestor::a';
const okayBtn = '//div[@class="c-els-modal c-els-modal--primary"]//button';
/**------------------------------------------------------------------------------------- */

const addAssignmentButton = new button(addAssignmentBtn);
const otherAssignmentToggle = new button(otherAssignmentTgl);
const thisWeekToggle = new button(thisWeekTgl);
const editAssingmentButton = new button(editAssingmentBtn);
const okayButton = new button(okayBtn);

class SherpathInstructorHomepage extends BasePage {
  selectWeekToAddAssignment(week) {
    this.getWebElement(`[header='${week}']>li`)
      .scrollIntoView()
      .click({ force: true });
  }

  selectThisWeekToAddAssignment() {
    thisWeekToggle.click();
  }

  leftNavigation(option) {
    this.getWebElement(`button[title='${option}']`)
      .contains(option)
      .click({ force: true });
  }

  clickAddAssignment() {
    addAssignmentButton.dblclick();
  }

  clickOtherAssignment() {
    otherAssignmentToggle.click();
  }

  clickEditAssignment() {
    editAssingmentButton.click();
  }

  clickOkayButton() {
    okayButton.click();
  }

  selectAssignmentToEdit(assignmentName) {
    this.getWebElement(`//button[contains(text(),"${assignmentName}")]`)
      .parent()
      .siblings('td[class="dataTable__content dataTable__content--actions"]')
      .find('div>els-menu>div>button')
      .eq(0)
      .click();
  }
}
export default SherpathInstructorHomepage;
