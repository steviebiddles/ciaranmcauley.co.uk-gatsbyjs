const axios = require('axios');
const querystring = require('querystring');

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
const instance = axios.create({
  baseURL: 'https://graph.facebook.com/v4.0/djciaranmcauley',
});

/**
 * @param limit
 * @return {Promise<*>}
 */
const fetchEvents = async (limit = 50) => {
  const params = {
    access_token: accessToken,
    fields: 'id,name,start_time,end_time,cover,place,attending_count,ticket_uri,interested_count',
    // time_filter: 'upcoming',
    limit,
  };

  try {
    const response = await instance.get(
      `/events?${querystring.stringify(params)}`,
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * @param limit
 * @return {Promise<*>}
 */
const fetchPosts = async (limit = 50) => {
  const params = {
    access_token: accessToken,
    fields: 'id,created_time,full_picture,message,picture,place,attachments{description,media,media_type,target,title,type,url},permalink_url,message_tags',
    limit,
  };

  try {
    const response = await instance.get(
      `/posts?${querystring.stringify(params)}`,
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchEvents, fetchPosts };
