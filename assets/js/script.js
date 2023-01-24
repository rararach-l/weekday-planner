// 1. The current date is shown using moment api, I have also added the time to the minute, so that the user has a clear view of exactly where they are in their day

var currentDateTime = moment().format("dddd, MMMM Do h:mm A");
$("#currentDay").text(currentDateTime);

// 2. Colour code each block based on the current time

var hour = parseInt($(this).attr("data-hour"));
var thisHour = parseInt(moment().format("H"));
var timeblocks = $(".timeblock");

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
    
    // for loop iterates over the inputs array
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].time == hour) {
            timeofDay = i;
            break;
        }
    }

    if (timeofDay === -1) {
        inputs.push(inputData);
    } else {
        inputs[timeofDay] = inputData;
    }
    localStorage.setItem("inputs", JSON.stringify(inputs));
});


// 4. Load input from local storage when page load/refresh if there's any data in local storage

var localStorageInput = localStorage.getItem("inputs");
if (localStorageInput) {
    var parsedLocalStorageInput = JSON.parse(localStorageInput);
    parsedLocalStorageInput.forEach(function(input) {
        $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input);
    });
}
