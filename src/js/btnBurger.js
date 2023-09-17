let burger = document.getElementById("burger");
let burgerMenu = document.querySelector(".aside");
let closeBt = document.getElementById("icon-close");
let mainMain = document.querySelector(".main-content");
let main = document.querySelector(".main");

burger.onclick = function () {
  burgerMenu.classList.add("show-burger");
  mainMain.classList.add("opacity");
};

closeBt.onclick = function () {
  burgerMenu.classList.remove("show-burger");
  mainMain.classList.remove("opacity");
};

main.onclick = function () {
  burgerMenu.classList.remove("show-burger");
  mainMain.classList.remove("opacity");
};
