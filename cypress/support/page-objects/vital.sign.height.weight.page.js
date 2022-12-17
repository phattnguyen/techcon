const heightWeightPage = {
  getFeet: () => cy.get('#field-input-heightFeet', { timeout: 60000 }),
  getInches: () => cy.get('#field-input-heightInch'),
  getCm: () => cy.get('#field-input-heightInch'),
  getAdmissionWeight: () => cy.get('#field-input-weightAdmission-weightAdmission', { timeout: 60000 }),
  getPound: () => cy.get('#field-input-weightPound'),
  getOunces: () => cy.get('#field-input-weightOunce'),
  getKgs: () => cy.get('#field-input-weightKg'),
  getGrams: () => cy.get('#field-input-weightGram'),
  getWeightMethod: () => cy.get('#field-input-weightMethod', { timeout: 60000 }),
  getSaveButton: () => cy.get('.c-els-button--primary').eq(1),
  getChartHistoryTable: () => cy.get('.chart-history-table'),
  getDiscardChangeButton: () =>
    cy
      .get('.c-els-button__text')
      .contains('Discard Changes')
      .parent(),
  getToast: () => cy.get('.c-els-toast__content div', { timeout: 60000 })
};

module.exports = heightWeightPage;
