const rightAnswer = document.querySelector(".good_answer")
const rightAnswer_question1 = document.querySelector("#reponse2_question1")
const rightAnswer_question2 = document.querySelector("#reponse3_question2")
const rightAnswer_question3 = document.querySelector("#reponse1_question3")
const rightAnswer_question4 = document.querySelector("#reponse1_question4")
const rightAnswer_question5 = document.querySelector("#reponse2_question5")
const rightAnswer_question6 = document.querySelector("#reponse3_question6")
const badAnswer = document.querySelectorAll(".bad_answer")
const badAudio = new Audio("/assets/pacman_death.mp3")
const goodAnswer = document.querySelectorAll(".good_answer")
const goodAudio = new Audio("/assets/pacman_beginning.mp3")
const finalAudio = new Audio("/assets/2Pac_me_against_the_world.mp3")

// Réglez le volume des éléments audio (0.5 signifie 50% du volume original)

badAnswer.addEventListener("click", () => {
  badAudio.play()
})

goodAnswer.addEventListener("click", () => {
  goodAudio.play()
})
