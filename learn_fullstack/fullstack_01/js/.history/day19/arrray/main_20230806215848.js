//  mảng có 1 hàm tạo tên Array.

// duyệt mảng bằng for , for in => duyệt index, for of = > duyet gia tri.

// for (let i in array) {
//   console.log(array[i]);
// }

// xoá phần tử trong mảng theo index.

// var result = [1, 2, 3, 4, 5, 6];

// for (var i in array) {

//  }

console.log(Array.prototype);
let array = [11, 22, 32, 11, 41, 52, 61];
console.log(array.at(0));

// concat(arr2, arr3, ...) =>  nối mảng. không thay đổi mảng ban đầu.

console.log(array.concat([1, 2, 3], [4, 5, 6]));

// them pt vao mang dung concat.
console.log(array.concat("quan", "tuan anh"));

// indexOf(value) => tìm vị trí xuất hiện đầu tiên của pt trong mảng .trả về giá trị index không tìm thấy trả về -1

// 4.lastIndexOf(value) => tìm vị trí cuối cùng.

console.log(array.lastIndexOf(11));

// 5. includes(value) => trả về giá trị true nếu tìm thấy, ngược lại false.

// 6. slice(start, end) => cắt mảng từ giá trị index [start, end-1];

console.log(array.slice(0, 2));

// 7. join(values) => nối các phần tử mảng thành chuỗi.

console.log(array.join(" "));

//
// var str = "nguyen xuan tuan anh";
// console.log(str.split(" ")[str.split(" ").length - 1]);

// 8. push(): thêm phần tử vào cuối mảng và  trả về số lượng phần tử sau khi thêm vào.

var count = array.push("tuan");
console.log(count);

// 9. unshirt(): thêm phần tử vào đầu mảng và trả về số lượng pt sau khi thêm xong.

console.log(array.unshift("hoang"));

// 10.  pop(): => xoá pt cuối mảng và trả về giá trị

console.log(array.pop());

// 11. shift(): => xoa pt dau mang va tra ve gia tri pt vua xoa.

// 12. splice(index, deleteCount, ...array) => xoá number phần tử vị trí thứ index trong mảng.
console.log(array);
var array1 = [1, 2, 3];
console.log(array.splice(0, 0, ...array1));
console.log(array);
