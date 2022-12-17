import basePage from '../../page-objects/base.page';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const checkboxReportedNoPreviousHealthProblem = '#field-input-noPreviousHealthProblem-reportedNoPreviousHealthProblem';

//Environmental History
const txtLivingEnvironmentConcerns = '#field-input-livingEnvironmentConcerns';
const radioExposeHazardousMaterial = '[name="exposeHazardousMaterial"]';
const txtExposeHazardousMaterialExplain = '#field-input-exposeHazardousMaterialExplain';
const radioBeenInMilitary = '[name="beenInMilitary"]';
const txtBranchOfService = '#field-input-branchOfService';
const txtDatesOfMilitaryService = '#field-input-datesOfMilitaryService';
const txtPositionRankOperations = '#field-input-positionRankOperations';
const txtDeploymentsDateLocation = '#field-input-deploymentsDateLocation';
const txtEnvironmentalExposuresInMilitary = '#field-input-environmentalExposuresInMilitary';
const txtInjuriesExperiencedInMilitary = '#field-input-injuriesExperiencedInMilitary';
const txtAssaultsExperiencedInMilitary = '#field-input-assaultsExperiencedInMilitary';

//Travel
const radioTravelToForeignCountryPast12Months = '[name="travelToForeignCountryPast12Months"]';
const txtTravelToForeignCountryPast12MonthsExplain = '#field-input-travelToForeignCountryPast12MonthsExplain';

//Mental Health
const selectMentalHealth = '#mentalHealth';

//Neurological Problems
const selectNeurologicalProblems = '#neurologicalProblems';

//Respiratory Problems
const selectRespiratoryProblems = '#respiratoryProblems';

//Cardiovascular Problems
const selectCardiovascularProblems = '#cardiovascularProblems';

//Sensory Impairment
const radioHearingImpairment = '[name="hearingImpairment"]';
const checkboxHearingImpairment_WearHearingAids = '#field-input-hearingImpairmentAssistance-wearsHearingAids';
const checkboxHearingImpairment_CoclearImplant = '#field-input-hearingImpairmentAssistance-coclearImplant';

const radioVisualImpairment = '[name="visualImpairment"]';
const checkboxVisualImpairment_WearGlasses = '#field-input-visualImpairmentAssistance-wearsGlasses';
const checkboxVisualImpairment_WearContactLenses = '#field-input-visualImpairmentAssistance-wearsContactLenses';

//Endocrine Disorders
const selectThyroidDisease = '#thyroidDisease';
const selectLiverDisease = '#liverDisease';
const checkboxSyndromeOfInappropriateAntidiureticHormone = '#field-input-otherDisorders-syndromeOfInappropriateAntidiureticHormone';
const checkboxHypoglycemia = '#field-input-otherDisorders-hypoglycemia';
const checkboxHyperglycemia = '#field-input-otherDisorders-hyperglycemia';
const checkboxDiabetesInsipidus = '#field-input-otherDisorders-diabetesInsipidus';
const selectPituitaryDisorder = '#pituitaryDisorder';
const selectDiabetes = '#diabetes';
const radioCompliantDiabeticRegimen = '[name="compliantDiabeticRegimen"]';
const txtYearsWithDiabetes = '#field-input-yearsWithDiabetes';

//Gastrointestinal Problems
const selectGastrointestinalProblems = '#gastrointestinalProblems';

//Hematologic/Immunologic Problems
const selectHematologicImmunologicProblems = '#hematologicImmunologicProblems';

//Genitourinary Problems
const selectGenitourinaryProblems = '#genitourinaryProblems';

//Sexuality/Reproductive
const selectReproductiveProblems = '#reproductiveProblems';
const radioSexuallyActive = '[name="sexuallyActive"]';
const selectNumberOfSexPartners = '#field-input-numberOfSexPartners';
const radioSexOfPartners = '[name="sexOfPartners"]';
const radioBirthControlUsed = '[name="birthControlUsed"]';

//Musculoskeletal Problems
const selectMusculoskeletalProblems = '#musculoskeletalProblems';

//Previous Surgery
const checkboxPreviousSurgery_None = '#field-input-previousSurgeryNone-none';
const selectPreviousSurgery = '#previousSurgery';

//Anesthesia Problems
const radioAnesthesiaProblemsReported = '[name="anesthesiaProblemsReported"]';
const txtAnesthesiaProblems = '#field-input-anesthesiaProblems';

