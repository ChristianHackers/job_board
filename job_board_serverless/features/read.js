'use strict';

module.exports.getJobPost = (event, context, callback) => {
	const message = 'Thanks for hitting the job board get route. Have a nice day :)'
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    }),
  };

  callback(null, response);
};