import hamburgerMenu from "./Scripts/hamburger_menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
