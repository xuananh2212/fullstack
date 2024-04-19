let name = "tuan anh";
let email = "tuananh2212@gamil.com";
let age = 22;

const user = { name, email, age };
name = "hung";
console.log(user);

const getInfo = ({ name, email, age }) => {
  console.log(name, email, age);
};

getInfo({ name, email, age });
