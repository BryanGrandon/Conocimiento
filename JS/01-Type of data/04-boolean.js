let declararTrue = true;
let declararFalse = false;

const valoresQueTiendenAVerdadero = {
  boolean: true,
  object: {},
  array: [],
  string: "string",
  number: 0.1 /* No el 0 */,
  infinito: Infinity,
};

const valoresQueTiendenAFalso = {
  boolen: false,
  nulo: null,
  indefinido: undefined,
  number: 0,
  notANumber: NaN,
  stringVacio: "",
};

if ([]) {
  console.log("true");
} else {
  console.log("false");
}