//Other Health History
const txtOtherHealthHistory = '#field-input-otherHealthHistory';

//Recent Fever Requiring Antibiotics
const checkboxNoRecentFever = '#field-input-recentFeverNoRecentFever-noRecentFever';
const selectRecentFeverRequiringAntibioticsOnset = '#field-input-recentFeverRequiringAntibioticsOnset';
const txtRecentFeverRequiringAntibioticsOnsetOther = '#field-input-recentFeverRequiringAntibioticsOnsetOther';

const errorMessage = '.u-els-color-error';

/**---------------------------------------------------------------- */

const reportedNoPreviousHealthProblemrCheckBox = new checkBox(checkboxReportedNoPreviousHealthProblem);

const livingEnvironmentConcernsTXT = new textArea(txtLivingEnvironmentConcerns);
const exposeHazardousMaterialRadio = new checkBox(radioExposeHazardousMaterial);
const exposeHazardousMaterialExplainTXT = new textArea(txtExposeHazardousMaterialExplain);
const beenInMilitaryRadio = new checkBox(radioBeenInMilitary);

const branchOfServiceTXT = new textArea(txtBranchOfService);
const datesOfMilitaryServiceTXT = new textArea(txtDatesOfMilitaryService);
const positionRankOperationsTXT = new textArea(txtPositionRankOperations);
const deploymentsDateLocationTXT = new textArea(txtDeploymentsDateLocation);
const environmentalExposuresInMilitaryTXT = new textArea(txtEnvironmentalExposuresInMilitary);
const injuriesExperiencedInMilitaryTXT = new textArea(txtInjuriesExperiencedInMilitary);
const assaultsExperiencedInMilitaryTXT = new textArea(txtAssaultsExperiencedInMilitary);

const travelToForeignCountryPast12MonthsRadio = new checkBox(radioTravelToForeignCountryPast12Months);
const travelToForeignCountryPast12MonthsExplainTXT = new textArea(txtTravelToForeignCountryPast12MonthsExplain);

const mentalHealthSelect = new searchDropdownSelect(selectMentalHealth);
const neurologicalProblemsSelect = new searchDropdownSelect(selectNeurologicalProblems);
const respiratoryProblemsSelect = new searchDropdownSelect(selectRespiratoryProblems);
const cardiovascularProblemsSelect = new searchDropdownSelect(selectCardiovascularProblems);

const hearingImpairmentRadio = new checkBox(radioHearingImpairment);
const hearingImpairment_CB_wearHearingAids = new checkBox(checkboxHearingImpairment_WearHearingAids);
const hearingImpairment_CB_coclearImplant = new checkBox(checkboxHearingImpairment_CoclearImplant);

const visualImpairmentRadio = new checkBox(radioVisualImpairment);
const visualImpairment_CB_wearGlasses = new checkBox(checkboxVisualImpairment_WearGlasses);
const visualImpairment_CB_wearContactLenses = new checkBox(checkboxVisualImpairment_WearContactLenses);

const thyroidDiseaseSelect = new searchDropdownSelect(selectThyroidDisease);
const liverDiseaseSelect = new searchDropdownSelect(selectLiverDisease);
const syndromeOfInappropriateAntidiureticHormoneCheckBox = new checkBox(checkboxSyndromeOfInappropriateAntidiureticHormone);
const hypoglycemiaCheckBox = new checkBox(checkboxHypoglycemia);
const hyperglycemiaCheckBox = new checkBox(checkboxHyperglycemia);
const diabetesInsipidusCheckBox = new checkBox(checkboxDiabetesInsipidus);
const pituitaryDisorderSelect = new searchDropdownSelect(selectPituitaryDisorder);
const diabetesSelect = new searchDropdownSelect(selectDiabetes);
const compliantDiabeticRegimenRadio = new checkBox(radioCompliantDiabeticRegimen);
const yearsWithDiabetesTXT = new textArea(txtYearsWithDiabetes);

const gastrointestinalProblemsSelect = new searchDropdownSelect(selectGastrointestinalProblems);
const hematologicImmunologicProblemsSelect = new searchDropdownSelect(selectHematologicImmunologicProblems);
const genitourinaryProblemsSelect = new searchDropdownSelect(selectGenitourinaryProblems);

