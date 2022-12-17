import simsCy from '../../sim.cy';
import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';

const defaultFieldsNumber = 46;
/*------------------------------------------ Locators------------------------------------------------*/
const respiratoryPattern = '#respiratoryPattern';
const respiratoryEffort = '#respiratoryEffort';

//Lung Auscultation
const lungAuscultationLocation = '#field-input-lungAuscultationTitle';
const lungAuscultationSelection = '#lungAuscultationSelection';
const lungAnteriorImg = '#lungAnteriorImg';
const lungLateralLeftImg = '#lungAnteriorImg';
const lungLateralRightImg = '#lungLateralRightImg';
const lungPosteriorImg = '#lungPosteriorImg';
const wheezeDescriptionRadios = '[name=wheezeDescription]';
const lungNote = '#field-input-lungNote';

//Oxygenation
const oxyInUseChkBox = '#field-input-oxygenInUse-oxygenInUse';
const amountOxygenRadios = '[name=amountOxygen]';
const amountOxygenLMinTxt = '#field-input-amountOxygenLMin';
const amountOxygenPercentTxt = '#field-input-amountOxygenPercent';

const oxygenDeliverySystemSearchDropdown = '#oxygenDeliverySystem';
const oxygenationEvaluationRadios = '[name=oxygenationEvaluation]';
const nebulizerTreatmentChkBox = '#field-input-oxigenRespiratoryBreathingSupport-nebulizerTreatment';
const incentiveSpirometerChkBox = '#field-input-oxigenRespiratoryBreathingSupport-incentiveSpirometer';
const oxigenIncentiveSpirometerTxt = '#field-input-oxigenIncentiveSpirometer';

const periodicChkBox = '#field-input-oxygenationSuctioning-periodic';
const frequentSuctinoingChkBox = '#field-input-oxygenationSuctioning-frequentSuctinoing';
const oxygenationSuctioningAmountSelection = '#field-input-oxygenationSuctioningAmount';
const oxygenationSuctioningColorSelection = '#field-input-oxygenationSuctioningColor';
const oxygenationSuctioningConsistencySelection = '#field-input-oxygenationSuctioningConsistency';
const oxygenationSuctioningOdorSelection = '#field-input-oxygenationSuctioningOdor';
const oxygenationSuctioningAmountOtherTxt = '#field-input-oxygenationSuctioningAmountOther';
const oxygenationSuctioningColorOtherTxt = '#field-input-oxygenationSuctioningColorOther';
const oxygenationSuctioningConsistencyOtherTxt = '#field-input-oxygenationSuctioningConsistencyOther';
const oxygenationSuctioningOdorOtherTxt = '#field-input-oxygenationSuctioningOdorOther';
const oxygenationNoteTxt = '#field-input-oxygenationNote';

//Artificial Airway
const airwayInUseChkBox = '#field-input-artificialAirwayInUse-aiwayInUse';
const artificialTypeAirwaySelection = '#field-input-artificialTypeAirway';
const artificialTypeAirwaySizeTxt = '#field-input-artificialTypeAirwaySize';
const artificialTypeAirwayPositionTxt = '#field-input-artificialTypeAirwayPosition';
const artificialTypeAirwayCuffedUncuffedRadios = '[name=artificialTypeAirwayCuffedUncuffed]';
const artificialTypeAirwayOtherTxt = '#field-input-artificialTypeAirwayOther';

//Chest Tube
const chestTubeRadios = '[name=chestTube]';

//Gag Reflex
const gagReflexRadios = '[name=gagReflex]';
const protectivePositioningChkBox = '#field-input-gagReflexNotPresentOptions-protectivePositioning';
const airwayInPlaceChkBox = '#field-input-gagReflexNotPresentOptions-airwayInPlace';
const suctionAtBedsideChkBox = '#field-input-gagReflexNotPresentOptions-suctionAtBedside';
const gagReflexNotPresentOtherChkBox = '#field-input-gagReflexNotPresentOptions-other';
const gagReflexNotPresentOtherTxt = '#field-input-gagReflexNotPresentOther';

