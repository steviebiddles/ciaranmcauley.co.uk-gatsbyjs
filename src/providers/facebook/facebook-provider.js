const fs = require('fs');
const facebookHttpClient = require('../../utils/http-client/facebook-http-client');

/**
 * @return {Promise<*>}
 */
const getEvents = async () => {
  if (process.env.NODE_ENV === 'development') {
    const response = JSON.parse(fs.readFileSync(__dirname + '/data/events.json').toString());
    return response.data;
  }

  return facebookHttpClient.fetchEvents(50);
};

/**
 * @return {Promise<*>}
 */
const getPosts = async () => {
  if (process.env.NODE_ENV === 'development') {
    const response = JSON.parse(fs.readFileSync(__dirname + '/data/posts.json').toString());
    return response.data;
  }

  return facebookHttpClient.fetchPosts(50);
};

module.exports = { getEvents, getPosts };
