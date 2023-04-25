import hamburgerMenu from "./Scripts/hamburger_menu.js";
import { alarm, digitalClock } from "./Scripts/reloj_alarm.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  // Menu Hamburger
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  // Reloj Alarm
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm.mp3", "#activar-alarm", "#desactivar-alarm");
});
