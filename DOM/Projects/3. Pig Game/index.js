"use strict";

const player0 = document.getElementById("player--0");
const player1 = document.getElementById("player--1");
const player0Score = document.getElementById("score--0");
const player1Score = document.getElementById("score--1");
const player0CurrentScore = document.getElementById("current--0");
const player1CurrentScore = document.getElementById("current--1");
const diceImg = document.querySelector(".dice-img");
const newGameBtn = document.querySelector(".btn--new");
const roleDiceBtn = document.querySelector(".btn--dice");
const holdBtn = document.querySelector(".btn--hold");
const winnerDiv = document.getElementById("player--winner");

let scores, activePlayerScore, activePlayer;
let isPlaying = false;

const newGame = function () {
	scores = [0, 0];
	activePlayerScore = 0;
	activePlayer = 0;
	isPlaying = true;

	player0.classList.add("player--active");
	player1.classList.remove("player--active");

	player0Score.textContent = 0;
	player1Score.textContent = 0;

	player0CurrentScore.textContent = 0;
	player0CurrentScore.textContent = 0;

	player0.classList.remove("player--winner");
	player1.classList.remove("player--winner");

	winnerDiv.classList.add("hidden");
	winnerDiv.textContent = "";
	diceImg.classList.add("hidden");
	roleDiceBtn.classList.remove("hidden");
	holdBtn.classList.remove("hidden");
};

const switchPlayer = function () {
	activePlayerScore = 0;
	activePlayer = 1 - activePlayer;
	player0.classList.toggle("player--active");
	player1.classList.toggle("player--active");
};

const updateActivePlayerScores = function (cScore, score) {
	if (Number.isFinite(cScore))
		document.getElementById(`current--${activePlayer}`).textContent =
			cScore;
	else if (Number.isFinite(score))
		document.getElementById(`score--${activePlayer}`).textContent = score;
};

// Load new initial game
newGame();

roleDiceBtn.addEventListener("click", function () {
	if (isPlaying) {
		const diceFace = Math.trunc(Math.random() * 6) + 1;
		diceImg.setAttribute("src", `./img/dice-${diceFace}.png`);
		diceImg.classList.remove("hidden");
		activePlayerScore += diceFace;
		if (diceFace === 1) activePlayerScore = 0;

		// Update activePlayer Current Score
		updateActivePlayerScores(activePlayerScore, null);

		// Switch Player if dice roll is 1
		if (diceFace == 1) switchPlayer();
	}
});

holdBtn.addEventListener("click", function () {
	if (isPlaying) {
		scores[activePlayer] = scores[activePlayer] + activePlayerScore;
		updateActivePlayerScores(null, scores[activePlayer]);
		updateActivePlayerScores(0, null);
		console.log(scores[activePlayer]);
		if (scores[activePlayer] >= 50) {
			diceImg.classList.add("hidden");
			roleDiceBtn.classList.add("hidden");
			holdBtn.classList.add("hidden");

			document
				.getElementById(`player--${activePlayer}`)
				.classList.remove("player--active");
			document
				.getElementById(`player--${activePlayer}`)
				.classList.add("player--winner");
			winnerDiv.classList.remove("hidden");
			winnerDiv.textContent = `Player ${activePlayer + 1} wins 🎊`;
			isPlaying = false;
		} else switchPlayer();
	}
});

newGameBtn.addEventListener("click", newGame);
