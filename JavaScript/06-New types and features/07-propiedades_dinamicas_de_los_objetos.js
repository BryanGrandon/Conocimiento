/* las propiedades dinamicas en JavaScript son propiedades cuyo nombres pueden ser 
definidos y accedidos dinamicamente */

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  propiedad: "valor",
  [`id_${aleatorio}`]: "Valor Aleatorio",
};

const usuarios = ["jon", "bryan", "camila"];
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);
