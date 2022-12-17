import BaseEl from './baseEl';

class Button extends BaseEl {
  constructor(locator) {
    super(locator);
    this._locator = locator;
  }

  click() {
    this.getWebElement(this._locator)
      .first()
      .click({ force: true });
  }
  dblclick() {
    this.getWebElement(this._locator)
      .first()
      .dblclick({ force: true });
  }
}

export default Button;
