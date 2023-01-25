// 1. The current date is shown using moment api, I have also added the time to the minute, so that the user has a clear view of exactly where they are in their day
// Initialize variable called currentDateTime with current date and time using moment.js.
// This library makes it easier to work with dates and times in JavaScript
// Using the .format() function, date and time formatted to include the day of the week, the month, the day of the month, the hour, and whether it's AM or PM.
// jQuery's .text() function updates the text content of the element with the id of "currentDay" to the value of currentDateTime

var currentDateTime = moment().format("dddd, MMMM Do h:mm A");
$("#currentDay").text(currentDateTime);

// 2. Colour code each block based on the current time
// variable called hour initialised and set to the data-hour attribute
// thisHour initialised and set using moment.js
// timeblocks initialised and set to all the timeblocks using jquery
var hour = parseInt($(this).attr("data-hour"));
var thisHour = parseInt(moment().format("H"));
var timeblocks = $(".timeblock");

// jquery's each function used to iterate over each element in the timeblocks object, setting the value of the hour to the "data-hour"
// if-else statement checks value of the hour compared to thisHour and colours are set

timeblocks.each(function() {
    var hour = $(this).attr("data-hour");
    if (hour < thisHour) {
        $(this).css("background-color", "#d3d3d3");
    } else if (hour == thisHour) {
        $(this).css("background-color", "#ff6961");
    } else {
        $(this).css("background-color", "#77dd77");
    }
});
 
// 3. Save input to local storage

var inputs = [];
// variable "inputs" created as an empty array


$(".saveBtn").on("click", function(event) { // click event listener added to class "saveBtn" 
    event.preventDefault(); // When save button is clicked, event's default behavior is prevented
    var input = $(this).siblings("textarea").val(); // input value is retrieved from textarea element that is sibling of save button using jQuery's .siblings() and .val() functions
    var hour = $(this).parent().attr("data-hour"); // hour value retrieved from parent element of save button using jQuery's .parent() and .attr() functions
    var inputData = { time: hour, input: input }; // Object created and stored in a variable
    var timeofDay = -1;

    var confirmationMessage = $("#confirmation-message");
    confirmationMessage.text("schedule updated!");
    confirmationMessage.show();
    setTimeout(function() {
        confirmationMessage.fadeOut();
    }, 1500);

    if (timeofDay === -1) {
        inputs.push(inputData);
    } else {
        inputs[timeofDay] = inputData;
    }
    localStorage.setItem("inputs", JSON.stringify(inputs));
});


// 4. Load input from local storage when page load/refresh if there's any data in local storage

// Use the localStorage.getItem() method to retrieve the inputs data from local storage and store it in a variable called localStorageInput

var localStorageInput = localStorage.getItem("inputs");
if (localStorageInput) {
    var parsedLocalStorageInput = JSON.parse(localStorageInput);
    // If local storage has anything saved, use the JSON.parse() method to convert the string back to an array and store it in a variable called parsedLocalStorageInput

    parsedLocalStorageInput.forEach(function(input) {
        $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input);
    });
    // Within .forEach() function, use jQuery to select the textarea element within the timeblock element that has a "data-hour" attribute matching the "time" property of the current input object and update its value to the "input" property of the current input object
}