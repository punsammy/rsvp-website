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

  $(window).on('scroll', function(){
    $('.hero-text').css('opacity', 1-($(this).scrollTop())/100);
  });

  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 56;
    if ($(window).scrollTop() > navHeight) {
      $('#nav').addClass('fixed');
    }
    else {
      $('#nav').removeClass('fixed');
    }
 });

});
