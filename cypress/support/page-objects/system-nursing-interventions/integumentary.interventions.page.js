import savedSystemNursingInterventions from '../system-nursing-interventions/saved.system.nursing.interventions.page';
import textArea from '../../element-helpers/text.area.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 4;

const noCareRequiredCheckbox = '//input[contains(@value,"noCareRequired")]';
const skinCare = new searchDropdownSelect('#skinCare');
const woundCare = new searchDropdownSelect('#woundCare');
const patientResponse = new searchDropdownSelect('#patientResponse');
const integumentaryCareNotes = new textArea('#field-input-integumentaryCareNotes');

class IntegumentaryInterventions extends savedSystemNursingInterventions {
  constructor() {
    super(defaultFieldsNumber);
  }

  noCareRequireCheckBox() {
    return this.getWebElement(noCareRequiredCheckbox);
  }

  isRequireCare(yes) {
    yes ? this.noCareRequireCheckBox().uncheck({ force: true }) : this.noCareRequireCheckBox().check({ force: true });
  }

  selectSkinCare(options) {
    skinCare.searchAndSelectMultiOption(options);
  }

  selectWoundCare(options) {
    woundCare.searchAndSelectMultiOption(options);
  }

  selectPatientResponse(options) {
    patientResponse.searchAndSelectMultiOption(options);
  }

  inputIntegumentaryCareNotes(value) {
    integumentaryCareNotes.inputText(value);
  }

  verifyIntegumentaryCareNotes(value) {
    integumentaryCareNotes.verifyTextFieldValue(value);
  }
}
export default IntegumentaryInterventions;
