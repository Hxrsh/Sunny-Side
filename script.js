"use-strict";

const btnMob = document.querySelector(".mobile-mode");
const navEL = document.querySelector(".nav-el");

btnMob.addEventListener("click", function () {
  navEL.classList.toggle("open");
});
