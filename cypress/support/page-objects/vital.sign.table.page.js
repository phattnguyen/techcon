//Table row
const { expect } = require('chai');
const simsCy = require('../../support/sim.cy');

const tableBody = '.c-els-table__body';
const tableRow = '.c-els-table__row';
const tableRowDeleted = '.row--deleted';
const deleteConfirmationPopup = '#deleteConfirmModal';

const noteContent = '//div[@id="c-els-modal__content-noteModal"]/div/div[1]';
const deleteBtn = '//div[contains(@class,"u-els-display-inline-block u-cursor-pointer")]';
const tableHistoryEntries = '.chart-history-table__entries';

//get table data of record that hasn't been deleted
const tblDeleteBtn = 'div[class="u-els-display-inline-block u-cursor-pointer"]';
const tblRow = 'tbody[class="c-els-table__body"]>tr[class=c-els-table__row]';
const tblContent = 'div[class=c-els-table__cell-content]>div';

const tableDeletedRows = 'div[class="column__content-chart-time row--deleted"]';

const vitalSignTable = {
  getDeleteButton: () => cy.xpath(deleteBtn),
  getDeleteConfirmationPopup: () => cy.get(deleteConfirmationPopup),
  getTableHistoryEntry: () => cy.get(tableHistoryEntries),

  //Get all undeleted data rows
  getTableRowHeader: headerLabel =>
    cy
      .get(tblDeleteBtn)
      .parentsUntil(tblRow)
      .siblings()
      .contains(headerLabel)
      .parent()
      .then($el => {
        $el.nextUntil(tblContent);
      }),
  getUndeletedChartTime: () => vitalSignTable.getTableRowHeader('Chart Time'),
  getUndeletedTempature: () => vitalSignTable.getTableRowHeader('Temp'),
  getUndeletedRespiration: () => vitalSignTable.getTableRowHeader('Resp'),
  getUndeletedPulse: () => vitalSignTable.getTableRowHeader('Pulse'),
  getUndeletedbloodPressure: () => vitalSignTable.getTableRowHeader('BP'),
  getUndeletedSaturation: () => vitalSignTable.getTableRowHeader('Sat%'),
  getUndeletedEntryName: () => vitalSignTable.getTableRowHeader('Entry By'),

  //=========================================methods================================//
  deleteAllDataRows: () => {
    cy.wait(1500);
    cy.xpath(deleteBtn).each($el => {
      cy.wrap($el).click();
      simsCy.getDeleteButton().click();
      cy.wait(1500);
    });
  },
  deleteNewDataRow: () => {
    cy.wait(2000);
    vitalSignTable
      .getDeleteButton()
      .first()
      .scrollIntoView()
      .click();
    simsCy.getDeleteButton().click();
  },
  deleteRowByChartTypeValue: (chartType, value) => {
    const getData = cy.xpath(
      `//div[@class="c-els-table__cell-header" and text()="${chartType}"]/following-sibling::div/div[contains(text(),"${value}")]/ancestor::tr//div[@class='u-els-display-inline-block u-cursor-pointer']`
    );
    getData.first().scrollIntoView();
    getData.click();
  },

  verifyRecordByChartTypeValueExist: (chartType, value) => {
    cy.log(`Verify chart ${chartType} with value ${value}`);
    cy.xpath(`//div[@class='c-els-table__cell-header' and text()='${chartType}']`)
      .next()
      .contains(`${value}`)
      .should('exist');
  },

  verifyRecordByChartTypeValueNotExist: (chartType, value) => {
    cy.log(`Verify chart ${chartType} with value ${value}`);
    cy.xpath(`//div[@class='c-els-table__cell-header' and text()='${chartType}']`)
      .next()
      .contains(`${value}`)
      .should('not.exist');
  },
  //Verify show entries history equals data rows in table
  verifyShowEntryLabel: () => {
    cy.get(tableBody)
      .find(tableRow)
      .then(rows => {
        const rowCount = Cypress.$(rows).length;
        if (rowCount === 1) {
          cy.log('Number of data row(s) is: 1');
          simsCy.verifyTextPresents('Showing 1 entry');
        } else {
          cy.log('Number of data row(s) is: ' + rowCount);
          vitalSignTable.getTableHistoryEntry().should($el => {
            expect($el.text()).to.equal(`Showing ${rowCount} entries`);
          });
        }
      });
  },
  cancelDeleteRecord: () => simsCy.getCancelButton().click(),
  confirmDeleteRecord: () => simsCy.getDeleteButton().click(),
  clickDeleteLatestRecord: () =>
    vitalSignTable
      .getDeleteButton()
      .eq(0)
      .click(),
  verifyLineThroughDeletedRecord: () => {
    if (Cypress.browser.name === 'firefox') {
      cy.get(tableRowDeleted)
        .eq(0)
        .should('have.css', 'text-decoration', 'line-through rgb(115, 115, 115)');
    } else {
      cy.get(tableRowDeleted)
        .eq(0)
        .should('have.css', 'text-decoration', 'line-through solid rgb(115, 115, 115)');
    }
  },

  //verify chart time of latest undeleted record
  verifyLatestChartTimeUndeletedRecord: time =>
    vitalSignTable.getUndeletedChartTime().then($chartTime => {
      expect($chartTime.text()).to.contain(time);
    }),
  //verify tempature of latest undeleted record
  verifyLatestTempUndeletedRecord: temp =>
    vitalSignTable.getUndeletedTempature().then($temp => {
      expect($temp.text()).to.contain(temp);
    }),
  //verify pulse of latest undeleted record
  verifyLatestPulseUndeletedRecord: pulse =>
    vitalSignTable.getUndeletedPulse().then($pulse => {
      expect($pulse.text()).to.contain(pulse);
    }),
  //verify respiration of latest undeleted record
  verifyLatestRespUndeletedRecord: resp =>
    vitalSignTable.getUndeletedRespiration().then($resp => {
      expect($resp.text()).to.contain(resp);
    }),
  //verify blood pressure of latest undeleted record
  verifyLatestBPUndeletedRecord: bp =>
    vitalSignTable.getUndeletedbloodPressure().then($bp => {
      expect($bp.text()).to.contain(bp);
    }),
  //verify saturation of latest undeleted record
  verifyLatestSaturationUndeletedRecord: sat =>
    vitalSignTable.getUndeletedSaturation().then($sat => {
      expect($sat.text()).to.contain(sat);
    }),
  //verify delete confirmation popup displayed
  verifyDeleteConfirmationPopup: () => {
    vitalSignTable.getDeleteConfirmationPopup().should('be.visible');
    simsCy.verifyTextPresents('Are you sure you want to delete this entry?');
  },
  verifyTableHasDataAvailable: yes => {
    yes ? cy.get(tblDeleteBtn).should('exist') : cy.get(tblDeleteBtn).should('not.exist');
  },
  verifyTableIsEmpty: () => {
    simsCy.verifyTextPresents('No data available in table');
    vitalSignTable.getTableHistoryEntry().should('contain.text', 'Showing 0 entries');
  },

  verifyTableHeader: header => {
    cy.xpath(`//tr[contains(@class,"c-els-table__row c-els-table__row--head")]//*[contains(text(),"${header}")]`).should('exist');
  },

  //Check if there is (are) record(s) availbale
  deleteRecordIfExists: () => {
    cy.wait(2000);
    vitalSignTable.getTableHistoryEntry().then($entry => {
      const entry = $entry.text().split(' ');
      const entryNum = entry[1];
      cy.log('Number of row is :' + entryNum);
      if (entryNum === '0') {
        return;
      } else {
        const deletedRowNum = Cypress.$(tableDeletedRows).length;
        cy.log('Number of deleted row is :' + deletedRowNum);
        if (entryNum > deletedRowNum) {
          cy.log('Going to delete record(s)...');
          vitalSignTable.deleteAllDataRows();
        }
      }
    });
  }
};
module.exports = vitalSignTable;
