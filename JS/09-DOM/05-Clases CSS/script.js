const $card = document.querySelector(".card");
console.log(`Lista de las clases del elemento:`);
console.log($card.classList);

console.log(` \nNombre de las clases del elemento:`);
console.log($card.className);

console.log(` \nComprueba si una clase esta en el elemento:`);
console.log($card.classList.contains("class"));

console.log(` \nAgregar una clase`);
$card.classList.add("class");
console.log($card.classList.contains("class"));

console.log(` \nSi esta la clase al elimina si no. La agrega`);
$card.classList.toggle("class");
console.log($card.classList.contains("class"));

$card.classList.toggle("class");
console.log($card.classList.contains("class"));

console.log(` \nRemplazar una clase por otra`);
$card.classList.replace("class", "class2");
console.log($card.classList.contains("class2"));

console.log(` \nEliminar una clase`);
$card.classList.remove("class2");
console.log($card.classList.contains("class2"));
