var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

btn.addEventListener("click", function () {
  // if count == 10 show content "hello f8" in div message
  if (+countEl.innerHTML === 9) {
    message.innerHTML = "hello f8";
  }
  countEl.innerText++;
});
