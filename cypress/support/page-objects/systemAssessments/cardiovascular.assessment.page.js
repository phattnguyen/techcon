import simsCy from '../../sim.cy';
import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const defaultFieldsNumber = 52;

//Pulse section
const apicalRadio = '[name="pulsesApical"]';
const pulsesMurmurNotedRadio = '[name="pulsesMurmurNoted"]';
const selectPulseLocation = '#field-input-pulsesLocation';
const imgPulseLocation = '#pulsesLocationImg';
const murmurDescriptionTxtbox = '#pulsesMurmurDescription';
const murmurRadioOption = 'input[name=pulsesMurmurDescription][type=radio]';

//Carotid / Peripheral Pulses section
const locationLevelRadio = '[name="pulsesLocationLevel"]';
const checkBoxDopplerUsed = '#field-input-pulsesLocationLevelDoppler-dopplerUsed';
const pulsesLocationPeripheralPulseRadio = '[name="pulsesLocationPeripheralPulse"]';
const pulsesLocationCarotidMurmurNotedRadio = '[name="pulsesLocationCarotidMurmurNoted"]';

const addLocationBtn = 'Add Location';
const clearLocationBtn = 'Clear';

//Ankle-brachial Index Test section
const rightArmSystolicBPTxtbox = '#field-input-ankleBrachialTestIndex-001';
const leftArmSystolicBPTxtbox = '#field-input-ankleBrachialTestIndex-002';
const rightAnklePosteriorTibialTxtbox = '#field-input-ankleBrachialTestIndex-003';

const rightAnkleDorsalisPedisTxtbox = '#field-input-ankleBrachialTestIndex-004';
const leftAnklePosteriorTibialTxtbox = '#field-input-ankleBrachialTestIndex-005';
const leftAnkleDorsalisPedisTxtbox = '#field-input-ankleBrachialTestIndex-006';

const indexScoreTxtbox = '#field-input-ankleBrachialTestIndex-007';

//Perfusion / Edema section
const peripheralVascularTxtbox = '#peripheralVascularMarkAll';
const peripheralVascularOtherTxtbox = '#field-input-peripheralVascularOther';

const capillaryRefillLeftHand_lessThan3 = 'capillaryRefillLeftHand-lessThan3';
const capillaryRefillLeftHand_greaterThan3 = 'capillaryRefillLeftHand-greaterThan3';
const capillaryRefillRightHand_lessThan3 = 'capillaryRefillRightHand-lessThan3';
const capillaryRefillRightHand_greaterThan3 = 'capillaryRefillRightHand-greaterThan3';

const mucousMembranesColor_pink = 'mucousMembranesColor-pink';
const mucousMembranesColor_pale = 'mucousMembranesColor-pale';
const mucousMembranesColor_cyanotic = 'mucousMembranesColor-cyanotic';

const capillaryRefillLeftFoot_lessThan3 = 'capillaryRefillLeftFoot-lessThan3';
const capillaryRefillLeftFoot_greaterThan3 = 'capillaryRefillLeftFoot-greaterThan3';
const capillaryRefillRightFoot_lessThan3 = 'capillaryRefillRightFoot-lessThan3';
const capillaryRefillRightFoot_greaterThan3 = 'capillaryRefillRightFoot-greaterThan3';

const mucousMembranesMoisture_moist = 'mucousMembranesMoisture-moist';
const mucousMembranesMoisture_dry = 'mucousMembranesMoisture-dry';

const radioSlightPitting2mmUpper = '#field-input-edemaUpperExtremities-slightPitting2mm';
const radioSeeperPitting4mmUpper = '#field-input-edemaUpperExtremities-seeperPitting4mm';
const radioDeepPitting6mmUpper = '#field-input-edemaUpperExtremities-deepPitting6mm';
const radioVeryDeepPitting8mmUpper = '#field-input-edemaUpperExtremities-veryDeepPitting8mm';

const radioSlightPitting2mmLower = '#field-input-edemaUpperExtremities-slightPitting2mm';
const radioSeeperPitting4mmLower = '#field-input-edemaUpperExtremities-seeperPitting4mm';
const radioDeepPitting6mmLower = '#field-input-edemaUpperExtremities-deepPitting6mm';
const radioVeryDeepPitting8mmLower = '#field-input-edemaUpperExtremities-veryDeepPitting8mm';

