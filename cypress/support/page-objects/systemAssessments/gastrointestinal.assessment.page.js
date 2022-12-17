import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';

const defaultFieldsNumber = 18;

/***Locators */
const gumAndMouth = '[id=gumsAndMouth]';
const teethBridgesDentures = '[id=teethBridgesDentures]';
const mouthGumsTeethNotes = '[id="field-input-mouthGumsTeethNotes"]';

const esophagealAssessment = '[id=esophagealAssessment]';
const esophagealNotes = '[id=field-input-esophagealNotes]';

const abdominalAssessmentSearch = '[id=abdominalAssessment]';
const tenderOnPalpationSearch = '[id=tenderOnPalpation]';

const gastrointestinallSearch = '[id=gastrointestinal]';
const noGastricProblemsNotedChkbox = '[id=field-input-noGastricProblemsNoted-noGastricProblemsNoted]';
const gastrointestinalNotes = '[id=field-input-gastrointestinalNotes]';

const dateOfBowelMovement = '[id=field-input-dateOfLastBowelMovement]';
const continenceOfBowel = '[type=radio]';
const bowelSoundsSearch = '[id=bowelSounds]';
const bowelSoundsOther = '[id=field-input-bowelSoundsOther]';
const intestinalAssessmentSearch = '[id=intestinalAssessment]';
const rectumSearch = '[id=rectum]';
const stoolCharacteristicsSearch = '[id=stoolCharacteristics]';
const noBowelProblemsNotedChkbox = '[id=field-input-noBowelProblemsNoted-noBowelProblemsNoted]';
const noReportedRectalProblemsChkbox = '[id=field-input-noReportedRectalProblems-noReportedRectalProblems]';
const patientHasOstomyChkbox = '[id=field-input-intestinalDiversionPatientHasOstomy-patientHasOstomy]';
const intestinalNotes = '[id=field-input-intestinalNotes]';
/**-------------------------------------------------------------------------------------------------------------------- */

//Mouth/Gums/Teeth section
const gumAndMouthSelectBox = new searchDropdown(gumAndMouth);
const teethBridgesDenturesSelectBox = new searchDropdown(teethBridgesDentures);
const mouthGumsTeethNotesTxtArea = new textArea(mouthGumsTeethNotes);

//Esophageal Assessment section
const esophagealAssessmentSelectBox = new searchDropdown(esophagealAssessment);
const esophagealNotesTxtArea = new textArea(esophagealNotes);

//Abdomen
const abdominalAssessment = new searchDropdown(abdominalAssessmentSearch);
const tenderOnPalpation = new searchDropdown(tenderOnPalpationSearch);

//Gastrointestinal
const gastrointestinall = new searchDropdown(gastrointestinallSearch);
const noGastricProblemsNoted = new checkBox(noGastricProblemsNotedChkbox);
const gastrointestinalNotesTxtArea = new textArea(gastrointestinalNotes);

//Intestinal
const dateOfBowelMovementInput = new textArea(dateOfBowelMovement);
const continenceOfBowelRadio = new checkBox(continenceOfBowel);
const bowelSounds = new searchDropdown(bowelSoundsSearch);
const bowelSoundsOtherTxtBox = new textArea(bowelSoundsOther);
const intestinalAssessment = new searchDropdown(intestinalAssessmentSearch);
const rectum = new searchDropdown(rectumSearch);
const stoolCharacteristics = new searchDropdown(stoolCharacteristicsSearch);
const noBowelProblemsNoted = new checkBox(noBowelProblemsNotedChkbox);
const noReportedRectalProblemsNoted = new checkBox(noReportedRectalProblemsChkbox);
const patientHasOstomyCheck = new checkBox(patientHasOstomyChkbox);
const intestinalNotesTxtArea = new textArea(intestinalNotes);

class gastrointestinal extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectGumAndMouth(option) {
    gumAndMouthSelectBox.searchAndSelectOption(option);
  }

  selectTeethBridgesDentures(option) {
    teethBridgesDenturesSelectBox.searchAndSelectOption(option);
  }

  selectEsophagealAssessment(options) {
    esophagealAssessmentSelectBox.searchAndSelectMultiOption(options);
  }

  selectAbdomenAssessment(options) {
    abdominalAssessment.searchAndSelectMultiOption(options);
  }

  selectTenderOnPalpation(option) {
    tenderOnPalpation.searchAndSelectOption(option);
  }

  selectGastrointestinal(options) {
    gastrointestinall.searchAndSelectMultiOption(options);
  }

  noGastricProblemsNoted(yes) {
    yes ? noGastricProblemsNoted.check() : noGastricProblemsNoted.uncheck();
  }

  inputDateOfBowelMovement(date) {
    dateOfBowelMovementInput.inputText(date);
  }

  continenceOfBowelRadioCheckByLabel(label) {
    continenceOfBowelRadio.selectRadioByLabel(label);
  }

  selectBowelSounds(options) {
    bowelSounds.searchAndSelectMultiOption(options);
  }

  inputBowelSoundsOther(other) {
    bowelSoundsOtherTxtBox.inputText(other);
  }

  selectIntestinalAssessment(options) {
    intestinalAssessment.searchAndSelectMultiOption(options);
  }

  selectRectum(options) {
    rectum.searchAndSelectMultiOption(options);
  }

  selectStoolCharacteristics(options) {
    stoolCharacteristics.searchAndSelectMultiOption(options);
  }

  noBowelProblemsNoted(yes) {
    yes ? noBowelProblemsNoted.check() : noBowelProblemsNoted.uncheck();
  }

  noReportedRectalProblemsNoted(yes) {
    yes ? noReportedRectalProblemsNoted.check() : noReportedRectalProblemsNoted.uncheck();
  }

  patientHasOstomy(yes) {
    yes ? patientHasOstomyCheck.check() : patientHasOstomyCheck.uncheck();
  }

  mouthGumsTeethNotes(note) {
    mouthGumsTeethNotesTxtArea.inputText(note);
  }

  esophagealNotes(note) {
    esophagealNotesTxtArea.inputText(note);
  }

  gastrointestinalNotes(note) {
    gastrointestinalNotesTxtArea.inputText(note);
  }

  intestinalNotes(note) {
    intestinalNotesTxtArea.inputText(note);
  }

  verifyGastrointestinalDropdownListEnabled(yes) {
    gastrointestinall.isFieldEnabled(yes);
  }

  verifyIntestinalAssessmentDropdownListEnabled(yes) {
    intestinalAssessment.isFieldEnabled(yes);
  }

  verifyRectumCharacteristicsDropdownListEnabled(yes) {
    rectum.isFieldEnabled(yes);
  }
}

export default gastrointestinal;
