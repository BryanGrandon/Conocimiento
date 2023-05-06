const array = [21, true, null, "string"];
console.log(array);

let element1 = array[0];
console.log(element1); // 21

let element4 = array[3];
console.log(element4); // string

// PROPERTIES

const fourElements = [1, 2, 3, 4];
console.log(fourElements.length); // 4

// METHODS

const addElementInArray = [1, true];
addElementInArray.push(4);
console.log(addElementInArray); // [ 1, true, 4 ]

const deleteElementInArray = [1, true, 4];
deleteElementInArray.pop();
console.log(deleteElementInArray); // [ 1, true ]

const arrayFull = [1, true, 2, false];
const arraySegment = arrayFull.slice(1, 3);
console.log(arraySegment); // [ true, 2 ]

const elementSplice = [1, 3];
elementSplice.splice(1 /* position */, 0 /* elements */, 2 /* value */);
console.log(elementSplice); // [ 1, 2, 3 ]

const arrayMapStart = [1, 2, 3];
const arrayMapEnd = arrayMapStart.map((x) => x + 10);
console.log(arrayMapEnd); // [ 11, 12, 13 ]

const arrayFilter = [12, 21, 30, 10];
const arrayFilterResult = arrayFilter.filter((x) => x >= 18);
console.log(arrayFilterResult); // [ 21, 30 ]

const forIteration = [21, 32];
const forEachElement = forIteration.forEach((e, i) => {
  console.log(`Element ${e} at index ${i}`);
});

const comprobation = [2, 4, 6];
// If an element satisfies the condition we get true
const anElement = comprobation.some((x) => x > 2);
console.log(anElement); // true
// If all element satidfies the condition we get true
const allElements = comprobation.every((x) => x > 2);
console.log(allElements); // false

const getElement = [2, 3, 4];
const firstElementObtained = getElement.find((x) => x > 2);
console.log(firstElementObtained); // 3
const indexOfTheFirstElementObtained = getElement.findIndex((x) => x > 2);
console.log(indexOfTheFirstElementObtained); // 1

const order = [2, 4, 1, 3];
const upwardOrder = order.sort((a, b) => (a > b ? 1 : -1));
console.log(upwardOrder); // [ 1, 2, 3, 4 ]
const downwardOrder = order.sort((a, b) => (a > b ? -1 : 1));
console.log(downwardOrder); // [ 4, 3, 2, 1 ]

const arrayForInvert = [2, 4, 1, 3];
const invertedArray = arrayForInvert.reverse();
console.log(invertedArray); // [ 3, 1, 4, 2 ]
