"use strict";

let range = 20;

const generateSecretNumber = () => Math.floor(Math.random() * range) + 1;
let secretNumber = generateSecretNumber();

const getElement = (selector) => document.querySelector(selector);

const formGuess = getElement(".guess-form");
const againGame = getElement("#again-game-btn");
const finalResult = getElement(".final-result-label");
const formSubmit = getElement('input[type="submit"]');
const userInput = formGuess.querySelector(".user-guess-input");
const resultLabel = getElement(".result-label");
const scoreLabel = getElement(".score-label");
const highScoreLabel = getElement(".high-score-label");

let score = +scoreLabel.dataset.defaultValue;
let highScore = +highScoreLabel.dataset.defaultValue;

const displayMessage = function (message) {
	resultLabel.textContent = message;
};

formGuess.addEventListener("submit", function (e) {
	e.preventDefault();
	let userInputValue = userInput.value;

	if (userInputValue === "" || Number(userInputValue) === NaN) {
		displayMessage("⛔ Not a Number");
		score -= 1;
	} else if (Number(userInputValue) === secretNumber) {
		displayMessage("🎉 Correct!");
		document.body.style.backgroundColor = "#60b347";
		finalResult.textContent = secretNumber;
		finalResult.parentElement.style.width = "20rem";
		formSubmit.setAttribute("disabled", "true");
		if (score > highScore) {
			highScore = score;
			highScoreLabel.textContent = highScore;
		}
	} else if (Number(userInputValue) !== secretNumber) {
		displayMessage(
			Number(userInputValue) > secretNumber ? "📈 Too high" : "📉 Too low"
		);
		score -= 1;
	}
	if (score <= 0) {
		displayMessage("💀 You lose! try again!");
		formSubmit.setAttribute("disabled", "true");
	}
	scoreLabel.textContent = score;
});

// Game restart
againGame.addEventListener("click", function (e) {
	secretNumber = generateSecretNumber();
	document.body.style.backgroundColor = "#222";
	finalResult.textContent = "?";
	finalResult.parentElement.style.width = "10rem";
	formSubmit.removeAttribute("disabled");
	userInput.value = "";
	displayMessage(resultLabel.dataset.defaultValue);
	score = +scoreLabel.dataset.defaultValue;
	scoreLabel.textContent = score;
});
