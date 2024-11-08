const repeatContainers = document.querySelectorAll(".repeating-container");
const repeatText = document.querySelector(".repeating-text");
const text = "mustage.team";

const windowWidth = window.innerWidth;
const repeatCount = Math.ceil(windowWidth / 195) + 2;
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

// Get data from API

const countViews = document.getElementById("countView");
const countBotUsers = document.getElementById("countBotUsers");
const countGraduate = document.getElementById("countGraduate");

fetch("http://185.233.118.169:8666/all/users_count")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  })
  .then((data) => {
    countBotUsers.innerText = data.total + "+";
  })
  .catch((error) => {
    console.error("Error: ", error);
    countBotUsers.innerText = "5863+";
  });

fetch("http://185.233.118.169:8666/course/students_count")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  })
  .then((data) => {
    countGraduate.innerText = data.total_students + "+";
  })
  .catch((error) => {
    console.error("Error: ", error);
    countGraduate.innerText = "2991+";
  });

function redirectToBot() {
  window.location.href = "https://t.me/usaffiliate";
}

const pdfLinks = document.querySelectorAll(".link__pdf");

pdfLinks.forEach((link) => {
  link.href =
    "https://drive.google.com/viewerng/viewer?embedded=true&url=https://shapovalov-yehor.github.io/mustage_team_landing/assets/presentation.pdf";
});

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
