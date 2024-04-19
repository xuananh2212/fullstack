//tao cac elemnet

var btn = document.querySelector(".btn");
var modalClose = document.querySelector(".close");
var overlay = document.querySelector(".overlay");

var modalBox = document.querySelector(".modal-box");
console.log(btn);
if (btn && modalClose && overlay) {
  btn.addEventListener("click", (e) => {
    modalBox.classList.toggle("show");
  });
  modalClose.addEventListener("click", (e) => {
    modalBox.classList.toggle("show");
  });
  overlay.addEventListener("click", (e) => {
    modalBox.classList.toggle("show");
  });
}
