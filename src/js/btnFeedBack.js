let btnCall = document.querySelectorAll(".feedback-icon");
let form = document.querySelector(".feedback");
let mainMain = document.querySelector(".main-content");
let main = document.querySelectorAll(".main");
let closeIcon = document.querySelectorAll(".icon-close");
let burgerMenu = document.querySelector(".aside");

btnCall.forEach(function (btn2) {
  btn2.addEventListener("click", function () {
    form.classList.add("show-feedback");
    mainMain.classList.add("opacity");
    burgerMenu.classList.add("opacity");
  });
});

closeIcon.forEach(function (btnn3) {
  btnn3.addEventListener("click", function () {
    form.classList.remove("show-feedback");
    mainMain.classList.remove("opacity");
    burgerMenu.classList.remove("opacity");
  });
});


main.forEach(function (btnn4) {
    btnn4.addEventListener("click", function () {
        form.classList.remove("show-feedback");
        mainMain.classList.remove("opacity");
        burgerMenu.classList.remove("show-burger");
        burgerMenu.classList.remove("opacity");
    });
  });



