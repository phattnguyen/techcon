import basePage from './base.page';
import vitalSignTable from './vital.sign.table.page';

const simsCy = require('../sim.cy');

const addLocationBtn = 'Add Location';
const clearLocationBtn = 'Clear';
const noRequireAssessmentChkBox = '//input[contains(@value,"noAssessmentRequired")]';
const rowDeleted = '.row--deleted';

const savedSystemAssessmentChartName = '//h1[text()="Saved System Assessments"]';

class systemAssessment extends basePage {
  constructor(fieldNum) {
    super();
    this._fieldNum = fieldNum; //number of default fields on chart
  }
  noAssessmentRequireChkBox() {
    return this.getWebElement(noRequireAssessmentChkBox);
  }

  isRequireAssessment(yes) {
    yes ? this.noAssessmentRequireChkBox().uncheck({ force: true }) : this.noAssessmentRequireChkBox().check({ force: true });
  }

  verifyNavigateToSavedSystemAssessment() {
    simsCy.verifyTextPresents('Saved System Assessments');
  }

  clickViewSavedAssessmentChart(chartName, time) {
    cy.xpath(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Chart")]/following-sibling::div//span[contains(text(),"${chartName}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//button`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
  }

  verifyEditChartSideBarDisplayed() {
    cy.get('h2')
      .contains('View Chart')
      .scrollIntoView()
      .should('be.visible');
  }

  verifyEditChartSideBarTitle(title) {
    cy.get('h3')
      .contains(title)
      .should('be.visible');
  }

  verifyEditChartSideBarDateTime(dateTime) {
    cy.get('div[class="u-els-display-inline-block c-els-badge c-els-badge--background-subtile u-els-nowrap u-els-margin-top"]')
      .contains(dateTime)
      .should('be.visible');
  }

  verifyEditChartSideBarAuthorName(name) {
    simsCy.verifyTextPresents('Entered by:');
    simsCy.verifyTextPresents(name);
  }

  // @title: the value on the left of Edit side bar table
  // @value: the value on the right of Edit side bar table
  verifyEditChartSideBarContent(title, value) {
    if (typeof value !== 'undefined') {
      cy.xpath(
        `//div[@class="c-els-table__cell-content"]/div[contains(text(),"${title}")]/ancestor::tr[@class="c-els-table__row"]/td[@class="c-els-table__cell c-els-table__cell--left"]`
      )
        .children('.c-els-table__cell-content')
        .contains(value)
        .eq(0)
        .scrollIntoView()
        .should('be.visible');
    } else {
      cy.xpath(`//div[@class="c-els-table__cell-content"]/div[contains(text(),"${title}")]`)
        .eq(0)
        .scrollIntoView()
        .should('be.visible');
    }
  }

  verifyEditChartSideBarContents(contents) {
    contents.forEach(content => {
      this.verifyEditChartSideBarContent(content);
    });
  }

  deleteRecord(record) {
    cy.xpath(`//div[@class="c-els-table__cell-content"]/div[text()="${record}"]/ancestor::tr[@class="c-els-table__row"]/td[last()]/div[last()]`)
      .eq(0)
      .click();
    simsCy.verifyTextPresents('Are you sure you want to delete this entry?');
    simsCy.clickDeleteButton();
    simsCy.verifyDeletedSuccessfully();
  }

  deleteRecords(records) {
    records.forEach(record => {
      this.deleteRecord(record);
    });
  }

  verifyRecordDeleted(record) {
    cy.get(rowDeleted)
      .contains(record)
      .should('exist');
    vitalSignTable.verifyLineThroughDeletedRecord();
  }

  verifyRecordsDeleted(records) {
    records.forEach(record => {
      this.verifyRecordDeleted(record);
    });
  }

  verifyAllFieldsDisabled(yes) {
    if (yes) {
      this.getWebElement('[disabled]')
        .its('length')
        .should('eq', this._fieldNum);
    } else {
      this.getWebElement('[disabled]')
        .its('length')
        .should('be.below', this._fieldNum);
    }
  }

  // /**
  //  *
  //  * @param {*} options
  //  * Verify the option list of multi choices selection box exist
  //  */
  // verifyMuiltiChoiceDropdownOptionsExist(options) {
  //   options.forEach(option => {
  //     this.fieldLabel()
  //       .contains(option)
  //       .should('exist');
  //   });
  // }

  // /**
  //  *
  //  * @param {*} options
  //  * Verify the option list of single choice selection box exist
  //  */
  // verifySingleChoiceDropdownOptionsExist(options) {
  //   options.forEach(option => {
  //     this.fieldLabelSingleChoice()
  //       .contains(option)
  //       .should('exist');
  //   });
  // }

  verifyChartSectionLabel(label) {
    cy.get('h2')
      .contains(label)
      .should('exist');
  }

  clickCloseViewChart() {
    simsCy
      .getButtonByLabel('Close')
      .eq(0)
      .scrollIntoView()
      .click();
    cy.wait(500);
    cy.get('h2')
      .contains('View Chart')
      .should('not.exist');
  }

  clickAddLocation() {
    simsCy.getButtonByLabel(addLocationBtn).dblclick({ force: true });
  }

  clickClearLocation() {
    simsCy.getButtonByLabel(clearLocationBtn).click();
  }
}

export default systemAssessment;
