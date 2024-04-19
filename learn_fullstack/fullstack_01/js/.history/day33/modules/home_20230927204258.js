export const user = {
  name: "tuan anh",
  email: "tuananh2212@gmail.com",
};
export default getUser;

function getUser() {
  return user;
}

const course = {
  name: "fullstack",
  price: 5000,
};

// 2 cach export named

export { user, course };
