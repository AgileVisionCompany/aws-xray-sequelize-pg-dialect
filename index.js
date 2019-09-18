const AWSXRay = require("aws-xray-sdk");
const pg = require("pg");

module.exports = AWSXRay.capturePostgres(pg);
