var person = {
  fullname: "tuan anh",
  age: 22,
  email: "tuananh@gmail.com",
};

var user = {
  name: "hung",
  age: 31,
  email: "hung@gmail.com",
};

var Person = function () {
  this.name = "hung";
  this.email = "hung@gmail.com";
  this.age = 32;
  var current = this;
  this.getName = function () {
    return current.name;
  };
};
Person.prototype.getMessage = function () {
  return "fullstack k1";
};

var person = new Person();
console.log(person);
console.log(person.getName());

var person1 = new Person();
person1.name = "John";
console.log(person1, person);

console.log(person1.getMessage());

// kiểm tra 1 object được khởi tạo từ hàm tạo nào.

console.log(person.constructor.name);

const user1 = [];
console.log(user1.constructor.name);

Person.isPerson = function () {
  console.log(this);
};
