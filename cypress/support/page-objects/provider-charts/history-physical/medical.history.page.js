import simsCy from '../../../sim.cy';
import basePage from '../../../page-objects/base.page';
import textArea from '../../../element-helpers/text.area.el';

//Patient Information
const chiefInformantTXT = new textArea('#field-input-chiefInformant');
const allergiesTXT = new textArea('#field-input-allergies');
const chiefComplaintTXT = new textArea('#field-input-chiefComplaint');
const familyHistoryTXT = new textArea('#field-input-familyHistory');
const historyOfCurrentProblemTXT = new textArea('#field-input-historyOfCurrentProblem');

//Past Medical History
const previousIllnessesTXT = new textArea('#field-input-previousIllnesses');
const contagiousDiseasesTXT = new textArea('#field-input-contagiousDiseases');
const injuriesOrTraumaTXT = new textArea('#field-input-injuriesOrTrauma');
const surgicalHistoryTXT = new textArea('#field-input-surgicalHistory');
const dietaryHistoryTXT = new textArea('#field-input-dietaryHistory');
const otherTXT = new textArea('#field-input-other');
const socialHistoryTXT = new textArea('#field-input-socialHistory');
const currentMedicationsTXT = new textArea('#field-input-currentMedications');

//Review of Systems
const integumentTXT = new textArea('#field-input-integument');
const heentTXT = new textArea('#field-input-heent');
const cardiovascularTXT = new textArea('#field-input-cardiovascular');
const respiratoryTXT = new textArea('#field-input-respiratory');
const gastrointestinalTXT = new textArea('#field-input-gastrointestinal');
const genitourinaryTXT = new textArea('#field-input-genitourinary');
const musculoskeletalTXT = new textArea('#field-input-musculoskeletal');
const neurologicTXT = new textArea('#field-input-neurologic');
const developmentalTXT = new textArea('#field-input-developmental');
const endocrineTXT = new textArea('#field-input-endocrine');
const genitaliaTXT = new textArea('#field-input-genitalia');
const lymphaticTXT = new textArea('#field-input-lymphatic');

class MedicalHistory extends basePage {
  //Patient Information
  inputChiefInformant(value) {
    chiefInformantTXT.inputText(value);
  }

  inputAllergies(value) {
    allergiesTXT.inputText(value);
  }

  inputChiefComplaint(value) {
    chiefComplaintTXT.inputText(value);
  }

  inputFamilyHistory(value) {
    familyHistoryTXT.inputText(value);
  }

  inputHistoryOfCurrentProblem(value) {
    historyOfCurrentProblemTXT.inputText(value);
  }

  //Past Medical History
  inputPreviousIllnesses(value) {
    previousIllnessesTXT.inputText(value);
  }

  inputContagiousDiseases(value) {
    contagiousDiseasesTXT.inputText(value);
  }

  inputInjuriesOrTrauma(value) {
    injuriesOrTraumaTXT.inputText(value);
  }

  inputSurgicalHistory(value) {
    surgicalHistoryTXT.inputText(value);
  }

  inputDietaryHistory(value) {
    dietaryHistoryTXT.inputText(value);
  }

  inputOther(value) {
    otherTXT.inputText(value);
  }

  inputSocialHistory(value) {
    socialHistoryTXT.inputText(value);
  }

  inputCurrentMedications(value) {
    currentMedicationsTXT.inputText(value);
  }

  //Review of Systems
  inputIntegument(value) {
    integumentTXT.inputText(value);
  }

  inputHeent(value) {
    heentTXT.inputText(value);
  }

  inputCardiovascular(value) {
    cardiovascularTXT.inputText(value);
  }

  inputRespiratory(value) {
    respiratoryTXT.inputText(value);
  }

  inputGastrointestinal(value) {
    gastrointestinalTXT.inputText(value);
  }

  inputGenitourinary(value) {
    genitourinaryTXT.inputText(value);
  }

  inputMusculoskeletal(value) {
    musculoskeletalTXT.inputText(value);
  }

  inputNeurologic(value) {
    neurologicTXT.inputText(value);
  }

  inputDevelopmental(value) {
    developmentalTXT.inputText(value);
  }

  inputEndocrine(value) {
    endocrineTXT.inputText(value);
  }

