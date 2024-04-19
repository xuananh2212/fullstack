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
var items = menu.children[1].children[1].children;
console.log(items, typeof items);
