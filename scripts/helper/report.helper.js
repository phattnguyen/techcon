const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const dayjs = require('dayjs');

const upload = require('./s3.upload.js');

const doArchive = () =>
  new Promise((resolve, reject) => {
    const reportPath = path.join(__dirname, '../..', 'cypress/reports/mochareports');
    if (!fs.existsSync(reportPath)) {
      reject('report folder is not existing');
      return;
    }
    const reportTime = dayjs().format('YYYYMMDD-HHmm');
    const reportZipFile = path.join(__dirname, '../..', `cypress/reports/simsng-automation-${reportTime}.zip`);
    let output = fs.createWriteStream(reportZipFile);
    let archive = archiver('zip');

    output.on('close', async () => {
      console.log('report zip is created successfully');
      resolve(reportZipFile);
    });

    output.on('end', function (ctx, app) {
      console.log('Data has been drained');
    });

    archive.on('error', function (err) {
      throw err;
    });

    archive.pipe(output);
    archive.directory(reportPath + '/', false);
    archive.finalize();
  });

const archiveReportAndUpload = () =>
  doArchive()
    .then(
      (reportFilePath) =>
        new Promise((resolve) => {
          fs.readFile(reportFilePath, (err, data) => {
            if (err) throw err;
            const fileName = path.basename(reportFilePath);
            upload.uploadToS3(data, fileName, 'zip').then(resolve);
          });
        })
    )
    .catch((err) => console.log(err));

module.exports = { archiveReportAndUpload };
