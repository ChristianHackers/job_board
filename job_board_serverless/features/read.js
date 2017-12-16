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
};

// module.exports.getJobPost = (event, context, callback) => {
// 	const todo_id = event.pathParameters.id;
//   dynamoDB.scan(params, (error, result) => {
//     if (error) {
//       console.error(error);
//       callback(new Error('Couldn\'t fetch account'));
//       return;
//     }

//     const response = {
//       statusCode: 200, 
//       body: JSON.stringify(result.Items)
//     }
//     callback(null, response)
//   });
// };

module.exports.getJobPost = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  // fetch todo from the database
  dynamoDB.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};