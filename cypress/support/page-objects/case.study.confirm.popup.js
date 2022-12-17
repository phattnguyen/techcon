import confirmPopup from './popup.confirm.page';

const title = 'h3';
const content = 'p';

class CaseStudyConfirmPopup extends confirmPopup {
  verifyCaseStudyConfirmPopupDisplayed() {
    this.getWebElement(title)
      .contains('Please confirm.')
      .should('be.visible');
    this.getWebElement(content)
      .contains(
        'Before proceeding to the quiz associated with this phase of the case study, please ensure that you have completed all student actions noted in the Phase Instructions.'
      )
      .should('be.visible');
  }
}
export default CaseStudyConfirmPopup;
