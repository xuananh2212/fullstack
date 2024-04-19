const serverApi = "http://localhost:3000/users";
const postUser = async (data) => {
  const dataUrlEncoded = new URLSearchParams(data).toString();
  const response = await fetch(`${serverApi}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    // body: JSON.stringify(data),
    body: dataUrlEncoded,
  });
  console.log(response);
};

postUser({
  name: "User 5",
  email: "user5@gmail.com",
}).then((data) => {
  console.log(data);
});
