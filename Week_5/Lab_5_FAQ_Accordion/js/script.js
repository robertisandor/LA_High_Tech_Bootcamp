$(document).ready(function(){
  $(".q").click(function() {
    $(this.nextElementSibling).slideToggle();
    $(this.children()).toggleClass("rotate");
  });
});
