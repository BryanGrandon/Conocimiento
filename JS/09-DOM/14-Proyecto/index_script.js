import scrollTopButtton from "./Scripts/boton_scroll.js";
import countdown from "./Scripts/cuenta_regresiva.js";
import darkTheme from "./Scripts/dark_theme.js";
import userDeviceInfo from "./Scripts/deteccion_dispositivos.js";
import hamburgerMenu from "./Scripts/hamburger_menu.js";
import responsiveMedia from "./Scripts/objeto_responsive.js";
import responsiveTester from "./Scripts/prueba_responsive.js";
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
  // Scroll top
  scrollTopButtton(".scroll-top-btn");
  // Objeto responsive
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=QIeCGJKK9TA" target="_blank" rel="noopener" a>Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/QIeCGJKK9TA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/dWqiPdY9cQmYtJ2y8" target="_blank" rel="noopener" a>Ver </a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10777.265233320952!2d-70.6384637281991!3d-33.426096242040195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5f2c4b10d51%3A0xf5ed6089dea23c83!2sCerro%20San%20Crist%C3%B3bal!5e0!3m2!1ses!2scl!4v1682691814995!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  // Prueba Responsive
  responsiveTester("responsive-tester");
  // Deteccion de dispositivos
  userDeviceInfo("user-device");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

// Theme dark
darkTheme(".dark-theme-btn", "dark-mode");
