var express  = require("express"),
    bodyParser = require("body-parser"),
    router   = express.Router(),
    Rsvp     = require('../models/rsvp');

router.get('/', function(req, res){
  res.render("home");
});

router.get('/rsvp', function(req, res){
  res.render("rsvp");
});

router.post('/rsvp', function(req, res){
  var newRsvp = new Rsvp({
    name: req.body.name.toLowerCase(),
    email: req.body.email.toLowerCase(),
    guests: req.body.guests,
    phoneNumber: req.body.phoneNumber,
    comment: req.body.comment
  });
  Rsvp.create(newRsvp, function(err, newlyCreated){
    if (err) {
      console.log(err);
    } else {
      console.log('success');
      res.redirect('/');
    }
  });
});


module.exports = router;
