var users = {
  userName: "tuan anh",
  getName: function () {
    return this.userName;
  },
  getInfor: function () {
    return `ten: ${this.userName}`;
  },
};

console.log(users.getInfor());
