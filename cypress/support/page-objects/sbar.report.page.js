const sbar = {
  getSituationField: () => cy.get('[name=summaryOfSituation]', { timeout: 60000 }),
  getBackgroundField: () => cy.get('[name=pertinentBackgroundSituation]'),
  getAssessmentField: () => cy.get('[name=assessmentSituation]'),
  getRecommandationField: () => cy.get('[name=recRequestForOrders]'),
  getPopupOKButton: () => cy.xpath('//div[@id="discardConfirmationModal"]//button/span[text()="OK"]', { timeout: 3000 }),

  inputSbarReportInfo: (sum, background, assessment, recommand) => {
    //Clear before input value
    sbar.getSituationField().clear();
    sbar.getBackgroundField().clear();
    sbar.getAssessmentField().clear();
    sbar.getRecommandationField().clear();
    //Input data
    sbar.getSituationField().type(sum);
    sbar.getBackgroundField().type(background);
    sbar.getAssessmentField().type(assessment);
    sbar.getRecommandationField().type(recommand);
  },

  verifySummaryInputData: sum => {
    sbar.getSituationField().should('have.text', sum);
  },

  verifyBackgroundInputData: bg => {
    sbar.getBackgroundField().should('have.text', bg);
  },

  verifyAssessmentInputData: asm => {
    sbar.getAssessmentField().should('have.text', asm);
  },

  verifyRecommandInputData: cmt => {
    sbar.getRecommandationField().should('have.text', cmt);
  }
};

module.exports = sbar;
