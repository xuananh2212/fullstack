const header = document.querySelector(".header");
console.log(header);
const desc = document.querySelector("main p");
const heightHeader = header.offsetHeight;
var myScroll = 0;
var flag = false;
window.addEventListener("scroll", function (e) {
  if (!flag || window.scrollY === 0) {
    if (window.scrollY > heightHeader) {
      header.classList.add("fixed");
      desc.style.paddingTop = heightHeader + "px";
    } else {
      header.classList.remove("fixed");
      desc.style.paddingTop = 0;
    }
  }

  if (window.scrollY < myScroll) {
    header.classList.remove("fixed");
    flag = true;
  }
  myScroll = window.scrollY;
});
