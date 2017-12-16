'use strict';
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'job-posts'
  };

  module.exports.getJobPost = (event, context, callback) => {
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

// module.exports.getJobPost = (event, context, callback) => {
// 	const message = 'Thanks for hitting the job board get route. Have a nice day :)'
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: message
//     }),
//   };

//   callback(null, response);
// };