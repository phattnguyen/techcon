import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 5;

const cardiovascularCare = new searchDropdownSelect('#cardiovascularCare');
const drainOrTubeCare = new searchDropdownSelect('#drainOrTubeCare');
const deepVeinThrombosisSuppression = new searchDropdownSelect('#deepVeinThrombosisSuppression');
const patientResponse = new searchDropdownSelect('#patientResponse');
const cardioVascularCareNotes = new textArea('#field-input-cardioVascularCareNotes');

class CardiovascularInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectCardiovascularCare(options) {
    cardiovascularCare.searchAndSelectMultiOption(options);
  }

  selectDrainOrTubeCare(options) {
    drainOrTubeCare.searchAndSelectMultiOption(options);
  }

  selectDeepVeinThrombosisSuppression(options) {
    deepVeinThrombosisSuppression.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  inputCardioVascularCareNotes(value) {
    cardioVascularCareNotes.inputText(value);
  }

  verifyCardioVascularCareNotes(value) {
    cardioVascularCareNotes.verifyTextFieldValue(value);
  }
}
export default CardiovascularInterventions;
