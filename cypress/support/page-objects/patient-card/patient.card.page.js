import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import element from '../../element-helpers/baseEl';

import table from '../../element-helpers/table.el';
import BasePage from '../base.page';

const categorySelectbox = new select('select[id=field-input-undefined]');
const generalInformationCheckbox = new checkBox('//span[text()="General Information"]/ancestor::label/input');
const actionListCheckbox = new checkBox('//span[text()="Action List"]/ancestor::label/input');
const dataTable = new table();
const generalInformationSection = new element('//h2[text()="General Information"]/parent::div');
const actionListSection = new element('//h2[text()="Action List"]/parent::div');

class PatientCardPage extends BasePage {
  verifyOrderInPatientCard(category, description, section) {
    let xpath = `//h2[text()='${section}']/parent::div//table//div[@class='c-els-table__cell-header' and text()='Category']/following-sibling::div[text()='${category}']/ancestor::tr//div[@class='c-els-table__cell-header' and text()='Description']/following-sibling::*//*[contains(text(),'${description}')]`;
    cy.xpath(xpath).should('exist');
  }

  verifyLastPerformed(dateTime) {
    dataTable.verifyCellValueByHeaderExist('Last Performed', dateTime);
  }

  clickDescription(desc) {
    dataTable.clickCell(desc, 'Description');
  }

  checkGeneralIformation(yes) {
    yes ? generalInformationCheckbox.check() : generalInformationCheckbox.uncheck();
  }

  checkActionList(yes) {
    yes ? actionListCheckbox.check() : actionListCheckbox.uncheck();
  }

  selectCategory(option) {
    categorySelectbox.selectByOption(option);
  }

  verifyGeneralInformationSectionDisplay(option) {
    generalInformationSection.verifyElementExist(option);
  }

  verifyActionListSectionDisplay(option) {
    actionListSection.verifyElementExist(option);
  }

  verifyGeneralInformationCheckboxIsChecked(option) {
    generalInformationCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifyActionListCheckboxIsChecked(option) {
    actionListCheckbox.verifyCheckBoxIsChecked(option);
  }

  verifySelectedCategory(option) {
    categorySelectbox.verifySelectedValue(option);
  }

  verifyNumberOfCategories(num) {
    categorySelectbox.verifyNumberOfOptions(num);
  }

  verifyOrderLinksTo(linksTo) {
    let chartName;
    let titleXpath = '//div[@id="children-wrapper"]//h1';
    if (linksTo.includes('/')) {
      chartName = linksTo.split('/').pop();
    } else {
      chartName = linksTo;
    }
    this.getWebElement(titleXpath).then(el => {
      const title = el.text();
      if (chartName.length >= title.length) {
        expect(chartName.toLowerCase()).to.include(title.toLowerCase());
      } else if (title.length > chartName.length) {
        expect(title.toLowerCase()).to.include(chartName.toLowerCase());
      }
    });
  }
}

export default PatientCardPage;
