// consider using const for the array
// if I use const, I'll need to change the quit function
// push will still work with a const array
// will splice work with a const array?

var toDoList = [];

function add(arrayOfToDos) {
    var toDo = prompt("What would you like to add to " +
        "the to-do list?");
    arrayOfToDos.push(toDo);
    alert("The to-do item, " + toDo + ", was successfully added.");
}

function show(arrayOfToDos) {
    var output = "";
    arrayOfToDos.forEach(function(toDo) {
        output += toDo;
        output += '\n';
    });
    alert("The to-do list includes:\n" + output);
}

function remove(arrayOfToDos) {
    var toBeRemoved = prompt("What would you like to remove from " +
        "the to-do list?");
    var foundToDo = false;
    for (var index = 0; index < arrayOfToDos.length; index++) {
        if (arrayOfToDos[index] == toBeRemoved) {
            foundToDo = true;
            arrayOfToDos.splice(index, 1);
            break;
        }
    }
    if (foundToDo) {
        alert("The to-do item, " + toBeRemoved + ", was successfully removed.");
    } else {
        alert("The to-do item, " + toBeRemoved + ", could not be found.");
    }
}

function quit() {
    toDoList = [];
    alert("The to-do list is now empty. Thanks for using the to-do list!");
}