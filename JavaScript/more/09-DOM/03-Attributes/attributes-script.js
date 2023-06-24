const attributes = {
  toAccess: {
    point: document.documentElement.lang,
    get: document.documentElement.getAttribute("lang"),
  },
};
console.log(attributes);

// Access the attributes of a class

const $classPointHref = document.querySelector(".link").href,
  $classGetHref = document.querySelector(".link").getAttribute("href");

const $class = {
  difference: { point: $classPointHref, get: $classGetHref },
};
console.log($class);

// Modify attribute value

const $link = document.querySelector(".link");

$link.setAttribute("href", "htpps://www.google.com");
$link.setAttribute("target", "_blank");
$link.setAttribute("rel", "noopener");

console.log($link);

// Data-attributes
// Start with the data

const $description = document.querySelector(".description");
$description.setAttribute("data-description", "Document Object Module");
console.log($description);
