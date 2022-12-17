import simsCy from '../sim.cy';
import errorCard from '../page-objects/error.card.page';
import vitalSignPage from '../page-objects/vital.sign.vital.signs.page';
// import button from '../element-helpers/button.el';

const fieldLabel = '.c-els-field__label-text-content';
const fieldLabelSingleChoice = '.c-els-field__label-text';
const dateField = 'input[aria-label="Input date field"]';
const multiSelectedOptionTab = 'div[class*="sng-multi-select-search"]';
const multiSelectedOptionWrapper = '[class="c-tag-group sng-multi-select-search__tag-name-group"]';
const multiSelectedOptionRemoveBtn = '[class*="c-tag-group__remove-boarder"]';
const confirmDeleteEntry = '[aria-label="Delete Entry"]';
const confirmModal = 'button[aria-label="Close this modal window"]';
const leftNavigationSearch = '#navigationsearchbar';
const closeNavigationButton = 'button[aria-label="Close Navigation"] > svg';
const pageLoaderBar = 'div[class="c-els-page-loader"]';
const timeSetting = 'div[class=u-els-margin-left-1o2]>input';
const saveDateTimeSeting = '//div[@class="u-els-margin-left"]/button';
const statusCodeChevronIcon = 'div[class*=patient-ribbon__patient-info__code_status] > * svg';
const statusCodeNumber = 'div[class*=patient-ribbon__patient-info__code_status] > * div';
const totalScore = '//div[@class="o-els-flex-layout__item o-els-flex-layout__item--middle"]';

class BasePage {
  constructor(pageName) {
    this._pageName = pageName;
  }
  getWebElement(locator) {
    let el;
    locator.startsWith('//') ? (el = cy.xpath(locator)) : (el = cy.get(locator));
    return el;
  }

  clickSaveChanges() {
    simsCy.clickSaveChanges();
  }

  clickSavenContinue() {
    simsCy.clickSavenContinue();
  }

  clickDiscardChanges() {
    simsCy.clickDiscardChanges();
  }

  clickOkButton() {
    simsCy.clickOkButton();
  }

  clickCancel() {
    simsCy.clickCancel();
  }

  clickDelete() {
    simsCy.clickDeleteButton();
  }

  clickSave() {
    simsCy.clickSave();
  }

  clickConfirmDeleteEntry() {
    this.getWebElement(confirmDeleteEntry).click();
  }

  clickSubmitAssignment() {
    simsCy.clickSubmitButton();
  }

  clickContinueButton() {
    simsCy.clickContinueButton();
  }

  //It is used for Admission History
  clickCancelDiscardConfirmationModal() {
    this.getWebElement('//*[@id="c-els-modal__content-discardConfirmationModal"]//button[2]').click();
  }

  clickXButton() {
    this.getWebElement(closeNavigationButton).click();
  }

  clickCloseButton() {
    simsCy.clickCloseButton();
  }

  clickConfirmationModalIfExist() {
    cy.wait(500);
    cy.get('body').then(() => {
      const modal = Cypress.$(confirmModal).length;
      cy.log('Confirmation modal exists!');
      if (modal !== 0) {
        this.clickOkButton();
      }
    });
  }

  clickCancelConfirmationModal() {
    this.getWebElement('//*[@id="confirmationModal"]//button[2]').click();
  }

  verifySavedSuccessfully() {
    simsCy.verifySavedSuccessfully();
  }

  verifyDeletedSuccessfully() {
    simsCy.verifyDeletedSuccessfully();
  }

  verifyTextPresents(text) {
    simsCy.verifyTextPresents(text);
  }

  validateSaveChangesButtonStates(yes) {
    simsCy.validateSaveChangesButtonStates(yes);
  }

  validateSavenContinueButtonStates(yes) {
    simsCy.validateSavenContinueButtonStates(yes);
  }

  verifyChartName(chartName) {
    this.getWebElement('h1')
      .contains(chartName)
      .should('be.visible');
  }

  verifyErrorMessageDisplayed(yes, msg) {
    yes
      ? this.getWebElement('.u-els-color-error')
          .contains(msg)
          .should('exist')
      : this.getWebElement('.u-els-color-error').should('not.exist');
  }

