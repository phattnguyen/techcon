import searchDropdown from '../../element-helpers/search.dropdown.el';
import checkBox from '../../element-helpers/checkbox.el';
import textArea from '../../element-helpers/text.area.el';
import select from '../../element-helpers/select.el';

import table from '../../element-helpers/table.el';
import BasePage from '../base.page';
import simsCy from '../../sim.cy';

const informationReceivedFromSearchDropdown = new searchDropdown('#informationReceivedFrom');
const informationReceivedFromOtherTextbox = new textArea('#field-input-informationReceivedFromOther');
const homeMedicationTypeSearchDropdown = new searchDropdown('#homeMedicationType');
const chartHistoryHomeMedicationTypeSelect = new select('//button/following-sibling::select[@id="field-input-undefined"]');
const chartHistory = new table();

/*** fields for Prescription Medications type*/
const medicationSearchDropdown = new searchDropdown('#medication');
const doseSearchDropdown = new searchDropdown('#doseMedications');
const formSearchDropdown = new searchDropdown('#formMedications');
const routeSearchDropdown = new searchDropdown('#routeMedications');
const frequencySearchDropdown = new searchDropdown('#frequencyMedications');
const lastDoseDate = new textArea('#field-input-lastDoseDate');
const lastDoseTime = new textArea('#field-input-lastDoseTime');
const indicationTextbox = new textArea('#field-input-indication');

/*** fields for Over-the-counter Products type*/
const brandNameSearchDropdown = new searchDropdown('#brandName');
const genericNameSearchDropdown = new searchDropdown('#genericName');
const productTypeSearchDropdown = new searchDropdown('#productType');
const productDetailsFormValueSearchDropdown = new searchDropdown('#productDetailsFormValue');
const overTheCounterProductsDoseTextbox = new textArea('#field-input-overTheCounterProductsDose');
const overTheCounterProductsProductTakenInLast24HoursRadios = new checkBox('[name=overTheCounterProductsProductTakenInLast24Hours]');
const overTheCounterProductsReasonForTakingProductTextbox = new textArea('#field-input-overTheCounterProductsReasonForTakingProduct');
const overTheCounterProductsResultsFollowingUseTextbox = new textArea('#field-input-overTheCounterProductsResultsFollowingUse');

/*** fields for Herbal and Natural Remedy Products type*/
const productSearchDropdown = new searchDropdown('#product');
const preparationDropdown = new searchDropdown('#preparation');
const herbalAndNaturalRemedyProductsDoseTextbox = new textArea('#field-input-herbalAndNaturalRemedyProductsDose');
const herbalAndNaturalRemedyProductsRouteSearchDropdown = new searchDropdown('#herbalAndNaturalRemedyProductsRoute');
const strengthTextbox = new textArea('#field-input-strength');
const herbalAndNaturalRemedyProductsProductTakenInLast24HoursRadios = new checkBox('[name=herbalAndNaturalRemedyProductsProductTakenInLast24Hours]');
const herbalAndNaturalRemedyProductsReasonForTakingProductTextbox = new textArea('#field-input-herbalAndNaturalRemedyProductsReasonForTakingProduct');
const herbalAndNaturalRemedyProductsResultsFollowingUseTextbox = new textArea('#field-input-herbalAndNaturalRemedyProductsResultsFollowingUse');

class HomeMedicationInformationPage extends BasePage {
  selectInfoReceiveFrom(options) {
    informationReceivedFromSearchDropdown.searchAndSelectMultiOption(options);
  }

  inputInfoReceiveFromOther(text) {
    informationReceivedFromOtherTextbox.inputText(text);
  }

  selectHomeMedicationType(option) {
    homeMedicationTypeSearchDropdown.searchAndSelectOption(option);
  }

  /**Prescription Medications*/
  selectMedication(option) {
    medicationSearchDropdown.searchAndSelectOption(option);
  }

  selectMedicationDose() {
    // doseSearchDropdown.scrollToElement();
    doseSearchDropdown.selectRandom();
  }

  selectMedicationForm() {
    // formSearchDropdown.scrollToElement
    formSearchDropdown.selectRandom();
  }

  selectMedicationRoute() {
    // routeSearchDropdown.scrollToElement
    routeSearchDropdown.selectRandom();
  }

  selectMedicationFrequency() {
    frequencySearchDropdown.selectRandom();
  }

  inputLastDoseDate(date) {
    lastDoseDate.inputText(date);
  }

  inputLastDoseTime(time) {
    lastDoseTime.inputText(time);
  }

  inputIndication(text) {
    indicationTextbox.inputText(text);
  }

  /**Over-the-counter Products*/
  selectBrandName(option) {
    brandNameSearchDropdown.searchAndSelectOption(option);
  }

  selectGenericName() {
    // genericNameSearchDropdown.scrollToElement();
    genericNameSearchDropdown.selectRandom();
  }

  selectProductType(option) {
    // productTypeSearchDropdown.scrollToElement();
    productTypeSearchDropdown.selectRandom(option);
  }

