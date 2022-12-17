import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 4;

const noCareRequiredCheckbox = '//input[contains(@value,"noCareRequired")]';
const urinarySystemCare = new searchDropdownSelect('#urinarySystemCare');
const drainOrTubeCare = new searchDropdownSelect('#drainOrTubeCare');
const patientResponse = new searchDropdownSelect('#patientResponse');
const genitourinaryCareNotes = new textArea('#field-input-genitourinaryCareNotes');

class GenitourinaryInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  noCareRequireCheckBox() {
    return this.getWebElement(noCareRequiredCheckbox);
  }

  selectUrinarySystemCare(options) {
    urinarySystemCare.searchAndSelectMultiOption(options);
  }

  selectDrainOrTubeCare(options) {
    drainOrTubeCare.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  inputGenitourinaryCareNotes(value) {
    genitourinaryCareNotes.inputText(value);
  }

  verifyGenitourinaryCareNotes(value) {
    genitourinaryCareNotes.verifyTextFieldValue(value);
  }

  isRequireCare(yes) {
    yes ? this.noCareRequireCheckBox().uncheck({ force: true }) : this.noCareRequireCheckBox().check({ force: true });
  }
}
export default GenitourinaryInterventions;
