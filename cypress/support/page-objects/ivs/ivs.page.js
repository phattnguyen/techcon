import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import savedCharting from '../saved.charting.page';

const ivDiscontinued = new checkBox('#field-input-discontinued-ivDiscontinued');
const bodyRegion = new select('#field-input-bodyRegion');
const location = new select('#field-input-location');
const typeIvAccess = new checkBox('[name="typeIvAccess"]');
const catheterType = new checkBox('[name="catheterType"]');
const catheterSize = new select('#field-input-catheterSize');
const numberInsertionAttempts = new textArea('#field-input-numberInsertionAttempts');
const pcaPumpUse = new checkBox('#field-input-pumpInUse-pcaPumpUse');
const typeOfLine = new select('#field-input-typeOfLine');
const numberOfLumens = new select('#field-input-numberOfLumens');
const externalCatheterLength = new textArea('#field-input-externalCatheterLength');
const insertionTime = new textArea('#field-input-insertionTime');
const skinAssessment = new searchDropdown('#skinAssessment');
const patency = new searchDropdown('#patency');
const dressingCare = new searchDropdown('#dressingCare');
const patientResponse = new searchDropdown('#patientResponse');
const infusionPumpUse = new checkBox('#field-input-pumpInUse-infusionPumpUse');
const notes = new textArea('#field-input-notes');

const updateColumnName = 'IVs Status';
const deleteConfirmMsg =
  'Are you sure you want to delete this entry? Note that the most recent IV update will be deleted.\n      If there is another record associated with this IV location, the next most recent record will be displayed.';

class IVS extends savedCharting {
  constructor() {
    super(updateColumnName, deleteConfirmMsg);
  }

  selectIVDiscontinued(yes) {
    yes ? ivDiscontinued.check() : ivDiscontinued.uncheck();
  }

  selectBodyRegion(option) {
    bodyRegion.selectByOption(option);
  }

  selectLocation(option) {
    location.selectByOption(option);
  }

  selectTypeIvAccess(label) {
    typeIvAccess.selectRadioByLabel(label);
  }

  enterInsertionTime(value) {
    insertionTime.inputText(value);
  }

  selectSkinAssessment(options) {
    skinAssessment.searchAndSelectMultiOption(options);
  }

  selectPatency(options) {
    patency.searchAndSelectMultiOption(options);
  }

  selectDressingCare(options) {
    dressingCare.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  selectInfusionPumpUse(yes) {
    yes ? infusionPumpUse.check() : infusionPumpUse.uncheck();
  }

  enterNotes(value) {
    notes.inputText(value);
  }

  selectCatheterType(label) {
    catheterType.selectRadioByLabel(label);
  }

  selectCatheterSize(option) {
    catheterSize.selectByOption(option);
  }

  enterNumberInsertionAttempts(value) {
    numberInsertionAttempts.inputText(value);
  }

  selectTypeOfLine(option) {
    typeOfLine.selectByOption(option);
  }

  selectNumberOfLumens(option) {
    numberOfLumens.selectByOption(option);
  }

  enterExternalCatheterLength(value) {
    externalCatheterLength.inputText(value);
  }

  selectPCAPumpUse(yes) {
    yes ? pcaPumpUse.check() : pcaPumpUse.uncheck();
  }

  verifyAllFieldsDisplayed() {
    ivDiscontinued.verifyElementExist(true);
    bodyRegion.verifyElementExist(true);
    location.verifyElementExist(true);
    typeIvAccess.verifyElementExist(true);
    insertionTime.verifyElementExist(true);
    skinAssessment.verifyElementExist(true);
    patency.verifyElementExist(true);
    dressingCare.verifyElementExist(true);
    patientResponse.verifyElementExist(true);
    infusionPumpUse.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    bodyRegion.verifyElementEnabled(false);
    location.verifyElementEnabled(false);
    typeIvAccess.verifyElementEnabled(false);
  }

  validateIVDiscontinued(yes) {
    ivDiscontinued.verifyCheckBoxIsChecked(yes);
  }

  validateLocation(value) {
    location.verifySelectedValue(value);
  }

  validateBodyRegion(value) {
    bodyRegion.verifySelectedValue(value);
  }

  validateTypeIvAccess(label) {
    typeIvAccess.verifyRadioButtonIsCheckedByLabel(label);
  }
}
export default IVS;
