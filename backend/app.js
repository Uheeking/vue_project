var createError = require("http-errors");
var express = require("express");
var path = require("path");
const history = require("connect-history-api-fallback");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql2")
require('dotenv').config({ path: path.join(__dirname, './.env') });
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306
})

connection.connect(function (err) {
  if(err){
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
})

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var moviesRouter = require("./routes/url");

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

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/movies", moviesRouter);

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

app.post("/", (req, res) => {
  console.log("통신 성공");
});
module.exports = app;
