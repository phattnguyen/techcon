import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 4;

const gastrointestinalCare = new searchDropdownSelect('#gastrointestinalCare');
const drainOrTubeCare = new searchDropdownSelect('#drainOrTubeCare');
const patientResponse = new searchDropdownSelect('#patientResponse');
const gastrointestinalCareNotes = new textArea('#field-input-gastrointestinalCareNotes');

class GastrointestinalInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectGastrointestinalCare(options) {
    gastrointestinalCare.searchAndSelectMultiOption(options);
  }

  selectDrainOrTubeCare(options) {
    drainOrTubeCare.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  inputGastrointestinalCareNotes(value) {
    gastrointestinalCareNotes.inputText(value);
  }

  verifyGastrointestinalCareNotes(value) {
    gastrointestinalCareNotes.verifyTextFieldValue(value);
  }
}
export default GastrointestinalInterventions;
