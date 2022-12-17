import simsCy from '../../sim.cy';
import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 19;

const generalNode = '#field-input-general';
const integumentaryNode = '#field-input-integumentary';
const headOrNeckNode = '#field-input-headNeck';
const earsOrNoseOrThroatNode = '#field-input-earsNoseThroat';
const eyesOrVisionNode = '#field-input-eyesVision';
const respiratoryNode = '#field-input-respiratory';
const cardiovascularNode = '#field-input-cardiovascular';
const peripheralVascularNode = '#field-input-peripheralVascular';
const lymphaticNode = '#field-input-lymphatic';
const breastsNode = '#field-input-breasts';
const abdomenNode = '#field-input-abdomen';
const musculoskeletalNode = '#field-input-musculoskeletal';
const neurologicNode = '#field-input-neurologic';
const femaleNode = '#field-input-pelvicGenitalia';
const maleNode = '#field-input-prostateGenitalia';
const rectalNode = '#field-input-rectal';
const otherNode = '#field-input-other';
const assessmentSummaryNode = '#field-input-assessmentSummary';
const planNode = '#field-input-plan';

const generalTxtArea = new textArea(generalNode);
const integumentaryTxtArea = new textArea(integumentaryNode);
const headOrNeckTxtArea = new textArea(headOrNeckNode);
const earsOrNoseOrThroatTxtArea = new textArea(earsOrNoseOrThroatNode);
const eyesOrVisionTxtArea = new textArea(eyesOrVisionNode);
const respiratoryTxtArea = new textArea(respiratoryNode);
const cardiovascularTxtArea = new textArea(cardiovascularNode);
const peripheralVascularTxtArea = new textArea(peripheralVascularNode);
const lymphaticTxtArea = new textArea(lymphaticNode);
const breastsTxtArea = new textArea(breastsNode);
const abdomenTxtArea = new textArea(abdomenNode);
const musculoskeletalTxtArea = new textArea(musculoskeletalNode);
const neurologicTxtArea = new textArea(neurologicNode);
const femaleTxtArea = new textArea(femaleNode);
const maleTxtArea = new textArea(maleNode);
const rectalTxtArea = new textArea(rectalNode);
const otherTxtArea = new textArea(otherNode);
const assessmentSummaryTxtArea = new textArea(assessmentSummaryNode);
const planTxtArea = new textArea(planNode);

class physicalAssessmentNarrative extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  general(value) {
    generalTxtArea.inputText(value);
  }

  integumentary(value) {
    integumentaryTxtArea.inputText(value);
  }

  headOrNeck(value) {
    headOrNeckTxtArea.inputText(value);
  }

  earsOrNoseOrThroat(value) {
    earsOrNoseOrThroatTxtArea.inputText(value);
  }

  eyesOrVision(value) {
    eyesOrVisionTxtArea.inputText(value);
  }

  respiratory(value) {
    respiratoryTxtArea.inputText(value);
  }

  cardiovascular(value) {
    cardiovascularTxtArea.inputText(value);
  }

  peripheralVascular(value) {
    peripheralVascularTxtArea.inputText(value);
  }

  lymphatic(value) {
    lymphaticTxtArea.inputText(value);
  }

  breasts(value) {
    breastsTxtArea.inputText(value);
  }

  abdomen(value) {
    abdomenTxtArea.inputText(value);
  }

  musculoskeletal(value) {
    musculoskeletalTxtArea.inputText(value);
  }

  neurologic(value) {
    neurologicTxtArea.inputText(value);
  }

  female(value) {
    femaleTxtArea.inputText(value);
  }

  male(value) {
    maleTxtArea.inputText(value);
  }

  rectal(value) {
    rectalTxtArea.inputText(value);
  }

  other(value) {
    otherTxtArea.inputText(value);
  }

  assessmentSummary(value) {
    assessmentSummaryTxtArea.inputText(value);
  }

  plan(value) {
    planTxtArea.inputText(value);
  }

  verifyAllFieldIsEmpty() {
    generalTxtArea.verifyTextFieldValue('');
    integumentaryTxtArea.verifyTextFieldValue('');
    headOrNeckTxtArea.verifyTextFieldValue('');
    earsOrNoseOrThroatTxtArea.verifyTextFieldValue('');
    eyesOrVisionTxtArea.verifyTextFieldValue('');
    respiratoryTxtArea.verifyTextFieldValue('');
    cardiovascularTxtArea.verifyTextFieldValue('');
    peripheralVascularTxtArea.verifyTextFieldValue('');
    lymphaticTxtArea.verifyTextFieldValue('');
    breastsTxtArea.verifyTextFieldValue('');
    abdomenTxtArea.verifyTextFieldValue('');
    musculoskeletalTxtArea.verifyTextFieldValue('');
    neurologicTxtArea.verifyTextFieldValue('');
    femaleTxtArea.verifyTextFieldValue('');
    maleTxtArea.verifyTextFieldValue('');
    rectalTxtArea.verifyTextFieldValue('');
    otherTxtArea.verifyTextFieldValue('');
    assessmentSummaryTxtArea.verifyTextFieldValue('');
    planTxtArea.verifyTextFieldValue('');
  }

  verifyAllTextareaDisplayed() {
    generalTxtArea.verifyElementExist(true);
    integumentaryTxtArea.verifyElementExist(true);
    headOrNeckTxtArea.verifyElementExist(true);
    earsOrNoseOrThroatTxtArea.verifyElementExist(true);
    eyesOrVisionTxtArea.verifyElementExist(true);
    respiratoryTxtArea.verifyElementExist(true);
    cardiovascularTxtArea.verifyElementExist(true);
    peripheralVascularTxtArea.verifyElementExist(true);
    lymphaticTxtArea.verifyElementExist(true);
    breastsTxtArea.verifyElementExist(true);
    abdomenTxtArea.verifyElementExist(true);
    musculoskeletalTxtArea.verifyElementExist(true);
    neurologicTxtArea.verifyElementExist(true);
    femaleTxtArea.verifyElementExist(true);
    maleTxtArea.verifyElementExist(true);
    rectalTxtArea.verifyElementExist(true);
    otherTxtArea.verifyElementExist(true);
    assessmentSummaryTxtArea.verifyElementExist(true);
    planTxtArea.verifyElementExist(true);
  }
}

export default physicalAssessmentNarrative;
