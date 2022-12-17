import BaseEl from './baseEl';

const button = "li[class='c-els-accordion__group c-els-accordion__group--expanded'] >* button";

/**
 * use to handle data in accordion bootstrap
 * ex: Pre-clinical manager: medications, diagnosis,...
 */
class Accordion extends BaseEl {
  verifySavedRecordTitleDisplay(title, subtitle) {
    const xpath = `//button//div[contains(text(),'${title}')]`;
    if (typeof subtitle === 'undefined' || subtitle === '') {
      this.getWebElement(xpath).each($title => {
        const classes = Cypress.$($title).attr('class');
        if (!classes.includes('row--deleted')) {
          //find record that was not deleted
          cy.wrap($title)
            .scrollIntoView()
            .should('be.visible');
        }
      });
    } else {
      this.getWebElement(xpath).each($title => {
        const classes = Cypress.$($title).attr('class');
        if (!classes.includes('row--deleted')) {
          //find record that was not deleted
          cy.wrap($title)
            .siblings()
            .contains(subtitle)
            .scrollIntoView()
            .should('be.visible');
        }
      });
    }
  }

  clickSavedRecordByTitle(title) {
    const xpath = `//button//div[contains(text(),'${title}')]`;
    this.getWebElement(xpath).each($title => {
      const classes = Cypress.$($title).attr('class');
      if (!classes.includes('row--deleted')) {
        //find record that was not deleted
        cy.wrap($title)
          //.parentsUntil('button')
          .click({ force: true });
      }
    });
  }

  clickEdit() {
    this.getWebElement(button)
      .contains('Edit')
      .click({ force: true });
  }

  clickDelete() {
    this.getWebElement(button)
      .contains('Delete')
      .click({ force: true });
  }
}

export default Accordion;
