var users = ["An", "Tuan", "Dung", "Yen"];

//1.fill(values) => cập nhật lại tất cả các phần tử trong mảng thành 1 giá trị.

// 2.forEach(callback) => duyệt từng pt của mảng và element và index(trong callback). hàm này sẽ không có giá trị trả về
// không dừng được giống for.

// 3.map(callback) => trả về 1 mảng mới. mảng ban đầu có bao nhiêu phần tử thì mảng mới có mấy nhiêu phần tử.
// giá trị c từng phần tử phụ thuộc vào gái trị của hàm  callback(có return).
var newArray = users.map((user, index) => {
  return `<h3>${user}</h3>`;
});

console.log(newArray);

//4 .some() => trả về true, false , nếu trả về true thì cần ít nhất 1 lần loop trả về truethy, và false ngược lại.

var numbers = [1, 3, 5, 2, 9];

console.log(
  numbers.some((items, index) => {
    if (items % 2 === 0) {
      return 1;
    }
  })
);

//5. every() => trả về true, false, nếu trả về true thì tất cả vòng loop trả về true, và false ngược lại.

// kiểm trả mảng trên xem tất cả có phải số lẻ ngay không.

var check = numbers.every((number) => {
  if (number % 2 !== 0) {
    console.log(number);
    return true;
  }
});

console.log(check);

//6. filter(): trả về 1 mảng mới . số lượng phần tử của mảng mới phụ thuộc vào return true của từng phần tử trong mảng ban đầu.

var result = users.filter((user) => {
  return user.length > 2;
});

console.log(result);

var customers = [
  `Lưu Anh Quân`,
  `Dương Đức Hiệp`,
  `Đỗ Hà Chi`,
  `Mai Việt Hoàng`,
  `Nguyễn Xuân Tuấn Anh`,
  `Nguyễn Duy An`,
  `Hoàng Mai Việt `,
];
var keywords = `Hoàng`;
console.log(
  customers.filter((customer) => {
    if (customer.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())) {
      return true;
    }
  })
);

/*
find(): cũng dùng để lọc phần tử trong mảng, 
tuy nhiên nó sẽ trả về giá trị ĐẦU TIÊN tìm thấy ở trong mảng hoặc 
có thể trả về undefined nếu không tìm thấy
*/

var result = customers.findLast((customer) =>
  customer.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())
);

console.log(result);

/**
 * 9.findIndex()
 *  - tìm index dựa vào điều kiện trong callback tìm thấy đầu tiên.
 *
 * 10. findLastIndex(): tìm index dựa vào điều kện trong callback tìm thấy cuối cùng.
 */

var index = customers.findIndex((customer) => {
  customer.toLocaleLowerCase().includes(keywords.toLocaleLowerCase());
});
console.log(index);
