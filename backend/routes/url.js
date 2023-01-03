var express = require("express");
var router = express.Router();
var movies = require("./movies.json");

router.get("/", function (req, res, next) {
  res.send(movies);
});

router.post("/ee", function (req, res, next) {
  // res.send(movies);
  const keyword = req.body;
  console.log("print", req.body);
});

module.exports = router;
