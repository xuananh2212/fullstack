var users = ["An", "Tuan", "Dung", "Yen"];

//1.fill(values) => cập nhật lại tất cả các phần tử trong mảng thành 1 giá trị.

// 2.forEach(callback) => duyệt từng pt của mảng và element và index(trong callback). hàm này sẽ không có giá trị trả về
// không dừng được giống for.

// 3.map(callback) => trả về 1 mảng mới. mảng ban đầu có bao nhiêu phần tử thì mảng mới có mấy nhiêu phần tử.
// giá trị c từng phần tử phụ thuộc vào gái trị của hàm  callback(có return).

//4 .some() => trả về true, false , nếu trả về true thì cần ít nhất 1 lần loop đúng, và false ngược lại

//5. every() => trả về

var newArray = users.map((user, index) => {
  return `<h3>${user}</h3>`;
});

console.log(newArray);

var numbers = [1, 3, 5, 2, 9];

console.log(
  numbers.some((items, index) => {
    if (items % 2 === 0) {
      return true;
    }
  })
);
