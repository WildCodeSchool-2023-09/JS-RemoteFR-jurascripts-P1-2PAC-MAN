import questionsList from "./questions"

const questionsArray = [];




// for (let i = 0; i < questionsList.length; i++) {
//     questionsArray.push(`
//       <div class="gameboy">
//       <div class="ecran">
//         <div class="question">
//           <p>
//             ${questionsList[i].question}
//           </p>
//         </div>
//         <ul class="reponse">
//           <li><button class="answer">${questionsList[i].answer1}</button></li>
//           <li><button class="answer">${questionsList[i].answer2}</button></li>
//           <li><button class="answer">${questionsList[i].answer3}</button></li>
//         </ul>
//       </div>
//       <a class="moreinfos" href="${questionsList[i].lien}">En savoir plus !</a>
//     </div>`)
   
// }

gameboy.innerHTML = questionsArray.join("");

function createGameboy() {
    
}