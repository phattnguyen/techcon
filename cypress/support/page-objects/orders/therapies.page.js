import simsCy from '../../sim.cy';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import Orders from './orders.page';

const orderTypeSelect = new select('#field-input-orderType');
const orderDescriptionSelect = new searchDropdown('#orderDescription');
const orderPriorityRadio = new checkBox('[name="orderPriority"]');
const orderPriorityTimesPerDayTXT = new textArea('#field-input-orderPriorityTimesPerDay');
const transportationSelect = new select('#field-input-transportation');
const ivRequiredRadio = new checkBox('[name="ivRequired"]');
const oxygenRequiredRadio = new checkBox('[name="oxygenRequired"]');
const startDateTXT = new textArea('#field-input-orderStartDate');
const startTimeTXT = new textArea('#field-input-orderStartTime');
const specialInstructionsTXT = new textArea('#field-input-specialInstructions');

//Sidebar section
const interventionDateTXT = new textArea('#field-input-interventionDate');
const interventionTimeTXT = new textArea('#field-input-interventionTime');

// Sidebar section - Occupational Therapy Consultation
const upperExtremityBathTXT = new textArea('#field-input-upperExtremityBath');
const toiletingTXT = new textArea('#field-input-toileting');
const showerTubTXT = new textArea('#field-input-showerTub');
const locationTXT = new textArea('#field-input-location');

// Sidebar section - Physical Therapy Consultation
const functionalMobilityTXT = new textArea('#field-input-functionalMobility');
const pivolTXT = new textArea('#field-input-pivol');
const weightBaeringTXT = new textArea('#field-input-weightBaering');
const theraputicExercisesTXT = new textArea('#field-input-theraputicExercises');

// Sidebar section - Respiratory Therapy Consultation
const oxygenSaturationRoomAirTXT = new textArea('#field-input-oxygenSaturationRoomAir');
const anterialBloodDasesTXT = new textArea('#field-input-anterialBloodDases');
const suctioningTXT = new textArea('#field-input-suctioning');
const treatmentTXT = new textArea('#field-input-treatment');

// Sidebar section - Speech Therapy Consultation
const consultationTypeTXT = new textArea('#field-input-consultationType');
const reasonConsultationTXT = new textArea('#field-input-reasonConsultation');
const planTXT = new textArea('#field-input-plan');
const speechTherapistSignatureTXT = new textArea('#field-input-speechTherapistSignature');

class Therapies extends Orders {
  selectOrderType(option) {
    orderTypeSelect.selectByOption(option);
  }

  selectOrderDescription(option) {
    orderDescriptionSelect.searchAndSelectOption(option);
  }

  selectOrderPriority(label) {
    orderPriorityRadio.selectRadioByLabel(label);
  }

  enterOrderPriorityTimesPerDay(value) {
    orderPriorityTimesPerDayTXT.inputText(value);
  }

  selectTransportation(option) {
    transportationSelect.selectByOption(option);
  }

  selectIVRequired(label) {
    ivRequiredRadio.selectRadioByLabel(label);
  }

  selectOxygenRequired(label) {
    oxygenRequiredRadio.selectRadioByLabel(label);
  }

  enterStartDate(value) {
    startDateTXT.inputText(value);
  }

  enterStartTime(value) {
    startTimeTXT.inputText(value);
  }

  enterSpecialInstructions(value) {
    specialInstructionsTXT.inputText(value);
  }

  //Sidebar section
  enterInterventionDate(value) {
    interventionDateTXT.inputText(value);
  }

  enterInterventionTime(value) {
    interventionTimeTXT.inputText(value);
  }

  // Sidebar section - Occupational Therapy Consulation
  enterUpperExtremityBath(value) {
    upperExtremityBathTXT.inputText(value);
  }

  enterToileting(value) {
    toiletingTXT.inputText(value);
  }

  enterShowerTub(value) {
    showerTubTXT.inputText(value);
  }

  enterLocation(value) {
    locationTXT.inputText(value);
  }

  // Sidebar section - Physical Therapy Consulation
  enterFunctionalMobility(value) {
    functionalMobilityTXT.inputText(value);
  }

  enterPivol(value) {
    pivolTXT.inputText(value);
  }

  enterWeightBaering(value) {
    weightBaeringTXT.inputText(value);
  }

  enterTheraputicExercises(value) {
    theraputicExercisesTXT.inputText(value);
  }

  // Sidebar section - Respiratory Therapy Consulation
  enterOxygenSaturationRoomAir(value) {
    oxygenSaturationRoomAirTXT.inputText(value);
  }

  enterAnterialBloodDases(value) {
    anterialBloodDasesTXT.inputText(value);
  }

  enterSuctioning(value) {
    suctioningTXT.inputText(value);
  }

  enterTreatment(value) {
    treatmentTXT.inputText(value);
  }

  // Sidebar section - Speech Therapy Consulation
  enterConsultationType(value) {
    consultationTypeTXT.inputText(value);
  }

  enterReasonConsultation(value) {
    reasonConsultationTXT.inputText(value);
  }

  enterPlan(value) {
    planTXT.inputText(value);
  }

  enterSpeechTherapistSignature(value) {
    speechTherapistSignatureTXT.inputText(value);
  }

