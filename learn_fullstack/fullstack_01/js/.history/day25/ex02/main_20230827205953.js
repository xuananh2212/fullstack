var productActive = document.querySelector(".products .active");
var products = document.querySelector(".products");
console.log(productActive);
// console.log(productActive);
// chon thanh phan ke tiep

// nextElementSibling

// console.log(productActive.nextElementSibling);

// console.log(productActive.previousElementSibling);

function handleNext() {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = document.querySelector(".products h2");
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
}

var btnPrev = document.querySelector(".btn-prev");
var btnNext = document.querySelector(".btn-next");

btnNext.addEventListener("click", handleNext);

btnPrev.addEventListener("click", function (e) {
  var nextElement = productActive.previousElementSibling;
  if (nextElement === null) {
    nextElement = document.querySelector(".products h2:nth-child(4)");
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
});

// const id =

products.addEventListener("mouseover", function (e) {
  clearInterval(id);
});

products.addEventListener("mouseout", function (e) {});
var isHover = false;
setInterval(function () {
  if (!isHover) {
    products.add;
  }
}, 1000);
