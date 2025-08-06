//fetching the innertext of the scoreboard
let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
//fetching the innertext of the button
let buttonText = document.getElementsByClassName("btn");

let homeScoreNum = 0;
let guestScoreNum = 0;

//incrementing the score by 1, 2, or 3 for home team
function increment1() {
  //incrementing the score by 1
  homeScoreNum += 1;
  homeScore.textContent = homeScoreNum; 
}


function increment2() {
  //incrementing the score by 2
  homeScoreNum += 2;
  homeScore.textContent = homeScoreNum; 
} 

function increment3() {
  //incrementing the score by 3
  homeScoreNum += 3;
  homeScore.textContent = homeScoreNum; 
} 



//incrementing the score by 1, 2, or 3 for guest team
function increment11() {
  //incrementing the score by 1
  guestScoreNum += 1;
  guestScore.textContent = guestScoreNum; 
}


function increment22() {
  //incrementing the score by 2
  guestScoreNum += 2;
  guestScore.textContent = guestScoreNum; 
} 

function increment33() {
  //incrementing the score by 3
  guestScoreNum += 3;
  guestScore.textContent = guestScoreNum; 
} 

function reset() {
    //resetting the score to 0
    homeScoreNum = 0;
    guestScoreNum = 0;
    homeScore.textContent = homeScoreNum; 
    guestScore.textContent = guestScoreNum;
    
}

