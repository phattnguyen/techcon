const AWS = require('aws-sdk');

const { AWS_BUCKET, AWS_ACCESS_ID, AWS_SECRET_KEY, AWS_REGION, MOCK_S3, AWS_ENDPOINT } = process.env;

const awsConfig = {};
if (AWS_REGION) {
  awsConfig.region = AWS_REGION;
}

if (MOCK_S3 === 'true' || MOCK_S3 === '1') {
  awsConfig.endpoint = AWS_ENDPOINT;
  awsConfig.s3ForcePathStyle = true;
}

if (Object.keys(awsConfig).length) {
  AWS.config.update(awsConfig);
}

function uploadToS3(file, name, type) {
  if (!AWS_BUCKET) {
    return Promise.resolve();
  }
  console.log('prepare to upload filename', name, 'to s3');
  return new Promise((resolve) => {
    const s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_ID,
      secretAccessKey: AWS_SECRET_KEY,
      Bucket: AWS_BUCKET,
    });
    const params = {
      Bucket: AWS_BUCKET,
      Key: name,
      Body: file,
      ACL: 'public-read',
      ContentType: type
    };
    console.log('s3 params');
    console.log(params);
    s3.upload(params, (err, data) => {
      if (err) throw err;
      console.log('upload to s3 successfully');
      resolve();
    });
  });
}

module.exports = { uploadToS3 };