const reproductiveProblemsSelect = new searchDropdownSelect(selectReproductiveProblems);
const sexuallyActiveRadio = new checkBox(radioSexuallyActive);
const numberOfSexPartnersSelect = new select(selectNumberOfSexPartners);
const sexOfPartnersRadio = new checkBox(radioSexOfPartners);
const birthControlUsedRadio = new checkBox(radioBirthControlUsed);

const musculoskeletalProblemsSelect = new searchDropdownSelect(selectMusculoskeletalProblems);
const previousSurgery_CB_none = new checkBox(checkboxPreviousSurgery_None);
const previousSurgerySelect = new searchDropdownSelect(selectPreviousSurgery);
const anesthesiaProblemsReportedRadio = new checkBox(radioAnesthesiaProblemsReported);
const anesthesiaProblemsTXT = new textArea(txtAnesthesiaProblems);
const otherHealthHistoryTXT = new textArea(txtOtherHealthHistory);
const noRecentFeverCheckBox = new checkBox(checkboxNoRecentFever);
const recentFeverRequiringAntibioticsOnsetSelect = new select(selectRecentFeverRequiringAntibioticsOnset);
const recentFeverRequiringAntibioticsOnsetOtherTXT = new textArea(txtRecentFeverRequiringAntibioticsOnsetOther);

class HealthHistory extends basePage {
  selectReportedNoPreviousHealthProblem(yes) {
    yes ? reportedNoPreviousHealthProblemrCheckBox.check() : reportedNoPreviousHealthProblemrCheckBox.uncheck();
  }

  livingEnvironmentConcerns(value) {
    livingEnvironmentConcernsTXT.inputText(value);
  }

  exposeHazardousMaterial(label) {
    exposeHazardousMaterialRadio.selectRadioByLabel(label);
  }

  exposeHazardousMaterialExplain(value) {
    exposeHazardousMaterialExplainTXT.inputText(value);
  }

  beenInMilitary(label) {
    beenInMilitaryRadio.selectRadioByLabel(label);
  }

  branchOfService(value) {
    branchOfServiceTXT.inputText(value);
  }

  datesOfMilitaryService(value) {
    datesOfMilitaryServiceTXT.inputText(value);
  }

  positionRankOperations(value) {
    positionRankOperationsTXT.inputText(value);
  }

  deploymentsDateLocation(value) {
    deploymentsDateLocationTXT.inputText(value);
  }

  environmentalExposuresInMilitary(value) {
    environmentalExposuresInMilitaryTXT.inputText(value);
  }

  injuriesExperiencedInMilitary(value) {
    injuriesExperiencedInMilitaryTXT.inputText(value);
  }

  assaultsExperiencedInMilitary(value) {
    assaultsExperiencedInMilitaryTXT.inputText(value);
  }

  travelToForeignCountryPast12Months(label) {
    travelToForeignCountryPast12MonthsRadio.selectRadioByLabel(label);
  }

  travelToForeignCountryPast12MonthsExplain(value) {
    travelToForeignCountryPast12MonthsExplainTXT.inputText(value);
  }

  selectMentalHealth(options) {
    mentalHealthSelect.searchAndSelectMultiOption(options);
  }

  selectNeurologicalProblems(options) {
    neurologicalProblemsSelect.searchAndSelectMultiOption(options);
  }

  selectRespiratoryProblems(options) {
    respiratoryProblemsSelect.searchAndSelectMultiOption(options);
  }

  selectCardiovascularProblems(options) {
    cardiovascularProblemsSelect.searchAndSelectMultiOption(options);
  }

  hearingImpairment(label) {
    hearingImpairmentRadio.selectRadioByLabel(label);
  }

  hearingImpairment_wearHearingAids(yes) {
    yes ? hearingImpairment_CB_wearHearingAids.check() : hearingImpairment_CB_wearHearingAids.uncheck();
  }

  hearingImpairment_coclearImplant(yes) {
    yes ? hearingImpairment_CB_coclearImplant.check() : hearingImpairment_CB_coclearImplant.uncheck();
  }

  visualImpairment(label) {
    visualImpairmentRadio.selectRadioByLabel(label);
  }

  visualImpairment_wearGlasses(yes) {
    yes ? visualImpairment_CB_wearGlasses.check() : visualImpairment_CB_wearGlasses.uncheck();
  }

  visualImpairment_wearContactLenses(yes) {
    yes ? visualImpairment_CB_wearContactLenses.check() : visualImpairment_CB_wearContactLenses.uncheck();
  }

