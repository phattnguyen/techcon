import BaseEl from './baseEl';

class TextArea extends BaseEl {
  constructor(locator) {
    super(locator);
    this._locator = locator;
  }

  inputText(text) {
    this.clearText();
    this.getWebElement(this._locator).each(el => {
      if (Cypress.$(el).css('visibility') === 'visible') {
        cy.wrap(el).type(text);
      }
    });
  }

  clearText() {
    this.getWebElement(this._locator).clear({ force: true });
  }

  verifyTextFieldValue(value) {
    this.getWebElement(this._locator).each(el => {
      if (Cypress.$(el).css('visibility') === 'visible') {
        cy.wrap(el).should('have.value', value);
      }
    });
  }
}

export default TextArea;
