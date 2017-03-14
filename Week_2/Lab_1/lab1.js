function askUser() {
    var firstName = prompt("Please enter your first name: ");
    var lastName = prompt("Please enter your last name: ");
    var age = prompt("Please enter your age: ");
    if (firstName != null && lastName != null && age != null) {
        alert("Your name is " + firstName + " " + lastName + 
        ". You are " + age + " years old.");
    } else {
        alert("You did not input the info correctly. " +
        "Please click the button and try again.");   
    }
}