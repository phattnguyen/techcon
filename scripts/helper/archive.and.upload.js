const reportHelper = require('./report.helper');

const { SKIP_S3 } = process.env;
const skipS3 = SKIP_S3 === 'true' || SKIP_S3 === '1';

if (!skipS3) {
  reportHelper.archiveReportAndUpload().catch((err) => {
    console.log('can not archive report and upload to S3');
    console.log(err);
  });
}
