const { getLocation } = require("../endpoints/geolocation");

const geolocationRoute = {
  path: "/api/location",
  method: "get",
  handler: async (request, result) => {
    try {
      const data = await getLocation();
      console.log(data.data);
      result.send(JSON.stringify(data.data));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = {
  geolocationRoute,
};
