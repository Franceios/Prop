const noBut = document.querySelector(".no");
const close = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay"); 

function playGokuAudio() {
    var audio = document.getElementById('GokuAudio');
    audio.play();
  }



noBut.addEventListener("click", function () {
    modal.classList.add("open-modal"); 
    playGokuAudio()
});
close.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});
