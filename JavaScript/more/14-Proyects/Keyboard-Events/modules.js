import events from "./Modules/keyboard-event.js";

document.addEventListener("keydown", (e) => {
  events(e, ".key", ".keyCode");
});
