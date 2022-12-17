import systemAssessment from '../system.assessment.page';
import textArea from '../../element-helpers/text.area.el';
import button from '../../element-helpers/button.el';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import BasePage from '../base.page';

class SherpathStudentHomepage extends BasePage {
  clickAssignmentByTitle(title) {
    this.getWebElement(`//*[contains(text(),"${title}")]`)
      .parent('a')
      .eq(0)
      .click();
  }

  verifyAssingmentDueDateByTitle(title, dueData) {
    this.getWebElement(`//*[text()="${title}"]`)
      .parentsUntil('tr')
      .eq(0)
      .find('td')
      .eq(0)
      .find('div[class="c-els-table__cell-content"]')
      .should('contain.text', dueData);
  }
}
export default SherpathStudentHomepage;
