import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 6;

const neuroInterventionsCare = new searchDropdownSelect('#neuroInterventionsCare');
const neuroInterventionsSeizurePrecautions = new searchDropdownSelect('#neuroInterventionsSeizurePrecautions');
const neuroInterventionsExtrapyramidalSideEffects = new searchDropdownSelect('#neuroInterventionsExtrapyramidalSideEffects');
const neuroInterventionsNeurolepticMalignantSyndrome = new searchDropdownSelect('#neuroInterventionsNeurolepticMalignantSyndrome');
const neuroInterventionsPatientResponse = new searchDropdownSelect('#neuroInterventionsPatientResponse');
const neuroInterventionsCareNotes = new textArea('#field-input-neuroInterventionsCareNotes');

class NeurologicalInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectNeuroInterventionsCare(options) {
    neuroInterventionsCare.searchAndSelectMultiOption(options);
  }

  selectSeizurePrecautions(options) {
    neuroInterventionsSeizurePrecautions.searchAndSelectMultiOption(options);
  }

  selectExtrapyramidalSideEffects(options) {
    neuroInterventionsExtrapyramidalSideEffects.searchAndSelectMultiOption(options);
  }

  selectNeurolepticMalignantSyndrome(options) {
    neuroInterventionsNeurolepticMalignantSyndrome.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    neuroInterventionsPatientResponse.searchAndSelectMultiOption(options);
  }

  inputNeuroInterventionsCareNotes(value) {
    neuroInterventionsCareNotes.inputText(value);
  }

  verifyNeuroInterventionsCareNotes(value) {
    neuroInterventionsCareNotes.verifyTextFieldValue(value);
  }
}
export default NeurologicalInterventions;
