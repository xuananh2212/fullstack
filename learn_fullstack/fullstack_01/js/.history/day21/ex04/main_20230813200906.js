Object.prototype.conbine = function (...args) {
  var result = "";
  var currentObj = this;
  if (args.length) {
    args.forEach((key) => {
      result += currentObj[key];
    });
  }
  return result;
};

var user = {
  fullName: "tuan anh",
  email: "tuananh@gmail.com",
  combine: function (...args) {
    var result = "";
    var currentObj = this;
    if (args.length) {
      args.forEach((key) => {
        result += currentObj[key];
      });
    }
    return result;
  },
};

console.log(user.combine("fullName", "email"));
