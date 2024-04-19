/**
 *  Event Object.
 *
 */

// var btn = document.querySelector(".btn");

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
    this.style.top = `${e.clientY - offsetY}px`;
    this.style.left = `${e.clientX - offsetX}px`;
  }
});

// var link = document.querySelector("a");

// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(this.href);
// });

// var content = document.querySelector(".content");
// var span = content.querySelector("span");

// content.addEventListener("click", function (e) {
//   console.log(`content clicked`);
//   console.log(e.target);
// });

// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log(`span clicked`);
// });

const checkAll = document.querySelector("#title-all");
const checkItems = [...document.querySelectorAll(".title")];

checkAll.addEventListener("change", function (e) {
  checkItems.forEach((item) => (item.checked = checkAll.checked));
});

checkItems.forEach((item) => {
  item.addEventListener("change", function (e) {
    if (item.checked) {
      var flag = checkItems.every((itemm) => itemm.checked);
      console.log(flag);
      if (flag) {
        checkAll.checked = true;
      } else {
        checkAll.checked = false;
      }
    } else {
      checkAll.checked = false;
    }
  });
});
