const axios = require("axios");


const getLocation = () => {
  const result = axios
    .get(
      `http://ip-api.com/json/?fields=61439`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status);
      }
    });
  return result;
};

module.exports = {
  getLocation,
};
