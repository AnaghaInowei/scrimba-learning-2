//fetching the innertext of the scoreboard
let score = document.getElementById('score');

//fetching the innertext of the button
let buttonText = document.getElementsByClassName('btn');

let scoreNum = 0;

function increment1() {
  //incrementing the score by 1
  score.textContent = parseInt(score.innerText) + 1; 
}
