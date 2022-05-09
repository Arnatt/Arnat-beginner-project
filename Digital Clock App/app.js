function showTime() {
  var date = new Date();
  var hours = date.getHours(); // 0 - 23
  var minutes = date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

//   if (hours < 10) {
//     hours = "0" + hours;
//     return hours;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//     return minutes;
//   }

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//     return seconds;
//   }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;



  var time = hours + ":" + minutes + ":" + seconds + " " + session;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
