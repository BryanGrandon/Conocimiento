const d = document;
let x = 0,
  y = 0;

export function shortcuts(e) {
  //   console.log(e.type);
  //   console.log(e.key);
  //   console.log(e.keyCode);

  //   console.log(`ctrl: ${e.ctrlKey}`);
  //   console.log(`ctrl: ${e.altKey}`);
  //   console.log(`ctrl: ${e.shiftKey}`);

  if (e.key === "l" && e.ctrlKey) {
    alert("Hay lanzado una alerta con el teclado");
  }
  // p => 80
  if (e.keyCode === 80 && e.altKey) {
    prompt("Haz lanzado un avido con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmacion con el teclado");
  }
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  //   console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        x--;
        e.preventDefault();
      }
      break;

    case 38:
      if (limitsBall.top > limitsStage.top) {
        y--;
        e.preventDefault();
      }
      break;

    case 39:
      if (limitsBall.right < limitsStage.right) {
        x++;
        e.preventDefault();
      }
      break;

    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        y++;
        e.preventDefault();
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
