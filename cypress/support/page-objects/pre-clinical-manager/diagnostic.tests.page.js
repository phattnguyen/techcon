import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import BasePage from '../base.page';
import PreClinicalManagerPage from './pre-clinical.save.page';

const dateOfTest = new textArea('#field-input-dateOfTest');
const categorySelect = new searchDropdown('#category');
const diagnosticTestSelect = new searchDropdown('#diagnosticTest');
const definitionOfTestTXT = new textArea('#field-input-definitionOfTest');
const testOrderedDescriptionTXT = new textArea('#field-input-testOrderedDescription');
const findingsAndResultsTXT = new textArea('#field-input-findingsAndResults');
const diagnosticTestDetailTXT = new textArea('#field-input-diagnosticTestDetail');
const editDateOfTest = new textArea('div[class*=sidebar__container] >* *[id=field-input-dateOfTest]');
const editDefinitionOfTest = new textArea('div[class*=sidebar__container] >* *[id=field-input-definitionOfTest]');
const editTestOrderedDescription = new textArea('div[class*=sidebar__container] >* *[id=field-input-testOrderedDescription]');
const editFindingsAndResults = new textArea('div[class*=sidebar__container] >* *[id=field-input-findingsAndResults]');

class DiagnosticTests extends PreClinicalManagerPage {
  enterDateOfTest(value) {
    dateOfTest.inputText(value);
  }

  selectCategory(option) {
    categorySelect.searchAndSelectOption(option);
  }

  selectDiagnosticTest(option) {
    diagnosticTestSelect.searchAndSelectOption(option);
  }

  enterDefinitionOfTest(value) {
    definitionOfTestTXT.inputText(value);
  }

  enterTestOrderedDescription(value) {
    testOrderedDescriptionTXT.inputText(value);
  }

  enterFindingsAndResults(value) {
    findingsAndResultsTXT.inputText(value);
  }

  enterDiagnosticTestDetail(value) {
    diagnosticTestDetailTXT.inputText(value);
  }

  enterEditDateOfTest(value) {
    editDateOfTest.inputText(value);
  }

  enterEditDefinitionOfTest(value) {
    editDefinitionOfTest.inputText(value);
  }

  enterEditTestOrderedDescription(value) {
    editTestOrderedDescription.inputText(value);
  }

  enterEditFindingsAndResults(value) {
    editFindingsAndResults.inputText(value);
  }

  verifyDiagnosticTestDetailFielEnable() {
    diagnosticTestDetailTXT.verifyElementEnabled(true);
  }

  verifyAllFieldsDisplayed() {
    dateOfTest.verifyElementExist(true);
    categorySelect.verifyElementExist(true);
    diagnosticTestSelect.verifyElementExist(true);
    definitionOfTestTXT.verifyElementExist(true);
    testOrderedDescriptionTXT.verifyElementExist(true);
    findingsAndResultsTXT.verifyElementExist(true);
  }

  verify;

  validateDefinitionOfTest(value) {
    definitionOfTestTXT.verifyTextFieldValue(value);
  }

  validateFindingsAndResults(value) {
    findingsAndResultsTXT.verifyTextFieldValue(value);
  }

  validateTestOrderedDescription(value) {
    testOrderedDescriptionTXT.verifyTextFieldValue(value);
  }
}

export default DiagnosticTests;
