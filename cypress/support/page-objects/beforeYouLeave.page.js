import simsCy from '../sim.cy';
import confirmPopup from '../page-objects/popup.confirm.page';

const title = '//h3[text()="Before you Leave..."]';
const content = '//p[text()="This page contains unsaved changes. Do you wish to leave this page?"]';

class beforeYouLeavePage extends confirmPopup {
  getBeforeYouLeavePopupTitle() {
    return cy.xpath(title);
  }

  getBeforeYouLeavePopupContent() {
    return cy.xpath(content);
  }

  verifyBeforeYouLeavePopupDisplay() {
    this.getBeforeYouLeavePopupContent().should('be.visible');
    this.getBeforeYouLeavePopupTitle().should('be.visible');
    simsCy.getLeaveThisPageBtn().should('be.visible');
    simsCy.getStayOnPageBtn().should('be.visible');
  }

  clickLeaveThisPage() {
    simsCy.getLeaveThisPageBtn().click();
  }

  clickStayOnPage() {
    simsCy.getStayOnPageBtn().click();
  }
}
export default beforeYouLeavePage;
