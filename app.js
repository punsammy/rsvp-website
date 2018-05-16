var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//MODELS
var Rsvp = require('./models/rsvp');

// ROUTES
var routes = require("./routes/index");

// DATABASE CONFIG
mongoose.connect("mongodb://amanda:" + process.env.MLABRSVPPW + "@ds221990.mlab.com:21990/wedding-guestlist");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//ROUTE CONFIGURATION
app.use(routes);


app.listen(process.env.PORT || 3000, function(){
  console.log("Server listening");
})
