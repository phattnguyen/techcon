import textArea from '../element-helpers/text.area.el';
import button from '../element-helpers/button.el';
import checkBox from '../element-helpers/checkbox.el';
import select from '../element-helpers/select.el';
import BasePage from '../page-objects/base.page';
import simsCy from '../sim.cy';
import el from '../element-helpers/baseEl';

/**Locators */
const chartTypeEHRBtn = '//h1[text()="Empty EHR (SimChart)"]/ancestor::button';
const chartTypeCSBtn = '//h1[text()="Case Study (SimChart)"]/ancestor::button';

const nextConfigurationBtn = '#next-btn';
const saveBtn = '#save-btn';
const rightSideBarBackBtn = '//div[@class="sidebar show animated clickable"]//button/span[text()="Back"]';
const backBtn = '#back-btn';
const closeBtn = '//*[text()="Close"]/parent::button';
const backToSherpathBtn = '//*[text()="Back to Sherpath"]/parent::button';
const assignAnotherBtn = '//*[text()="Assign Another"]/parent::button';
const demoCaseStudyBtn = '//*[text()="Demo Case Study"]/ancestor::button';
const switchToStudentViewBtn = '//*[text()="Switch to Student View"]/parent::button';
const quickViewOverviewChk = '[id="field-input-overview"]';
const quickViewPhasesChk = '[id="field-input-phases"]';
const quickViewQuestionsChk = '[id="field-input-questions"]';
const backToQuickViewXBtn = '[class="page-header__close-wrapper"]>svg';

const assignmentTitleTxt = '[id="field-input-title"]';
const ehrAssignmentObjectivesTxt = '[id=field-input-Objectives]';
const availableDateTxt = '[id="field-input-date-availableDate"]';
const dueDateTxt = '[id="field-input-date-dueDate"]';
const availableTimeHourSelect = '#field-input-incrementHour-time-availableDate';
const dueTimeHourSelect = '#field-input-incrementHour-time-dueDate';
const availableTimeMinSelect = '#field-input-incrementMinute-time-availableDate';
const dueTimeMinSelect = '#field-input-incrementMinute-time-dueDate';

const assignmentGradeTypeRadios = '[name="assignmentGradeType"]';

const quickViewOverviewBox = '//*[@class="section-overview section-box"]';
const quickViewPhaseBox = '//*[@class="section-phase section-box"]';
const quickViewQuestionBox = '//*[@class="section-quiz-question section-box"]';

const dueDateTimeConventionCurrent = 'div[id=field-wrap-time-dueDate]>div>div>button>span[aria-hidden=true]';
const availableDateTimeConventionCurrent = 'div[id=field-wrap-availableDate]>div>div>button>span[aria-hidden=true]';
const dueTimeMinIncrementArrow = "div[id=field-wrap-incrementMinute-time-dueDate]>div>svg[title='Chevron Up']";
/**----------------------------------------------------------------------------------- */

const chartTypeEHRButton = new button(chartTypeEHRBtn);
const chartTypeCSButton = new button(chartTypeCSBtn);
const nextConfigurationButton = new button(nextConfigurationBtn);
const backButton = new button(backBtn);
const sideBarBackButton = new button(rightSideBarBackBtn);

const saveButton = new button(saveBtn);
const closeButton = new button(closeBtn);
const backToSherpathButton = new button(backToSherpathBtn);
const assignAnotherButton = new button(assignAnotherBtn);
const demoCaseStudyButton = new button(demoCaseStudyBtn);
const switchToStudentViewButton = new button(switchToStudentViewBtn);
const backToQuickViewButton = new button(backToQuickViewXBtn);

const assignmentGradeTypeRadio = new checkBox(assignmentGradeTypeRadios);
const quickViewOverviewCheckBox = new checkBox(quickViewOverviewChk);
const quickViewPhasesCheckBox = new checkBox(quickViewPhasesChk);
const quickViewQuestionsCheckBox = new checkBox(quickViewQuestionsChk);

const assignmentTitleText = new textArea(assignmentTitleTxt);
const availableDateText = new textArea(availableDateTxt);
const dueDateText = new textArea(dueDateTxt);
const ehrAssignmentObjectivesText = new textArea(ehrAssignmentObjectivesTxt);

const quickViewOverviewSection = new el(quickViewOverviewBox);
const quickViewPhaseSection = new el(quickViewPhaseBox);
const quickViewQuestionSection = new el(quickViewQuestionBox);

const availableTimeHourSelectBox = new select(availableTimeHourSelect);
const dueTimeHourSelectBox = new select(dueTimeHourSelect);
const availableTimeMinSelectBox = new select(availableTimeMinSelect);
const dueTimeMinSelectBox = new select(dueTimeMinSelect);

