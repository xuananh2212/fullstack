// classes
// function User() {
//   (this.name = "tuan anh"),
//     (this.email = "tuananh2212@gmail.com"),
//     (this.getName = function () {
//       return this.name;
//     });
// }

class User {
  // khai bao constructor
  // dung de khai bao prototype and value constructor
  // chay dau tien khi object duoc khoi tao

  constructor() {
    this.name = "tuan";
    this.email = "tuananh2212@gmail.com";
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

const auth = new User();
console.log(auth);
