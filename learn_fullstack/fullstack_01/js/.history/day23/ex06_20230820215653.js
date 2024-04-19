//tao cac elemnet

var btn = document.querySelector(".btn");
var modalClose = document.querySelector(".close");

var modalBox = document.querySelector(".modal-box");
console.log(btn);
if (btn) {
  btn.addEventListener("click", (e) => {
    modalBox.classList.add("show");
  });
}
