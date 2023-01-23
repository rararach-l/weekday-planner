// 1. Show the current date at the top
//      Use moment api and format today date
//      Add it to the `currentDay` element

// 2. Colour code each block based on the current time
//      Create variables to target each time block
//      In the html add the data-hour which represent which hour each element is
//      Create variable for moment().format(H) (0 - 23) e.g. thisHour

// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
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

// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is

//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button