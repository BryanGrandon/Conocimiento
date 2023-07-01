"use strict";

const $elementStyle = document.querySelector(".styles");

// Element Value
const $colorStyle = getComputedStyle($elementStyle).getPropertyValue("color"),
  $fontWeight = getComputedStyle($elementStyle).getPropertyValue("font-weight");

console.log($colorStyle, $fontWeight);

// Set properties CSS
$elementStyle.style.setProperty("text-align", "center");
$elementStyle.style.setProperty("padding", "5px");
$elementStyle.style.setProperty("border-radius", "10px");
$elementStyle.style.setProperty("border", "1px solid #000");

// Added Properties
console.log($elementStyle.getAttribute("style"));

// CSS Variables
const $html = document.documentElement;

let backgroundColor =
  getComputedStyle($html).getPropertyValue("--background-color");

$elementStyle.style.setProperty("background-color", backgroundColor);

// Change the value of the variable
let colorText = "#acc";
$html.style.setProperty("--background-color", colorText);

backgroundColor =
  getComputedStyle($html).getPropertyValue("--background-color");

$html.style.setProperty("background-color", "var(--background-color)");

const allStyles = $html.style;
console.log(allStyles);
