const $cards = document.querySelector(".cards");

// Forma 1

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animal");

$img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_960_720.jpg"
);
$img.setAttribute("alt", "Animal");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// Forma 2

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
<img src="https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441426_960_720.png" alt="Coffee" />
<figcaption>Coffee</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

// Para Multiples Elementos ----------------

const $main = document.querySelector("main");

// Forma 1 -> = e

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul"),
  $section = document.createElement("section");

$section.classList.add("section-js");
$ul.classList.add("lista");
$section.innerHTML = `<h3>Estaciones del año</h3>`;
$section.appendChild($ul);
$main.appendChild($section);

estaciones.forEach((e) => {
  const $li = document.createElement("li");
  $li.innerText = e;
  $ul.appendChild($li);
});

// Forma 2 -> += ``

const continenetes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul"),
  $section2 = document.createElement("section");

$section2.classList.add("section-js");
$ul2.classList.add("lista");
$section2.innerHTML = `<h3>Continentes</h3>`;
$section2.appendChild($ul2);
$main.appendChild($section2);

continenetes.forEach((e) => {
  $ul2.innerHTML += `<li>${e}</li>`;
});

// Forma 3 -> Fragment */

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $section3 = document.createElement("section"),
  $fragment = document.createDocumentFragment();

$section3.innerHTML = `<h3>Meses</h3>`;
$section3.classList.add("section-js");
$ul3.classList.add("lista");
$main.appendChild($section3);

meses.forEach((e) => {
  const $li = document.createElement("li");
  $li.textContent = e;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
$section3.appendChild($ul3);
