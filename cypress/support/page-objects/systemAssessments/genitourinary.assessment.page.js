import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
const defaultFieldsNumber = 25;

/**Locators */
const urinationMode = '#urinationMode';
const urinaryAssessment = '#urinaryAssessment';
const urineColor = '#urineColor';
const penisAssessment = '#penisAssessment';
const scrotumAssessment = '#scrotumAssessment';
const externalGenitaliaAssessment = '#externalGenitaliaAssessment';

const urineOdor = '[name="urineOdor"]';
const urineCharacteristics = '[name="urineCharacteristics"]';

const undergoingRenalDialysisChkbox = '[value="undergoingRenalDialysis"]';
const undergoingPeritonealDialysisChkbox = '[value="undergoingPeritonealDisalysis"]';
const noUrinaryProblemsNotedChkbox = '[value="noUrinaryProblemsNoted"]';
const hasUrinaryDiversionChkbox = '[value="hasUrinaryDiversion"]';
const penisAssessmentNoProblemsNotedChkbox = '[value="penisAssessmentNoProblemsNoted"]';
const scrotumAssessmentNoProblemsNotedChkbox = '[value="scrotumAssessmentNoProblemsNoted"]';
const externalGenitaliaAssessmentNoProblemsNotedChkbox = '[value="externalGenitaliaAssessmentNoProblemsNoted"]';

const renalDayOfLastTreatmentInput = '#field-input-renalDayOfLastTreatment';
const renalDayOfNextTreatmentInput = '#field-input-renalDayOfNextTreatment';
const peritonealDayOfLastTreatmentInput = '#field-input-peritonealDayOfLastTreatment';
const peritonealDayOfNextTreatmentInput = '#field-input-peritonealDayOfNextTreatment';
/**----------------------------------------------------------------------------------- */

const urinationModeSearchBox = new searchDropdown(urinationMode);
const urinaryAssessmentSearchBox = new searchDropdown(urinaryAssessment);
const urineColorSearchBox = new searchDropdown(urineColor);
const penisAssessmentSearchBox = new searchDropdown(penisAssessment);
const scrotumAssessmentSearchBox = new searchDropdown(scrotumAssessment);
const externalGenitaliaAssessmentSearchBox = new searchDropdown(externalGenitaliaAssessment);

const urineOdorRadio = new checkBox(urineOdor);
const urineCharacteristicsRadio = new checkBox(urineCharacteristics);
const undergoingRenalDialysisCheckBox = new checkBox(undergoingRenalDialysisChkbox);
const undergoingPeritonealDialysisCheckbox = new checkBox(undergoingPeritonealDialysisChkbox);
const noUrinaryProblemsNotedCheckbox = new checkBox(noUrinaryProblemsNotedChkbox);
const hasUrinaryDiversionCheckbox = new checkBox(hasUrinaryDiversionChkbox);
const penisAssessmentNoProblemsNotedCheckbox = new checkBox(penisAssessmentNoProblemsNotedChkbox);
const scrotumAssessmentNoProblemsNotedCheckbox = new checkBox(scrotumAssessmentNoProblemsNotedChkbox);
const externalGenitaliaAssessmentNoProblemsNotedCheckbox = new checkBox(externalGenitaliaAssessmentNoProblemsNotedChkbox);

const renalDayOfLastTreatmentTxt = new textArea(renalDayOfLastTreatmentInput);
const renalDayOfNextTreatmentTxt = new textArea(renalDayOfNextTreatmentInput);
const peritonealDayOfLastTreatmentTxt = new textArea(peritonealDayOfLastTreatmentInput);
const peritonealDayOfNextTreatmentTxt = new textArea(peritonealDayOfNextTreatmentInput);

