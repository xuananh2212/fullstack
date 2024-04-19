const span = document.querySelector("span");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

// case 1

progressBar.addEventListener("click", function (e) {
  var pageX = e.pageX;
  var progressBarLeft = this.offsetLeft;
  span.style.width = `${pageX - progressBarLeft}px`;
});
