const span = document.querySelector("span");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

// case 1

progressBar.addEventListener("click", function (e) {
  var pageX = e.pageX;
  var progressBarLeft = this.offsetLeft;
  progress.style.width = `${pageX - progressBarLeft}px`;
});

var flag = false;
span.addEventListener("mousedown", function (e) {
  flag = true;
});

span.addEventListener("mousemove", function (e) {
  if (flag) {
    console(e.pageX);
    progress.style.width = `${e.pageX - progressBarLeft}px`;
  }
});
