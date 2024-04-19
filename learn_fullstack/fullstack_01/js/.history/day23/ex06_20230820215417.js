//tao cac elemnet

var btn = document.querySelector(".btn");

var modalBox = documnet.querySelector(".modal-box");

if (btn) {
  btn.addEventListener("click", (e) => {
    modalBox.classList.add("show");
  });
}
