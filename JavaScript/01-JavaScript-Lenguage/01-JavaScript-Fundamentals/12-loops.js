"use strict";

// while
let i = 0;
while (i < 3) {
  console.log(i); // 0, 1, 2
  i++;
}

// for
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// Breaking the loop
i = 0;
while (i <= 5) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2,
  i++;
}

// Continue to the next iteration
for (let i = 1; i <= 5; i++) {
  if (i === 2 || i === 4) continue;
  console.log(i); // 1, 3, 5
}

// Labels for break/continue
labelName: for (let i = 0; i < 2; i++) {
  console.log(i); // 0
  for (let x = 0; x < 100; x++) {
    if (x === 5) break labelName;
  }
}
