import simsCy from '../../sim.cy';
import systemAssessment from '../system.assessment.page';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';

const defaultFieldsNumber = 42;
/*------------------------------------------ Locators------------------------------------------------*/
//Skin Assessment
const colorTxt = '#integumentaryColor';
const skinTurgorRadios = '[name=integumentarySkinTurgor]';
const integumentaryTemperatureRadios = '[name=integumentaryTemperature]';
const integumentaryIntegrityRadios = '[name=integumentaryIntegrity]';
const integumentaryMoistureRadios = '[name=integumentaryMoisture]';
const skinNotesTxt = '#field-input-skinNotes';

//Hair Assessment
const distributionRadios = '[name=distribution]';
const characteristicsRadios = '[name=characteristics]';
const healthDryBrittleChkBox = '#field-input-healthMarkAllApply-dryBrittle';
const healthDyedChkBox = '#field-input-healthMarkAllApply-dyed';
const healthNitsChkBox = '#field-input-healthMarkAllApply-nits';
const healthHealthyChkBox = '#field-input-healthMarkAllApply-healthy';
const hairNotesTxt = '#field-input-hairNotes';

//Nail Assessment
const nailConfigurationRadios = '[name=nailConfiguration]';
const nailConditionRadios = '[name=nailCondition]';
const nailColorRadios = '[name=nailColor]';
const nailConditionOtherTxt = '#field-input-nailConditionOther';

const nailBaseTxt = '#nailBase';
const nailBaseOtherTxt = '#field-input-nailBaseOther';
const nailNotesTxt = '#field-input-nailNotes';
/**--------------------------------------------------------------------------- */

const colorSearchTextBox = new searchDropdown(colorTxt);
const skinTurgorRadio = new checkBox(skinTurgorRadios);
const integumentaryTemperatureRadio = new checkBox(integumentaryTemperatureRadios);
const integumentaryIntegrityRadio = new checkBox(integumentaryIntegrityRadios);
const integumentaryMoistureRadio = new checkBox(integumentaryMoistureRadios);
const skinNotesText = new textArea(skinNotesTxt);

const distributionRadio = new checkBox(distributionRadios);
const characteristicsRadio = new checkBox(characteristicsRadios);
const healthDryBrittleCheckBox = new checkBox(healthDryBrittleChkBox);
const healthDyedCheckBox = new checkBox(healthDyedChkBox);
const healthNitsCheckBox = new checkBox(healthNitsChkBox);
const healthHealthyCheckBox = new checkBox(healthHealthyChkBox);
const hairNotesText = new textArea(hairNotesTxt);

const nailConfigurationRadio = new checkBox(nailConfigurationRadios);
const nailConditionRadio = new checkBox(nailConditionRadios);
const nailColorRadio = new checkBox(nailColorRadios);
const nailConditionOtherText = new textArea(nailConditionOtherTxt);
const nailBaseSearchTextBox = new searchDropdown(nailBaseTxt);
const nailBaseOtherText = new textArea(nailBaseOtherTxt);
const nailNotes = new textArea(nailNotesTxt);

class Integumentary extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  selectSkinColor(option) {
    colorSearchTextBox.searchAndSelectOption(option);
  }

  selectSkinTurgor(option) {
    skinTurgorRadio.selectRadioByLabelWithoutRegex(option);
  }

  selectIntegumentaryTemperature(option) {
    integumentaryTemperatureRadio.selectRadioByLabelWithoutRegex(option);
  }

  selectIntegumentaryIntegrity(option) {
    integumentaryIntegrityRadio.selectRadioByLabelWithoutRegex(option);
  }

  selectIntegumentaryMoisture(option) {
    integumentaryMoistureRadio.selectRadioByLabelWithoutRegex(option);
  }

  inputSkinNotes(text) {
    skinNotesText.inputText(text);
  }

  selectHairDistribution(option) {
    distributionRadio.selectRadioByLabelWithoutRegex(option);
  }

  selectHairCharacteristics(option) {
    characteristicsRadio.selectRadioByLabelWithoutRegex(option);
  }

  checkHealthDryBrittle(yes) {
    yes ? healthDryBrittleCheckBox.check() : healthDryBrittleCheckBox.uncheck();
  }

  checkHairDyed(yes) {
    yes ? healthDyedCheckBox.check() : healthDyedCheckBox.uncheck();
  }

  checkHairNits(yes) {
    yes ? healthNitsCheckBox.check() : healthNitsCheckBox.uncheck();
  }

  checkHairHealthy(yes) {
    yes ? healthHealthyCheckBox.check() : healthHealthyCheckBox.uncheck();
  }

  inputHairNotes(text) {
    hairNotesText.inputText(text);
  }

  selectNailConfiguration(option) {
    nailConfigurationRadio.selectRadioByLabelWithoutRegex(option);
  }

  selectNailCondition(option) {
    nailConditionRadio.selectRadioByLabelWithoutRegex(option);
  }

  selectNailColor(option) {
    nailColorRadio.selectRadioByLabelWithoutRegex(option);
  }

  inputNailConditionOther(text) {
    nailConditionOtherText.inputText(text);
  }

  selectNailBase(option) {
    nailBaseSearchTextBox.searchAndSelectOption(option);
  }

  inputNailBaseOther(text) {
    nailBaseOtherText.inputText(text);
  }

  inputNailNotes(text) {
    nailNotes.inputText(text);
  }
}

export default Integumentary;
