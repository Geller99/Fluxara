const axios = require("axios");

const getWeather = (city) => {
  const result = axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63b315b5735333544a468d5016b1b9f1`
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
  getWeather,
};
