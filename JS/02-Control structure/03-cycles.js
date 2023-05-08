//  FOR , FOR IN , FOR OF

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

const object = {
  keyA: 21,
  keyB: "Bryan",
};

for (key in object) {
  console.log(key);
}

const array = ["Bryan", 21];

for (index in array) {
  console.log(index);
}

for (values of array) {
  console.log(values);
}

// WHILE

let start = true;

while (start) {
  let number = Math.round(Math.random() * 18);
  console.log(number);

  if (number >= 18) {
    console.log(`Strictly of legal age`);
    start = false;
  }
}
