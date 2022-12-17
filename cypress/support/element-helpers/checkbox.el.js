import BaseEl from './baseEl';

class CheckBox extends BaseEl {
  constructor(locator) {
    super(locator);
    this._locator = locator;
  }

  check() {
    this.getWebElement(this._locator).check({ force: true });
  }

  uncheck() {
    this.getWebElement(this._locator).uncheck({ force: true });
  }

  selectRadioByLabel(label) {
    const labelPattern = `^${label}$`;
    this.getWebElement(this._locator)
      .siblings()
      .contains(new RegExp(labelPattern, 'g'))
      .click({ force: true });
  }

  selectRadioByLabelWithoutRegex(label) {
    this.getWebElement(this._locator)
      .siblings()
      .contains(label)
      .click({ force: true });
  }

  checkMultiOptions(options) {
    options.forEach(label => {
      this.getWebElement(this._locator)
        .siblings()
        .contains(label)
        .click({ force: true });
    });
  }

  verifyRadioButtonIsCheckedByLabel(label) {
    this.getWebElement(this._locator)
      .siblings()
      .contains(label)
      .prev()
      .should('be.checked');
  }

  /**
   * This function is currently used for only Admission History - Nutrition
   * @param {*} label
   */
  verifyRadioButtonIsChecked(label) {
    this.getWebElement(this._locator.concat('[checked]'))
      .siblings()
      .children('span[class*=scale__radio-label]')
      .contains(label)
      .should('exist');
  }

  /**
   * Two functions are currently used for only Special Charts - Braden Scale
   * @param {*} label
   */

  verifyRadioButtonIsCheckedByLabelTMP(label) {
    this.getWebElement(this._locator)
      .siblings()
      .contains(label)
      .parent()
      .prev()
      .should('be.checked');
  }

  verifyRadioButtonIsNotCheckedByLabelTMP(label) {
    this.getWebElement(this._locator)
      .siblings()
      .contains(label)
      .parent()
      .prev()
      .should('not.be.checked');
  }

  verifyRadioButtonIsNotCheckedByLabel(label) {
    this.getWebElement(this._locator)
      .siblings()
      .contains(label)
      .prev()
      .should('not.be.checked');
  }

  verifyCheckBoxIsChecked(yes) {
    yes ? this.getWebElement(this._locator).should('be.checked') : this.getWebElement(this._locator).should('not.be.checked');
  }

  verifyRadioEnabledByLabel(label, yes) {
    yes
      ? this.getWebElement(this._locator)
          .siblings()
          .contains(label)
          .prev()
          .should('not.be.disabled')
      : this.getWebElement(this._locator)
          .siblings()
          .contains(label)
          .prev()
          .should('be.disabled');
  }
}

export default CheckBox;
