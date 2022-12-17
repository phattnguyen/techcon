import searchDropdown from '../../../element-helpers/search.dropdown.el';
import checkBox from '../../../element-helpers/checkbox.el';
import select from '../../../element-helpers/select.el';
import textArea from '../../../element-helpers/text.area.el';
import BasePage from '../../base.page';

const generalTextbox = new textArea('#field-input-general');
const vitalSignsTextbox = new textArea('#field-input-vitalSigns');
const integumentTextbox = new textArea('#field-input-integument');
const heentTextbox = new textArea('#field-input-heent');
const cardiovascularTextbox = new textArea('#field-input-cardiovascular');
const respiratoryTextbox = new textArea('#field-input-respiratory');
const gastrointestinalTextbox = new textArea('#field-input-gastrointestinal');
const genitourinaryTextbox = new textArea('#field-input-genitourinary');
const musculoskeletalTextbox = new textArea('#field-input-musculoskeletal');
const neurologicTextbox = new textArea('#field-input-neurologic');
const developmentalTextbox = new textArea('#field-input-developmental');
const muendocrineTextbox = new textArea('#field-input-endocrine');
const genitaliaTextbox = new textArea('#field-input-genitalia');
const lymphaticTextbox = new textArea('#field-input-lymphatic');

class PhysicalExaminationPage extends BasePage {
  general = generalTextbox;
  vitalSigns = vitalSignsTextbox;
  integument = integumentTextbox;
  heent = heentTextbox;
  cardiovascular = cardiovascularTextbox;
  respiratory = respiratoryTextbox;
  gastrointestinal = gastrointestinalTextbox;
  gastrointestinal = gastrointestinalTextbox;
  genitourinary = genitourinaryTextbox;
  musculoskeletal = musculoskeletalTextbox;
  neurologic = neurologicTextbox;
  developmental = developmentalTextbox;
  muendocrine = muendocrineTextbox;
  genitalia = genitaliaTextbox;
  lymphatic = lymphaticTextbox;

  clearAllTextboxes() {
    cy.get('textarea').each(el => {
      cy.wrap(el).clear();
    });
  }
}

export default PhysicalExaminationPage;
