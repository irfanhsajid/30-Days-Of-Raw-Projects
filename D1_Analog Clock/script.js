//step1: get the elements
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourhand = document.getElementById("hour-hand");

function clockTick() {
  //step2: set current date and calculating second, minute and hour
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  //step4: call the function
  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourhand, hours);
}

//step3: function to declare rotate operation
function rotateClockHand(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(clockTick, 1000);
