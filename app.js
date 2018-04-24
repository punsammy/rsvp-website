var express = require("express");
var app = express();

app.set("view engine", "ejs");

// ROUTES
var routes = require("./routes/index");
//Route configuration
app.use(routes);


app.listen(process.env.PORT || 3000, function(){
  console.log("Server listening");
})
