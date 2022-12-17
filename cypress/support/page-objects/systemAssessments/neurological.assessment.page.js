import simsCy from '../../sim.cy';
import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';

const defaultFieldsNumber = 28;

//Level of Consciousness/Orientation
const orientaionCheckbox = new checkBox('#field-input-orientation-orientation');
const consciousnesslevelSearchbox = new searchDropdown('#consciousnesslevel');
const consciousnessLevelNotesText = new textArea('#field-input-consciousnessLevelNotes');

//Emotional State
const emotionalStateSearchbox = new searchDropdown('#emotionalState');
const emotionalStateNotesText = new textArea('#field-input-emotionalStateNotes');

//Hand Grip
const handGripBilateralAssessmentRadios = new checkBox('[name="handGripBilateralAssessment"]');
const handGripLeftStrengthRadios = new checkBox('[name="handGripLeftStrength"]');
const handGripRightStrengthRadios = new checkBox('[name="handGripRightStrength"]');
const handGripNotesText = new textArea('#field-input-handGripNotes');

//Foot Pumps
const footPumpsBilateralAssessmentRadios = new checkBox('[name="footPumpsBilateralAssessment"]');
const footPumpsLeftStrengthRadios = new checkBox('[name="footPumpsLeftStrength"]');
const footPumpsRightStrengthRadios = new checkBox('[name="footPumpsRightStrength"]');
const footPumpsNotes = new textArea('[id="field-input-footPumpsNotes"]');

//Central Nervous System Assessment (CNS)
const centralNervousNoProblemsCheckbox = new checkBox('#field-input-centralNervousNoProblems-centralNervousNoProblems');
const centralNervousProblemsSearchbox = new searchDropdown('#centralNervousProblems');
const centralNervousNotesText = new textArea('#field-input-centralNervousNotes');

//Extrapyramidal Side Effects (EPS)
const epsAkathisiaSearchbox = new searchDropdown('#epsAkathisia');
const epsAcuteDystoniaSearchbox = new searchDropdown('#epsAcuteDystonia');
const epsPseudoparkinsonismSeachbox = new searchDropdown('#epsPseudoparkinsonism');
const epsTardiveDyskinesiaSearchbox = new searchDropdown('#epsTardiveDyskinesia');
const epsAkathisiaOtherText = new textArea('#field-input-epsAkathisiaOther');
const epsAcuteDystoniaOtherText = new textArea('#field-input-epsAcuteDystoniaOther');
const epsPseudoparkinsonismOtherText = new textArea('#field-input-epsPseudoparkinsonismOther');
const epsTardiveDyskinesiaOtherText = new textArea('#field-input-epsTardiveDyskinesiaOther');

//Neuroleptic Malignant Syndrome (NMS)
const neurolepticMalignantSyndromeSearchbox = new searchDropdown('#neurolepticMalignantSyndrome');

class Neurological extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  checkOrientaiton(yes) {
    yes ? orientaionCheckbox.check() : orientaionCheckbox.uncheck();
  }

  selectConsciousnesslevel(options) {
    consciousnesslevelSearchbox.searchAndSelectMultiOption(options);
  }

  selectEmotionalState(options) {
    emotionalStateSearchbox.searchAndSelectMultiOption(options);
  }

  inputConsciousnessLevelNotes(note) {
    consciousnessLevelNotesText.inputText(note);
  }

  inputEmotionalStateNotes(note) {
    emotionalStateNotesText.inputText(note);
  }

  selectHandGripBilateralAssessment(option) {
    handGripBilateralAssessmentRadios.selectRadioByLabel(option);
  }

  selectHandGripLeftStrength(option) {
    handGripLeftStrengthRadios.selectRadioByLabel(option);
  }

  selectHandGripRightStrength(option) {
    handGripRightStrengthRadios.selectRadioByLabel(option);
  }

  inputHandGripNotes(note) {
    handGripNotesText.inputText(note);
  }

  selectFootPumpsBilateralAssessment(option) {
    footPumpsBilateralAssessmentRadios.selectRadioByLabel(option);
  }

  selectFootPumpsLeftStrength(option) {
    footPumpsLeftStrengthRadios.selectRadioByLabel(option);
  }

  selectFootPumpsRightStrength(option) {
    footPumpsRightStrengthRadios.selectRadioByLabel(option);
  }

  inputFootPumpsNotes(note) {
    footPumpsNotes.inputText(note);
  }

  checkCentralNervousNoProblems(yes) {
    yes ? centralNervousNoProblemsCheckbox.check() : centralNervousNoProblemsCheckbox.uncheck();
  }

  selectCentralNervousProblems(options) {
    centralNervousProblemsSearchbox.searchAndSelectMultiOption(options);
  }

  inputCentralNervousNotes(note) {
    centralNervousNotesText.inputText(note);
  }

  selectEpsAkathisia(options) {
    epsAkathisiaSearchbox.searchAndSelectMultiOption(options);
  }

  selectEpsAcuteDystonia(options) {
    epsAcuteDystoniaSearchbox.searchAndSelectMultiOption(options);
  }

  selectEpsPseudoparkinsonism(options) {
    epsPseudoparkinsonismSeachbox.searchAndSelectMultiOption(options);
  }

  selectEpsTardiveDyskinesia(options) {
    epsTardiveDyskinesiaSearchbox.searchAndSelectMultiOption(options);
  }

  inputAkathisiaOther(text) {
    epsAkathisiaOtherText.inputText(text);
  }

  inputAcuteDystoniaOther(text) {
    epsAcuteDystoniaOtherText.inputText(text);
  }

  inputPseudoparkinsonismOther(text) {
    epsPseudoparkinsonismOtherText.inputText(text);
  }

  inputTardiveDyskinesia(text) {
    epsTardiveDyskinesiaOtherText.inputText(text);
  }

  selectNeurolepticMalignantSyndrome(options) {
    neurolepticMalignantSyndromeSearchbox.searchAndSelectMultiOption(options);
  }

  verifyConsciousnesslevelEnabled(option) {
    consciousnesslevelSearchbox.verifyElementEnabled(option);
  }

  verifyCentralNervousProblemsEnabled(option) {
    centralNervousProblemsSearchbox.verifyElementEnabled(option);
  }

  verifyAkathisiaTooltip() {
    this.clickTooltipWrapper('Akathisia');
    cy.wait(250);
    this.verifyTooltip('Psychomotor restlessness');
  }

  verifyAcuteDystoniaTooltip() {
    this.clickTooltipWrapper('Acute Dystonia');
    cy.wait(250);
    this.verifyTooltip('Sustained contractions in the head and neck, possibly causing blockage of the trachea');
  }

  verifyPseudoparkinsonismTooltip() {
    this.clickTooltipWrapper('Pseudoparkinsonism');
    cy.wait(250);
    this.verifyTooltip('Stiffened muscles');
  }

  verifyTardiveDyskinesiaTooltip() {
    this.clickTooltipWrapper('Tardive Dyskinesia');
    cy.wait(250);
    this.verifyTooltip('Involuntary muscle contractions');
  }

  clickTooltipWrapper(text) {
    cy.get('span')
      .contains(text)
      .parent('div')
      .next()
      .click();
  }

  verifyTooltip(tooltip) {
    cy.get('.c-els-tooltip__window').should('have.text', tooltip);
  }
}

export default Neurological;
