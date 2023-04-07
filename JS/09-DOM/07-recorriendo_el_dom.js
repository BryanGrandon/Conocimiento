const $cards = document.querySelector(".cards");

console.log($cards);

// Referencia a los hijos del elemento
console.log($cards.children);

// Referenciar hijo en particular
console.log($cards.children[2]);

// Obtener el elemento padre del elemeneto
console.log($cards.parentElement);

// Referencia al primer hijo del elemento
console.log($cards.firstElementChild);

// Referencia al ultimo hijo del elemento
console.log($cards.lastElementChild);

// referencia al hermano anterior del elemento
console.log($cards.previousElementSibling);

// Referencia al hermano despues del elemeno
console.log($cards.nextElementSibling);

// Obtener el elemento padre mas sercano del selector establecido
console.log($cards.closest("div"));
console.log($cards.children[2].closest("section"));
