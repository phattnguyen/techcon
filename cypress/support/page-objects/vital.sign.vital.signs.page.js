const simsCy = require('../sim.cy');
const vitalSignTable = require('./vital.sign.table.page');

const txtFahrenheit = '#field-input-temperatureFahrenheit';
const txtCelcius = '#field-input-temperatureCelsius';
const cbTempSite = '#field-input-temperatureSite';
const txtPulse = '#field-input-pulse';
const cbPulseSite = '#field-input-pulseSite';
const txtRespiration = '#field-input-respiration';
const txtSystolic = '#field-input-bloodPressureSystolic';
const txtDiastolic = '#field-input-bloodPressureDiastolic';
const cbSystolicSite = '#field-input-bloodPressureSite'; //dup
const cbDiastolicSite = '#field-input-bloodPressurePosition'; //dup
const txtSaturation = '#field-input-oxygenSaturation';
const cbSaturationSite = '#field-input-oxygenSite';
const txtSaturationOther = '#field-input-oxygenSiteOther';
const txtOxyDeliveryMethodOther = '#field-input-oxygenDeliveryMethodLiterOther';
const rdRoomAir = '#field-input-oxygenDelivery-roomAir';
const oxygenAmount = '#field-input-oxygenAmountLiter';
const oxygenAmountPercent = '#field-input-oxygenAmountPercent';
const rdOxygenLiter = '#field-input-oxygenDelivery-oxygenMin';
const rdOxygenPercent = '#field-input-oxygenDelivery-oxygenPercent';
const txtNotes = '#field-input-note';
const chartName = '.chart-input__header';

const lbFahrenheit = '#chart-field-label-temperatureFahrenheit';
const lbTempSite = '#chart-field-label-temperatureSite';
const lbPulse = '#chart-field-label-pulse';
const lbPulseSite = '#chart-field-label-pulseSite';
const lbRespiration = '#chart-field-respiration';
const lbSystolic = '#chart-field-label-bloodPressureSystolic';
const lbDiastolic = '#chart-field-label-bloodPressureDiastolic';
const lbSystolicSite = '#field-input-bloodPressureSite'; //dup
const lbDiastolicSite = '#field-input-bloodPressurePosition'; //dup
const lbSaturation = '#chart-field-label-oxygenSaturation';
const lbSaturationSite = '#chart-field-label-oxygenSite';
const lbOxygenDeliveryMethod = '#field-input-oxygenDeliveryMethodLiter';
const lbOxygenDeliveryMethodPercent = '#field-input-oxygenDeliveryMethodPercent';
const lbOxygenSiteOther = '#chart-field-label-oxygenSiteOther';
const lbOxygenDeliverMethodLiterOther = '#field-input-oxygenDeliveryMethodLiterOther';

//errorMessage & Tooltip:
const tooltipTempSite = '#chart-field-errors-temperatureSite';
const tooltipPulseSite = '#chart-field-errors-pulseSite';
const tooptipSystolicSite = '#chart-field-errors-bloodPressureSite';
const tooltipDiastolicSite = '#chart-field-errors-bloodPressurePosition';
const tooltipSaturationSite = '#chart-field-errors-oxygenSite';
const tooltipDiastolic = '#chart-field-errors-bloodPressureDiastolic';
const tooltipSystolic = '#chart-field-errors-bloodPressureSystolic';
const tooltipTemp = '#chart-field-errors-temperatureFahrenheit';
const tooltipPulse = '#chart-field-errors-pulse';
const tooltipSaturation = '#chart-field-errors-oxygenSaturation';
const tooltipErrorCloseBtn = '.error-tooltip__close-btn';

const tooltipOxyAmntLiter = '#chart-field-errors-oxygenAmountLiter';
const tooltipOxyDeliverMethodLiter = '#chart-field-errors-oxygenDeliveryMethodLiter';
const tooltipOxygenDeliveryMethodLiterOther = '#chart-field-errors-oxygenDeliveryMethodLiterOther';
const boxTopErrorArea = '.u-els-anchorize';
const errorMess = '.u-els-color-error';

