$(document).ready(function() {
    //Set options
    var fadeSpeed = 500;
    var autoSlider = false;
    var autoSliderSpeed = 1000;
    var currentSlide = 1;
    var maxSlide = 5;

    $("#slider > .slide:first-child").toggleClass("active");
    $("#slider > .slide:gt(0)").hide();

    //Add event handlers for next and prev
    $("#prev").click(function() {
        $("#slider > .slide:nth-child(" + currentSlide + ")").fadeOut({
            duration: fadeSpeed / 2
        });
        currentSlide--;
        if (currentSlide < 1) {
            currentSlide = maxSlide;
        }
        $("#slider > .slide").hide();
        $("#slider > .slide:nth-child(" + currentSlide + ")").fadeIn({
            duration: fadeSpeed
        });
    });
    $("#next").click(function() {
        $("#slider > .slide:nth-child(" + currentSlide + ")").fadeOut({
            duration: fadeSpeed
        });
        currentSlide++;
        if (currentSlide > maxSlide) {
            currentSlide = 1;
        }
        $("#slider > .slide").hide();
        $("#slider > .slide:nth-child(" + currentSlide + ")").fadeIn({
            duration: fadeSpeed
        });
    });
});
