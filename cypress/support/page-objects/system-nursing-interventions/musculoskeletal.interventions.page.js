import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 7;

const jointRepairReplacementCare = new searchDropdownSelect('#jointRepairReplacementCare');
const fractureCare = new searchDropdownSelect('#fractureCare');
const tractionCare = new searchDropdownSelect('#tractionCare');
const pinTongCare = new searchDropdownSelect('#pinTongCare');
const drainOrTubeCare = new searchDropdownSelect('#drainOrTubeCare');
const patientResponse = new searchDropdownSelect('#patientResponse');
const musculoskeletalCareNotes = new textArea('#field-input-musculoskeletalCareNotes');

class MusculoskeletalInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectJointRepairReplacementCare(options) {
    jointRepairReplacementCare.searchAndSelectMultiOption(options);
  }

  selectFractureCare(options) {
    fractureCare.searchAndSelectMultiOption(options);
  }

  selectTractionCare(options) {
    tractionCare.searchAndSelectMultiOption(options);
  }

  selectPinTongCare(options) {
    pinTongCare.searchAndSelectMultiOption(options);
  }

  selectDrainOrTubeCare(options) {
    drainOrTubeCare.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  inputMusculoskeletalCareNotes(value) {
    musculoskeletalCareNotes.inputText(value);
  }

  verifyMusculoskeletalCareNotes(value) {
    musculoskeletalCareNotes.verifyTextFieldValue(value);
  }
}
export default MusculoskeletalInterventions;
