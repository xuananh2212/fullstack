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
  handleLogin({ email, password });
});

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  const { access_token, refresh_token } = tokens;
  console.log(tokens);
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
};

/**
 *  Storeage
 * local Storage : luu tru vinh vien
 * session Storage : luu tru theo phien
 * cookie: luu tru co thoi gan
 *
 */
