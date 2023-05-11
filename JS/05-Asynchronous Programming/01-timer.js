// Run the code once
let timer1 = setTimeout(() => {
  console.log("code in setTimeout");
}, 1000); // 1s -> 1000ms

clearTimeout(timer1); // -> Finish code

// Runthe code indefinitely
let timer2 = setInterval(() => {
  console.log("code in setInterval");
}, 3000);

clearInterval(timer2); // -> Finish code
