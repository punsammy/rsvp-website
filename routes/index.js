var express  = require("express"),
    router   = express.Router();

router.get('/', function(req, res){
  res.render("home");
});

router.get('/rsvp', function(req, res){
  res.render("rsvp");
});


module.exports = router;
