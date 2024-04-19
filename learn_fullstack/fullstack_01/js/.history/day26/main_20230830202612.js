const span = document.querySelector(".progress-dot");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

// case 1
var progressBarLeft = progressBar.offsetLeft;
progressBar.addEventListener("click", function (e) {
  var pageX = e.pageX;
  progress.style.width = `${pageX - progressBarLeft}px`;
});

var flag = false;
var initialClientX = 0;
console.log(span);
span.addEventListener("mousedown", function (e) {
  e.preventDefault();
  flag = true;
  initialClientX = e.clinetX;
  console.log("mousedown");
});

document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  console.log(flag);
  if (flag) {
    console.log("mousemove" + e.pageX);
    progress.style.width = `${e.pageX - progressBarLeft}px`;
  }
});

document.addEventListener("mousedown", function (e) {
  e.preventDefault();
  flag = false;
});
