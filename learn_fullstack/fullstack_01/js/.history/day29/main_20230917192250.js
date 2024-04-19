var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

btn.addEventListener("click", function () {
  countEl.innerText++;
});
