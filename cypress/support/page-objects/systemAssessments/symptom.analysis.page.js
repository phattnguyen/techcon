import systemAssessment from '../system.assessment.page';
import textArea from '../../element-helpers/text.area.el';

const defaultFieldsNumber = 10;

/*** Locators */
const chiefComplaint = '#field-input-chiefComplaint';
const location = '#field-input-location';
const timing = '#field-input-timing';
const quality = '#field-input-quality';
const context = '#field-input-context';
const severity = '#field-input-severity';
const modifyingAlleviatingFactors = '#field-input-modifyingAlleviatingFactors';
const associatedSignsAndSymptoms = '#field-input-associatedSignAndSymptom';
const interventionsAndResponse = '#field-input-interventionsAndResponse';
const patientPerception = '#field-input-patientPerception';
/**-------------------------------------------- */

const chiefComplaintTxt = new textArea(chiefComplaint);
const locationTxt = new textArea(location);
const timingTxt = new textArea(timing);
const qualityTxt = new textArea(quality);
const contextTxt = new textArea(context);
const severityTxt = new textArea(severity);
const modifyingAlleviatingFactorsTxt = new textArea(modifyingAlleviatingFactors);
const associatedSignsAndSymptomsTxt = new textArea(associatedSignsAndSymptoms);
const interventionsAndResponseTxt = new textArea(interventionsAndResponse);
const patientPerceptionTxt = new textArea(patientPerception);

class symptomAnalysis extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  enterChiefComplaint(info) {
    chiefComplaintTxt.inputText(info);
  }

  enterLocation(info) {
    locationTxt.inputText(info);
  }

  enterTiming(info) {
    timingTxt.inputText(info);
  }

  enterQuality(info) {
    qualityTxt.inputText(info);
  }

  enterContext(info) {
    contextTxt.inputText(info);
  }

  enterSeverity(info) {
    severityTxt.inputText(info);
  }

  enterModifyingAlleviatingFactors(info) {
    modifyingAlleviatingFactorsTxt.inputText(info);
  }

  enterAssociatedSignsAndSymptoms(info) {
    associatedSignsAndSymptomsTxt.inputText(info);
  }

  enterInterventionsAndResponse(info) {
    interventionsAndResponseTxt.inputText(info);
  }

  enterPatientPerception(info) {
    patientPerceptionTxt.inputText(info);
  }
}

export default symptomAnalysis;
