"use strict";
/* 
Nodes:
    Each node represents a document part, such as an HTML element

Elements:
    The way to select the elements of the decument

Selectors:
    Are the values to enter have to be valid CSS selectors
*/

const elements = {
  id: {
    id: document.getElementById("div-id"),
  },

  class: {
    class: document.querySelector(".div-class"),
    allClass: document.querySelectorAll(".div-class"),
  },

  HTML_tag: {
    label: document.querySelector("ul"),
    allLabel: document.querySelectorAll("ul"),
  },

  Methods: {
    methodLength: document.querySelectorAll("a").length,
  },
};

for (let value of Object.values(elements)) {
  console.log(value);
}

console.log("forEach of the links");
document.querySelectorAll("a").forEach((e) => {
  console.log(e);
});
