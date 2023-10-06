const rightAnswer = document.querySelector(".good_answer");
const rightAnswer_question1 = document.querySelector("#reponse2_question1");
const rightAnswer_question2 = document.querySelector("#reponse3_question2");
const rightAnswer_question3 = document.querySelector("#reponse1_question3");
const rightAnswer_question4 = document.querySelector("#reponse1_question4");
const rightAnswer_question5 = document.querySelector("#reponse2_question5");
const rightAnswer_question6 = document.querySelector("#reponse3_question6");
const badAnswer = document.querySelectorAll(".bad_answer");
const badAudio = new Audio("https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-2PAC-MAN/assets/pacman_death.mp3");
const goodAnswer = document.querySelectorAll(".good_answer");
const goodAudio = new Audio("https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-2PAC-MAN/assets/pacman_beginning.mp3");
const finalAudio = new Audio("https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-2PAC-MAN/assets/2Pac_me_against_the_world.mp3");

//goodAudio.volume = 0.02
//badAudio.volume = 0.02
//finalAudio.volume = 0.1

//tableau pour le comptage des points
const arrayPoints = [0]
const scoreTitle = document.querySelector(".score")
const result = document.createElement("p")
result.classList.add("score")
scoreTitle.appendChild(result)

const pacManImage1 = document.getElementById("LogoPacMan1")
const pacManImage2 = document.getElementById("LogoPacMan2")
const pacManImage3 = document.getElementById("LogoPacMan3")
const pacManImage4 = document.getElementById("LogoPacMan4")

function changerImagePacMan(question) {
  switch (question) {
    case 2:
      pacManImage1.style.display = "none"
      pacManImage2.style.display = "block"
      break
    case 4:
      pacManImage2.style.display = "none"
      pacManImage3.style.display = "block"
      break
    case 6:
      pacManImage3.style.display = "none"
      pacManImage4.style.display = "block"
      break
    default:
      break
  }
}

const reponseButtons = document.querySelectorAll(".reponse button")
let questionNumber = 0

//fonction pour l'interractivité des boutons
reponseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reponseButtons.forEach((btn) => {
      btn.style.color = ""
    })

    if (button.classList.contains("good_answer")) {
      button.style.backgroundColor = "#00e5a1"
      goodAudio.play()
      arrayPoints.push(10)
      const score = arrayPoints.reduce(
        (acc, currentValue) => acc + currentValue
      )
      result.innerText = score
      questionNumber++

      if (questionNumber === 2) {
        changerImagePacMan(2)
      } else if (questionNumber === 4) {
        changerImagePacMan(4)
      } else if (questionNumber === 6) {
        changerImagePacMan(6)
      }
      // Vérifie si le score atteint 60
      if (score === 60) {
        goodAudio.pause()
        finalAudio.play()
      }
    } else {
      button.style.backgroundColor = "#ff6086"
      badAudio.play()
    }
  })
})

export default arrayPoints

//   // Mettez à jour le texte du score affiché dans l'élément "score".
// const scoreTitle = document.querySelector(".score");
// scoreTitle.innerHTML = `Ton score : ${arrayPoints.reduce((acc, currentValue) => acc + currentValue)}`;
