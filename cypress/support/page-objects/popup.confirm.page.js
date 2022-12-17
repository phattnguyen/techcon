import basePage from './base.page';

const simsCy = require('../sim.cy');
const btn = 'button';
const modal = 'div[id*=modal__content]';

class Popup extends basePage {
  okBtn() {
    return this.getWebElement(modal)
      .find(btn)
      .contains('OK');
  }
  cancelBtn() {
    return this.getWebElement(modal)
      .find(btn)
      .contains('Cancel');
  }

  continueBtn() {
    return this.getWebElement(modal)
      .find(btn)
      .contains('Continue');
  }

  editBtn() {
    return this.getWebElement(modal)
      .find(btn)
      .contains('Edit');
  }

  verifyOkButtonDisplay() {
    this.okBtn().should('be.visible');
  }

  verifyOkCancelDisplay() {
    this.cancelBtn().should('be.visible');
  }

  verifyContinueBtnDisplay() {
    this.continueBtn().should('be.visible');
  }

  verifyEditBtnDisplay() {
    this.editBtn().should('be.visible');
  }

  clickCancel() {
    this.cancelBtn().click();
  }

  clickContinue() {
    this.continueBtn().click();
  }

  closePopupModal() {
    simsCy.getCloseModalIcon().click();
  }

  verifyPopupTitle(title) {
    cy.get('h2')
      .contains(title)
      .should('be.visible');
  }

  verifyPopupContent(content) {
    cy.get('p')
      .contains(content)
      .should('be.visible');
  }
}

export default Popup;
