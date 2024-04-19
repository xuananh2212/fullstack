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
// var isDown = false;
// var outsetX = 0;
// var outsetY = 0;
// btn.addEventListener("mousedown", function (e) {
//   if (e.which === 1) {
//     isDown = true;
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
//   }
// });

// btn.addEventListener("mouseup", function (e) {
//   isDown = false;
// });

// btn.addEventListener("mousemove", function (e) {
//   if (isDown) {
//     this.style.top = `${e.clientY - offsetY}px`;
//     this.style.left = `${e.clientX - offsetX}px`;
//   }
// });

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

const titles = document.querySelector("#title");
console.log(title);
const allTitle = [...document.querySelectorAll("input")];
titles.addEventListener("change", function (e) {
  allTitle.forEach((title, index) => {
    if (index !== 0) {
      if (title.checked === true) {
        title.checked = false;
      } else {
        title.checked = true;
      }
    }
  });
});

allTitle.forEach((title, index) => {
  if (index !== 0) {
    title.addEventListener("change", function (e) {
      if (title.checked === true) {
        titles.checked = false;
        title.checked = true;
      } else {
        titles.checked = false;
        title.checked = false;
      }
    });
  }
});
