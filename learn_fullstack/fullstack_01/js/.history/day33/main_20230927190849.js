class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
}

const person = new Person("tuan anh", "tuananh2212@gmail.com");
console.log(person);
