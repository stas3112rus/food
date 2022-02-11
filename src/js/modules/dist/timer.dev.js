"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function timer() {
  // Timer
  var deadline = "2022-02-05";

  function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hour = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
    return {
      t: t,
      days: days,
      hour: hour,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(selector, endTime) {
    var timer = document.querySelector(selector),
        days = document.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function addZero(num) {
      if (num >= 0 && num < 10) {
        return "0".concat(num);
      } else {
        return num;
      }
    }

    function updateClock() {
      var t = getTimeRemaining(endTime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hour);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }

  setClock(".timer", deadline);
}

var _default = timer;
exports["default"] = _default;