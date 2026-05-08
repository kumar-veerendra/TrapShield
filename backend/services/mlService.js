// # External service communication
// # Calls ML Flask API

const axios = require("axios");

const predictUrl = async (url) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/predict/url",
    { url }
  );

  return response.data;
};

module.exports = {
  predictUrl,
};