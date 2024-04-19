const btnTop = document.querySelector(".btn-top");
console.log(btnTop);

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  if (window.scrollY > 10) {
    btnTop.style.display = "block";
  }
});

btnTop.addEventListener("click", function (e) {
  window.scrollY = 0;
});
