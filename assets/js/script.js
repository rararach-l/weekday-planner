// 1. The current date is shown using moment api, I have also added the time to the minute, so that the user has a clear view of exactly where they are in their day

var currentDateTime = moment().format("dddd, MMMM Do h:mm A");
$("#currentDay").text(currentDateTime);

// 2. Colour code each block based on the current time
//      Create variables to target each time block
//      In the html add the data-hour which represent which hour each element is
//      Create variable for moment().format(H) (0 - 23) e.g. thisHour

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
//      create variable (an array) called inputs that will store all of the input data
var inputs = [];

//      Add event listener to all save buttons
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var input = $(this).siblings("textarea").val();
    var hour = $(this).parent().attr("data-hour");
    var inputData = { time: hour, input: input, completed: $(this).prev().is(':checked') };
    var index = -1;


// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is

//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button