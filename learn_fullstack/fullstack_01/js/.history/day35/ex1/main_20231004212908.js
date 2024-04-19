import { config } from "./config.js";
import { client } from "./client.js";
const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  if (posts.length) {
    posts.forEach(({ id, title, except }) => {
      const postItem = document.createElement("div");
      postItem.classList.add("post-item");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = "#";
      h2.appendChild(a);
      const p = document.createElement("p");
      p.innerHTML = except;
      postItem.appendChild(p);
      postsEl.append(postItem);
    });
  }
};
const getPost = async () => {
  const { data } = await client.get("/posts");
  render(data);
};
getPost();
