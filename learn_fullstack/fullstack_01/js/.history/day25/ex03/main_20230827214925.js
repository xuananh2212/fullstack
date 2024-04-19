var $ = function (tag) {
  return document.querySelector(tag);
};

var carousel = $(".carousel");
var carouselInner = $(".carousel-inner");
var carouselNav = $(".carousel-nav");
var navNext = $(".next");
var navPrev = $(".prev");

// b1: tinh toan so luong anh

var carouselItems = carouselInner.querySelectorAll(".item");

if (carouselItems.length) {
  // lấy chiều rộng của 1 items.
  var itemWidth = carouselInner.clientWidth; // tra ve chieu trong cua elements
  var totalWidth = itemWidth * carouselItems.length;
  console.log(totalWidth);
  console.log(itemWidth);

  // cap nhat css cho carousel inner
  carouselInner.style.width = `${totalWidth}px`;

  // xử lý chuyển slide khi click vao nút next

  navNext.addEventListener("click", function (e) {});
}
