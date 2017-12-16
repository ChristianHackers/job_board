const saveJobPost = require("./saveJobPost.js");

module.exports.createJobPost = (event, context, callback) => {
	// we need to parse the data that is being sent to the api
	// event.body contains the data that a client sends to the api
	// so now we can access any of the data within the event body via dot notation, now that we've converted it from JSON to a javascript object
	// what our api expects is that within the event body there will be an object with a property 'title', and title has text as it's value
  const jobPostData = JSON.parse(event.body);
  saveJobPost(jobPostData, event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Trying to create a job post here!",
      input: event
    })
  };
};