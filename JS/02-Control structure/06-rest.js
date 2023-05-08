//  ...element

function addition(number1, number2, ...number3) {
  let result = number1 + number2;
  number3.forEach(function (n) {
    result += n;
  });
  console.log(result);
}

addition(1, 2, 3, 4, 5); // 15
