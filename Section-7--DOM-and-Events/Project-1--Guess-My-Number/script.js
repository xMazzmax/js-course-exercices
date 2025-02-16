"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  if (document.querySelector(".guess").value) {
    const guess = Number(document.querySelector(".guess").value);

    if (score > 0) {
      if (guess !== secretNumber) {
        document.querySelector(".message").textContent =
          guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
        score--;
        document.querySelector(".score").textContent = score;
        if (score === 0) {
          document.querySelector(".message").textContent = "😵 You lost!";
        }
      } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🏆 You win!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "#4d8f39";
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
      }
    }
  } else document.querySelector(".message").textContent = "⛔ Not a number!";
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});
