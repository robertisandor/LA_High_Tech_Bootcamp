function printReverse(array) {
    array.forEach(function(item) {
        console.log(item);
    });
}

function isUniform(array) {
    var firstElement = array[0];
    var isIdentical = true;
    for (var index = 1; index < array.length; index++) {
        if (array[index] !== firstElement) {
            isIdentical = false;
            break;
        }
    }
    return isIdentical;
}

function sumArray(arrayOfNumbers) {
    var sum = 0;
    arrayOfNumbers.forEach(function(number) {
        if (!isNaN(number) ){
            sum += number;
        } else {
            alert("This element in the array is not a number.");
        }
    });
    return sum;
}

function max(arrayOfNumbers) {
    var highest = arrayOfNumbers[0];
    for (var index = 1; index < arrayOfNumbers.length; index++) {
        if (arrayOfNumbers[index] > highest) {
            highest = arrayOfNumbers[index];
        }
    }
    return highest;
}