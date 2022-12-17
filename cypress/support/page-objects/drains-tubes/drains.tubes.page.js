import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import savedCharting from '../saved.charting.page';

const discontinuedCheckbox = new checkBox('#field-input-drainTubeDiscontinued-drainTubeDiscontinuedDiscontinued');
const locationSelect = new select('#field-input-location');
const drainTubeTypeSelect = new select('#field-input-drainTubeType');
const tubePlacementSelect = new searchDropdown('#tubePlacement');
const suctionSelect = new searchDropdown('#suction');
const drainTubeAreaSelect = new searchDropdown('#drainTubeArea');
const drainageSelect = new searchDropdown('#drainage');
const drainTubePatencySelect = new searchDropdown('#drainTubePatency');
const patientResponseSelect = new searchDropdown('#patientResponse');
const drainTubeCareSelect = new searchDropdown('#drainTubeCare');
const drainTubeNotesTXT = new textArea('#field-input-drainTubeNotes');

//Tracheostomy section
const tracheostomyTypeMetalCheckbox = new checkBox('#field-input-tracheostomyType-tracheostomyTypeMetal');
const tracheostomyTypeFenestratedCheckbox = new checkBox('#field-input-tracheostomyType-tracheostomyTypeFenestrated');
const tracheostomyTypeSingleCannulaCheckbox = new checkBox('#field-input-tracheostomyType-tracheostomyTypeSingleCannula');
const tracheostomySizeTXT = new textArea('#field-input-tracheostomySize');
const tracheostomyCuffRadio = new checkBox('[name="tracheostomyCuff"]');

const updateColumnName = 'Drain - Tube Status';
const deleteConfirmMsg =
  'Are you sure you want to delete this entry? Note that the most recent Drain - Tube update will be deleted.\n      If there is another record associated with this Drain - Tube location, the next most recent record will be displayed.';

class DrainsTubes extends savedCharting {
  constructor() {
    super(updateColumnName, deleteConfirmMsg);
  }

  selectDiscontinued(yes) {
    yes ? discontinuedCheckbox.check() : discontinuedCheckbox.uncheck();
  }

  selectLocation(option) {
    locationSelect.selectByOption(option);
  }

  selectDrainTubeType(option) {
    drainTubeTypeSelect.selectByOption(option);
  }

  selectTubePlacement(options) {
    if (options !== null) {
      tubePlacementSelect.searchAndSelectMultiOption(options);
    }
  }

  selectSuction(options) {
    if (options !== null) {
      suctionSelect.searchAndSelectMultiOption(options);
    }
  }

  selectDrainTubeArea(options) {
    if (options !== null) {
      drainTubeAreaSelect.searchAndSelectMultiOption(options);
    }
  }

  selectDrainage(options) {
    if (options !== null) {
      drainageSelect.searchAndSelectMultiOption(options);
    }
  }

  selectDrainTubePatency(options) {
    if (options != null) {
      drainTubePatencySelect.searchAndSelectMultiOption(options);
    }
  }

  selectPatientResponse(options) {
    patientResponseSelect.searchAndSelectMultiOption(options);
  }

  selectDrainTubeCare(options) {
    if (options !== null) {
      drainTubeCareSelect.searchAndSelectMultiOption(options);
    }
  }

  drainTubeNotes(value) {
    drainTubeNotesTXT.inputText(value);
  }

  //Tracheostomy section
  tracheostomyTypeMetal(yes) {
    yes ? tracheostomyTypeMetalCheckbox.check() : tracheostomyTypeMetalCheckbox.uncheck();
  }

  tracheostomyTypeFenestrated(yes) {
    yes ? tracheostomyTypeFenestratedCheckbox.check() : tracheostomyTypeFenestratedCheckbox.uncheck();
  }

  tracheostomyTypeSingleCannula(yes) {
    yes ? tracheostomyTypeSingleCannulaCheckbox.check() : tracheostomyTypeSingleCannulaCheckbox.uncheck();
  }

  tracheostomySize(value) {
    tracheostomySizeTXT.inputText(value);
  }

  tracheostomyCuff(label) {
    tracheostomyCuffRadio.selectRadioByLabel(label);
  }

  verifyAllFieldsDisplayed() {
    discontinuedCheckbox.verifyElementExist(true);
    locationSelect.verifyElementExist(true);
    drainTubeTypeSelect.verifyElementExist(true);
    tubePlacementSelect.verifyElementExist(true);
    suctionSelect.verifyElementExist(true);
    drainTubeAreaSelect.verifyElementExist(true);
    drainageSelect.verifyElementExist(true);
    drainTubePatencySelect.verifyElementExist(true);
    patientResponseSelect.verifyElementExist(true);
    drainTubeCareSelect.verifyElementExist(true);
  }

  verifyTracheostomyFieldsDisplayed() {
    tracheostomyTypeMetalCheckbox.verifyElementExist(true);
    tracheostomyTypeFenestratedCheckbox.verifyElementExist(true);
    tracheostomyTypeSingleCannulaCheckbox.verifyElementExist(true);
    tracheostomySizeTXT.verifyElementExist(true);
    tracheostomyCuffRadio.verifyElementExist(true);
  }

  verifyLocationAndTypeFieldsDisabled() {
    locationSelect.verifyElementEnabled(false);
    drainTubeTypeSelect.verifyElementEnabled(false);
  }

  validateDiscontinued(yes) {
    discontinuedCheckbox.verifyCheckBoxIsChecked(yes);
  }

  validateLocation(value) {
    locationSelect.verifySelectedValue(value);
  }

  validateDrainTubeType(value) {
    drainTubeTypeSelect.verifySelectedValue(value);
  }

  validateDrainTubeNote(value) {
    drainTubeNotesTXT.verifyTextFieldValue(value);
  }
}
export default DrainsTubes;