class genitourinary extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectUrinationMode(mode) {
    urinationModeSearchBox.searchAndSelectOption(mode);
  }

  /**
   *
   * @param {*} options : list of Urinary Assessment choices
   */

  selectUrinaryAssessment(options) {
    urinaryAssessmentSearchBox.searchAndSelectMultiOption(options);
  }

  verifyUndergoingRenalDialysisEnabled(yes) {
    yes ? this.getWebElement(undergoingRenalDialysisChkbox).should('be.enabled') : this.getWebElement(undergoingRenalDialysisChkbox).should('be.disabled');
  }

  verifyUndergoingPeritonealDialysisEnabled(yes) {
    yes ? this.getWebElement(undergoingPeritonealDialysisChkbox).should('be.enabled') : this.getWebElement(undergoingPeritonealDialysisChkbox).should('be.disabled');
  }

  verifyUrinaryAssessmentEnabled(yes) {
    yes ? this.getWebElement(urinaryAssessment).should('be.enabled') : this.getWebElement(urinaryAssessment).should('be.disabled');
  }

  verifyPenisAssessmentEnabled(yes) {
    yes ? this.getWebElement(penisAssessment).should('be.enabled') : this.getWebElement(penisAssessment).should('be.disabled');
  }

  verifyScrotumAssessmentEnabled(yes) {
    yes ? this.getWebElement(scrotumAssessment).should('be.enabled') : this.getWebElement(scrotumAssessment).should('be.disabled');
  }

  verifyFemaleExternalGenitaliaAssessmentEnabled(yes) {
    yes ? this.getWebElement(externalGenitaliaAssessment).should('be.enabled') : this.getWebElement(externalGenitaliaAssessment).should('be.disabled');
  }

  verifyRenalDayOfLastTreatmentEnabled(yes) {
    yes ? this.getWebElement(renalDayOfLastTreatmentInput).should('be.enabled') : this.getWebElement(renalDayOfLastTreatmentInput).should('be.disabled');
  }

  verifyRenalDayOfNextTreatmentEnabled(yes) {
    yes ? this.getWebElement(renalDayOfNextTreatmentInput).should('be.enabled') : this.getWebElement(renalDayOfNextTreatmentInput).should('be.disabled');
  }

  verifyPeritonealDayOfLastTreatmentEnabled(yes) {
    yes ? this.getWebElement(peritonealDayOfLastTreatmentInput).should('be.enabled') : this.getWebElement(peritonealDayOfLastTreatmentInput).should('be.disabled');
  }

  verifyPeritonealDayOfNextTreatmentEnabled(yes) {
    yes ? this.getWebElement(peritonealDayOfNextTreatmentInput).should('be.enabled') : this.getWebElement(peritonealDayOfNextTreatmentInput).should('be.disabled');
  }

  selectRenalDialysisCheckbox(yes) {
    yes ? undergoingRenalDialysisCheckBox.check() : undergoingRenalDialysisCheckBox.uncheck();
  }

  selectPeritonealDialysisCheckbox(yes) {
    yes ? undergoingPeritonealDialysisCheckbox.check() : undergoingPeritonealDialysisCheckbox.uncheck();
  }

  selectNoUrinaryProblemsNotedCheckbox(yes) {
    yes ? noUrinaryProblemsNotedCheckbox.check() : noUrinaryProblemsNotedCheckbox.uncheck();
  }

  selectPenisNoProblemsNotedCheckbox(yes) {
    yes ? penisAssessmentNoProblemsNotedCheckbox.check() : penisAssessmentNoProblemsNotedCheckbox.uncheck();
  }

  selectScrotumTestesNoProblemsCheckbox(yes) {
    yes ? scrotumAssessmentNoProblemsNotedCheckbox.check() : scrotumAssessmentNoProblemsNotedCheckbox.uncheck();
  }

  selecteExternalGenitaliaNoProblemsNotedCheckbox(yes) {
    yes ? externalGenitaliaAssessmentNoProblemsNotedCheckbox.check() : externalGenitaliaAssessmentNoProblemsNotedCheckbox.uncheck();
  }

  selectUrineColor(color) {
    urineColorSearchBox.searchAndSelectOption(color);
  }

  selectPenisAssessment(options) {
    penisAssessmentSearchBox.searchAndSelectMultiOption(options);
  }

  selectScrotumAssessment(options) {
    scrotumAssessmentSearchBox.searchAndSelectMultiOption(options);
  }

  selectExternalGenitaliaAssessment(options) {
    externalGenitaliaAssessmentSearchBox.searchAndSelectMultiOption(options);
  }

  selectCharacteristics(option) {
    urineCharacteristicsRadio.selectRadioByLabel(option);
  }

  selectOdor(option) {
    urineOdorRadio.selectRadioByLabel(option);
  }

  enterPeritonealDialysisDayOfNextTreatment(date) {
    peritonealDayOfNextTreatmentTxt.inputText(date);
  }

  enterPeritonealDialysisDayOfLastTreatment(date) {
    peritonealDayOfLastTreatmentTxt.inputText(date);
  }

  enterRenalDialysisDayOfNextTreatment(date) {
    renalDayOfNextTreatmentTxt.inputText(date);
  }

  enterRenalDialysisDayOfLastTreatment(date) {
    renalDayOfLastTreatmentTxt.inputText(date);
  }
}

export default genitourinary;
