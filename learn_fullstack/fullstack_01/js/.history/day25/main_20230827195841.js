// object_select.parentElement: đẩy lên node cha gần nhất.

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   console.log(this.parentElement.parentElement);
// const btnAll = [...document.querySelectorAll(".remove")];
// btnAll.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     btn.parentElement.remove();
//   });
// });

/**
 * 2.children => lấy  danh sách các phần tử con cấp gan nhat.
 */

var menu = document.querySelector(".menu");
var items = [...menu.children];

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(item.children);
    if (item.children.length > 1) {
      [...item.children].forEach((item11) => {
        item11.style.backgroundColor = "yellow";
      });
    } else {
      item.style.color = "red";
    }
  });
});
