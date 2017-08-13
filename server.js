var mongoose = require('mongoose');
var logger = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var router = express.Router();
require("./config/routes")(router);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"} ));
app.use(express.static("public"));
// create connection to db
var databaseUri = "mongodb://localhost/nytreact"
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {});
} else {
    mongoose.connect(databaseUri, {
        useMongoClient: true
    });
};
var db = mongoose.connection;
// confirm successful connection or log error
db.once("error", function(error) {
    console.log("Mongoose error:", error);
});
db.once("open", function() {
    console.log("Mongoose Connection Successful");
});

app.use(router)