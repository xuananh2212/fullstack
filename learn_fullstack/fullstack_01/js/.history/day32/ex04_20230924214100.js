const name = "tuan anh";
const email = "tuananh2212@gamil.com";
const age = 22;

const user = { name, email, age };

console.log(user);

const getInfo = ({ name, email, age }) => {
  console.log(name, email, age);
};

getInfo({ name, email, age });
