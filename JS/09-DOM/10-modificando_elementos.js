/* 
.insertAbjacent....
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

Positions:
    beforebegin(hermano anterior)
    afterend(hermano siguiente)

    afterbegin(primer hijo)
    beforeend(ultimo hijo)
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
    <img src=""http://placekitten.com/ alg="Cat">
    <figcaption></figcaption>
`;
$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Cat");

// Forma de ingresar el contenido

// Primer hijo
$cards.prepend($newCard);

// Ultimo hijo
$cards.append($newCard);

// Hermano anterior
$cards.before($newCard);

// Hermano posterior
$cards.after($newCard);
