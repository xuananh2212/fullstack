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

var person = new Person();
console.log(person);
