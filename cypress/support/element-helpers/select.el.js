import simsCy from '../sim.cy';
import BaseEl from './baseEl';

class Select extends BaseEl {
  constructor(locator) {
    super(locator);
    this._locator = locator;
  }

  selectByOption(option) {
    cy.log(`Going to select option : ${option}`);
    this.getWebElement(this._locator).select(option);
  }

  selectRandom() {
    this.getWebElement(this._locator)
      .children()
      .then($el => {
        let optionArray = [];
        for (let i = 0; i < Cypress.$($el).length; i++) {
          optionArray = [
            ...optionArray,
            Cypress.$($el)
              .eq(i)
              .attr('value')
          ];
        }
        this.selectByOption(optionArray[simsCy.randomNumber(0, optionArray.length - 1)]);
      });
  }

  verifyNumberOfOptions(num) {
    this.getWebElement(this._locator)
      .children()
      .then($el => {
        expect(num).to.equal(Cypress.$($el).length);
      });
  }

  verifySelectedValue(value) {
    this.getWebElement(`select${this._locator} option:selected`).should('have.text', `${value}`);
  }
}

export default Select;
