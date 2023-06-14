"use strict";
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

i = 0;
while (i < 500) {
  i++;
  if (i == 3) continue;
  if (i == 5) break;
  console.log(i);
}
