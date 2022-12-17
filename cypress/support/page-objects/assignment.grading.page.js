import textArea from '../element-helpers/text.area.el';
import button from '../element-helpers/button.el';
import checkBox from '../element-helpers/checkbox.el';
import select from '../element-helpers/select.el';
import table from '../element-helpers/table.el';
import BasePage from './base.page';
import simsCy from '../sim.cy';

/**Locators */
const assignementTitle = 'div[class=grading-progress]>h1';
const statusSelectbox = new select('select[id=field-input-undefined]');
const studentSelectbox = new select('#field-input-student-options');
const chartComment = new textArea('[name=chart-comments-textarea]');
const overallComment = new textArea('[name=overall-comments-textarea]');
const viewEHRChartsBtn = new button('//*[text()="View EHR Charts"]/parent::button');
const backToSubmissionBtn = new button("//span[contains(text(),'Back to Submission')]/ancestor::button");
const tableData = new table();

class AssignmentGradingPage extends BasePage {
  verifyAssingmentTitle(title) {
    cy.get(assignementTitle).should('have.text', title);
  }

  verifyStartDate(date) {
    cy.get('div')
      .contains('Start Date')
      .next()
      .should('contain.text', date);
  }

  verifyDueDate(date) {
    cy.get('div')
      .contains('Due Date')
      .next()
      .should('contain.text', date);
  }

  verifyGradingType(type) {
    cy.get('div')
      .contains('Grading')
      .siblings()
      .contains(type)
      .should('be.visible');
  }

  verifyStudentSubmitted(studentSubmitted) {
    cy.get('div')
      .contains('Students Submitted')
      .next()
      .should('contain.text', studentSubmitted);
  }

  verifyStudentName(name) {
    tableData.verifyCellValueByHeaderExist('Name', name);
  }

  selectStudentForGrading(stu) {
    studentSelectbox.selectByOption(stu);
  }

  selectStatus(status) {
    statusSelectbox.selectByOption(status);
  }

  clickViewStudentSubmission(studentName) {
    tableData.clickCell(studentName, 'Name');
  }

  clickViewEHRCharts() {
    viewEHRChartsBtn.click();
  }

  clickBackToSubmission() {
    backToSubmissionBtn.click();
  }

  inputChartComment(cmt) {
    chartComment.inputText(cmt);
  }

  inputOverallComment(cmt) {
    overallComment.inputText(cmt);
  }

  verifyViewEHRChartsButtonEnable(option) {
    viewEHRChartsBtn.verifyElementEnabled(option);
  }

  verifyChartComments(cmt) {
    chartComment.verifyFieldLabel(cmt);
  }

  verifyOverallComment(cmt) {
    overallComment.verifyFieldLabel(cmt);
  }

  verifyStudentAssessmentDetail(student, value) {
    tableData.verifyDataRowExist(student, value);
  }

  verifyGradingBlock(option) {
    option ? cy.get('.overlay-block').should('exist') : cy.get('.overlay-block').should('not.exist');
  }
}

export default AssignmentGradingPage;
