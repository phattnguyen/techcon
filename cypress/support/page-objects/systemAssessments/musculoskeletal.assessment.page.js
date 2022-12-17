import simsCy from '../../sim.cy';
import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';

const defaultFieldsNumber = 46;
/*------------------------------------------ Locators------------------------------------------------*/
//Range of Motion (ROM)
const romMoveAllExtremitiesChk = new checkBox('#field-input-romMoveAllExtremities-romMoveAllExtremities');
const leftArmRadios = new checkBox('[name="leftArm"]');
const rightArmRadios = new checkBox('[name="rightArm"]');
const leftLegRadios = new checkBox('[name="leftLeg"]');
const rightLegRadios = new checkBox('[name="rightLeg"]');

//Gait/Balance
const gaitOrBalanceSearchBox = new searchDropdown('#gaitOrBalance');
const gaitBalanceNotesTxt = new textArea('#field-input-gaitBalanceNotes');

//Amputation
const amputationAmputeeChk = new checkBox('#field-input-amputationAmputee-amputationAmputee');
const describeAmputationTxt = new textArea('#field-input-describeAmputation');

//Postoperative, Orthopedic
const postOrthopedicSurgeryChk = new checkBox('#field-input-postOrthopedicSurgery-postOrthopedicSurgery');
const postOperativeAreaLeftSearchBox = new searchDropdown('#postOperativeAreaLeft');
const postOperativeAreaRightSearchBox = new searchDropdown('#postOperativeAreaRight');
const postOperativeEATemperatureRadios = new checkBox('[name="postOperativeEATemperature"]');
const postOperativeEACapillaryRefillRadios = new checkBox('[name="postOperativeEACapillaryRefill"]');
const postOperativeEAColorRadios = new checkBox('[name="postOperativeEAColor"]');
const postOperativeEASensationRadios = new checkBox('[name="postOperativeEASensation"]');
const specialTestSignsHomanSignRadios = new checkBox('[name="specialTestSignsHomanSign"]');
const specialTestSignsPlantarFlexionPainRadios = new checkBox('[name="specialTestSignsPlantarFlexionPain"]');
const movementEvaluationFingersRadios = new checkBox('[name="movementEvaluationFingers"]');
const movementEvaluationToesRadios = new checkBox('[name="movementEvaluationToes"]');
const postoperativeOrthopedicNotesTxt = new textArea('#field-input-postoperativeOrthopedicNotes');
/**------------------------------------------------------------------------------------------------------- */

class Musculoskeletal extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  checkRomMoveAllExtremities(yes) {
    yes ? romMoveAllExtremitiesChk.check() : romMoveAllExtremitiesChk.uncheck();
  }

  verifyRangOfMotionSectionEnabled(option) {
    leftLegRadios.verifyElementEnabled(option);
    rightArmRadios.verifyElementEnabled(option);
    leftLegRadios.verifyElementEnabled(option);
    rightLegRadios.verifyElementEnabled(option);
  }

  selectRomLeftArm(option) {
    leftArmRadios.selectRadioByLabel(option);
  }

  selectRomRightArm(option) {
    rightArmRadios.selectRadioByLabel(option);
  }

  selectRomLeftLeg(option) {
    leftLegRadios.selectRadioByLabel(option);
  }

  selectRomRightLeg(option) {
    rightLegRadios.selectRadioByLabel(option);
  }

  selectGaitOrBalance(option) {
    gaitOrBalanceSearchBox.searchAndSelectOption(option);
  }

  inputGaitOrBalanceNotes(text) {
    gaitBalanceNotesTxt.inputText(text);
  }

  checkAmputee(yes) {
    yes ? amputationAmputeeChk.check() : amputationAmputeeChk.uncheck();
  }

  inputAmputationDescription(text) {
    describeAmputationTxt.inputText(text);
  }

  verifyAmputationDescriptionEnabled(yes) {
    yes ? describeAmputationTxt.verifyElementEnabled(true) : describeAmputationTxt.verifyElementEnabled(false);
  }

  checkPostOrthopedicSurgery(yes) {
    yes ? postOrthopedicSurgeryChk.check() : postOrthopedicSurgeryChk.uncheck();
  }

  verifyPostOperativeAreaLeftEnabled(yes) {
    yes ? postOperativeAreaLeftSearchBox.verifyElementEnabled(true) : postOperativeAreaLeftSearchBox.verifyElementEnabled(false);
  }

  verifyPostOperativeAreaRightEnabled(yes) {
    yes ? postOperativeAreaRightSearchBox.verifyElementEnabled(true) : postOperativeAreaRightSearchBox.verifyElementEnabled(false);
  }

  selectPostOperativeAreaLeft(option) {
    postOperativeAreaLeftSearchBox.searchAndSelectOption(option);
  }

  selectPostOperativeAreaRight(option) {
    postOperativeAreaRightSearchBox.searchAndSelectOption(option);
  }

  selectPostOperativeEATemperature(option) {
    postOperativeEATemperatureRadios.selectRadioByLabel(option);
  }

  selectPostOperativeEACapillaryRefill(option) {
    postOperativeEACapillaryRefillRadios.selectRadioByLabel(option);
  }

  selectPostOperativeEAColor(option) {
    postOperativeEAColorRadios.selectRadioByLabel(option);
  }

  selectPostOperativeEASensation(option) {
    postOperativeEASensationRadios.selectRadioByLabel(option);
  }

  selectSpecialTestSignsHomanSign(option) {
    specialTestSignsHomanSignRadios.selectRadioByLabel(option);
  }

  selectPpecialTestSignsPlantarFlexionPain(option) {
    specialTestSignsPlantarFlexionPainRadios.selectRadioByLabel(option);
  }

  selectMovementEvaluationFingers(option) {
    movementEvaluationFingersRadios.selectRadioByLabel(option);
  }

  selectMovementEvaluationToes(option) {
    movementEvaluationToesRadios.selectRadioByLabel(option);
  }

  inputPostoperativeOrthopedicNotes(text) {
    postoperativeOrthopedicNotesTxt.inputText(text);
  }

  verifyPostoperativeOrthopedicSectionEnabled(option) {
    postOperativeEATemperatureRadios.verifyElementEnabled(option);
    postOperativeEACapillaryRefillRadios.verifyElementEnabled(option);
    postOperativeEAColorRadios.verifyElementEnabled(option);
    postOperativeEASensationRadios.verifyElementEnabled(option);
    specialTestSignsHomanSignRadios.verifyElementEnabled(option);
    specialTestSignsPlantarFlexionPainRadios.verifyElementEnabled(option);
    movementEvaluationFingersRadios.verifyElementEnabled(option);
    movementEvaluationToesRadios.verifyElementEnabled(option);
    postoperativeOrthopedicNotesTxt.verifyElementEnabled(option);
  }
}

export default Musculoskeletal;