  inputGenitalia(value) {
    genitaliaTXT.inputText(value);
  }

  inputLymphatic(value) {
    lymphaticTXT.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    chiefInformantTXT.verifyElementExist(true);
    allergiesTXT.verifyElementExist(true);
    chiefComplaintTXT.verifyElementExist(true);
    familyHistoryTXT.verifyElementExist(true);
    historyOfCurrentProblemTXT.verifyElementExist(true);
    previousIllnessesTXT.verifyElementExist(true);
    contagiousDiseasesTXT.verifyElementExist(true);
    injuriesOrTraumaTXT.verifyElementExist(true);
    surgicalHistoryTXT.verifyElementExist(true);
    dietaryHistoryTXT.verifyElementExist(true);
    otherTXT.verifyElementExist(true);
    socialHistoryTXT.verifyElementExist(true);
    currentMedicationsTXT.verifyElementExist(true);
    integumentTXT.verifyElementExist(true);
    heentTXT.verifyElementExist(true);
    cardiovascularTXT.verifyElementExist(true);
    respiratoryTXT.verifyElementExist(true);
    gastrointestinalTXT.verifyElementExist(true);
    genitourinaryTXT.verifyElementExist(true);
    musculoskeletalTXT.verifyElementExist(true);
    neurologicTXT.verifyElementExist(true);
    developmentalTXT.verifyElementExist(true);
    endocrineTXT.verifyElementExist(true);
    genitaliaTXT.verifyElementExist(true);
    lymphaticTXT.verifyElementExist(true);
  }

  validateChiefInformant(value) {
    chiefInformantTXT.verifyTextFieldValue(value);
  }

  validateAllergies(value) {
    allergiesTXT.verifyTextFieldValue(value);
  }

  validateChiefComplaint(value) {
    chiefComplaintTXT.verifyTextFieldValue(value);
  }

  validateFamilyHistory(value) {
    familyHistoryTXT.verifyTextFieldValue(value);
  }

  validateHistoryOfCurrentProblem(value) {
    historyOfCurrentProblemTXT.verifyTextFieldValue(value);
  }

  validatePreviousIllnesses(value) {
    previousIllnessesTXT.verifyTextFieldValue(value);
  }

  validateContagiousDiseases(value) {
    contagiousDiseasesTXT.verifyTextFieldValue(value);
  }

  validateInjuriesOrTrauma(value) {
    injuriesOrTraumaTXT.verifyTextFieldValue(value);
  }

  validateSurgicalHistory(value) {
    surgicalHistoryTXT.verifyTextFieldValue(value);
  }

  validateDietaryHistory(value) {
    dietaryHistoryTXT.verifyTextFieldValue(value);
  }

  validateOther(value) {
    otherTXT.verifyTextFieldValue(value);
  }

  validateSocialHistory(value) {
    socialHistoryTXT.verifyTextFieldValue(value);
  }

  validateCurrentMedications(value) {
    currentMedicationsTXT.verifyTextFieldValue(value);
  }

  validateIntegument(value) {
    integumentTXT.verifyTextFieldValue(value);
  }

  validateHeent(value) {
    heentTXT.verifyTextFieldValue(value);
  }

  validateCardiovascular(value) {
    cardiovascularTXT.verifyTextFieldValue(value);
  }

  validateRespiratory(value) {
    respiratoryTXT.verifyTextFieldValue(value);
  }

  validateGastrointestinal(value) {
    gastrointestinalTXT.verifyTextFieldValue(value);
  }

  validateGenitourinary(value) {
    genitourinaryTXT.verifyTextFieldValue(value);
  }

  validateMusculoskeletal(value) {
    musculoskeletalTXT.verifyTextFieldValue(value);
  }

  validateNeurologic(value) {
    neurologicTXT.verifyTextFieldValue(value);
  }

  validateDevelopmental(value) {
    developmentalTXT.verifyTextFieldValue(value);
  }

  validateEndocrine(value) {
    endocrineTXT.verifyTextFieldValue(value);
  }

  validateGenitalia(value) {
    genitaliaTXT.verifyTextFieldValue(value);
  }

  validateLymphatic(value) {
    lymphaticTXT.verifyTextFieldValue(value);
  }
}
export default MedicalHistory;
