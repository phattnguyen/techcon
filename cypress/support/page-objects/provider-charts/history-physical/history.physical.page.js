import BasePage from '../../base.page';

const simsCy = require('../../../sim.cy');
const historyPhysicalTitle = '.tile__title';

class HistoryPhysical extends BasePage {
  navigateByTitle(title) {
    cy.get(historyPhysicalTitle)
      .contains(title)
      .click();
  }

  clickMedicalHistory() {
    this.navigateByTitle('Medical History');
  }

  clickPhysicalExaminationy() {
    this.navigateByTitle('Physical Examination');
  }

  clickImpressions() {
    this.navigateByTitle('Impressions');
  }
}
export default HistoryPhysical;
