$("li").click(function() {
    $(this).addClass("completed");
});

$("li > span").click(function() {
    $(this).parent()
    .fadeOut(1000, function() {
        this.remove();
    })
});

$("input").keypress(function(event) {
    if (event.which === 13 && this.value !== "") {
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + this.value + "</li>");
        this.value = "";
    }
    $("li").click(function() {
    $(this).addClass("completed");
});
  $("li > span").click(function() {
    $(this).parent()
    .fadeOut(1000, function() {
        this.remove();
    })
});
});

$("h1 > i").click(function() {
    $("input").toggle({ duration: 'slow' });
});