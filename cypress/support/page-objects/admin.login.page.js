import simsCy from '../sim.cy';
import BasePage from './base.page';

const data = {};
// Sign in
const txtUsername = '#field-input-username';
const txtPassword = '#field-input-password';
const btnLogin = '#loginButton';

// Eols User Lookup
const txtEolsUsername = '#field-input-eolsUsername';
const btnFindUser = '#findUserButton';

// For Course
const selCourse = '#field-input-course-select';
const appId = '#field-input-appid-select';
const btnGo = '#launchBtn';

// For User
const selectActions = '[id="field-input-undefined"]';
const selectUserRow = '#user-list > div.c-els-table__body > div.c-els-table__row';
const selectUserTypeOfRow = 'div:nth-child(2) DIV.c-els-table__cell-content';
const selectButtonOfRow = '#select-user';

//Sherpath
const adminUserNameField = '#username';
const adminPasswordField = '#password';
const eolsUsernameField = '#eolsusername';

const courseSelect = '#courseSelect';
const isbnSelect = '#isbnSelect';

const pendo = 'div[class=_pendo-step-container-size]';
const closePendoButton = 'button[aria-label=Close]';

class LoginPage extends BasePage {
  readDataByEnvironment() {
    simsCy.data('account').then($resp => (data.account = $resp));
  }
  navigateTo(url) {
    cy.visit(data.account.baseUrl + url);
    // .wait(3000)
  }

  userLoginInSuccess() {
    cy.clearLocalStorage();
    this.navigateTo('/admin');

    cy.get(txtUsername)
      .clear()
      .type(Cypress.env('adminUsername'));
    cy.get(txtPassword)
      .clear()
      .type(Cypress.env('adminPassword'));
    cy.get(btnLogin).click();
  }
  eolsUserLookUp(email) {
    cy.get(txtEolsUsername)
      .clear()
      .type(email);
    cy.get(btnFindUser).click();
  }
  selectCourse(course) {
    cy.get(selCourse).select(course);
    cy.wait(20);
    cy.get(appId).select('simsng');
    cy.wait(5);
    cy.get(btnGo)
      .focus()
      .click();
  }
  selectUserByType(type) {
    cy.xpath(`//*[text()="${type}"]/ancestor::tr//button`)
      .eq(0)
      .click({ force: true });
  }

  selectActionLaunch() {
    cy.get(selectActions).select('STUDENT_LAUNCH_ASSIGNMENT');
    cy.get('button')
      .contains('Launch')
      .click();
  }

  selectActionGrading() {
    cy.get(selectActions).select('INSTRUCTOR_GRADE_ASSIGNMENT_LANDING');
    cy.get('button')
      .contains('Launch')
      .click();
  }

  selectActionAddAssignment() {
    cy.get(selectActions).select('INSTRUCTOR_ADD_ASSIGNMENT');
    cy.get('button')
      .contains('Launch')
      .click();
  }

  loginByAdmin() {
    this.readDataByEnvironment();
    this.userLoginInSuccess();
    this.eolsUserLookUp(data.account.email.email_01);
    this.selectUserByType(data.account.type);
    this.selectCourse(data.account.course);
    cy.url().should('include', '/#/launch');
  }

  loginInstructorByAdmin() {
    this.readDataByEnvironment();
    this.userLoginInSuccess();
    this.eolsUserLookUp(data.account.instructor_email);
    if (Cypress.env('TEST_ENV') === 'test4') {
      this.selectUserByType(data.account.instructor_type);
    }
    this.selectCourse(data.account.course);
    cy.url().should('include', '/#/launch');
  }

