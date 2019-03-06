import YOUTUBE_API_KEY from "../config/youtube.js";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

var searchYouTube = (options, callback) => {

  $.ajax({

    url: YOUTUBE_API_URL,

    type: 'GET',

    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      key: options.key,
      q: options.query,
      maxResults: options.max
    },

    contentType: 'application/json',

    success: function (data) {
      console.log('Success!', data);
      callback(data.items);
    },

    error: function (data) {
      console.error('FAILED!', data);
    }

  });

};

export default searchYouTube;