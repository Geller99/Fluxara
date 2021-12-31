const { newsRoute } = require("./newsApi.js");
const { newsHeadlinesRoute } = require("./headlinesApi.js");
const { geolocationRoute } = require("./geolocationApi.js");
const { weatherRoute } = require("./weatherRoute.js");
const { homeRoute } = require("./homeApi.js");

const routes = [homeRoute, newsRoute, newsHeadlinesRoute, geolocationRoute, weatherRoute];

module.exports = {
  routes,
};
