var colorArray = [];
var numberOfChoices = 3;
var redValue;
var greenValue;
var blueValue;

function generateRandomNumber(maximum) {
    var randomNumber = 0;
    randomNumber = Math.floor(Math.random() * maximum);
    return randomNumber;
}

function checkIfColorMatches(coloredShape) {
    var firstIndex;
    var secondIndex;
    var thirdIndex;
    switch (coloredShape) {
        case "color1":
            firstIndex = 0;
            secondIndex = 1;
            thirdIndex = 2;
            break;
        case "color2":
            firstIndex = 3;
            secondIndex = 4;
            thirdIndex = 5;
            break;
        case "color3":
            firstIndex = 6;
            secondIndex = 7;
            thirdIndex = 8;
            break;
        case "color4":
            firstIndex = 9;
            secondIndex = 10;
            thirdIndex = 11;
            break;
        case "color5":
            firstIndex = 12;
            secondIndex = 13;
            thirdIndex = 14;
            break;
        case "color6":
            firstIndex = 15;
            secondIndex = 16;
            thirdIndex = 17;
            break;
    }
    if (colorArray[firstIndex] == redValue && colorArray[secondIndex] == greenValue && colorArray[thirdIndex] == blueValue) {
        document.getElementById("response").innerHTML = "Correct!";
    }
    else {
        document.getElementById("response").innerHTML = "Try again";
    }
}

function initializeEventListeners() {
    var firstColor = document.getElementById("color1");
    var secondColor = document.getElementById("color2");
    var thirdColor = document.getElementById("color3");
    var fourthColor = document.getElementById("color4");
    var fifthColor = document.getElementById("color5");
    var sixthColor = document.getElementById("color6");

    /*firstColor.addEventListener('click', checkIfColorMatches);
    secondColor.addEventListener('click', checkIfColorMatches);
    thirdColor.addEventListener('click', checkIfColorMatches);
    fourthColor.addEventListener('click', checkIfColorMatches);
    fifthColor.addEventListener('click', checkIfColorMatches);
    sixthColor.addEventListener('click', checkIfColorMatches);*/

    var easy = document.getElementById("easyMode");
    var hard = document.getElementById("hardMode");
    easy.addEventListener("click", function() {
        easy.style.backgroundColor = "blue";
        easy.style.color = "white";
        hard.style.backgroundColor = "white";
        hard.style.color = "blue";
    });
    hard.addEventListener("click", function() {
        easy.style.backgroundColor = "white";
        easy.style.color = "blue";
        hard.style.backgroundColor = "blue";
        hard.style.color = "white";
    });

    document.getElementById("restart").addEventListener("click", function() {
        // it doesn'y display new colors
        // check why; perhaps
        console.log("Restarting now!");
        initializeColors();
        console.log("Done restarting!");
    });

    easy.addEventListener("click", function() {
        fourthColor.style.display = "none";
        fifthColor.style.display = "none";
        sixthColor.style.display = "none";
        document.querySelector("svg").setAttribute("viewBox", "0 0 100 20");
        firstColor.setAttribute("height", "50%");
        firstColor.setAttribute("y", "25%");
        secondColor.setAttribute("height", "50%");
        secondColor.setAttribute("y", "25%");
        thirdColor.setAttribute("height", "50%");
        thirdColor.setAttribute("y", "25%");
        numberOfChoices = 3;
    });
    
    hard.addEventListener("click", function() {
        fourthColor.style.display = "initial";
        fifthColor.style.display = "initial";
        sixthColor.style.display = "initial";

        document.querySelector("svg").setAttribute("viewBox", "0 0 100 25");
        firstColor.setAttribute("height", "40%");
        firstColor.setAttribute("y", "10%");
        secondColor.setAttribute("height", "40%");
        secondColor.setAttribute("y", "10%");
        thirdColor.setAttribute("height", "40%");
        thirdColor.setAttribute("y", "10%");
        numberOfChoices = 6;
    });
    
    easy.click();
}

function initializeColors() {
    redValue = generateRandomNumber(256);
    greenValue = generateRandomNumber(256);
    blueValue = generateRandomNumber(256);

    document.getElementById("redValue").innerHTML = redValue;
    document.getElementById("greenValue").innerHTML = greenValue;
    document.getElementById("blueValue").innerHTML = blueValue;



    // if hard mode is clicked,
    // show all 6 

    // this number will need to be changed 
    // so that the correct color is not for
    // a color that isn't shown
    //numberOfChoices = 3;
    var correctColorBox = generateRandomNumber(numberOfChoices);


    switch (correctColorBox) {
        case 0:
            colorArray.push(redValue);
            colorArray.push(greenValue);
            colorArray.push(blueValue);
            for (var index = 3; index < 18; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            break;
        case 1:
            for (var index = 0; index < 3; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            colorArray.push(redValue);
            colorArray.push(greenValue);
            colorArray.push(blueValue);
            for (var index = 6; index < 18; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            break;
        case 2:
            for (var index = 0; index < 6; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            colorArray.push(redValue);
            colorArray.push(greenValue);
            colorArray.push(blueValue);
            for (var index = 9; index < 18; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            break;
        case 3:
            for (var index = 0; index < 9; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            colorArray.push(redValue);
            colorArray.push(greenValue);
            colorArray.push(blueValue);
            for (var index = 12; index < 18; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            break;
        case 4:
            for (var index = 0; index < 12; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            colorArray.push(redValue);
            colorArray.push(greenValue);
            colorArray.push(blueValue);
            for (var index = 15; index < 18; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            break;
        case 5:
            for (var index = 0; index < 15; index++) {
                colorArray.push(generateRandomNumber(256));
            }
            colorArray.push(redValue);
            colorArray.push(greenValue);
            colorArray.push(blueValue);
            break;
    }
    document.getElementById("color1").style.fill = "rgb(" +
        colorArray[0] + "," + colorArray[1] + "," + colorArray[2] + ")";
        
    document.getElementById("color2").style.fill = "rgb(" +
        colorArray[3] + "," + colorArray[4] +
        "," + colorArray[5] + ")";
    document.getElementById("color3").style.fill = "rgb(" +
        colorArray[6] + "," + colorArray[7] +
        "," + colorArray[8] + ")";

    document.getElementById("color4").style.fill = "rgb(" +
        colorArray[9] + "," + colorArray[10] +
        "," + colorArray[11] + ")";
    document.getElementById("color5").style.fill = "rgb(" +
        colorArray[12] + "," + colorArray[13] +
        "," + colorArray[14] + ")";
    document.getElementById("color6").style.fill = "rgb(" +
        colorArray[15] + "," + colorArray[16] +
        "," + colorArray[17] + ")";



    initializeEventListeners();
}
