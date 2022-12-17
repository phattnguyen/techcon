const simsCy = require('../sim.cy');
const vitalSignTable = require('./vital.sign.table.page');

const heightLabel = 'div[class="chart-input__section-title chart-input__section-title--first"]';
const weightLabel = '.chart-input__section-title';
const heightFeetInput = '#field-input-heightFeet';
const heightInchInput = '#field-input-heightInch';
const heightCmInput = '#field-input-heightCm';

const admissionWeightRadion = 'input[value=weightAdmission]';
const weightPoundInput = '#field-input-weightPound';
const weightOuncesInput = '#field-input-weightOunce';
const weightKgInput = '#field-input-weightKg';
const weightGramInput = '#field-input-weightGram';
const weightMethodSelect = '#field-input-weightMethod';

//errors
const weightPoundError = '#chart-field-errors-weightPound';
const weightMethodError = '#chart-field-errors-weightMethod';

const noteInput = '#field-input-note';

const heightWeightPage = {
  //Height section
  getHeightLabel: () => cy.get(heightLabel),
  getFeet: () => cy.get(heightFeetInput, { timeout: 60000 }),
  getInches: () => cy.get(heightInchInput),
  getCm: () => cy.get(heightCmInput),
  getAdmissionWeight: () => cy.get(admissionWeightRadion, { timeout: 60000 }),
  getNote: () => cy.get(noteInput, { timeout: 60000 }),

  //Weight section
  getWeightLabel: () => cy.get(weightLabel),
  getPound: () => cy.get(weightPoundInput),
  getOunces: () => cy.get(weightOuncesInput),
  getKgs: () => cy.get(weightKgInput),
  getGrams: () => cy.get(weightGramInput),
  getWeightMethod: () => cy.get(weightMethodSelect, { timeout: 60000 }),

  //Chart History Table
  getChartHistoryTable: () => cy.get('.chart-history-table'),
  getChartHistoryRow: () => cy.get('.chart-history-table>div>div.c-els-table>div.c-els-table__body'),

  //Toast Message
  getToast: () => cy.get('.c-els-toast__content div', { timeout: 60000 }),

  //Errors
  getWeightPoundErr: () => cy.get(weightPoundError),
  getWeightMethodErr: () => cy.get(weightMethodError),

  // get TableHistory Rows:
  validateTableHistoryValue(tableCellValue) {
    this.getChartHistoryRow().should($tableRow => {
      const $tableColumns = $tableRow.find('div');
      expect($tableColumns).to.contain(tableCellValue);
    });
  },
  //Input Height:
  enterFeet(feet) {
    this.getFeet().clear();
    if (feet != null) {
      this.getFeet(feet).type(feet);
    }
  },

  enterInchs(i) {
    this.getInches().clear();
    this.getInches().type(`${i}{enter}`);
  },

  enterCm(cm) {
    this.getCm().type(cm);
    this.getFeet().click();
  },
  //Input Weight:
  enterWeight(admissionWeightstate, pound, weightMethod) {
    if (admissionWeightstate == 'yes') {
      if (pound != null && weightMethod != null) {
        heightWeightPage.heightWeightClickAdmission();
        this.getPound().type(pound);
        heightWeightPage.heightWeightSelectMethod(weightMethod);
      }
    } else {
      if (pound != null && weightMethod != null) {
        this.getPound().type(pound);
        heightWeightPage.getWeightMethod().select(weightMethod);
      }
    }
  },

  enterPound(p) {
    this.getPound().clear();
    this.getPound().type(p);
  },

  enterOunces(oun) {
    this.getOunces().clear();
    this.getOunces().type(oun);
  },

  enterKilogram(kg) {
    this.getKgs().clear();
    this.getKgs().type(kg);
  },

  ennterGrams(gr) {
    this.getGrams().clear();
    this.getGrams().type(gr);
  },

  heightWeightSelectMethod: method => {
    heightWeightPage.getWeightMethod().select(method);
  },
  enterNote(note) {
    this.getNote().clear();
    this.getNote().type(note);
  },
  clearNote() {
    this.getNote().clear();
  },

  heightWeightClickAdmission: () => heightWeightPage.getAdmissionWeight().click({ force: true }),
  heightWeightSaveChange: () => simsCy.clickSaveChanges(),
  heightWeightDiscardChange: () => simsCy.clickDiscardChanges(),
  heightWeightCancel: () => simsCy.clickCancel(),
  heightWeightClickOk: () => simsCy.clickOkButton(),

  //Validate Toast Message displays when saving
  validateHeightWeightSaved(message) {
    this.getToast().should($e => {
      // should show toast message
      expect($e).to.contain(message);
    });
  },

  verifyAllFieldsDisplayed: () => {
    heightWeightPage.getHeightLabel().should('have.text', 'Height');
    // heightWeightPage.getWeightLabel().should('have.text','Weight');
    simsCy.verifyTextPresents('Weight');
    heightWeightPage.getFeet().should('exist');
    heightWeightPage.getInches().should('exist');
    heightWeightPage.getCm().should('exist');
    simsCy.verifyTextPresents('Admission Weight');
    heightWeightPage.getAdmissionWeight().should('not.be.checked');
    heightWeightPage.getPound().should('exist');
    heightWeightPage.getOunces().should('exist');
    heightWeightPage.getKgs().should('exist');
    heightWeightPage.getGrams().should('exist');
    heightWeightPage.getNote().should('exist');
    heightWeightPage.getWeightMethod().should('exist');
  },

  verifySaveChangesSuccessfully: () => simsCy.getToast().should('have.text', 'Saved successfully'),

  verifyFeetFieldValue: val => heightWeightPage.getFeet().should('have.value', val),
  verifyInchsFieldValue: val => heightWeightPage.getInches().should('have.value', val),
  verifyCmFieldValue: val => heightWeightPage.getCm().should('have.value', val),
  verifyPoundFieldValue: val => heightWeightPage.getPound().should('have.value', val),
  verifyOuncesFieldValue: val => heightWeightPage.getOunces().should('have.value', val),
  verifyKgFieldValue: val => heightWeightPage.getKgs().should('have.value', val),
  verifyGramFieldValue: val => heightWeightPage.getGrams().should('have.value', val),
  verifyNoteFieldValue: val => heightWeightPage.getNote().should('have.text', val),

  verifyFeetHasValue: yes =>
    heightWeightPage.getFeet().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyInchHasValue: yes =>
    heightWeightPage.getInches().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyPoundHasValue: yes =>
    heightWeightPage.getPound().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyOuncesHasValue: yes =>
    heightWeightPage.getOunces().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyKgHasValue: yes =>
    heightWeightPage.getKgs().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyGramHasValue: yes =>
    heightWeightPage.getGrams().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyNotesHasValue: yes =>
    heightWeightPage.getNote().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),
  verifyCmHasValue: yes =>
    heightWeightPage.getCm().then(el => {
      if (yes) {
        expect(el.val()).not.empty;
      } else {
        expect(el.val()).empty;
      }
    }),

  verifyWeightPoundError: err => heightWeightPage.getWeightPoundErr().should('have.text', err),
  verifyWeightMethodError: err => heightWeightPage.getWeightMethodErr().should('have.text', err),

  focusFeetField: () => heightWeightPage.getFeet().focus(),

  deleteDataIfExists: () => vitalSignTable.deleteRecordIfExists()
};
module.exports = heightWeightPage;
