import { isNonNullChain } from 'typescript';
import basePage from '../../page-objects/base.page';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const errorMessage = '.u-els-color-error';

const communicateSelect = new searchDropdownSelect('#communicate');
const communicateOtherTXT = new textArea('#field-input-communicateOther');
const problemExistedSelect = new searchDropdownSelect('#problemExisted');
const problemExistedOtherTXT = new textArea('#field-input-problemExistedOther');
const admittedHospitalTXT = new textArea('#field-input-admittedHospital');
const contactPersonRadio = new checkBox('[name="contactPerson"]');
const contactPersonNameTXT = new textArea('#field-input-contactPersonName');
const contactPersonPhoneTXT = new textArea('#field-input-contactPersonPhone');
const healthProblemHomeTXT = new textArea('#field-input-healthProblemHome');

const canReadRadio = new checkBox('[name="canRead"]');
const barriersLearningRadio = new checkBox('[name="barriersLearning"]');
const canWriteRadio = new checkBox('[name="canWrite"]');
const barriersLearningProblemsSelect = new searchDropdownSelect('#barriersLearningProblems');

const primaryLanguageSelect = new searchDropdownSelect('#primaryLanguage');
const primaryLanguageOtherTXT = new textArea('#field-input-primaryLanguageOther');
const primaryLanguageNeedTranslatorRadio = new checkBox('[name="primaryLanguageNeedTranslator"]');
const haveLivingRadio = new checkBox('[name="haveLiving"]');
const livingAvailableSelect = new searchDropdownSelect('#livingAvailable');

const preferInstructionsSelect = new searchDropdownSelect('#preferInstructions');
const preferInstructionsOtherTXT = new textArea('#field-input-preferInstructionsOther');
const educationLevelSelect = new searchDropdownSelect('#educationLevel');
const educationLevelOtherTXT = new textArea('#field-input-educationLevelOther');
const visitorRestrictionsTXT = new textArea('#field-input-visitorRestrictions');

class PlanningForHospitalStay extends basePage {
  selectCommunicate(option) {
    communicateSelect.searchAndSelectOption(option);
  }

  communicateOther(value) {
    communicateOtherTXT.inputText(value);
  }

  selectProblemExisted(option) {
    problemExistedSelect.searchAndSelectOption(option);
  }

  problemExistedOther(value) {
    problemExistedOtherTXT.inputText(value);
  }

  admittedHospital(value) {
    admittedHospitalTXT.inputText(value);
  }

  contactPerson(label) {
    contactPersonRadio.selectRadioByLabel(label);
  }

  contactPersonName(value) {
    contactPersonNameTXT.inputText(value);
  }

  contactPersonPhone(value) {
    contactPersonPhoneTXT.inputText(value);
  }

  healthProblemHome(value) {
    healthProblemHomeTXT.inputText(value);
  }

  canRead(label) {
    canReadRadio.selectRadioByLabel(label);
  }

  barriersLearning(label) {
    barriersLearningRadio.selectRadioByLabel(label);
  }

  canWrite(label) {
    canWriteRadio.selectRadioByLabel(label);
  }

  selectBarriersLearningProblems(options) {
    cy.get('div[class="sng-multi-select-search barriersLearningProblems"]')
      .children()
      .filter('div')
      .then($el => {
        if ($el.length === 1) {
          barriersLearningProblemsSelect.searchAndSelectMultiOption(options);
        }
      });
  }

  selectPrimaryLanguage(option) {
    primaryLanguageSelect.searchAndSelectOption(option);
  }

  primaryLanguageOther(value) {
    primaryLanguageOtherTXT.inputText(value);
  }

  primaryLanguageNeedTranslator(label) {
    primaryLanguageNeedTranslatorRadio.selectRadioByLabel(label);
  }

  haveLiving(label) {
    haveLivingRadio.selectRadioByLabel(label);
  }

  selectLivingAvailable(option) {
    livingAvailableSelect.searchAndSelectOption(option);
  }

  selectPreferInstructions(option) {
    preferInstructionsSelect.searchAndSelectOption(option);
  }

  preferInstructionsOther(value) {
    preferInstructionsOtherTXT.inputText(value);
  }

  selectEducationLevel(option) {
    educationLevelSelect.searchAndSelectOption(option);
  }

  educationLevelOther(value) {
    educationLevelOtherTXT.inputText(value);
  }

