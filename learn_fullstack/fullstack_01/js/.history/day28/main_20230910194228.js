const btnTop = document.querySelector(".btn-top");
console.log(btnTop);

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 10) {
    btnTop.style.display = "block";
  }
});
