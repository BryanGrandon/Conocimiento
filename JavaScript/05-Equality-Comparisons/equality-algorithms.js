"use strict";

// isLooselyEqual (==)

console.log(null == undefined);
console.log(21 == "21");
console.log(1 == true);

console.log(0 == -0);

// isStrictlyEqual (===)

console.log(null === undefined);
console.log(21 === "21");
console.log(1 === true);

console.log(0 === -0);

// sameValue (Object.is())

console.log(Object.is(null, undefined));
console.log(Object.is(21, "21"));
console.log(Object.is(1, true));

// sameValueZero

console.log(Object.is(0, -0));
