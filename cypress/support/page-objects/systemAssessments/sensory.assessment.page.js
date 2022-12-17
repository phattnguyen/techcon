import searchDropdownSelect from '../../element-helpers/search.dropdown.el';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import systemAssessment from '../system.assessment.page';
import button from '../../element-helpers/button.el';

const visionAssessmentTxt = '#visionAssessment';
const hearingAssessmentTxt = '#hearingAssessment';
const visionAssessmentNotRequiredChkbox = '#field-input-visionAssessmentNotRequired-visionAssessmentNotRequired';
const hearingAssessmentNotRequiredChkbox = '#field-input-hearingAssessmentNotRequired-hearingAssessmentNotRequired';
const wearsGlassesChkbox = '#field-input-glassesOrContacts-wearsGlasses';
const wearsContactsChkbox = '#ield-input-glassesOrContacts-wearsContacts';

const bilateralAssessmentEqualRadio = '[name="bilateralAssessmentEqual"]';
const bilateralAssessmentRoundRadio = '[name="bilateralAssessmentRound"]';

const sizeLeft = '#field-input-sizeLeft';
const sizeRight = '#field-input-sizeRight';

const leftEyeReactionToLightRadio = '[name="pupillaryReactionLeftEyeRadio"]';
const rightEyeReactionToLightRadio = '[name="pupillaryReactionRightEyeRadio"]';

const accommodationPresent = '[name="accommodationPresent"]';

const pupillaryReactionLeftEyeChk = '//input[contains(@id,"field-input-pupillaryReactionLeftEyeCheck")]';
const pupillaryReactionRightEyeChk = '//input[contains(@id,"field-input-pupillaryReactionRightEyeCheck")]';

//Notes
const visionNoteLabel = '//div[@id="chart-field-visionNotes"]//button//span';
const visionNoteArea = '#field-input-visionNotes';

const hearingNoteLabel = '//div[@id="chart-field-hearingNotes"]//button//span';
const hearingNoteArea = '#field-input-hearingNotes';

const accommodationNoteLabel = '//div[@id="chart-field-accommodationNotes"]//button//span';
const accommodationNoteArea = '#field-input-accommodationNotes';

//Reasons
const bilateralAssessmentEqualReason = '#field-input-bilateralAssessmentEqualReason';
const bilateralAssessmentRoundReason = '#field-input-bilateralAssessmentRoundReason';
/**--------------------------------------------------------------------------------- */
const visionViewNotesBtn = new button(visionNoteLabel);
const hearingViewNotesBtn = new button(hearingNoteLabel);
const accommodationViewNotesBtn = new button(accommodationNoteLabel);

const visionAssessmentSearch = new searchDropdownSelect(visionAssessmentTxt);
const hearingAssessmentSearch = new searchDropdownSelect(hearingAssessmentTxt);
const visionAssessmentNotRequiredChekbox = new checkBox(visionAssessmentNotRequiredChkbox);
const hearingAssessmentNotRequiredChekbox = new checkBox(hearingAssessmentNotRequiredChkbox);
const wearsGlassesCheckbox = new checkBox(wearsGlassesChkbox);
const wearsContactsChekbox = new checkBox(wearsContactsChkbox);
const bilateralAssessmentEqualRadios = new checkBox(bilateralAssessmentEqualRadio);
const bilateralAssessmentRoundRadios = new checkBox(bilateralAssessmentRoundRadio);
const leftEyeReactionToLightRadios = new checkBox(leftEyeReactionToLightRadio);
const rightEyeReactionToLightRadios = new checkBox(rightEyeReactionToLightRadio);
const accommodationPresentRadios = new checkBox(accommodationPresent);
const pupillaryReactionLeftEyeCheckbox = new checkBox(pupillaryReactionLeftEyeChk);
const pupillaryReactionRightEyeCheckbox = new checkBox(pupillaryReactionRightEyeChk);

const bilateralAssessmentEqualReasonTxt = new textArea(bilateralAssessmentEqualReason);
const bilateralAssessmentRoundReasonTxt = new textArea(bilateralAssessmentRoundReason);
const sizeLeftTxt = new textArea(sizeLeft);
const sizeRightTxt = new textArea(sizeRight);
const visionNoteTxt = new textArea(visionNoteArea);
const hearingNoteTxt = new textArea(hearingNoteArea);
const accommodationNoteTxt = new textArea(accommodationNoteArea);

class sensoryAssessment extends systemAssessment {
  constructor() {
    super(26);
  }

  selectNoMajorVisonProblems() {
    visionAssessmentNotRequiredChekbox.check();
  }

  selectNoMajorHearingProblems() {
    hearingAssessmentNotRequiredChekbox.check();
  }

  selectVisionAssessment(options) {
    visionAssessmentSearch.searchAndSelectMultiOption(options);
  }

  selectHearingAssessmentSearch(options) {
    hearingAssessmentSearch.searchAndSelectMultiOption(options);
  }

  bilateralAssessmentEqual(options) {
    bilateralAssessmentEqualRadios.selectRadioByLabel(options);
  }

  bilateralAssessmentRound(options) {
    bilateralAssessmentRoundRadios.selectRadioByLabel(options);
  }

  leftPupilInput(info) {
    sizeLeftTxt.inputText(info);
  }

  rightPupilInput(info) {
    sizeRightTxt.inputText(info);
  }

  leftEyeReactionToLight(option) {
    leftEyeReactionToLightRadios.selectRadioByLabel(option);
  }

  rightEyeReactionToLight(option) {
    rightEyeReactionToLightRadios.selectRadioByLabel(option);
  }

  accommodationPresent(yes) {
    accommodationPresentRadios.selectRadioByLabel(yes);
  }

  pupillaryReactionLeftEyeCheck(options) {
    pupillaryReactionLeftEyeCheckbox.checkMultiOptions(options);
  }

  pupillaryReactionRightEyeCheck(options) {
    pupillaryReactionRightEyeCheckbox.checkMultiOptions(options);
  }

  enterVisionNotes(notes) {
    visionViewNotesBtn.click();
    visionNoteTxt.inputText(notes);
  }

  enterHearingNotes(notes) {
    hearingViewNotesBtn.click();
    hearingNoteTxt.inputText(notes);
  }

  enterPupilNotes(notes) {
    accommodationViewNotesBtn.click();
    accommodationNoteTxt.inputText(notes);
  }

  verifyBilateralAssessmentRoundReasonDisplayed(yes) {
    bilateralAssessmentEqualReasonTxt.verifyElementExist(yes);
  }

  verifyBilateralAssessmentEqualReasonDisplayed(yes) {
    bilateralAssessmentRoundReasonTxt.verifyElementExist(yes);
  }

  verifyNumberOfFieldsDisabled(num) {
    if (num == 0) {
      this.getWebElement('[disabled]').should('not.exist');
    } else {
      this.getWebElement('[disabled]')
        .its('length')
        .should('eq', num);
    }
  }
}

export default sensoryAssessment;
