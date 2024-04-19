const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", function (e) {
  if (e.target.scrollTop > 10) {
    btnTop.style.display = "block";
  }
});
