const newyear = "4 nov 2023";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

function countdown() {
  const newyearDate = new Date(newyear);
  const currentDate = new Date();
  const totalSec = (newyearDate - currentDate) / 1000;
  const days = Math.floor(totalSec / 3600 / 24); // divided by 86400
  const hours = Math.floor(totalSec / 3600) % 24;
  const mins = Math.floor(totalSec / 60) % 60;
  const sec = Math.floor(totalSec % 60);
  console.log(days, hours, mins, sec);

  daysEl.innerHTML = format(days);
  hoursEl.innerHTML = format(hours);
  minsEl.innerHTML = format(mins);
  secEl.innerHTML = format(sec);
}
function format(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);