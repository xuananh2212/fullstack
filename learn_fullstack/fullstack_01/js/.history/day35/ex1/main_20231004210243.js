import { config } from "./config.js";
import { clinet } from "./client.js";
const { SEVER_API } = config;
console.log(SEVER_API);

const getPosts = async () => {
  const { data } = await clinet.get(`/posts`);
  console.log(data);
};

getPosts();

const render = () => {
    const postsEl = document.querySelector(".posts");
    if (posts.lenght) {
        posts.forEach({ id, title, excerpt } => {
    const postItem = document.createElement("div");
    postItem.className.add(".post-item");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    a.innerText = title;
    a.href = "#";
    h2.appendChild(a);
    const p
            
        });
    }
    
}