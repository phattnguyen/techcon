import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import savedCharting from '../saved.charting.page';

const woundHealdedCheckbox = new checkBox('#field-input-woundHealed-woundHealded');
const bodyRegion = new searchDropdown('#bodyRegion');
const location = new searchDropdown('#location');
const woundCategory = new select('#field-input-woundCategory');
const medicalDevice = new checkBox('#field-input-medicalDevice-medicalDevice');
const woundType = new select('#field-input-woundType');
const length = new textArea('#field-input-length');
const width = new textArea('#field-input-width');
const depth = new textArea('#field-input-depth');
const woundArea = new searchDropdown('#woundArea');
const periwoundArea = new searchDropdown('#periwoundArea');
const solutionUsed = new searchDropdown('#solutionUsed');
const patientResponse = new searchDropdown('#patientResponse');
const woundDrainageExudate = new searchDropdown('#woundDrainageExudate');
const dressingWoundCare = new searchDropdown('#dressingWoundCare');
const interventions = new searchDropdown('#interventions');
const notes = new textArea('#field-input-notes');
const solutionUsedOther = new textArea('#field-input-solutionUsedOther');
const updateColumnName = 'Wound Status';
const deleteConfirmMsg =
  'Are you sure you want to delete this entry? Note that the most recent wound update will be deleted.\n      If there is another record associated with this wound location, the next most recent record will be displayed.';

class Wounds extends savedCharting {
  constructor() {
    super(updateColumnName, deleteConfirmMsg);
  }

  selectWoundHealded(yes) {
    yes ? woundHealdedCheckbox.check() : woundHealdedCheckbox.uncheck();
  }

  selectBodyRegion(option) {
    bodyRegion.searchAndSelectOption(option);
  }

  selectLocation(option) {
    location.searchAndSelectOption(option);
  }

  selectWoundCategory(option) {
    woundCategory.selectByOption(option);
  }

  selectMedicalDevice(yes) {
    yes ? medicalDevice.check() : medicalDevice.uncheck();
  }

  selectWoundType(option) {
    woundType.selectByOption(option);
  }

  length(value) {
    length.inputText(value);
  }

  width(value) {
    width.inputText(value);
  }

  depth(value) {
    depth.inputText(value);
  }

  selectWoundArea(options) {
    woundArea.searchAndSelectMultiOption(options);
  }

  selectPeriwoundArea(options) {
    periwoundArea.searchAndSelectMultiOption(options);
  }

  selectSolutionUsed(option) {
    solutionUsed.searchAndSelectOption(option);
  }

  solutionUsedOther(value) {
    solutionUsedOther.inputText(value);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  selectWoundDrainageExudate(options) {
    woundDrainageExudate.searchAndSelectMultiOption(options);
  }

  selectDressingWoundCare(options) {
    dressingWoundCare.searchAndSelectMultiOption(options);
  }

  selectInterventions(options) {
    interventions.searchAndSelectMultiOption(options);
  }

  notes(value) {
    notes.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    woundHealdedCheckbox.verifyElementExist(true);
    bodyRegion.verifyElementExist(true);
    location.verifyElementExist(true);
    woundCategory.verifyElementExist(true);
    medicalDevice.verifyElementExist(true);
    woundType.verifyElementExist(true);
    length.verifyElementExist(true);
    width.verifyElementExist(true);
    depth.verifyElementExist(true);
    woundArea.verifyElementExist(true);
    periwoundArea.verifyElementExist(true);
    solutionUsed.verifyElementExist(true);
    patientResponse.verifyElementExist(true);
    woundDrainageExudate.verifyElementExist(true);
    dressingWoundCare.verifyElementExist(true);
    interventions.verifyElementExist(true);
  }

  verifySolutionUsedOtherFieldsDisplayed() {
    solutionUsedOther.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    location.verifyElementEnabled(false);
    medicalDevice.verifyElementEnabled(false);
    woundType.verifyElementEnabled(false);
    length.verifyElementEnabled(false);
    width.verifyElementEnabled(false);
    depth.verifyElementEnabled(false);
    woundArea.verifyElementEnabled(false);
    periwoundArea.verifyElementEnabled(false);
    solutionUsed.verifyElementEnabled(false);
    patientResponse.verifyElementEnabled(false);
    woundDrainageExudate.verifyElementEnabled(false);
    dressingWoundCare.verifyElementEnabled(false);
    interventions.verifyElementEnabled(false);
  }

  verifyMedicalDeviceFieldEnabled() {
    medicalDevice.verifyElementEnabled(true);
  }

  verifyWoundAreaFieldDisabled() {
    woundArea.verifyElementEnabled(false);
  }

  verifyPeriwoundAreaFieldDisabled() {
    periwoundArea.verifyElementEnabled(false);
  }

  verifyInterventionsFieldDisabled() {
    interventions.verifyElementEnabled(false);
  }

  verifyDressingWoundCareFieldDisabled() {
    dressingWoundCare.verifyElementEnabled(false);
  }

  verifyWoundDrainageExudateFieldDisabled() {
    woundDrainageExudate.verifyElementEnabled(false);
  }

  verifySolutionUsedFieldDisabled() {
    solutionUsed.verifyElementEnabled(false);
  }

  verifyLocationAndCategoryAndTypeFieldsDisabled() {
    bodyRegion.verifyElementEnabled(false);
    location.verifyElementEnabled(false);
    woundCategory.verifyElementEnabled(false);
    woundType.verifyElementEnabled(false);
  }

  verifyLengthFielDisabled() {
    length.verifyElementEnabled(false);
  }

  verifyWidththFielDisabled() {
    width.verifyElementEnabled(false);
  }

  verifyDepthFielDisabled() {
    depth.verifyElementEnabled(false);
  }

  validateWoundHealded(yes) {
    woundHealdedCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateBodyRegion(value) {
    cy.get('#bodyRegion').should('have.value', value);
  }

  validateLocation(value) {
    cy.get('#location').should('have.value', value);
  }

  validateWoundCategory(value) {
    woundCategory.verifySelectedValue(value);
  }

  validateWoundType(value) {
    woundType.verifySelectedValue(value);
  }

  validateNote(value) {
    notes.verifyTextFieldValue(value);
  }
}
export default Wounds;