  verifyUrlContains(url) {
    cy.url().should('contain', url);
  }

  /**
   *
   * @param  {...any} chartName
   * move to chart by clicking on its parents
   */
  leftBarNavigateToChart(...chartName) {
    chartName.forEach(chart => {
      this.getWebElement('.nav__item__label')
        .contains(new RegExp('^' + chart + '$', 'g'))
        .parent()
        .click();
      cy.wait(1500);
    });
  }

  verifyPageScrollUp(yes) {
    yes
      ? cy
          .window()
          .its('scrollY')
          .should('be.above', 0)
      : cy
          .window()
          .its('scrollY')
          .should('eq', 0);
  }

  verifyImageSrcByOption(imgElement, option) {
    this.getWebElement(imgElement)
      .should('have.attr', 'src')
      .should('include', option);
  }

  verifyAsteriskSymbolByLabel(label) {
    simsCy.verifyAsteriskOfFieldLabel(label);
  }

  verifyNumberOfAsteriskSymbolByLabel(label, number) {
    simsCy.verifyNumberOfAsteriskOfLabel(label, number);
  }

  fieldLabel() {
    return cy.get(fieldLabel);
  }

  fieldLabelSingleChoice() {
    return cy.get(fieldLabelSingleChoice);
  }

  clickOutside() {
    cy.get('body').click(0, 0);
  }

  verifyErrorCardDisplay(option) {
    errorCard.verifyErrorCardDisplayed(option);
  }

  verifyErrorCardSummaryMessage(message) {
    errorCard.verifyErrorSummaryMsg(message);
  }

  verifyErrorCardDetailMessage(message) {
    errorCard.verifyErrorDetails(message);
  }

  clearAllDates() {
    this.getWebElement(dateField).each(el => {
      cy.wrap(el).clear({ force: true });
    });
  }

  clickViewNotesButton() {
    const xpath = '//*[@class="c-els-button__text" and text()="View notes"]/parent::button';
    cy.xpath(xpath).each($el => {
      cy.wrap($el).click({ force: true });
    });
  }

  goBack() {
    cy.go('back');
  }

  unselectAllMultiOptions() {
    cy.get(multiSelectedOptionTab).then(() => {
      const selectedOptionWrapperNum = Cypress.$(multiSelectedOptionWrapper).length;
      if (selectedOptionWrapperNum !== 0) {
        const removeIconNum = Cypress.$(multiSelectedOptionRemoveBtn).length;
        for (let i = 0; i < removeIconNum; i++) {
          cy.get(multiSelectedOptionRemoveBtn)
            .eq(0)
            .click({ force: true });
        }
      } else {
        cy.log('No options were selected!');
      }
    });
  }

  leftNavigationSearchBox(chart) {
    cy.get(leftNavigationSearch).type(chart);
  }

  clickLeftNavigateTo(chart) {
    cy.get('.c-dropdown-search__option-item')
      .contains(chart)
      .click({ force: true });
  }

  verifyLeftNavigationResultExist(chart, yes) {
    yes
      ? cy
          .get('.c-dropdown-search__option-item')
          .contains(chart)
          .should('exist')
      : cy
          .get('.c-dropdown-search__option-item')
          .contains(chart)
          .should('not.exist');
  }

  verifyRibbonStatusCode(options) {
    this.getWebElement(statusCodeChevronIcon).click();
    options.forEach(option => {
      if (option.includes(':_')) {
        return;
      } else {
        cy.get('.c-els-tooltip__window')
          .contains(option)
          .should('be.visible');
      }
    });
  }

  verifyStatusCodeNumber(num) {
    cy.log(`**Verify total count of status codes should be equal ${num}**`);
    this.getWebElement(statusCodeNumber)
      .contains(num)
      .should('exist');
  }

  verifyRibbonStatusCodeNotDisplay(option) {
    if (option.includes(':_')) {
      return;
    } else {
      cy.get('.c-els-tooltip__window')
        .contains(option)
        .should('not.exist');
    }
  }

