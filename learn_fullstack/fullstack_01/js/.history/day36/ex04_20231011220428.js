import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
const root = document.querySelector("#root");

const getProfile = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = await client.get("/auth/profile", token);
  const nameEl = root.querySelector(".profile .name");
  nameEl.innerHTML = data.name;
};

const render = function () {
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
<ul class="profile list-unstyled d-flex gap-2"><li>chao ban <b><span class="name"></span></b></li> <li><a href="#" class="logout">dang xuat</a></li></ul>
</div>`;
  if (localStorage.getItem("access_token")) {
    root.innerHTML = welcomeHTML;
    // lay thong tin uer
    const logout = root.querySelector(".profile .logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      render();
    });
  } else {
    root.innerHTML = html;
    const logInForm = document.querySelector(".login");
    logInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passwdEl = e.target.querySelector(".password");
      const email = emailEl.value;
      const password = passwdEl.value;
      handleLogin({ email, password });
    });
  }
};
render();
client.setUrl(SERVER_AUTH_API);
const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  const { access_token, refresh_token } = tokens;
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  render();
};
getProfile();
/**
 *  Storeage
 * local Storage : luu tru vinh vien
 * session Storage : luu tru theo phien
 * cookie: luu tru co thoi gan
 *
 */
