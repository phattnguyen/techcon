const errorCard = '#error-card';
const errorSummary = 'div[id="error-card"] div[class="u-els-bold"]';
const errorDetail = 'li[class="c-els-list__item sng"]>button';

const errorCardSection = {
  getErrorCard: () => cy.get(errorCard),
  getErrorSummary: () => cy.get(errorSummary),
  getErrorDetails: () => cy.get(errorDetail),

  //---------------------------------Methods---------------------------------------//
  verifyErrorCardDisplayed: yes => {
    yes
      ? errorCardSection.getErrorCard().should('exist')
      : errorCardSection
          .getErrorCard()
          .children()
          .should('not.exist');
  },
  verifyErrorSummaryMsg: msg => {
    errorCardSection.getErrorSummary().should('have.text', msg);
  },
  verifyErrorDetails: msg => {
    errorCardSection.getErrorDetails().should('contain.text', msg);
  }
};

module.exports = errorCardSection;
