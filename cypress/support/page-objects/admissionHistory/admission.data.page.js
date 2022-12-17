import { isNonNullChain } from 'typescript';
import simsCy from '../../sim.cy';
import basePage from '../../page-objects/base.page';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import searchDropdownSelect from '../../element-helpers/search.dropdown.el';

const txtLastHospitalAdmission = '#field-input-lastHospitalAdmission';
const txtReason = '#field-input-pastAdmissionReason';
const txtWhere = '#field-input-pastAdmissionWhere';
const txtName = '#field-input-informantName';
const cbAdmissionFrom = '#field-input-admittedFrom';
const txtAdmissionFromOther = '#field-input-admittedFromOther';
const txtArrivedByOther = '#field-input-arrivedByOther';
const lbRedAsteriskAdmissionFromOther = '#chart-field-label-admittedFromOther > span.chart-input__label-asterisk';
const cbArrivedBy = '#field-input-arrivedBy';
const lbRedAsteriskArrivedByOther = '#chart-field-label-arrivedByOther > span.chart-input__label-asterisk';
const cbInformationReceivedFrom = '#infoReceivedFrom';
const cbInformationItem = "input[name='infoReceivedFrom'][type='radio']";
const ckPatientUnableRespond = '#field-input-verbalAdmissionHistory-patientUnableRespondNoOneToProvideInformation';

//Label of required fields
const lbAdmissionFromOther = '#chart-field-label-admittedFromOther';
const lbArrivedByOther = '#chart-field-label-arrivedByOther';

//errorMessage & Tooltip:
const tooltipAdmissionFromOther = '#chart-field-errors-admittedFromOther';
const tooltipArrivedByOther = '#chart-field-errors-arrivedByOther';

//top error box:
const boxTopErrorArea = '.u-els-anchorize';

const lastHospitalAdmissionTxt = new textArea(txtLastHospitalAdmission);
const reasonTxt = new textArea(txtReason);
const whereTxt = new textArea(txtWhere);
const nameTxt = new textArea(txtName);
const admissionFromOtherTxt = new textArea(txtAdmissionFromOther);
const arrivedByOtherTxt = new textArea(txtArrivedByOther);
const admissionFromSelect = new select(cbAdmissionFrom);
const arrivedBySelect = new select(cbArrivedBy);
const informationReceivedFromSelect = new searchDropdownSelect(cbInformationReceivedFrom);
const patientUnableRespond = new checkBox(ckPatientUnableRespond);

class AdmissionData extends basePage {
  lastHospitalAdmission(value) {
    lastHospitalAdmissionTxt.inputText(value);
  }

  reason(value) {
    reasonTxt.inputText(value);
  }

  where(value) {
    whereTxt.inputText(value);
  }

  admissionFromOther(value) {
    admissionFromOtherTxt.inputText(value);
  }

  arrivedByOther(value) {
    arrivedByOtherTxt.inputText(value);
  }

  selectAdmissionFrom(option) {
    admissionFromSelect.selectByOption(option);
  }

  selectArrivedBy(option) {
    arrivedBySelect.selectByOption(option);
  }

  selectInformationReceivedFrom(option) {
    informationReceivedFromSelect.searchAndSelectOption(option);
  }

  selectPatientUnableRespond(yes) {
    yes ? patientUnableRespond.check() : patientUnableRespond.uncheck();
  }
  name(value) {
    nameTxt.inputText(value);
  }

  verifyAllFieldsDisplayed() {
    simsCy.verifyTextPresents('This Admission');
    simsCy.verifyTextPresents('Verbal Admission History Information Unavailable');
    simsCy.verifyTextPresents('Patient is unable to respond and no family/friends are available to provide information');
    simsCy.verifyTextPresents('Past Admissions');
    simsCy.verifyTextPresents('Informant / Historian');

    this.getWebElement(cbAdmissionFrom).should('exist');
    this.getWebElement(cbArrivedBy).should('exist');
    this.getWebElement(ckPatientUnableRespond).should('exist');
    this.getWebElement(txtLastHospitalAdmission).should('exist');
    this.getWebElement(txtReason).should('exist');
    this.getWebElement(txtWhere).should('exist');
    this.getWebElement(cbInformationReceivedFrom).should('exist');
    this.getWebElement(txtName).should('exist');
  }

