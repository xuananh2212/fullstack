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
  },
};

console.log(user.combine("name", "email"));
