function askAge() {
    var ageOfUser = prompt("How many years old are you?");
    if (isNaN(ageOfUser)) {
        alert("You didn't give valid input. " + 
        "Please click the button and input your age in years.");
    } else if (ageOfUser < 0) {
        alert("You can't have a negative age! " + 
        "Please click the button and input your age in years.");
    } else {
        if (ageOfUser == 21) {
            alert("Happy 21st Birthday!");
        }
        if (ageOfUser % 2 == 1) {
            alert("Your age is odd!");
        }
        if (Number.isInteger(Math.sqrt(ageOfUser))) {
            alert("Perfect square!");
        }
    }
}