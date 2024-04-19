export const config = {
  SERVER_API: "https://localhost:3000",
  SERVER_AUTH_API: "https://api.escuelajs.co/api/v1",
  PAGE_LIMIT: 6,
};

const logInForm = document.querySelector(".login");
logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector(".email");
  const passwdEl = e.target.querySelector(".password");
  const email = emailEl.value;
  const password = passwdEl.value;
  console.log(email, password);
});
