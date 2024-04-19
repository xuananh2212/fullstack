const users = [
  {
    id: 1,
    name: "user 1",
    salary: 1000,
  },
  {
    id: 2,
    name: "user 2",
    salary: 2000,
  },
  {
    id: 3,
    name: "user 3",
    salary: 4000,
  },
  {
    id: 4,
    name: "user 4",
    salary: 11000,
  },
];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(({ id: _id }) => _id === id);
      resolve(user);
    }, 1000);
  });
};

// getUser(1).then((data) => {
//   console.log(data);
// });

const lists = [1, 2, 3];