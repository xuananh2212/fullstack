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
      const removeBtn = document.createElement("span");
      removeBtn.innerHTML = "xoá";
      removeBtn.classList.add("remove");
      postItem.appendChild(h2);
      postItem.appendChild(p);
      postItem.appendChild(removeBtn);
      removeBtn.addEventListener("click", function () {
        if (confirm("ban co chac chan ?")) {
          removePost(id);
        }
      });
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

const addPost = async (data) => {
  const { response } = await client.post("/posts", data);
  if (response.ok) {
    getPost({
      _sort: "id",
      _order: "desc",
      _limit: limit,
      _page: 1,
    });
    postForm.innerHTML = "";
    postNewBtn.innerHTML = "đăng bài";
  }
};

const removePost = async (id) => {
  const response = await client.delete(`/posts/${id}`);
  if (response.ok) {
    currentPage = 1;
    getPost({
      _sort: "id",
      _order: "desc",
      _limit: limit,
      _page: 1,
    });
    sortByEl.value = "latest";
  }
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
console.log(postForm);

postNewBtn.addEventListener("click", (e) => {
  postNewBtn.innerHTML = "";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  const titleEl = document.createElement("input");
  titleEl.placeholder = "tiêu đề bài viết ";
  titleEl.required = true;
  form.append(titleEl);
  const excerptEl = document.createElement("textarea");
  excerptEl.placeholder = "mô tả ngắn";
  excerptEl.required = true;
  form.append(excerptEl);
  const contentEl = document.createElement("textarea");
  contentEl.placeholder = "nội dụng";
  contentEl.required = true;
  form.append(contentEl);
  const sumbmitBtn = document.createElement("button");
  sumbmitBtn.innerHTML = "save";
  form.append(sumbmitBtn);
  postForm.append(form);
});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit");
  console.log([e.target]);
  const filedList = e.target.children;
  console.log(filedList);
  const [titleEl, excerptEl, contentEl] = Array.from(filedList);
  const title = titleEl.value;
  const excerpt = excerptEl.value;
  const content = contentEl.value;
  console.log(title, excerpt, content);
  addPost({ title, excerpt, content });
  sortByEl.value = "latest";
};
