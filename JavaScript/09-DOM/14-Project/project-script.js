import { alarm, digitalClock } from "./Functions/clock-alarm.js";
import countdown from "./Functions/countdown.js";
import darkTheme from "./Functions/dark-theme.js";
import userDeviceInfo from "./Functions/device-detection.js";
import getGeolocation from "./Functions/geolocation.js";
import hamburgerMenu from "./Functions/hamburger-menu.js";
import { moveBall, shortcuts } from "./Functions/keyboard-events.js";
import networkStatus from "./Functions/network-status.js";
import responsiveTester from "./Functions/responsive-tester.js";
import scrollTopButtton from "./Functions/scroll-button.js";
import webcam from "./Functions/webcam.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#active-clock", "#disable-clock");
  alarm("Assets/alarm.mp3", "#active-alarm", "#disable-alarm");
  countdown("countdown", "December 19, 2023", "Happy birthday Bryan Grandon");
  scrollTopButtton(".scroll-top-btn");
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocation");
});

// keyboard events
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

// Dark theme
darkTheme(".dark-theme-btn", "dark-mode");

// Networ Status
networkStatus();
