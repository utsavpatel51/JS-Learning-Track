const totalProject = document.querySelectorAll(".project").length;

// Randomly change .project container grid span

const randomSpan = Math.trunc(Math.random() * totalProject) + 1;
const containerEle = document.querySelector(`.container`);

containerEle.childNodes[randomSpan].classList.add("grid-column-span");
