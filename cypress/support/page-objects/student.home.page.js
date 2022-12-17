const simsCy = require('../../support/sim.cy');

const launchBtn = '//*[text()="Launch"]';

const studentHomePage = {
  getLaunchBtn: () => cy.xpath(launchBtn),

  //========================methods========================//
  navigateToPage: page => cy.xpath(`//a[contains(text(),'${page}')]`).click(),
  clickLaunchBtn: () => studentHomePage.getLaunchBtn().click({ force: true })
};

module.exports = studentHomePage;
