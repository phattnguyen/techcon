import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import BasePage from '../base.page';
import Accordion from '../../element-helpers/accordion.el';

const accordion = new Accordion();

class ProviderChartPage extends BasePage {
  verifyProviderChartSavedRecordTitleDisplay(title, subtitle) {
    accordion.verifySavedRecordTitleDisplay(title, subtitle);
  }

  clickProviderChartSavedRecordByTitle(title) {
    accordion.clickSavedRecordByTitle(title);
  }

  clickEditProviderChart() {
    accordion.clickEdit();
  }

  clickDeleteProviderChartSavedRecord() {
    accordion.clickDelete();
  }
}

export default ProviderChartPage;
