const express = require("express");
const app = express();
const db = require("../database/index.js");

const port = 5900;
app.use(express.static(__dirname + "/../public"));
app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
