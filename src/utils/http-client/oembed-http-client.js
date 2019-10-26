const axios = require('axios');
const querystring = require('querystring');

const instance = axios.create();
const providerBaseUrlMap = {
  facebook: 'https://www.facebook.com/plugins/video/oembed.json',
  soundCloud: 'https://soundcloud.com/oembed',
};

const fetchOEmbedData = async (provider, url) => {
  let params = {
    url,
    format: 'json',
  };

  if (provider === 'facebook') {
    params = { ...params, maxwidth: 720, omitscript: true };
  }

  // console.log(`${providerBaseUrlMap[provider]}?${querystring.stringify(params)}`);

  try {
    const response = await instance.get(
      `${providerBaseUrlMap[provider]}?${querystring.stringify(params)}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchOEmbedData };
