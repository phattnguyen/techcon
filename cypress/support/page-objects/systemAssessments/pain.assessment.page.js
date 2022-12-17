import systemAssessment from '../system.assessment.page';
import textArea from '../../element-helpers/text.area.el';
import button from '../../element-helpers/button.el';
import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';

/**Locators */
//have pain
const havePain = '[name=havePain]';

//Frequency of Pain
const frequencyOfPain = '[name=frequencyOfPain]';

//Location of pain
const locationOfPainTxt = '#field-input-locationOfPain';
const pca = '#field-input-pcaPumpInUse-pcaPumpIsInUse';

//Intensity of pain
const intensityOfPain = 'input[name=intensityOfPain]';

//Wong-Baker Faces Pain Rating Scale
const faceImages = 'div[class="o-els-flex-layout__item"]>img';
const painRatingRadioBtn = 'input[name="wongBakerScale"]';

//Behavioral Assessment of Pain Intensity section
const nonverbal = '#nonverbalPainCues';
const qualityOfPain = '#qualityOfPain';
const qualityOfPainInfo = '#field-input-qualityOfPainInfo';
const relievingFactor = '#relievingFactors';
const relievingFactorInfo = '#field-input-relievingFactorsInfo';
const physioPainCues = '//input[contains(@id,"field-input-physioPainCues")]';

//Aggravating Factors
const aggravatingFactor = '#aggravatingFactors';
const aggravatingFactorInfo = '#field-input-aggravatingFactorsInfo';
/**------------------------------------------------------ */

const havePainRadio = new checkBox(havePain);
const frequencyOfPainRadio = new checkBox(frequencyOfPain);
const intensityOfPainRadio = new checkBox(intensityOfPain);
const painRatingRadio = new checkBox(painRatingRadioBtn);

const nonverbalSearchBox = new searchDropdown(nonverbal);
const qualityOfPainSearchBox = new searchDropdown(qualityOfPain);
const qualityOfPainInformationTxt = new textArea(qualityOfPainInfo);
const physioPainCuesCheckBox = new checkBox(physioPainCues);

const relievingFactorSearchBox = new searchDropdown(relievingFactor);
const relievingFactorInformationTxt = new textArea(relievingFactorInfo);

const aggravatingFactorSearchBox = new searchDropdown(aggravatingFactor);
const aggravatingFactorInformationTxt = new textArea(aggravatingFactorInfo);

const defaultFieldsNumber = 32;

class painAssessment extends systemAssessment {
  constructor() {
    super(defaultFieldsNumber);
  }

  locationOfPain() {
    return cy.get(locationOfPainTxt);
  }

  pcaPump() {
    return cy.get(pca);
  }

  qualityOfPainInfo() {
    return cy.get(qualityOfPainInfo);
  }

  painRatingRadioBtn() {
    return cy.get(painRatingRadioBtn);
  }

  //-----------------methods---------------------//
  doHavePain(option) {
    havePainRadio.selectRadioByLabel(option);
  }

  frequencyOfPain(option) {
    frequencyOfPainRadio.selectRadioByLabel(option);
  }

  selectNonverbalCueOfPains(options) {
    nonverbalSearchBox.searchAndSelectMultiOption(options);
  }

  selectQualityOfPains(options) {
    qualityOfPainSearchBox.searchAndSelectMultiOption(options);
  }

  selectRelievingFactors(options) {
    relievingFactorSearchBox.searchAndSelectMultiOption(options);
  }

  selectAggravatingFactors(options) {
    aggravatingFactorSearchBox.searchAndSelectMultiOption(options);
  }

  selectPhysiologicalCuesofPain(options) {
    physioPainCuesCheckBox.checkMultiOptions(options);
  }

  selectIntensityOfPain(option) {
    intensityOfPainRadio.selectRadioByLabel(option);
  }

  selectPainRatingWongBakerFace(option) {
    painRatingRadio.selectRadioByLabel(option);
  }

  inputQualityOfPainInfo(info) {
    qualityOfPainInformationTxt.inputText(info);
  }

  inputRelievingFactors(info) {
    relievingFactorInformationTxt.inputText(info);
  }
  inputAggravatingFactors(info) {
    aggravatingFactorInformationTxt.inputText(info);
  }

  verifyCheckBoxSelectOptionPresent(label) {
    this.fieldLabel()
      .contains(label)
      .should('exist');
  }
}

export default painAssessment;