const dueTimeMinIncrementButton = new button(dueTimeMinIncrementArrow);

class AssignmentCreatePage extends BasePage {
  selectAssignmentType(type) {
    if (type === 'Case Study') {
      chartTypeCSButton.dblclick();
    } else {
      chartTypeEHRButton.dblclick();
    }
  }

  selectCaseStudyContent(title) {
    this.getWebElement(`//div[text()="${title}"]/ancestor::tr[@class="c-els-table__row"]//input`).click({ force: true });
  }

  clickQuickViewCaseStudyByTitle(title) {
    this.getWebElement(`//div[text()="${title}"]/ancestor::tr[@class="c-els-table__row"]//button`).click({ force: true });
  }

  clickNextConfiguration() {
    nextConfigurationButton.click();
  }

  clickBack() {
    backButton.click();
  }

  clickRightSideBarBackButton() {
    sideBarBackButton.click();
  }

  clickClose() {
    closeButton.click();
  }

  clickSaveAndComplete() {
    saveButton.click();
  }

  clickBackToSherpath() {
    backToSherpathButton.click();
  }

  clickAssignAnotherAssignment() {
    assignAnotherButton.click();
  }

  clickDemoCaseStudy() {
    demoCaseStudyButton.click();
  }

  clickSwitchToStudentView() {
    switchToStudentViewButton.click();
  }

  clickBackToQuickView() {
    backToQuickViewButton.click();
  }

  inputAssignmentTitle(title) {
    assignmentTitleText.inputText(title);
  }

  inputAvailableDate(date) {
    availableDateText.inputText(date);
  }

  inputDueDate(date) {
    dueDateText.inputText(date);
  }

  clickIncrementMinuteDueTime(min) {
    for (let i = 0; i < min; i++) {
      dueTimeMinIncrementButton.click();
    }
  }

  inputEHRAssignmentObjectives(text) {
    ehrAssignmentObjectivesText.inputText(text);
  }

  clearAssignmentDueDate() {
    dueDateText.clearText();
  }

  clearAssignmentAvailableDate() {
    availableDateText.clearText();
  }

  selectAssignmentGradeType(type) {
    assignmentGradeTypeRadio.selectRadioByLabel(type);
  }

  selectAvailableTimeHour(hour) {
    availableTimeHourSelectBox.selectByOption(hour);
  }

  selectDueTimeHour(hour) {
    dueTimeHourSelectBox.selectByOption(hour);
  }

  selectAvailableTimeMinute(min) {
    availableTimeMinSelectBox.selectByOption(min);
  }

  selectDueTimeMinute(min) {
    dueTimeMinSelectBox.selectByOption(min);
  }

  selectDueDateTimeConvention(value) {
    this.getWebElement(dueDateTimeConventionCurrent).then($currentVal => {
      const currValue = $currentVal.text();
      if (currValue !== value) {
        this.getWebElement(dueDateTimeConventionCurrent)
          .parent()
          .click();
      } else {
        return;
      }
    });
  }

  verifyAssignmentCreatedSuccessfully() {
    simsCy.verifyTextPresents('This assignment was successfully added.');
    cy.log('Created new assignement successfully');
  }

  verifyAssignmentEditedSuccessfully() {
    simsCy.verifyTextPresents('This assignment was successfully edited.');
    cy.log('Edit assignement successfully');
  }

  verifyNavigateToSimChart() {
    cy.url().should('include', 'simchart-charting-react');
  }

  verifyQuickViewCaseStudyName(name) {
    this.getWebElement('.case-study-name')
      .contains(name)
      .should('be.visible');
  }

  verifyQuickViewOverviewSectionDisplayed(yes) {
    quickViewOverviewSection.verifyElementExist(yes);
  }

  verifyQuickViewPhaseSectionDisplayed(yes) {
    quickViewPhaseSection.verifyElementExist(yes);
  }

  verifyQuickViewQuestionSectionDisplayed(yes) {
    quickViewQuestionSection.verifyElementExist(yes);
  }
  verifyDefaultAssignmentTitle(title) {
    assignmentTitleText.verifyTextFieldValue(title);
  }

  checkFilterItemOverview(yes) {
    yes ? quickViewOverviewCheckBox.check() : quickViewOverviewCheckBox.uncheck();
  }

  checkFilterItemPhases(yes) {
    yes ? quickViewPhasesCheckBox.check() : quickViewPhasesCheckBox.uncheck();
  }

  checkFilterItemQuestions(yes) {
    yes ? quickViewQuestionsCheckBox.check() : quickViewQuestionsCheckBox.uncheck();
  }

  verifyAssignmentTitle(title) {
    assignmentTitleText.verifyTextFieldValue(title);
  }
}

export default AssignmentCreatePage;
