const serverApi = "http://loalhost:3000";
const postUser = async (data) => {
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

postUser({
  name: "User 5",
  email: "user5@gmail.com",
});
