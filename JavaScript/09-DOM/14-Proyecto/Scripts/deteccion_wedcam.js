const d = document,
  n = navigator;
export default function wedCam(id) {
  const $video = d.getElementById(id);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        console.log(`Sucedio el siguiente error: ${err}`);
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
      });
  }
}
