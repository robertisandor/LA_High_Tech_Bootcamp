/* 
Create an html document containing a form and a list. The list items will be populated from your
JavaScript array.

The form will accept input, such as name, age, and address and will add it to the list of data. It will check if a name already exists in the list. 
If it does, trigger an update instead of adding to the list.

The list items are populated from the data array and when a name is selected, it displays the object 
details in the same input fields that were used to add or update the data.

1. Add JQuery CDN script in the index.html

2. Specify the document ready function to execute when the DOM is fully loaded

3. Add an event on the submit button to add or update an object in the list. Be sure to use PreventDefault to prevent the page refreshing on the form submit. 
After posting:
    a. Repopulate the list items with the updated data

4. Add an event on the dropdown so when a name is selected from the list, the object's details are displayed in the form
    a. If 'select a name' is selected, clear the form 

5. Add an event to the anchor within the list items so when a name is clicked, the object's details are displayed in the form

6. Add an event on the clear button to clear the form data

Bonus:
    Instead of using a list, try this exercise with a dropdown menu instead. Populate the dropdown menu with the data from the array. When data is
    submitted through the form, add or update the data and display it on the dropdown menu. Also, when a name is clicked from the dropdown menu, it
    should populate the form.
*/

/* global $ */
var data = [{
    "name": "Bob",
    "age": 35,
    "address": {
        "street": "6565 Sunset Blvd",
        "zip": "90028",
        "city": "Los Angeles"
    }
}, {
    "name": "Angela",
    "age": 25,
    "address": {
        "street": "1234 Tropicana blvd",
        "zip": "89100",
        "city": "Las Vegas"
    }
}, {
    "name": "Carol",
    "age": 52,
    "address": {
        "street": "4232 Melrose ave",
        "zip": "90029",
        "city": "Los Angeles"
    }
}, {
    "name": "Jack",
    "age": 63,
    "address": {
        "street": "1344 First Street",
        "zip": "90105",
        "city": "Las Vegas"
    }
}, {
    "name": "Celine",
    "age": 21,
    "address": {
        "street": "1344 First Street",
        "zip": "10003",
        "city": "New York"
    }
}, {
    "name": "Luke",
    "age": 74,
    "address": {
        "street": "1344 first street",
        "zip": "10105",
        "city": "Bronx"
    }
}, {
    "name": "Martin",
    "age": 55,
    "address": {
        "street": "1344 first street",
        "zip": "10108",
        "city": "Bronx"
    }
}];

function clearTable() {
    $("table").empty();
}

function displayList() {
    $("table").append("<tr><th>Name</th><th>Age</th><th>Street</th><th>City</th><th>ZIP</th></tr>");
    for (var index = 0; index < data.length; index++) {
        $("table")
            .append("<tr><td>" + data[index].name + "</td>" +
                "<td>" + data[index].age + "</td>" +
                "<td>" + data[index].address.street + "</td>" +
                "<td>" + data[index].address.city + "</td>" +
                "<td>" + data[index].address.zip + "</td></tr>");
    }
}

function isInputValid() {
    var nameInput = $("#name").val();
    var ageInput = $("#age").val();
    var streetInput = $("#street").val();
    var cityInput = $("#city").val();
    var zipInput = $("#zip").val();

    var allInputIsPresent = true;

    if (nameInput === '') {
        $("#name").attr("placeholder", "Please input a name");
        allInputIsPresent = false;
    }

    if (ageInput === '') {
        $("#age").attr("placeholder", "Please input an age");
        allInputIsPresent = false;
    }

    if (streetInput === '') {
        $("#street").attr("placeholder", "Please input a street");
        allInputIsPresent = false;
    }

    if (cityInput === '') {
        $("#city").attr("placeholder", "Please input a city");
        allInputIsPresent = false;
    }

    if (zipInput === '') {
        $("#zip").attr("placeholder", "Please input a ZIP");
        allInputIsPresent = false;
    }

    return allInputIsPresent;
}

$(document).ready(function() {

    displayList();

    $("#submit").click(function(event) {
        event.preventDefault();

        var nameInput = $("#name").val();
        var ageInput = $("#age").val();
        var streetInput = $("#street").val();
        var cityInput = $("#city").val();
        var zipInput = $("#zip").val();

        var haveAllInput = isInputValid();

        if (haveAllInput) {
            $("#name").val('');
            $("#age").val('');
            $("#street").val('');
            $("#city").val('');
            $("#zip").val('');
            
            $("#name").attr("placeholder", "Name");
            $("#age").attr("placeholder", "Age");
            $("#street").attr("placeholder", "Street");
            $("#city").attr("placeholder", "City");
            $("#zip").attr("placeholder", "ZIP");
        }

        var foundName = false;
        for (var index = 0; index < data.length && !foundName && haveAllInput; index++) {
            if (nameInput.toLowerCase() === data[index].name.toLowerCase()) {
                data[index].age = ageInput;
                data[index].address.street = streetInput;
                data[index].address.city = cityInput;
                data[index].address.zip = zipInput;
                foundName = true;
            }
        }

        if (!foundName && haveAllInput) {
            data.push({
                "name": nameInput,
                "age": ageInput,
                "address": {
                    "street": streetInput,
                    "zip": zipInput,
                    "city": cityInput
                }
            });
        }

        clearTable();
        displayList();
    });

    $("#clear").click(function() {
        clearTable();
    });
});
