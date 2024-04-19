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
  isDown = true;
});

btn.addEventListener("mouseup", function (e) {
  isDown = false;
});

btn.addEventListener("mousemove", function (e) {
  if (isDown) {
    console.log("đang kéo");
  }
});
