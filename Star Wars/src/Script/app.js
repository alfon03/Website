const audio = document.getElementById("audio");
const boton = document.getElementById("boton");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    boton.innerHTML = "Pause";
  } else {
    audio.pause();
    boton.innerHTML = "Play";
  }
}

