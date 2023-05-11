let isTrue = true;
let isFalse = false;

const valuesTendingToTrue = {
  boolean: true,
  object: {},
  array: [],
  string: "string",
  number: 0.1,
  infinite: Infinity,
};

const valuesTendingToFalse = {
  boolean: false,
  null: null,
  undefined: undefined,
  numberZero: 0,
  notANumber: NaN,
  stringEmpty: "",
};

if ([]) {
  console.log("true");
} else {
  console.log("false");
}
