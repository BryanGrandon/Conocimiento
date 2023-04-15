const $cards = document.querySelector(".cards");
console.log($cards);

console.log(`Referencia a los hijos del elemento`);
let hijos = $cards.children;
console.log(hijos);

console.log(`Referenciar hijo en particular [1]`);
let hijo2 = $cards.children[1];
console.log(hijo2);

console.log(`Obtener el padre del elemento`);
let padre = $cards.parentElement;
console.log(padre);

console.log(`Primer hijo del elememto`);
let primerHijo = $cards.firstElementChild;
console.log(primerHijo);

console.log(`Ultimo hijo del elemento`);
let ultimoElemento = $cards.lastElementChild;
console.log(ultimoElemento);

console.log(`Hermano anterior del elemento`);
let hermanoAnterior = $cards.previousElementSibling;
console.log(hermanoAnterior);

console.log(`Hermano despues del elemento`);
let hermanoDespues = $cards.nextElementSibling;
console.log(hermanoDespues);

console.log(`Obtener el elemento padre mas cercano `);
console.log($cards.children[1].closest("section"));
