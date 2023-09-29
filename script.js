const arrayPoints = [];
const rightAnswer = document.querySelector(".good_answer");


rightAnswer.addEventListener('click', () => {
     rightAnswer.style.color = "#00e5a1";
     alert("Bravo tu as gagné 10 points !");
     arrayPoints.push(10);

 })

let sum = 0;
for (let i = 0; i < arrayPoints.length; i++) {
     sum += arrayPoints[i];
}


// const score = document.getElementById("#score");
//     score.innerText= console.log(sum);


  //var bouton = document.getElementById("monBouton"); function actionDeClic(){" "}
  //{alert("Le bouton a été cliqué !")}; bouton.addEventListener("click",
  //actionDeClic);


