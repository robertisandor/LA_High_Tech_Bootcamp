$("button").click(function() {
  $(this).css("background", "pink");
  alert($(this).text());
});

$("input").keypress(function() {
  console.log("A key has been pressed");
});

$("h1").on("click", function() {
  $(this).css("color", "purple")
});


$("input").on("keypress", function(event) {
  console.log("The '" + String.fromCharCode(event.which) + "' key was pressed.");
})