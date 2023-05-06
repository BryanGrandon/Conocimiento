const object = {
  key: "value",
  name: "Bryan",
  object2: {
    age: 21,
  },
};
console.log(object);
// {key: 'value', name: 'Bryan', object2: {age: 21} }

console.log(object["key"]);
// value

console.log(object.name);
// Bryan

let age = 21;
let nameFamele = "Macarena";
const object2 = {
  age,
  nameFamele,
};

console.log(object2);
console.log(object2.nameFamele); // Macarena
