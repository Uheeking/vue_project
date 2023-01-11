var express = require("express");
var router = express.Router();
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

router.post("/notice", function (req, res, next) {
  // console.log(req.body.title);
  connection.query(
    "INSERT INTO question_table (title, language, text, url, password) VALUES ('" +
      req.body.title +
      "', '" +
      req.body.language +
      "', '" +
      req.body.text +
      "', '" +
      req.body.url +
      "', '" +
      req.body.password +
      "')",
    (error, rows, fields) => {
      if (rows) {
        return res
          .status(200)
          .send({ status: 200, result: "데이터가 입력되었습니다. " });
      }
      if (error) {
        return res.send({
          status: 400,
          message: "데이터 출력 중에 에러가 발생했습니다.",
          other: error,
        });
      }
    }
  );
});

router.get("/read", function (req, res, next) {
  connection.query("SELECT * FROM question_table", (error, rows, fields) => {
    if (rows) {
      return res.send({
        status: 200,
        result: "데이터가 제대로 전송되었습니다. ",
        data: rows,
      });
    }
    if (error) {
      return res.send({
        status: 400,
        message: "데이터 입력 중에 에러가 발생했습니다.",
        other: error,
      });
    }
    console.log("여기야", rows);
  });
});

router.post("/write", function (req, res, next) {
  console.log(req.body);
  connection.query(
    "INSERT INTO reply_table (reply, password, question_num, nickname) VALUES ('" +
      req.body.reply +
      "', '" +
      req.body.password +
      "', '" +
      req.body.id +
      "', '" +
      req.body.nickname +
      "')",
    (error, rows, fields) => {
      if (rows) {
        return res
          .status(200)
          .send({ status: 200, result: "데이터가 입력되었습니다. " });
      }
      if (error) {
        return res.send({
          status: 400,
          message: "데이터 출력 중에 에러가 발생했습니다.",
          other: error,
        });
      }
    }
  );
});

router.get("/reply_read", function (req, res, next) {
  connection.query("SELECT * FROM reply_table", (error, rows, fields) => {
    if (rows) {
      return res.send({
        status: 200,
        result: "데이터가 제대로 전송되었습니다. ",
        data: rows,
      });
    }
    if (error) {
      return res.send({
        status: 400,
        message: "데이터 입력 중에 에러가 발생했습니다.",
        other: error,
      });
    }
  });
});
module.exports = router;