  loginSherpathAdmin(email, type) {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit(data.account.sherpathUrl);
    cy.get(adminUserNameField)
      .clear()
      .type(Cypress.env('adminUsername'));
    cy.get(adminPasswordField)
      .clear()
      .type(Cypress.env('adminPassword'));
    this.closePendoIfExist();
    cy.get(btnLogin).click();
    cy.get(eolsUsernameField)
      .clear()
      .type(email);
    this.closePendoIfExist();
    cy.get(btnFindUser).click();
    if (Cypress.env('TEST_ENV') === 'stage') {
      cy.xpath(`//*[text()="${type}"]/ancestor::tr//button`)
        .eq(0)
        .click({ force: true });
    } else {
      cy.xpath(`//*[text()="${type}"]/ancestor::tr//button`)
        .last()
        .click({ force: true });
    }
    cy.wait(1000);
    cy.get(courseSelect).select('number:' + data.account.courseId);
    cy.get(isbnSelect).select('9780323751209');
    cy.get(btnGo).click();
  }

  instructorLoginSherpath() {
    this.loginSherpathAdmin(data.account.instructor_email, data.account.instructor_type);
  }

  studentLoginSherpath() {
    this.loginSherpathAdmin(data.account.email.email_01, data.account.type);
  }

  loginToVitalSigns(vitalSignsChart) {
    this.loginByAdmin();
    let vitalSignChartsURL = '/clinical/' + data.account.assessmentId + '/vital-signs/' + vitalSignsChart;
    this.navigateTo(vitalSignChartsURL);
  }

  loginToSystemAssessment(systemAssessmentChart) {
    this.loginByAdmin();
    let systemAssessment = '/clinical/' + data.account.assessmentId + '/patient-charting/system-assessment/' + systemAssessmentChart;
    this.navigateTo(systemAssessment);
  }

  loginToPreClinicalManager(preClinicalChart) {
    this.loginByAdmin();
    let preClinicalManagerUrl = '/clinical/' + data.account.assessmentId + '/pre-clinical-manager/' + preClinicalChart;
    this.navigateTo(preClinicalManagerUrl);
  }

  loginToProviderCharts(providerChart) {
    this.loginByAdmin();
    let providerChartUrl = '/clinical/' + data.account.assessmentId + '/provider-chart/' + providerChart;
    this.navigateTo(providerChartUrl);
  }

  loginToOrderCharts(orderChart) {
    this.loginByAdmin();
    let orderChartUrl = '/clinical/' + data.account.assessmentId + '/orders/' + orderChart;
    this.navigateTo(orderChartUrl);
  }
  /**
   *
   * @param {*} admissionChartName
   * If specified chart name not provided, navigate to Admission History
   */
  loginToAdmissionHistory(admissionChartName) {
    this.loginByAdmin();
    typeof admissionChartName !== 'undefined' ? (admissionChartName = '/' + admissionChartName) : (admissionChartName = '');
    let admissionUrl = '/clinical/' + data.account.assessmentId + '/patient-charting/admission-history' + admissionChartName;
    this.navigateTo(admissionUrl);
  }

  loginToClinicalSetup() {
    this.loginByAdmin();
    this.navigateTo('/clinical/' + data.account.assessmentId + '/clinical-setup');
  }

  /**
   *
   * @param {*} chartName: uri comes after assessment id
   */
  loginToChart(chartName) {
    this.loginByAdmin();
    let url = '/clinical/' + data.account.assessmentId + `${chartName}`;
    this.navigateTo(url);
  }

  selectAssignmentByID(id) {
    cy.xpath(`//span[text()=${id}]`).click();
  }

  selectAssignmentByName(name) {
    cy.xpath(`//div[contains(text(),"${name}")]/ancestor::tr//input`)
      .eq(0)
      .click({ force: true });
  }

  loginBy(email, course, assignment) {
    this.userLoginInSuccess();
    this.eolsUserLookUp(email);
    this.selectUserByType(data.account.type);
    this.selectCourse(course);
    this.selectAssignmentByID(assignment);
    this.selectActionLaunch();
  }

  closePendoIfExist() {
    cy.get('body').then(() => {
      // const pendoEle = Cypress.$(pendo).length
      if (Cypress.$(pendo).length > 0) {
        cy.log('**Going to close Pendo**');
        cy.get(closePendoButton).click();
      } else {
        cy.log('**No Pendo**');
      }
    });
  }
}

export default LoginPage;
