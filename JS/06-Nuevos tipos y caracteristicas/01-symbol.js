/* son utilizados para crear identificadores unicos y se utilizan para evitar 
 que los nombres de las propiedades de un objeto sean sobrescritos por accidente. */

const ID = Symbol();
const ID2 = Symbol();

console.log(ID === ID2);
