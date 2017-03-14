var el = document.querySelector("body");
el.addEventListener('click', function() {
    if (el.style.backgroundColor == "purple") {
        el.style.backgroundColor = "white";
    } else {
        el.style.backgroundColor = "purple";
    }
});
// figure out how to make it work with toggle if possible