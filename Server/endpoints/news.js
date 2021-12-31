const axios = require("axios");
const dateUpdate = require("../utils/dateupdate.js");

const getNews = (id) => {
  const result = axios
    .get(
      `http://newsapi.org/v2/everything?q=${id}&from=2021-11-29&sortBy=popularityAt&apiKey=5a7995b637cd48519e2ceddac396c9b5`
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
  getNews,
};
