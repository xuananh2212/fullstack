/**
 * sự kiện onload => trang web được
 * tải xong tất cả các tài nguyên: audio, img, video,...);
 * */

window.addEventListener("load", function (e) {
  var title = document.querySelector(".title");
  console.log(title);
});

/**
 * - sự kiện DOMcontentLoad: sự kiện cây Dom được hình thành.
 */

window.addEventListener("DOMContentLoad", function (e) {
  console.log("domContentLoad");
});

// tạo Element node

// dùng phương thức : document.createElement("tag");

var h1 = document.createElement("h1");
h1.innerText = "Hello F8";
h1.classList.add("title");
console.log(h1);
// render Element node up UI (user interface).
