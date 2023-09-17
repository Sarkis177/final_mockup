let showButton = document.querySelector(".show-button");
let hideButton = document.querySelector(".hide-button");
let hideBig = document.querySelector(".hide-big");
let hideMedium = document.querySelector(".hide-medium");

hideButton.onclick = function () {
  hideBig.classList.toggle("hide");
  showButton.classList.toggle("show");
  hideButton.classList.toggle("hide");
  hideMedium.classList.toggle("hide");
};

showButton.onclick = function () {
  hideMedium.classList.toggle("hide");
  showButton.classList.toggle("show");
  hideButton.classList.toggle("hide");
  hideBig.classList.toggle("hide");
};

document.addEventListener("DOMContentLoaded", showButton.onclick);

let showButton2 = document.querySelector(".show-button2");
let hideButton2 = document.querySelector(".hide-button2");
let hideBig2 = document.querySelector(".hide-big2");
let hideMedium2 = document.querySelector(".hide-medium2");

hideButton2.onclick = function () {
  hideBig2.classList.toggle("hide");
  showButton2.classList.toggle("show");
  hideButton2.classList.toggle("hide");
  hideMedium2.classList.toggle("hide");
};

showButton2.onclick = function () {
  hideMedium2.classList.toggle("hide");
  showButton2.classList.toggle("show");
  hideButton2.classList.toggle("hide");
  hideBig2.classList.toggle("hide");
};

document.addEventListener("DOMContentLoaded", showButton2.onclick);
