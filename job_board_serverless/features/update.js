#update.js

const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DcoumentClient();

dynamoDB.put(params, error => {
if (error) {
	console.error('Invalid format sir/mam!: ${JSON.stringify(error)}')
 } else {
    return Promise
 }
 })
};
