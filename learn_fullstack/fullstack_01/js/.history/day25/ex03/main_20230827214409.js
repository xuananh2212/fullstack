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
  var itemWidth = carouselInner.clientWidth;
  console.log(itemWidth);
}
