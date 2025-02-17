"use strict";

const elPlayers = document.querySelectorAll(".player");
const elCurrentScorePlayer1 = document.querySelector("#current--0");
const elCurrentScorePlayer2 = document.querySelector("#current--1");
const elTotalScorePlayer1 = document.querySelector("#score--0");
const elTotalScorePlayer2 = document.querySelector("#score--1");
const elDice = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnHoldScore = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

let activePlayer,
  dieNumber,
  currentScore = 0;
let totalScores = [0, 0];

elDice.classList.add("hidden");
let noWinnerYet = true;

// Roll dice
btnRollDice.addEventListener("click", function () {
  if (noWinnerYet) {
    elDice.classList.remove("hidden");
    dieNumber = Math.trunc(Math.random() * 6 + 1);
    elDice.setAttribute("src", `dice-${dieNumber}.png`);
    if (dieNumber !== 1) {
      currentScore += dieNumber;
      refreshCurrentScore();
    } else {
      currentScore = 0;
      refreshCurrentScore();
      toggleActivePlayer();
    }
  }
});

// Hold current score
btnHoldScore.addEventListener("click", function () {
  // Refresh total score
  if (noWinnerYet) {
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[
      activePlayer
    ] += currentScore;

    // Sets winner
    if (totalScores[activePlayer] >= 100) {
      elPlayers[activePlayer].classList.add("player--winner");
      noWinnerYet = false;
      elDice.classList.add("hidden");
    } else {
      currentScore = 0;
      refreshCurrentScore();
      toggleActivePlayer();
    }
  }
});

// Reset game
btnNewGame.addEventListener("click", function () {
  elDice.classList.add("hidden");
  currentScore = 0;
  totalScores = [0, 0];
  noWinnerYet = true;
  // prettier-ignore
  elCurrentScorePlayer1.textContent = elCurrentScorePlayer2.textContent = 0;
  // prettier-ignore
  elTotalScorePlayer1.textContent = elTotalScorePlayer2.textContent = 0;
  // Removes unique class
  document.querySelector(".player--winner").classList.remove("player--winner");

  if (elPlayers[1].classList.contains("player--active")) {
    toggleActivePlayer();
  }
});

// Refresh current score
const refreshCurrentScore = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

// // Refresh current score ########## before refactoring
// const refreshCurrentScore = function () {
//   !activePlayer
//     ? (elCurrentScorePlayer1.textContent = currentScore)
//     : (elCurrentScorePlayer2.textContent = currentScore);
// };

// Toggle active player
const toggleActivePlayer = function () {
  activePlayer = activePlayer ? 0 : 1;
  // ############ before refactoring
  // activePlayer ? (activePlayer = 0) : (activePlayer = 1);

  for (let i = 0; i < elPlayers.length; i++) {
    elPlayers[i].classList.toggle("player--active");
  }
};
