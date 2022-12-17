import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import Table from '../../element-helpers/table.el';

import PreClinicalManagerPage from './pre-clinical.save.page';

const table = new Table();
const dateOfTest = new textArea('#field-input-dateOfTest');
const category = new searchDropdown('#category');
const laboratoryTest = new searchDropdown('#laboratoryTest');
const definitionAndDescription = new textArea('#field-input-definitionAndDescription');
const testResults = 'input[id*="field-input-laboratory-test-result__test-result"]';
const testResultsDate = 'input[id*="field-input-test-result__test-date"]';
const testSignificance = 'textarea[id*="field-input-laboratory-test-result__test-significance"]';
const resultLevel = 'input[name*="result-level-selection"]';

class LaboratoryTests extends PreClinicalManagerPage {
  selectCategory(option) {
    category.searchAndSelectOption(option);
  }

  selectLaboratoryTest(option) {
    laboratoryTest.searchAndSelectOption(option);
  }

  inputDateOfTest(text) {
    dateOfTest.inputText(text);
  }

  inputDefinitionAndDescription(text) {
    definitionAndDescription.inputText(text);
  }

  inputTestResults(text) {
    cy.get(testResults).each(field => {
      cy.wrap(field).type(text);
    });
  }

  inputTestResultsDate(text) {
    cy.get(testResultsDate).each(field => {
      cy.wrap(field).type(text);
    });
  }

  inputTestSignificance(text) {
    cy.get(testSignificance).each(field => {
      cy.wrap(field).type(text);
    });
  }

  selectResultLevel(option) {
    cy.get(resultLevel.concat(`[value='${option}']`)).each(field => {
      cy.wrap(field).click({ force: true });
    });
  }

  verifySelectedCategory(option) {
    category.verifySelectedOption(option);
  }

  verifySelectedLaboratoryTest(option) {
    laboratoryTest.verifySelectedOption(option);
  }

  verifyTestResultHeaderDisplay(yes) {
    yes
      ? cy
          .get('h2')
          .contains('Laboratory Test Results')
          .should('exist')
      : cy
          .get('h2')
          .contains('Laboratory Test Results')
          .should('not.exist');
  }

  /**
   *
   * @param {*} title
   * @param {*} dataRow
   * use for verifying saved data table rows number
   */
  verifyDataTableShowCorrectRowNum(title, dataRow) {
    const xpath = `//div[text()="${title}"]/ancestor::li//table//tr`;
    cy.xpath(xpath).should('have.length', dataRow + 1);
  }

  verifySavedDataTableContent(header, value) {
    table.verifyCellValueByHeaderExist(header, value);
  }
}

export default LaboratoryTests;
