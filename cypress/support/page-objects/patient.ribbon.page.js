const labelPatientIdentifier = "//div[@class='patient-ribbon']//div/following-sibling::div//div[contains(text(),'param')]";
const labelHeight = "//div[@class='patient-ribbon']//div[contains(text(),'Height')]/following-sibling::div";
const labelWeight = "//div[@class='patient-ribbon']//div[contains(text(),'Weight')]/following-sibling::div";

const patientRibbonPage = {
  validatePatientRibbonInfo(patientIdentifier, sex, dOB) {
    cy.xpath(labelPatientIdentifier.replace('param', patientIdentifier)).should('be.visible');
    cy.xpath(labelPatientIdentifier.replace('param', dOB)).should('be.visible');
    cy.xpath(labelPatientIdentifier.replace('param', sex)).should('be.visible');
  },

  validatePatientRibbonHeightWeight(height, weight) {
    cy.xpath(labelHeight).should($height => {
      expect($height).to.contain(height);
    });

    cy.xpath(labelWeight).should($weight => {
      expect($weight).to.contain(weight);
    });
  }
};
module.exports = patientRibbonPage;