  enterSidebarContentByTherapyOrderType(therapyOrderType, value) {
    if (therapyOrderType === 'Occupational Therapy') {
      this.enterUpperExtremityBath(`UpperExtremityBath ${value}`);
      this.enterToileting(`Toileting ${value}`);
      this.enterShowerTub(`ShowerTub ${value}`);
      this.enterLocation(`Location ${value}`);
    } else if (therapyOrderType === 'Physical Therapy') {
      this.enterFunctionalMobility(`FunctionalMobility ${value}`);
      this.enterPivol(`Pivol ${value}`);
      this.enterWeightBaering(`WeightBaering ${value}`);
      // this.enterTheraputicExercises(`TheraputicExercises ${value}`); //TODO: cannot input text into this field?
    } else if (therapyOrderType === 'Respiratory Therapy') {
      this.enterOxygenSaturationRoomAir(`OxygenSaturationRoomAir ${value}`);
      this.enterAnterialBloodDases(`AnterialBloodDases ${value}`);
      this.enterSuctioning(`Suctioning ${value}`);
      this.enterTreatment(`Treatment ${value}`);
    } else if (therapyOrderType === 'Speech Therapy') {
      this.enterConsultationType(`ConsultationType ${value}`);
      this.enterReasonConsultation(`ReasonConsultation ${value}`);
      this.enterPlan(`Plan ${value}`);
      this.enterSpeechTherapistSignature(`SpeechTherapistSignature ${value}`);
    }
  }

  verifyEditChartSideBarContent(title, value) {
    cy.xpath(`//td[@class="c-els-table__cell c-els-table__cell--left"]/div[contains(text(),"${title}")]`)
      .next()
      .contains(value)
      .scrollIntoView()
      .should('exist');
  }

  verifySidebarContentByTherapyOrderType(therapyOrderType, value) {
    if (therapyOrderType === 'Occupational Therapy') {
      this.verifyEditChartSideBarContent('Upper Extremity Bath', `UpperExtremityBath ${value}`);
      this.verifyEditChartSideBarContent('Toileting', `Toileting ${value}`);
      this.verifyEditChartSideBarContent('Shower - Tub', `ShowerTub ${value}`);
      this.verifyEditChartSideBarContent('Location', `Location ${value}`);
    } else if (therapyOrderType === 'Physical Therapy') {
      this.verifyEditChartSideBarContent('Functional Mobility', `FunctionalMobility ${value}`);
      this.verifyEditChartSideBarContent('Pivol', `Pivol ${value}`);
      this.verifyEditChartSideBarContent('Weight Bearing', `WeightBaering ${value}`);
      // this.verifyEditChartSideBarContent('Theraputic Exercises', `TheraputicExercises ${value}`);
    } else if (therapyOrderType === 'Respiratory Therapy') {
      this.verifyEditChartSideBarContent('Oxygen Saturation - Room Air', `OxygenSaturationRoomAir ${value}`);
      this.verifyEditChartSideBarContent('Anterial Blood Dases', `AnterialBloodDases ${value}`);
      this.verifyEditChartSideBarContent('Suctioning', `Suctioning ${value}`);
      this.verifyEditChartSideBarContent('Treatment', `Treatment ${value}`);
    } else if (therapyOrderType === 'Speech Therapy') {
      this.verifyEditChartSideBarContent('Consultation Type', `ConsultationType ${value}`);
      this.verifyEditChartSideBarContent('Reason for Consultation', `ReasonConsultation ${value}`);
      this.verifyEditChartSideBarContent('Plan', `Plan ${value}`);
      this.verifyEditChartSideBarContent('Speech Therapist Signature', `SpeechTherapistSignature ${value}`);
    }
  }

  verifyAllFieldsDisplayed() {
    orderTypeSelect.verifyElementExist(true);
    orderDescriptionSelect.verifyElementExist(true);
    orderPriorityRadio.verifyElementExist(true);
    orderPriorityTimesPerDayTXT.verifyElementExist(true);
    transportationSelect.verifyElementExist(true);
    ivRequiredRadio.verifyElementExist(true);
    oxygenRequiredRadio.verifyElementExist(true);
    startDateTXT.verifyElementExist(true);
    startTimeTXT.verifyElementExist(true);
    specialInstructionsTXT.verifyElementExist(true);
  }

  verifyFieldsDisabled() {
    orderPriorityTimesPerDayTXT.verifyElementEnabled(false);
    transportationSelect.verifyElementEnabled(false);
    startDateTXT.verifyElementEnabled(false);
    startTimeTXT.verifyElementEnabled(false);
    specialInstructionsTXT.verifyElementEnabled(false);
  }

  verifyOrderPriorityEnabled(option) {
    orderPriorityRadio.verifyElementEnabled(option);
  }

  verifyIvRequiredEnabled(option) {
    ivRequiredRadio.verifyElementEnabled(option);
  }

  verifyOxygenRequiredEnabled(option) {
    oxygenRequiredRadio.verifyElementEnabled(option);
  }

  validateOrderType(option) {
    orderTypeSelect.verifySelectedValue(option);
  }
  //Sidebar section
  validateInterventionDate(value) {
    interventionDateTXT.verifyTextFieldValue(value);
  }

  validateInterventionTime(value) {
    interventionTimeTXT.verifyTextFieldValue(value);
  }
}
export default Therapies;
