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

function redirectToBot() {
  window.location.href = "";
}

// Menu

const menuModal = document.getElementById("menu");
const openModalBtn = document.getElementById("menu-open");
const closeModal = document.getElementById("menu-close");
const links = document.querySelectorAll(".menu__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

openModalBtn.addEventListener("click", () => {
  menuModal.classList.add("menu--active");
  openModalBtn.style.display = "none";
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  closeMenu();
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeMenu();
  }
});

function closeMenu() {
  menuModal.classList.remove("menu--active");
  openModalBtn.style.display = "flex";
  document.body.style.overflow = "";
}
