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
  name = "hung";
  email = "hung@gmail.com";
  age = 32;
  var current = (this.getName = function () {
    return current.name;
  });
};

var person = new Person();
console.log(person);
console.log(person.getName());
