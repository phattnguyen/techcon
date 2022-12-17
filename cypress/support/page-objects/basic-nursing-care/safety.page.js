import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import BasicNursingCare from './basic.nursing.care.page';

const fallPrecautionsSearchdropdown = new searchDropdown('#fallPrecautions');
const levelOfSafetyPrecautionsSearchdropdown = new searchDropdown('#levelOfSafetyPrecautions');
const nursePatientRelationshipStrategiesForSafetySearchdropdown = new searchDropdown('#nursePatientRelationshipStrategiesForSafety');
const safetyInMilieuSearchdropdown = new searchDropdown('#safetyInMilieu');
const generalSafetySearchdropdown = new searchDropdown('#generalSafety');
const roomPlanGradationSearchdropdown = new searchDropdown('#roomPlanGradation');
const patientResponseToSafetyMeasuresSearchdropdown = new searchDropdown('#patientResponseToSafetyMeasures');
const fallPrecautionsNotesText = new textArea('#field-input-fallPrecautionsNotes');
const levelOfSafetyPrecautionsNotesText = new textArea('#field-input-levelOfSafetyPrecautionsNotes');
const nursePatientRelationshipStrategiesForSafetyNotesText = new textArea('#field-input-nursePatientRelationshipStrategiesForSafetyNotes');
const safetyInMilieuNotesText = new textArea('#field-input-safetyInMilieuNotes');
const generalSafetyNotesText = new textArea('#field-input-generalSafetyNotes');
const roomPlanGradationNotesText = new textArea('#field-input-roomPlanGradationNotes');
const patientResponseToSafetyMeasuresNotesText = new textArea('#field-input-patientResponseToSafetyMeasuresNotes');

class SafetyPage extends BasicNursingCare {
  selectFallPrecautions(options) {
    fallPrecautionsSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectLevelOfSafetyPrecautions(options) {
    levelOfSafetyPrecautionsSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectNursePatientRelationshipStrategiesForSafety(options) {
    nursePatientRelationshipStrategiesForSafetySearchdropdown.searchAndSelectMultiOption(options);
  }

  selectSafetyInMilieu(options) {
    safetyInMilieuSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectGeneralSafety(options) {
    generalSafetySearchdropdown.searchAndSelectMultiOption(options);
  }

  selectRoomPlanGradation(options) {
    roomPlanGradationSearchdropdown.searchAndSelectMultiOption(options);
  }

  selectPatientResponseToSafetyMeasures(options) {
    patientResponseToSafetyMeasuresSearchdropdown.searchAndSelectMultiOption(options);
  }

  inputFallPrecautionsNotes(text) {
    fallPrecautionsNotesText.inputText(text);
  }

  inputLevelOfSafetyPrecautionsNotes(text) {
    levelOfSafetyPrecautionsNotesText.inputText(text);
  }

  inputNursePatientRelationshipStrategiesForSafetyNotes(text) {
    nursePatientRelationshipStrategiesForSafetyNotesText.inputText(text);
  }

  inputSafetyInMilieuNotes(text) {
    safetyInMilieuNotesText.inputText(text);
  }

  inputGeneralSafetyNotes(text) {
    generalSafetyNotesText.inputText(text);
  }

  inputRoomPlanGradationNotes(text) {
    roomPlanGradationNotesText.inputText(text);
  }

  inputPatientResponseToSafetyMeasuresNotes(text) {
    patientResponseToSafetyMeasuresNotesText.inputText(text);
  }

  verifyAllFieldsEnable(option) {
    fallPrecautionsSearchdropdown.verifyElementEnabled(option);
    levelOfSafetyPrecautionsSearchdropdown.verifyElementEnabled(option);
    nursePatientRelationshipStrategiesForSafetySearchdropdown.verifyElementEnabled(option);
    safetyInMilieuSearchdropdown.verifyElementEnabled(option);
    generalSafetySearchdropdown.verifyElementEnabled(option);
    roomPlanGradationSearchdropdown.verifyElementEnabled(option);
    patientResponseToSafetyMeasuresSearchdropdown.verifyElementEnabled(option);
    fallPrecautionsNotesText.verifyElementEnabled(option);
    levelOfSafetyPrecautionsNotesText.verifyElementEnabled(option);
    nursePatientRelationshipStrategiesForSafetyNotesText.verifyElementEnabled(option);
    safetyInMilieuNotesText.verifyElementEnabled(option);
    generalSafetyNotesText.verifyElementEnabled(option);
    roomPlanGradationNotesText.verifyElementEnabled(option);
    patientResponseToSafetyMeasuresNotesText.verifyElementEnabled(option);
  }

  verifyFallPrecautionsSelectedOption(yes, options) {
    yes ? fallPrecautionsSearchdropdown.verifySelectedOptions(options) : fallPrecautionsSearchdropdown.verifyUnselectOptions(options);
  }

  verifyLevelOfSafetyPrecautionsSelectedOption(yes, options) {
    yes ? levelOfSafetyPrecautionsSearchdropdown.verifySelectedOptions(options) : levelOfSafetyPrecautionsSearchdropdown.verifyUnselectOptions(options);
  }

  verifyNursePatientRelationshipStrategiesForSafetySelectedOption(yes, options) {
    yes
      ? nursePatientRelationshipStrategiesForSafetySearchdropdown.verifySelectedOptions(options)
      : nursePatientRelationshipStrategiesForSafetySearchdropdown.verifyUnselectOptions(options);
  }

  verifySafetyInMilieuSelectedOption(yes, options) {
    yes ? safetyInMilieuSearchdropdown.verifySelectedOptions(options) : safetyInMilieuSearchdropdown.verifyUnselectOptions(options);
  }

  verifyGeneralSafetySelectedOption(yes, options) {
    yes ? generalSafetySearchdropdown.verifySelectedOptions(options) : generalSafetySearchdropdown.verifyUnselectOptions(options);
  }

  verifyRoomPlanGradationSelectedOption(yes, options) {
    yes ? roomPlanGradationSearchdropdown.verifySelectedOptions(options) : roomPlanGradationSearchdropdown.verifyUnselectOptions(options);
  }

  verifyPatientResponseToSafetySelectedOption(yes, options) {
    yes ? patientResponseToSafetyMeasuresSearchdropdown.verifySelectedOptions(options) : patientResponseToSafetyMeasuresSearchdropdown.verifyUnselectOptions(options);
  }

  verifyFallPrecautionsNotesFieldValue(text) {
    fallPrecautionsNotesText.verifyTextFieldValue(text);
  }

  verifyLevelOfSafetyPrecautionsNotesFieldValue(text) {
    levelOfSafetyPrecautionsNotesText.verifyTextFieldValue(text);
  }

  verifyNursePatientRelationshipStrategiesForSafetyNotesFieldValue(text) {
    nursePatientRelationshipStrategiesForSafetyNotesText.verifyTextFieldValue(text);
  }

  verifySafetyInMilieuFieldValue(text) {
    safetyInMilieuNotesText.verifyTextFieldValue(text);
  }

  verifyGeneralSafetyNotesFieldValue(text) {
    generalSafetyNotesText.verifyTextFieldValue(text);
  }

  verifyRoomPlanGradationNotesFieldValue(text) {
    roomPlanGradationNotesText.verifyTextFieldValue(text);
  }

  verifyPatientResponseToSafetyMeasuresNotesFieldValue(text) {
    patientResponseToSafetyMeasuresNotesText.verifyTextFieldValue(text);
  }
}
export default SafetyPage;
