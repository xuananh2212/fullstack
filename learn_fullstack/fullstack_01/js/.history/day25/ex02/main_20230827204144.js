var productActive = document.querySelector(".products .active");
// console.log(productActive);
// chon thanh phan ke tiep

// nextElementSibling

// console.log(productActive.nextElementSibling);

// console.log(productActive.previousElementSibling);

var btnPrev = document.querySelector(".btn-prev");
var btnNext = document.querySelector(".btn-next");

btnNext.addEventListener("click", function (e) {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = document.querySelector(".products h2");
  }
  nextElement.classList.add(".active");
  productActive.classList.remove("active");
  productActive = nextElement;
});
