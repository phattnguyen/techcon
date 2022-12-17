import BasePage from '../base.page';
import vitalSignTable from '../vital.sign.table.page';

const simsCy = require('../../sim.cy');

const rowDeleted = '.row--deleted';

const admissionHistoryTitle = '.admission-history-tile__title';

class AdmissionHistory extends BasePage {
  navigateByTitle(title) {
    cy.get(admissionHistoryTitle)
      .contains(title)
      .click();
  }

  clickAdmissionData() {
    this.navigateByTitle('Admission Data');
  }

  clickHealthHistory() {
    this.navigateByTitle('Health History');
  }

  clickPlanningForHospitalStay() {
    this.navigateByTitle('Planning for Hospital Stay');
  }

  clickImmunizations() {
    this.navigateByTitle('Immunizations');
  }

  clickDrugScreen() {
    this.navigateByTitle('Drug Screen');
  }

  clickSmokingScreen() {
    this.navigateByTitle('Smoking Screen');
  }

  clickAlcoholScreen() {
    this.navigateByTitle('Alcohol Screen');
  }

  clickMobilityAndPhysicalTherapyScreen() {
    this.navigateByTitle('Mobility and Physical Therapy Screen');
  }

  clickActivityOccupationalTherapyScreen() {
    this.navigateByTitle('Activity - Occupational Therapy Screen');
  }

  clickNutritionScreen() {
    this.navigateByTitle('Nutrition Screen');
  }

  clickHomeMedicationInfo() {
    this.navigateByTitle('Home Medication Information');
  }

  clickAllergyInformation() {
    this.navigateByTitle('Allergy Information');
  }

  clickCompleteButton() {
    simsCy.clickCompleteButton();
  }
}

export default AdmissionHistory;
