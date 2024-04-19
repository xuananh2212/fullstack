import { config } from "./config.js";
import { client } from "./client.js";

const { PAGE_LIMIT } = config;
var index = 0;

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
// const goPage = async (currentPage, query) => {
//   const queryString = new URLSearchParams(query).toString();
//   const { response, data } = await client.get(`/posts?${queryString}`);
//   render(data);
// };
const goPage = (page) => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  currentPage = page;
  getPost({
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
    q: keyword,
  });
};
const renderPaginate = (totalPage) => {
  const paginateEL = document.querySelector(".paginate");
  // prev
  var span = document.createElement("span");
  var a = document.createElement("a");
  a.href = "#";
  a.innerHTML = "Prev";
  span.appendChild(a);
  span.addEventListener("click", () => {
    if (currentPage > 0) {
      const spanAll = document.querySelectorAll(".paginate span");
      console.log(spanAll);
      [...spanAll].forEach((span) => span.classList.remove("active"));
      [...spanAll][currentPage].classList.add("active");
      --currentPage;
      goPage(currentPage);
    }
  });
  paginateEL.appendChild(span);
  for (let i = 1; i <= totalPage; i++) {
    const span = document.createElement("span");
    const a = document.createElement("a");
    if (i === currentPage) {
      span.classList.add("active");
    }
    a.href = "#";
    a.innerHTML = i;
    span.appendChild(a);
    paginateEL.appendChild(span);
    span.addEventListener("click", function (e) {
      currentPage = +a.textContent;
      goPage(currentPage);
      const spanAll = document.querySelectorAll(".paginate span");
      console.log(spanAll);
      [...spanAll].forEach((span) => span.classList.remove("active"));
      span.classList.add("active");
    });
  }
  // prev
  var span = document.createElement("span");
  span.addEventListener("click", function (e) {
    if (currentPage <= totalPage) {
      const spanAll = document.querySelectorAll(".paginate span");
      console.log(spanAll);
      [...spanAll].forEach((span) => span.classList.remove("active"));
      [...spanAll][currentPage].classList.add("active");
      goPage(currentPage);
      currentPage++;
    }
  });
  var a = document.createElement("a");
  a.href = "#";
  a.innerHTML = "Next";
  span.appendChild(a);
  paginateEL.appendChild(span);
};
const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);
  console.log(response);
  const total = response.headers.get("x-total-count");
  const totalPage = Math.ceil(total / PAGE_LIMIT);
  if (index === 0) {
    renderPaginate(totalPage);
    index++;
  }

  render(data);
};
let sort = "id";
let order = "desc";
let keyword = "";
let limit = PAGE_LIMIT;
let currentPage = 1;
getPost({
  _sort: sort,
  _order: order,
  _limit: limit,
  _page: currentPage,
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = e.target.children[0].value;
  getPost({
    q: keyword,
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
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
    _limit: limit,
    _page: currentPage,
  });
});

const postNewBtn = document.querySelector(".post-new");
const postForm = document.querySelector(".post-form");
postNewBtn.addEventListener("click", (e) => {
  const form = document.createElement("form");
  const titleEl = document.createElement("input");
  titleEl.placeholder = "tiêu đề bài viết ";
  form.append(titleEl);
  const excerptEl = document.createElement("textarea");
  excerptEl.placeholder = "mô tả ngắn";
  form.append(excerptEl);
  postForm.append(form);
});
