import textArea from '../element-helpers/text.area.el';
import button from '../element-helpers/button.el';
import checkBox from '../element-helpers/checkbox.el';
import select from '../element-helpers/select.el';
import BasePage from './base.page';
import simsCy from '../sim.cy';
import el from '../element-helpers/baseEl';

/**Locators */
const header = 'header>h1';
const overallComment = '.overall-comments';
const chartComment = 'li[class*=comment-content]';
const assessmentStatus = 'div[class*=assessment-status-badge]';
const studentAssignmentStatus = 'div[class*=legend]>span';

class AssignmentSubmissionPage extends BasePage {
  verifyHeader(headerTitle) {
    cy.get(header).should('have.text', headerTitle);
  }

  verifySavedChartsDisplayed(chartName) {
    cy.get('h4')
      .contains(chartName)
      .should('exist');
  }

  expandSavedChart(chartName) {
    const xpath = `//*[text()='${chartName}']/parent::button`;
    cy.xpath(xpath).then($button => {
      const ariaSelected = Cypress.$($button).attr('aria-selected');
      if (ariaSelected === 'false') {
        cy.wrap($button).click();
      }
    });
  }

  verifyOverallComments(cmt) {
    cy.get(overallComment).should('have.text', cmt);
  }

  verifyChartComment(cmt) {
    cy.get(chartComment)
      .contains(cmt)
      .should('be.visible');
  }

  verifyStudentAssessmentStatus(status) {
    cy.get(studentAssignmentStatus).should('have.text', status);
  }

  verifyAssessmentStatus(status) {
    cy.get(assessmentStatus).should('have.text', status);
  }
}

export default AssignmentSubmissionPage;
