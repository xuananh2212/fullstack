import { config } from "./config.js";
import { client } from "./client.js";

// khởi tạo các giá trị mặc định
const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerText = "";
  if (posts.length) {
    posts.forEach(({ id, title, excerpt }) => {
      const postItem = document.createElement("div");
      postItem.classList.add("post-item");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = "#";
      h2.appendChild(a);
      const p = document.createElement("p");
      p.innerHTML = excerpt;
      postItem.appendChild(h2);
      postItem.appendChild(p);
      postsEl.append(postItem);
    });
  }
};
const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/posts?${queryString}`);
  render(data);
};
let sort = "id";
let order = "desc";
let keyword = "";
let limit = 3;
getPost({
  _sort: sort,
  _order: order,
  _limit: limit,
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = e.target.children[0].value;
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
  });
  e.target.children[0].value = "";
});

const sortByEl = document.querySelector(".sort-by");

sortByEl.addEventListener("change", (e) => {
  const order = e.target.value === "latest" ? "desc" : "asc";
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
  });
});
