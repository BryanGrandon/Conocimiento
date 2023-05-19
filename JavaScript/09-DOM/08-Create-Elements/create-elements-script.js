const $cards = document.querySelector(".cards");

// Form 1

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

// Form 2

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
<img src="https://cdn.pixabay.com/photo/2022/09/08/17/15/cafe-7441426_960_720.png" alt="Coffee" />
<figcaption>Coffee</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

// For Multiple elements ----------------

// Form 1 -> = e
const $container = document.querySelector(".container");

const seasons = ["Spring", "Summer", "Autumn", "Winter"],
  $ul = document.createElement("ul"),
  $article = document.createElement("article");

$article.classList.add("section-js");
$ul.classList.add("list");
$article.innerHTML = `<h3>Seasons</h3>`;
$article.appendChild($ul);
$container.appendChild($article);

seasons.forEach((e) => {
  const $li = document.createElement("li");
  $li.innerText = e;
  $ul.appendChild($li);
});

// Form 2 -> += ``

const continents = [
    "North America",
    "South America",
    "Europe",
    "Africa",
    "Asia",
    "Australia",
    "Antarctica",
  ],
  $ul2 = document.createElement("ul"),
  $article2 = document.createElement("article");

$article2.classList.add("section-js");
$ul2.classList.add("list");
$article2.innerHTML = `<h3>Continents</h3>`;
$article2.appendChild($ul2);
$container.appendChild($article2);

continents.forEach((e) => {
  $ul2.innerHTML += `<li>${e}</li>`;
});

// Forma 3 -> Fragment */

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  $ul3 = document.createElement("ul"),
  $article3 = document.createElement("article"),
  $fragment = document.createDocumentFragment();

$article3.innerHTML = `<h3>Month</h3>`;
$article3.classList.add("section-js");
$ul3.classList.add("list");
$container.appendChild($article3);

months.forEach((e) => {
  const $li = document.createElement("li");
  $li.textContent = e;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
$article3.appendChild($ul3);
