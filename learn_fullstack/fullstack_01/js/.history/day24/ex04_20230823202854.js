/**
 *  Event Object.
 *
 */

var btn = document.querySelector(".btn");

// if (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e);
//     if (!e.ctrlKey) {
//       this.style.backgroundColor = "green";
//     } else {
//       this.style.backgroundColor = "red";
//     }
//   });
// }
var isDown = false;
btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDown = true;
  }
});

btn.addEventListener("mouseup", function (e) {
  isDown = false;
});

btn.addEventListener("mousemove", function (e) {
  if (isDown) {
    this.style.top = e.clientX;
    console.log(this.style.top);
    this.style.left = e.clientY + "px";
    console.log(e);
    console.log(e.top, e.left);
    console.log(this.style.left);
  }
});
