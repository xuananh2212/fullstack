var users = {
  userName: "tuan anh",
  getName: function () {
    return this.userName;
  },
  getInfor: function () {
    return `ten: ${this.userName}`;
  },

  jobs: {
    fullName: "giang vien - hoang an",
    salary: 5000000,
    currency: "USD",
    per: "month",
  },
};

console.log(users.getInfor());

console.log(users.jobs.salary);
