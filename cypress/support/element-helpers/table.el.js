import BaseEl from './baseEl';
import simsCy from '../sim.cy';
const headerSelector = "//div[@class='c-els-table__cell-header' and text()='header_name']";
const deleteBtn = 'button[aria-label="Remove"]';
const cell = "//*[contains(text(),'val1')]/ancestor::tr/td/div[text()='val2']/following-sibling::div//button";
const removeButton = "//*[contains(text(),'value')]/ancestor::tr//button[@aria-label='Remove']";
const dateTableRow = 'tr[class="c-els-table__row"]';
const tableHistoryEntries = '.chart-history-table__entries';
const tableDeletedRows = '//div[@class="row--deleted"]//ancestor::tr';
const dataRow = '//span[text()="val1"]/ancestor::tr//*[contains(text(),"val2")]';

class Table extends BaseEl {
  verifyCellValueByHeaderExist(header, value) {
    cy.log(`Verify header ${header} with value ${value} exist`);
    cy.xpath(headerSelector.replace('header_name', header))
      .next()
      .contains(`${value}`)
      .should('exist');
  }

  verifyCellValueByHeaderNotExist(header, value) {
    cy.log(`Verify header ${header} with value ${value} exist`);
    cy.xpath(headerSelector.replace('header_name', header))
      .next()
      .contains(`${value}`)
      .should('not.exist');
  }

  verifyDataRowExist(cell1, cell2) {
    cy.xpath(dataRow.replace('val1', cell1).replace('val2', cell2)).should('exist');
  }

  verifyTableCellIsSoftDeleted(header, value) {
    cy.log(`Verify header ${header} with value ${value} has line through after deleted`);
    let textDecoration;
    if (Cypress.browser.name === 'firefox') {
      textDecoration = 'line-through rgb(115, 115, 115)';
    } else {
      textDecoration = 'line-through solid rgb(115, 115, 115)';
    }
    cy.xpath(headerSelector.replace('header_name', header))
      .next()
      .contains(`${value}`)
      .should('have.css', 'text-decoration', textDecoration);
  }

  verifyTableCellIsNotSoftDeleted(header, value) {
    cy.log(`Verify header ${header} with value ${value} has line through after deleted`);
    let textDecoration;
    if (Cypress.browser.name === 'firefox') {
      textDecoration = 'line-through rgb(115, 115, 115)';
    } else {
      textDecoration = 'line-through solid rgb(115, 115, 115)';
    }
    cy.xpath(headerSelector.replace('header_name', header))
      .next()
      .contains(`${value}`)
      .should('not.have.css', 'text-decoration', textDecoration);
  }

  clickCell(rowValue, colValue) {
    cy.xpath(cell.replace('val1', rowValue).replace('val2', colValue)).then($el => {
      cy.wrap($el)
        .scrollIntoView()
        .click({ force: true });
    });
  }

  deleteRecordByValue(val) {
    cy.xpath(removeButton.replace('value', val)).then($el => {
      cy.wrap($el)
        .scrollIntoView()
        .click({ force: true });
    });
  }

  /**
   * Use for hard deleting
   */
  deleteAllDataRows() {
    this.waitPageFullyLoaded();
    cy.get('body').then(() => {
      const dataRowNum = Cypress.$(dateTableRow).length;
      if (!dataRowNum == 0) {
        for (let i = 0; i < dataRowNum; i++) {
          cy.get(deleteBtn)
            .eq(0)
            .click({ force: true });
          simsCy.clickDeleteButton();
          cy.wait(1500);
        }
      } else {
        cy.log('No data');
      }
    });
  }

  /**
   * Check if there is (are) record(s) availbale
   * Use for soft deleting
   */
  deleteRecordIfExists() {
    this.waitPageFullyLoaded();
    cy.get('body').then(() => {
      const deletedButtons = Cypress.$(deleteBtn).length;
      if (!deletedButtons == 0) {
        cy.log(`There is(are) ${deletedButtons} record(s) to delete`);
        for (let i = 0; i < deletedButtons; i++) {
          cy.get(deleteBtn)
            .eq(0)
            .click({ force: true });
          simsCy.clickDeleteButton();
          simsCy.verifyDeletedSuccessfully();
        }
      }
    });
  }
}

export default Table;
