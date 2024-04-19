const name = "tuan anh";
const email = "tuananh2212@gamil.com";
const age = 22;

const user = { name, email, age };
console.log(user);

const getInfo = ({ name, eamil, age }) => {
  console.log(name, eamil, age);
};

getInfo({ name, email, age });