const noEdemaNotedChkbox = '#field-input-noEdemaNoted-noEdemaNoted';
const generalizedNonpittingEdemaChkbox = '#field-input-generalizedNonpittingEdema-generalizedNonpittingEdema';

const edemaNotes = '#field-input-edemaNotes';
const capillaryRefillNotes = '#field-input-capillaryRefillNotes';

//Cardiac Assessment section
const noCardiacNotedChkbox = '#field-input-noCardiacProblemsNoted-noCardiacProblemsNoted';
const cardiacAssessmentTxtbox = '#cardiacAssessmentMarkAll';
const cardiacRhythmTxtbox = '#cardiacRhythmMarkAll';

const electrocardiogramConfirmsIrregularitiesChkbox = '#field-input-cardiacAssessmentElectrocardiogram-electrocardiogram';
const continuousTelemetryRadio = '[name="continuousTelemetry"]';
const radioTelemetryAlarmsTested_yes = 'telemetryAlarmsTested-yes';
const radioTelemetryAlarmsTested_no = 'telemetryAlarmsTested-no';

const telemetryUpperLimitTxtbox = '#field-input-telemetryUpperLimit';
const telemetryLowerLimitTxtbox = '#field-input-telemetryLowerLimit';

const cardiacAssessmentNotes = '#field-input-cardiacAssessmentNotes';
const telemetryNotes = '#field-input-telemetryNotes';

//Cardiac Monitor section
const cardiacMonitorChkbox = '#field-input-cardiacMonitor-cardiacMonitor';
const radioCardiacMonitorAlarmsTested_yes = 'cardiacMonitorAlarmsTested-yes';
const radioCardiacMonitorAlarmsTested_no = 'cardiacMonitorAlarmsTested-no';

const upperLimitTxtbox = '#field-input-cardiacMonitorUpperLimit';
const lowerLimitTxtbox = '#field-input-cardiacMonitorLowerLimit';
/**---------------------------------------------------------------- */

const apicalRadios = new checkBox(apicalRadio);
const pulsesMurmurNotedRadios = new checkBox(pulsesMurmurNotedRadio);
const murmurRadios = new checkBox(murmurRadioOption);
const locationLevelRadios = new checkBox(locationLevelRadio);
const dropplerUsedCheck = new checkBox(checkBoxDopplerUsed);
const pulsesLocationPeripheralPulseRadios = new checkBox(pulsesLocationPeripheralPulseRadio);
const pulsesLocationCarotidMurmurNotedRadios = new checkBox(pulsesLocationCarotidMurmurNotedRadio);
const noEdemaNotedChekbox = new checkBox(noEdemaNotedChkbox);
const generalizedNonpittingEdemaChekbox = new checkBox(generalizedNonpittingEdemaChkbox);
const noCardiacNotedChekbox = new checkBox(noCardiacNotedChkbox);
const continuousTelemetryRadios = new checkBox(continuousTelemetryRadio);
const electrocardiogramConfirmsIrregularitiesChekbox = new checkBox(electrocardiogramConfirmsIrregularitiesChkbox);
const cardiacMonitorChekbox = new checkBox(cardiacMonitorChkbox);

