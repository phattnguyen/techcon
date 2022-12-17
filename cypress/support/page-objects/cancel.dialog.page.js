const CancelDialog = '#c-els-modal__content-discardConfirmationModal';
const btnOk = '.sng-button:first-child';
const btnCancel = '.sng-button:last-child';
const cancelConfirmationText = 'Are you sure you want to discard changes? Your changes will not be saved.';
const cancelConfirmationId = '#discardConfirmationModal';

const cancelConfirmationDialogPage = {
  // Discard Changes Confirmation pop-up dialog
  validateCancelMessage() {
    //this.getBtnDiscardChanges().click();
    cy.get(CancelDialog).should($e => {
      expect($e).to.contain(cancelConfirmationText);
    });
  },

  validateCancelDialogIsClosed() {
    cy.contains(cancelConfirmationId).should('not.be.visible');
  },
  clickCancelButton() {
    //this.clickCancelButton();
    cy.get(CancelDialog).within(() => {
      cy.get(btnCancel).click();
    });
  },
  clickOkButton() {
    // this.clickOkButton();
    cy.get(CancelDialog).within(() => {
      cy.get(btnOk).click();
    });
  }
};
module.exports = cancelConfirmationDialogPage;
