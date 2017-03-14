function forLoops() {
    var stringToPrint = "First loop:\n";
    for (var numberToPrint = -10; numberToPrint < 19; numberToPrint++) {
        stringToPrint += numberToPrint + " ";
    }
    stringToPrint += "\nSecond loop:\n"
    for (var numberToPrint = 10; numberToPrint < 40; numberToPrint += 2) {
        stringToPrint += numberToPrint + " ";
    }
    stringToPrint += "\nThird loop:\n"
    for (var numberToPrint = 300; numberToPrint < 333; numberToPrint++) {
        stringToPrint += numberToPrint + " ";
    }
    stringToPrint += "\nFinal loop:\n"
    for (var numberToPrint = 5; numberToPrint <= 50; numberToPrint++) {
        if (numberToPrint % 3 == 0 && numberToPrint % 5 == 0) {
            stringToPrint += numberToPrint + " ";
        }
    }
    alert(stringToPrint);
}