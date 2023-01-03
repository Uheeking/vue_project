var express = require("express");
var router = express.Router();
const mysql = require("mysql");
var config = require("../config/config.json");

const connection = mysql.createConnection(config);
connection.connect(function (err) {
  if (err) {
    console.error("mysql connection error");
    console.error(err);
    throw err;
  }
});

router.get("/", function (req, res, next) {
  res.send(movies);
});

module.exports = router;
