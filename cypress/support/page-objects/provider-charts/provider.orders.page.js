import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import ProviderChartPage from './provider.chart.save.page';

const providerOrdersTXT = new textArea('#field-input-providerOrders');
const signatureTXT = new textArea('#field-input-signature');
const providerOrdersEditTXT = new textArea('div[class*=sidebar__container] >* *[id=field-input-providerOrders]');
const signatureEditTXT = new textArea('div[class*=sidebar__container] >* *[id=field-input-signature]');

class ProviderOrders extends ProviderChartPage {
  inputProviderOrders(value) {
    providerOrdersTXT.inputText(value);
  }

  inputSignature(value) {
    signatureTXT.inputText(value);
  }

  editProviderOrders(value) {
    providerOrdersEditTXT.inputText(value);
  }

  editSignature(value) {
    signatureEditTXT.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    providerOrdersTXT.verifyElementExist(true);
    signatureTXT.verifyElementExist(true);
  }

  validateProviderOrders(value) {
    providerOrdersTXT.verifyTextFieldValue(value);
  }

  validateSignature(value) {
    signatureTXT.verifyTextFieldValue(value);
  }
}
export default ProviderOrders;
