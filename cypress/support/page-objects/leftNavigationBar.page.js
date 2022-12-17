const leftNavigationBarPage = {
  goToChartPage(menuBar) {
    if (menuBar != null)
      cy.get('.nav__item__label')
        .contains(menuBar)
        .parent()
        .click();
  }
};

module.exports = leftNavigationBarPage;
