const uuid = require("uuid");
const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (jobPostData, businessName) => {
	console.log("In the save to DB function", jobPostData);
  const date = JSON.stringify(new Date());
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      title: jobPostData.title,
      shortDescription: jobPostData.shortDescription,
      longDescription: jobPostData.longDescription,
      addedAt: date
    }
  };

  dynamoDb.put(params, error => {
    if (error) {
      console.error(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
      return Promise.reject(
        `Error saving data to DynamoDB: ${JSON.stringify(error)}`
      );
    } else {
      return Promise.resolve(params.Item);
    }
  });  
};