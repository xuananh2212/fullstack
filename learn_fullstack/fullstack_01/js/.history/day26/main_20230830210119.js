const span = document.querySelector(".progress-dot");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

// case 1
var progressBarLeft = progressBar.offsetLeft;
progressBar.addEventListener("click", function (e) {
  var pageX = e.pageX;
  progress.style.width = `${pageX - progressBarLeft + 16}px`;
});

var flag = false;
console.log(span);
span.addEventListener("mousedown", function (e) {
  e.preventDefault();
  flag = true;
  console.log("mousedown");
});

document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  console.log(flag);
  if (flag) {
    console.log("mousemove" + e.pageX);
    console.log(e.pageX);
    console.log(progressBarLeft);
    if (
      e.pageX - progressBarLeft <= progressBar.offsetWidth &&
      e.pageX >= progressBarLeft
    ) {
      if (e.pageX - progressBarLeft < progressBar.offsetWidth) {
        progress.style.width = `${e.pageX - progressBarLeft - 16 / 100}%`;
      } else {
        progress.style.width = `${e.pageX - progressBarLeft / 100}%`;
      }
      if (e.pageX - progressBarLeft <= progressBar.offsetWidth * 0.5) {
        progress.style.background = "red";
      } else {
        progress.style.background = "green";
      }
    }
  }
});

document.addEventListener("mouseup", function (e) {
  e.preventDefault();
  flag = false;
});
