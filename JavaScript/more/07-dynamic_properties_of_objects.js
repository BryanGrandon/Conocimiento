/* Dynamic properties in JavaScript are  properties whose names can be dynamically defined and accessd */

let random = Math.round(Math.random() * 100 + 5);
const objUser = {
  property: "valor",
  [`id_${random}`]: "Random value",
};

const users = ["jon", "bryan", "camila"];

users.forEach((user, index) => (objUser[`id_${index}`] = user));

console.log(objUser);
