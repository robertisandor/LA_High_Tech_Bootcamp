function startAnnoying() {
    var response = prompt("Are we there yet?");
    response = response.toLowerCase();
    while(response !== "yes" && response !== "yeah") {
        response = prompt("Are we there yet?");
        response = response.toLowerCase();
    }
    alert("Yay! We finally made it!");
}