//Cough
const coughTypeRadios = '[name=coughType]';
const coughStrengthRadios = '[name=coughStrength]';
const coughNoteTxt = '#field-input-coughNote';

//Productive Cough Secretions Assessment
const productiveCoughSecretionsAssessmentAmountSelection = '#field-input-productiveCoughSecretionsAssessmentAmount';
const productiveCoughSecretionsAssessmentColorSelection = '#field-input-productiveCoughSecretionsAssessmentColor';
const productiveCoughSecretionsAssessmentConsistencySelection = '#field-input-productiveCoughSecretionsAssessmentConsistency';
const productiveCoughSecretionsAssessmentSecretionOdorSelection = '#field-input-productiveCoughSecretionsAssessmentSecretionOdor';

const productiveCoughSecretionsAssessmentAmountOtherTxt = '#field-input-productiveCoughSecretionsAssessmentAmountOther';
const productiveCoughSecretionsAssessmentColorOtherTxt = '#field-input-productiveCoughSecretionsAssessmentColorOther';
const productiveCoughSecretionsAssessmentConsistencyOtherTxt = '#field-input-productiveCoughSecretionsAssessmentConsistencyOther';
const productiveCoughSecretionsAssessmentSecretionOdorOtherTxt = '#field-input-productiveCoughSecretionsAssessmentSecretionOdorOther';

/**--------------------------------------------------------------------------------*/
//Lung Auscultation
const respiratoryPatternSelectBox = new searchDropdown(respiratoryPattern);
const respiratoryEffortSelectBox = new searchDropdown(respiratoryEffort);
const lungAuscultationSelectionSelectBox = new searchDropdown(lungAuscultationSelection);
const locationSelectBox = new select(lungAuscultationLocation);
const wheezeDescriptionRadio = new checkBox(wheezeDescriptionRadios);
const lungNoteText = new textArea(lungNote);

//Oxygenation
const oxygenInUse = new checkBox(oxyInUseChkBox);
const amountOxygenRadio = new checkBox(amountOxygenRadios);
const amountOxygenLMin = new textArea(amountOxygenLMinTxt);
const amountOxygenPercent = new textArea(amountOxygenPercentTxt);
const oxygenDeliverySystem = new searchDropdown(oxygenDeliverySystemSearchDropdown);
const oxygenationEvaluationRadio = new checkBox(oxygenationEvaluationRadios);
const nebulizerTreatment = new checkBox(nebulizerTreatmentChkBox);
const incentiveSpirometer = new checkBox(incentiveSpirometerChkBox);
const oxigenIncentiveSpirometerTextbox = new textArea(oxigenIncentiveSpirometerTxt);
const periodic = new checkBox(periodicChkBox);
const frequentSuctinoing = new checkBox(frequentSuctinoingChkBox);
const oxygenationSuctioningAmountSelect = new select(oxygenationSuctioningAmountSelection);
const oxygenationSuctioningColorSelect = new select(oxygenationSuctioningColorSelection);
const oxygenationSuctioningConsistencySelect = new select(oxygenationSuctioningConsistencySelection);
const oxygenationSuctioningOdorSelect = new select(oxygenationSuctioningOdorSelection);
const oxygenationSuctioningAmountOtherText = new textArea(oxygenationSuctioningAmountOtherTxt);
const oxygenationSuctioningColorOtherText = new textArea(oxygenationSuctioningColorOtherTxt);
const oxygenationSuctioningConsistencyOtherText = new textArea(oxygenationSuctioningConsistencyOtherTxt);
const oxygenationSuctioningOdorOtherText = new textArea(oxygenationSuctioningOdorOtherTxt);
const oxygenationNoteText = new textArea(oxygenationNoteTxt);

