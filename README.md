# simchart-automation-testing

## Introduction

This is a repo for all of sims automation testing 

## Requirements

* NodeJS **v12.19.0**

## Getting Started

Run `npm install` to install all modules

To develop or run a single test file, execute the command:
```
npm run open
```

To run all tests
```
set SKIP_S3=true // skip upload the result to Amazon S3
npm test
```

Run all tests inside docker container without uploading the result
```
docker build -t simchart-automation .
docker run -e "SKIP_S3=true" simchart-automation:latest
```

Run all tests on Openshift with specific front-end app environment
```
// test against stage (default)
oc -n build start-build simchart-automation-testing --env SOURCE_REF=develop --env REBUILD=true --follow

// test against test4
oc -n build start-build simchart-automation-testing --env SOURCE_REF=develop --env APP_TEST_ENV=test4 --env REBUILD=true --follow
```

## Environment variables

```
APP_TEST_ENV: stage | test4 | test1 (default: stage)
SKIP_S3: true or false, flag to skip upload result to S3 
AWS_REGION: us-east-1, us-east-2, us-west-1, us-west-2 
AWS_BUCKET: bucket to upload with write permission 
AWS_ACCESS_ID: Amazon access key 
AWS_SECRET_KEY: Amazon secret key
```

## Examples

if Amazon S3 bucket is ready, can run automation and upload report with sample command 
```
// on window
set AWS_REGION=us-east-1
set AWS_BUCKET=simsng-automation-report
set AWS_ACCESS_ID=xxx 
set AWS_SECRET_KEY=xxx
npm test

// use docker
docker run -e "AWS_REGION=us-east-1" -e "AWS_BUCKET=simsng-automation-report" -e "AWS_ACCESS_ID=xxx" -e "AWS_SECRET_KEY=xxx" simchart-automation:latest
```

## Report

Report path: `\cypress\reports\mochareports\report.html`
Zip file upload to S3: `simsng-automation-{reportTime}.zip`
Screenshot tests: `\cypress\screenshots`
Video: `\cypress\videos`
