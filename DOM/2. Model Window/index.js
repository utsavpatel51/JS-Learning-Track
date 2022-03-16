"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtns = document.querySelectorAll(".show-modal");
const closeDig = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};
showBtns.forEach((showBtn) =>
	showBtn.addEventListener("click", function () {
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	})
);

closeBtn.addEventListener("click", closeDig);
overlay.addEventListener("click", closeDig);

document.addEventListener("keydown", function (e) {
	if (e.key.toLowerCase() === "escape" && !modal.classList.contains("hidden"))
		closeDig();
});
