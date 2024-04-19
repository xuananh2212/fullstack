/**
 * sự kiện onload => trang web được
 * tải xong tất cả các tài nguyên: audio, img, video,...);
 * */

window.addEventListener("load", function (e) {
  console.log("load");
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

var root = document.querySelector(".root");
root.appendChild(h1);

var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerHTML = "items-1";
ul.append(li);
var li = document.createElement("li");
li.innerHTML = "items-2";
ul.append(li);
root.append(ul);

// thay đổi nội dung , thuộc tính 1 node.
h1.innerText = "hello f88";

// xoá 1 node .
h1.remove();

// vi dụ: xây dựng ứng dụng counter dfung DOM NODE.
var handleIncrement = function () {
  if (+countNumber.data === 10) {
    countNumber.remove();
  }
  countNumber.data++;
  console.log(typeof countNumber.data);
};

var h2Counter = document.createElement("h2");
h2Counter.innerText = "Count: ";
var countNumber = document.createTextNode(0);
h2Counter.append(countNumber);
root.append(h2Counter);

var btnIncre = document.createElement("button");
btnIncre.innerHTML = "+";
root.append(btnIncre);

btnIncre.addEventListener("click", handleIncrement);

var counterComment = document.createComment("counter comment");
root.append(counterComment);

// thêm 1 node mới vào trước 1 node khác.

// insertBefore

var h2Title = document.createElement("h2");
h2Title.innerText = "counter App";
root.insertBefore(h2Title, h2Counter);