const murmurDescriptionTxt = new searchDropdown(murmurDescriptionTxtbox);
const rightArmSystolicBPTxt = new textArea(rightArmSystolicBPTxtbox);
const leftArmSystolicBPTxt = new textArea(leftArmSystolicBPTxtbox);
const rightAnklePosteriorTibialTxt = new textArea(rightAnklePosteriorTibialTxtbox);
const rightAnkleDorsalisPedisTxt = new textArea(rightAnkleDorsalisPedisTxtbox);
const leftAnklePosteriorTibialTxt = new textArea(leftAnklePosteriorTibialTxtbox);
const leftAnkleDorsalisPedisTxt = new textArea(leftAnkleDorsalisPedisTxtbox);
const indexScoreTxt = new textArea(indexScoreTxtbox);
const peripheralVascularOtherTxt = new textArea(peripheralVascularOtherTxtbox);
const telemetryUpperLimitTxt = new textArea(telemetryUpperLimitTxtbox);
const telemetryLowerLimitTxt = new textArea(telemetryLowerLimitTxtbox);
const upperLimitTxt = new textArea(upperLimitTxtbox);
const lowerLimitTxt = new textArea(lowerLimitTxtbox);
const edemaNotesTxt = new textArea(edemaNotes);
const capillaryRefillNotesTxt = new textArea(capillaryRefillNotes);
const cardiacAssessmentNotesTxt = new textArea(cardiacAssessmentNotes);
const telemetryNotesTxt = new textArea(telemetryNotes);

const peripheralVascularSearchBox = new searchDropdownSelect(peripheralVascularTxtbox);
const cardiacAssessmentSearchBox = new searchDropdownSelect(cardiacAssessmentTxtbox);
const cardiacRhythmSearchBox = new searchDropdownSelect(cardiacRhythmTxtbox);

