import { config } from "./config.js";
import { client } from "./client.js";

const { PAGE_LIMIT } = config;

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
const renderPaginate = (totalPage) => {
  const paginateEL = document.querySelectorAll(".paginate");
  const span = document.createElement("span");
  const a = document.createElement("a");
  a.href = "#";
  a.innerHTML = i;
  span.appendChild(a);
  paginateEL.appendChild(span);
};
const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);
  console.log(response);
  const total = response.headers.get("x-total-count");
  const totalPage = Math.ceil(total / PAGE_LIMIT);
  console.log(totalPage);
  renderPaginate(totalPage);
  render(data);
};
let sort = "id";
let order = "desc";
let keyword = "";
let limit = PAGE_LIMIT;
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

// xử lý phân trang.
