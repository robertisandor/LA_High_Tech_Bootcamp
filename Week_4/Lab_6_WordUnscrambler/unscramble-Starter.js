function unscramble(arrayOfChars, string) {
    for(var index = 0; index < arrayOfChars.length; index++) {
        if (arrayOfChars[index] != string.charAt(index)) {
            var tempHolder = string.charAt(index);
            var innerIndex = index + 1;
            while(arrayOfChars[innerIndex] != string.charAt(index)) {
                innerIndex++;
            }
            tempHolder = arrayOfChars[index];
            arrayOfChars[index] = arrayOfChars[innerIndex];
            arrayOfChars[innerIndex] = tempHolder;
        }
    }
    return arrayOfChars;
}

console.log(unscramble(["l","e","h","o","l"], "hello"));