import textArea from '../element-helpers/text.area.el';
import button from '../element-helpers/button.el';
import checkBox from '../element-helpers/checkbox.el';
import BasePage from './base.page';
import simsCy from '../sim.cy';

/**Locators */
const startAssignmentBtn = '//*[text()="Start Assignment"]/parent::button';
const startLateAssignmentBtn = '//*[text()="Get started with late assignment"]/parent::button';

/**----------------------------------------------------------------------------------- */

const startAssignmentButton = new button(startAssignmentBtn);
const startLateAssignmentButton = new button(startLateAssignmentBtn);

class EmptyAssignmentHomePage extends BasePage {
  clickStartAssignment() {
    startAssignmentButton.click();
  }

  clickStartLateAssignment() {
    startLateAssignmentButton.click();
  }
}

export default EmptyAssignmentHomePage;
