import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import BasePage from '../base.page';
import Accordion from '../../element-helpers/accordion.el';

const editSideBarAnimation = 'div[class="sidebar__container animated"]';
const accordion = new Accordion();
class PreClinicalManagerPage extends BasePage {
  verifyPreClinicalManagerSavedRecordTitleDisplay(title, subtitle) {
    accordion.verifySavedRecordTitleDisplay(title, subtitle);
  }

  clickPreClinicalManagerSavedRecordByTitle(title) {
    accordion.clickSavedRecordByTitle(title);
  }

  verifyEditSideBarShown(yes) {
    yes
      ? cy.get(editSideBarAnimation).should('have.css', 'animation-name', 'sidebarSlideIn')
      : cy.get(editSideBarAnimation).should('have.css', 'animation-name', 'sidebarSlideOut');
  }

  clickEditPreClinicalManager() {
    accordion.clickEdit();
  }

  clickDeletePreClinicalManagerSavedRecord() {
    accordion.clickDelete();
  }
}

export default PreClinicalManagerPage;
