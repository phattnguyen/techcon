import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 4;

const respiratoryCare = new searchDropdownSelect('#respiratoryCare');
const drainOrTubeCare = new searchDropdownSelect('#drainOrTubeCare');
const patientResponse = new searchDropdownSelect('#patientResponse');
const respiratoryCareNotes = new textArea('#field-input-respiratoryCareNotes');

class RespiratoryInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectRespiratoryCare(options) {
    respiratoryCare.searchAndSelectMultiOption(options);
  }

  selectDrainOrTubeCare(options) {
    drainOrTubeCare.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  inputRespiratoryCareNotes(value) {
    respiratoryCareNotes.inputText(value);
  }

  verifyRespiratoryCareNotes(value) {
    respiratoryCareNotes.verifyTextFieldValue(value);
  }
}
export default RespiratoryInterventions;
