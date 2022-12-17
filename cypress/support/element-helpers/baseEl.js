import BasePage from '../page-objects/base.page';

class BaseEl extends BasePage {
  constructor(locator) {
    super();
    this._locator = locator;
  }

  verifyElementExist(yes) {
    yes ? this.getWebElement(this._locator).should('exist') : this.getWebElement(this._locator).should('not.exist');
  }

  verifyElementVisible(yes) {
    yes ? this.getWebElement(this._locator).should('be.visible') : this.getWebElement(this._locator).should('not.be.visible');
  }

  verifyElementEnabled(yes) {
    yes ? this.getWebElement(this._locator).should('be.enabled') : this.getWebElement(this._locator).should('be.disabled');
  }

  verifyTextFieldValue(value) {
    this.getWebElement(this._locator).should('have.value', value);
  }

  scrollToElement() {
    this.getWebElement(this._locator).scrollIntoView();
  }
}

export default BaseEl;
