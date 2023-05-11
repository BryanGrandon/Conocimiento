const anonymousFunction = function (name, coffee) {
  if (coffee) {
    console.log(`${name} wants a coffee`);
  } else {
    console.log(`${name} doesn't want a coffee`);
  }
};

anonymousFunction("Bryan", true);

// Arrow function

const arrowFunction = (name, coffee) => {
  if (coffee) {
    console.log(`${name} wants a coffee`);
  } else {
    console.log(`${name} doesn't want a coffee`);
  }
};

arrowFunction("Andres", true);
