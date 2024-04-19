import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
console.log(SERVER_AUTH_API);

client.setUrl(SERVER_AUTH_API);
console.log(client);

const logInForm = document.querySelector(".login");
logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector(".email");
  const passwdEl = e.target.querySelector(".password");
  const email = emailEl.value;
  const password = passwdEl.value;
  console.log(email, password);
});

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login");
  console.log(tokens);
};
