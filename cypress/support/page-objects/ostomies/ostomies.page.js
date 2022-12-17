import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import SavedCharting from '../saved.charting.page';

const discontinuedCheckbox = new checkBox('#field-input-discontinued-discontinued');
const locationSelect = new select('#field-input-location');
const ostomyTypeSelect = new select('#field-input-ostomyType');
const periStomaPeriInsertionSelect = new searchDropdown('#periStomaPeriInsertion');
const stomaConditionSelect = new searchDropdown('#stomaCondition');
const drainageFromOstomySelect = new searchDropdown('#drainageFromOstomy');
const ostomyPatencySelect = new searchDropdown('#ostomyPatency');
const patientResponseSelect = new searchDropdown('#patientResponse');
const dressingAndOstomyCareSelect = new searchDropdown('#dressingAndOstomyCare');
const notes = new textArea('#field-input-notes');

const updateColumnName = 'Ostomy Status';
const deleteConfirmMsg =
  'Are you sure you want to delete this entry? Note that the most recent Ostomies update will be deleted.\n      If there is another record associated with this Ostomies location, the next most recent record will be displayed.';

class OstomiesPage extends SavedCharting {
  constructor() {
    super(updateColumnName, deleteConfirmMsg);
  }

  checkDiscontinued(yes) {
    yes ? discontinuedCheckbox.check() : discontinuedCheckbox.uncheck();
  }

  selectLocation(option) {
    locationSelect.selectByOption(option);
  }

  selectOstomyType(option) {
    ostomyTypeSelect.selectByOption(option);
  }

  selectPeriStomaPeriInsertion(options) {
    periStomaPeriInsertionSelect.searchAndSelectMultiOption(options);
  }

  selectStomaCondition(options) {
    stomaConditionSelect.searchAndSelectMultiOption(options);
  }

  selectDrainageFromOstomy(options) {
    drainageFromOstomySelect.searchAndSelectMultiOption(options);
  }

  selectOstomyPatency(options) {
    ostomyPatencySelect.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponseSelect.searchAndSelectMultiOption(options);
  }

  selectDressingAndOstomyCare(options) {
    dressingAndOstomyCareSelect.searchAndSelectMultiOption(options);
  }

  inputNotes(note) {
    notes.inputText(note);
  }

  verifySelectedLocation(option) {
    locationSelect.verifySelectedValue(option);
  }

  verifySelectedOstomyType(option) {
    ostomyTypeSelect.verifySelectedValue(option);
  }

  verifySelectedPeriStomaPeriInsertion(options) {
    periStomaPeriInsertionSelect.verifySelectedOptions(options);
  }

  verifySelectedStomaCondition(options) {
    stomaConditionSelect.verifySelectedOptions(options);
  }

  verifySelectedDrainageFromOstomy(options) {
    drainageFromOstomySelect.verifySelectedOptions(options);
  }

  verifySelectedOstomyPatency(options) {
    ostomyPatencySelect.verifySelectedOptions(options);
  }

  verifySelectedPatientResponse(options) {
    patientResponseSelect.verifySelectedOptions(options);
  }

  verifySelectedDressingAndOstomyCare(options) {
    dressingAndOstomyCareSelect.verifySelectedOptions(options);
  }

  verifyLocationAndTypeEnabled(option) {
    locationSelect.verifyElementEnabled(option);
    ostomyTypeSelect.verifyElementEnabled(option);
  }

  verifyFieldsEnabledByDefault(option) {
    periStomaPeriInsertionSelect.verifyElementEnabled(option);
    stomaConditionSelect.verifyElementEnabled(option);
    drainageFromOstomySelect.verifyElementEnabled(option);
    ostomyPatencySelect.verifyElementEnabled(option);
    patientResponseSelect.verifyElementEnabled(option);
    dressingAndOstomyCareSelect.verifyElementEnabled(option);
  }
}

export default OstomiesPage;
