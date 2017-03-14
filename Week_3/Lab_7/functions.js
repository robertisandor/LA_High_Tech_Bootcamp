function isEven(input) {
    return (input % 2 === 0);
}

function factorial(input) {
    var answer = 1;
    if (isNaN(input) || input < 0) {
        alert("That's invalid input. Input a positive number or 0.");
    } else if (input === 0 || input === 1) {
        return answer;
    } else {
        for (var currentNumber = 2; currentNumber <= input; currentNumber++) {
            answer *= currentNumber;
        }
        return answer;
    }
}

function kebabToSnake(kebabInput) {
    // This splits the string into an array of characters
    var arrayOfChars = kebabInput.split('');
    var newString = "";
    
    // This goes through the array of characters one by one
    // and replaces the hyphens with underscores
    for (var index = 0; index < arrayOfChars.length; index++) {
        if (arrayOfChars[index] == '-') {
            arrayOfChars[index] = '_';
        }
    }
    
    // this joins all the characters together to form a new string
    newString += arrayOfChars.join('');
    return newString;
}