var elsaScore = 0; //score counter for Elsa
var annaScore = 0; //score counter for Anna
var questionDone = 0; //tracks number of questions completed

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
//adding buttons and functions
restart.addEventListener("click", startOver);

q1a1.addEventListener("click", Elsa);
q1a2.addEventListener("click", Anna);

q2a1.addEventListener("click", Anna);
q2a2.addEventListener("click", Elsa);

q3a1.addEventListener("click", Anna);
q3a2.addEventListener("click", Elsa);
  
function Anna() {
  annaScore += 1;
  questionDone += 1;
  console.log("Question Count: " + questionDone + "Anna Score: " + annaScore);
  
  if (questionDone == 3) {
    console.log("End of Quiz")
    updateScore();
  }
}

function Elsa() {
  elsaScore += 1;
  questionDone += 1;
  console.log("Question Count: " + questionDone + "Elsa Score: " + elsaScore);
  
  if (questionDone == 3) {
    console.log("End of Quiz");
    updateScore();
  }
}

function updateScore() {
  if (annaScore > elsaScore) {
    console.log("You are like Princess Anna")
    result.innerHTML = "You are a like Princess Anna"
  } else if (elsaScore > annaScore) {
    console.log("You are like Queen Elsa")
    result.innerHTML = "You are like Queen Elsa!"
}
}

function startOver() {
  result.innerHTML = "You are like ..."
  questionDone = 0;
  elsaScore = 0;
  annaScore = 0;
  console.log("Question Count: " + questionDone + " Elsa Score: " + elsaScore + " Anna Score: " + annaScore);

}
