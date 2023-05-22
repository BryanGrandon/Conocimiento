import { alarm, digitalClock } from "./Functions/clock-alarm.js";
import hamburgerMenu from "./Functions/hamburger-menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#active-clock", "#disable-clock");
  alarm("Assets/alarm.mp3", "#active-alarm", "#disable-alarm");
});
