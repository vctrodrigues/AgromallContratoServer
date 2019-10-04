const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const index = require("./routes/index");
const server = require("http").Server(app);

app.server = server;

app.use(function(res, req, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://bardaestacao:@notai2019@bardaestacao-dg3bs.mongodb.net/bardaestacao?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database connection successful");
    },
    err => {
      console.log("Error when connecting to the database. Err: " + err);
    }
  );

app.use("/", index);

module.exports = app;
