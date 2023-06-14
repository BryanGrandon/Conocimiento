// for
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

for (let i = 1; i <= 20; i++) {
  if (i === 10) break;
  if (i % 2 == 0) continue;
  console.log(i); // 1, 3, 5
}