  waitPageFullyLoaded() {
    cy.get('body').then(() => {
      const pageLoader = Cypress.$(pageLoaderBar).length;
      if (pageLoader == 1) {
        cy.log('Page is still loading! Waiting for 2 seconds');
        cy.wait(2000);
        this.waitPageFullyLoaded();
      }
      if (pageLoader == 0) {
        return;
      }
    });
  }

  refresh() {
    cy.reload();
  }

  changeChartingTime(value) {
    simsCy.getEditButton().click();
    this.getWebElement(timeSetting)
      .clear()
      .type(value);
    this.getWebElement(saveDateTimeSeting).click();
  }

  resetChartingDateTime() {
    vitalSignPage.resetChartDateAndTimeToCurrent();
  }

  verifyFieldLabel(label) {
    this.getWebElement('h2')
      .contains(label)
      .scrollIntoView()
      .should('be.visible');
  }

  /**
   * Scale charts validate scores
   */
  validateQuestionScore(question, score) {
    if (question === 'Pressure ulcer/open wounds/draining fistula') {
      cy.xpath(`//*[text()="${question}"]/ancestor::div[contains(@class,'u-els-padding-bottom')]//strong`).each($el => {
        cy.wrap($el).should('have.text', score);
      });
    } else if (question === 'Tube feeding/total parenteral nutrition (TPN)') {
      var score1 = 2;
      var score2 = 3;
      if (score === '0') {
        score1 = '0';
        score2 = '0';
      }
      cy.xpath(
        `//div[@id="chart-field-label-generalNutritionScreen"]/following-sibling::div//*[text()="${question}"]/ancestor::div[contains(@class,'u-els-padding-bottom')]//strong`
      ).should('have.text', score1);
      cy.xpath(
        `//div[@id="chart-field-label-illnessInjuryNutritionScreen"]/following-sibling::div//*[text()="${question}"]/ancestor::div[contains(@class,'u-els-padding-bottom')]//strong`
      ).should('have.text', score2);
    } else {
      cy.xpath(`//*[text()="${question}"]/ancestor::div[contains(@class,'u-els-padding-bottom')]//strong`).should('have.text', score);
    }
  }

  validateTotalScore() {
    cy.xpath("//div/ancestor::div[contains(@class,'u-els-padding-bottom')]").then(() => {
      var sum = 0;
      Cypress.$('strong').each(function() {
        sum += +Cypress.$(this).text() || 0;
      });
      cy.log('Total sum of all questions:' + sum);
      cy.xpath(totalScore).then(() => {
        var total = 0;
        Cypress.$('span[class*=score-tag]').each(function() {
          total += +Cypress.$(this)
            .text()
            .substr(12);
        });
        cy.log('Comparing total score and sum of scores');
        expect(sum).to.equal(total);
      });
    });
  }

  verifyHighlightText(text) {
    const xpath = `//*[text()="${text}"]/ancestor::div[contains(@class,"highlight")]`;
    cy.log(`**Verify the text: "${text}" is highlighted**`);
    cy.xpath(xpath)
      .scrollIntoView()
      .should('be.visible');
  }

  verifyTextNotHighlighted(text) {
    const xpath = `//*[text()="${text}"]/ancestor::div[contains(@class,"highlight")]`;
    cy.log(`**Verify the text: "${text}" is highlighted**`);
    cy.xpath(xpath).should('not.exist');
  }

  /**
   * Accessibility check
   * @param {*} violations
   */
  terminalLog(violations) {
    cy.task('log', `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'} detected`);
    // pluck specific keys to keep the table readable
    const violationData = violations.map(({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    }));
    cy.task('table', violationData);
    cy.get('div[class=page-wrapper__children-wrapper] > * h1').then($pageNameLocator => {
      const pageName = $pageNameLocator
        .text()
        .split(' ')
        .join('-');
      cy.writeFile(`cypress/reports/${pageName}-a11y-result-${Math.floor(Date.now() / 1000)}.json`, violationData);
    });
  }

  checkPageAccessibility() {
    cy.injectAxe();
    cy.checkA11y(null, null, this.terminalLog, true);
  }
}

export default BasePage;
