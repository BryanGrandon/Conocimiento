"use strict";
let x = "value 2";

switch (x) {
  case "value 1": // if (x === "value 1")
    break;

  case "value 2": // if (x === "value 2")
    break;

  default: // esle
    break;
}

// Example
let browser = "Opera";

switch (browser) {
  case "Opera":
    console.log("You have Opera!");
    break;

  // case grouping
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Edge":
    console.log("Ok, we support these browsers too");
    break;

  default:
    console.log("We hope this page looks good!");
}
