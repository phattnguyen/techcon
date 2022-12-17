import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import basePage from '../../page-objects/base.page';
import Table from '../../element-helpers/table.el';

const orderDescriptionSelect = new searchDropdown('#orderDescription');
const orderDateTXT = new textArea('#field-input-orderDate');
const orderTimeTXT = new textArea('#field-input-orderTime');
const checkBoxSelect = '//span[text()="label"]/ancestor::span';
const patientCard = "//button[@class='c-els-button--link']";
const orderDetailOther = "//span[text()='label']/ancestor::div[@class='o-els-flex-layout__item']/following-sibling::div[1]//input";
const table = new Table();

class GeneralOrders extends basePage {
  selectOrderDescription(option) {
    this.waitPageFullyLoaded();
    orderDescriptionSelect.searchAndSelectOption(option);
  }

  enterOrderDate(value) {
    orderDateTXT.inputText(value);
  }

  enterOrderTime(value) {
    orderTimeTXT.inputText(value);
  }

  checkOrderDetailByLabel(label) {
    cy.xpath(checkBoxSelect.replace('label', label))
      .siblings()
      .click({ force: true });
  }

  checkMultipleOrderDetailByLabel(labels) {
    labels.forEach(label => {
      this.checkOrderDetailByLabel(label);
    });
  }

  clickPatientCard() {
    cy.xpath(patientCard).click();
  }

  verifyAllFieldsDisplayed() {
    orderDescriptionSelect.verifyElementExist(true);
    orderDateTXT.verifyElementExist(true);
    orderTimeTXT.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    orderDateTXT.verifyElementEnabled(false);
    orderTimeTXT.verifyElementEnabled(false);
  }

  validateOrderDescription(value) {
    orderDescriptionSelect.verifySelectedOption(value);
  }

  verifySavedDataTableContent(header, value) {
    table.verifyCellValueByHeaderExist(header, value);
  }

  deleteAllOrders() {
    table.deleteAllDataRows();
  }

  verifyOrderDetailOtherIsEnabled(label) {
    cy.xpath(orderDetailOther.replace('label', label)).should('exist');
  }

  deleteGeneralOrder(order) {
    table.deleteRecordByValue(order);
    this.clickDelete();
    this.verifyDeletedSuccessfully();
  }

  enterOrderDetailOther(label, value) {
    cy.xpath(orderDetailOther.replace('label', label))
      .clear({ force: true })
      .type(value);
  }
}
export default GeneralOrders;
