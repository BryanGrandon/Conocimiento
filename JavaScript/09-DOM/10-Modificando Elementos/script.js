/* 
.insertAdjacent...
    .insertAdjacentElement(position, elemento)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

position:
    beforebegin (hermano anterior)
    afterend (hermano siguiente)

    afterbegin (primer hijo)
    beforeend (ultimo hijo)
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
    <img src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg" alt="Arquitectura">
    <figcaption></figcaption>
`;
$newCard.insertAdjacentHTML("afterbegin", $contenCard);
// Ingresar el contenido como Ultimo hijo
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard
  .querySelector("figcaption")
  .insertAdjacentText("afterbegin", "Arquitectura en JS");

$newCard.classList.add("card");
$newCard.classList.add("ejemplo");

// Otra Forma de ingresar el contenido

// primer hijo
setTimeout(() => {
  $cards.prepend($newCard);
}, 1000);

// Ultimo hijo
setTimeout(() => {
  $cards.append($newCard);
}, 2000);

// Hermano anterior
setTimeout(() => {
  $cards.before($newCard);
}, 3000);

// Hermano postereior
setTimeout(() => {
  $cards.after($newCard);
}, 4000);
