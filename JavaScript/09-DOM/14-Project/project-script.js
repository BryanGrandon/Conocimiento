import { alarm, digitalClock } from "./Functions/clock-alarm.js";
import countdown from "./Functions/countdown.js";
import hamburgerMenu from "./Functions/hamburger-menu.js";
import { moveBall, shortcuts } from "./Functions/keyboard-events.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#active-clock", "#disable-clock");
  alarm("Assets/alarm.mp3", "#active-alarm", "#disable-alarm");
  countdown("countdown", "December 19, 2023", "Happy birthday Bryan Grandon");
});

// keyboard events
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
