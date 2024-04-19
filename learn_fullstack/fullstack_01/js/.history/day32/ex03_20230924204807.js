// destructring object.

const user = {
  name: "tuan anh",
  email: "tuananh@gmail.com",
  age: 18,
};
// change name destuctring.
// const {name:_name , email, age} = user;
// console.log(_name, email, age);

// const {name:_name, email, ...rest} = user;
// console.log(_name, email, rest);

// destructring for array

const userNames = ["tuan anh", "tuananh@gmail.com", 31, "Hồ chí minh"];

// const [username, email , , address, salary=5000] = userNames;
// console.log(username, email, salary);

const [username, email, ...[age, address]] = userNames;
console.log(username, email, age, address);

var customers = [
  { id: 1, name: "nguyen van A" },
  { id: 2, name: "nguyen van b" },
  { id: 3, name: "nguyen van c" },
  { id: 4, name: "nguyen van d" },
  { id: 5, name: "nguyen van e" },
];

// destructring for tham so

var htmll = customers
  .map(({ id, name }) => `<h3>${id}, ${name}</h3>`)
  .join(" ");

console.log(htmll);
