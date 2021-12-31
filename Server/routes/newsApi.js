const { getNews } = require("../endpoints/news");

const newsRoute = {
  path: "/api/news",
  method: "post",
  handler: async (request, result) => {
    const { id } = request.body;
    console.log(id);
    try {
      const data = await getNews(id);

      console.log(data.data);
      result.send(JSON.stringify(data.data));
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = {
  newsRoute,
};
