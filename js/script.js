// toggle active
const navbarNav = document.querySelector(".navbar-nav");

//menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// di luar ilang
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function startDinoGame() {
  window.location.href = 'menu.html'; // Ganti dengan nama file game Dino yang sebenarnya
}

function startDinoGame() {
  window.location.href = 'dino_game.html'; // Ganti dengan nama file game Dino yang sebenarnya
}

function startAnotherGame() {
  window.location.href = 'another_game.html'; // Ganti dengan nama file game lain yang sebenarnya
}
