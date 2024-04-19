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
    User.data.forEach((user) => {
      if (user.email === email) {
        return false;
      }
    });
    return true;
  }
  add(user) {
    var email = user.email;
    if (User.checkEmail(email)) {
      User.data.push(user);
    } else {
      console.log("email exists");
    }
  }
  toString() {
    return this.name + this.email;
  }
  getInFo(id) {
    const userNow = data.find((index) => index === id);
    if (userNow) {
      console.log(userNow.toString());
    }
  }
}

class Auth extends User {
  constructor(name, email, password) {
    super(name, email, password);
  }
  static getLogin(userCurrent) {
    const userFind = User.data.find(
      (user) =>
        user.email === userCurrent.email &&
        user.password === userCurrent.password
    );
    if (userFind) {
      console.log(userFind.toString());
    } else {
      console.log("đăng nhập không thành công");
    }
  }
  static resgister(userCurrent) {
    userCurrent.add();
  }
  static profile(id) {
    super.getInFo(id);
  }
}

const user1 = new Auth("tuanah", "tuananh@gmail.com", "123");
const user2 = new Auth("tuanah", "tuananh1@gmail.com", "123");
const user3 = new Auth("tuanah", "tuananh2@gmail.com", "123");
console.log(user1);
Auth.resgister(user1);
Auth.resgister(user2);
Auth.resgister(user3);

Auth.getLogin(new Auth("hoang", "hoang@gmail.com", "121312"));
Auth.getLogin(user1);
