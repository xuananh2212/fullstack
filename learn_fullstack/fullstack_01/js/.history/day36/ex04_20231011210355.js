import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
const root = document.querySelector("#root");
const html = `<div class="container py-3">
            <h2 class="text-center">Đăng nhập</h2>
            <hr>
            <form action="" class="login">
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="email" class="form-control email" placeholder="Email..." />
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="password" class="form-control password" placeholder="Password..." required />
                </div>
                <div class="d-grid">
                    <button class="btn btn-primary">Đăng nhập</button>
                </div>
            </form>

        </div>`;
const welcomeHTML = `<div class="container py-3">
<h2 class="text-center">chào mừng bạn đã quay trở lại</h2>
</div>`;
root.innerHTML = html;
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
  handleLogin({ email, password });
});

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  const { access_token, refresh_token } = tokens;
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
