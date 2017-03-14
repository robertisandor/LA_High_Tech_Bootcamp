function calculateDaysLived() {
    var ageInYears = prompt("Please enter how many years old you are:");
    var ageInDays = ageInYears * 365;
    if (ageInDays != null && ageInDays > 0) {
        alert("You have lived at least " + ageInDays +
    " days.");
    } else {
        alert("You didn't give valid input. " + 
        "Please click the button and input your age in years.");
    }
    
}