const serverApi = "http://localhost:3000/users";
const postUser = async (data) => {
  const dataUrlEncoded = new URLSearchParams(data).toString();
  const response = await fetch(`${serverApi}`, {
    method: "POST",
    headers: {
      //   "content-type": "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    // body: JSON.stringify(data),
    body: dataUrlEncoded,
  });
  console.log(response);
};

postUser({
  name: "User 6",
  email: "user6@gmail.com",
}).then((data) => {
  console.log(data);
});

const getUser = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
  console.log(response.headers.get("DATE"));
};

getUser();
