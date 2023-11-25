"use strict";

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
