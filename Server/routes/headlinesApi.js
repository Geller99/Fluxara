const { newsHeadline } = require("../endpoints/newsHeadlines.js");

const newsHeadlinesRoute = {
  path: "/api/headlines",
  method: "get",
  handler: async (request, result) => {
    try {
      const data = await newsHeadline();
      console.log(data.data);
      result.send(JSON.stringify(data.data));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = {
  newsHeadlinesRoute,
};
