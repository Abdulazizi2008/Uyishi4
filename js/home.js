const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
