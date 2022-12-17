import searchDropdown from '../../../element-helpers/search.dropdown.el';
import checkBox from '../../../element-helpers/checkbox.el';
import select from '../../../element-helpers/select.el';
import textArea from '../../../element-helpers/text.area.el';
import BasePage from '../../base.page';

const impressionsTextbox = new textArea('#field-input-impressions');
const planTextbox = new textArea('#field-input-plan');
const signatureTextbox = new textArea('#field-input-signature');
const daySelect = new select('#field-input-day');
const timeInput = new textArea('#field-input-time');

class ImpressionsChartPage extends BasePage {
  inputImpressions(text) {
    impressionsTextbox.inputText(text);
  }

  inputPlan(text) {
    planTextbox.inputText(text);
  }

  inputSignature(text) {
    signatureTextbox.inputText(text);
  }

  selectDay(opt) {
    daySelect.selectByOption(opt);
  }

  inputTime(text) {
    timeInput.inputText(text);
  }

  verifyImpressionsTextboxValue(val) {
    impressionsTextbox.verifyTextFieldValue(val);
  }

  verifyPlanTextboxValue(val) {
    planTextbox.verifyTextFieldValue(val);
  }

  verifySignatureTextboxValue(val) {
    signatureTextbox.verifyTextFieldValue(val);
  }

  verifyDaySelectedValue(val) {
    daySelect.verifySelectedValue(val);
  }

  verifyTimeValue(val) {
    timeInput.verifyTextFieldValue(val);
  }

  clearAllText() {
    impressionsTextbox.clearText();
    planTextbox.clearText();
    signatureTextbox.clearText();
  }
}

export default ImpressionsChartPage;
