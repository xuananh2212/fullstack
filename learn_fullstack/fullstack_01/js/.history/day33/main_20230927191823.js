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
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
