const div = document.querySelector("div");

div.addEventListener("input", function (e) {
  console.log(this.innerHTML);
});
