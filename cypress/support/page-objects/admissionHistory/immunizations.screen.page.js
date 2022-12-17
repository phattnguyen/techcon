import searchDropdown from '../../element-helpers/search.dropdown.el';
import textArea from '../../element-helpers/text.area.el';
import checkBox from '../../element-helpers/checkbox.el';
import select from '../../element-helpers/select.el';
import BasePage from '../base.page';

const tetanusDiphtheriaPertussisRadios = new checkBox('[name=tetanusDiphtheriaPertussisOptions]');
const hpvRadios = new checkBox('[name=hpvOptions]');
const varicellaRadios = new checkBox('[name=varicellaOptions]');
const zosterRadios = new checkBox('[name=zosterOptions]');
const mmrRadios = new checkBox('[name=mmrOptions]');
const influenzaRadios = new checkBox('[name=influenzaOptions]');
const pneumococcalRadios = new checkBox('[name=pneumococcalOptions]');
const hepatitisARadios = new checkBox('[name=hepatitisAOptions]');
const hepatitisBRadios = new checkBox('[name=hepatitisBOptions]');
const meningococcalRadios = new checkBox('[name=meningococcalOptions]');

const tetanusDiphtheriaPertussisDateReceived = new textArea('#field-input-tetanusDiphtheriaPertussisDateReceived');
const hpvDateReceived = new textArea('#field-input-hpvDateReceived');
const varicellaDateReceived = new textArea('#field-input-varicellaDateReceived');
const zosterDateReceived = new textArea('#field-input-zosterDateReceived');
const mmrDateReceived = new textArea('#field-input-mmrDateReceived');
const influenzaDateReceived = new textArea('#field-input-influenzaDateReceived');
const pneumococcalDateReceived = new textArea('#field-input-pneumococcalDateReceived');
const hepatitisADateReceived = new textArea('#field-input-hepatitisADateReceived');
const hepatitisBDateReceived = new textArea('#field-input-hepatitisBDateReceived');
const meningococcalDateReceived = new textArea('#field-input-meningococcalDateReceived');

class ImmunizationsScreen extends BasePage {
  selectTetanusDiphtheriaPertussis(option) {
    tetanusDiphtheriaPertussisRadios.selectRadioByLabel(option);
  }

  selectHpv(option) {
    hpvRadios.selectRadioByLabel(option);
  }

  selectVaricellaRadios(option) {
    varicellaRadios.selectRadioByLabel(option);
  }

  selectZosterRadios(option) {
    zosterRadios.selectRadioByLabel(option);
  }

  selectMmrs(option) {
    mmrRadios.selectRadioByLabel(option);
  }

  selectInfluenza(option) {
    influenzaRadios.selectRadioByLabel(option);
  }

  selectPneumococcal(option) {
    pneumococcalRadios.selectRadioByLabel(option);
  }

  selectHepatitisA(option) {
    hepatitisARadios.selectRadioByLabel(option);
  }

  selectHepatitisB(option) {
    hepatitisBRadios.selectRadioByLabel(option);
  }

  selectMeningococcal(option) {
    meningococcalRadios.selectRadioByLabel(option);
  }

  inputTetanusDiphtheriaPertussisDateReceived(date) {
    tetanusDiphtheriaPertussisDateReceived.inputText(date);
  }

  inputHpvDateReceived(date) {
    hpvDateReceived.inputText(date);
  }

  inputVaricellaDateReceived(date) {
    varicellaDateReceived.inputText(date);
  }

  inputZosterDateReceived(date) {
    zosterDateReceived.inputText(date);
  }

  inputMmrDateReceived(date) {
    mmrDateReceived.inputText(date);
  }

  inputInfluenzaDateReceived(date) {
    influenzaDateReceived.inputText(date);
  }

  inputPneumococcalDateReceived(date) {
    pneumococcalDateReceived.inputText(date);
  }

  inputHepatitisADateReceived(date) {
    hepatitisADateReceived.inputText(date);
  }

  inputHepatitisBDateReceived(date) {
    hepatitisBDateReceived.inputText(date);
  }

  inputMeningococcalDateReceived(date) {
    meningococcalDateReceived.inputText(date);
  }

  verifySelectedTetanusDiphtheriaPertussis(option) {
    tetanusDiphtheriaPertussisRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedHpv(option) {
    hpvRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedVaricella(option) {
    varicellaRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedZosterRadios(option) {
    zosterRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedMmr(option) {
    mmrRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedInfluenza(option) {
    influenzaRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedPneumococcal(option) {
    pneumococcalRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedHepatitisA(option) {
    hepatitisARadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedHepatitisB(option) {
    hepatitisBRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifySelectedMeningococcal(option) {
    meningococcalRadios.verifyRadioButtonIsCheckedByLabel(option);
  }

  verifyTetanusDiphtheriaPertussisDateReceived(date) {
    tetanusDiphtheriaPertussisDateReceived.verifyTextFieldValue(date);
  }

  verifyHpvDateReceived(date) {
    hpvDateReceived.verifyTextFieldValue(date);
  }

  verifyVaricellaDateReceived(date) {
    varicellaDateReceived.verifyTextFieldValue(date);
  }

  verifyZosterDateReceived(date) {
    zosterDateReceived.verifyTextFieldValue(date);
  }

  verifyMmrDateReceived(date) {
    mmrDateReceived.verifyTextFieldValue(date);
  }

  verifyInfluenzaDateReceived(date) {
    influenzaDateReceived.verifyTextFieldValue(date);
  }

  verifyPneumococcalDateReceived(date) {
    pneumococcalDateReceived.verifyTextFieldValue(date);
  }

  verifyHepatitisADateReceived(date) {
    hepatitisADateReceived.verifyTextFieldValue(date);
  }

  verifyHepatitisBDateReceived(date) {
    hepatitisBDateReceived.verifyTextFieldValue(date);
  }

  verifyMeningococcalDateReceived(date) {
    meningococcalDateReceived.verifyTextFieldValue(date);
  }

  verifyImmunizationsFrequency(type, frenquncy) {
    cy.get('h2')
      .contains(type)
      .siblings('p')
      .contains(frenquncy)
      .scrollIntoView()
      .should('be.visible');
  }
}

export default ImmunizationsScreen;
