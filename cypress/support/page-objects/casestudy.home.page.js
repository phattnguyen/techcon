import textArea from '../element-helpers/text.area.el';
import button from '../element-helpers/button.el';
import checkBox from '../element-helpers/checkbox.el';
import BasePage from '../page-objects/base.page';
import simsCy from '../sim.cy';

/**Locators */
const startCaseStudyBtn = '//*[text()="Start Case Study"]/parent::button';
const startPhaseBtn = '//*[text()="Start Phase"]/parent::button';
const assignmentInformationBtn = '//*[text()="Assignment Information"]/ancestor::button';
const markPhaseAsDoneBtn = '//*[contains(text(),"Mark Phase")]/ancestor::button';
const submitAnswerBtn = '//*[text()="Submit Answer"]/parent::button';
const nextQuestionBtn = '//*[text()="Next Question"]/parent::button';
const completePhaseBtn = '//*[text()="Complete Phase"]/parent::button';
const completeCSBtn = '//*[text()="Complete Case Study"]/parent::button';
const csQuizAnswers = '//form//input[contains(@id,"CHOICE")]/following-sibling::span//span[@class="c-els-field__switch"]';
const csDiagnosis = '.case-study__diagnosis';
const csQuizSection = '.case-study-quiz';

/**----------------------------------------------------------------------------------- */

const startCSButton = new button(startCaseStudyBtn);
const startPhaseButton = new button(startPhaseBtn);
const assignmentInformationButton = new button(assignmentInformationBtn);
const markPhaseAsDoneButton = new button(markPhaseAsDoneBtn);
const submitAnswerButton = new button(submitAnswerBtn);
const nextQuestionButton = new button(nextQuestionBtn);
const completePhaseButton = new button(completePhaseBtn);
const completeCaseStudyButton = new button(completeCSBtn);

class CaseStudyHomePage extends BasePage {
  clickStarCaseStudy() {
    startCSButton.click();
  }

  clickStartPhase() {
    startPhaseButton.click();
  }

  verifyCaseStudyDiagnosis(diagnosis) {
    this.getWebElement(csDiagnosis).should('have.text', diagnosis);
  }

  markPhaseAsDone() {
    assignmentInformationButton.click();
    markPhaseAsDoneButton.click();
  }

  submitQuizAnswer() {
    submitAnswerButton.scrollToElement();
    submitAnswerButton.click();
  }

  clickNextQuizQuestion() {
    nextQuestionButton.scrollToElement();
    nextQuestionButton.click();
  }

  clickCompletePhase() {
    completePhaseButton.click();
  }

  clickCompleteCaseStudy() {
    completeCaseStudyButton.click();
  }

  verifyCaseStudyQuizSectionDisplay() {
    this.getWebElement(csQuizSection).should('exist');
  }

  selectQuizAnswerRandomly() {
    cy.xpath(csQuizAnswers)
      .eq(0)
      .click({ force: true });
  }

  answerQuizQuestions() {
    cy.get('body').then(() => {
      const numberOfQuestions = Cypress.$('div[class=case-study-quiz__progress]')
        .text()
        .split(' ')[2];
      for (let i = 1; i <= numberOfQuestions; i++) {
        cy.log(`**Answering question number : ${i}**`);
        cy.wait(1500);
        this.selectQuizAnswerRandomly();
        this.submitQuizAnswer();
        cy.wait(1500);
        if (i < numberOfQuestions) {
          this.clickNextQuizQuestion();
        } else {
          return;
        }
      }
    });
  }
}

export default CaseStudyHomePage;
