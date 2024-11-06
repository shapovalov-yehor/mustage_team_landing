const repeatContainers = document.querySelectorAll(".repeating-container");
const repeatText = document.querySelector(".repeating-text");
const text = "mustage.team";

const windowWidth = window.innerWidth;
const repeatCount = windowWidth / 195;
/**
 * TODO: Fix this
 */
repeatContainers.forEach((repeatContainer, index) => {
  for (let i = 0; i < repeatCount; i++) {
    const textElement = document.createElement("div");
    textElement.className = !index ? "repeating-text" : "repeating-text text-light";
    textElement.textContent = text;
    repeatContainer.appendChild(textElement);
  }
});

const countViews = document.getElementById("countView");
const countBotUsers = document.getElementById("countBotUsers");
const countGraduate = document.getElementById("countGraduate");
