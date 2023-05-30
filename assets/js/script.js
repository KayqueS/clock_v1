const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hoursToday = dateToday.getHours();
  let minutesToday = dateToday.getMinutes();
  let secondsToday = dateToday.getSeconds();

  if (hoursToday < 10) hoursToday = '0' + hoursToday;
  if (minutesToday < 10) minutesToday = '0' + minutesToday;
  if (secondsToday < 10) secondsToday = '0' + secondsToday;

  hours.textContent = hoursToday;
  minutes.textContent = minutesToday;
  seconds.textContent = secondsToday;
})