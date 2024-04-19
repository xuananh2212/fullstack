const btnTop = document.querySelector(".btn-top");
console.log(btnTop);

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  if (window.scrollY > 10) {
    btnTop.style.display = "block";
  }
});

btnTop.addEventListener("click", function (e) {
  var id = setInterval(function () {
    window.scroll(0, window.scrollY - 100);
  }, 10);

  if (window.scrollY < 0) {
    console.log("có chạy được không");
    clearInterval(id);
  }
});
