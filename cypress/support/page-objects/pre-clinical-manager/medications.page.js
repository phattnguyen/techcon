import searchDropdown from '../../element-helpers/search.dropdown.el';
import select from '../../element-helpers/select.el';
import textArea from '../../element-helpers/text.area.el';
import PreClinicalManagerPage from './pre-clinical.save.page';

/**Locators */
const medicationSearchSelect = '#medication';
const classificationSearchSelect = '#classification';
const routeSelect = '#field-input-route';
const doseTextbox = '#field-input-dose';
const frequencyTextbox = '#field-input-frequency';
const dateOrderedTextbox = '#field-input-dateOrdered';
const commentsAndMedicationTextbox = '#field-input-commentsAndMedication';
const therapeuticEffectTextbox = '#field-input-therapeuticEffect';
const actionTextbox = '#field-input-action';
const contraindicationsTextbox = '#field-input-contraindications';
const effectsOrReactionsTextbox = '#field-input-effectsOrReactions';
const lifeThreateningConsiderationsTextbox = '#field-input-lifeThreateningConsiderations';
const recommendedDoseRangesTextbox = '#field-input-recommendedDoseRanges';
const nursingInterventionsTextbox = '#field-input-nursingInterventions';
const classificationOtherTextbox = '#field-input-classificationOther';
const routeOtherTextbox = '#field-input-routeOther';
const medicationOtherTextbox = '#field-input-medicationOther';
const sidebarAnimated = 'div[class="sidebar__container animated"]>* ';

/**Elements */
const medication = new searchDropdown(medicationSearchSelect);
const classification = new searchDropdown(classificationSearchSelect);
const route = new select(routeSelect);
const dose = new textArea(doseTextbox);
const frequency = new textArea(frequencyTextbox);
const dateOrdered = new textArea(dateOrderedTextbox);
const commentsAndMedication = new textArea(commentsAndMedicationTextbox);
const therapeuticEffect = new textArea(therapeuticEffectTextbox);
const action = new textArea(actionTextbox);
const contraindications = new textArea(contraindicationsTextbox);
const effectsOrReactions = new textArea(effectsOrReactionsTextbox);
const lifeThreateningConsiderations = new textArea(lifeThreateningConsiderationsTextbox);
const recommendedDoseRanges = new textArea(recommendedDoseRangesTextbox);
const nursingInterventions = new textArea(nursingInterventionsTextbox);
const medicationOther = new textArea(medicationOtherTextbox);
const classificationOther = new textArea(classificationOtherTextbox);
const nursingInterventirouteOther = new textArea(routeOtherTextbox);
const editClassification = new searchDropdown(sidebarAnimated.concat(classificationSearchSelect));
const editRoute = new select(sidebarAnimated.concat(routeSelect));

class Medications extends PreClinicalManagerPage {
  selectMedication(option) {
    medication.searchAndSelectOption(option);
  }

  selectClassification(option) {
    classification.searchAndSelectOption(option);
  }

  selectRoute(option) {
    route.selectByOption(option);
  }

  inputDose(text) {
    dose.inputText(text);
  }

  inputFrequency(text) {
    frequency.inputText(text);
  }

  inputDateOrdered(text) {
    dateOrdered.inputText(text);
  }

  inputCommentsAndMedication(text) {
    commentsAndMedication.inputText(text);
  }

  inputTherapeuticEffect(text) {
    therapeuticEffect.inputText(text);
  }

  inputAction(text) {
    action.inputText(text);
  }

  inputContraindications(text) {
    contraindications.inputText(text);
  }

  inputEffectsOrReactions(text) {
    effectsOrReactions.inputText(text);
  }

  inputLifeThreateningConsiderations(text) {
    lifeThreateningConsiderations.inputText(text);
  }

  inputRecommendedDoseRanges(text) {
    recommendedDoseRanges.inputText(text);
  }

  inputNursingInterventions(text) {
    nursingInterventions.inputText(text);
  }

  inputMedicationOther(text) {
    medicationOther.inputText(text);
  }

  inputClassificationOther(text) {
    classificationOther.inputText(text);
  }

  inputNursingInterventirouteOther(text) {
    nursingInterventirouteOther.inputText(text);
  }

  verifySelectedMedication(option) {
    medication.verifySelectedOption(option);
  }

  verifySelectedClassification(option) {
    classification.verifySelectedOption(option);
  }

  verifySelectedRoute(option) {
    route.verifySelectedValue(option);
  }

  editClassification(option) {
    editClassification.searchAndSelectOption(option);
  }

  editRoute(option) {
    editRoute.selectByOption(option);
  }
}

export default Medications;
