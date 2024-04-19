//  mảng có 1 hàm tạo tên Array.

// duyệt mảng bằng for , for in => duyệt index, for of = > duyet gia tri.

let array = [11, 22, 32, 41, 52, 61];

for (let i in array) {
  console.log(array[i]);
}

// xoá phần tử trong mảng theo index.

// var result = [1, 2, 3, 4, 5, 6];

// for (var i in array) {

//  }

console.log(Array.prototype);

console.log(array.at(0));

// concat(arr2, arr3, ...) =>  nối mảng. không thay đổi mảng ban đầu.

console.log(users.concat([1, 2, 3], [4, 5, 6]));