  visitorRestrictions(value) {
    visitorRestrictionsTXT.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    communicateSelect.verifyElementExist(true);
    problemExistedSelect.verifyElementExist(true);
    admittedHospitalTXT.verifyElementExist(true);
    contactPersonRadio.verifyElementExist(true);
    contactPersonPhoneTXT.verifyElementExist(true);
    contactPersonNameTXT.verifyElementExist(true);
    healthProblemHomeTXT.verifyElementExist(true);
    canReadRadio.verifyElementExist(true);
    canWriteRadio.verifyElementExist(true);
    barriersLearningRadio.verifyElementExist(true);
    barriersLearningProblemsSelect.verifyElementExist(true);
    primaryLanguageSelect.verifyElementExist(true);
    primaryLanguageNeedTranslatorRadio.verifyElementExist(true);
    haveLivingRadio.verifyElementExist(true);
    livingAvailableSelect.verifyElementExist(true);
    preferInstructionsSelect.verifyElementExist(true);
    educationLevelSelect.verifyElementExist(true);
    visitorRestrictionsTXT.verifyElementExist(true);
  }

  verifyOtherFieldsEnabled(yes) {
    communicateOtherTXT.verifyElementEnabled(yes);
    problemExistedOtherTXT.verifyElementEnabled(yes);
    primaryLanguageOtherTXT.verifyElementEnabled(yes);
    preferInstructionsOtherTXT.verifyElementEnabled(yes);
    educationLevelOtherTXT.verifyElementEnabled(yes);
  }

  verifyContactPersonFieldEnabled(yes) {
    contactPersonRadio.verifyElementEnabled(yes);
  }

  verifyContactPersonNamePhoneEnabled(yes) {
    contactPersonNameTXT.verifyElementEnabled(yes);
    contactPersonPhoneTXT.verifyElementEnabled(yes);
  }

  verifyBarriersLearningProblemsFieldEnabled(yes) {
    barriersLearningProblemsSelect.verifyElementEnabled(yes);
  }

  verifyLivingAvailableFieldEnabled(yes) {
    livingAvailableSelect.verifyElementEnabled(yes);
  }

  verifyPrimaryLanguageNeedTranslatorFieldEnabled(yes) {
    primaryLanguageNeedTranslatorRadio.verifyElementEnabled(yes);
  }

  validateCommunicate(value) {
    communicateSelect.verifyTextFieldValue(value);
  }

  validateCommunicateOther(value) {
    communicateOtherTXT.verifyTextFieldValue(value);
  }

  validateProblemExisted(value) {
    problemExistedSelect.verifyTextFieldValue(value);
  }

  validateProblemExistedOther(value) {
    problemExistedOtherTXT.verifyTextFieldValue(value);
  }

  validateAdmittedHospital(value) {
    admittedHospitalTXT.verifyTextFieldValue(value);
  }

  validateContactPersonChecked(label) {
    contactPersonRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateContactPersonName(value) {
    contactPersonNameTXT.verifyTextFieldValue(value);
  }

  validateContactPersonPhone(value) {
    contactPersonPhoneTXT.verifyTextFieldValue(value);
  }

  validateHealthProblemHome(value) {
    healthProblemHomeTXT.verifyTextFieldValue(value);
  }

  validateCanReadChecked(label) {
    canReadRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateCanWriteChecked(label) {
    canWriteRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateBarriersLearningChecked(label) {
    barriersLearningRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateBarriersLearningProblems(options) {
    barriersLearningProblemsSelect.verifySelectedOptions(options);
  }

  validatePrimaryLanguage(value) {
    primaryLanguageSelect.verifyTextFieldValue(value);
  }

  validatePrimaryLanguageOther(value) {
    primaryLanguageOtherTXT.verifyTextFieldValue(value);
  }

  validatePrimaryLanguageNeedTranslatorChecked(label) {
    primaryLanguageNeedTranslatorRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateHaveLivingChecked(label) {
    haveLivingRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateLivingAvailable(value) {
    livingAvailableSelect.verifyTextFieldValue(value);
  }

  validatePreferInstructions(value) {
    preferInstructionsSelect.verifyTextFieldValue(value);
  }

  validatePreferInstructionsOther(value) {
    preferInstructionsOtherTXT.verifyTextFieldValue(value);
  }

  validateVisitorRestrictions(value) {
    visitorRestrictionsTXT.verifyTextFieldValue(value);
  }

  validateEducationLevelOther(value) {
    educationLevelOtherTXT.verifyTextFieldValue(value);
  }

  validateEducationLevel(value) {
    educationLevelSelect.verifyTextFieldValue(value);
  }

  validateRequiredOtherFields(message) {
    this.getWebElement(errorMessage).should('have.text', message);
  }
}
export default PlanningForHospitalStay;
