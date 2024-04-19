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
    }, 5000);
  });
};

// getUser(1).then((data) => {
//   console.log(data);
// });

const lists = [1, 2, 3];
var total = 0;
const getSalary = async () => {
  for (let i = 0; i < lists.length; i++) {
    const user = await getUser(lists[i]);
    total += user.salary;
    console.log(total);
  }
  console.log(total);
};

getSalary();

// const requests = lists.map(async (id) => {
//   return await getUser(id);
// });

// const data = Promise.all(requests);
// data.then((users) => {
//   console.log(users);
//   const total = users.reduce((acc, current) => {
//     return acc + current.salary;
//   }, 0);
//   console.log(total);
// });