  selectThyroidDisease(options) {
    thyroidDiseaseSelect.searchAndSelectMultiOption(options);
  }

  selectLiverDisease(options) {
    liverDiseaseSelect.searchAndSelectMultiOption(options);
  }

  selectPituitaryDisorder(options) {
    pituitaryDisorderSelect.searchAndSelectMultiOption(options);
  }

  selectDiabetes(options) {
    diabetesSelect.searchAndSelectMultiOption(options);
  }

  compliantDiabeticRegimen(label) {
    compliantDiabeticRegimenRadio.selectRadioByLabel(label);
  }

  yearsWithDiabetes(value) {
    yearsWithDiabetesTXT.inputText(value);
  }

  syndromeOfInappropriateAntidiureticHormone(yes) {
    yes ? syndromeOfInappropriateAntidiureticHormoneCheckBox.check() : syndromeOfInappropriateAntidiureticHormoneCheckBox.uncheck();
  }

  hypoglycemia(yes) {
    yes ? hypoglycemiaCheckBox.check() : hypoglycemiaCheckBox.uncheck();
  }

  hyperglycemia(yes) {
    yes ? hyperglycemiaCheckBox.check() : hyperglycemiaCheckBox.uncheck();
  }

  diabetesInsipidus(yes) {
    yes ? diabetesInsipidusCheckBox.check() : diabetesInsipidusCheckBox.uncheck();
  }

  selectGastrointestinalProblems(options) {
    gastrointestinalProblemsSelect.searchAndSelectMultiOption(options);
  }

  selectHematologicImmunologicProblems(options) {
    hematologicImmunologicProblemsSelect.searchAndSelectMultiOption(options);
  }

  selectGenitourinaryProblems(options) {
    genitourinaryProblemsSelect.searchAndSelectMultiOption(options);
  }

  selectReproductiveProblems(options) {
    reproductiveProblemsSelect.searchAndSelectMultiOption(options);
  }

  sexuallyActive(label) {
    sexuallyActiveRadio.selectRadioByLabel(label);
  }

  selectNumberOfSexPartners(option) {
    numberOfSexPartnersSelect.selectByOption(option);
  }

  sexOfPartners(label) {
    sexOfPartnersRadio.selectRadioByLabel(label);
  }

  birthControlUsed(label) {
    birthControlUsedRadio.selectRadioByLabel(label);
  }

  selectMusculoskeletalProblems(options) {
    musculoskeletalProblemsSelect.searchAndSelectMultiOption(options);
  }

  previousSurgery(yes) {
    yes ? previousSurgery_CB_none.check() : previousSurgery_CB_none.uncheck();
  }

  selectPreviousSurgery(options) {
    previousSurgerySelect.searchAndSelectMultiOption(options);
  }

  anesthesiaProblemsReported(label) {
    anesthesiaProblemsReportedRadio.selectRadioByLabel(label);
  }

  anesthesiaProblems(value) {
    anesthesiaProblemsTXT.inputText(value);
  }

  otherHealthHistory(value) {
    otherHealthHistoryTXT.inputText(value);
  }

  noRecentFever(yes) {
    yes ? noRecentFeverCheckBox.check() : noRecentFeverCheckBox.uncheck();
  }

  selectRecentFeverRequiringAntibioticsOnset(options) {
    recentFeverRequiringAntibioticsOnsetSelect.selectByOption(options);
  }

  recentFeverRequiringAntibioticsOnsetOther(value) {
    recentFeverRequiringAntibioticsOnsetOtherTXT.inputText(value);
  }

  verifyAllFieldsDisabled(yes) {
    if (yes) {
      this.getWebElement('[disabled]')
        .its('length')
        .should('eq', 54);
    } else {
      this.getWebElement('[disabled]')
        .its('length')
        .should('be.below', 54);
    }
  }

