//fetching the innertext of the scoreboard
let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
//fetching the innertext of the button
let buttonText = document.getElementsByClassName("btn");

let scoreNum = 0;

//incrementing the score by 1, 2, or 3 for home team
function increment1() {
  //incrementing the score by 1
  scoreNum += 1;
  homeScore.textContent = scoreNum; 
}


function increment2() {
  //incrementing the score by 2
  scoreNum += 2;
  homeScore.textContent = scoreNum; 
} 

function increment3() {
  //incrementing the score by 3
  scoreNum += 3;
  homeScore.textContent = scoreNum; 
} 

function reset() {
    //resetting the score to 0
    scoreNum = 0;
    homeScore.textContent = scoreNum; 
    guestScore.textContent = scoreNum;
}

//incrementing the score by 1, 2, or 3 for guest team
function increment11() {
  //incrementing the score by 1
  scoreNum += 1;
  guestScore.textContent = scoreNum; 
}


function increment22() {
  //incrementing the score by 2
  scoreNum += 2;
  guestScore.textContent = scoreNum; 
} 

function increment33() {
  //incrementing the score by 3
  scoreNum += 3;
  guestScore.textContent = scoreNum; 
} 



