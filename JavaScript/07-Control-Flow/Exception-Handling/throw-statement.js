"use strict";

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(2, "a");
} catch (e) {
  console.error(e);
}
