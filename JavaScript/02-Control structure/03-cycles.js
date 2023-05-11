//  FOR , FOR IN , FOR OF

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
const array = ["Bryan", 21];

for (index in array) {
  console.log(index);
}
for (values of array) {
  console.log(values);
}

//  break

for (let i = 1; i < 100; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

// continue

for (let i = 1; i < 10; i++) {
  if (i > 3 && i < 6) {
    continue;
  }
  console.log(i);
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