//Artificial Airway
const airwayInUse = new checkBox(airwayInUseChkBox);
const artificialTypeAirwaySelect = new select(artificialTypeAirwaySelection);
const artificialTypeAirwaySizeText = new textArea(artificialTypeAirwaySizeTxt);
const artificialTypeAirwayPositionText = new textArea(artificialTypeAirwayPositionTxt);
const artificialTypeAirwayCuffedUncuffedRadio = new checkBox(artificialTypeAirwayCuffedUncuffedRadios);
const artificialTypeAirwayOtherText = new textArea(artificialTypeAirwayOtherTxt);

//Chest Tube
const chestTubeRadio = new checkBox(chestTubeRadios);

//Gag Reflex
const gagReflexRadio = new checkBox(gagReflexRadios);
const protectivePositioningCheckBox = new checkBox(protectivePositioningChkBox);
const airwayInPlaceCheckBox = new checkBox(airwayInPlaceChkBox);
const suctionAtBedsideCheckBox = new checkBox(suctionAtBedsideChkBox);
const gagReflexNotPresentOtherCheckBox = new checkBox(gagReflexNotPresentOtherChkBox);
const gagReflexNotPresentOtherText = new textArea(gagReflexNotPresentOtherTxt);

//Cough
const coughTypeRadio = new checkBox(coughTypeRadios);
const coughStrengthRadio = new checkBox(coughStrengthRadios);
const coughNoteText = new textArea(coughNoteTxt);

//Productive Cough Secretions Assessment
const productiveCoughSecretionsAssessmentAmountSelect = new select(productiveCoughSecretionsAssessmentAmountSelection);
const productiveCoughSecretionsAssessmentColorSelect = new select(productiveCoughSecretionsAssessmentColorSelection);
const productiveCoughSecretionsAssessmentConsistencySelect = new select(productiveCoughSecretionsAssessmentConsistencySelection);
const productiveCoughSecretionsAssessmentSecretionOdorSelect = new select(productiveCoughSecretionsAssessmentSecretionOdorSelection);
const productiveCoughSecretionsAssessmentAmountOtherText = new textArea(productiveCoughSecretionsAssessmentAmountOtherTxt);
const productiveCoughSecretionsAssessmentColorOtherText = new textArea(productiveCoughSecretionsAssessmentColorOtherTxt);
const productiveCoughSecretionsAssessmentConsistencyOtherText = new textArea(productiveCoughSecretionsAssessmentConsistencyOtherTxt);
const productiveCoughSecretionsAssessmentSecretionOdorOtherText = new textArea(productiveCoughSecretionsAssessmentSecretionOdorOtherTxt);

