// classes
// function User() {
//   (this.name = "tuan anh"),
//     (this.email = "tuananh2212@gmail.com"),
//     (this.getName = function () {
//       return this.name;
//     });
// }

// class User {
// khai bao constructor
// dung de khai bao prototype and value constructor
// chay dau tien khi object duoc khoi tao

//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
// }

// class User1 extends User {
//   constructor(name, email, age) {
//     super(name, email);
//     this.age = age;
//   }
// }

// const auth = new User();
// console.log(auth);

// const user_one = new User1("tuan", "tuananh@gmail.com", 14);
// console.log(user_one);

const root = document.querySelector("#root");
console.log(root);

class Counter {
  constructor() {
    this.count = 0;
  }
  handleCreate = () => {
    console.log(this.count++);
    this.h1.innerText = this.count;
  };
  render() {
    this.h1 = document.createElement("h1");
    h1.innerText = this.count;
    this.button = document.createElement("button");
    button.innerText = "+";
    button.addEventListener("click", this.handleCreate);
    root.append(h1);
    root.append(button);
  }
}

new Counter().render();