  selectProductDetailsFormValue() {
    productDetailsFormValueSearchDropdown.selectRandom();
  }

  inputOverTheCounterProductsDose(text) {
    overTheCounterProductsDoseTextbox.inputText(text);
  }

  selectOverTheCounterProductsProductTakenInLast24Hours(option) {
    overTheCounterProductsProductTakenInLast24HoursRadios.selectRadioByLabel(option);
  }

  inputOverTheCounterProductsReasonForTakingProduct(text) {
    overTheCounterProductsReasonForTakingProductTextbox.inputText(text);
  }

  inputOverTheCounterProductsResultsFollowingUse(text) {
    overTheCounterProductsResultsFollowingUseTextbox.inputText(text);
  }

  /**Herbal and Natural Remedy Products*/
  selectProduct(option) {
    productSearchDropdown.searchAndSelectOption(option);
  }

  selectPreparation() {
    // preparationDropdown.scrollToElement();
    preparationDropdown.selectRandom();
  }

  inputHerbalAndNaturalRemedyProductsDose(text) {
    herbalAndNaturalRemedyProductsDoseTextbox.inputText(text);
  }

  selectHerbalAndNaturalRemedyProductsRoute() {
    herbalAndNaturalRemedyProductsRouteSearchDropdown.selectRandom();
  }

  inputStrength(text) {
    strengthTextbox.inputText(text);
  }

  selectHerbalAndNaturalRemedyProductsProductTakenInLast24Hours(option) {
    herbalAndNaturalRemedyProductsProductTakenInLast24HoursRadios.selectRadioByLabel(option);
  }

  inputHerbalAndNaturalRemedyProductsReasonForTakingProduct(text) {
    herbalAndNaturalRemedyProductsReasonForTakingProductTextbox.inputText(text);
  }

  inputHerbalAndNaturalRemedyProductsResultsFollowingUse(text) {
    herbalAndNaturalRemedyProductsResultsFollowingUseTextbox.inputText(text);
  }

  selectChartHistoryMedicationType(type) {
    chartHistoryHomeMedicationTypeSelect.selectByOption(type);
  }

  verifyChartHistoryDataTable(col, value, isExisted) {
    isExisted || typeof isExisted === 'undefined' ? chartHistory.verifyCellValueByHeaderExist(col, value) : chartHistory.verifyCellValueByHeaderNotExist(col, value);
  }

  verifyHomeMedicationIsDeleted(col, value) {
    chartHistory.verifyTableCellIsSoftDeleted(col, value);
  }

  verifyHomeMedicationIsNotDeleted(col, value) {
    chartHistory.verifyTableCellIsNotSoftDeleted(col, value);
  }

  verifySelectedInfoReceiveFromValue(options, yes) {
    yes ? informationReceivedFromSearchDropdown.verifySelectedOptions(options) : informationReceivedFromSearchDropdown.verifyUnselectOptions(options);
  }

  verifyHomeMedTypeFieldValue(option) {
    homeMedicationTypeSearchDropdown.verifySelectedOption(option);
  }

  verifyProductDetailsSectionDisappeared() {
    medicationSearchDropdown.verifyElementExist(false);
    doseSearchDropdown.verifyElementExist(false);
    formSearchDropdown.verifyElementExist(false);
    routeSearchDropdown.verifyElementExist(false);
    frequencySearchDropdown.verifyElementExist(false);

    brandNameSearchDropdown.verifyElementExist(false);
    genericNameSearchDropdown.verifyElementExist(false);
    productTypeSearchDropdown.verifyElementExist(false);
    productDetailsFormValueSearchDropdown.verifyElementExist(false);
    overTheCounterProductsDoseTextbox.verifyElementExist(false);
    overTheCounterProductsProductTakenInLast24HoursRadios.verifyElementExist(false);
    overTheCounterProductsReasonForTakingProductTextbox.verifyElementExist(false);
    overTheCounterProductsResultsFollowingUseTextbox.verifyElementExist(false);

    productSearchDropdown.verifyElementExist(false);
    preparationDropdown.verifyElementExist(false);
    herbalAndNaturalRemedyProductsDoseTextbox.verifyElementExist(false);
    strengthTextbox.verifyElementExist(false);
    herbalAndNaturalRemedyProductsProductTakenInLast24HoursRadios.verifyElementExist(false);
    herbalAndNaturalRemedyProductsReasonForTakingProductTextbox.verifyElementExist(false);
    herbalAndNaturalRemedyProductsResultsFollowingUseTextbox.verifyElementExist(false);
  }

  deleteAllRecords() {
    chartHistory.deleteAllDataRows();
  }

  //Admission History - Home Meds
  addHomeMedication() {
    simsCy.getButtonByLabel('Add Home Medication').click();
  }

  deleteHomeMedIfExist() {
    chartHistory.deleteRecordIfExists();
  }
}

export default HomeMedicationInformationPage;