class Respiratory extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectRespiratoryPattern(options) {
    respiratoryPatternSelectBox.searchAndSelectMultiOption(options);
  }

  selectRespiratoryEffort(options) {
    respiratoryEffortSelectBox.searchAndSelectMultiOption(options);
  }

  selectLungAuscultationLocation(option) {
    locationSelectBox.selectByOption(option);
  }

  selectLungAuscultation(option) {
    lungAuscultationSelectionSelectBox.searchAndSelectOption(option);
  }

  inputLungNotes(text) {
    lungNoteText.inputText(text);
  }

  selectWheezeDescription(option) {
    wheezeDescriptionRadio.selectRadioByLabel(option);
  }

  checkOxygenInUse(yes) {
    yes ? oxygenInUse.check() : oxygenInUse.uncheck();
  }

  selectOxygenAmountRadio(option) {
    amountOxygenRadio.selectRadioByLabel(option);
  }

  inputAmountOxygenLMin(number) {
    amountOxygenLMin.inputText(number);
  }

  inputAmountOxygenPercent(number) {
    amountOxygenPercent.inputText(number);
  }

  selectOxygenDeliverySystem(option) {
    oxygenDeliverySystem.searchAndSelectOption(option);
  }

  selectOxygenationEvaluationRadio(option) {
    oxygenationEvaluationRadio.selectRadioByLabel(option);
  }

  checkNebulizerTreatment(yes) {
    yes ? nebulizerTreatment.check() : nebulizerTreatment.uncheck();
  }

  checkIncentiveSpirometer(yes) {
    yes ? incentiveSpirometer.check() : incentiveSpirometer.uncheck();
  }

  inputOxigenIncentiveSpirometer(text) {
    oxigenIncentiveSpirometerTextbox.inputText(text);
  }

  checkPeriodic(yes) {
    yes ? periodic.check() : periodic.uncheck();
  }

  checkFrequentSuctinoing(yes) {
    yes ? frequentSuctinoing.check() : frequentSuctinoing.uncheck();
  }

  selectOxygenationSuctioningAmount(option) {
    oxygenationSuctioningAmountSelect.selectByOption(option);
  }

  selectOxygenationSuctioningColor(option) {
    oxygenationSuctioningColorSelect.selectByOption(option);
  }

  selectOxygenationSuctioningConsistency(option) {
    oxygenationSuctioningConsistencySelect.selectByOption(option);
  }

  selectOxygenationSuctioningOdor(option) {
    oxygenationSuctioningOdorSelect.selectByOption(option);
  }

  inputOxygenationSuctioningAmountOther(text) {
    oxygenationSuctioningAmountOtherText.inputText(text);
  }

  inputOxygenationSuctioningColorOther(text) {
    oxygenationSuctioningColorOtherText.inputText(text);
  }

  inputOxygenationSuctioningConsistencyOther(text) {
    oxygenationSuctioningConsistencyOtherText.inputText(text);
  }

  inputOxygenationSuctioningOdorOther(text) {
    oxygenationSuctioningOdorOtherText.inputText(text);
  }

  inputOxygenationNote(text) {
    oxygenationNoteText.inputText(text);
  }

  checkAirwayInUse(yes) {
    yes ? airwayInUse.check() : airwayInUse.uncheck();
  }

  selectArtificialTypeAirway(option) {
    artificialTypeAirwaySelect.selectByOption(option);
  }

  inputArtificialTypeAirwaySize(text) {
    artificialTypeAirwaySizeText.inputText(text);
  }

  inputArtificialTypeAirwayPosition(text) {
    artificialTypeAirwayPositionText.inputText(text);
  }

  selectArtificialTypeAirwayCuffedUncuffed(option) {
    artificialTypeAirwayCuffedUncuffedRadio.selectRadioByLabel(option);
  }

  inputArtificialTypeAirwayOther(text) {
    artificialTypeAirwayOtherText.inputText(text);
  }

  selectChestTube(option) {
    chestTubeRadio.selectRadioByLabel(option);
  }

  selectGagReflex(option) {
    gagReflexRadio.selectRadioByLabel(option);
  }

  checkProtectivePositioning(yes) {
    yes ? protectivePositioningCheckBox.check() : protectivePositioningCheckBox.uncheck();
  }

  checkAirwayInPlace(yes) {
    yes ? airwayInPlaceCheckBox.check() : airwayInPlaceCheckBox.uncheck();
  }

  checkSuctionAtBedside(yes) {
    yes ? suctionAtBedsideCheckBox.check() : suctionAtBedsideCheckBox.uncheck();
  }

  checkGagReflexNotPresentOther(yes) {
    yes ? gagReflexNotPresentOtherCheckBox.check() : gagReflexNotPresentOtherCheckBox.uncheck();
  }

  inputGagReflexNotPresentOther(text) {
    gagReflexNotPresentOtherText.inputText(text);
  }

  selectCoughType(option) {
    coughTypeRadio.selectRadioByLabel(option);
  }

  selectCoughStrength(option) {
    coughStrengthRadio.selectRadioByLabel(option);
  }

  inputCoughNote(text) {
    coughNoteText.inputText(text);
  }

  selectProductiveCoughSecretionsAssessmentAmount(option) {
    productiveCoughSecretionsAssessmentAmountSelect.selectByOption(option);
  }

  selectProductiveCoughSecretionsAssessmentColor(option) {
    productiveCoughSecretionsAssessmentColorSelect.selectByOption(option);
  }

  selectProductiveCoughSecretionsAssessmentConsistency(option) {
    productiveCoughSecretionsAssessmentConsistencySelect.selectByOption(option);
  }

  selectProductiveCoughSecretionsAssessmentSecretionOdor(option) {
    productiveCoughSecretionsAssessmentSecretionOdorSelect.selectByOption(option);
  }

  inputProductiveCoughSecretionsAssessmentAmountOther(text) {
    productiveCoughSecretionsAssessmentAmountOtherText.inputText(text);
  }

  inputProductiveCoughSecretionsAssessmentColorOther(text) {
    productiveCoughSecretionsAssessmentColorOtherText.inputText(text);
  }

  inputProductiveCoughSecretionsAssessmentConsistencyOther(text) {
    productiveCoughSecretionsAssessmentConsistencyOtherText.inputText(text);
  }

  inputProductiveCoughSecretionsAssessmentSecretionOdorOther(text) {
    productiveCoughSecretionsAssessmentSecretionOdorOtherText.inputText(text);
  }

  verifyLungAuscultationSectionLabels() {
    simsCy.verifyTextPresents('Lung Auscultation');
    simsCy.verifyTextPresents('Directions');
    simsCy.verifyTextPresents('Fill out data on each Lung Auscultation location');
  }

  verifyArtificialTypeAirwayCuffedUncuffedRadioIsHidden(yes) {
    yes ? artificialTypeAirwayCuffedUncuffedRadio.verifyElementExist(false) : artificialTypeAirwayCuffedUncuffedRadio.verifyElementExist(true);
  }

  verifyProductiveCoughSecretionsAssessmentDisabled(yes) {
    if (yes) {
      productiveCoughSecretionsAssessmentAmountSelect.verifyElementEnabled(false);
      productiveCoughSecretionsAssessmentColorSelect.verifyElementEnabled(false);
      productiveCoughSecretionsAssessmentConsistencySelect.verifyElementEnabled(false);
      productiveCoughSecretionsAssessmentSecretionOdorSelect.verifyElementEnabled(false);
    } else {
      productiveCoughSecretionsAssessmentAmountSelect.verifyElementEnabled(true);
      productiveCoughSecretionsAssessmentColorSelect.verifyElementEnabled(true);
      productiveCoughSecretionsAssessmentConsistencySelect.verifyElementEnabled(true);
      productiveCoughSecretionsAssessmentSecretionOdorSelect.verifyElementEnabled(true);
    }
  }

  verifyAmountOxygenRadioEnable(yes) {
    yes ? amountOxygenRadio.verifyElementEnabled(true) : amountOxygenRadio.verifyElementEnabled(false);
  }

  verifyWheezeDescriptionRadioEnable(yes) {
    yes ? wheezeDescriptionRadio.verifyElementEnabled(true) : wheezeDescriptionRadio.verifyElementEnabled(false);
  }

  verifyCoughStrengthRadioEnable(yes) {
    yes ? coughStrengthRadio.verifyElementEnabled(true) : wheezeDescriptionRadio.verifyElementEnabled(false);
  }

  verifyCoughNotesEnable(yes) {
    yes ? coughNoteText.verifyElementEnabled(true) : coughNoteText.verifyElementEnabled(false);
  }

  verifyLungAuscultationLocationImageDisplayedCorrectly(location) {
    if (location.includes('Anterior')) {
      this.verifyImageSrcByOption(lungAnteriorImg, location);
    } else if (location === 'Left Lateral') {
      this.verifyImageSrcByOption(lungLateralLeftImg, location);
    } else if (location === 'Right Lateral') {
      this.verifyImageSrcByOption(lungLateralRightImg, location);
    } else if (location.includes('Posterior')) {
      this.verifyImageSrcByOption(lungPosteriorImg, location);
    }
  }
}

export default Respiratory;
