"use strict";
/*
console.log(document.querySelector(".message").textContent);   //for textContent

document.querySelector(".message").textContent = "Correct_Number!";   // for 'textContent' along with assigning a value.
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 12;

console.log((document.querySelector(".guess").value = 23));   //for 'Value' along with assigning a value.
*/

/*
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //This is logic for when user dont enter any input //Here exactly what happens is 'When we won't enter any value in the input field then automatically it will take the value as 0(zero) which is a falsy value. So we will place a !(negation) before thatt guess so that when the 'if' has some value then it will display some message to console as(Enter a valid number).
    document.querySelector(".message").textContent = "Enter a  valid input 😟";
  }
});


*/
let guess;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "Enter a valid number";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🏆Correct Answer";
      document.querySelector(".number").textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
        //BUT LATER KNOW THE REASON WHY IS : if (score > highscore) {
        // document.querySelector(".highscore").textContent = score; NOT WORKING.
      }
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "📈Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "📉Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You Lost the Game";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  console.log(secretNumber);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

if (guess !== secretNumber) {
  document.querySelector(".messaage").textContent =
    guess > secretNumber ? "📈Too High" : "📉Too Low";
}
