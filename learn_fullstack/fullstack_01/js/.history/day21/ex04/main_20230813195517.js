var user = {
  fullName: "tuan anh",
  email: "tuananh@gmail.com",
  combine: function (...args) {
    console.log(args);
  },
};

console.log(user.combine("name", "email"));