class cardiovascular extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  verifyRadioBtnByValueExist(val) {
    this.getWebElement(`[type=radio][value=${val}]`).should('exist');
  }

  //Pulse location
  apicalRegular(option) {
    apicalRadios.selectRadioByLabelWithoutRegex(option);
  }

  murmurNoted(option) {
    pulsesMurmurNotedRadios.selectRadioByLabelWithoutRegex(option);
  }

  selectMurmurDescription(option) {
    murmurDescriptionTxt.searchAndSelectOption(option);
  }

  //Carotid / Peripheral Pulses section
  selectLocation(option) {
    this.getWebElement(selectPulseLocation).select(option);
  }

  selectLocationLevel(option) {
    locationLevelRadios.selectRadioByLabelWithoutRegex(option);
  }

  dopplerUsedCheck(yes) {
    yes ? dropplerUsedCheck.check() : dropplerUsedCheck.uncheck();
  }

  pulsesLocationPeripheralPulseRegular(option) {
    pulsesLocationPeripheralPulseRadios.selectRadioByLabelWithoutRegex(option);
  }

  pulsesLocationPeripheralPulseMurmur(option) {
    pulsesLocationCarotidMurmurNotedRadios.selectRadioByLabelWithoutRegex(option);
  }

  //Ankle-brachial Index Test
  rightArmSystolicBP(value) {
    rightArmSystolicBPTxt.inputText(value);
  }

  leftArmSystolicBP(value) {
    leftArmSystolicBPTxt.inputText(value);
  }

  rightAnklePosteriorTibial(value) {
    rightAnklePosteriorTibialTxt.inputText(value);
  }

  rightAnkleDorsalisPedis(value) {
    rightAnkleDorsalisPedisTxt.inputText(value);
  }

  leftAnklePosteriorTibial(value) {
    leftAnklePosteriorTibialTxt.inputText(value);
  }

  leftAnkleDorsalisPedis(value) {
    leftAnkleDorsalisPedisTxt.inputText(value);
  }

  indexScore(value) {
    indexScoreTxt.inputText(value);
  }

  //Perfusion / Edema section
  selectPeripheralVascular(options) {
    peripheralVascularSearchBox.searchAndSelectMultiOption(options);
  }

  peripheralVascularOther(value) {
    peripheralVascularOtherTxt.inputText(value);
  }

  selectNoEdemaNoted(yes) {
    yes ? noEdemaNotedChekbox.check() : noEdemaNotedChekbox.uncheck();
  }

  selectGeneralizedNonpittingEdema(yes) {
    yes ? generalizedNonpittingEdemaChekbox.check() : generalizedNonpittingEdemaChekbox.uncheck();
  }

  //Cardiac Assessment
  noCardiacNoted(yes) {
    yes ? noCardiacNotedChekbox.check() : noCardiacNotedChekbox.uncheck();
  }

  continuousTelemetry(option) {
    continuousTelemetryRadios.selectRadioByLabelWithoutRegex(option);
  }

  electrocardiogramConfirmsIrregularities(yes) {
    yes ? electrocardiogramConfirmsIrregularitiesChekbox.check() : electrocardiogramConfirmsIrregularitiesChekbox.uncheck();
  }

  selectCardiacAssessment(options) {
    cardiacAssessmentSearchBox.searchAndSelectMultiOption(options);
  }

  selectCardiacRhythm(options) {
    cardiacRhythmSearchBox.searchAndSelectMultiOption(options);
  }

  verifyCardiacAssessmentFieldEnabled(yes) {
    cardiacAssessmentSearchBox.isFieldEnabled(yes);
  }

  telemetryUpperLimit(value) {
    telemetryUpperLimitTxt.inputText(value);
  }

  telemetryLowerLimit(value) {
    telemetryLowerLimitTxt.inputText(value);
  }

  //Cardiac monitor
  cardiacMonotoringCheck(yes) {
    yes ? cardiacMonitorChekbox.check() : cardiacMonitorChekbox.uncheck();
  }

  cardiacMonotorUpperLimit(value) {
    upperLimitTxt.inputText(value);
  }

  cardiacMonotorLowerLimit(value) {
    lowerLimitTxt.inputText(value);
  }

  verifyRadioButtonsDisplayed() {
    apicalRadios.verifyElementExist(true);
    pulsesMurmurNotedRadios.verifyElementExist(true);
    locationLevelRadios.verifyElementExist(true);
    continuousTelemetryRadios.verifyElementExist(true);
    this.verifyRadioBtnByValueExist(capillaryRefillLeftHand_lessThan3);
    this.verifyRadioBtnByValueExist(capillaryRefillLeftHand_greaterThan3);
    this.verifyRadioBtnByValueExist(capillaryRefillRightHand_lessThan3);
    this.verifyRadioBtnByValueExist(capillaryRefillRightHand_greaterThan3);
    this.verifyRadioBtnByValueExist(mucousMembranesColor_pink);
    this.verifyRadioBtnByValueExist(mucousMembranesColor_pale);
    this.verifyRadioBtnByValueExist(mucousMembranesColor_cyanotic);
    this.verifyRadioBtnByValueExist(capillaryRefillLeftFoot_lessThan3);
    this.verifyRadioBtnByValueExist(capillaryRefillLeftFoot_greaterThan3);
    this.verifyRadioBtnByValueExist(capillaryRefillRightFoot_lessThan3);
    this.verifyRadioBtnByValueExist(capillaryRefillRightFoot_greaterThan3);
    this.verifyRadioBtnByValueExist(mucousMembranesMoisture_moist);
    this.verifyRadioBtnByValueExist(mucousMembranesMoisture_dry);
    this.verifyRadioBtnByValueExist(radioTelemetryAlarmsTested_yes);
    this.verifyRadioBtnByValueExist(radioTelemetryAlarmsTested_no);
    this.verifyRadioBtnByValueExist(radioCardiacMonitorAlarmsTested_yes);
    this.verifyRadioBtnByValueExist(radioCardiacMonitorAlarmsTested_no);
    this.getWebElement(radioSlightPitting2mmUpper);
    this.getWebElement(radioSeeperPitting4mmUpper);
    this.getWebElement(radioDeepPitting6mmUpper);
    this.getWebElement(radioVeryDeepPitting8mmUpper);
    this.getWebElement(radioSlightPitting2mmLower);
    this.getWebElement(radioSeeperPitting4mmLower);
    this.getWebElement(radioDeepPitting6mmLower);
    this.getWebElement(radioVeryDeepPitting8mmLower);
  }

  verifyAllNotesDisplayed() {
    edemaNotesTxt.verifyElementExist(true);
    capillaryRefillNotesTxt.verifyElementExist(true);
    cardiacAssessmentNotesTxt.verifyElementExist(true);
    telemetryNotesTxt.verifyElementExist(true);
  }

  verifyPulseLocationImageDisplayedCorrectly(location) {
    this.verifyImageSrcByOption(imgPulseLocation, location);
  }

  verifyDopplerUsedIsChecked(yes) {
    dropplerUsedCheck.verifyElementExist(yes);
  }
}

export default cardiovascular;
