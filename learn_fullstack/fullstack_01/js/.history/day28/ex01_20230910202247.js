const header = document.querySelector(".header");
const desc = docuement.querySelector("main p");
const heightHeader = header.offsetHeight;

window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > heightHeader) {
    header.classList.add("fixed");
    desc.style.paddingTop = heightHeader + "px";
  }
});
