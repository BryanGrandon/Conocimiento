const $card = document.querySelector(".card");

// Cantidad de clases que tenga el elemento
console.log($card.classList);
console.log(className);

// Comprobar si la clase esta en el elemento
console.log($card.classList.contains("class"));

// Agregar una clase
$card.classList.add("class");

// Si esta la clase la elimina
$card.classList.toggle("class");
// Si no esta la agrega
$card.classList.toggle("class");

// Remplazar una clase por otra
$card.classList.replace("class", "class2");

// Eliminar una clase
$card.classList.remove("class2");
