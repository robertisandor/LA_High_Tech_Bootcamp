function randomNumberGame() {
    var bottomOfRange = 1;
    var topOfRange = 100;
    var secretNumber = Math.floor((Math.random() * topOfRange) + bottomOfRange);
    var userGuess = prompt("Guess a number between " +
        bottomOfRange + " & " + topOfRange + " (excluding " +
        topOfRange + "). You have 5 guesses. Type in \"stop\" (without quotes) to stop.");
    var guessedCorrectly = false;
    var userWantsToPlay =  true;
    for (var guessCounter = 1; guessCounter <= 5 && !guessedCorrectly && userWantsToPlay; guessCounter++) {
        while (userWantsToPlay && isNaN(userGuess)) {
            if (userGuess === "stop") {
                userWantsToPlay = false;
                break;
            }
            userGuess = prompt("That is invalid input. " +
                "Please input a valid number.");
        }
        
        if (userGuess > topOfRange || userGuess < bottomOfRange) {
            userGuess = prompt("That number is outside of the range. " +
                "Please input a valid number.");
        }
        else if (userGuess === secretNumber) {
            guessedCorrectly = true;
            alert("You guessed correctly! Good job! Game over.");
        }
        else if (userGuess > secretNumber) {
            userGuess = prompt("You guessed too high! You have " +
                (5 - guessCounter) + " guesses left. Guess again.");
        }
        else if (userGuess < secretNumber) {
            userGuess = prompt("You guessed too low! You have " +
                (5 - guessCounter) + " guesses left. Guess again.");
        }
        if (userGuess === "stop") {
            userWantsToPlay = false;
        }
    }
    if (!guessedCorrectly && userWantsToPlay) {
        alert("Good try. The secret number actually was: " + secretNumber);
    }
}