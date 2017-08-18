const mongoose = require('mongoose');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();
require("./controllers/article-controller")(router);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"} ));
app.use(express.static("public"));
// create connection to db
const databaseUri = "mongodb://localhost/nytreact"
// if (process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI, {});
// } else {
//     mongoose.connect(databaseUri, {
//         useMongoClient: true
//     });
// };
mongoose.connect("mongodb://localhost/nytreact")
const db = mongoose.connection;
// confirm successful connection or log error
db.once("error", function(error) {
    console.log("Mongoose error:", error);
});
db.once("open", function() {
    console.log("Mongoose Connection Successful");
});

app.use(router)

const PORT = process.env.PORT || 7000;

app.listen(PORT, function() {
    console.log("Listening on port:", PORT)
})