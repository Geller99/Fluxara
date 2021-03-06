const express = require("express");
const cors = require("cors");
const { routes } = require('./routes/routes.js');

const app = express();


app.use(express.json());
app.use(cors());


routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
