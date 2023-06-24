import { alarm, digitalClock } from "./Modules/clock-alarm.js";
import countdown from "./Modules/countdown.js";
import darkTheme from "./Modules/dark-theme.js";
import userDeviceInfo from "./Modules/device-detection.js";
import getGeolocation from "./Modules/geolocation.js";
import hamburgerMenu from "./Modules/hamburger-menu.js";
import { moveBall, shortcuts } from "./Modules/keyboard-events.js";
import lottery from "./Modules/lottery.js";
import networkStatus from "./Modules/network-status.js";
import responsiveTester from "./Modules/responsive-tester.js";
import scrollTopButtton from "./Modules/scroll-button.js";
import searchFilter from "./Modules/search-filter.js";
import slider from "./Modules/slider.js";
import webcam from "./Modules/webcam.js";
import scrollSpy from "./Modules/scroll-spy.js";

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
  searchFilter(".card-filter", ".card");
  lottery("#winner-btn", ".player");
  slider();
  scrollSpy();
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
