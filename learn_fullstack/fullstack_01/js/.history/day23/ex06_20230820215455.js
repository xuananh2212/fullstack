//tao cac elemnet

var btn = document.querySelector(".btn");

var modalBox = documnet.querySelector(".modal-box");
console.log(btn);
if (btn) {
  btn.addEventListener("click", (e) => {
    modalBox.classList.add("show");
  });
}
