let btnCall = document.querySelectorAll(".call-icon");
let form = document.querySelector(".callback");
let mainMain = document.querySelector(".main-content");
let main = document.querySelector(".main");
let closeIcon = document.querySelectorAll(".icon-close");
let burgerMenu = document.querySelector(".aside");

btnCall.forEach(function (btn) {
  btn.addEventListener("click", function () {
    form.classList.add("show-feedback");
    mainMain.classList.add("opacity");
    burgerMenu.classList.add("opacity");
  });
});

closeIcon.forEach(function (btnn) {
  btnn.addEventListener("click", function () {
    form.classList.remove("show-feedback");
    mainMain.classList.remove("opacity");
    burgerMenu.classList.remove("opacity");
  });
});

main.onclick = function () {
  form.classList.remove("show-feedback");
  mainMain.classList.remove("opacity");
  burgerMenu.classList.remove("show-burger");
  burgerMenu.classList.remove("opacity");
};
