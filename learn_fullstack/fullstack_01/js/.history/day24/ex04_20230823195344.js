/**
 *  Event Object.
 *
 */

var btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", function (e) {
    if (!e.ctrlKey) {
      this.style.backgroundColor = "green";
    } else {
      this.style.backgroundColor = "red";
    }
  });
}