  verifyAllFieldsDisplayed() {
    this.getWebElement(checkboxReportedNoPreviousHealthProblem).should('exist');
    this.getWebElement(txtLivingEnvironmentConcerns).should('exist');
    this.getWebElement(radioExposeHazardousMaterial).should('exist');
    this.getWebElement(txtExposeHazardousMaterialExplain).should('exist');
    this.getWebElement(radioBeenInMilitary).should('exist');
    this.getWebElement(txtBranchOfService).should('exist');
    this.getWebElement(txtDatesOfMilitaryService).should('exist');
    this.getWebElement(txtPositionRankOperations).should('exist');
    this.getWebElement(txtDeploymentsDateLocation).should('exist');
    this.getWebElement(txtEnvironmentalExposuresInMilitary).should('exist');
    this.getWebElement(txtInjuriesExperiencedInMilitary).should('exist');
    this.getWebElement(txtAssaultsExperiencedInMilitary).should('exist');
    this.getWebElement(radioTravelToForeignCountryPast12Months).should('exist');
    this.getWebElement(txtTravelToForeignCountryPast12MonthsExplain).should('exist');
    this.getWebElement(selectMentalHealth).should('exist');
    this.getWebElement(selectNeurologicalProblems).should('exist');
    this.getWebElement(selectRespiratoryProblems).should('exist');
    this.getWebElement(selectCardiovascularProblems).should('exist');
    this.getWebElement(radioHearingImpairment).should('exist');
    this.getWebElement(checkboxHearingImpairment_WearHearingAids).should('exist');
    this.getWebElement(checkboxHearingImpairment_CoclearImplant).should('exist');
    this.getWebElement(radioVisualImpairment).should('exist');
    this.getWebElement(checkboxVisualImpairment_WearGlasses).should('exist');
    this.getWebElement(checkboxVisualImpairment_WearContactLenses).should('exist');
    this.getWebElement(selectThyroidDisease).should('exist');
    this.getWebElement(selectLiverDisease).should('exist');
    this.getWebElement(checkboxSyndromeOfInappropriateAntidiureticHormone).should('exist');
    this.getWebElement(checkboxHypoglycemia).should('exist');
    this.getWebElement(checkboxHyperglycemia).should('exist');
    this.getWebElement(checkboxDiabetesInsipidus).should('exist');
    this.getWebElement(selectPituitaryDisorder).should('exist');
    this.getWebElement(selectDiabetes).should('exist');
    this.getWebElement(txtYearsWithDiabetes).should('exist');

    this.getWebElement(selectGastrointestinalProblems).should('exist');
    this.getWebElement(selectHematologicImmunologicProblems).should('exist');
    this.getWebElement(selectGenitourinaryProblems).should('exist');
    this.getWebElement(selectReproductiveProblems).should('exist');
    this.getWebElement(radioSexuallyActive).should('exist');
    this.getWebElement(selectMusculoskeletalProblems).should('exist');
    this.getWebElement(checkboxPreviousSurgery_None).should('exist');

    this.getWebElement(selectPreviousSurgery).should('exist');
    this.getWebElement(radioAnesthesiaProblemsReported).should('exist');
    this.getWebElement(txtAnesthesiaProblems).should('exist');
    this.getWebElement(txtOtherHealthHistory).should('exist');
    this.getWebElement(checkboxNoRecentFever).should('exist');
    this.getWebElement(selectRecentFeverRequiringAntibioticsOnset).should('exist');
  }

  verifyExposeHazardousMaterialExplainFieldEnabled(yes) {
    exposeHazardousMaterialExplainTXT.verifyElementEnabled(yes);
  }

  verifyBeenInMilitaryFieldsEnabled(yes) {
    branchOfServiceTXT.verifyElementEnabled(yes);
    datesOfMilitaryServiceTXT.verifyElementEnabled(yes);
    positionRankOperationsTXT.verifyElementEnabled(yes);
    deploymentsDateLocationTXT.verifyElementEnabled(yes);
    environmentalExposuresInMilitaryTXT.verifyElementEnabled(yes);
    injuriesExperiencedInMilitaryTXT.verifyElementEnabled(yes);
    assaultsExperiencedInMilitaryTXT.verifyElementEnabled(yes);
  }

  verifyTravelToForeignCountryPast12MonthsExplainFieldEnabled(yes) {
    travelToForeignCountryPast12MonthsExplainTXT.verifyElementEnabled(yes);
  }

  verifySexuallyInfoFieldsEnabled(yes) {
    numberOfSexPartnersSelect.verifyElementEnabled(yes);
    sexOfPartnersRadio.verifyElementEnabled(yes);
    birthControlUsedRadio.verifyElementEnabled(yes);
  }

  verifyPreviousSurgeryEnable(yes) {
    previousSurgerySelect.verifyElementEnabled(yes);
  }

  verifyAnesthesiaProblemsEnable(yes) {
    anesthesiaProblemsTXT.verifyElementEnabled(yes);
  }

