"use strict";
/** .insertAdjacent:
 *  - .insertAdjacentElement(position, element)
 *  - .insertAdjacentHTML(position, html)
 *  - .insertAdjacentText(position, text)
 *
 *  Position
 *  - beforebegin (previous brother)
 *  - afterend (next brother)
 *  - afterbegin (first son)
 *  - beforeend (last son)
 */
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
    <img src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg" alt="Arquitectura">
    <figcaption></figcaption>
`;
$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard
  .querySelector("figcaption")
  .insertAdjacentText("afterbegin", "Architecture JS");

$newCard.classList.add("card");
$newCard.classList.add("example");

// Another way to enter the content

// first son
setTimeout(() => {
  $cards.prepend($newCard);
}, 2000);

// last son
setTimeout(() => {
  $cards.append($newCard);
}, 4000);

// previus brother
setTimeout(() => {
  $cards.before($newCard);
}, 6000);

// next brother
setTimeout(() => {
  $cards.after($newCard);
}, 8000);
