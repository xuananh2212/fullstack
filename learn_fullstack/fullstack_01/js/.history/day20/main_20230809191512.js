var users = ["An", "Tuan", "Dung", "Yen"];

//fill(values) => cập nhật lại tất cả các phần tử trong mảng thành 1 giá trị.

// forEach(callback) => duyệt từng pt của mảng và element và index(trong callback). hàm này sẽ không có giá trị trả về
// không dừng được giống for.

// map(callback) => trả về 1 mảng mới. mảng ban đầu có bao nhiêu phần tử thì mảng mới có mấy nhiêu phần tử.
// giá trị c từng phần tử phụ thuộc vào gái trị của hàm  callback(có return).

var newArray = users.map((user, index) => {
  return `<h3>${user}</h3>`;
});
