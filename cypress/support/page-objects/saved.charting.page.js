import SystemAssessment from './system.assessment.page';
import vitalSignTable from './vital.sign.table.page';

const simsCy = require('../sim.cy');

class savedCharting extends SystemAssessment {
  constructor(updateLinkColumnName, deleteConfirmMsg) {
    super();
    this.columnName = updateLinkColumnName;
    this.confirmMsg = deleteConfirmMsg;
  }

  getDeleteIcon(location, time) {
    return this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Location")]/following-sibling::div//span[contains(text(),"${location}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//*[contains(@class, "saved-patient-charting__trash-icon")]`
    );
  }

  clickUpdateSavedChart(location, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Location")]/following-sibling::div//span[contains(text(),"${location}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="${this.columnName}"]/following-sibling::div//button`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
  }

  verifyDeleteConfirmationMessage(msg) {
    this.getWebElement('//div[@id="c-els-modal__content-deleteConfirmModal"]//p').should('contain.text', msg);
  }

  verifyRecordExistedConfirmationMessage(msg) {
    this.getWebElement('//div[@id="c-els-modal__content-confirmationModal"]//p').should('contain.text', msg);
  }

  verifyEditChartSideBarStatus(status) {
    this.getWebElement('//div[contains(@class, "u-els-display-inline-block c-els-badge c-els-badge--background-subtile u-els-nowrap status-badge u-els-margin-right-1o2")]').then(
      $el => {
        cy.wrap($el)
          .eq(0)
          .contains(status)
          .should('be.visible');
      }
    );
  }

  verifyDeleteConfirmationPopupShow() {
    simsCy.verifyTextPresents(this.confirmMsg);
  }

  verifyNavigateToSavedCharting(title) {
    simsCy.verifyTextPresents(title);
  }

  verifyRecordStatusShowOnGrid(location, time, status) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Location")]/following-sibling::div//span[contains(text(),"${location}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr//div[contains(@class,'header') and text()='${this.columnName}']`
    )
      .siblings()
      .should('contain.text', status);
  }

  deleteChartRecords(location, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Location")]/following-sibling::div//span[contains(text(),"${location}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]/td/div[@class='c-els-table__cell-content']/span`
    )
      .eq(0)
      .invoke('attr', 'class')
      .then(res => {
        cy.log(`**Row status is: ${res}**`);
        if (res === null || res === '') {
          this.getDeleteIcon(location, time)
            .should('exist')
            .then($el => {
              cy.wrap($el)
                .eq(0)
                .dblclick({ force: true });
              this.verifyDeleteConfirmationPopupShow();
              simsCy.clickDeleteButton();
              simsCy.verifyDeletedSuccessfully();
            });
          this.deleteChartRecords(location, time);
        } else if (res === 'row-deleted') return;
      });
  }

  deleteChartRecord(location, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Location")]/following-sibling::div//span[contains(text(),"${location}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//*[contains(@class, "saved-patient-charting__trash-icon")]`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
    this.verifyDeleteConfirmationPopupShow();
    simsCy.clickDeleteButton();
    simsCy.verifyDeletedSuccessfully();
  }

  clickViewSavedChart(location, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Location")]/following-sibling::div//span[contains(text(),"${location}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//button`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
  }

  verifyDuplicateRecordConfirmModal(msg) {
    this.getWebElement('h3')
      .contains('Please confirm.')
      .should('be.visible');
    this.getWebElement(`div[aria-label='${msg}']`).should('be.visible');
  }

  verifyNavigateToSavedGrid(header) {
    simsCy.verifyTextPresents(header);
  }

  deleteAllRecords() {
    this.getWebElement("svg[class*='saved-patient-charting__trash-icon']").each(el => {
      cy.wrap(el)
        .eq(0)
        .dblclick({ force: true });
      this.verifyDeleteConfirmationPopupShow();
      simsCy.clickDeleteButton();
      simsCy.verifyDeletedSuccessfully();
    });
  }

  verifyChartRecordDeleted(location, time) {
    this.getDeleteIcon(location, time).should('not.exist');
    vitalSignTable.verifyLineThroughDeletedRecord();
  }
}
export default savedCharting;
