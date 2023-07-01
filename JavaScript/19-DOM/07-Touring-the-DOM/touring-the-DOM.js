"use strict";
const $cards = document.querySelector(".cards");

const cards = {
  elementBrother: {
    children: $cards.children,
    firstElementChild: $cards.firstElementChild,
    lastElementChild: $cards.lastElementChild,
  },
  parentElement: $cards.parentElement,
  previousElementSibling: $cards.previousElementSibling,
  nextElementSibling: $cards.nextElementSibling,
};
console.log(cards);

let son2 = $cards.children[1];
console.log(son2);

// Get nearest parent element
console.log($cards.children[1].closest("section"));
