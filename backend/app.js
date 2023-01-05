var createError = require("http-errors");
var express = require("express");
var path = require("path");
const history = require("connect-history-api-fallback");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var config = require("./config/config.json");
// const mysql = require("mysql2");

// const connection = mysql.createConnection(config);
// connection.connect(function (err) {
//   if (err) {
//     console.error("mysql connection error");
//     console.error(err);
//     throw err;
//   }
// });

var urlRouter = require("./routes/url");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/upload", urlRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
