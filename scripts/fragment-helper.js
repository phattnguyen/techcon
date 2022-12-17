const apiHelper = require('./helper/api.helper');

const cypressEnv = require('../cypress.json').env.TEST_ENV;
const env = cypressEnv || 'stage';
const targetServiceURL = `https://eolsapi-${env}.apps.els-ols.com`;

const accountJson = require(`../cypress/fixtures/${env}/account.json`);
const clinicalFragmentJson = require(`../cypress/fixtures/${env}/clinical-fragment.json`);
// const targetAssessmentId = accountJson.assessmentId; // 61508

const loginAdmin = () => apiHelper.post(`${targetServiceURL}/login-service/login`, { data: { username: 'eolsadmin', password: 'testing1' } });

const getAdminToken = () => loginAdmin().then(apiRes => apiRes.data.token);

const masqueradeUserEols = userData =>
  getAdminToken().then(adminToken => apiHelper.post(`${targetServiceURL}/token-service/masquerade`, { token: adminToken, data: userData }).then(res => res.data));

const findUserByMailEols = mail =>
  getAdminToken()
    .then(adminToken => apiHelper.get(`${targetServiceURL}/apiv1/eolsUser/list/byEmail/${mail}`, { token: adminToken }))
    .then(res => res.data);

const findStudentByMail = mail => findUserByMailEols(mail).then(data => data.find(account => account.type === 'Stu'));

const getStudentToken = mail =>
  findStudentByMail(mail)
    .then(userData => masqueradeUserEols(userData))
    .then(data => data.token);

const findChartId = (assessmentId, token) => {
  const url = `${targetServiceURL}/api/simchart/assignment/assessment/${assessmentId}`;
  return apiHelper
    .get(url, { token })
    .then(res => res.data.simChartId)
    .catch(err => console.log(err.message));
};

const deleteFragments = (chartId, token) => {
  const url = `${targetServiceURL}/api/simchart/chartpersistence/charts/delete`;
  const chartIds = { chartIds: [chartId] };
  return apiHelper.delete(url, { token, data: chartIds }).catch(err => console.log(err.message));
};

const deleteChartFragments = targetAssessmentId =>
  getAdminToken()
    .then(token => findChartId(targetAssessmentId, token).then(chartId => deleteFragments(chartId, token).then(() => chartId)))
    .then(chartId => console.log(`deleted fragments of chart id ${chartId}`))
    .catch(err => console.log(`can not delete fragments ${err.message}`));

const setupClinicalSetup = targetAssessmentId => {
  return getStudentToken(accountJson.email.email_01).then(token =>
    findChartId(targetAssessmentId, token).then(chartId => {
      const url = `${targetServiceURL}/api/simchart/chartpersistence/chart/${encodeURIComponent(chartId)}/fragment/CLINSETUP_000`;
      return apiHelper.post(url, { token, data: clinicalFragmentJson });
    })
  );
};

module.exports = { deleteChartFragments, setupClinicalSetup };
