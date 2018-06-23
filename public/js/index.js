window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("fixed")
  } else {
    nav.classList.remove("fixed");
  }
}

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

  // $(window).on("load",function() {
  //   $(window).scroll(function() {
  //     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  //     $(".hero-text-item").each(function() {
  //       /* Check the location of each desired element */
  //       var objectBottom = $(this).offset().top + $(this).outerHeight();
  //
  //       /* If the element is completely within bounds of the window, fade it in */
  //       if (windowBottom < objectBottom) { //object comes into view (scrolling down)
  //         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
  //       } else { //object goes out of view (scrolling up)
  //         if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
  //       }
  //     });
  //   }).scroll(); //invoke scroll-handler on page-load
  // });

  $(window).on('scroll', function(){
    $('.hero-text').css('opacity', 1-($(this).scrollTop())/1);
  });

  // $(window).scroll(function(){
  //   $(".hero-text").css("opacity", 1 - $(window).scrollTop() / 250);
  // });

  // $(window).on('scroll', function() {
  //
  //   var navHeight = $( window ).height() - 56;
  //     if ($(window).scrollTop() > navHeight) {
  //       $('#nav').addClass('fixed');
  //     }
  //     else {
  //       $('#nav').removeClass('fixed');
  //     }
  //  });

  $('.his-story-button').on('click', function(event){
    event.preventDefault();
    $('.his-story-mobile').show();
    $('.her-story-mobile').hide();
    $('.her-story-button').removeClass('active');
    $(this).addClass('active');
  });

  $('.her-story-button').on('click', function(event){
    event.preventDefault();
    $('.his-story-mobile').hide();
    $('.her-story-mobile').show();
    $('.his-story-button').removeClass('active');
    $(this).addClass('active');
  });





});
