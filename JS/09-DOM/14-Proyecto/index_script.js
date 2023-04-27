import countdown from "./Scripts/cuenta_regresiva.js";
import hamburgerMenu from "./Scripts/hamburger_menu.js";
import { alarm, digitalClock } from "./Scripts/reloj_alarm.js";
import { moveBall, shortcuts } from "./Scripts/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  // Menu Hamburger
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  // Reloj Alarm
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm.mp3", "#activar-alarm", "#desactivar-alarm");
  // Cuenta regresiva
  countdown("countdown", "December 19, 2023", "Feliz Cumpleaños Bryan Grandon");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
