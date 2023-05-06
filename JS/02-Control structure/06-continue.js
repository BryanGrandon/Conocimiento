// Permite saltarnos el codigo restante pero continua con el ciclo

for (let i = 1; i < 6; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i); // 1, 2, 4, 5
}
