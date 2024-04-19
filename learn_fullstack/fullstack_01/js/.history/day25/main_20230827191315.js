// object_select.parentElement: đẩy lên node cha gần nhất.

var btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(this.parentElement);
});
