// let
let ambitoBloque = "Fuera";
{
  let ambitoBloque = "Interior";
  console.log(ambitoBloque); // Interior
}
console.log(ambitoBloque); // Fuera

// CONST
const CONSTANTE = "El valor No se puede cambiar al declararse";
CONSTANTE = 21; // Assignment to constant variable.
