import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import savedCharting from '../saved.charting.page';

const teachingIsCompleteCheckbox = new checkBox('#field-input-teachingComplete-teachingIsComplete');
const categorySelect = new select('#field-input-category');
const subCategorySelect = new select('#field-input-subCategory');
const teachingTopicsSelect = new select('#field-input-teachingTopics');
const topicsTaughtSelect = new searchDropdown('#topicsTaught');
const personsTaughtSelect = new searchDropdown('#personsTaught');
const teachingMethodsSelect = new searchDropdown('#teachingMethods');
const learningBarriersSelect = new searchDropdown('#learningBarriers');
const outcomeSelect = new searchDropdown('#outcome');
const additionalCommentsTXT = new textArea('#field-input-additionalComments');
const updateColumnName = 'Status';
const deleteConfirmMsg =
  'Are you sure you want to delete this entry? Note that the most recent Patient Teaching update will be deleted.\n      If there is another record associated with this Patient Teaching, the next most recent record will be displayed.';

class PatientTeaching extends savedCharting {
  constructor() {
    super(updateColumnName, deleteConfirmMsg);
  }

  checkTeachingIsComplete(yes) {
    yes ? teachingIsCompleteCheckbox.check() : teachingIsCompleteCheckbox.uncheck();
  }

  selectCategory(option) {
    categorySelect.selectByOption(option);
  }

  selectSubCategory(option) {
    subCategorySelect.selectByOption(option);
  }

  selectTeachingTopics(option) {
    teachingTopicsSelect.selectByOption(option);
  }

  selectTopicsTaught(options) {
    topicsTaughtSelect.searchAndSelectMultiOption(options);
  }

  selectPersonsTaught(options) {
    personsTaughtSelect.searchAndSelectMultiOption(options);
  }

  selectTeachingMethods(options) {
    teachingMethodsSelect.searchAndSelectMultiOption(options);
  }

  selectLearningBarriers(options) {
    learningBarriersSelect.searchAndSelectMultiOption(options);
  }

  selectOutcome(options) {
    outcomeSelect.searchAndSelectMultiOption(options);
  }

  enterAdditionalComments(value) {
    additionalCommentsTXT.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    teachingIsCompleteCheckbox.verifyElementExist(true);
    categorySelect.verifyElementExist(true);
    subCategorySelect.verifyElementExist(true);
    teachingTopicsSelect.verifyElementExist(true);
    topicsTaughtSelect.verifyElementExist(true);
    personsTaughtSelect.verifyElementExist(true);
    teachingMethodsSelect.verifyElementExist(true);
    learningBarriersSelect.verifyElementExist(true);
    outcomeSelect.verifyElementExist(true);
  }

  validateCategory(value) {
    categorySelect.verifySelectedValue(value);
  }

  validateSubCategory(value) {
    subCategorySelect.verifySelectedValue(value);
  }

  validateTeachingTopic(value) {
    teachingTopicsSelect.verifySelectedValue(value);
  }

  validateTeachingIsComplete(yes) {
    teachingIsCompleteCheckbox.verifyCheckBoxIsChecked(yes);
  }

  clickViewSavedChart(topic, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Teaching Topic")]/following-sibling::div//span[contains(text(),"${topic}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//button`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
  }

  deleteChartRecord(topic, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Teaching Topic")]/following-sibling::div//span[contains(text(),"${topic}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//*[contains(@class, "saved-patient-charting__trash-icon")]`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
    this.verifyDeleteConfirmationPopupShow();
    simsCy.clickDeleteButton();
    simsCy.verifyDeletedSuccessfully();
  }

  clickUpdateSavedChart(topic, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Teaching Topic")]/following-sibling::div//span[contains(text(),"${topic}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="${this.columnName}"]/following-sibling::div//button`
    ).then($el => {
      cy.wrap($el)
        .eq(0)
        .dblclick({ force: true });
    });
  }

  getDeleteIcon(topic, time) {
    return this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Teaching Topic")]/following-sibling::div//span[contains(text(),"${topic}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]//div[text()="Actions"]/following-sibling::div//*[contains(@class, "saved-patient-charting__trash-icon")]`
    );
  }

  verifyRecordStatusShowOnGrid(topic, time, status) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Teaching Topic")]/following-sibling::div//span[contains(text(),"${topic}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr//div[contains(@class,'header') and text()='${this.columnName}']`
    )
      .siblings()
      .should('contain.text', status);
  }

  deleteChartRecords(topic, time) {
    this.getWebElement(
      `//div[@class="c-els-table__cell-header" and contains(text(),"Teaching Topic")]/following-sibling::div//span[contains(text(),"${topic}")]/ancestor::tr[@class="c-els-table__row"]//div[contains(text(),"${time}")]/ancestor::tr[@class="c-els-table__row"]/td/div[@class='c-els-table__cell-content']/span`
    )
      .eq(0)
      .invoke('attr', 'class')
      .then(res => {
        cy.log(`**Row status is: ${res}**`);
        if (res === null || res === '') {
          this.getDeleteIcon(topic, time)
            .should('exist')
            .then($el => {
              cy.wrap($el)
                .eq(0)
                .dblclick({ force: true });
              this.verifyDeleteConfirmationPopupShow();
              simsCy.clickDeleteButton();
              simsCy.verifyDeletedSuccessfully();
            });
          this.deleteChartRecords(topic, time);
        } else if (res === 'row-deleted') cy.log('**Row is deleted**');
      });
  }
}
export default PatientTeaching;
