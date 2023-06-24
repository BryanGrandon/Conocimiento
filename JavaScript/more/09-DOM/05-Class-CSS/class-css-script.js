const d = document;

// ------ Card-1
const $card1 = d.querySelector(".card-1");

// Check if a class is in the element
const classShape = `('shape') = ${$card1.classList.contains("shape")}`;

// Add classes
$card1.classList.add("add-class");

// ------ Card-2
const $card2 = d.querySelector(".card-2");

// If the class is there, delete it
$card2.classList.toggle("main-color");
// If the class is not there, add it
$card2.classList.toggle("optional-color");

// ------ Card-3
const $card3 = d.querySelector(".card-3");

// Remplace one class with another
$card3.classList.replace("shape", "optional-shape");

// Delete class
$card3.classList.remove("main-color");

// -------------------
const cards = {
  card1: {
    // List of element classes
    classList: $card1.classList,
    // Name of element classes
    className: $card1.className,
    contains: classShape,
    addClass: "add-class",
  },
  card2: {
    toggle1: "main-color",
    toggle2: "optional-color",
    className: $card2.className,
  },
  card3: {
    replace: "shape , optional-shape",
    remove: "main-color",
    className: $card3.className,
  },
};

console.log(cards);
