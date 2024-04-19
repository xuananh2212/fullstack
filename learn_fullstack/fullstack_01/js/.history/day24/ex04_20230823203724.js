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
var outsetX = 0;
var outsetY = 0;
btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDown = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
});

btn.addEventListener("mouseup", function (e) {
  isDown = false;
});

btn.addEventListener("mousemove", function (e) {
  if (isDown) {
    this.style.top = e.clientY + "px";
    this.style.left = e.clientX + "px";
  }
});
