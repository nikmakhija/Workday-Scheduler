new Date();
let now = new Date();
alert(  now );
var inputMeeting = prompt("Anything Special about Today?");
if (inputMeeting) {
    document.write (inputMeeting.bold()+"     ");
} else {
    document.write("Normal Day"+"       ");
}

// Listen for save button clicks (possible on click?)
// Save in local storage
// Get current number of hours (current time)
// Loop over time blocks
// Check if we have moved past this time (past, present, future)
// Load save data from local storage
// Display current day on page
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
document.write(dateTime)
