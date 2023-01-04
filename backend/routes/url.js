var express = require("express");
var router = express.Router();
var movies = require("./movies.json");
var config = require("../config/config.json");
const mysql = require("mysql2");

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

router.post("/write", function (req, res, next) {
  connection.query(
    "INSERT INTO write_table (keyword, url, description) VALUES ('" +
      req.body.keyword +
      "', '" +
      req.body.url +
      "', '" +
      req.body.description +
      "')",
    (error, rows, fields) => {
      if (rows) {
        return res.send({ result: '데이터가 제대로 전송되었습니다. ' });
      }
      if (error) {
        return res.send({
          message: "데이터 입력 중에 에러가 발생했습니다.",
          other: error,
        });
      }
      console.log("여기야", rows);
    }
  );
});

router.get("/read", function (req, res, next) {
  connection.query(
    "SELECT * FROM write_table",
    (error, rows, fields) => {
      if (rows) {
        return res.send({ result: '데이터를 제대로 받아왔습니다. ',
      data: rows });
      }
      if (error) {
        return res.send({
          message: "데이터 출력 중에 에러가 발생했습니다.",
          other: error,
        });
      }
      console.log("여기야", rows);
    }
  );
})

module.exports = router;