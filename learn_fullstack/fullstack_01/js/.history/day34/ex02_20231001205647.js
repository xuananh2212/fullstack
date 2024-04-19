const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
      const user = users.find(({ id: _id }) => _id === id);

      resolve(user);
    }, 1000);
  });
};

// getUser(1).then((data) => {
//   console.log(data);
// });

async function getUser1(total) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(total);
    }, 10000);
  });
}

const lists = [1, 2, 3];

for (var i = 0; i < lists.length; i++) {
  getUser(items).then((data) => {
    if (i < lists.length) {
      return getUser(i++);
    }
  });
}
