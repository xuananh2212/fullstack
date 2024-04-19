import { config } from "./config.js";
import { client } from "./client.js";
let _sort1 = null;
let _order1 = null;
let keyword = "";
// khởi tạo các giá trị mặc định
const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerText = "";
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
      postItem.appendChild(h2);
      postItem.appendChild(p);
      postsEl.append(postItem);
    });
  }
};
const getPost = async (query = {}) => {
  _sort1 = query._sort;
  _order1 = query._order;

  const queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/posts?${queryString}`);
  render(data);
};
getPost({
  _sort: "id",
  _order: "desc",
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = e.target.children[0].value;
  getPost({
    q: keyword,
    _sort1,
    _order1,
  });
  e.target.children[0].value = "";
});

const sortByEl = document.querySelector(".sort-by");
console.log(sortByEl);
sortByEl.addEventListener("change", (e) => {
  const order = e.target.value === "latest" ? "desc" : "asc";
  getPost({
    q: keyword,
    _sort1,
    _order1,
  });
  getPost({
    _sort: "id",
    _order: order === "latest" ? "desc" : "asc",
  });
});
