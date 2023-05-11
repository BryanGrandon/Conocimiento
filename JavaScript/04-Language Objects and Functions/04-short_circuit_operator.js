// short circuit OR

function hello(name) {
  name = name || "unknown";
  console.log(`Hello ${name}`);
}
hello(); // Hello desconocido
hello("Bryan"); // hello Bryan

// short circuit AND

function age(age) {
  result = age < 18 && "minor";
  if (result === false) {
    result = "of legal age";
  }
  console.log(`Hello ${result}`);
}

age(13); // Hello minor

// designate in the variable itself

function hello2(name = "unknown") {
  console.log(`Hello ${name}`);
}
hello2("Bryan");
