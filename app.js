var express = require("express");
var app = express();
var mongoose = require("mongoose");


app.set("view engine", "ejs");

//MODELS
var Rsvp = require('./models/rsvp');

// ROUTES
var routes = require("./routes/index");

// DATABASE CONFIG
mongoose.connect("mongodb://amanda:" + process.env.MLABRSVPPW + "@ds221990.mlab.com:21990/wedding-guestlist",  {useMongoClient: true});
mongoose.Promise = global.Promise;

//ROUTE CONFIGURATION
app.use(routes);


app.listen(process.env.PORT || 3000, function(){
  console.log("Server listening");
})
