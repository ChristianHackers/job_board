'use strict';
const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: process.env.DYNAMODB_TABLE
  };

module.exports.getJobPosts = (event, context, callback) => {
  dynamoDB.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch account'));
      return;
    }

    const response = {
      statusCode: 200, 
      body: JSON.stringify(result.Items)
    }
    callback(null, response)
  });
}