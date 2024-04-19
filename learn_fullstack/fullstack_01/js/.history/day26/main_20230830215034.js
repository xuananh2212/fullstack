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
    if (e.pageX - progressBarLeft <= progressBar.offsetWidth) {
      if (e.pageX - progressBarLeft < progressBar.offsetWidth) {
        progress.style.width = `${
          ((e.pageX - progressBarLeft) / progressBar.offsetWidth) * 100
        }%`;
      } else {
        progress.style.width = `${
          ((e.pageX - progressBarLeft) / progressBar.offsetWidth) * 100
        }%`;
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

var handleChange = function (value) {
  console.log(value);
};

var audio = document.querySelector("audio");
var currentTime = progressBar.previousElementSibling;
console.log(currentTime);
var durationTimeEl = progressBar.nextElementSibling;
console.log(durationTimeEl);
console.log([audio]);
var getTime = function (second) {
  var min = Math.floor(second / 60);
  second = Math.floor(second - min * 60);
  return `${min}: ${second}`;
};
audio.addEventListener("loadeddata", function (e) {
  durationTimeEl.innerHTML = getTime(audio.duration);
});
