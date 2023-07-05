const d = document;
export default function countdown(
  buttonPlay,
  buttonStop,
  date,
  message,
  container
) {
  d.addEventListener("click", (e) => {
    const $countdown = d.querySelector(container),
      $date = d.querySelector(date).value,
      $message = d.querySelector(message).value,
      countdownDate = new Date($date).getTime();

    if (e.target.matches(buttonPlay)) {
      e.target.disabled = true;

      let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
          limitTime = countdownDate - now;

        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
          hours = Math.floor(
            (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((limitTime % (1000 * 60)) / 1000);

        if (days < 10) days = `0${days}`;
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;

        $countdown.innerHTML = `
            <p><i>${days}</i> days <i>${hours}</i> hours <i>${minutes}</i> minutes <i>${seconds}</i> seconds</p>
        `;

        if (limitTime < 0) {
          clearInterval(countdownTempo);
          $countdown.innerHTML = `<h3>${$message}</h3>`;
          d.querySelector(buttonPlay).disabled = false;
        }
      }, 1000);
    }
    if (e.target.matches(buttonStop)) {
      window.location.reload();
    }
  });
}
