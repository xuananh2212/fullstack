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
    histories: [
      {
        year: 2022,
        nameWork: "cong viec 1",
      },
      {
        year: 2023,
        nameWork: "cong viec 2",
      },
      {
        year: 2024,
        nameWork: "cong viec 3",
      },
    ],
  },
};

console.log(users.getInfor());
console.log(users.jobs.salary);
console.log(users.jobs.histories[1].year);

const jobs = {
  fullname: "hung",
};
const majon = "it";
const jobs1 = { ...jobs, ...majon };
console.log(jobs1);
