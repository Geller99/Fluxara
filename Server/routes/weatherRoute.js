const { getWeather } = require("../endpoints/weather");

const weatherRoute = {
  path: "/api/weather",
  method: "post",
  handler: async (request, result) => {
    const { city } = request.body;
    try {
      const data = await getWeather(city);
      console.log(data.data);
      result.send(JSON.stringify(data.data));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = {
  weatherRoute,
};
