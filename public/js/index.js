$(document).ready(function(){
  $('.open-rsvp-modal').on('click', function(event) {
    event.stopPropagation();
    $('.modal').fadeIn('fast');
  });
  $('.rsvp-form').on('click', function(event){
    event.stopPropagation();
  });
  // Modal is closed when anywhere outside form is clicked
  $('html').click(function(){
    $('.modal').fadeOut('fast');
  });
});