//Left menu
const leftMenu = '.nav__item__label';

//Before you leave popup modal
const title = '//h3[text()="Before you Leave..."]';
const content = '//p[text()="This page contains unsaved changes. Do you wish to leave this page?"]';
const closeIcon = '//button[@class="u-els-anchorize c-els-modal__close"]';

//Top
const errorCard = '#error-card';
const datePicker = 'div[class=c-datepicker-input]>input';
const timeSetting = 'div[class=u-els-margin-left-1o2]>input';
const saveDateTimeSeting = '//div[@class="u-els-margin-left"]/button';
const closeDateTimeSettingBtn = '.charting-datetime__close-wrapper';
const chartDateTimeLabel = '[class="o-els-flex-layout u-els-margin-right o-els-flex-layout--middle"]>div:first-child';

const vitalSignsPage = {
  // tooltip error
  getTopError: () => cy.get(boxTopErrorArea),
  getTooltipCloseBtn: () => cy.get(tooltipErrorCloseBtn),
  getErrorMsg: () => cy.get(errorMess),
  gettooltipTempSite: () => cy.get(tooltipTempSite),
  gettooltipPulseSite: () => cy.get(tooltipPulseSite),
  gettooptipSystolicSite: () => cy.get(tooptipSystolicSite),
  gettooltipDiastolicSite: () => cy.get(tooltipDiastolicSite),
  gettooltipSaturationSite: () => cy.get(tooltipSaturationSite),
  gettooltipDiastolic: () => cy.get(tooltipDiastolic),
  gettooltipSystolic: () => cy.get(tooltipSystolic),
  gettooltipTemp: () => cy.get(tooltipTemp),
  gettooltipPulse: () => cy.get(tooltipPulse),
  gettooltipSaturation: () => cy.get(tooltipSaturation),
  gettooltipOxyAmntLiter: () => cy.get(tooltipOxyAmntLiter),
  gettooltipOxyDeliverMethodLiter: () => cy.get(tooltipOxyDeliverMethodLiter),
  gettooltiptooltipOxygenDeliveryMethodLiterOther: () => cy.get(tooltipOxygenDeliveryMethodLiterOther),
  getChartName: () => cy.get(chartName, { timeout: 30000 }),
  getBeforeYouLeavePopupTitle: () => cy.xpath(title),
  getBeforeYouLeavePopupContent: () => cy.xpath(content),
  getCloseModalIcon: () => simsCy.getCloseModalIcon(),
  getlbTempSite: () => cy.get(lbTempSite),
  getlbPulseSite: () => cy.get(lbPulseSite),
  getlbSystolicSite: () => cy.get(lbSystolicSite),
  getlbDiastolicSite: () => cy.get(lbDiastolicSite),
  getlbSaturationSite: () => cy.get(lbSaturationSite),
  getTextSaturationOther: () => cy.get(txtSaturationOther),
  getTextOxyDeliveryMethodOther: () => cy.get(txtOxyDeliveryMethodOther),
  getlbOxygenSiteOther: () => cy.get(lbOxygenSiteOther),
  getlbOxygenLiterOther: () => cy.get(lbOxygenDeliverMethodLiterOther),
  getlbOxygenDeliveryMethodPercent: () => cy.get(lbOxygenDeliveryMethodPercent),
  getErrorCard: () => cy.get(errorCard),
  getFahrenheit: () => cy.get(txtFahrenheit),
  getCelcius: () => cy.get(txtCelcius),
  getTempSite: () => cy.get(cbTempSite),
  getPulse: () => cy.get(txtPulse),
  getPulseSite: () => cy.get(cbPulseSite),
  getRespiration: () => cy.get(txtRespiration),
  getSystolic: () => cy.get(txtSystolic),
  getDiastolic: () => cy.get(txtDiastolic),
  getSystolicSite: () => cy.get(cbSystolicSite),
  getDiastolicSite: () => cy.get(cbDiastolicSite),
  getSaturation: () => cy.get(txtSaturation),
  getSaturationSite: () => cy.get(cbSaturationSite),
  getRoomAir: () => cy.get(rdRoomAir),
  getOxygenAmountOf: () => cy.get(oxygenAmount),
  getOxygenAmountOfPercent: () => cy.get(oxygenAmountPercent),
  getOxygenDeliveryMethod: () => cy.get(lbOxygenDeliveryMethod),
  getTextNotes: () => cy.get(txtNotes),
  getOxygenDelivery: method => cy.xpath(`//span[contains(text(),'${method}')]`),
  navLeftMenuByName: name => cy.get(leftMenu).contains(name),
  getDatePicker: () => cy.get(datePicker),
  getTimeSetting: () => cy.get(timeSetting),
  getCloseDateTimeSetting: () => cy.get(closeDateTimeSettingBtn),
  getSaveDateTimeSetting: () => cy.xpath(saveDateTimeSeting),

  //=========================================methods====================================//
  vitalSignInputFahrenheit: fDegree => {
    vitalSignsPage.getFahrenheit().clear({ force: true });
    vitalSignsPage.getFahrenheit().type(fDegree);
  },
  vitalSignInputRespiration: resp => {
    vitalSignsPage.getRespiration().clear({ force: true });
    vitalSignsPage.getRespiration().type(resp);
  },
  vitalSignInputPulse: pulse => {
    vitalSignsPage.getPulse().clear({ force: true });
    vitalSignsPage.getPulse().type(pulse);
  },
  vitalSignInputSystolic: systolic => {
    vitalSignsPage.getSystolic().clear({ force: true });
    vitalSignsPage.getSystolic().type(systolic);
  },
  vitalSignInputDiastolic: diastolic => {
    vitalSignsPage.getDiastolic().clear({ force: true });
    vitalSignsPage.getDiastolic().type(diastolic);
  },
  vitalSignInputSaturation: sat => {
    vitalSignsPage.getSaturation().clear({ force: true });
    vitalSignsPage.getSaturation().type(sat);
  },
  vitalSignInputCelcius: cDegree => vitalSignsPage.getCelcius().type(cDegree),
  vitalSignInputNotes: notes => vitalSignsPage.getTextNotes().type(notes),
  vitalSignInputSaturationOther: other => vitalSignsPage.getTextSaturationOther().type(other),
  vitalSignSelectTempSite: site => vitalSignsPage.getTempSite().select(site),
  vitalSignSelectPulseSite: site => vitalSignsPage.getPulseSite().select(site),
  vitalSignSelectSystolicSite: site => vitalSignsPage.getSystolicSite().select(site, { force: true }),
  vitalSignSelectDiastolicPosition: site => vitalSignsPage.getDiastolicSite().select(site, { force: true }),
  vitalSignSelectSaturationSite: site => vitalSignsPage.getSaturationSite().select(site),
  vitalSignSelectOxyDeliver: deliver => vitalSignsPage.getOxygenDelivery(deliver).click(),
  vitalSignSelectOxyDeliverMethod: method => vitalSignsPage.getOxygenDeliveryMethod().select(method),
  vitalSignSelectOxyDeliverMethodPercentage: method => vitalSignsPage.getlbOxygenDeliveryMethodPercent().select(method, { force: true }),
  vitalSignInputOxygenAmount: amount => vitalSignsPage.getOxygenAmountOf().type(amount),
  vitalSignInputOxygenPercent: percentage => vitalSignsPage.getOxygenAmountOfPercent().type(percentage),

  vitalSignSaveChange: () => simsCy.clickSaveChanges(),
  vitalSignDiscardChange: () => simsCy.clickDiscardChanges(),
  vitalSignCancel: () => simsCy.clickCancel(),
  vitalSignOk: () => simsCy.clickOkButton(),
  clickEditDateTimeButton: () => simsCy.getEditButton().click(),
  setDateTimeToCurrent: () => simsCy.getSetToCurrentButton().click(),
  saveDateTimeSetting: () => vitalSignsPage.getSaveDateTimeSetting().click(),
  navigateLeftMenuByName: name => vitalSignsPage.navLeftMenuByName(name).click(),
  clickCloseModalIcon: () => vitalSignsPage.getCloseModalIcon().click(),
  clickStayOnPageBtn: () => simsCy.getStayOnPageBtn().click(),
  clickLeaveThisPageBtn: () => simsCy.getLeaveThisPageBtn().click(),
  closeDateTimeSetting: () => vitalSignsPage.getCloseDateTimeSetting().click({ force: true }),
  closeErrorTooltip: () =>
    vitalSignsPage.getTooltipCloseBtn().each($el => {
      cy.wrap($el).click();
    }),
  setTime: time => {
    vitalSignsPage.getTimeSetting().clear();
    vitalSignsPage.getTimeSetting().type(time);
  },

  verifySaveChangesSuccessfully: () => simsCy.getToast().should('have.text', 'Saved successfully'),
  verifyDeleteSuccessfully: () => simsCy.getToast().should('have.text', 'Deleted successfully'),
  verifyFahrenheitToCelsiusConversion: (fDegree, cDegree) => {
    vitalSignsPage.getFahrenheit().clear();
    vitalSignsPage.getCelcius().clear();
    vitalSignsPage.getFahrenheit().type(fDegree);
    vitalSignsPage.getCelcius().click();
    vitalSignsPage.getCelcius().should('have.value', cDegree);
  },
  verifyCelsiusToFahrenheitConversion: (cDegree, fDegree) => {
    vitalSignsPage.getCelcius().clear();
    vitalSignsPage.getFahrenheit().clear();
    vitalSignsPage.getCelcius().type(cDegree);
    vitalSignsPage.getFahrenheit().dblclick();
    vitalSignsPage.getFahrenheit().should('have.value', fDegree);
  },
  verifyFahrenheitValue: val => vitalSignsPage.getFahrenheit().should('have.value', val),
  verifyRespirationValue: val => vitalSignsPage.getRespiration().should('have.value', val),
  verifyPulseValue: val => vitalSignsPage.getPulse().should('have.value', val),
  verifySystolicValue: val => vitalSignsPage.getSystolic().should('have.value', val),
  verifyDiastolicValue: val => vitalSignsPage.getDiastolic().should('have.value', val),
  verifyNotesValue: val => vitalSignsPage.getTextNotes().should('have.text', val),
  verifyErrorMsg: msg => vitalSignsPage.getErrorMsg().should('contain.text', msg),
  verifyNoErrorMsg: () => vitalSignsPage.getErrorMsg().should('not.exist'),
  verifyChartName: name => vitalSignsPage.getChartName().should('have.text', name),
  verifyBeforeYouLeavePopupDisplay: () => {
    vitalSignsPage.getBeforeYouLeavePopupContent().should('be.visible');
    vitalSignsPage.getBeforeYouLeavePopupTitle().should('be.visible');
  },
  verifyErrorCardDisplayed: () => {
    vitalSignsPage.getErrorCard().should('exist');
  },

  deleteDataIfExists: () => vitalSignTable.deleteRecordIfExists(),

  resetChartDateAndTimeToCurrent() {
    cy.get(chartDateTimeLabel)
      .next()
      .then($el => {
        const text = $el.text();
        if (text !== 'Current Day and Time') {
          cy.log('Reset to current date and time');
          vitalSignsPage.setDateTimeToCurrent();
          simsCy.verifySavedSuccessfully();
        } else {
          cy.log('Chart date and time already current');
        }
      });
  }
};

module.exports = vitalSignsPage;
