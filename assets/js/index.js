const repeatContainer = document.querySelector(".repeating-container");
const repeatText = document.querySelector(".repeating-text");
const text = "mustage.team / ";

const windowWidth = window.innerWidth;
const repeatCount = windowWidth / 195;
/**
 * TODO: Fix this
 */
for (let i = 0; i < repeatCount; i++) {
  const textElement = document.createElement("div");
  textElement.className = "repeating-text";
  textElement.textContent = text;
  repeatContainer.appendChild(textElement);
}
