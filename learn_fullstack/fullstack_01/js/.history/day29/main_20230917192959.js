var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

var countEvent = new Event("count");
console.log(countEvent);

btn.addEventListener("click", function () {
  // if count == 10 show content "hello f8" in div message
  if (+countEl.innerHTML === 9) {
    // message.innerHTML = "hello f8";
    countEl.dispatchEvent(countEvent);
  }
  countEl.innerText++;
});

countEl.addEventListener("count", function () {
  console.log("success");
});
