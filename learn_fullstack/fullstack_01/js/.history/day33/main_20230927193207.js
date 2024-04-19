class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  // method static
  static getName() {
    console.log(this);
    return "F8";
  }
  // thuộc tính static
  static displayName = "tuananh@gmail.com hello";
}

// const person = new Person("tuan anh", "tuananh2212@gmail.com");
// console.log(person);
// console.log(Person.getName());
// console.log(Person.displayName);

/*
 */

class User {
  static data = [];
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static checkEmail(email) {
    data.forEach((user) => {
      if (user.email === email) {
        return false;
      }
    });
    return true;
  }
  add() {
    var email = this.email;
    if (User.checkEmail(email)) {
      User.data.push(this);
    } else {
      console.log("email exists");
    }
  }
  toString() {
    return this.name + this.email;
  }
  getInFo(id) {
    const userNow = data.find((user) => user.id === id);
    if (userNow) {
      console.log(userNow.toString());
    }
  }
}

class Auth extends User {
  static getLogin() {}
  static resgister() {}
  static profile(id) {}
}

const user1 = new User("tuanah", "tuananh@gmail.com", "123");
console.log(user1);
user1.add();
console.log(User.data);
