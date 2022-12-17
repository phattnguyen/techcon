import simsCy from '../sim.cy';
import BaseEl from './baseEl';

const searchBoxWrapper = '.c-els-field c-dropdown-search sng-multi-select-esarch__dropdown';
const searchDropdownOption = '.c-dropdown-search__option';
const div = 'div';
const li = 'li';

class SearchDropdownSelect extends BaseEl {
  constructor(locator) {
    super(locator);
    this._locator = locator;
  }

  searchAndSelectOption(option) {
    this.getWebElement(this._locator)
      .clear({ force: true })
      .type(option);
    cy.wait(500);
    this.getWebElement(this._locator)
      .parentsUntil(searchBoxWrapper)
      .children()
      .filter(searchDropdownOption)
      .find(div)
      .contains(option)
      .click({ force: true });
  }

  searchAndSelectMultiOption(options) {
    options.forEach(data => {
      this.getWebElement(this._locator)
        .clear({ force: true })
        .type(data);
      cy.wait(500);
      this.getWebElement(this._locator)
        .parentsUntil(searchBoxWrapper)
        .children()
        .filter(searchDropdownOption)
        .find(div)
        .contains(data)
        .click({ force: true });
    });
  }

  selectRandom() {
    this.getWebElement(this._locator).click({ force: true });
    this.getWebElement(this._locator)
      .parentsUntil(searchBoxWrapper)
      .children()
      .filter(searchDropdownOption)
      .find(li)
      .then($li => {
        const numberOfOptions = Cypress.$($li).length;
        cy.wrap($li)
          .eq(simsCy.randomNumber(0, numberOfOptions - 1))
          .click();
      });
  }

  isFieldEnabled(yes) {
    yes ? this.getWebElement(this._locator).should('be.enabled') : this.getWebElement(this._locator).should('be.disabled');
  }

  verifySelectedOption(option) {
    this.getWebElement(this._locator).should('contain.value', option);
  }

  verifySelectedOptions(options) {
    options.forEach(data => {
      this.getWebElement('//span[@class="c-tag-group__tag"]/span[text()="' + data + '"]').should('exist');
    });
  }

  verifyUnselectOptions(options) {
    options.forEach(data => {
      this.getWebElement('//span[@class="c-tag-group__tag"]/span[text()="' + data + '"]').should('not.exist');
    });
  }
}

export default SearchDropdownSelect;
