Object.prototype.combine = function (...args) {
  var result = "";
  var currentObj = this;
  if (args.length) {
    args.forEach(function (key) {
      console.log(this);
      result += currentObj[key];
    });
  }
  return result;
};

var user = {
  fullName: "tuan anh",
  email: "tuananh@gmail.com",
};
var student = {
  id: "ct050303",
  classSt: "CT05C",
};
console.log(user.combine("fullName", "email"));
console.log(student.combine("id", "classSt"));
console.log([Object]);
console.log(typeof Object);

const f = function () {
  console.log(dfa);
};

console(typeof f);