  verifyRecentFeverRequiringAntibioticsOnsetEnable(yes) {
    recentFeverRequiringAntibioticsOnsetSelect.verifyElementEnabled(yes);
  }

  verifyCompliantDiabeticRegimenEnabel(yes) {
    compliantDiabeticRegimenRadio.verifyElementEnabled(yes);
  }

  verifyYearsWithDiabetesEnable(yes) {
    yearsWithDiabetesTXT.verifyElementEnabled(yes);
  }

  verifyOnsetOtherFieldEnabled(yes) {
    recentFeverRequiringAntibioticsOnsetOtherTXT.verifyElementEnabled(yes);
  }

  validateReportedNoPreviousHealthProblemChecked(yes) {
    reportedNoPreviousHealthProblemrCheckBox.verifyCheckBoxIsChecked(yes);
  }

  validateLivingEnvironmentConcerns(value) {
    livingEnvironmentConcernsTXT.verifyTextFieldValue(value);
  }

  validateExposeHazardousMaterialChecked(label) {
    exposeHazardousMaterialRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateExposeHazardousMaterialExplain(value) {
    if (value != null) {
      exposeHazardousMaterialExplainTXT.verifyTextFieldValue(value);
    }
  }

  validateBeenInMilitaryChecked(label) {
    beenInMilitaryRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateBranchOfService(value) {
    branchOfServiceTXT.verifyTextFieldValue(value);
  }

  validateDatesOfMilitaryService(value) {
    datesOfMilitaryServiceTXT.verifyTextFieldValue(value);
  }

  validatePositionRankOperations(value) {
    positionRankOperationsTXT.verifyTextFieldValue(value);
  }

  validateDeploymentsDateLocation(value) {
    deploymentsDateLocationTXT.verifyTextFieldValue(value);
  }

  validateEnvironmentalExposuresInMilitary(value) {
    environmentalExposuresInMilitaryTXT.verifyTextFieldValue(value);
  }

  validateInjuriesExperiencedInMilitary(value) {
    injuriesExperiencedInMilitaryTXT.verifyTextFieldValue(value);
  }

  validateAssaultsExperiencedInMilitary(value) {
    assaultsExperiencedInMilitaryTXT.verifyTextFieldValue(value);
  }

  validateTravelToForeignCountryPast12MonthsChecked(label) {
    travelToForeignCountryPast12MonthsRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateTravelToForeignCountryPast12MonthsExplain(value) {
    travelToForeignCountryPast12MonthsExplainTXT.verifyTextFieldValue(value);
  }

  validateMentalHealth(options) {
    mentalHealthSelect.verifySelectedOptions(options);
  }

  validateNeurologicalProblems(options) {
    neurologicalProblemsSelect.verifySelectedOptions(options);
  }

  validateRespiratoryProblems(options) {
    respiratoryProblemsSelect.verifySelectedOptions(options);
  }

  validateCardiovascularProblems(options) {
    cardiovascularProblemsSelect.verifySelectedOptions(options);
  }

  validateHearingImpairmentChecked(label) {
    hearingImpairmentRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateWearHearingAidsChecked(yes) {
    hearingImpairment_CB_wearHearingAids.verifyCheckBoxIsChecked(yes);
  }

  validateCoclearImplantChecked(yes) {
    hearingImpairment_CB_coclearImplant.verifyCheckBoxIsChecked(yes);
  }

  validateVisualImpairmentChecked(label) {
    visualImpairmentRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateWearGlassessChecked(yes) {
    visualImpairment_CB_wearGlasses.verifyCheckBoxIsChecked(yes);
  }

  validateWearContactLensesChecked(yes) {
    visualImpairment_CB_wearContactLenses.verifyCheckBoxIsChecked(yes);
  }

  validateThyroidDisease(options) {
    thyroidDiseaseSelect.verifySelectedOptions(options);
  }

  validateLiverDisease(options) {
    liverDiseaseSelect.verifySelectedOptions(options);
  }

  validatePituitaryDisorder(options) {
    pituitaryDisorderSelect.verifySelectedOptions(options);
  }

  validateDiabetes(options) {
    diabetesSelect.verifySelectedOptions(options);
  }

  validateCompliantDiabeticRegimenChecked(label) {
    compliantDiabeticRegimenRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateYearsWithDiabetes(value) {
    yearsWithDiabetesTXT.verifyTextFieldValue(value);
  }

  validateSyndromeOfInappropriateAntidiureticHormoneChecked(yes) {
    syndromeOfInappropriateAntidiureticHormoneCheckBox.verifyCheckBoxIsChecked(yes);
  }

  validateHypoglycemiaChecked(yes) {
    hypoglycemiaCheckBox.verifyCheckBoxIsChecked(yes);
  }

  validateHyperglycemiaChecked(yes) {
    hyperglycemiaCheckBox.verifyCheckBoxIsChecked(yes);
  }

  validateDiabetesInsipidusChecked(yes) {
    diabetesInsipidusCheckBox.verifyCheckBoxIsChecked(yes);
  }

  validateGastrointestinalProblems(options) {
    gastrointestinalProblemsSelect.verifySelectedOptions(options);
  }

  validateHematologicImmunologicProblems(options) {
    hematologicImmunologicProblemsSelect.verifySelectedOptions(options);
  }

  validateGenitourinaryProblems(options) {
    genitourinaryProblemsSelect.verifySelectedOptions(options);
  }

  validateReproductiveProblems(options) {
    reproductiveProblemsSelect.verifySelectedOptions(options);
  }

  validateSexuallyActiveChecked(label) {
    sexuallyActiveRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateNumberOfSexPartners(value) {
    numberOfSexPartnersSelect.verifySelectedValue(value);
  }

  validateSexOfPartnersChecked(label) {
    sexOfPartnersRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateBirthControlUsedChecked(yes) {
    birthControlUsedRadio.verifyRadioButtonIsCheckedByLabel(yes);
  }

  validateMusculoskeletalProblems(options) {
    musculoskeletalProblemsSelect.verifySelectedOptions(options);
  }

  validatePreviousSurgeryChecked(yes) {
    previousSurgery_CB_none.verifyCheckBoxIsChecked(yes);
  }

  validatePreviousSurgerySelect(options) {
    previousSurgerySelect.verifySelectedOptions(options);
  }

  validateAnesthesiaProblemsReportedChecked(label) {
    anesthesiaProblemsReportedRadio.verifyRadioButtonIsCheckedByLabel(label);
  }

  validateAnesthesiaProblems(value) {
    anesthesiaProblemsTXT.verifyTextFieldValue(value);
  }

  validateOtherHealthHistory(value) {
    otherHealthHistoryTXT.verifyTextFieldValue(value);
  }

  validateNoRecentFeverChecked(yes) {
    noRecentFeverCheckBox.verifyCheckBoxIsChecked(yes);
  }

  validateUnselectThyroidDisease(options) {
    thyroidDiseaseSelect.verifyUnselectOptions(options);
  }

  validateUnselectLiverDisease(options) {
    liverDiseaseSelect.verifyUnselectOptions(options);
  }

  validateUnselectPituitaryDisorder(options) {
    pituitaryDisorderSelect.verifyUnselectOptions(options);
  }

  validateUnselectDiabetes(options) {
    diabetesSelect.verifyUnselectOptions(options);
  }

  validateUnselectMentalHealth(options) {
    mentalHealthSelect.verifyUnselectOptions(options);
  }

  validateUnselectNeurologicalProblems(options) {
    neurologicalProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectRespiratoryProblems(options) {
    respiratoryProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectCardiovascularProblems(options) {
    cardiovascularProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectGastrointestinalProblems(options) {
    gastrointestinalProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectHematologicImmunologicProblems(options) {
    hematologicImmunologicProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectGenitourinaryProblems(options) {
    genitourinaryProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectReproductiveProblems(options) {
    reproductiveProblemsSelect.verifyUnselectOptions(options);
  }

  validateUnselectMusculoskeletalProblems(options) {
    musculoskeletalProblemsSelect.verifyUnselectOptions(options);
  }

  validateRecentFeverRequiringAntibioticsOnset(value) {
    recentFeverRequiringAntibioticsOnsetSelect.verifySelectedValue(value);
  }

  validateRecentFeverRequiringAntibioticsOnsetOther(value) {
    recentFeverRequiringAntibioticsOnsetOtherTXT.verifyTextFieldValue(value);
  }

  validateErrorMessage(message) {
    this.getWebElement(errorMessage).should('have.text', message);
  }
}
export default HealthHistory;
