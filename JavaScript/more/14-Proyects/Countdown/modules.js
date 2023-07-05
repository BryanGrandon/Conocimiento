import countdown from "./Modules/countdown.js";

document.addEventListener("DOMContentLoaded", () => {
  countdown("#submit", "#reset", "#date", "#message", ".countdown");
});