  verifyAllFieldIsEmpty() {
    lastHospitalAdmissionTxt.verifyTextFieldValue('');
    reasonTxt.verifyTextFieldValue('');
    whereTxt.verifyTextFieldValue('');
    nameTxt.verifyTextFieldValue('');
    this.validatePatientUnableValue(false);
    this.validateThisAdmissionEmpty();
    this.getWebElement(cbInformationReceivedFrom).should('have.value', '');
  }

  verifyThisAdmissionOtherFieldsDisplayed() {
    this.getWebElement(txtAdmissionFromOther).should('exist');
    this.getWebElement(lbRedAsteriskAdmissionFromOther).should('exist');
    this.getWebElement(txtArrivedByOther).should('exist');
    this.getWebElement(lbRedAsteriskArrivedByOther).should('exist');
  }

  enterThisAdmission(admissionFrom, arrivedBy) {
    if (admissionFrom != null) {
      this.selectAdmissionFrom(admissionFrom);
    }
    if (arrivedBy != null) {
      this.selectArrivedBy(arrivedBy);
    }
  }

  enterThisAdmissionOther(admittedFromOther, arrivedByOther) {
    if (admittedFromOther != null) {
      this.admissionFromOther(admittedFromOther);
    }
    if (arrivedByOther != null) {
      this.arrivedByOther(arrivedByOther);
    }
  }

  enterPassAdmission(lastHospitalAdmissionValue, reasonValue, whereValue) {
    if (lastHospitalAdmissionValue != null) {
      this.lastHospitalAdmission(lastHospitalAdmissionValue);
    }
    if (reasonValue != null) {
      this.reason(reasonValue);
    }
    if (whereValue != null) {
      this.where(whereValue);
    }
  }

  enterInformantOrHistorian(information, name) {
    if (information != null) {
      this.getcbInformationReceivedFrom().click();
      cy.wait(2000);
      this.getInformation(information).check({ force: true });
    }
    if (name != null) {
      this.getName()
        .clear()
        .wait(500);
      this.getName().type(name);
    }
  }

  validateThisAdmission(admissionFrom, arrivedBy) {
    this.getWebElement(cbAdmissionFrom).should('have.value', admissionFrom);
    this.getWebElement(cbArrivedBy).should('have.value', arrivedBy);
  }

  validateThisAdmissionEmpty() {
    this.getWebElement(cbAdmissionFrom).should('have.value', '');
    this.getWebElement(cbArrivedBy).should('have.value', '');
  }

  validateThisAdmissionOther(admittedFromOther, arrivedByOther) {
    this.getWebElement(txtAdmissionFromOther).should('have.value', admittedFromOther);
    this.getWebElement(txtArrivedByOther).should('have.value', arrivedByOther);
  }

  validatePatientUnableValue(yes) {
    yes ? this.getWebElement(ckPatientUnableRespond).should('be.checked') : this.getWebElement(ckPatientUnableRespond).should('not.be.checked');
  }

  validatePassAdmission(lastHospitalAdmission, reason, where) {
    this.getWebElement(txtLastHospitalAdmission).should('have.value', lastHospitalAdmission);
    this.getWebElement(txtReason).should('have.value', reason);
    this.getWebElement(txtWhere).should('have.value', where);
  }

  validateInformantHistorian(informationReceivedFrom, name) {
    this.getWebElement(cbInformationReceivedFrom).should('have.value', informationReceivedFrom);
    this.getWebElement(txtName).should('have.value', name);
  }
}
export default AdmissionData;
