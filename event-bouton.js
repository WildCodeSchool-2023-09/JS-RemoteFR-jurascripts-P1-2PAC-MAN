const badAnswer = document.querySelector(".bad_answer");
const badAudio = new Audio("/assets/pacman_death.mp3");


 badAnswer.addEventListener('click', () => {
    badAnswer.style.color = "#ff6086";
    alert("Mauvaise réponse");
    badAudio.play();
}
) 