function showTime() {
  var today = new Date(); // calling new Date() object to show day year hr min sec time zone
  var hr = today.getHours(); // calling getHours() to get current hours
  var min = today.getMinutes(); // calling getMinutes() to get current minutes
  var sec = today.getSeconds(); // calling getSeconds() to get current seconds

  hr = checkTime(hr); // calling function checkTime and passing hr parameter
  min = checkTime(min); // calling function checkTime and passing min parameter
  sec = checkTime(sec); // calling function checkTime and passing sec parameter

  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec; // printing clock on the screen

  setTimeout(showTime, 1000); // calling showTime function in every 1 second using setTimeout method/function
}

// adding 0 before min and sec less than 10
function checkTime(i) {
  if (i < 10) {
    // checking minute and second is less than 10
    i = "0" + i;
  }
  return i;
}

showTime();
