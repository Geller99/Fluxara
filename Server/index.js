const express = require("express");
const cors = require("cors");
const { routes } = require('./routes/routes.js');

const app = express();


app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.header("Access-Control-Allow-Origin", "http://newsapi.org"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});



routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
