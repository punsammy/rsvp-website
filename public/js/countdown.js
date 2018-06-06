$(document).ready(function(){
  var weddingDate = "2018-07-13";

  function getDaysRemaining(getDaysRemaining){
    var t = Date.parse(getDaysRemaining) - Date.parse(new Date());
    var days = Math.floor(t/(1000*60*60*24));
    return {
      'days': days
    }
  };

  var daysLeft = getDaysRemaining(weddingDate).days
  console.log(daysLeft);

  $('.countdown').html(daysLeft + " days to go!");
});
