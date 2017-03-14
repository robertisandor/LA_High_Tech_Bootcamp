$(document).ready(function() {
  $("#aboutButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    }, 'slow');
  });

  $("#portfolioButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 'slow');
  });

  $("#contactButton").click(function() {
    $('html,body').animate({
      scrollTop: $("#contact").offset().top
    }, 'slow');
  });
});
