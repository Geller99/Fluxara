
const axios = require('axios');

const newsHeadline = () => {
    
    const result = axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a7995b637cd48519e2ceddac396c9b5`)
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status);
      }
    });
    
  return result;

};


module.exports = {
    newsHeadline
};