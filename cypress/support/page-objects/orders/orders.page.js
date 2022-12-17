import table from '../../element-helpers/table.el';
import Popup from '../../../support/page-objects/popup.confirm.page';

import BasePage from '../base.page';

const dataTable = new table();
const popup = new Popup();
const sidebarDiscardChangeButton = '//div[@class="sidebar__container animated"]//*[@class="c-els-button__text" and text()="Discard Changes"]/parent::button';
const sidebarSavehangeButton = '//div[@class="sidebar__container animated"]//*[@class="c-els-button__text" and text()="Save Changes"]/parent::button';

class Orders extends BasePage {
  verifySavedOrdersDataTable(header, value) {
    dataTable.verifyCellValueByHeaderExist(header, value);
  }

  clickSpecialInstructionByOrderDescription(order) {
    dataTable.clickCell(order, 'Special Instructions');
  }

  verifySpecialInstructionPopup(content) {
    popup.verifyPopupTitle('Special Instructions');
    popup.verifyPopupContent(content);
  }

  deleteAllOrders() {
    dataTable.deleteRecordIfExists();
  }

  clickOrderStatus(order) {
    dataTable.clickCell(order, 'Status');
  }

  clickSideBarDiscardChanges() {
    this.getWebElement(sidebarDiscardChangeButton).each(button => {
      if (Cypress.$(button).css('visibility') === 'visible') {
        cy.wrap(button).click({ force: true });
      }
    });
  }

  clickSideBarSaveChanges() {
    this.getWebElement(sidebarSavehangeButton).each(button => {
      if (Cypress.$(button).css('visibility') === 'visible') {
        cy.wrap(button).click({ force: true });
      }
    });
  }

  verifyNoticeText() {
    cy.get('strong')
      .contains('Notice: ')
      .should('be.visible');
    cy.get('p')
      .contains(
        'Orders entered on this screen are for practice only. The actual entry of orders for the patient in your care must be performed according to the policy and procedures dictated by your clinical site.'
      )
      .should('be.visible');
  }
}

export default Orders;
