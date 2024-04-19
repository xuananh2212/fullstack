var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

var countEvent = new Event("count");
var countMouseDow = new Event("countmousedow");
console.log(countEvent);

btn.addEventListener("click", function () {
  // if count == 10 show content "hello f8" in div message
  if (+countEl.innerHTML === 9) {
    // message.innerHTML = "hello f8";
    countEl.dispatchEvent(countEvent);
  }
  countEl.innerText++;
});
var flag = false;
btn.addEventListener("mousedown", function (e) {
  console.log("1");

  flag = true;
});

setInterval(function () {
  if (flag) {
    countEl.dispatchEvent(countMouseDow);
  }
}, 10);

btn.addEventListener("mousemove", function (e) {
  if (flag) {
    countEl.dispatchEvent(countMouseDow);
  }
});
btn.addEventListener("mouseup", function (e) {
  flag = false;
});
countEl.addEventListener("count", function () {
  console.log("success");
});

countEl.addEventListener("countmousedow", function () {
  countEl.innerText++;
});
