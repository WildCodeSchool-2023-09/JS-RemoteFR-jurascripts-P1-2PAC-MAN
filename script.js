


const rightAnswer = document.querySelectorAll("h4.a");
const wrongAnswer = document.querySelectorAll("h4.b");

rightAnswer.addEventListener("click", function (event) {
    rightAnswer.style.color = "#00e5a1";
    alert("Bravo tu as gagné 10 points !");
  
})